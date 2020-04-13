import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
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
  primaryActionLabel: string;
  secondaryActionLabel: string;
  primaryAction: () => void;
  secondaryAction: () => void;
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

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [props.surveyItems]);

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
