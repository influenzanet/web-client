import React from 'react';
import SurveyEndView from '../../../../components/survey/SurveyEndViews/EmojiActionPage/EmojiActionPage';
import { useHistory } from 'react-router-dom';

const SurveyEnd: React.FC = () => {
  const history = useHistory();

  const actionHandler = (action: string) => {
    console.log('action', action);
    switch (action) {
      case 'monitoringDemo':
        history.push('/demo/monitoring');
        break;
      default:
        console.log(action);
        break;
    }
  }

  return (
    <SurveyEndView
      actions={[
        //{ key: 'showStat', label: t('surveyEnd.showStatisticBtn'), color: "secondary" },
        { key: 'monitoringDemo', label: 'Visit Monitoring Demo', color: 'secondary' }
      ]}
      onActionClicked={actionHandler}
      titleText={'Thank you for your participation!'}
      subtitleText={'Stay healthy'}
      actionHeaderText={'Next step:'}
    />
  );
};

export default SurveyEnd;
