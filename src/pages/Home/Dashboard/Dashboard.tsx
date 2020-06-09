import React from 'react';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';
import { StudyInfos } from '../../../types/study-api';
import { Grid, Typography, Box, useMediaQuery, useTheme } from '@material-ui/core';
import RoundedBox from '../../../components/ui/RoundedBox';
import { useLocalization, useMountEffect } from '../../../hooks';
import styles from './Dashboard.module.scss';
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

const Dashboard: React.FC = () => {
  const localize = useLocalization();
  const { t } = useTranslation(['app']);
  const history = useHistory();

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const fullHeightRef = useFullHeightRef();

  const [loading, getAllStudies] = useUpdateStudies();

  const subscribedStudies = useSelector((state: RootState) => state.study.subscribedStudies);
  const availableStudies = useSelector((state: RootState) => state.study.availableStudies);

  useMountEffect(() => {
    getAllStudies();
  });

  const onStudyItemClicked = (studyInfos: StudyInfos) => {
    history.push(appendParameter(HomePaths.StudyDetail.path, studyInfos.key));
  }

  const studyItem = (studyInfos: StudyInfos) => {
    return (
      <RoundedBox key={studyInfos.key} classNames={[styles.studyItem]} onClick={() => onStudyItemClicked(studyInfos)}>
        <Grid>
          <Typography variant="h6">
            {localize(studyInfos.props.name)}
          </Typography>
          <Typography variant="body1" className={styles.studiesDescription}>
            {localize(studyInfos.props.description)}
          </Typography>
          {(subscribedStudies.findIndex((subscribedStudy) => subscribedStudy.key === studyInfos.key) === -1)
            ? <Typography variant="subtitle1" className={styles.unsubscribedText}>
              {t("app:dashboard.unsubscribedTag")}
            </Typography>
            : <Typography variant="subtitle1" color="secondary">
              {t("app:dashboard.subscribedTag")}
            </Typography>
          }

        </Grid>
      </RoundedBox>
    );
  }

  const studyList = () => {
    return (
      <Box p={2}>
        <Box >
          <Typography variant="h3" color="primary">
            {t("app:dashboard.studiesSubtitle")}
          </Typography>
        </Box>
        <Box>
          <Grid item container direction="column">
            {availableStudies.map((study) => studyItem(study))}
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <NavigationHomePage title={t("app:dashboard.title")}>
      <Grid container ref={fullHeightRef} direction={(mdUp ? "row" : "column")}>
        <Grid item md={mdUp ? 4 : undefined}>
          {studyList()}
        </Grid>
        <Grid item md={mdUp ? 8 : undefined}>
          <Iframe
            url={process.env.REACT_APP_DASHBOARD_IFRAME_URL ? process.env.REACT_APP_DASHBOARD_IFRAME_URL : ''}
            height={mdUp ? "100%" : "1000px"}
            width="100%"
            frameBorder={0}
          ></Iframe>
        </Grid>
      </Grid>
      <LoadingDialog open={loading} />
    </NavigationHomePage>
  )
}

export default Dashboard;
