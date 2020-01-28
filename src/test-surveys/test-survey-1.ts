import { SurveyGroupItem, SurveySingleItem } from 'survey-engine/lib/data_types';

const Q4: SurveySingleItem = {
  key: 'QG0.QG4.Q4',
  version: 1,
  validations: [],
  type: "basic.input.single-choice",
  components: [
    {
      role: 'title',
      content: [
        {
          code: 'en',
          parts: [
            {
              str: 'What is your main activity?'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'Was ist Ihre Haupttätigkeit?'
            },
          ]
        },
      ]
    },
    {
      key: 'RG1',
      role: 'responseGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          key: 'RG1.R1',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Paid employment, full-time'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Bezahlte Beschäftigung, Vollzeit'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R2',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Paid employment, part-time'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Bezahlte Beschäftigung, Teilzeit'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R3',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Self-employed (businessman, farmer, tradesman, etc)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Selbstständige (Geschäftsleute, Landwirte, Handwerker usw.)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R4',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Attending daycare/school/college/university'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Besuch von Kindertagesstätten/Schulen/Hochschulen/Universitäten'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R5',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Home-maker (e.g. housewife)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Haushaltsführung (z.B. Hausfrau)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R6',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Unemployed'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Arbeitslos'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R7',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Long-term sick-leave or parental leave'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Langfristiger Krankheitsurlaub oder Elternurlaub'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R8',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Retired'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Im Ruhestand'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R9',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Other'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Sonstige'
                },
              ]
            },
          ]
        },
      ]
    },
  ]
}

