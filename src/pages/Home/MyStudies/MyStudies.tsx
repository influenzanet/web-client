import React, { useState } from 'react';

import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core';

import SurveyView from '../../../components/survey/SurveyView/SurveyView';
import { testSurvey } from '../../../test-surveys/test-survey-1';
import { useTranslation } from 'react-i18next';
import { Survey } from 'survey-engine/lib/data_types';

import { navigationActions } from '../../../store/navigation/navigationSlice';
import { useMountEffect } from '../../../hooks';

const MyStudies: React.FC = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(['common', 'survey']);

  const [survey, setSurvey] = useState<Survey | undefined>(undefined);

  if (i18n.language !== 'de') {
    i18n.changeLanguage('de');
  }

  useMountEffect(() => {
    //setSurvey(jsonSurvey as Survey);
    setSurvey(testSurvey);
    dispatch(navigationActions.setPageTitle('My Studies'));
  });

  return (
    <Container maxWidth="lg">
      {survey ? <SurveyView
        survey={survey}
        languageCode={i18n.language}
        onSubmit={(resp) => {
          console.log(resp)
        }}
        submitBtnText={t('survey:submitBtn')}
        nextBtnText={t('survey:nextBtn')}
        backBtnText={t('survey:backBtn')}
      /> :
        <p>Loading...</p>
      }

      {/* <p>{t('title')}</p> */}
    </Container>
  )
}

export default MyStudies;
