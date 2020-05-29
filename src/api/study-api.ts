import authApiInstance from './instances/auth-api-instance';
import { SurveyReferenceReq, SurveyAndContextMsg, SurveyResponseReq, AssignedSurveys, Studies, SurveyInfos } from '../types/study-api';

// Study API
export const getStudiesForUserReq = () => authApiInstance.get<Studies>('/v1/studies/for-user-profiles');
export const getAllAvailableStudiesReq = () => authApiInstance.get<Studies>('/v1/studies/active');
export const getSurveyInfosForStudyReq = (studyKey: string) => authApiInstance.post<SurveyInfos>('/v1/studies/study/get-survey-infos', { studyKey });

// Study flow
export const enterStudyReq = (studyKey: string) => authApiInstance.post<AssignedSurveys>('/v1/studies/study/enter', { studyKey });
export const leaveStudyRequest = (studyKey: string) => authApiInstance.post<AssignedSurveys>('/v1/studies/study/leave', { studyKey });
export const getAllAssignedSurveysReq = () => authApiInstance.get<AssignedSurveys>('/v1/studies/all-assigned-surveys');
export const postponeSurveyReq = (studyKey: string, surveyKey: string, delay: number) => authApiInstance.post<AssignedSurveys>('/v1/studies/study/postpone-survey', { studyKey, surveyKey, delay });
export const getAssignedSurveyRequest = (payload: SurveyReferenceReq) => authApiInstance.post<SurveyAndContextMsg>('/v1/studies/study/get-assigned-survey', payload);
export const submitSurveyResponseRequest = (payload: SurveyResponseReq) => authApiInstance.post('/v1/studies/study/submit-response', payload);

