import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import { Box, CircularProgress, Container, Typography } from '@material-ui/core';
import SurveyView from '../../../../components/survey/SurveyView/SurveyView';
import { Survey } from 'survey-engine/lib/data_types';
import { useLocation, useHistory } from 'react-router-dom';
import { demoSurvey } from '../../../../test-surveys/demo-survey';

const availableLanguages = [
  { code: 'en', label: '🇬🇧 English' },
  { code: 'de', label: '🇩🇪 Deutsch' },
]

const SurveyComp: React.FC = () => {
  // Language settings
  const [selectedLanguage, setSelectedLanguage] = useState('de');
  const [survey, setSurvey] = useState<Survey | undefined>();

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setSurvey(
        demoSurvey
      );
    }, 600);
  }, [])

  const languageSelector = (
    <Box display="flex" justifyContent="flex-end">
      <LanguageSelector
        selected={selectedLanguage}
        availableLanguages={availableLanguages}
        onChange={(lng) => {
          setSelectedLanguage(lng);
        }}
      />
    </Box>
  )

  return (
    <Container maxWidth="md">
      {languageSelector}
      {survey ? <SurveyView
        survey={survey}
        languageCode={selectedLanguage}
        onSubmit={(resp) => {
          console.log(resp);
          const url = location.pathname.slice(0, location.pathname.lastIndexOf('/') + 1) + 'survey-end';
          history.replace(url);
        }}
        submitBtnText={'Submit'}
        nextBtnText={'Next'}
        backBtnText={'Previous'}
      /> : <Box textAlign="center" mt={12} p={12}>
          <Typography>
            Loading...
          </Typography>
          <Box pt={1}>
            <CircularProgress />
          </Box>
        </Box>}
    </Container>
  );
};

export default SurveyComp;
