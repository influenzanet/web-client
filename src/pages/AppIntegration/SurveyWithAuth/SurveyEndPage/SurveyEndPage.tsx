import React from 'react';
import SurveyEndView from '../../../../components/survey/SurveyEndViews/EmojiActionPage/EmojiActionPage';
import { useTranslation } from 'react-i18next';
import { useRouteMatch, useHistory } from 'react-router-dom';

const SurveyEndPage: React.FC = () => {
  const { t } = useTranslation(['survey']);
  let { path: rootPath } = useRouteMatch();
  const history = useHistory();

  const actionHandler = (action: string) => {
    console.log('action', action);
    switch (action) {
      case 'backToApp':
        let to = rootPath.lastIndexOf('/');
        to = to === -1 ? rootPath.length : to;
        const newUrl = rootPath.substring(0, to);
        history.push(`${newUrl}/close`);
        break;
      default:
        console.log(action);
        break;
    }
  }


  return (
    <SurveyEndView
      actions={[
        { key: 'showStat', label: t('surveyEnd.showStatisticBtn'), color: "secondary" },
        { key: 'backToApp', label: t('surveyEnd.backToAppBtn'), color: "primary" }
      ]}
      onActionClicked={actionHandler}
      titleText={t('surveyEnd.title')}
      subtitleText={t('surveyEnd.subtitle')}
      actionHeaderText={t('surveyEnd.actionHeader')}
    />
  );
};

export default SurveyEndPage;
