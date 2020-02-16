import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface MultipleChoiceGroupProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const MultipleChoiceGroup: React.FC<MultipleChoiceGroupProps> = (props) => {
  return (
    <p>mutiple choice: {props.compDef.role}</p>
  );
};

export default MultipleChoiceGroup;
