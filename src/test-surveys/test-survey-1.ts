import { SurveyGroupItem, SurveySingleItem, Survey } from 'survey-engine/lib/data_types';

const Q4: SurveySingleItem = {
  key: '0.4.4',
  version: 1,
  validations: [],
  components: {
    role: 'root', items: [
      // title
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
      // helpGroup
      {
        role: 'helpGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
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
      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'singleChoiceGroup',
            order: {
              name: 'sequential'
            },
            items: [
              {
                key: '1',
                role: 'option',
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
                ],
                description: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: 'Longer text, explaining the option in more detail, allowing to display on a short category first and provide info on demand'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: 'DE tooltip'
                      },
                    ]
                  },
                ]
              },
              {
                key: '2',
                role: 'option',
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
                key: '3',
                role: 'option',
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
                key: '4',
                role: 'option',
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
                key: '5',
                role: 'option',
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
                key: '6',
                role: 'option',
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
                key: '66',
                role: 'input',
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
                ],
              },
              {
                key: '7',
                role: 'option',
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
                key: '8',
                role: 'option',
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
                key: '9',
                role: 'input',
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
                ],
                description: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: 'Other desc'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: 'Sonstige desc'
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
}

const Q4b: SurveySingleItem = {
  key: '0.4.4b',
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
                    str: '0.4.4'
                  },
                  {
                    str: '1.1.1'
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
                    str: '0.4.4'
                  },
                  {
                    str: '1.1.2'
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
  components: {
    role: 'root', items: [
      // title
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
      // helpGroup
      {
        role: 'helpGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'To find out roughly how far you travel on a regular basis.'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Um ungefähr herauszufinden, wie weit Sie regelmäßig reisen.'
                  },
                ]
              },
            ]
          },
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'Please choose the first part of the post-code (the part before the space).'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Bitte wählen Sie den ersten Teil der Postleitzahl (den Teil vor dem Leerzeichen).'
                  },
                ]
              },
            ]
          },
        ]
      },
      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'singleChoiceGroup',
            order: {
              name: 'sequential'
            },
            items: [
              {
                key: '1',
                role: 'input',
              },
              {
                key: '2',
                role: 'option',
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
                key: '3',
                role: 'option',
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
          }
        ]
      },
    ]
  }
}

const Q4c: SurveySingleItem = {
  key: '0.4.4c',
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
                    str: '0.4.4'
                  },
                  {
                    str: '1.1.1'
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
                    str: '0.4.4'
                  },
                  {
                    str: '1.1.2'
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
  components: {
    role: 'root', items: [
      // title
      {
        role: 'title',
        content: [
          {
            code: 'en',
            parts: [
              {
                str: 'Which of the following texts most closely matches with your main occupation?'
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
      // helpGroup
      {
        role: 'helpGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'To check how representative our sample is compared to the population as a whole and to find out whether the chance of getting flu is different for people in different types of occupation.'
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
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'Please tick the box that most closely resembles your main occupation.'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Bitte kreuzen Sie das Kästchen an, das Ihrer Hauptbeschäftigung am nächsten kommt.'
                  },
                ]
              },
            ]
          },
        ]
      },
      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'singleChoiceGroup',
            order: {
              name: 'sequential'
            },
            items: [
              {
                key: '1',
                role: 'option',
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
                key: '2',
                role: 'option',
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
                key: '3',
                role: 'option',
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
                key: '4',
                role: 'option',
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
                key: '5',
                role: 'option',
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
                key: '6',
                role: 'input',
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
}

const Q5: SurveySingleItem = {
  key: '0.5.5',
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
                        str: '0.5.5'
                      },
                      {
                        str: '1.1.5'
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
                              str: '0.5.5'
                            },
                            {
                              str: '1.1.1'
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
                              str: '0.5.5'
                            },
                            {
                              str: '1.1.2'
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
                              str: '0.5.5'
                            },
                            {
                              str: '1.1.3'
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
                              str: '0.5.5'
                            },
                            {
                              str: '1.1.4'
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
  components: {
    role: 'root', items: [
      // title
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
      // text
      {
        role: 'text',
        style: [{ key: 'variant', value: 'body1' }],
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
      // helpGroup
      {
        role: 'helpGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
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
      // warning
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
      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'multipleChoiceGroup',
            order: {
              name: 'sequential'
            },
            items: [
              {
                key: '0',
                role: 'input',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: 'Content EN'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: 'Content DE'
                      },
                    ]
                  },
                ],
                description: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: 'description EN'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: 'description DE'
                      },
                    ]
                  },
                ],
              },
              {
                key: '1',
                role: 'option',
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
                key: '2',
                role: 'option',
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
                key: '-1',
                role: 'input',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: 'Without desc EN'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: 'Without desc DE'
                      },
                    ]
                  },
                ],
              },
              {
                key: '3',
                role: 'option',
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
                description: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: 'Patients are ... explain longer'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: 'Patientinnen und Patienten können hier erklärt werden'
                      },
                    ]
                  },
                ]
              },
              {
                key: '4',
                role: 'option',
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
                key: '5',
                role: 'option',
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
          }
        ]
      },
    ]
  }
}

