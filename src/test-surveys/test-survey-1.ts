import { SurveyGroupItem, SurveySingleItem } from 'survey-engine/lib/data_types';

export const QG_0: SurveyGroupItem = {
  key: 'QG_0',
  version: 1,
  items: [
    {
      key: 'QG_4',
      version: 1,
      items: [
        {
          key: 'QG_4_Q_4',
          version: 1,
          validations: [],
          type: "basic.input.single-choice",
          components: [
            {
              role: 'title', 
              content: [
                { code: 'en', parts: ['What is your main activity?'] },
                { code: 'de', parts: [''] }
              ]
            },
            {
              key: 'RG_1',
              role: 'responseGroup', 
              items: [
                {
                  key: 'RG_1_R_1',
                  role: 'responseOption',
                  content: [
                    {
                      code: 'en',
                      parts: ['Paid employment, full-time']
                    },
                    {
                      code: 'de',
                      parts: ['']
                    }
                  ]
                },
                {
                  key: 'RG_1_R_2',
                  role: 'responseOption',
                  content: [
                    {
                      code: 'en',
                      parts: ['Paid employment, part-time']
                    },
                    {
                      code: 'de',
                      parts: ['']
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          key: 'QG_4_Q_4b',
          condition: {
            name: 'or',
            data: [
              {
                dtype: "test",
                exp: 
                {
                  name: 'gotYes',
                  data: [
                    {
                      dtype: 'test',
                      str: 'QG_4_Q_4_RG_1_R_1',
                    }
                  ]
                },
              },
              {
                dtype: "test",
                exp: 
                {
                  name: 'gotYes',
                  data: [
                    {
                      dtype: 'test',
                      str: 'QG_4_Q_4_RG_1_R_2',
                    }
                  ]
                },
              },
            ]
          },
          version: 1,
          validations: [],
          type: "basic.input.single-choice",
          components: [
            {
              role: 'title', 
              content: [
                { code: 'en', parts: ['What is the first part of your school/college/workplace postal code (where you spend the majority of your working/studying time)?'] },
                { code: 'de', parts: [''] }
              ]
            },
            {
              key: 'RG_1',
              role: 'responseGroup', 
              items: [
                {
                  key: 'RG_1_R_1',
                  role: 'responseInput',
                  content: [
                    {
                      code: 'en',
                      parts: ['XXXX']
                    },
                    {
                      code: 'de',
                      parts: ['XXXX']
                    }
                  ]
                },
                {
                  key: 'RG_1_R_2',
                  role: 'responseOption',
                  content: [
                    {
                      code: 'en',
                      parts: ['I don’t know/can’t remember']
                    },
                    {
                      code: 'de',
                      parts: ['']
                    }
                  ]
                },
                {
                  key: 'RG_1_R_3',
                  role: 'responseOption',
                  content: [
                    {
                      code: 'en',
                      parts: ['Not applicable (e.g. don’t have a fixed workplace)']
                    },
                    {
                      code: 'de',
                      parts: ['']
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          key: 'QG_4_Q_4c',
          condition: {
            name: 'or',
            data: [
              {
                dtype: "test",
                exp: 
                {
                  name: 'gotYes',
                  data: [
                    {
                      dtype: 'test',
                      str: 'QG_4_Q_4_RG_1_R_1',
                    }
                  ]
                },
              },
              {
                dtype: "test",
                exp: 
                {
                  name: 'gotYes',
                  data: [
                    {
                      dtype: 'test',
                      str: 'QG_4_Q_4_RG_1_R_2',
                    }
                  ]
                },
              },
            ]
          },
          version: 1,
          validations: [],
          type: "basic.input.single-choice",
          components: [
            {
              role: 'title', 
              content: [
                { code: 'en', parts: ['Which of the following descriptions most closely matches with your main occupation?'] },
                { code: 'de', parts: [''] }
              ]
            },
            {
              key: 'RG_1',
              role: 'responseGroup', 
              items: [
                {
                  key: 'RG_1_R_1',
                  role: 'responseOption',
                  content: [
                    {
                      code: 'en',
                      parts: ['Professional (e.g. manager, doctor, teacher, nurse, engineer)']
                    },
                    {
                      code: 'de',
                      parts: ['']
                    }
                  ]
                },
                {
                  key: 'RG_1_R_2',
                  role: 'responseOption',
                  content: [
                    {
                      code: 'en',
                      parts: ['Other']
                    },
                    {
                      code: 'de',
                      parts: ['']
                    }
                  ]
                },
                {
                  key: 'RG_1_R_3',
                  role: 'responseInput',
                  displayCondition: {
                    name: 'checked',
                    data: [
                      {
                        dtype: 'test',
                        str: 'QG_4_Q_4C_RG_1_R_2',
                      },
                    ]
                  },
                  content: [
                    {
                      code: 'en',
                      parts: ['XXXX']
                    },
                    {
                      code: 'de',
                      parts: ['XXXX']
                    }
                  ]
                },
              ]
            },
          ]
        },
      ],
    }
  ],
}