import React, { useState } from 'react';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';
import { StudyInfos, AssignedSurvey } from '../../../types/study-api';
import { Grid, Typography, Box, useMediaQuery, useTheme, Chip } from '@material-ui/core';
import RoundedBox from '../../../components/ui/RoundedBox';
import { useLocalization, useMountEffect, useAsyncCall, useStyles } from '../../../hooks';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useHistory } from 'react-router';
import { appendParameter } from '../../../routes/utils/routeUtils';
import { HomePaths } from '../../../routes';
import { useUpdateStudies } from '../../../hooks/useUpdateStudies';
import LoadingDialog from '../../../components/ui/dialogs/LoadingDialog';
import Iframe from 'react-iframe';
import { useFullHeightRef } from '../../../hooks/useFullHeightRef';
import { enterStudyReq, getAllAssignedSurveysReq } from '../../../api/study-api';

const Dashboard: React.FC = () => {
  const classes = useStyles(theme => ({
    studiesContainer: {
      padding: 16,
    },
    studyItem: {
      cursor: "pointer",
      userSelect: "none",
      margin: "10px 0",
    },
    unsubscribedText: {
      color: "grey",
    },
    studiesDescription: {
      // whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    contentFrame: {
      backgroundColor: "#cacaca",
    },
    tags: {
      marginTop: 4,
    },
    availableSurveys: {
      marginTop: 4,
    }
  }));

  const localize = useLocalization();
  const { t } = useTranslation(['app']);
  const history = useHistory();

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const fullHeightRef = useFullHeightRef();

  const [studiesLoading, getAllStudies] = useUpdateStudies();
  const [asyncLoading, asyncCall] = useAsyncCall();
  const [allAssignedSurveys, setAllAssignedSurveys] = useState<AssignedSurvey[]>([]);

  const loading = studiesLoading || asyncLoading;

  const subscribedStudies = useSelector((state: RootState) => state.study.subscribedStudies);
  const availableStudies = useSelector((state: RootState) => state.study.availableStudies);

  const subscribedToStudy = (studyInfos: StudyInfos) => {
    return subscribedStudies.findIndex((subscribedStudy) => subscribedStudy.key === studyInfos.key) !== -1;
  }

  const unsubscribedStudies = availableStudies.filter((study) => !subscribedToStudy(study));

  useMountEffect(() => {
    getInfosFromServer();
  });

  const getInfosFromServer = async () => {
    await getAllStudies();
    await getAllAssignedSurveys();
  }

  const getAllAssignedSurveys = async () => {
    await asyncCall(async () => {
      const response = await getAllAssignedSurveysReq();
      setAllAssignedSurveys(response.data.surveys ?? []);
    });
  }

  if (!loading) {
    availableStudies.forEach((availableStudy) => {
      if (availableStudy.props.systemDefaultStudy && !subscribedToStudy(availableStudy)) {
        asyncCall(async () => {
          await enterStudyReq(availableStudy.key);
          await getAllStudies();
        })
      }
    });
  }

  const onStudyItemClicked = (studyInfos: StudyInfos) => {
    history.push(appendParameter(HomePaths.StudyDetail.path, studyInfos.key));
  }

  const tags = (studyInfos: StudyInfos) => {
    if (!studyInfos.props.tags) return null;

    return (
      <Grid container item direction="row" spacing={1} className={classes.tags}>
        {
          studyInfos.props.tags.map((tag, index) => {
            return (
              <Grid item key={index}>
                <Chip label={localize(tag.label)} color="secondary" size="small" />
              </Grid>
            );
          })
        }
      </Grid>
    );
  }

  const availableSurveys = (count: number) => {
    return (
      <Grid item container direction="row" spacing={1} justify="center" alignItems="center" className={classes.availableSurveys}>
        <Grid item>
          <Typography color="secondary" variant="h6">
            {count}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">
            {t("app:dashboard.availableSurveysText")}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  const studyItem = (studyInfos: StudyInfos) => {
    const assignedSurveys = allAssignedSurveys.filter((survey) => survey.studyKey === studyInfos.key).length;
    return (
      <RoundedBox key={studyInfos.key} classNames={[classes.studyItem]} onClick={() => onStudyItemClicked(studyInfos)}>
        <Grid>
          <Typography variant="h6">
            {localize(studyInfos.props.name)}
          </Typography>
          <Typography variant="body1" className={classes.studiesDescription}>
            {localize(studyInfos.props.description)}
          </Typography>
          {subscribedToStudy(studyInfos)
            ? availableSurveys(assignedSurveys)
            : tags(studyInfos)
          }

        </Grid>
      </RoundedBox>
    );
  }

  const studyList = (title: string, studies: StudyInfos[]) => {
    return (
      <Box>
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
        <Grid item container direction="column">
          {studies.map((study) => studyItem(study))}
        </Grid>
      </Box>
    );
  }

  return (
    <NavigationHomePage title={t("app:dashboard.title")}>
      <Grid container ref={fullHeightRef} direction={(mdUp ? "row" : "column")}>
        <Grid item md={mdUp ? 4 : undefined} >
          <Box p={2}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                {studyList(t("app:dashboard.subscribedStudiesSubtitle"), subscribedStudies)}
              </Grid>
              <Grid item>
                {studyList(t("app:dashboard.unsubscribedStudiesSubtitle"), unsubscribedStudies)}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={mdUp ? 8 : undefined}>
          <Box
            position="relative"
            height={mdUp ? "100%" : "1000px"}
            width="100%">
            {
              !process.env.REACT_APP_DASHBOARD_IFRAME_URL ? <Box position="absolute" pt="40vh" width="100%" textAlign="center">
                <Typography variant="h5">
                  {'Content not defined'}
                </Typography>
              </Box> : null
            }
            <Iframe
              url={process.env.REACT_APP_DASHBOARD_IFRAME_URL ? process.env.REACT_APP_DASHBOARD_IFRAME_URL : ''}
              height={mdUp ? "100%" : "1000px"}
              width="100%"
              frameBorder={0}
              className={classes.contentFrame}
            >
            </Iframe>
          </Box>
        </Grid>
      </Grid>
      <LoadingDialog open={loading} />
    </NavigationHomePage>
  )
}

export default Dashboard;
