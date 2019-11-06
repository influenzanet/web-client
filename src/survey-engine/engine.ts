import * as types from './dataTypes';

export const testSurvey: types.SurveyDef = {
    id: "123",
    questionGroups: [
        {
            id: "qg1",
            follows: ["qg2"],
            condition:
            {
                name: 'or',
                data: [
                    {
                        name: 'inQT',
                        data: ['q11', 'q5']
                    },
                    {
                        name: 'not',
                        data: {
                            name: 'inQT',
                            data: ['q11', 'q5']
                        },
                    }

                ]
            },
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
                    condition: {
                        name: 'inQT',
                        data: ['q11']
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
            follows: ["start"],
            questions: [
                {
                    id: "q1",
                    condition: {
                        name: 'eq',
                        data: [
                            {
                                name: 'getAttribute',
                                data: [
                                    { name: 'getContext' },
                                    'mode'
                                ]
                            },
                            'test'
                        ]
                    },
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
                    condition: {
                        name: 'eq',
                        data: [
                            {
                                name: 'getAttribute',
                                data: [
                                    {
                                        name: 'getResponse',
                                        data: 'q2'
                                    },
                                    'response'
                                ],
                                dtype: 'int'
                            },
                            1
                        ]
                    },
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

type TimestampType = 'rendered' | 'displayed' | 'responded';


interface SurveyEngineCoreInterface {
    surveyDef: types.SurveyDef;
    renderedSurvey: Array<types.RenderedQuestionGroup>;
    responses: types.SurveyResponse;
    context: types.SurveyContext;

    setContext: (context: types.SurveyContext) => void;
    getResponse: (groupID: string, questionID: string) => types.QResponse | null;
    setResponse: (groupID: string, questionID: string, response: types.QResponse) => void;

    questionDisplayed: (groupID: string, questionID: string) => void; // should be called by the client when displaying a question
    evalConditions: (condition: types.EvalObject) => boolean;
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
        this.setTimestampFor('responded', groupID, questionID); // keep at the beginning - more accurate - checks if response exists
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
                    rendered: [],
                    displayed: [],
                    repsonded: [],
                    position: -1
                },
                questions: new Array<types.QResponse>(),
            };
            qg.questions.forEach(q => {
                respGroup.questions.push({
                    id: q.id,
                    meta: {
                        rendered: [],
                        displayed: [],
                        repsonded: [],
                        position: -1
                    },
                });
            });
            resp.questionGroups.push(respGroup);
        });
        return resp;
    }

    private setTimestampFor(type: TimestampType, groupID: string, questionID?: string) {
        const gIndex = this.responses.questionGroups.findIndex(qg => qg.id === groupID);
        if (gIndex < 0) {
            return;
        }
        if (!questionID) {
            switch (type) {
                case 'rendered':
                    this.responses.questionGroups[gIndex].meta.rendered.push(Date.now());
                    break;
                case 'displayed':
                    this.responses.questionGroups[gIndex].meta.displayed.push(Date.now());
                    break;
                case 'responded':
                    this.responses.questionGroups[gIndex].meta.repsonded.push(Date.now());
                    break;
            }
            return;
        }

        const qIndex = this.responses.questionGroups[gIndex].questions.findIndex(q => q.id === questionID);
        if (qIndex < 0) {
            return;
        }

        switch (type) {
            case 'rendered':
                this.responses.questionGroups[gIndex].questions[qIndex].meta.rendered.push(Date.now());
                break;
            case 'displayed':
                this.responses.questionGroups[gIndex].questions[qIndex].meta.displayed.push(Date.now());
                break;
            case 'responded':
                this.responses.questionGroups[gIndex].questions[qIndex].meta.repsonded.push(Date.now());
                break;
        }
    }

    private initRenderedSurvey() {
        let currentGroup = this.getNextQuestionGroup();
        if (!currentGroup) {
            return;
        }
        let newQG = {
            ...currentGroup,
            questions: [],
        };
        let newIndex = this.addQuestionGroup(newQG);
        this.initRenderedQuestions(newIndex, currentGroup);

        while (currentGroup != null) {
            currentGroup = this.getNextQuestionGroup(currentGroup.id);
            if (!currentGroup) {
                return;
            }
            newQG = {
                ...currentGroup,
                questions: [],
            };
            newIndex = this.addQuestionGroup(newQG);
            this.initRenderedQuestions(newIndex, currentGroup);
        }
        return;
    }

    private addQuestionGroup(renderedQuestionGroup: types.RenderedQuestionGroup, atPosition?: number): number {
        if (!atPosition) {
            this.renderedSurvey.push(renderedQuestionGroup);
            this.setTimestampFor('rendered', renderedQuestionGroup.id);
            return this.renderedSurvey.length - 1;
        }
        this.renderedSurvey.splice(atPosition, 0, renderedQuestionGroup);
        this.setTimestampFor('rendered', renderedQuestionGroup.id);
        return atPosition;
    }

    private addQuestionToGroup(groupIndex: number, renderedQuestion: types.RenderedQuestion, atPosition?: number): number {
        if (!atPosition) {
            this.renderedSurvey[groupIndex].questions.push(renderedQuestion);
            this.setTimestampFor('rendered', this.renderedSurvey[groupIndex].id, renderedQuestion.id);
            return this.renderedSurvey[groupIndex].questions.length - 1;
        }
        this.renderedSurvey[groupIndex].questions.splice(atPosition, 0, renderedQuestion);
        this.setTimestampFor('rendered', this.renderedSurvey[groupIndex].id, renderedQuestion.id);
        return atPosition;
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
            const groupPool = followUpGroups.filter(qg => this.evalConditions(qg.condition));
            if (groupPool.length < 1) {
                return null
            }
            return pickRandomListItem(groupPool);
        }

        const groupPool = availableGroups.filter(qg => {
            return this.evalConditions(qg.condition) && (!qg.follows || qg.follows.length < 1);
        });
        if (groupPool.length < 1) {
            return null
        }
        return pickRandomListItem(groupPool);
    }

    private initRenderedQuestions(groupIndex: number, qGroup: types.QuestionGroup) {
        let currentQuestion = this.getNextQuestion(groupIndex, qGroup);

        while (currentQuestion) {
            this.addQuestionToGroup(groupIndex, {
                ...currentQuestion,
                currentQuestion: {
                    ...this.selectVariationAndLocalisation(currentQuestion),
                }
            });

            currentQuestion = this.getNextQuestion(groupIndex, qGroup, currentQuestion.id);
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
            const questionPool = followUpQuestions.filter(q => this.evalConditions(q.condition));
            if (questionPool.length < 1) {
                return null
            }
            return pickRandomListItem(questionPool);
        }

        const questionPool = availableQuestions.filter(q => {
            return this.evalConditions(q.condition) && (!q.follows || q.follows.length < 1)
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
            qg => qg.follows && qg.follows.includes('start') && this.evalConditions(qg.condition)
        );
        let currentGroupIndex = 0;

        while (followUpGroups.length > 0) {
            const newQG = pickRandomListItem(followUpGroups);
            currentGroupIndex = this.addQuestionGroup(newQG, currentGroupIndex);
            this.initRenderedQuestions(currentGroupIndex, newQG);

            let availableGroups = this.surveyDef.questionGroups.filter(qg => {
                return !this.renderedSurvey.some(item => item.id === qg.id);
            });
            followUpGroups = availableGroups.filter(cQ => cQ.follows && cQ.follows.includes(newQG.id) && this.evalConditions(cQ.condition));

            currentGroupIndex += 1;
        }

        this.renderedSurvey.forEach(
            qg => {
                if (!this.evalConditions(qg.condition)) {
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
                        q.follows && q.follows.includes('start') && this.evalConditions(q.condition)
                    );
                    let currentQIndex = 0;
                    while (followUpQuestions.length > 0) {
                        const newQ = pickRandomListItem(followUpQuestions);
                        this.addQuestionToGroup(ind, {
                            ...newQ,
                            currentQuestion: {
                                ...this.selectVariationAndLocalisation(newQ),
                            }
                        }, currentQIndex);

                        availableQuestions = groupDef.questions.filter(cQ => {
                            return !this.renderedSurvey[ind].questions.some(item => item.id === cQ.id);
                        });
                        followUpQuestions = availableQuestions.filter(cQ => cQ.follows && cQ.follows.includes(newQ.id) && this.evalConditions(cQ.condition));

                        currentQIndex += 1;
                    }

                    qg.questions.forEach(
                        q => {
                            if (!this.evalConditions(q.condition)) {
                                this.renderedSurvey[ind].questions = removeIdFromList(this.renderedSurvey[ind].questions, q.id);
                                console.log('removed question: ' + q.id);
                            } else {
                                // else check if next question is still the same
                                // if not insert new question(s)
                                currentQIndex = this.renderedSurvey[ind].questions.findIndex(cQ => cQ.id === q.id);
                                availableQuestions = groupDef.questions.filter(cQ => {
                                    return !this.renderedSurvey[ind].questions.some(item => item.id === cQ.id);
                                });
                                followUpQuestions = availableQuestions.filter(cQ => cQ.follows && cQ.follows.includes(q.id) && this.evalConditions(cQ.condition));

                                while (followUpQuestions.length > 0) {
                                    const newQ = pickRandomListItem(followUpQuestions);
                                    currentQIndex += 1;
                                    this.addQuestionToGroup(ind, {
                                        ...newQ,
                                        currentQuestion: {
                                            ...this.selectVariationAndLocalisation(newQ),
                                        }
                                    }, currentQIndex);

                                    availableQuestions = groupDef.questions.filter(cQ => {
                                        return !this.renderedSurvey[ind].questions.some(item => item.id === cQ.id);
                                    });
                                    followUpQuestions = availableQuestions.filter(cQ => cQ.follows && cQ.follows.includes(newQ.id) && this.evalConditions(cQ.condition));
                                }
                            }
                        });

                    // render end of the question trees
                    // get unrendered questions only
                    const lastQID = this.renderedSurvey[ind].questions.length > 0 ?
                        this.renderedSurvey[ind].questions[this.renderedSurvey[ind].questions.length - 1].id : undefined;
                    let currentQuestion = this.getNextQuestion(ind, groupDef, lastQID);

                    // new question to be added at the end:
                    while (currentQuestion != null) {
                        this.addQuestionToGroup(ind, {
                            ...currentQuestion,
                            currentQuestion: {
                                ...this.selectVariationAndLocalisation(currentQuestion),
                            }
                        });

                        currentQuestion = this.getNextQuestion(ind, groupDef, currentQuestion.id);
                    }


                    // check if add any new groups after this one // as direct follow ups
                    const lastQGID = this.renderedSurvey[ind].id;
                    let currentQuestionGroup = this.getNextQuestionGroup(lastQGID);
                    if (currentQuestionGroup) {
                        // new question groups to be added at the end:
                        let newQG = {
                            ...currentQuestionGroup,
                            questions: [],
                        };
                        let qgIndex = this.addQuestionGroup(newQG);
                        this.initRenderedQuestions(qgIndex, currentQuestionGroup);

                        while (currentQuestionGroup != null) {
                            currentQuestionGroup = this.getNextQuestionGroup(lastQGID);
                            if (!currentQuestionGroup) {
                                break;
                            }
                            newQG = {
                                ...currentQuestionGroup,
                                questions: [],
                            };
                            qgIndex = this.addQuestionGroup(newQG);
                            this.initRenderedQuestions(qgIndex, currentQuestionGroup);
                        }
                    }

                }
            }
        );

        // render end of the question groups
        const lastQGID = this.renderedSurvey[this.renderedSurvey.length - 1].id;
        let currentQuestionGroup = this.getNextQuestionGroup(lastQGID);
        while (currentQuestionGroup !== null) {
            // new question groups to be added at the end:
            const newQG = {
                ...currentQuestionGroup,
                questions: [],
            };
            const qgIndex = this.addQuestionGroup(newQG);
            this.initRenderedQuestions(qgIndex, currentQuestionGroup);
            currentQuestionGroup = this.getNextQuestionGroup(currentQuestionGroup.id);
        }
    }

    evalConditions(condition?: types.EvalObject): boolean {
        return this.evalEngine.eval(
            condition,
            this.renderedSurvey,
            this.context,
            this.responses
        )
    }
}

