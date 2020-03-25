import { SurveyGroupItem, SurveySingleItem } from "survey-engine/lib/data_types"

const Q1: SurveySingleItem = {
    key: "weekly.32",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Have you had any of the following symptoms since your last visit (or in the past weeks, if this is your first visit)?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "multipleChoiceGroup",
                        items: [
                            {
                                key: "1.1.141",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No symptoms"
                                            }
                                        ]
                                    }
                                ],
                            },
                            {
                                key: "1.1.142",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Fever"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.143",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Chills"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.144",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Runny or blocked nose"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.145",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Sneezing"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.146",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Sore thoat"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.147",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Cough"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.148",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Shortness of breath"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.149",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Headache"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.150",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Muscle/joint pain"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.151",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Chest pain"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.152",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Feeling tired or exhausted (malaise)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.153",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Loss of appetite"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.154",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Coloured sputum/phlegm"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.155",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Watery, bloodshot eyes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.156",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Nausea"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.157",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Vomiting"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.158",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Diarrhoea"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.159",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Stomach ache"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.160",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Other"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q2: SurveySingleItem = {
    key: "weekly.33",
    follows: [
        "weekly.32",
    ],
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "On your last visit, you reported that you were still ill. Are the symptoms you report today part of the same bout of illness?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.161",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.162",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.163",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't remember"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Qcov1: SurveySingleItem = {
    key: "weekly.Qcov1",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "In the 14 days before your symptoms started, did you travel to an area at risk for new coronavirus infection? (See the list of areas at risk below)"
                            }
                        ]
                    }
                ]
            },
            {
                role: 'text',
                style: [{ key: 'variant', value: 'body2' }],
                content: [
                    {
                        code: 'en',
                        parts: [
                            {
                                str: 'China (mainland China, Hong Kong, Macao), Singapore, South Korea, Iran, Italy (regions of Lombardy, Venetia, Emilia-Romagna)'
                            },
                        ]
                    },
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.0",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}

const Qcov1b: SurveySingleItem = {
    key: "weekly.Qcov1b",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "In which of these areas at risk of infection with the new coronavirus did you go within 14 days before the onset of your symptoms (Several answers possible)?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "multipleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "China (mainland China, Hong Kong, Macao)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Singapore"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.3",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "South Korea"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.4",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Iran"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.5",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Italy (regions of Venetia, Lombardy, Emilia-Romagna)"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}

const Qcov2: SurveySingleItem = {
    key: "weekly.Qcov2",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "In the 14 days before the onset of your symptoms, have you been in contact with one or more people who have stayed in an area at risk of infection with the new coronavirus? (See the list of areas at risk below)"
                            }
                        ]
                    }
                ]
            },
            {
                role: 'text',
                style: [{ key: 'variant', value: 'body2' }],
                content: [
                    {
                        code: 'en',
                        parts: [
                            {
                                str: 'China (mainland China, Hong Kong, Macao), Singapore, South Korea, Iran, Italy (regions of Lombardy, Venetia, Emilia-Romagna)'
                            },
                        ]
                    },
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.0",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}

const Qcov2b: SurveySingleItem = {
    key: "weekly.Qcov2b",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "In which of these areas at risk of infection with the new coronavirus these people have been? (Select all the relevant answers)?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "multipleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "China (mainland China, Hong Kong, Macao)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Singapore"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.3",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "South Korea"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.4",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Iran"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.5",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Italy (regions of Venetia, Lombardy, Emilia-Romagna)"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}

const Qcov3: SurveySingleItem = {
    key: "weekly.Qcov3",
    follows: [
        "weekly.32",
    ],
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "In the 14 days before your symptoms started, have you been in contact with someone for whom tests have confirmed that they have Covid-19?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.0",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}

const Q3: SurveySingleItem = {
    key: "weekly.35",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "When did the first symptoms appear?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.165",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Choose date"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.166",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't remember"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q4: SurveySingleItem = {
    key: "weekly.36",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "When did your symptoms end?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.167",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Choose date"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.168",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't remember"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.169",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I am still ill"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q5: SurveySingleItem = {
    key: "weekly.37",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Did your symptoms develop suddenly over a few hours?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.170",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.171",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.172",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't remember"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q6: SurveySingleItem = {
    key: "weekly.38",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "When did your fever begin?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.173",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Choose date"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.174",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't rember"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q6b: SurveySingleItem = {
    key: "weekly.39",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Did your fever develop suddenly over a few hours?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.175",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.176",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.177",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q6c: SurveySingleItem = {
    key: "weekly.40",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Did you take your temperature?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.178",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.179",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.180",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q6d: SurveySingleItem = {
    key: "weekly.41",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "What was your highest temperature measured?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.181",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Below 37°C"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.182",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "37° - 37.4°C"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.183",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "37.5° - 37.9°C"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.184",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "38° - 38.9°C"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.185",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "39° - 39.9°C"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.186",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "40°C or more"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.187",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't remember"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q7: SurveySingleItem = {
    key: "weekly.42",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Because of your symptoms, did you VISIT (see face to face) any medical services?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "multipleChoiceGroup",
                        items: [
                            {
                                key: "1.1.188",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.189",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "GP or GP's practice nurse"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.190",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Hospital accident & emergency department / out of hours service"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.191",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Hospital admission"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.192",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Other medical services"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.193",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No, but I have an appointment scheduled"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q7b: SurveySingleItem = {
    key: "weekly.64",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "How soon after your symptoms appeared did you first VISIT a medical service?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "undefined",
                        items: []
                    }
                ]
            }
        ]
    }
}

const Qcov4: SurveySingleItem = {
    key: "weekly.Qcov4",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Because of your symptoms, did you call [write the number of Covid19 emergency line of your country]?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.0",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}

const Q8: SurveySingleItem = {
    key: "weekly.44",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Because of your symptoms, did you contact via TELEPHONE or INTERNET any of medical services?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "multipleChoiceGroup",
                        items: [
                            {
                                key: "1.1.202",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.203",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "GP - spoke to receptionist only"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.204",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "GP - spoke to doctor or nurse"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.205",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "NHS Direct / NHS 24 / NHS Choices"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.206",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "NPFS"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.207",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Other"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q8b: SurveySingleItem = {
    key: "weekly.65",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "How soon after your symptoms appeared did you first contact a medical service via TELEPHONE or INTERNET?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "undefined",
                        items: []
                    }
                ]
            }
        ]
    }
}

const Q9: SurveySingleItem = {
    key: "weekly.46",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Did you take medication for these symptoms (tick all that apply)?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "multipleChoiceGroup",
                        items: [
                            {
                                key: "1.1.216",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No medication"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.217",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Pain killers (e.g. paracetamol, lemsip, ibuprofen, aspirin, calpol, etc)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.218",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Cough medication (e.g. expectorants)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.219",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Antivirals (Tamiflu, Relenza)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.220",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Antibiotics"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.221",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Other"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.222",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't remember"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q9b: SurveySingleItem = {
    key: "weekly.47",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "How long after the beginning of your symptoms did you start taking antiviral medication?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.223",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Same day (within 24 hours)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.224",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "1 day"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.225",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "2 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.226",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "3 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.227",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "4 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.228",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "5-7 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.229",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "More than 7 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.230",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know/can't remember"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q10: SurveySingleItem = {
    key: "weekly.48",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Did you change your daily routine because of your illness?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.231",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.232",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes, but I did not take time off work/school"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.233",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes, I took time off work/school"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q10b: SurveySingleItem = {
    key: "weekly.49",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Are you still off work/school?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.234",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.235",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.236",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Other (e.g. I wouldn’t usually be at work/school today anyway)"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q10c: SurveySingleItem = {
    key: "weekly.50",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "How long have you been off work/school?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.237",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "1 day"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.238",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "2 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.239",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "3 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.240",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "4 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.241",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "5 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.242",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "6 to 10 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.243",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "11 to 15 days"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.244",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "More than 15 days"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Qcov5: SurveySingleItem = {
    key: "weekly.Qcov5",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Because of your symptoms, did you wear a mask (surgical mask sold in pharmacies)?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Yes"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No, I would have liked but could not find any"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.3",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "No"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}

const Qcov6: SurveySingleItem = {
    key: "weekly.Qcov6",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "Because of your symptoms, have you taken or strengthened one or more of the following measures? (Select all the relevant answers)"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "multipleChoiceGroup",
                        items: [
                            {
                                key: "1.1.1",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Regularly wash hands"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.2",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Cough or sneeze into your elbow"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.3",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Use a disposable tissue"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.4",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Wear a disposable mask"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.5",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Avoid shaking hands"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.6",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Limit your use of public transport"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.7",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Avoid gatherings (going to the theater, cinema, stadium, supermarket, etc.)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.8",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Stay at home"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.9",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Telework or increase your number of telework days (if your employer allows it)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.11",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Avoid travel outside your own country / region?"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.10",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "None of these measures (exclusive, if this answer is selected, no other answer can be selected)"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const Q11: SurveySingleItem = {
    key: "weekly.52",
    version: 1,
    validations: [],
    components: {
        role: "root",
        items: [
            {
                role: "title",
                content: [
                    {
                        code: "en",
                        parts: [
                            {
                                str: "What do you think is causing your symptoms?"
                            }
                        ]
                    }
                ]
            },
            {
                key: "1",
                role: "responseGroup",
                items: [
                    {
                        key: "1.1",
                        role: "singleChoiceGroup",
                        items: [
                            {
                                key: "1.1.249",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Flu or flu-like illness"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.250",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Common cold"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.251",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Allergy/hay fever"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.353",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Ashtma"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.252",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Gastroenteritis/gastric flu"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.6",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "New coronavirus (Covid-19)"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.253",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "Other"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: "1.1.254",
                                role: "option",
                                content: [
                                    {
                                        code: "en",
                                        parts: [
                                            {
                                                str: "I don't know"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

export const survey: SurveyGroupItem = {
    key: 'weekly',
    version: 1,
    items: [
        Q1,
        Q2,
        Qcov1,
        Qcov1b,
        Qcov2,
        Qcov2b,
        Qcov3,
        Q3,
        Q4,
        Q5,
        Q6,
        Q6b,
        Q6c,
        Q6d,
        Q7,
        Q7b,
        Qcov4,
        Q8,
        Q8b,
        Q9,
        Q9b,
        Q10,
        Q10b,
        Q10c,
        Qcov5,
        Qcov6,
        Q11,
    ]
}