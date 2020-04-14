import React, { useState } from 'react';
import { Survey, SurveySingleItem, SurveySingleItemResponse, SurveyContext } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SurveyPageView from './SurveyPageView/SurveyPageView';

interface SurveyViewProps {
  survey: Survey;
  prefills?: SurveySingleItemResponse[];
  context?: SurveyContext;
  onSubmit: (responses: SurveySingleItemResponse[]) => void;
  languageCode: string;
  backBtnText?: string;
  nextBtnText?: string;
  submitBtnText?: string;
  onPageChange?: (currentPage: number, totalPages: number) => void;
  // init with temporary loaded results
  // save temporary result
}

const SurveyView: React.FC<SurveyViewProps> = (props) => {
  const [surveyEngine] = useState<SurveyEngineCore>(new SurveyEngineCore(props.survey, props.context, props.prefills));
  const surveyPages = surveyEngine.getSurveyPages();

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const [responseCount, setResponseCount] = useState(0);

  const onSubmit = () => {
    const resp = surveyEngine.getResponses();
    props.onSubmit(resp);
  }

  const onPageChange = (newPageIndex: number) => {
    if (props.onPageChange) {
      props.onPageChange(newPageIndex, surveyPages.length);
    }
  }

  const goToNextPage = () => {
    if (currentPageIndex < surveyPages.length - 1) {
      let newPageIndex = currentPageIndex + 1;
      setCurrentPageIndex(newPageIndex);
      onPageChange(newPageIndex);
    }
    resetScrollPosition();
  }

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      let newPageIndex = currentPageIndex - 1;
      setCurrentPageIndex(newPageIndex);
      onPageChange(newPageIndex);
    }
  }

  const resetScrollPosition = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const surveyPage = (surveyPageItems: SurveySingleItem[]) => {
    let firstPage = currentPageIndex === 0;
    let lastPage = currentPageIndex >= surveyPages.length - 1;

    let primaryActionLabel = (lastPage) ?
      (props.submitBtnText ? props.submitBtnText : "Submit") :
      (props.nextBtnText ? props.nextBtnText : "Next");
    let primaryAction = (lastPage)
      ? onSubmit
      : goToNextPage

    let secondaryActionLabel = (firstPage) ? "" : (props.backBtnText ? props.backBtnText : "Back");
    let secondaryAction = (firstPage) ? () => null : goToPreviousPage;

    return <SurveyPageView
      surveyEngine={surveyEngine}
      surveyItems={surveyPageItems}
      primaryActionLabel={primaryActionLabel}
      primaryAction={primaryAction}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={secondaryAction}
      selectedLanguage={props.languageCode}
      responseCount={responseCount}
      setResponseCount={setResponseCount}
    />
  }

  return surveyPage(surveyPages[currentPageIndex]);
};

export default SurveyView;
