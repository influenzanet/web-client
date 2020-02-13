import React from 'react';
import { ResponseItem, ItemComponent } from 'survey-engine/lib/data_types';

interface ResponseItemViewProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
}

const ResponseItemView: React.FC<ResponseItemViewProps> = (props) => {
  return (
    <p>ResponseItemView</p>
  );
};

export default ResponseItemView;
