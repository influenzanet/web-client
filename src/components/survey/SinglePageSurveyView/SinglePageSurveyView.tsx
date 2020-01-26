import React, { useState } from 'react';
import { SurveyGroupItem, SurveySingleItem, isSurveyGroupItem } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SingleChoice from '../question-types/basic/SingleChoice/SingleChoice';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MultipleChoice from '../question-types/basic/MultipleChoice/MultipleChoice';
import Button from '@material-ui/core/Button';

interface SinglePageSurveyViewProps {
  surveyDefinition: SurveyGroupItem;
  // context? - with previous answers
  // submit survey
  // init with temporary loaded results
  // save temporary result
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
    },
    btn: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const SinglePageSurveyView: React.FC<SinglePageSurveyViewProps> = (props) => {
  const classes = useStyles();

  const [sEngine,] = useState<SurveyEngineCore>(new SurveyEngineCore(props.surveyDefinition));
  const [respCount, setRespCount] = useState(0);

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const renderedSurvey = sEngine.getRenderedSurvey()
  console.log(renderedSurvey);

  const flattenSurveyItemTree = (renderedTree: SurveyGroupItem): SurveySingleItem[] => {
    const flatTree = new Array<SurveySingleItem>();

    renderedTree.items.forEach(item => {
      // console.log(item);
      if (isSurveyGroupItem(item)) {
        flatTree.push(...flattenSurveyItemTree(item));
      } else {
        flatTree.push({ ...item });
      }
    });
    return flatTree;
  }

  const surveyItems = flattenSurveyItemTree(renderedSurvey);
  console.log(surveyItems);



  const mapSurveyItemToComp = (surveyItem: SurveySingleItem): React.ReactFragment => {
    sEngine.questionDisplayed(surveyItem.key);
    switch (surveyItem.type) {
      case 'basic.input.single-choice':
        return (
          <SingleChoice
            question={surveyItem}
            languageCode={selectedLanguage}
            responseChanged={(response) => {
              if (response) {
                sEngine.setResponse(surveyItem.key, response);
                setRespCount(respCount + 1);
              }
            }}
          />
        )
      case 'basic.input.multiple-choice':
        return (
          <MultipleChoice
            question={surveyItem}
            languageCode={selectedLanguage}
            responseChanged={(response) => {
              if (response) {
                sEngine.setResponse(surveyItem.key, response);
                setRespCount(respCount + 1);
              }
            }}
          />
        )
      default:
        return <p>unknown question type: {surveyItem.type}</p>
    }
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedLanguage(event.target.value as string);
  };

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ]

  const langaugeSelector = (
    <Box display="flex">
      <Box flexGrow={1}></Box>
      <Box>

        <FormControl className={classes.formControl}>
          <Select
            labelId="language-select-label"
            id="language-select"
            color="primary"
            value={selectedLanguage}
            onChange={handleChange}
          >
            {
              availableLanguages.map(item =>
                <MenuItem key={item.code} value={item.code}>
                  {item.label}
                </MenuItem>)
            }
          </Select>
        </FormControl>

      </Box>
    </Box>
  )

  const submitBtnGroup = (
    <Box textAlign="center" m={1}>
      <Box>
        <Button className={classes.btn} variant="contained" color="primary"
          onClick={() => {
            const resp = sEngine.getResponses();
            console.log(resp);
          }}
        >Submit</Button>
        <Button className={classes.btn} variant="contained" color="secondary">Cancel</Button>
      </Box>
    </Box>
  )

  return (
    <div >
      {langaugeSelector}
      {
        surveyItems.map(surveyItem =>
          <Paper key={surveyItem.key}>
            <Box p={2} mt={2}>
              {mapSurveyItemToComp(surveyItem)}
            </Box>
          </Paper>
        )
      }
      {submitBtnGroup}
    </div>
  );
};

export default SinglePageSurveyView;
