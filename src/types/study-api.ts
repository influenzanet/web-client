import { SurveyResponse, Survey, SurveyContext, LocalizedString } from "survey-engine/lib/data_types";


export interface SurveyReferenceReq {
  studyKey: string;
  surveyKey: string;
}

export interface SurveyResponseReq {
  studyKey: string;
  response: SurveyResponse;
}

export interface SurveyAndContextMsg {
  survey: Survey;
  context?: SurveyContext;
  prefill?: SurveyResponse;
}

export interface AssignedSurvey {
  studyKey: string;
  surveyKey: string;
  validFrom?: number;
  validUntil?: number;
}

export interface AssignedSurveys {
  surveys: AssignedSurvey[];
}

export interface StudyInfos {
  key: string;
  status: string;
  props: {
    name: LocalizedString[];
    description: LocalizedString[];
    tags?: string[];
    startDate?: number;
    endDate?: number;
  };
  systemDefaultStudy?: boolean;
}

export interface Studies {
  studies: StudyInfos[];
}

export interface SurveyInfo {
  key: string;
  name: LocalizedString[];
  description: LocalizedString[];
}

export interface SurveyInfos {
  infos: SurveyInfo[];
}
