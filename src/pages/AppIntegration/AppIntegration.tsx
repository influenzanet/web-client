import React, { useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Box } from '@material-ui/core';
import LanguageSelector from './LanguageSelector/LanguageSelector';


const AppIntegration: React.FC = () => {
  // TODO: extract route params
  // TOD

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
      <AppBar />
      {languageSelector}
      <Switch>

        <Redirect to="/app-integration"></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default AppIntegration;
