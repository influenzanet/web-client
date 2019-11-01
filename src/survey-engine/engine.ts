import * as types from './dataTypes';

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

export class SurveyEngine {
    surveyDef: types.Survey;
    // renderedTree: types.RenderedSurvey;

    constructor(def: types.Survey) {
        this.surveyDef = def;
    }

    /*
    private getVariantWithLocalisation(): types.Localisation {
        return null
    }

    private getNextQuestion(): types.RenderedQuestion | null {
        this.getVariantWithLocalisation();
        return null;
    }*/

    private getNextQuestionGroup(): types.RenderedQuestionGroup | null {
        return null;
    }

    private evalConditions(conditions: Object): boolean {
        if (!conditions) {
            return true;
        }

        for (let key in conditions) {
            console.log(key);
        }
        return false;
    }

    /*
    render(): types.RenderedSurvey {
        if (!this.renderedTree) {
            // Initial rendering

            return {...this.renderedTree};
        }

        //
        for (let i = 0; i < this.renderedTree.questionGroups.length; i++) {
            const questionGroup = this.renderedTree.questionGroups[i];
            if (!this.evalConditions(questionGroup.conditions)) {

            }
        }
        // TODO: check currently rendered tree if something should be removed
        // TODO: check what new question should be inserted // as direct follow ups
        // TODO: render end of the question trees
        return null;
    }
    */
}

export const printRenderedSurvey = (renderedSurvey: types.SurveyState) => {
    renderedSurvey.questionGroups.forEach(qg => {
        console.log('Question group: ', qg.id, 'should follow: ', qg.follows);
        qg.questions.forEach(q => {
            console.log('\tQuestion: ', q.id, 'should follow: ', q.follows);
        });
    });
}

const evalConditions = (survey: types.Survey, conditions?: Object): boolean => {
    if (!conditions) {
        return true;
    }
    // todo: eval conditions
    console.warn(conditions);
    for (let key in conditions) {
        console.log(key);
    }
    return false;
}

const pickRandomListItem = (items: Array<any>): any => {
    return items[Math.floor(Math.random() * items.length)];
}

const removeIdFromList = (items: Array<any>, id: string): any => {
    return items.filter(item => item.id !== id);
}

const renderQuestions = (
    survey: types.Survey,
    currentQuestionTree: Array<types.RenderedQuestion>,
    questionGroupDef: types.QuestionGroup): Array<types.RenderedQuestion> => {
    const renderedQuestions = new Array<types.RenderedQuestion>();

    if (currentQuestionTree.length < 1) {
        // initial rendering
        let currentQuestion = getNextQuestion(questionGroupDef, renderedQuestions,
            survey, // todo: pass object with current state
        );
        if (!currentQuestion) {
            return renderedQuestions
        }

        renderedQuestions.push({
            ...currentQuestion,
            currentQuestion: {
                ...currentQuestion.variants[0].localisations[0], // todo: get selected localisation or default
            }
        });

        while (currentQuestion != null) {
            currentQuestion = getNextQuestion(questionGroupDef, renderedQuestions,
                survey, // todo: pass object with current state
                currentQuestion.id
            );
            if (!currentQuestion) {
                return renderedQuestions;
            }
            renderedQuestions.push({
                ...currentQuestion,
                currentQuestion: {
                    ...currentQuestion.variants[0].localisations[0], // todo: get selected localisation or default
                }
            });
        }
        return renderedQuestions;
    }

    for (let i = 0; i < currentQuestionTree.length; i++) {
        // TODO: handle re-rendering
        // TODO: remove questions if conditions not true any more
        // TODO: insert questions if conditions are true
    }



    return renderedQuestions;
}

const getNextQuestion = (
    groupDefinition: types.QuestionGroup,
    currentTree: Array<types.RenderedQuestion>,
    survey: types.Survey,
    currentQuestionID?: string): types.Question | null => {

    // get unrendered question groups only
    const availableQuestions = groupDefinition.questions.filter(q => {
        return !currentTree.some(item => item.id === q.id);
    });
    let followUpQuestions: Array<types.Question>;
    if (currentQuestionID && currentQuestionID.length > 0) {
        followUpQuestions = availableQuestions.filter(q => q.follows === currentQuestionID);
    } else {
        followUpQuestions = availableQuestions.filter(qg => qg.follows === 'start');
    }

    if (followUpQuestions.length > 0) {
        const questionPool = followUpQuestions.filter(q => evalConditions(survey, q.conditions));
        if (questionPool.length < 1) {
            return null
        }
        return pickRandomListItem(questionPool);
    }

    const questionPool = availableQuestions.filter(qg => {
        return evalConditions(survey, qg.conditions) && (!qg.follows || qg.follows === '')
    });
    if (questionPool.length < 1) {
        return null
    }
    return pickRandomListItem(questionPool);
}


const getNextQuestionGroup = (survey: types.Survey, currentGroupID?: string): types.QuestionGroup | null => {
    // get unrendered question groups only
    const availableGroups = survey.surveyDef.questionGroups.filter(qg => {
        if (!survey.surveyState) {
            return true;
        }
        return !survey.surveyState.questionGroups.some(item => item.id === qg.id);
    });
    let followUpGroups: Array<types.QuestionGroup>;
    if (currentGroupID && currentGroupID.length > 0) {
        followUpGroups = availableGroups.filter(qg => qg.follows === currentGroupID);
    } else {
        followUpGroups = availableGroups.filter(qg => qg.follows === 'start');
    }

    if (followUpGroups.length > 0) {
        // todo: check eval - evtl. survey is not up to date - pass down current state
        const groupPool = followUpGroups.filter(qg => evalConditions(survey, qg.conditions));
        if (groupPool.length < 1) {
            return null
        }
        return pickRandomListItem(groupPool);
    }

    const groupPool = availableGroups.filter(qg => {
        // todo: check eval - evtl. survey is not up to date - pass down current state
        return evalConditions(survey, qg.conditions) && (!qg.follows || qg.follows === '')
    });
    if (groupPool.length < 1) {
        return null
    }
    return pickRandomListItem(groupPool);
}

export const renderSurvey = (survey: types.Survey): types.Survey => {
    const newSurvey = {
        ...survey,
    }
    if (!newSurvey.surveyState) {
        newSurvey.surveyState = {
            questionGroups: new Array<types.RenderedQuestionGroup>(),
        };

        let currentGroup = getNextQuestionGroup(newSurvey);
        if (!currentGroup) {
            return newSurvey
        }
        newSurvey.surveyState.questionGroups.push({
            ...currentGroup,
            questions: renderQuestions(survey, [], currentGroup),
        });

        while (currentGroup != null) {
            currentGroup = getNextQuestionGroup(newSurvey, currentGroup.id);
            if (!currentGroup) {
                return newSurvey
            }
            newSurvey.surveyState.questionGroups.push({
                ...currentGroup,
                questions: renderQuestions(survey, [], currentGroup),
            });
        }
        return newSurvey;
    }
    // todo: update survey state

    // TODO: check currently rendered tree if something should be removed
    // TODO: check what new question should be inserted // as direct follow ups
    // TODO: render end of the question trees

    return newSurvey;

}