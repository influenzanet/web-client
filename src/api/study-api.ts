import authApiInstance from './instances/authApiInstance';
import { SurveyReferenceReq, SurveyAndContextMsg, SurveyResponseReq, AssignedSurveys } from '../types/study-api';

// Study API
export const enterStudyReq = (studyKey: string) => authApiInstance.post<AssignedSurveys>('/v1/studies/study/enter', { studyKey });
export const leaveStudyRequest = (studyKey: string) => authApiInstance.post<AssignedSurveys>('/v1/studies/study/leave', { studyKey });
export const getAllAssignedSurveysReq = () => authApiInstance.get<AssignedSurveys>('/v1/studies/all-assigned-surveys');
export const postponeSurveyReq = (studyKey: string, surveyKey: string, delay: number) => authApiInstance.post<AssignedSurveys>('/v1/studies/study/postpone-survey', { studyKey, surveyKey, delay });
export const getAssignedSurveyRequest = (payload: SurveyReferenceReq) => authApiInstance.post<SurveyAndContextMsg>('/v1/studies/study/get-assigned-survey', payload);
export const submitSurveyResponseRequest = (payload: SurveyResponseReq) => authApiInstance.post('/v1/studies/study/submit-response', payload);

