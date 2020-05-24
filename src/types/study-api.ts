import { SurveyResponse, Survey, SurveyContext } from "survey-engine/lib/data_types";


export interface SurveyReferenceReq {
  studeyKey: string;
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
