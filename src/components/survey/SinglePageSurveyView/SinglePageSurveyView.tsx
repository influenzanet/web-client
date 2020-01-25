import React, { useEffect, useState } from 'react';
import { SurveyGroupItem, SurveySingleItem, isSurveyGroupItem } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SingleChoice from '../question-types/basic/SingleChoice/SingleChoice';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

interface SinglePageSurveyViewProps {
  surveyDefinition: SurveyGroupItem;
  // context? - with previous answers
  // submit survey
  // init with temporary loaded results
  // save temporary result
}

const SinglePageSurveyView: React.FC<SinglePageSurveyViewProps> = (props) => {

  const [sEngine, setSEngine] = useState<SurveyEngineCore>(new SurveyEngineCore(props.surveyDefinition));
  const [respCount, setRespCount] = useState(0);


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

  const selectedLangue = 'en';

  const mapSurveyItemToComp = (surveyItem: SurveySingleItem): React.ReactFragment => {
    sEngine.questionDisplayed(surveyItem.key);
    switch (surveyItem.type) {
      case 'basic.input.single-choice':
        return (
          <SingleChoice
            question={surveyItem}
            languageCode={selectedLangue}
            responseChanged={(response) => {
              if (response) {
                sEngine.setResponse(surveyItem.key, response);
                setRespCount(respCount + 1);
              }
              /*
              console.log('handle response');
              console.log(response);*/
            }}
          />
        )

      default:
        return <p>unknown question type: {surveyItem.type}</p>
    }
  }

  return (
    <div >
      {
        surveyItems.map(surveyItem =>
          <Paper key={surveyItem.key}>
            <Box p={2} mt={2}>
              {mapSurveyItemToComp(surveyItem)}
            </Box>
          </Paper>
        )
      }

    </div>
  );
};

export default SinglePageSurveyView;
