import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useLocation, useHistory, useRouteMatch, RouteProps } from 'react-router-dom';
import { survey } from '../../../../test-surveys/qcov';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
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

  const [error, setError] = useState(false);

  console.log(locale)
  console.log(locationID)
  console.log(surveyKey)
  console.log(studyKey)
  console.log(accessToken)

  // TODO: use language from i18n
  // TODO: update i18n language when receiving url parameter

  if (!studyKey || !surveyKey || !accessToken) {
    if (!error) {
      setError(true);
    }

  }

  useEffect(() => {
    if (error) {
      let to = rootPath.lastIndexOf('/');
      to = to === -1 ? rootPath.length : to;
      const newUrl = rootPath.substring(0, to);
      history.push(`${newUrl}/error`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);



  const [selectedLanguage, setSelectedLanguage] = useState('de');

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ]

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


  return (
    <React.Fragment>
      {languageSelector}
    </React.Fragment>
  );
};

export default SurveyPage;