const Q5b: SurveySingleItem = {
  key: '0.5.5b',
  version: 1,
  validations: [],
  components: {
    role: 'root', items: [
      // title
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
      // text
      {
        role: 'text',
        style: [{ key: 'variant', value: 'body1' }],
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
      // helpGroup
      {
        role: 'helpGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
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
      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'multipleChoiceGroup',
            order: {
              name: 'sequential'
            },
            items: [
              {
                key: '1',
                role: 'option',
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
                            str: '0.5.5b'
                          },
                          {
                            str: '1.1.5'
                          }
                        ]
                      }
                    }
                  ]
                },
              },
              {
                key: '2',
                role: 'option',
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
                            str: '0.5.5b'
                          },
                          {
                            str: '1.1.5'
                          }
                        ]
                      }
                    }
                  ]
                },
              },
              {
                key: '3',
                role: 'option',
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
                            str: '0.5.5b'
                          },
                          {
                            str: '1.1.5'
                          }
                        ]
                      }
                    }
                  ]
                },
              },
              {
                key: '4',
                role: 'option',
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
                            str: '0.5.5b'
                          },
                          {
                            str: '1.1.5'
                          }
                        ]
                      }
                    }
                  ]
                },
              },
              {
                key: '5',
                role: 'option',
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
          }
        ]
      },
    ]
  }
}

const Q6: SurveySingleItem = {
  key: '0.6.6',
  version: 1,
  validations: [],
  components: {
    role: 'root', items: [
      // title
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
      // helpGroup
      {
        role: 'helpGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'Members of larger households, or those with children, may be more likely to catch flu than others.'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Mitglieder größerer Haushalte oder solche mit Kindern können sich mit größerer Wahrscheinlichkeit an der Grippe anstecken als andere.'
                  },
                ]
              },
            ]
          },
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'A household is defined as a group of people (not necessarily related) living at the same address who share cooking facilities and share a living room, sitting room or dining area.'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Ein Haushalt ist definiert als eine Gruppe von Personen (nicht notwendigerweise miteinander verwandt), die an derselben Adresse wohnen, sich die Kochgelegenheit und ein Wohnzimmer, einen Aufenthaltsraum oder einen Essbereich teilen.'
                  },
                ]
              },
            ]
          },
        ]
      },
      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
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
            description: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'description'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'description'
                  },
                ]
              },
            ],
            items: [
              {
                key: '1',
                role: 'option',
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
                key: '2',
                role: 'option',
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
              {
                key: '3',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                ]
              },
              {
                key: '4',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                ]
              },
              {
                key: '5',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                ]
              },
              {
                key: '6',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            key: '1.2',
            role: 'dropDownGroup',
            order: {
              name: 'sequential'
            },
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: '5-18 years:'
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
                key: '1.2.1',
                role: 'option',
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
                key: '1.2.2',
                role: 'option',
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
              {
                key: '1.2.3',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                ]
              },
              {
                key: '1.2.4',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                ]
              },
              {
                key: '1.2.5',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                ]
              },
              {
                key: '1.2.6',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                ]
              },
            ]
          }, {
            key: '2',
            role: 'dropDownGroup',
            order: {
              name: 'sequential'
            },
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: '5-18 years:'
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
                key: '1',
                role: 'option',
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
                key: '2',
                role: 'option',
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
              {
                key: '3',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                ]
              },
              {
                key: '4',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                ]
              },
              {
                key: '5',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                ]
              },
              {
                key: '6',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                ]
              },
            ]
          }, {
            key: '3',
            role: 'dropDownGroup',
            order: {
              name: 'sequential'
            },
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: '19-44 years:'
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
            ],
            description: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'desc'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'desc de'
                  },
                ]
              },
            ],
            items: [
              {
                key: '1',
                role: 'option',
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
                key: '2',
                role: 'option',
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
              {
                key: '3',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                ]
              },
              {
                key: '4',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                ]
              },
              {
                key: '5',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                ]
              },
              {
                key: '6',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                ]
              },
            ]
          }, {
            key: '4',
            role: 'dropDownGroup',
            order: {
              name: 'sequential'
            },
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: '45-64 years:'
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
            ],
            items: [
              {
                key: '1',
                role: 'option',
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
                key: '2',
                role: 'option',
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
              {
                key: '3',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                ]
              },
              {
                key: '4',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                ]
              },
              {
                key: '5',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                ]
              },
              {
                key: '6',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            key: '5',
            role: 'dropDownGroup',
            order: {
              name: 'sequential'
            },
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: '65+ years:'
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
            ],
            items: [
              {
                key: '1',
                role: 'option',
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
                key: '2',
                role: 'option',
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
              {
                key: '3',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '2'
                      },
                    ]
                  },
                ]
              },
              {
                key: '4',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '3'
                      },
                    ]
                  },
                ]
              },
              {
                key: '5',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '4'
                      },
                    ]
                  },
                ]
              },
              {
                key: '6',
                role: 'option',
                content: [
                  {
                    code: 'en',
                    parts: [
                      {
                        str: '5+'
                      },
                    ]
                  },
                  {
                    code: 'de',
                    parts: [
                      {
                        str: '5+'
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
}

const Q3: SurveySingleItem = {
  key: '0.3',
  version: 1,
  validations: [],
  components: {
    role: 'root', items: [
      // title
      {
        role: 'title',
        content: [
          {
            code: 'en',
            parts: [
              {
                str: 'When is your birthday?'
              },
            ]
          },
          {
            code: 'de',
            parts: [
              {
                str: 'Wann ist Ihr Geburtstag?'
              },
            ]
          },
        ]
      },
      // helpGroup
      {
        role: 'helpGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'Members of larger households, or those with children, may be more likely to catch flu than others.'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Mitglieder größerer Haushalte oder solche mit Kindern können sich mit größerer Wahrscheinlichkeit an der Grippe anstecken als andere.'
                  },
                ]
              },
            ]
          },
          {
            role: 'text',
            style: [{ key: 'variant', value: 'subtitle2' }],
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
            role: 'text',
            style: [{ key: 'variant', value: 'body2' }],
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'A household is defined as a group of people (not necessarily related) living at the same address who share cooking facilities and share a living room, sitting room or dining area.'
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Ein Haushalt ist definiert als eine Gruppe von Personen (nicht notwendigerweise miteinander verwandt), die an derselben Adresse wohnen, sich die Kochgelegenheit und ein Wohnzimmer, einen Aufenthaltsraum oder einen Essbereich teilen.'
                  },
                ]
              },
            ]
          },
        ]
      },
      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'dateInput',
            properties: {
              dateInputMode: { str: 'Y' },
            },
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'On '
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Am '
                  },
                ]
              },
            ],
          }
        ]
      },
    ]
  }
}

