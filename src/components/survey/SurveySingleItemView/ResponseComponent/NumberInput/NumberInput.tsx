import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface NumberInputProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  return (
    <p>todo: NumberInput</p>
  );
};

export default NumberInput;