class EvalRules {
    renderedSurvey?: Array<types.RenderedQuestionGroup>;
    context?: types.SurveyContext;
    responses?: types.SurveyResponse;

    public eval(
        condition?: types.EvalObject,
        renderedSurvey?: Array<types.RenderedQuestionGroup>,
        context?: types.SurveyContext,
        responses?: types.SurveyResponse
    ): boolean {
        // Default if no conditions found:
        if (!condition) {
            return true;
        }

        this.renderedSurvey = renderedSurvey;
        this.context = context;
        this.responses = responses;

        return this.evalCondition(condition);
    }

    private evalCondition(condition: types.EvalObject): any {
        switch (condition.name) {
            case 'or':
                return this.or(condition);
            case 'and':
                return this.and(condition);
            case 'not':
                return this.not(condition);
            case 'eq':
                return this.eq(condition);
            case 'getContext':
                return this.getContext();
            case 'getResponse':
                return this.getResponse(condition);
            case 'getAttribute':
                return this.getAttribute(condition);
            case 'getArrayItem':
                return this.getArrayItem(condition);
            /*
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
            */
            default:
                console.warn('condition type unknown for the current engine: ' + condition.name + '. Default return value is false.');
                break;
        }
        return false;
    }

    // ---------- LOGIC OPERATORS ----------------
    private or(condition: types.EvalObject): boolean {
        if (!Array.isArray(condition.data)) {
            console.warn('or: data attribute is missing or wrong: ' + condition.data);
            return false;
        }
        return condition.data.some((value) => this.evalCondition(value));
    }

