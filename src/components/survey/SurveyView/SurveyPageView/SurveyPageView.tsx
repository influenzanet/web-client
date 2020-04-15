import React, { useState, Dispatch, SetStateAction } from 'react';
import { SurveySingleItem } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SurveySingleItemView from '../../SurveySingleItemView/SurveySingleItemView';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface SurveyPageViewProps {
  surveyEngine: SurveyEngineCore;
  surveyItems: SurveySingleItem[];
  actionLabel: string;
  action: () => void;
  selectedLanguage: string;
  responseCount: number;
  setResponseCount: Dispatch<SetStateAction<number>>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }),
);

const SurveyPageView: React.FC<SurveyPageViewProps> = (props) => {
  const classes = useStyles();

  const [displayedKeys, setDisplayedKeys] = useState<Array<string>>([]);

  const responses = props.surveyEngine.getResponses();

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

    let itemResponse = responses.find((value) => value.key === surveyItem.key);
    let response = (itemResponse) ? itemResponse.response : undefined;

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
      responsePrefill={response}
    />
  }

  const actionButton = (
    <Box textAlign="center" m={1}>
      <Button className={classes.btn} variant="contained" color="primary"
        onClick={props.action}
      >
        {props.actionLabel}
      </Button>
    </Box>
  )

  return (
    <div >
      {
        props.surveyItems.map(surveyItem =>
          <Paper key={surveyItem.key}>
            <Box p={2} mt={2}>
              {mapSurveyItemToComp(surveyItem)}
            </Box>
          </Paper>
        )
      }
      {actionButton}
    </div>
  );
};

export default SurveyPageView;
