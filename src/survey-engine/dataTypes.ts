export interface SurveyDef {
    id: string;
    questionGroups: Array<QuestionGroup>;
}

export interface QuestionGroup {
    id: string;
    follows?: Array<string>;
    conditions?: Array<Condition>;
    questions: Array<Question>;
}

export interface Question {
    id: string;
    follows?: Array<string>;
    conditions?: Array<Condition>;
    variants: Array<Variant>;
}

export interface Variant {
    id: string;
    conditions?: Array<Condition>;
    localisations: Array<Localisation>;
}

export interface Localisation {
    code: string;
    question: string;
}

export interface Condition {
    type: string;
    args: Array<Condition> | Array<string>;
    //[key: string]: Array<Conditions> | Array<string>;
}

interface Reference {
    survey?: string;
    group?: string;
    question?: string;
}

export interface SurveyContext {
    responses?: Array<SurveyResponse>;
    profile?: any; // TODO: define
    // TODO: have geolocation and other attributes
}

// --------- Rendered Survey Types ----------
export interface RenderedQuestionGroup extends QuestionGroup {
    id: string;
    questions: Array<RenderedQuestion>;
}

export interface RenderedQuestion extends Question {
    currentQuestion: Localisation;
}

// --------- Survey Response Types ----------
export interface ResponseTimestamps {
    rendered: number;
    displayed: number;
    set: number;
    changed: number;
}

export interface SurveyResponse {
    id: string;
    reporter: string; // this survey is reported by this user
    for: string; // profile id - this survey is reported for the given profile
    questionGroups: Array<QGResponse>;
}

export interface QGResponse {
    id: string;
    meta: ResponseTimestamps;
    questions: Array<QResponse>
}

export interface QResponse {
    id: string;
    meta: ResponseTimestamps;
    variant?: string;
    localisation?: string;
    response?: any;
}