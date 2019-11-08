export interface SurveyDef {
    id: string;
    questionGroups: Array<QuestionGroup>;
}

export interface QuestionGroup {
    id: string;
    follows?: Array<string>;
    condition?: EvalObject;
    questions: Array<Question>;
}

export interface Question {
    id: string;
    follows?: Array<string>;
    condition?: EvalObject;
    variants: Array<Variant>;
}

export interface Variant {
    id: string;
    condition?: EvalObject;
    localisations: Array<Localisation>;
}

export interface Localisation {
    code: string;
    question: string;
}

export interface EvalObject {
    // type: string;
    name: string;
    data?: number | string | EvalObject | Array<any>;
    dtype?: string;
}

export interface SurveyContext {
    responses?: Array<SurveyResponse>;
    profile?: any; // TODO: define
    mode?: string;
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
export interface ResponseMeta {
    position: number; // position in the list
    // timestamps:
    rendered: Array<number>;
    displayed: Array<number>;
    responded: Array<number>;
}

export interface SurveyResponse {
    id: string;
    reporter: string; // this survey is reported by this user
    for: string; // profile id - this survey is reported for the given profile
    questionGroups: Array<QGResponse>;
}

export interface QGResponse {
    id: string;
    meta: ResponseMeta;
    questions: Array<QResponse>
}

export interface QResponse {
    id: string;
    meta: ResponseMeta;
    variant?: string;
    localisation?: string;
    response?: any;
}