    private and(condition: types.EvalObject): boolean {
        if (!Array.isArray(condition.data)) {
            console.warn('and: data attribute is missing or wrong: ' + condition.data);
            return false;
        }
        return condition.data.every((value) => this.evalCondition(value));
    }

    private not(condition: types.EvalObject): boolean {
        if (!condition.data || typeof (condition.data) !== 'object') {
            console.warn('not methods expects a sinlge EvalObject as an argument ');
            return false;
        }
        return !this.evalCondition(condition.data as types.EvalObject);
    }

    // ---------- COMPARISONS ----------------
    private eq(condition: types.EvalObject): boolean {
        if (!Array.isArray(condition.data)) {
            console.warn('eq: data attribute is missing or wrong: ' + condition.data);
            return false;
        }
        let values = [];
        for (let ind = 0; ind < condition.data.length; ind++) {
            const val = condition.data[ind];
            if (typeof (val) === 'object') {
                values.push(this.evalCondition(val));
            } else {
                values.push(val);
            }

        }
        console.log(values);
        // check if all values are equal
        return values.every((val, i, arr) => val === arr[0]);
    }

    private gt(condition: types.EvalObject): boolean {
        if (!Array.isArray(condition.data) || condition.data.length !== 2) {
            console.warn('gt: data attribute is missing or wrong: ' + condition.data);
            return false;
        }

        const a = (typeof (condition.data[0]) === 'object') ?
            this.evalCondition(condition.data[0]) : condition.data[0];
        const b = (typeof (condition.data[1]) === 'object') ?
            this.evalCondition(condition.data[1]) : condition.data[1];
        return a > b;
    }
    private gte(condition: types.EvalObject): boolean {
        if (!Array.isArray(condition.data) || condition.data.length !== 2) {
            console.warn('gte: data attribute is missing or wrong: ' + condition.data);
            return false;
        }
        const a = (typeof (condition.data[0]) === 'object') ?
            this.evalCondition(condition.data[0]) : condition.data[0];
        const b = (typeof (condition.data[1]) === 'object') ?
            this.evalCondition(condition.data[1]) : condition.data[1];
        return a >= b;
    }

