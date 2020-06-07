import React, { useState } from 'react';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';
import { useAsyncCall, useMountEffect } from '../../../hooks';
import LoadingDialog from '../../../components/ui/dialogs/LoadingDialog';
import { StudyInfos } from '../../../types/study-api';
import { getStudiesForUserReq, getAllAvailableStudiesReq } from '../../../api/study-api';
import { Grid, Typography } from '@material-ui/core';
import RoundedBox from '../../../components/ui/RoundedBox';
import { useLocalization } from '../../../hooks';
import styles from './Dashboard.module.scss';
import { useTranslation } from 'react-i18next';


const Dashboard: React.FC = () => {
  const localize = useLocalization();
  const { t } = useTranslation(['app']);

  const [loading, asyncCall] = useAsyncCall();
  const [subscribedStudies, setSubscribedStudies] = useState<StudyInfos[]>([]);
  const [availableStudies, setAvailableStudies] = useState<StudyInfos[]>([]);

  useMountEffect(() => {
    getAllStudies();
  });

  const getAllStudies = async () => {
    await getSubscribedStudies();
    await getAvailableStudies();
  }

  const getSubscribedStudies = async () => {
    await asyncCall(async () => {
      const response = await getStudiesForUserReq();
      setSubscribedStudies((response.data.studies) ? response.data.studies : []);
    });
  }

  const getAvailableStudies = async () => {
    await asyncCall(async () => {
      const response = await getAllAvailableStudiesReq();
      setAvailableStudies((response.data.studies) ? response.data.studies : []);
    });
  }

  const studyItem = (studyInfos: StudyInfos) => {
    return (
      <RoundedBox key={studyInfos.key} classNames={[styles.studyItem]}>
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
      <Grid container spacing={2} className={styles.studiesContainer}>
        <Grid item>
          <Typography variant="h3" color="primary">
            {t("app:dashboard.studiesSubtitle")}
          </Typography>
        </Grid>
        <Grid item container direction="row">
          {availableStudies.map((study) => studyItem(study))}
        </Grid>
      </Grid>
    );
  }

  return (
    <NavigationHomePage title={t("app:dashboard.title")}>
      <LoadingDialog open={loading} />
      {studyList()}
    </NavigationHomePage>
  )
}

export default Dashboard;
