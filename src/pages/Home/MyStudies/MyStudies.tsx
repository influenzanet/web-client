import React, { useState } from 'react';

import { Container } from '@material-ui/core';

import SurveyView from '../../../components/survey/SurveyView/SurveyView';
import { testSurvey } from '../../../test-surveys/test-survey-1';
import { useTranslation } from 'react-i18next';
import { Survey } from 'survey-engine/lib/data_types';

import { useMountEffect } from '../../../hooks';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';

const MyStudies: React.FC = () => {
  const { t, i18n } = useTranslation(['common', 'survey']);

  const [survey, setSurvey] = useState<Survey | undefined>(undefined);

  if (i18n.language !== 'de') {
    i18n.changeLanguage('de');
  }

  useMountEffect(() => {
    //setSurvey(jsonSurvey as Survey);
    setSurvey(testSurvey);
  });

  return (
    <NavigationHomePage title="My Studies">
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
    </NavigationHomePage>
  )
}

export default MyStudies;
