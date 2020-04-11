import React, { useState, Dispatch, SetStateAction } from 'react';
import { SurveySingleItem } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SurveySingleItemView from '../../SurveySingleItemView/SurveySingleItemView';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface SurveyPageViewProps {
  surveyEngine: SurveyEngineCore;
  surveyItems: SurveySingleItem[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  primaryAction: () => void;
  secondaryAction: () => void;
  selectedLanguage: string;
  setSelectedLanguage: Dispatch<SetStateAction<string>>;
  responseCount: number;
  setResponseCount: Dispatch<SetStateAction<number>>
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

const SurveyPageView: React.FC<SurveyPageViewProps> = (props) => {
  const classes = useStyles();

  const [displayedKeys, setDisplayedKeys] = useState<Array<string>>([]);

  const currentDisplayedKeys = props.surveyItems.map(item => item.key);
  if (displayedKeys.length > 0 && !displayedKeys.every(key => currentDisplayedKeys.includes(key))) {
    setDisplayedKeys(prev => {
      return prev.filter(key => currentDisplayedKeys.includes(key));
    })
  }

  const mapSurveyItemToComp = (surveyItem: SurveySingleItem): React.ReactFragment => {
    if (!displayedKeys.includes(surveyItem.key)) {
      props.surveyEngine.questionDisplayed(surveyItem.key);
      setDisplayedKeys(prev => {
        return [...prev, surveyItem.key];
      })
    }

    return <SurveySingleItemView
      renderItem={surveyItem}
      languageCode={props.selectedLanguage}
      responseChanged={(response) => {
        if (response) {
          props.surveyEngine.setResponse(surveyItem.key, response);
          // Rerender page by updating state
          props.setResponseCount(props.responseCount + 1);
        }
      }}
    />
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.setSelectedLanguage(event.target.value as string);
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
            value={props.selectedLanguage}
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
        {(props.secondaryActionLabel === "") ? null
          :
          <Button className={classes.btn} variant="contained" color="secondary"
            onClick={props.secondaryAction}
          >
            {props.secondaryActionLabel}
          </Button>
        }
        <Button className={classes.btn} variant="contained" color="primary"
          onClick={props.primaryAction}
        >
          {props.primaryActionLabel}
        </Button>
      </Box>
    </Box>
  )

  return (
    <div >
      {languageSelector}
      {
        props.surveyItems.map(surveyItem =>
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

export default SurveyPageView;
