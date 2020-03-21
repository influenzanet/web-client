import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface DateInputProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  return (
    <p>todo: implement DateInput</p>
  );
};

export default DateInput;
