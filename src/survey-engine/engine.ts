import * as types from './dataTypes';

export const testSurvey: types.SurveyDef = {
    id: "123",
    questionGroups: [
        {
            id: "qg1",
            follows: ["qg2"],
            conditions: [
                {
                    type: 'or',
                    args: [
                        {
                            type: 'hasAns',
                            args: ['q1', '123'] // question in survey (two ids)
                        },
                        {
                            type: 'inQT',
                            args: ['q11', 'q5']
                        },
                        {
                            type: 'not',
                            args: [
                                {
                                    type: 'inQT',
                                    args: ['q11', 'q13']
                                },
                            ]
                        }
                    ]
                }
            ],
            questions: [
                {
                    id: "q9",
                    follows: ["start"],
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
                    conditions: [{
                        type: 'inQT',
                        args: ['q11']
                    }],
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
            follows: ["start"],
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
                    follows: ["q1"],
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
                    conditions: [{
                        type: 'eq',
                        args: [
                            '$response:q2,123',
                            'yes'
                        ]
                    }],
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
                    follows: ["q3"],
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

const removeIdFromList = (items: Array<any>, id: string): Array<any> => {
    return items.filter(item => item.id !== id);
}

type TimestampType = 'rendered' | 'displayed' | 'response set';


interface SurveyEngineCoreInterface {
    surveyDef: types.SurveyDef;
    renderedSurvey: Array<types.RenderedQuestionGroup>;
    responses: types.SurveyResponse;
    context: types.SurveyContext;

    setContext: (context: types.SurveyContext) => void;
    getResponse: (groupID: string, questionID: string) => types.QResponse | null;
    setResponse: (groupID: string, questionID: string, response: types.QResponse) => void;

    questionDisplayed: (groupID: string, questionID: string) => void; // should be called by the client when displaying a question
    evalConditions: (conditions: Array<types.Condition>) => boolean;
    // render: () => void;
}

export class SurveyEngineCore implements SurveyEngineCoreInterface {
    surveyDef: types.SurveyDef;
    renderedSurvey: Array<types.RenderedQuestionGroup>;
    responses: types.SurveyResponse;
    context: types.SurveyContext; // for external infos when evaluating conditions

    private evalEngine: EvalRules;

    constructor(definitions: types.SurveyDef, reporter: string, profileID: string, context?: types.SurveyContext) {
        console.log('core engine')
        this.evalEngine = new EvalRules();

        this.surveyDef = { ...definitions };
        this.context = context ? context : {};
        this.responses = this.createResponseContainer(reporter, profileID);
        this.renderedSurvey = new Array<types.RenderedQuestionGroup>();
        this.initRenderedSurvey();
    }

    questionDisplayed(groupID: string, questionID: string) {
        this.setTimestampFor('displayed', groupID, questionID);
    }

    setResponse(groupID: string, questionID: string, response: any) {
        this.setTimestampFor('response set', groupID, questionID); // keep at the beginning - more accurate - checks if response exists
        const gIndex = this.responses.questionGroups.findIndex(qg => qg.id === groupID);
        if (gIndex < 0) {
            return null;
        }
        const qIndex = this.responses.questionGroups[gIndex].questions.findIndex(q => q.id === questionID);
        if (qIndex < 0) {
            return null;
        }

        this.responses.questionGroups[gIndex].questions[qIndex].response = response;

        this.reRenderSurvey();
    }

    getResponse(groupID: string, questionID: string): types.QResponse | null {
        const gIndex = this.responses.questionGroups.findIndex(qg => qg.id === groupID);
        if (gIndex < 0) {
            return null;
        }
        const qIndex = this.responses.questionGroups[gIndex].questions.findIndex(q => q.id === questionID);
        if (qIndex < 0) {
            return null;
        }

        if (!this.responses.questionGroups[gIndex].questions[qIndex].response) {
            return null;
        }

        return {
            ...this.responses.questionGroups[gIndex].questions[qIndex],
        };
    }

    setContext(context: types.SurveyContext) {
        this.context = context;
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

    private initRenderedSurvey() {
        let currentGroup = this.getNextQuestionGroup();
        if (!currentGroup) {
            return;
        }
        this.renderedSurvey.push({
            ...currentGroup,
            questions: [],
        });
        this.setTimestampFor('rendered', currentGroup.id);
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
            this.setTimestampFor('rendered', currentGroup.id);
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
            followUpGroups = availableGroups.filter(qg => qg.follows && qg.follows.includes(currentGroupID));
        } else {
            followUpGroups = availableGroups.filter(qg => qg.follows && qg.follows.includes('start'));
        }

        if (followUpGroups.length > 0) {
            const groupPool = followUpGroups.filter(qg => this.evalConditions(qg.conditions));
            if (groupPool.length < 1) {
                return null
            }
            return pickRandomListItem(groupPool);
        }

        const groupPool = availableGroups.filter(qg => {
            return this.evalConditions(qg.conditions) && (!qg.follows || qg.follows.length < 1);
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
        this.setTimestampFor('rendered', qGroup.id, currentQuestion.id);

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
            this.setTimestampFor('rendered', qGroup.id, currentQuestion.id);
        }
        return;
    }

    private selectVariationAndLocalisation(question: types.Question): types.Localisation {
        console.warn('todo: implement variation and localisation selection');
        return question.variants[0].localisations[0];
    }

    private getNextQuestion(groupIndex: number, qGroup: types.QuestionGroup, currentQuestionID?: string): types.Question | null {
        // get unrendered questions only
        const availableQuestions = qGroup.questions.filter(q => {
            return !this.renderedSurvey[groupIndex].questions.some(item => item.id === q.id);
        });
        let followUpQuestions: Array<types.Question>;
        if (currentQuestionID && currentQuestionID.length > 0) {
            followUpQuestions = availableQuestions.filter(q => q.follows && q.follows.includes(currentQuestionID));
        } else {
            followUpQuestions = availableQuestions.filter(q => q.follows && q.follows.includes('start'));
        }

        if (followUpQuestions.length > 0) {
            const questionPool = followUpQuestions.filter(q => this.evalConditions(q.conditions));
            if (questionPool.length < 1) {
                return null
            }
            return pickRandomListItem(questionPool);
        }

        const questionPool = availableQuestions.filter(q => {
            return this.evalConditions(q.conditions) && (!q.follows || q.follows.length < 1)
        });
        if (questionPool.length < 1) {
            return null
        }
        return pickRandomListItem(questionPool);
    }

    private reRenderSurvey() {
        console.warn('todo: implement rerendering');
        // check if start question group is missing first:
        let availableGroups = this.surveyDef.questionGroups.filter(qg => {
            return !this.renderedSurvey.some(item => item.id === qg.id);
        });
        let followUpGroups = availableGroups.filter(
            qg => qg.follows && qg.follows.includes('start') && this.evalConditions(qg.conditions)
        );

        while (followUpGroups.length > 0) {
            const newQG = pickRandomListItem(followUpGroups);
            this.renderedSurvey.splice(0, 0, {
                ...newQG,
                questions: [],
            });
            this.setTimestampFor('rendered', newQG.id);
            this.initRenderedQuestions(this.renderedSurvey.length - 1, newQG);


            let availableGroups = this.surveyDef.questionGroups.filter(qg => {
                return !this.renderedSurvey.some(item => item.id === qg.id);
            });
            followUpGroups = availableGroups.filter(cQ => cQ.follows && cQ.follows.includes(newQG.id) && this.evalConditions(cQ.conditions));
        }

        this.renderedSurvey.forEach(
            qg => {
                if (!this.evalConditions(qg.conditions)) {
                    this.renderedSurvey = removeIdFromList(this.renderedSurvey, qg.id);
                    console.log('removed question group: ' + qg.id);
                } else {
                    const ind = this.renderedSurvey.findIndex(group => qg.id === group.id);
                    const groupDef = this.surveyDef.questionGroups.find(gDef => gDef.id === qg.id);
                    if (!groupDef) {
                        console.error('group definition not found for: ' + qg.id);
                        return;
                    }

                    // recheck questions of the group
                    // check if start question is missing first:
                    let availableQuestions = groupDef.questions.filter(q => {
                        return !this.renderedSurvey[ind].questions.some(item => item.id === q.id);
                    });
                    let followUpQuestions = availableQuestions.filter(q =>
                        q.follows && q.follows.includes('start') && this.evalConditions(q.conditions)
                    );
                    while (followUpQuestions.length > 0) {
                        const newQ = pickRandomListItem(followUpQuestions);
                        this.renderedSurvey[ind].questions.splice(0, 0, {
                            ...newQ,
                            currentQuestion: {
                                ...this.selectVariationAndLocalisation(newQ),
                            }
                        });
                        this.setTimestampFor('rendered', groupDef.id, newQ.id);

                        availableQuestions = groupDef.questions.filter(cQ => {
                            return !this.renderedSurvey[ind].questions.some(item => item.id === cQ.id);
                        });
                        followUpQuestions = availableQuestions.filter(cQ => cQ.follows && cQ.follows.includes(newQ.id) && this.evalConditions(cQ.conditions));
                    }

                    qg.questions.forEach(
                        q => {
                            if (!this.evalConditions(q.conditions)) {
                                this.renderedSurvey[ind].questions = removeIdFromList(this.renderedSurvey[ind].questions, q.id);
                                console.log('removed question: ' + q.id);
                            } else {
                                // else check if next question is still the same
                                // if not insert new question(s)
                                let currentQIndex = this.renderedSurvey[ind].questions.findIndex(cQ => cQ.id === q.id);
                                availableQuestions = groupDef.questions.filter(cQ => {
                                    return !this.renderedSurvey[ind].questions.some(item => item.id === cQ.id);
                                });
                                followUpQuestions = availableQuestions.filter(cQ => cQ.follows && cQ.follows.includes(q.id) && this.evalConditions(cQ.conditions));

                                while (followUpQuestions.length > 0) {
                                    const newQ = pickRandomListItem(followUpQuestions);
                                    currentQIndex += 1;
                                    this.renderedSurvey[ind].questions.splice(currentQIndex, 0, {
                                        ...newQ,
                                        currentQuestion: {
                                            ...this.selectVariationAndLocalisation(newQ),
                                        }
                                    });
                                    this.setTimestampFor('rendered', groupDef.id, newQ.id);

                                    availableQuestions = groupDef.questions.filter(cQ => {
                                        return !this.renderedSurvey[ind].questions.some(item => item.id === cQ.id);
                                    });
                                    followUpQuestions = availableQuestions.filter(cQ => cQ.follows && cQ.follows.includes(newQ.id) && this.evalConditions(cQ.conditions));
                                }
                            }
                        });

                    // render end of the question trees
                    // get unrendered questions only
                    const lastQID = this.renderedSurvey[ind].questions[this.renderedSurvey[ind].questions.length - 1].id;
                    let currentQuestion = this.getNextQuestion(ind, groupDef, lastQID);
                    if (currentQuestion) {
                        // new question to be added at the end:
                        this.renderedSurvey[ind].questions.push({
                            ...currentQuestion,
                            currentQuestion: {
                                ...this.selectVariationAndLocalisation(currentQuestion), // todo: get selected localisation or default
                            }
                        });
                        this.setTimestampFor('rendered', groupDef.id, currentQuestion.id);

                        while (currentQuestion != null) {
                            currentQuestion = this.getNextQuestion(ind, groupDef, currentQuestion.id);
                            if (!currentQuestion) {
                                break;
                            }
                            this.renderedSurvey[ind].questions.push({
                                ...currentQuestion,
                                currentQuestion: {
                                    ...this.selectVariationAndLocalisation(currentQuestion), // todo: get selected localisation or default
                                }
                            });
                            this.setTimestampFor('rendered', groupDef.id, currentQuestion.id);
                        }
                    }

                    // check if add any new groups after this one // as direct follow ups
                    const lastQGID = this.renderedSurvey[ind].id;
                    let currentQuestionGroup = this.getNextQuestionGroup(lastQGID);
                    if (currentQuestionGroup) {
                        // new question groups to be added at the end:
                        this.renderedSurvey.push({
                            ...currentQuestionGroup,
                            questions: [],
                        });
                        this.setTimestampFor('rendered', currentQuestionGroup.id);
                        this.initRenderedQuestions(this.renderedSurvey.length - 1, currentQuestionGroup);

                        while (currentQuestionGroup != null) {
                            currentQuestionGroup = this.getNextQuestionGroup(lastQGID);
                            if (!currentQuestionGroup) {
                                break;
                            }
                            this.renderedSurvey.push({
                                ...currentQuestionGroup,
                                questions: [],
                            });
                            this.setTimestampFor('rendered', currentQuestionGroup.id);
                            this.initRenderedQuestions(this.renderedSurvey.length - 1, currentQuestionGroup);
                        }
                    }

                }
            }
        );

        // render end of the question groups
        const lastQGID = this.renderedSurvey[this.renderedSurvey.length - 1].id;
        let currentQuestionGroup = this.getNextQuestionGroup(lastQGID);
        if (currentQuestionGroup) {
            // new question groups to be added at the end:
            this.renderedSurvey.push({
                ...currentQuestionGroup,
                questions: [],
            });
            this.setTimestampFor('rendered', currentQuestionGroup.id);
            this.initRenderedQuestions(this.renderedSurvey.length - 1, currentQuestionGroup);

            while (currentQuestionGroup != null) {
                currentQuestionGroup = this.getNextQuestionGroup(lastQGID);
                if (!currentQuestionGroup) {
                    break;
                }
                this.renderedSurvey.push({
                    ...currentQuestionGroup,
                    questions: [],
                });
                this.setTimestampFor('rendered', currentQuestionGroup.id);
                this.initRenderedQuestions(this.renderedSurvey.length - 1, currentQuestionGroup);
            }
        }
    }

    evalConditions(conditions?: Array<types.Condition>): boolean {
        return this.evalEngine.eval(
            conditions,
            this.renderedSurvey,
            this.context,
            this.responses
        )
    }
}

class EvalRules {
    public eval(
        conditions?: Array<types.Condition>,
        renderedSurvey?: Array<types.RenderedQuestionGroup>,
        context?: types.SurveyContext,
        responses?: types.SurveyResponse
    ): boolean {
        // Default if no conditions found:
        if (!conditions) {
            return true;
        }

        return conditions.every(condition => this.evalCondition(
            condition,
            renderedSurvey,
            context,
            responses
        ));
    }

    private evalCondition(
        condition: types.Condition,
        renderedSurvey?: Array<types.RenderedQuestionGroup>,
        context?: types.SurveyContext,
        responses?: types.SurveyResponse
    ): boolean {
        let conditionValue = false;
        switch (condition.type) {
            case 'or':
                conditionValue = (condition.args as Array<types.Condition>).some(
                    (c: types.Condition) => this.evalCondition(c, renderedSurvey, context, responses)
                );
                break;
            case 'and':
                conditionValue = (condition.args as Array<types.Condition>).every(
                    (c: types.Condition) => this.evalCondition(c, renderedSurvey, context, responses)
                );
                break;
            case 'not':
                if (condition.args.length !== 1) {
                    console.warn('not methods expects only a sinlge argument');
                    break;
                }
                conditionValue = !this.evalCondition((condition.args as Array<types.Condition>)[0], renderedSurvey, context, responses);
                break;
            case 'hasAns':
                // if referenced question has an answer
                // TODO:
                console.warn('todo');
                break;
            case 'inQT':
                // if referenced questions are in the rendered survey (current survey)
                if (!renderedSurvey) {
                    break;
                }
                conditionValue = (condition.args as Array<string>).every(
                    id => this.isQuestionInRenderedSurvey(id, renderedSurvey)
                );
                break;
            case 'eq':
                if (condition.args.length < 2) {
                    console.warn('"eq" method expects more than a sinlge argument');
                    break;
                }

                let values = [];
                for (let ind = 0; ind < condition.args.length; ind++) {
                    // TODO: resolve reference to have a value
                    const val = this.parseValue(condition.args[ind] as string, context, responses);
                    values.push(val);
                    console.log(val);
                }
                conditionValue = values.every((val, i, arr) => val === arr[0]);
                console.log(conditionValue);

                break;
            default:
                console.warn('condition type unknown for the current engine: ' + condition.type + '. Default return value is false.');
                break;
        }
        return conditionValue;
    }
    // ---------- HELPER METHODS ----------------
    private isQuestionInRenderedSurvey(id: string, renderSurvey: Array<types.RenderedQuestionGroup>): boolean {
        for (let i = 0; i < renderSurvey.length; i++) {
            const qg = renderSurvey[i];
            if (qg.questions.findIndex(q => q.id === id) > -1) {
                return true;
            }
        }
        return false;
    }

    private parseValue(
        refOrValue: string,
        // renderedSurvey?: Array<types.RenderedQuestionGroup>,
        context?: types.SurveyContext,
        responses?: types.SurveyResponse
    ): any {
        if (refOrValue.length > 1 && refOrValue[0] === '$') {
            const [type, argsStr] = refOrValue.split(':');
            const args = argsStr.split(',');
            let value: any;
            switch (type) {
                case '$response':
                    if (args.length < 1) {
                        console.warn('missing arguments in $response');
                        return null;
                    }
                    const questionID = args[0];
                    const surveyID = args.length > 1 ? args[1] : '';
                    const currentResponseObject = this.getResponse(questionID, responses, context, surveyID);
                    value = currentResponseObject ? currentResponseObject.response : {};
                    break;
                default:
                    console.warn('reference type not known: ' + type);
                    break;
            }
            return value;
        }
        return refOrValue;
    }

    private getResponse(questionID: string, responses?: types.SurveyResponse, context?: types.SurveyContext, surveyID?: string): types.QResponse | null {
        if (!surveyID || surveyID === '' || (responses && responses.id === surveyID)) {
            // use current survey:
            if (!responses) {
                return null;
            }

            for (let i = 0; i < responses.questionGroups.length; i++) {
                const qResp = responses.questionGroups[i].questions.find(q => q.id === questionID);
                if (qResp) {
                    return qResp;
                }
            }
        }

        console.warn('todo: implement context with external surveys');
        return null;
    }
}