const Q4b: SurveySingleItem = {
  key: 'QG0.QG4.Q4b',
  condition: {
    name: 'or',
    data: [
      {
        dtype: 'exp',
        exp: {
          name: 'isDefined',
          data: [
            {
              dtype: 'exp',
              exp: {
                name: 'getResponseItem',
                data: [
                  {
                    str: 'QG0.QG4.Q4'
                  },
                  {
                    str: 'RG1.R1'
                  }
                ]
              }
            }
          ]
        }
      },
      {
        dtype: 'exp',
        exp: {
          name: 'isDefined',
          data: [
            {
              dtype: 'exp',
              exp: {
                name: 'getResponseItem',
                data: [
                  {
                    str: 'QG0.QG4.Q4'
                  },
                  {
                    str: 'RG1.R2'
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  version: 1,
  validations: [],
  type: "basic.input.single-choice",
  components: [
    {
      role: 'title',
      content: [
        {
          code: 'en',
          parts: [
            {
              str: 'What is the first part of your school/college/workplace postal code (where you spend the majority of your working/studying time)?'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'Wie lautet der erste Teil der Postleitzahl Ihrer Schule/Hochschule/Arbeitsplatz (wo Sie den größten Teil Ihrer Arbeits-/Studienzeit verbringen)?'
            },
          ]
        },
      ]
    },
    {
      key: 'RG1',
      role: 'responseGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          key: 'RG1.R1',
          role: 'userInput',
        },
        {
          key: 'RG1.R2',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'I don’t know/can’t remember'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Ich weiß es nicht / kann mich nicht erinnern'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R3',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Not applicable (e.g. don’t have a fixed workplace)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Nicht zutreffend (z.B. keinen festen Arbeitsplatz haben)'
                },
              ]
            },
          ]
        },
      ]
    },
  ]
}

const Q4c: SurveySingleItem = {
  key: 'QG0.QG4.Q4c',
  condition: {
    name: 'or',
    data: [
      {
        dtype: 'exp',
        exp: {
          name: 'isDefined',
          data: [
            {
              dtype: 'exp',
              exp: {
                name: 'getResponseItem',
                data: [
                  {
                    str: 'QG0.QG4.Q4'
                  },
                  {
                    str: 'RG1.R1'
                  }
                ]
              }
            }
          ]
        }
      },
      {
        dtype: 'exp',
        exp: {
          name: 'isDefined',
          data: [
            {
              dtype: 'exp',
              exp: {
                name: 'getResponseItem',
                data: [
                  {
                    str: 'QG0.QG4.Q4'
                  },
                  {
                    str: 'RG1.R2'
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  version: 1,
  validations: [],
  type: "basic.input.single-choice",
  components: [
    {
      role: 'title',
      content: [
        {
          code: 'en',
          parts: [
            {
              str: 'Which of the following descriptions most closely matches with your main occupation?'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'Welche der folgenden Beschreibungen deckt sich am ehesten mit Ihrer Hauptbeschäftigung?'
            },
          ]
        },
      ]
    },
    {
      key: 'RG1',
      role: 'responseGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          key: 'RG1.R1',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Professional (e.g. manager, doctor, teacher, nurse, engineer)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Fachkraft (z.B. Manager, Arzt, Lehrer, Krankenschwester, Ingenieur)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R2',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Office work (e.g. admin, finance assistant, receptionist, etc)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Bürotätigkeit (z.B. Verwaltung, Finanzassistentin, Rezeptionistin, etc.)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R3',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Retail, sales, catering and hospitality and leisure (e.g. shop assistant, waiter, bar-staff, gym instructor etc)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Einzelhandel, Verkauf, Gastronomie und Gastgewerbe und Freizeit (z.B. Verkäufer, Kellner, Barpersonal, Fitnesstrainer usw.)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R4',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Skilled manual worker (e.g. mechanic, electrician, technician)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Facharbeiter (z.B. Mechaniker, Elektriker, Techniker)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R5',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Other manual work (e.g. cleaning, security, driver)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Andere manuelle Arbeiten (z.B. Reinigung, Sicherheit, Fahrer)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R6',
          role: 'userInput',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Other'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Sonstige'
                },
              ]
            },
          ]
        },
      ]
    },
  ]
}

const Q5: SurveySingleItem = {
  key: 'QG0.QG5.Q5',
  version: 1,
  validations: [],
  type: "basic.input.multiple-choice",
  components: [
    {
      role: 'title',
      content: [
        {
          code: 'en',
          parts: [
            {
              str: 'Except people you meet on public contact, do you have contact with any of the following during the course of a typical day?'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'Abgesehen von Menschen, denen Sie in der Öffentlichkeit begegnen, haben Sie im Laufe eines typischen Tages Kontakt mit einer der folgenden Personengruppen?'
            },
          ]
        },
      ],
    },
    {
      role: 'description',
      content: [
        {
          code: 'en',
          parts: [
            {
              str: 'Select all options that apply, if any'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'Wählen Sie alle entsprechenden Optionen aus, falls diese zutreffen'
            },
          ]
        },
      ]
    },
    {
      key: 'RG1',
      role: 'responseGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          key: 'RG1.R1',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'More than 10 children or teenagers over the course of the day'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Mehr als 10 Kinder oder Jugendliche im Laufe des Tages'
                },
              ]
            },
          ],
          disabled: {
            name: 'isDefined',
            data: [
              {
                dtype: 'exp',
                exp: {
                  name: 'getResponseItem',
                  data: [
                    {
                      str: 'QG0.QG5.Q5'
                    },
                    {
                      str: 'RG1.R5'
                    }
                  ]
                }
              }
            ]
          },
        },
        {
          key: 'RG1.R2',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'More than 10 people aged over 65 over the course of day'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Mehr als 10 Personen im Alter von über 65 Jahren im Laufe des Tages'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R3',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Patients'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Patientinnen und Patienten'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R4',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Groups of people (more than 10 individuals at any one time)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Personengruppen (mehr als 10 Personen zu einem beliebigen Zeitpunkt)'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R5',
          role: 'responseOption',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'None of the above'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Keine der oben genannten'
                },
              ]
            },
          ]
        },
      ]
    },
  ]
}

export const QG0: SurveyGroupItem = {
  key: 'QG0',
  version: 1,
  items: [
    {
      key: 'QG0.QG4',
      version: 1,
      items: [
        Q4,
        Q4b,
        Q4c,
      ],
    },
    {
      key: 'QG0.QG5',
      version: 1,
      items: [
        Q5,
      ],
    },
  ],
}

