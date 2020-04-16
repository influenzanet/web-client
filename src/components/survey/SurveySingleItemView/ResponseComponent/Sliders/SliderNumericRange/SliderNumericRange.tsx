import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface SliderNumericRangeProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const SliderNumericRange: React.FC<SliderNumericRangeProps> = (props) => {
  return (
    <p>SliderNumericRange</p>
  );
};

export default SliderNumericRange;
