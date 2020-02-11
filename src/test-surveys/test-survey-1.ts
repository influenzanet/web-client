import { SurveyGroupItem, SurveySingleItem } from 'survey-engine/lib/data_types';

const Q4: SurveySingleItem = {
  key: '0.4.4',
  version: 1,
  validations: [],
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
      key: '0',
      role: 'helpGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          role: 'title',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Why are we asking this?'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Warum fragen wir das?'
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
                  str: 'To check how representative our sample is compared to the population as a whole, and to find out whether the chance of getting flu is different for people in different types of occupation.'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Um zu überprüfen, wie repräsentativ unsere Stichprobe im Vergleich zur Gesamtbevölkerung ist, und um herauszufinden, ob die Chance, eine Grippe zu bekommen, für Menschen in verschiedenen Berufsfeldern unterschiedlich hoch ist.'
                },
              ]
            },
          ]
        },
        {
          role: 'title',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'How should I answer it?'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Wie soll ich darauf antworten?'
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
                  str: 'Please tick the box that most closely resembles your main occupation. For pre-school children who don’t go to daycare tick the “other” box.'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Bitte kreuzen Sie das Kästchen an, das Ihrer Hauptbeschäftigung am nächsten kommt. Bei Vorschulkindern, die nicht in die Kindertagesstätte gehen, kreuzen Sie bitte das Kästchen "andere" an.'
                },
              ]
            },
          ]
        },
      ]
    },
    {
      key: '1',
      role: 'responseGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          key: '1.1',
          role: 'singleChoiceGroup',
          order: {
            name: 'sequential'
          },
          items: [
            {
              key: '1.1.1',
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
              key: '1.1.2',
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
              key: '1.1.3',
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
              key: '1.1.4',
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
              key: '1.1.5',
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
              key: '1.1.6',
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
              key: '1.1.7',
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
              key: '1.1.8',
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
              key: '1.1.9',
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
        }
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
  validations: [
    {
      key: 'V1',
      type: 'soft',
      rule: {
        name: 'and',
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
                        str: 'QG0.QG5.Q5'
                      },
                      {
                        str: 'RG1.R5'
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
                              str: 'QG0.QG5.Q5'
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
                              str: 'QG0.QG5.Q5'
                            },
                            {
                              str: 'RG1.R2'
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
                              str: 'QG0.QG5.Q5'
                            },
                            {
                              str: 'RG1.R3'
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
                              str: 'QG0.QG5.Q5'
                            },
                            {
                              str: 'RG1.R4'
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
              ]
            }
          }
        ]
      }
    }
  ],
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
      key: 'IG1',
      role: 'helpGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          role: 'title',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Why are we asking this?'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Warum fragen wir das?'
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
                  str: 'To find out whether you are likely to be exposed to more flu than the average person (e.g. work with children, or patients)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Um herauszufinden, ob Sie voraussichtlich stärker der Grippe ausgesetzt sind als der Durchschnittsbürger (z.B. bei der Arbeit mit Kindern oder Patienten)'
                },
              ]
            },
          ]
        },
        {
          role: 'title',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'How should I answer it?'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Wie soll ich darauf antworten?'
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
                  str: 'Groups of people could include any setting where you come into contact with large numbers of people at once, e.g. a teacher who may contact many children in a day'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Personengruppen können jede Situation umfassen, in der Sie mit einer großen Anzahl von Menschen gleichzeitig in Kontakt kommen, z.B. ein Lehrer, der an einem Tag mit vielen Kindern in Kontakt kommen kann'
                },
              ]
            },
          ]
        },
      ]
    },
    {
      role: 'warning',
      displayCondition: {
        name: 'getSurveyItemValidation',
        data: [
          {
            str: 'this'
          },
          {
            str: 'V1'
          }
        ]
      },
      content: [
        {
          code: 'en',
          parts: [
            {
              str: 'Invalid input data'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'Ungültige Eingabe'
            },
          ]
        },
      ],
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

const Q5b: SurveySingleItem = {
  key: 'QG0.QG5.Q5b',
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
      key: 'IG1',
      role: 'helpGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          role: 'title',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'Why are we asking this?'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Warum fragen wir das?'
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
                  str: 'To find out whether you are likely to be exposed to more flu than the average person (e.g. work with children, or patients)'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Um herauszufinden, ob Sie voraussichtlich stärker der Grippe ausgesetzt sind als der Durchschnittsbürger (z.B. bei der Arbeit mit Kindern oder Patienten)'
                },
              ]
            },
          ]
        },
        {
          role: 'title',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: 'How should I answer it?'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Wie soll ich darauf antworten?'
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
                  str: 'Groups of people could include any setting where you come into contact with large numbers of people at once, e.g. a teacher who may contact many children in a day'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: 'Personengruppen können jede Situation umfassen, in der Sie mit einer großen Anzahl von Menschen gleichzeitig in Kontakt kommen, z.B. ein Lehrer, der an einem Tag mit vielen Kindern in Kontakt kommen kann'
                },
              ]
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
                      str: 'QG0.QG5.Q5b'
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
                      str: 'QG0.QG5.Q5b'
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
                      str: 'QG0.QG5.Q5b'
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
                      str: 'QG0.QG5.Q5b'
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

