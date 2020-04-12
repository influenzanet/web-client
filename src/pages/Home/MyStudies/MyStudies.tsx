import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';
import { Container } from '@material-ui/core';

import SurveyView from '../../../components/survey/SurveyView/SurveyView';
import { testSurvey } from '../../../test-surveys/test-survey-1';
import { survey } from '../../../test-surveys/qcov';
import SurveyEndView from '../../../components/survey/SurveyEndView/SurveyEndView';

import { useTranslation } from 'react-i18next';

const MyStudies: React.FC = () => {
  const dispatch = useDispatch();
  const { t, i18n, ready } = useTranslation(['common', 'survey']);

  if (i18n.language !== 'de') {
    i18n.changeLanguage('de');
  }

  useEffect(() => {

    // const survey = renderSurvey({ surveyDef: testSurvey});
    dispatch(setPageTitle('My Studies'));
  });

  return (
    <Container maxWidth="lg">
      <SurveyView
        survey={testSurvey}
        languageCode={i18n.language}
        submitBtnText={t('survey:submitBtn')}
        nextBtnText={t('survey:nextBtn')}
        backBtnText={t('survey:backBtn')}
      />
      {/* <p>{t('title')}</p> */}
    </Container>
  )
}

export default MyStudies;
