import api from './api';
import { SurveyReferenceReq, SurveyAndContextMsg, SurveyResponseReq } from '../types/study-api';

// Study API
export const getAssignedSurveyRequest = (payload: SurveyReferenceReq) => api.post<SurveyAndContextMsg>('/v1/studies/study/get-assigned-survey', payload);
export const submitSurveyResponseRequest = (payload: SurveyResponseReq) => api.post('/v1/studies/study/submit-response', payload);
