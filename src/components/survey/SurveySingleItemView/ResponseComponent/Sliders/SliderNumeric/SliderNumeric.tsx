import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface SliderNumericProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const SliderNumeric: React.FC<SliderNumericProps> = (props) => {
  return (
    <p>SliderNumeric</p>
  );
};

export default SliderNumeric;