const QX1: SurveySingleItem = {
  key: '0.6.x1',
  version: 1,
  validations: [],
  components: {
    role: 'root', items: [
      // title
      {
        role: 'title',
        content: [
          {
            code: 'en',
            parts: [
              {
                str: 'Enter a text below'
              },
            ]
          },
          {
            code: 'de',
            parts: [
              {
                str: 'Geben Sie Text ein.'
              },
            ]
          },
        ]
      },

      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'input',
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'Label '
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Label DE '
                  },
                ]
              },
            ],
          }
        ]
      },
    ]
  }
}

const QX2: SurveySingleItem = {
  key: '0.6.x2',
  version: 1,
  validations: [],
  components: {
    role: 'root', items: [
      // title
      {
        role: 'title',
        content: [
          {
            code: 'en',
            parts: [
              {
                str: 'Enter a text below'
              },
            ]
          },
          {
            code: 'de',
            parts: [
              {
                str: 'Geben Sie Text ein.'
              },
            ]
          },
        ]
      },

      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'multilineTextInput',
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'Label '
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Label DE '
                  },
                ]
              },
            ],
          }
        ]
      },
    ]
  }
}

const QX3: SurveySingleItem = {
  key: '0.6.x3',
  version: 1,
  validations: [],
  components: {
    role: 'root', items: [
      // title
      {
        role: 'title',
        content: [
          {
            code: 'en',
            parts: [
              {
                str: 'Enter a number below'
              },
            ]
          },
          {
            code: 'de',
            parts: [
              {
                str: 'Geben Sie eine Zahl ein.'
              },
            ]
          },
        ]
      },

      // responseGroup
      {
        key: '1',
        role: 'responseGroup',
        order: {
          name: 'sequential'
        },
        items: [
          {
            key: '1',
            role: 'numberInput',
            properties: {
              max: { dtype: 'num', num: 4443 },
              min: { dtype: 'num', num: -5 },
              stepSize: { dtype: 'num', num: 0.3 },
            },
            content: [
              {
                code: 'en',
                parts: [
                  {
                    str: 'Label '
                  },
                ]
              },
              {
                code: 'de',
                parts: [
                  {
                    str: 'Label DE '
                  },
                ]
              },
            ],
          }
        ]
      },
    ]
  }
}


const QG0: SurveyGroupItem = {
  key: '0',
  version: 1,
  items: [
    Q3,
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
    {
      key: '0.6',
      version: 1,
      items: [
        Q6,
        QX1,
        QX2,
        QX3,
      ],
    },
  ],
}

export const testSurvey: Survey = {
  current: {
    surveyDefinition: QG0,
  }
}
