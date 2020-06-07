import React, { Fragment } from 'react';
import DetailHomePage from '../../../../components/ui/pages/Home/DetailHomePage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useRouteMatch, useParams } from 'react-router';
import { HomePaths } from '../../../../routes';
import { Typography, Grid } from '@material-ui/core';
import { useLocalization, useAsyncCall } from '../../../../hooks';
import RoundedBox from '../../../../components/ui/RoundedBox';
import styles from './StudyDetail.module.scss';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import LoadingDialog from '../../../../components/ui/dialogs/LoadingDialog';
import { enterStudyReq, leaveStudyRequest } from '../../../../api/study-api';
import { useUpdateStudies } from '../../../../hooks/useUpdateStudies';

const StudyDetail: React.FC = () => {
  const { key: urlKey } = useParams();

  const localize = useLocalization();
  const [asyncLoading, asyncCall] = useAsyncCall();
  const [studiesLoading, updateAllStudies] = useUpdateStudies();

  const loading = asyncLoading || studiesLoading;

  const subscribedStudies = useSelector((state: RootState) => state.study.subscribedStudies);
  const availableStudies = useSelector((state: RootState) => state.study.availableStudies);

  const selectedStudy = availableStudies.find((study) => study.key === urlKey);

  const subscribed = (selectedStudy)
    ? (subscribedStudies.findIndex((subscribedStudy) => subscribedStudy.key === selectedStudy.key) !== -1)
    : false;


  const subscribe = () => {
    if (!selectedStudy) return;
    asyncCall(async () => {
      const response = await enterStudyReq(selectedStudy.key);
      console.log(response);
      await updateAllStudies();
    })
  }

  const unsubscribe = () => {
    if (!selectedStudy) return;
    asyncCall(async () => {
      const response = await leaveStudyRequest(selectedStudy.key);
      console.log(response);
      await updateAllStudies();
    })
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
        <Grid container direction="column" spacing={2} alignItems="center" className={styles.pageContainer}>
          <Grid item>
            <Typography variant="h3" color="primary">
              {localize(selectedStudy.props.name)}
            </Typography>
          </Grid>
          <Grid item>
            <RoundedBox>
              <Typography variant="body1">
                {localize(selectedStudy.props.description)}
              </Typography>
            </RoundedBox>
          </Grid>
          <Grid item>
            {(subscribed)
              ? unsubscribeButton()
              : subscribeButton()
            }
          </Grid>
        </Grid>
      </DetailHomePage>
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