    private lt(condition: types.EvalObject): boolean {
        if (!Array.isArray(condition.data) || condition.data.length !== 2) {
            console.warn('lt: data attribute is missing or wrong: ' + condition.data);
            return false;
        }
        const a = (typeof (condition.data[0]) === 'object') ?
            this.evalCondition(condition.data[0]) : condition.data[0];
        const b = (typeof (condition.data[1]) === 'object') ?
            this.evalCondition(condition.data[1]) : condition.data[1];
        return a < b;
    }

    private lte(condition: types.EvalObject): boolean {
        if (!Array.isArray(condition.data) || condition.data.length !== 2) {
            console.warn('lte: data attribute is missing or wrong: ' + condition.data);
            return false;
        }
        const a = (typeof (condition.data[0]) === 'object') ?
            this.evalCondition(condition.data[0]) : condition.data[0];
        const b = (typeof (condition.data[1]) === 'object') ?
            this.evalCondition(condition.data[1]) : condition.data[1];
        return a <= b;
    }

    // ---------- ROOT REFERENCES ----------------
    private getContext(): any {
        return this.context;
    }

    private getResponse(reference: types.EvalObject): types.QResponse | null {
        if (!this.responses) {
            console.warn('no responses available');
            return null;
        }
        if (!reference.data || typeof (reference.data) !== "string") {
            console.warn('missing or wrong data attribute: ' + reference.data);
            return null;
        }

        const questionID = reference.data;
        for (let i = 0; i < this.responses.questionGroups.length; i++) {
            const qg = this.responses.questionGroups[i];
            const q = qg.questions.find(q => q.id === questionID);
            if (q) {
                return q;
            }
        }
        return null;
    }