const Q6_test: SurveySingleItem = {
  key: 'QG0.QG6.Q6',
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
              str: 'INCLUDING YOU, how many people in each of the following age groups live in your household?'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'EINSCHLIESSLICH IHNEN, wie viele Personen aus jeder der folgenden Altersgruppen leben in Ihrem Haushalt?'
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
          role: 'responseDropDown',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: '0-4 years'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: '0-4 Jahre'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R2',
          role: 'responseDropDown',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: '5-18 years'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: '5-18 Jahre'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R3',
          role: 'responseDropDown',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: '19-44 years'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: '19-44 Jahre'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R4',
          role: 'responseDropDown',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: '45-64 years'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: '45-64 Jahre'
                },
              ]
            },
          ]
        },
        {
          key: 'RG1.R5',
          role: 'responseDropDown',
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: '65+ years'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: '65+ Jahre'
                },
              ]
            },
          ]
        },
      ]
    },
  ]
}

const Q6: SurveySingleItem = {
  key: '0.6',
  version: 1,
  validations: [],
  components: [
    {
      role: 'title',
      content: [
        {
          code: 'en',
          parts: [
            {
              str: 'INCLUDING YOU, how many people in each of the following age groups live in your household?'
            },
          ]
        },
        {
          code: 'de',
          parts: [
            {
              str: 'EINSCHLIESSLICH IHNEN, wie viele Personen aus jeder der folgenden Altersgruppen leben in Ihrem Haushalt?'
            },
          ]
        },
      ]
    },
    {
      key: 'IGC2',
      role: 'responseGroup',
      order: {
        name: 'sequential'
      },
      items: [
        {
          key: 'IGC2.IGC1',
          role: 'dropDownGroup',
          order: {
            name: 'sequential'
          },
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: '0-4 years'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: '0-4 Jahre'
                },
              ]
            },
          ],
          items: [
            {
              key: 'IGC2.IGC1.RC1',
              role: 'dropDownDefault',
              content: [
                {
                  code: 'en',
                  parts: [
                    {
                      str: '0'
                    },
                  ]
                },
                {
                  code: 'de',
                  parts: [
                    {
                      str: '0'
                    },
                  ]
                },
              ]
            },
            {
              key: 'IGC2.IGC1.RC2',
              role: 'dropDownOption',
              content: [
                {
                  code: 'en',
                  parts: [
                    {
                      str: '1'
                    },
                  ]
                },
                {
                  code: 'de',
                  parts: [
                    {
                      str: '1'
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          key: 'IGC2.IGC2',
          role: 'dropDownGroup',
          order: {
            name: 'sequential'
          },
          content: [
            {
              code: 'en',
              parts: [
                {
                  str: '5-18 years'
                },
              ]
            },
            {
              code: 'de',
              parts: [
                {
                  str: '5-18 Jahre'
                },
              ]
            },
          ],
          items: [
            {
              key: 'IGC2.IGC2.RC1',
              role: 'dropDownDefault',
              content: [
                {
                  code: 'en',
                  parts: [
                    {
                      str: '0'
                    },
                  ]
                },
                {
                  code: 'de',
                  parts: [
                    {
                      str: '0'
                    },
                  ]
                },
              ]
            },
            {
              key: 'IGC2.IGC2.RC2',
              role: 'dropDownOption',
              content: [
                {
                  code: 'en',
                  parts: [
                    {
                      str: '1'
                    },
                  ]
                },
                {
                  code: 'de',
                  parts: [
                    {
                      str: '1'
                    },
                  ]
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
  key: '0',
  version: 1,
  items: [
    {
      key: '0.4',
      version: 1,
      items: [
        Q4,
        Q4b,
        Q4c,
      ],
    },
    {
      key: '0.5',
      version: 1,
      items: [
        Q5,
        Q5b,
      ],
    },
    Q6,
  ],
}

