import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useLocation, useHistory, useRouteMatch, RouteProps } from 'react-router-dom';
import { survey } from '../../../../test-surveys/qcov';
import { useTranslation } from 'react-i18next';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const availableLanguages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
]

interface ApiQuery {
  type: "getSurvey" | "submitResponse";
  payload: any;
}

const SurveyPage: React.FC<RouteProps> = (props) => {
  const query = useQuery();
  const history = useHistory();
  let { path: rootPath } = useRouteMatch();


  const locale = query.get('locale');
  const locationID = query.get('locationID');
  const surveyKey = query.get('surveyKey');
  const studyKey = query.get('studyKey');
  const accessToken = query.get('accessToken');

  // Language settings
  const [selectedLanguage, setSelectedLanguage] = useState(
    locale ? locale : 'en'
  );
  const { t, i18n } = useTranslation(['common', 'survey']);
  if (selectedLanguage !== i18n.language) {
    i18n.changeLanguage(selectedLanguage);
  }

  // API call states
  const [error, setError] = useState(false);
  const [apiQuery, setApiQuery] = useState<ApiQuery | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  if (!studyKey || !surveyKey || !accessToken) {
    console.error('important query parameter missing');
    if (!error) {
      setError(true);
    }
  }


  // Error handling
  useEffect(() => {
    if (error) {
      let to = rootPath.lastIndexOf('/');
      to = to === -1 ? rootPath.length : to;
      const newUrl = rootPath.substring(0, to);
      history.push(`${newUrl}/error`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  // API calls
  useEffect(() => {
    if (!apiQuery) {
      return;
    }
    console.log('todo: implement api query for');
    console.log(apiQuery);
  }, [apiQuery]);





  const languageSelector = (
    <Box display="flex">
      <Box flexGrow={1}></Box>
      <Box pr={2}>
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

  const loadingWidget = (
    <Box width="100%"
      height="85vh"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Box>
        <Box width="100%">
          <CircularProgress />
        </Box>
        <Box width="100%" mt={2}>
          <Typography variant="body1">
            {t('survey:loadingMsg')}
          </Typography>
        </Box>
      </Box>

    </Box>
  );


  return (
    <React.Fragment>
      {languageSelector}
      {
        isLoading ?
          loadingWidget : null
      }
    </React.Fragment>
  );
};

export default SurveyPage;
