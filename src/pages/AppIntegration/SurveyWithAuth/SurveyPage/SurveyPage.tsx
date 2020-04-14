import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, Container } from '@material-ui/core';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useLocation, useHistory, useRouteMatch, RouteProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { setAccessTokenHeader, getAssignedSurveyRequest, submitSurveyResponseRequest } from '../../../../api/api';
import { SurveyReferenceReq, SurveyAndContextMsg } from '../../../../api/models/study-api';
import SurveyView from '../../../../components/survey/SurveyView/SurveyView';
import { SurveySingleItemResponse, SurveyResponse } from 'survey-engine/lib/data_types';
import moment from 'moment';
import { setShowBackBtn } from '../../../../store/navigation/actions';
import { useDispatch } from 'react-redux';


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

  const dispatch = useDispatch();

  const locale = query.get('locale');
  const locationIDParam = query.get('locationID');
  const surveyKey = query.get('surveyKey');
  const studyKeyParam = query.get('studyKey');
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
  const [loadingMsg, setLoadingMsg] = useState('');
  const isLoading = loadingMsg.length > 0;
  const [surveyWithContext, setSurveyWithContext] = useState<SurveyAndContextMsg | undefined>();

  const [locationID, setLocationID] = useState('');
  const [studyKey, setStudyKey] = useState('');

  // Initialization
  useEffect(() => {
    if (!studyKeyParam || !surveyKey || !accessToken) {
      console.error('important query parameter missing');
      if (!error) {
        setError(true);
      }
    }

    if (accessToken) {
      setAccessTokenHeader(accessToken);
    }
    if (locationIDParam) {
      setLocationID(locationIDParam);
    }
    if (studyKeyParam) {
      setStudyKey(studyKeyParam);
    }

    setApiQuery({
      type: 'getSurvey',
      payload: {
        studyKey: studyKeyParam,
        surveyKey: surveyKey,
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Error handling
  useEffect(() => {
    if (error) {
      let to = rootPath.lastIndexOf('/');
      to = to === -1 ? rootPath.length : to;
      const newUrl = rootPath.substring(0, to);
      dispatch(setShowBackBtn(false));
      history.push(`${newUrl}/error`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);


  const fetchSurveyData = async (apiQuery: ApiQuery) => {
    setLoadingMsg(t('survey:loadingSurveyMsg'));
    try {
      const response = await getAssignedSurveyRequest(apiQuery.payload as SurveyReferenceReq);
      setSurveyWithContext(response.data);
    } catch (error) {
      console.error(error.response);
      setError(true);
    } finally {
      setLoadingMsg('');
    }
  };

  const submitSurveyResponse = async (apiQuery: ApiQuery) => {
    setLoadingMsg(t('survey:submittingSurveyResponsesMsg'));
    try {
      const response = await submitSurveyResponseRequest({
        studyKey: studyKey,
        response: apiQuery.payload as SurveyResponse
      });
      console.log(response);
    } catch (error) {
      console.error(error.response);
      // setError(true);
    } finally {
      setLoadingMsg('');
      let to = rootPath.lastIndexOf('/');
      to = to === -1 ? rootPath.length : to;
      const newUrl = rootPath.substring(0, to);
      history.push(`${newUrl}/survey-end`);
    }
  };

  // API calls
  useEffect(() => {
    if (!apiQuery) {
      return;
    }
    switch (apiQuery.type) {
      case 'getSurvey':
        fetchSurveyData(apiQuery);
        break;
      case 'submitResponse':
        submitSurveyResponse(apiQuery);
        break;
      default:
        console.log('query type not known');
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiQuery]);


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
            {loadingMsg}
          </Typography>
        </Box>
      </Box>

    </Box>
  );

  const onSubmitSurvey = (responses: SurveySingleItemResponse[]) => {
    const surveyResponse: SurveyResponse = {
      key: surveyWithContext ? surveyWithContext.survey.current.surveyDefinition.key : surveyKey ? surveyKey : 'unknown',
      submittedAt: moment().unix(),
      responses: [...responses],
      context: {
        locationID: locationID
      }
    }

    console.log(surveyResponse);
    const query: ApiQuery = {
      type: 'submitResponse',
      payload: surveyResponse,
    }
    dispatch(setShowBackBtn(false));
    setApiQuery(query);
  }

  const onPageChange = (currentPage: number, totalPages: number) => {
    if (currentPage > 0) {
      dispatch(setShowBackBtn(true));
    } else {
      dispatch(setShowBackBtn(false));
    }
  }

  return (
    <Container maxWidth="lg">
      {languageSelector}
      {
        isLoading ?
          loadingWidget :
          surveyWithContext ?
            <SurveyView
              survey={surveyWithContext.survey}
              prefills={surveyWithContext.prefill?.responses}
              context={surveyWithContext.context}
              languageCode={selectedLanguage}
              onSubmit={onSubmitSurvey}
              submitBtnText={t('survey:submitBtn')}
              nextBtnText={t('survey:nextBtn')}
              backBtnText={t('survey:backBtn')}
              onPageChange={onPageChange}
            />
            : null
      }
    </Container>
  );
};

export default SurveyPage;
