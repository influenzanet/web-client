import React, { useState } from 'react';

import { Container } from '@material-ui/core';

import SurveyView from '../../../components/survey/SurveyView/SurveyView';
import { useTranslation } from 'react-i18next';
import { SurveySingleItemResponse, SurveyResponse } from 'survey-engine/lib/data_types';

import { useMountEffect, useQuery, useAsyncCall, useLocalization } from '../../../hooks';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';
import { SurveyAndContextMsg } from '../../../types/study-api';
import LoadingDialog from '../../../components/ui/dialogs/LoadingDialog';
import { getAssignedSurveyRequest, submitSurveyResponseRequest } from '../../../api/study-api';
import moment from 'moment';
import { useHistory } from 'react-router';
import { HomePaths } from '../../../routes';
import { useDispatch } from 'react-redux';
import { navigationActions } from '../../../store/navigation/navigationSlice';

export const surveyKeyQueryKey = "surveyKey";
export const studyKeyQueryKey = "studyKey";

const MyStudies: React.FC = () => {
  const localize = useLocalization();
  const { t, i18n } = useTranslation(['common', 'survey']);
  const history = useHistory();

  const dispatch = useDispatch();

  const query = useQuery();

  const [studyKeyParam,] = useState(query.get(studyKeyQueryKey));
  const [surveyKeyParam,] = useState(query.get(surveyKeyQueryKey));

  const [loading, asyncCall] = useAsyncCall();

  const [surveyWithContext, setSurveyWithContext] = useState<SurveyAndContextMsg | undefined>();

  useMountEffect(() => {
    getSurvey();
  });

  const getSurvey = () => {
    if (!studyKeyParam || !surveyKeyParam) return;
    asyncCall(async () => {
      const response = await getAssignedSurveyRequest({
        studyKey: studyKeyParam,
        surveyKey: surveyKeyParam,
      });
      setSurveyWithContext(response.data);
    });
  }

  const submitSurvey = async (responses: SurveySingleItemResponse[]) => {
    const surveyResponse: SurveyResponse = {
      key: surveyWithContext ? surveyWithContext.survey.current.surveyDefinition.key : surveyKeyParam ? surveyKeyParam : 'unknown',
      submittedAt: moment().unix(),
      responses: [...responses],
      context: {
        engineVersion: process.env.REACT_APP_SURVEY_ENGINE_VERSION,
      }
    }

    await asyncCall(async () => {
      await submitSurveyResponseRequest({
        studyKey: studyKeyParam ? studyKeyParam : "unknown",
        response: surveyResponse,
      });
    });


    history.push(HomePaths.Dashboard);
    dispatch(navigationActions.openSurveySavedSnackbar());
  }

  const onSurveySubmitClicked = (responses: SurveySingleItemResponse[]) => {
    submitSurvey(responses);
  }

  return (
    <NavigationHomePage title={localize(surveyWithContext?.survey.name) ?? ""}>
      <Container maxWidth="lg">
        {surveyWithContext
          ? <SurveyView
            survey={surveyWithContext.survey}
            prefills={surveyWithContext.prefill?.responses}
            context={surveyWithContext.context}
            languageCode={i18n.language}
            onSubmit={onSurveySubmitClicked}
            submitBtnText={t('survey:submitBtn')}
            nextBtnText={t('survey:nextBtn')}
            backBtnText={t('survey:backBtn')}
          />
          : null
        }
        <LoadingDialog open={loading} />
      </Container>
    </NavigationHomePage>
  )
}

export default MyStudies;
