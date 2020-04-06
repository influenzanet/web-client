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
                key: "141",
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
                key: "142",
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
                key: "143",
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
                key: "144",
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
                key: "145",
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
                key: "146",
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
                key: "147",
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
                key: "148",
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
                key: "149",
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
                key: "150",
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
                key: "151",
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
                key: "152",
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
                key: "153",
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
                key: "154",
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
                key: "155",
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
                key: "156",
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
                key: "157",
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
                key: "158",
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
                key: "159",
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
                key: "20",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Loss of smell"
                      }
                    ]
                  }
                ]
              },
              {
                key: "21",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Loss of taste"
                      }
                    ]
                  }
                ]
              },
              {
                key: "22",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Nose bleed"
                      }
                    ]
                  }
                ]
              },
              {
                key: "160",
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
  condition: {
    name: "and",
    data: [
      // if report any symptoms
      {
        dtype: 'exp',
        exp: {
          name: "or",
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.142'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.143'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.144'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.145'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.146'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.147'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.148'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.149'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.150'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.151'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.152'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.153'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.154'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.155'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.156'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.157'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.158'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.159'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.160'
                        }
                      ]
                    }
                  }
                ]
              }
            },
          ]
        }
      },
      // participant STILL ILL when they last completed the Weekly survey (i.e. they said “I am still ill” in response to Weekly Q4 below last time?)
      {
        dtype: "exp",
        exp: {
          name: "isDefined",
          data: [
            {
              dtype: "exp",
              exp: {
                name: "getObjectByHierarchicalKey",
                data: [
                  {
                    dtype: "exp",
                    exp: {
                      name: "getAttribute",
                      data: [
                        {
                          dtype: "exp",
                          exp: {
                            name: "getLastFromSurveyItemResponses",
                            data: [
                              {
                                dtype: "exp",
                                exp: {
                                  name: "getPreviousResponses",
                                  data: [
                                    {
                                      str: "weekly.36"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          str: "response"
                        }
                      ]
                    }
                  },
                  {
                    str: "1.1.169"
                  }
                ]
              }
            }
          ]
        }
      },
      // have fewer than 15 days elapsed since they last completed the Weekly Survey
      {
        dtype: "exp",
        exp: {
          name: "lt",
          data: [
            {
              dtype: "exp",
              exp: {
                name: "getSecondsSince",
                data: [
                  {
                    dtype: "exp",
                    exp: {
                      name: "getAttribute",
                      data: [
                        {
                          dtype: "exp",
                          exp: {
                            name: "getLastFromSurveyResponses",
                            data: [
                              {
                                str: "weekly"
                              }
                            ]
                          }
                        },
                        {
                          str: "submittedAt"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              dtype: "num",
              num: 1296000,
            }
          ]
        }
      },
      // fewer than 15 days have elapsed since their previous date of symptom onset
      {
        dtype: "exp",
        exp: {
          name: "lt",
          data: [
            {
              dtype: "exp",
              exp: {
                name: "getSecondsSince",
                data: [
                  {
                    dtype: "exp",
                    exp: {
                      name: "getAttribute",
                      data: [
                        {
                          dtype: "exp",
                          exp: {
                            name: "getObjectByHierarchicalKey",
                            data: [
                              {
                                dtype: "exp",
                                exp: {
                                  name: "getAttribute",
                                  data: [
                                    {
                                      dtype: "exp",
                                      exp: {
                                        name: "getLastFromSurveyItemResponses",
                                        data: [
                                          {
                                            dtype: "exp",
                                            exp: {
                                              name: "filterResponsesByIncludesKeys",
                                              data: [
                                                {
                                                  dtype: "exp",
                                                  exp: {
                                                    name: "getPreviousResponses",
                                                    data: [
                                                      {
                                                        str: "weekly.35"
                                                      }
                                                    ]
                                                  }
                                                },
                                                {
                                                  str: "1.1"
                                                },
                                                {
                                                  str: "1.1.169"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      str: "response"
                                    }
                                  ]
                                }
                              },
                              {
                                str: "1.1.169"
                              }
                            ]
                          }
                        },
                        {
                          str: "value"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              dtype: "num",
              num: 1296000,
            }
          ]
        }
      },
    ]
  },
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
                key: "161",
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
                key: "162",
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
                key: "163",
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
  condition: {
    name: "and",
    data: [
      // if report any symptoms
      {
        dtype: 'exp',
        exp: {
          name: "or",
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.142'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.143'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.144'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.145'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.146'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.147'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.148'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.149'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.150'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.151'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.152'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.153'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.154'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.155'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.156'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.157'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.158'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.159'
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
                          str: 'weekly.32'
                        },
                        {
                          str: '1.1.160'
                        }
                      ]
                    }
                  }
                ]
              }
            },
          ]
        }
      },
      // answers to Q2 weekly other than « Yes »
      {
        dtype: "exp",
        exp: {
          name: "not",
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
                          str: 'weekly.33'
                        },
                        {
                          str: '1.1.161'
                        }
                      ]
                    }
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
    role: "root",
    items: [
      {
        role: "title",
        content: [
          {
            code: "en",
            parts: [
              {
                str: "In the 14 days before your symptoms started, did you travel to a foreign country?"
              }
            ]
          }
        ]
      },
      // {
      //     role: 'text',
      //     style: [{ key: 'variant', value: 'body2' }],
      //     content: [
      //         {
      //             code: 'en',
      //             parts: [
      //                 {
      //                     str: 'China (mainland China, Hong Kong, Macao), Singapore, South Korea, Iran, Italy (regions of Lombardy, Venetia, Emilia-Romagna)'
      //                 },
      //             ]
      //         },
      //     ]
      // },
      {
        key: "1",
        role: "responseGroup",
        items: [
          {
            key: "1.1",
            role: "singleChoiceGroup",
            items: [
              {
                key: "1",
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
                key: "0",
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
                key: "2",
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
  condition: {
    name: "and",
    data: [
      // « yes » to Qcov1
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
                    str: 'weekly.Qcov1'
                  },
                  {
                    str: '1.1.1'
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
                key: "1",
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
                key: "2",
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
                key: "3",
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
                key: "4",
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
                key: "5",
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
                key: "1",
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
                key: "0",
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
                key: "2",
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
                key: "1",
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
                key: "2",
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
                key: "3",
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
                key: "4",
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
                key: "5",
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
                str: "In the 14 days before your symptoms started, have you been in close contact with someone for whom tests have confirmed that they have Covid-19?"
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
                key: "1",
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
                key: "0",
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
                key: "2",
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

const Qcov3b: SurveySingleItem = {
  key: "weekly.Qcov3b",
  follows: [
    "weekly.Qcov3",
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
                str: "Do you live in the same household as that person?"
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
                key: "1",
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
                key: "0",
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
                key: "2",
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

const Qcov8: SurveySingleItem = {
  key: "weekly.Qcov8",
  follows: [],
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
                str: "In the 14 days before your symptoms started, have you been in close contact with someone presenting symptoms of COVID-19?"
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
                key: "1",
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
                key: "0",
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
                key: "2",
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

const Qcov8b: SurveySingleItem = {
  key: "weekly.Qcov8b",
  follows: [
    "weekly.Qcov8",
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
                str: "Do you live in the same household as that person?"
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
                key: "1",
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
                key: "0",
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
                key: "2",
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
  follows: [
    "weekly.32",
  ],
  condition: {
    name: "not",
    data: [
      {
        dtype: "exp",
        exp: {
          name: "and",
          data: [
            // if report any symptoms
            {
              dtype: 'exp',
              exp: {
                name: "or",
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.142'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.143'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.144'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.145'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.146'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.147'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.148'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.149'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.150'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.151'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.152'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.153'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.154'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.155'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.156'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.157'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.158'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.159'
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
                                str: 'weekly.32'
                              },
                              {
                                str: '1.1.160'
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                ]
              }
            },
            // participant STILL ILL when they last completed the Weekly survey (i.e. they said “I am still ill” in response to Weekly Q4 below last time?)
            {
              dtype: "exp",
              exp: {
                name: "isDefined",
                data: [
                  {
                    dtype: "exp",
                    exp: {
                      name: "getObjectByHierarchicalKey",
                      data: [
                        {
                          dtype: "exp",
                          exp: {
                            name: "getAttribute",
                            data: [
                              {
                                dtype: "exp",
                                exp: {
                                  name: "getLastFromSurveyItemResponses",
                                  data: [
                                    {
                                      dtype: "exp",
                                      exp: {
                                        name: "getPreviousResponses",
                                        data: [
                                          {
                                            str: "weekly.36"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                str: "response"
                              }
                            ]
                          }
                        },
                        {
                          str: "1.1.169"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            // have fewer than 15 days elapsed since they last completed the Weekly Survey
            {
              dtype: "exp",
              exp: {
                name: "lt",
                data: [
                  {
                    dtype: "exp",
                    exp: {
                      name: "getSecondsSince",
                      data: [
                        {
                          dtype: "exp",
                          exp: {
                            name: "getAttribute",
                            data: [
                              {
                                dtype: "exp",
                                exp: {
                                  name: "getLastFromSurveyResponses",
                                  data: [
                                    {
                                      str: "weekly"
                                    }
                                  ]
                                }
                              },
                              {
                                str: "submittedAt"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    dtype: "num",
                    num: 1296000,
                  }
                ]
              }
            },
            // fewer than 15 days have elapsed since their previous date of symptom onset
            {
              dtype: "exp",
              exp: {
                name: "lt",
                data: [
                  {
                    dtype: "exp",
                    exp: {
                      name: "getSecondsSince",
                      data: [
                        {
                          dtype: "exp",
                          exp: {
                            name: "getAttribute",
                            data: [
                              {
                                dtype: "exp",
                                exp: {
                                  name: "getObjectByHierarchicalKey",
                                  data: [
                                    {
                                      dtype: "exp",
                                      exp: {
                                        name: "getAttribute",
                                        data: [
                                          {
                                            dtype: "exp",
                                            exp: {
                                              name: "getLastFromSurveyItemResponses",
                                              data: [
                                                {
                                                  dtype: "exp",
                                                  exp: {
                                                    name: "filterResponsesByIncludesKeys",
                                                    data: [
                                                      {
                                                        dtype: "exp",
                                                        exp: {
                                                          name: "getPreviousResponses",
                                                          data: [
                                                            {
                                                              str: "weekly.35"
                                                            }
                                                          ]
                                                        }
                                                      },
                                                      {
                                                        str: "1.1"
                                                      },
                                                      {
                                                        str: "1.1.169"
                                                      }
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            str: "response"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      str: "1.1.169"
                                    }
                                  ]
                                }
                              },
                              {
                                str: "value"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    dtype: "num",
                    num: 1296000,
                  }
                ]
              }
            },
          ]
        }
      }
    ]
  },
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
                key: "165",
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
                key: "166",
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
                key: "167",
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
                key: "168",
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
                key: "169",
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
                key: "170",
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
                key: "171",
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
                key: "172",
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
                key: "173",
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
                key: "174",
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
                key: "175",
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
                key: "176",
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
                key: "177",
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
                key: "178",
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
                key: "179",
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
                key: "180",
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
                key: "181",
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
                key: "182",
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
                key: "183",
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
                key: "184",
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
                key: "185",
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
                key: "186",
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
                key: "187",
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
                key: "188",
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
                key: "189",
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
                key: "190",
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
                key: "191",
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
                key: "192",
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
                key: "193",
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
                key: "1",
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
                key: "0",
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
                key: "2",
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
                str: "Because of your symptoms, did you call [write the number of emergency line of your country]?"
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
                key: "1",
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
                key: "0",
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
                key: "2",
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
                key: "202",
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
                key: "203",
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
                key: "204",
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
                key: "205",
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
                key: "206",
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
                key: "207",
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
                key: "216",
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
                key: "217",
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
                key: "218",
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
                key: "219",
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
                key: "220",
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
                key: "7",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Homeopathy"
                      }
                    ]
                  }
                ]
              },
              {
                key: "8",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Alternative medicine (essential oil, phytotherapy, etc.)"
                      }
                    ]
                  }
                ]
              },
              {
                key: "221",
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
                key: "222",
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
                key: "223",
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
                key: "224",
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
                key: "225",
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
                key: "226",
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
                key: "227",
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
                key: "228",
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
                key: "229",
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
                key: "230",
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

const Q14: SurveySingleItem = {
  key: "weekly.Q14",
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
                str: "Because of your symptoms, were you hospitalized?"
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
                key: "1",
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
                key: "0",
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
                key: "231",
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
                key: "232",
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
                key: "233",
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
                key: "234",
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
                key: "235",
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
                key: "236",
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
                key: "237",
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
                key: "238",
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
                key: "239",
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
                key: "240",
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
                key: "241",
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
                key: "242",
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
                key: "243",
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
                key: "244",
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
                str: "Because of your symptoms, did you wear a mask (surgical mask sold in pharmacies, or mask FFP1, FFP2, FFP3)?"
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
                key: "1",
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
                key: "2",
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
                key: "3",
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

const Qcov7: SurveySingleItem = {
  key: "weekly.Qcov7",
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
                key: "1",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Regularly wash or disinfect hands"
                      }
                    ]
                  }
                ]
              },
              {
                key: "2",
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
                key: "3",
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
                key: "4",
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
                key: "5",
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
                key: "11",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Stop greeting by hugging and/or kissing on both cheeks"
                      }
                    ]
                  }
                ]
              },
              {
                key: "6",
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
                key: "7",
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
                key: "8",
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
                key: "9",
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
                key: "10",
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
                key: "13",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Have your food-shopping delivered by a store or a friend/family member "
                      }
                    ]
                  }
                ]
              },
              {
                key: "14",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Avoid seeing friends and family"
                      }
                    ]
                  }
                ]
              },
              {
                key: "15",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Avoid being in contact with people over 65 years or with a chronic disease "
                      }
                    ]
                  }
                ]
              },
              {
                key: "11",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "Avoid being in contact with children"
                      }
                    ]
                  }
                ]
              },
              {
                key: "12",
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
                key: "249",
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
                key: "250",
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
                key: "251",
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
                key: "353",
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
                key: "252",
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
                key: "6",
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
                key: "253",
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
                key: "254",
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

const Qcov9: SurveySingleItem = {
  key: "weekly.Qcov9",
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
                str: "For which reason(s) do you think you have this disease? (Select all the relevant answers)"
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
                key: "1",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "My doctor told me I have this disease"
                      }
                    ]
                  }
                ]
              },
              {
                key: "2",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "I had a laboratory confirmation that I have this disease"
                      }
                    ]
                  }
                ]
              },
              {
                key: "3",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "I had direct contact with a laboratory confirmed case"
                      }
                    ]
                  }
                ]
              },
              {
                key: "4",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "I had close contact with someone for whom a doctor diagnosed this disease "
                      }
                    ]
                  }
                ]
              },
              {
                key: "5",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "I was in close contact with someone presenting symptoms of this disease"
                      }
                    ]
                  }
                ]
              },
              {
                key: "6",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "I was at an event/location with a confirmed case"
                      }
                    ]
                  }
                ]
              },
              {
                key: "7",
                role: "option",
                content: [
                  {
                    code: "en",
                    parts: [
                      {
                        str: "I think I have this disease"
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
    Qcov3b,
    Qcov8,
    Qcov8b,
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
    Qcov5,
    Q8,
    Q8b,
    Q9,
    Q9b,
    Q14,
    Q10,
    Q10b,
    Q10c,
    Qcov6,
    Qcov7,
    Q11,
    Qcov9,
  ]
}
