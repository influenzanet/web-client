import * as types from './dataTypes';
import { thisExpression } from '@babel/types';

export const testSurvey: types.SurveyDef = {
    id: "123",
    questionGroups: [
        {
            id: "qg1",
            follows: "qg2",
            // conditions: {},
            questions: [
                {
                    id: "q9",
                    follows: "start",
                    variants: [{
                        id: 'v9',
                        localisations: [{
                            code: 'en',
                            question: 'q9'
                        }],
                    }],
                },
                {
                    id: "q10",
                    conditions: {
                        "$inQT": ['q11']
                    },
                    variants: [{
                        id: 'v10',
                        localisations: [{
                            code: 'en',
                            question: 'v10'
                        }],
                    }],
                },
                {
                    id: "q11",
                    variants: [{
                        id: 'v11',
                        localisations: [{
                            code: 'en',
                            question: 'q11'
                        }],
                    }],
                },
                {
                    id: "q12",
                    variants: [{
                        id: 'v12',
                        localisations: [{
                            code: 'en',
                            question: 'q12'
                        }],
                    }],
                },
            ],
        },
        {
            id: "qg2",
            questions: [
                {
                    id: "q5",
                    variants: [{
                        id: 'v5',
                        localisations: [{
                            code: 'en',
                            question: 'q5'
                        }],
                    }],
                },
                {
                    id: "q6",
                    variants: [{
                        id: 'v6',
                        localisations: [{
                            code: 'en',
                            question: 'q6'
                        }],
                    }],
                },
                {
                    id: "q7",
                    variants: [{
                        id: 'v7',
                        localisations: [{
                            code: 'en',
                            question: 'q7'
                        }],
                    }],
                },
                {
                    id: "q8",
                    variants: [{
                        id: 'v8',
                        localisations: [{
                            code: 'en',
                            question: 'q8'
                        }],
                    }],
                },
            ],
        },
        {
            id: "qg3",
            follows: "start",
            questions: [
                {
                    id: "q1",
                    variants: [{
                        id: 'v1',
                        localisations: [{
                            code: 'en',
                            question: 'q1'
                        }],
                    }],
                },
                {
                    id: "q2",
                    follows: "q1",
                    variants: [{
                        id: 'v2',
                        localisations: [{
                            code: 'en',
                            question: 'q2'
                        }],
                    }],
                },
                {
                    id: "q3",
                    variants: [{
                        id: 'v3',
                        localisations: [{
                            code: 'en',
                            question: 'q3'
                        }],
                    }],
                },
                {
                    id: "q4",
                    follows: "q3",
                    variants: [{
                        id: 'v4',
                        localisations: [{
                            code: 'en',
                            question: 'q4'
                        }],
                    }],
                },
            ],
        }
    ],
};


const pickRandomListItem = (items: Array<any>): any => {
    return items[Math.floor(Math.random() * items.length)];
}

const removeIdFromList = (items: Array<any>, id: string): any => {
    return items.filter(item => item.id !== id);
}



// TODO: check currently rendered tree if something should be removed
// TODO: check what new question should be inserted // as direct follow ups
// TODO: render end of the question trees

type TimestampType = 'rendered' | 'displayed' | 'response set';


interface SurveyEngineCoreInterface {
    surveyDef: types.SurveyDef;
    renderedSurvey: Array<types.RenderedQuestionGroup>;
    responses: types.SurveyResponse;

    // response related methods:
    getResponse: (groupID: string, questionID: string) => types.QResponse | null;
    setResponse: (groupID: string, questionID: string, response: types.QResponse) => void;

    questionDisplayed: (groupID: string, questionID: string) => void;
    evalConditions: (conditions: Object) => boolean;
    // render: () => void;
}

export class SurveyEngineCore implements SurveyEngineCoreInterface {
    surveyDef: types.SurveyDef;
    renderedSurvey: Array<types.RenderedQuestionGroup>;
    responses: types.SurveyResponse;

    constructor(definitions: types.SurveyDef, reporter: string, profileID: string) {
        console.log('core engine')
        this.surveyDef = { ...definitions };
        this.responses = this.createResponseContainer(reporter, profileID);
        this.renderedSurvey = new Array<types.RenderedQuestionGroup>();
        this.initRenderedGroups();
    }

    questionDisplayed(groupID: string, questionID: string) {
        this.setTimestampFor('displayed', groupID, questionID);
    }

    setResponse(groupID: string, questionID: string, response: any) {
        console.warn('todo');
    }

    getResponse(groupID: string, questionID: string): types.QResponse | null {
        console.warn('todo');
        return null;
    }

    printRenderedSurvey = () => {
        this.renderedSurvey.forEach(qg => {
            console.log('Question group: ', qg.id, 'should follow: ', qg.follows);
            qg.questions.forEach(q => {
                console.log('\tQuestion: ', q.id, 'should follow: ', q.follows);
            });
        });
    }

    private createResponseContainer(reporter: string, profileID: string): types.SurveyResponse {
        const resp = {
            id: this.surveyDef.id,
            reporter: reporter,
            for: profileID,
            questionGroups: new Array<types.QGResponse>(),
        }

        this.surveyDef.questionGroups.forEach(qg => {
            const respGroup = {
                id: qg.id,
                meta: {
                    rendered: 0,
                    displayed: 0,
                    set: 0,
                    changed: 0
                },
                questions: new Array<types.QResponse>(),
            };
            qg.questions.forEach(q => {
                respGroup.questions.push({
                    id: q.id,
                    meta: {
                        rendered: 0,
                        displayed: 0,
                        set: 0,
                        changed: 0
                    },
                });
            });
            resp.questionGroups.push(respGroup);
        });
        return resp;
    }

