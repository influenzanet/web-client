import React, { useState } from 'react';
import { Survey, SurveySingleItem } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import { flattenSurveyItemTree } from 'survey-engine/lib/utils';
import SurveySingleItemView from '../SurveySingleItemView/SurveySingleItemView';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface SinglePageSurveyViewProps {
  surveyDefinition: Survey;
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

  const [displayedKeys, setDisplayedKeys] = useState<Array<string>>([]);

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const renderedSurvey = sEngine.getRenderedSurvey()

  const surveyItems = flattenSurveyItemTree(renderedSurvey);
  const currentDisplayedKeys = surveyItems.map(item => item.key);
  if (displayedKeys.length > 0 && !displayedKeys.every(key => currentDisplayedKeys.includes(key))) {
    setDisplayedKeys(prev => {
      return prev.filter(key => currentDisplayedKeys.includes(key));
    })
  }


  const mapSurveyItemToComp = (surveyItem: SurveySingleItem): React.ReactFragment => {
    if (!displayedKeys.includes(surveyItem.key)) {
      sEngine.questionDisplayed(surveyItem.key);
      setDisplayedKeys(prev => {
        return [...prev, surveyItem.key];
      })
    }

    return <SurveySingleItemView
      renderItem={surveyItem}
      languageCode={selectedLanguage}
      responseChanged={(response) => {
        if (response) {
          sEngine.setResponse(surveyItem.key, response);
          setRespCount(respCount + 1);
        }
      }}
    />
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedLanguage(event.target.value as string);
  };

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ]

  const languageSelector = (
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
            console.log(JSON.stringify(resp));
          }}
        >Submit</Button>
        <Button className={classes.btn} variant="contained" color="secondary">Cancel</Button>
      </Box>
    </Box>
  )

  return (
    <div >
      {languageSelector}
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
