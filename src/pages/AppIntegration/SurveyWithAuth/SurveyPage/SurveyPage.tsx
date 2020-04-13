import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const SurveyPage: React.FC = () => {
  // TODO: extract route params

  // TODO: use language from i18n
  // TODO: update i18n language when receiving url parameter


  const [selectedLanguage, setSelectedLanguage] = useState('de');

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ]

  const languageSelector = (
    <Box display="flex">
      <Box flexGrow={1}></Box>
      <Box>
        <LanguageSelector
          selected={selectedLanguage}
          availableLanguages={availableLanguages}
          onChange={(lng) => {
            setSelectedLanguage(lng);
          }}
        />
      </Box>
    </Box>
  )


  return (
    <React.Fragment>
      {languageSelector}
    </React.Fragment>
  );
};

export default SurveyPage;