    private setTimestampFor(type: TimestampType, groupID: string, questionID?: string) {
        let key: string = type;
        const gIndex = this.responses.questionGroups.findIndex(qg => qg.id === groupID);
        if (gIndex < 0) {
            return;
        }
        if (!questionID) {
            this.responses.questionGroups[gIndex].meta = {
                ...this.responses.questionGroups[gIndex].meta,
                [key]: Date.now(),
            };
            return;
        }
        if (type === 'response set') {
            if (!this.getResponse(groupID, questionID)) {
                key = 'set';
            } else {
                key = 'changed';
            }
        }

        const qIndex = this.responses.questionGroups[gIndex].questions.findIndex(q => q.id === questionID);
        if (qIndex < 0) {
            return;
        }
        this.responses.questionGroups[gIndex].questions[qIndex].meta = {
            ...this.responses.questionGroups[gIndex].questions[qIndex].meta,
            [key]: Date.now(),
        };
    }

    private initRenderedGroups() {
        let currentGroup = this.getNextQuestionGroup();
        if (!currentGroup) {
            return;
        }
        this.renderedSurvey.push({
            ...currentGroup,
            questions: [],
        });
        this.initRenderedQuestions(this.renderedSurvey.length - 1, currentGroup);

        while (currentGroup != null) {
            currentGroup = this.getNextQuestionGroup(currentGroup.id);
            if (!currentGroup) {
                return;
            }
            this.renderedSurvey.push({
                ...currentGroup,
                questions: [],
            });
            this.initRenderedQuestions(this.renderedSurvey.length - 1, currentGroup);
        }
        return;
    }

    private getNextQuestionGroup(currentGroupID?: string): types.QuestionGroup | null {
        // get unrendered question groups only
        const availableGroups = this.surveyDef.questionGroups.filter(qg => {
            return !this.renderedSurvey.some(item => item.id === qg.id);
        });
        let followUpGroups: Array<types.QuestionGroup>;
        if (currentGroupID && currentGroupID.length > 0) {
            followUpGroups = availableGroups.filter(qg => qg.follows === currentGroupID);
        } else {
            followUpGroups = availableGroups.filter(qg => qg.follows === 'start');
        }

        if (followUpGroups.length > 0) {
            const groupPool = followUpGroups.filter(qg => this.evalConditions(qg.conditions));
            if (groupPool.length < 1) {
                return null
            }
            return pickRandomListItem(groupPool);
        }

        const groupPool = availableGroups.filter(qg => {
            return this.evalConditions(qg.conditions) && (!qg.follows || qg.follows === '');
        });
        if (groupPool.length < 1) {
            return null
        }
        return pickRandomListItem(groupPool);
    }

    private initRenderedQuestions(groupIndex: number, qGroup: types.QuestionGroup) {
        let currentQuestion = this.getNextQuestion(groupIndex, qGroup);
        if (!currentQuestion) {
            return;
        }

        this.renderedSurvey[groupIndex].questions.push({
            ...currentQuestion,
            currentQuestion: {
                ...this.selectVariationAndLocalisation(currentQuestion), // todo: get selected localisation or default
            }
        });

        while (currentQuestion != null) {
            currentQuestion = this.getNextQuestion(groupIndex, qGroup, currentQuestion.id);
            if (!currentQuestion) {
                return;
            }
            this.renderedSurvey[groupIndex].questions.push({
                ...currentQuestion,
                currentQuestion: {
                    ...this.selectVariationAndLocalisation(currentQuestion), // todo: get selected localisation or default
                }
            });
        }
        return;
    }

    private selectVariationAndLocalisation(question: types.Question): types.Localisation {
        console.warn('todo: implement variation and locatisation selection');
        return question.variants[0].localisations[0];
    }

    private getNextQuestion(groupIndex: number, qGroup: types.QuestionGroup, currentQuestionID?: string): types.Question | null {
        // get unrendered question groups only
        const availableQuestions = qGroup.questions.filter(q => {
            return !this.renderedSurvey[groupIndex].questions.some(item => item.id === q.id);
        });
        let followUpQuestions: Array<types.Question>;
        if (currentQuestionID && currentQuestionID.length > 0) {
            followUpQuestions = availableQuestions.filter(q => q.follows === currentQuestionID);
        } else {
            followUpQuestions = availableQuestions.filter(q => q.follows === 'start');
        }

        if (followUpQuestions.length > 0) {
            const questionPool = followUpQuestions.filter(q => this.evalConditions(q.conditions));
            if (questionPool.length < 1) {
                return null
            }
            return pickRandomListItem(questionPool);
        }

        const questionPool = availableQuestions.filter(q => {
            return this.evalConditions(q.conditions) && (!q.follows || q.follows === '')
        });
        if (questionPool.length < 1) {
            return null
        }
        return pickRandomListItem(questionPool);
    }

    evalConditions(conditions?: Object): boolean {
        if (!conditions) {
            return true;
        }
        console.log(conditions);
        return false;
    }
}


interface SurveyEngineHttp {

    httpCall: () => Promise<boolean>;
}
