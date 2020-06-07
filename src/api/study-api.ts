import authApiInstance from './instances/auth-api-instance';
import { SurveyReferenceReq, SurveyAndContextMsg, SurveyResponseReq, AssignedSurveys, Studies, SurveyInfos } from '../types/study-api';

// Study API
export const getStudiesForUserReq = () => authApiInstance.get<Studies>('/v1/studies/for-user-profiles');
export const getAllAvailableStudiesReq = () => authApiInstance.get<Studies>('/v1/studies/active');
export const getSurveyInfosForStudyReq = (studyKey: string) => authApiInstance.get<SurveyInfos>(`/v1/study/${studyKey}/survey-infos`);

// Study flow
export const enterStudyReq = (studyKey: string) => authApiInstance.post<AssignedSurveys>(`/v1/study/${studyKey}/enter`, { studyKey });
export const leaveStudyRequest = (studyKey: string) => authApiInstance.post<AssignedSurveys>(`/v1/study/${studyKey}/leave`, { studyKey });
export const getAllAssignedSurveysReq = () => authApiInstance.get<AssignedSurveys>('/v1/studies/all-assigned-surveys');
export const postponeSurveyReq = (studyKey: string, surveyKey: string, delay: number) => authApiInstance.post<AssignedSurveys>(`/v1/study/${studyKey}/postpone-survey`, { surveyKey, delay });
export const getAssignedSurveyRequest = (payload: SurveyReferenceReq) => authApiInstance.get<SurveyAndContextMsg>(`/v1/study/${payload.studyKey}/survey/${payload.surveyKey}`);
export const submitSurveyResponseRequest = (payload: SurveyResponseReq) => authApiInstance.post(`/v1/study/${payload.studyKey}/submit-response`, payload);