    // TODO: access rendered survey properties

    // ---------- WORKING WITH OBJECT/ARRAYS ----------------
    private getAttribute(attributeRef: types.EvalObject): any {
        if (!Array.isArray(attributeRef.data) || attributeRef.data.length !== 2) {
            console.warn('getAttribute: data attribute is missing or wrong: ' + attributeRef.data);
            return null;
        }

        const obj = this.evalCondition(attributeRef.data[0]);
        if (!obj || typeof (obj) !== 'object') {
            console.warn('getAttribute: received wrong type for referenced object: ' + obj);
            return null;
        }
        const attr = obj[attributeRef.data[1]];
        if (attributeRef.dtype) {
            return this.typeConvert(attr, attributeRef.dtype);
        }
        return attr;
    }

    private getArrayItem(itemRef: types.EvalObject): any {
        if (!Array.isArray(itemRef.data) || itemRef.data.length !== 2) {
            console.warn('getArrayItem: data attribute is missing or wrong: ' + itemRef.data);
            return null;
        }
        const arr = this.evalCondition(itemRef.data[0]);
        if (!arr || !Array.isArray(arr)) {
            console.warn('getArrayItem: received wrong type for referenced array: ' + arr);
            return null;
        }
        const item = arr[itemRef.data[1]];
        if (itemRef.dtype) {
            return this.typeConvert(item, itemRef.dtype);
        }
        return item;
    }


    private isQuestionInRenderedSurvey(id: string, renderSurvey: Array<types.RenderedQuestionGroup>): boolean {
        for (let i = 0; i < renderSurvey.length; i++) {
            const qg = renderSurvey[i];
            if (qg.questions.findIndex(q => q.id === id) > -1) {
                return true;
            }
        }
        return false;
    }


    private typeConvert(value: any, dtype: string): any {
        switch (dtype) {
            case 'int':
                return typeof (value) === 'string' ? parseInt(value) : Math.floor(value);
            default:
                return value;
        }
    }
}
