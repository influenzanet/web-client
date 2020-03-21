import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface MultilineTextInputProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const MultilineTextInput: React.FC<MultilineTextInputProps> = (props) => {
  return (
    <p>todo: MultilineTextInput</p>
  );
};

export default MultilineTextInput;
