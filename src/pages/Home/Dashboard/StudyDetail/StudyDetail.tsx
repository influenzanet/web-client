import React, { Fragment, useState } from 'react';
import DetailHomePage from '../../../../components/ui/pages/Home/DetailHomePage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useRouteMatch, useParams } from 'react-router';
import { HomePaths } from '../../../../routes';
import { Typography, Grid, Container } from '@material-ui/core';
import { useLocalization, useAsyncCall, useMountEffect } from '../../../../hooks';
import RoundedBox from '../../../../components/ui/RoundedBox';
import styles from './StudyDetail.module.scss';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import LoadingDialog from '../../../../components/ui/dialogs/LoadingDialog';
import { enterStudyReq, leaveStudyRequest, getSurveyInfosForStudyReq, getAllAssignedSurveysReq } from '../../../../api/study-api';
import { useUpdateStudies } from '../../../../hooks/useUpdateStudies';
import { SurveyInfo, AssignedSurvey, SurveyInfos } from '../../../../types/study-api';

const StudyDetail: React.FC = () => {
  const { key: urlKey } = useParams();

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

  const notFoundPage = () => {
    return (
      <DetailHomePage title="Study Not Found">
        <Typography variant="h3">
          Study not found!
      </Typography>
      </DetailHomePage>
    );
  }

  const studyPage = () => {
    if (!selectedStudy) return null;
    return (
      <DetailHomePage title={localize(selectedStudy.props.name) ?? ""}>
        <Container maxWidth="md">
          <Grid container direction="column" spacing={2} alignItems="stretch" className={styles.pageContainer}>
            <Grid item>
              <Typography variant="h3" color="primary" className={styles.centerText}>
                {localize(selectedStudy.props.name)}
              </Typography>
            </Grid>
            <Grid item>
              <RoundedBox>
                <Typography variant="body1" className={styles.centerText}>
                  {localize(selectedStudy.props.description)}
                </Typography>
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
              {(subscribed)
                ? unsubscribeButton()
                : subscribeButton()
              }
            </Grid>
          </Grid>
        </Container>
      </DetailHomePage>
    );
  }

  const surveyItem = (surveyInfos: SurveyInfo) => {
    return (
      <RoundedBox key={surveyInfos.key} classNames={[styles.surveyItem]}>
        <Grid>
          <Typography variant="h6">
            {localize(surveyInfos.name)}
          </Typography>
          <Typography variant="body1" className={styles.surveyDescription}>
            {localize(surveyInfos.description)}
          </Typography>
        </Grid>
      </RoundedBox>
    );
  }

  const surveyList = () => {
    return (
      <Grid container spacing={2} className={styles.studiesContainer}>
        <Grid item>
          <Typography variant="h4" color="secondary">
            Surveys
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
      <RoundedButton color="primary" className={styles.button} onClick={subscribe}>
        Subscribe
      </RoundedButton>
    );
  }

  const unsubscribeButton = () => {
    return (
      <RoundedButton color="secondary" className={styles.button} onClick={unsubscribe}>
        Unsubscribe
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
