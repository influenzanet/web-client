import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface SliderCategoricalProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const SliderCategorical: React.FC<SliderCategoricalProps> = (props) => {
  return (
    <p>SliderCategorical</p>
  );
};

export default SliderCategorical;
