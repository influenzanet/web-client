export interface Survey {
    surveyDef: SurveyDef;
    surveyState?: SurveyState;
}

export interface SurveyDef {
    id: string;
    questionGroups: Array<QuestionGroup>;
}

export interface QuestionGroup {
    id: string;
    follows?: string;
    conditions?: Object;
    questions: Array<Question>;
}

export interface Question {
    id: string;
    follows?: string;
    conditions?: Object;
    variants: Array<Variant>;
}

export interface Variant {
    id: string;
    localisations: Array<Localisation>;
}

export interface Localisation {
    code: string;
    question: string;
}

// --------- Rendered Survey Types ----------
export interface SurveyState {
    questionGroups: Array<RenderedQuestionGroup>;
}

export interface RenderedQuestionGroup extends QuestionGroup {
    id: string;
    questions: Array<RenderedQuestion>;
}

export interface RenderedQuestion extends Question {
    currentQuestion: Localisation;
}

