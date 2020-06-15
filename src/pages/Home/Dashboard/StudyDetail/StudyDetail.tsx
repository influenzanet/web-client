import React, { Fragment, useState } from 'react';
import DetailHomePage from '../../../../components/ui/pages/Home/DetailHomePage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useParams, useHistory } from 'react-router';
import { HomePaths } from '../../../../routes';
import { Typography, Grid, Container } from '@material-ui/core';
import { useLocalization, useAsyncCall, useMountEffect, useStyles } from '../../../../hooks';
import RoundedBox from '../../../../components/ui/RoundedBox';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import LoadingDialog from '../../../../components/ui/dialogs/LoadingDialog';
import { enterStudyReq, leaveStudyRequest, getSurveyInfosForStudyReq, getAllAssignedSurveysReq } from '../../../../api/study-api';
import { useUpdateStudies } from '../../../../hooks/useUpdateStudies';
import { SurveyInfo, AssignedSurvey } from '../../../../types/study-api';
import { studyKeyQueryKey, surveyKeyQueryKey } from '../../MyStudies/MyStudies';
import { useTranslation } from 'react-i18next';
import FlexGrow from '../../../../components/common/FlexGrow';

const StudyDetail: React.FC = () => {
  const classes = useStyles(theme => ({
    pageContainer: {
      padding: 16,
    },
    button: {
      fontSize: "1.1em",
    },
    centerText: {
      textAlign: "center",
    },
    surveyItem: {
      cursor: "pointer",
      userSelect: "none",
    },
    surveyDescription: {
      maxWidth: "0300px",
    },
    dates: {
      color: "grey",
      marginTop: 8,
    },
    dateText: {
      marginLeft: 4,
    }
  }));

  const { key: urlKey } = useParams();

  const { t } = useTranslation(['app']);
  const history = useHistory();

  const localize = useLocalization();
  const [asyncLoading, asyncCall] = useAsyncCall();
  const [studiesLoading, updateAllStudies] = useUpdateStudies();
  const [surveyInfos, setSurveyInfos] = useState<SurveyInfo[]>([]);
  const [allAssignedSurveys, setAllAssignedSurveys] = useState<AssignedSurvey[]>([]);

  const loading = asyncLoading || studiesLoading;

  const subscribedStudies = useSelector((state: RootState) => state.study.subscribedStudies);
  const availableStudies = useSelector((state: RootState) => state.study.availableStudies);

  const selectedStudy = availableStudies.find((study) => study.key === urlKey);

  const subscribed = (selectedStudy)
    ? (subscribedStudies.findIndex((subscribedStudy) => subscribedStudy.key === selectedStudy.key) !== -1)
    : false;

  const assignedSurveys = (allAssignedSurveys)
    ? allAssignedSurveys.filter((assignedSurvey) => {
      if (!selectedStudy) return false;
      return assignedSurvey.studyKey === selectedStudy.key;
    })
    : [];
  ;

  const assignedSurveyInfos = surveyInfos.filter((surveyInfos) => assignedSurveys.findIndex((as) => as.surveyKey === surveyInfos.key) !== -1);

  useMountEffect(() => {
    getSurveysFromServer();
  });

  const subscribe = () => {
    if (!selectedStudy) return;
    asyncCall(async () => {
      const response = await enterStudyReq(selectedStudy.key);
      setAllAssignedSurveys(response.data.surveys);
      await updateAllStudies();
    })
  }

  const unsubscribe = () => {
    if (!selectedStudy) return;
    asyncCall(async () => {
      await leaveStudyRequest(selectedStudy.key);
      await updateAllStudies();
    })
  }

  const getSurveysFromServer = async () => {
    await updateAllStudies();
    await getSurveyInfos();
    await getAllAssignedSurveys();
  }

  const getSurveyInfos = () => {
    if (!selectedStudy) return;
    asyncCall(async () => {
      const response = await getSurveyInfosForStudyReq(selectedStudy.key);
      setSurveyInfos(response.data.infos);
    });
  }

  const getAllAssignedSurveys = () => {
    asyncCall(async () => {
      const response = await getAllAssignedSurveysReq();
      setAllAssignedSurveys(response.data.surveys);
    });
  }

  const onSurveyItemClicked = (surveyInfo: SurveyInfo) => {
    history.push(HomePaths.MyStudies + `?${studyKeyQueryKey}=${selectedStudy?.key}&${surveyKeyQueryKey}=${surveyInfo.key}`)
  }

  const startDate = () => {
    if (selectedStudy && selectedStudy.props.startDate) {
      return (
        <Fragment>
          <Typography variant="caption">
            {t("app:studyDetailPage.startDateLabel")}
          </Typography>
          <Typography className={classes.dateText}>
            {t("app:date", { date: new Date(selectedStudy.props.startDate * 1000) })}
          </Typography>
        </Fragment>
      );
    } else {
      return null;
    }
  }

  const endDate = () => {
    if (selectedStudy && selectedStudy.props.endDate) {
      return (
        <Fragment>
          <Typography variant="caption">
            {t("app:studyDetailPage.endDateLabel")}
          </Typography>
          <Typography className={classes.dateText}>
            {t("app:date", { date: new Date(selectedStudy.props.endDate * 1000) })}
          </Typography>
        </Fragment>
      );
    } else {
      return null;
    }
  }

  const dates = () => {
    if (!selectedStudy) return null;
    return (selectedStudy.props.startDate || selectedStudy.props.endDate)
      ? <Grid container justify="space-around" alignItems="center" className={classes.dates}>
        <FlexGrow />
        {startDate()}
        {
          selectedStudy.props.startDate && selectedStudy.props.endDate
            ? <FlexGrow />
            : null
        }
        {endDate()}
        <FlexGrow />
      </Grid>
      : null;
  }

  const notFoundPage = () => {
    return (
      <DetailHomePage title="Study Not Found">
        <Typography variant="h3">
          {t("app:studyDetailPage.studyNotFoundMessage")}
        </Typography>
      </DetailHomePage>
    );
  }

  const studyPage = () => {
    if (!selectedStudy) return null;
    return (
      <DetailHomePage title={localize(selectedStudy.props.name) ?? ""}>
        <Container maxWidth="md">
          <Grid container direction="column" spacing={2} alignItems="stretch" className={classes.pageContainer}>
            <Grid item>
              <Typography variant="h3" color="primary" className={classes.centerText}>
                {localize(selectedStudy.props.name)}
              </Typography>
            </Grid>
            <Grid item>
              <RoundedBox>
                <Typography variant="body1" className={classes.centerText}>
                  {localize(selectedStudy.props.description)}
                </Typography>
                {dates()}
              </RoundedBox>
            </Grid>
            {
              (subscribed)
                ?
                <Grid item container>
                  {surveyList()}
                </Grid>
                : null
            }

            <Grid item style={{ alignSelf: "center" }}>
              {(selectedStudy.props.systemDefaultStudy)
                ? null
                : (subscribed)
                  ? unsubscribeButton()
                  : subscribeButton()
              }
            </Grid>
          </Grid>
        </Container>
      </DetailHomePage>
    );
  }

  const surveyItem = (surveyInfo: SurveyInfo) => {
    return (
      <RoundedBox key={surveyInfo.key} classNames={[classes.surveyItem]} onClick={() => onSurveyItemClicked(surveyInfo)}>
        <Grid>
          <Typography variant="h6">
            {localize(surveyInfo.name)}
          </Typography>
          <Typography variant="body1" className={classes.surveyDescription}>
            {localize(surveyInfo.description)}
          </Typography>
        </Grid>
      </RoundedBox>
    );
  }

  const surveyList = () => {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h4" color="secondary">
            {t("app:studyDetailPage.surveysSubtitle")}
          </Typography>
        </Grid>
        <Grid item container direction="row">
          {assignedSurveyInfos.map((survey) => surveyItem(survey))}
        </Grid>
      </Grid>
    );
  }

  const subscribeButton = () => {
    return (
      <RoundedButton color="primary" className={classes.button} onClick={subscribe}>
        {t("app:studyDetailPage.subscribeButtonLabel")}
      </RoundedButton>
    );
  }

  const unsubscribeButton = () => {
    return (
      <RoundedButton color="secondary" className={classes.button} onClick={unsubscribe}>
        {t("app:studyDetailPage.unsubscribeButtonLabel")}
      </RoundedButton>
    );
  }

  return (
    <Fragment>
      {(selectedStudy)
        ? studyPage()
        : notFoundPage()
      }
      <LoadingDialog open={loading} />
    </Fragment>
  );
};

export default StudyDetail;
