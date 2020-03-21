import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface TextInputProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <p>todo: TextInput</p>
  );
};

export default TextInput;
