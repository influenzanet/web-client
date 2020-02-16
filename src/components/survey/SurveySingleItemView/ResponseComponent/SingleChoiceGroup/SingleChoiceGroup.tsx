import React from 'react';
import { ItemComponent, isItemGroupComponent } from 'survey-engine/lib/data_types/survey-item-component';
import { ResponseItem } from 'survey-engine/lib/data_types/response';

interface SingleChoiceGroupProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (key: string, response: ResponseItem | undefined) => void;
}

const SingleChoiceGroup: React.FC<SingleChoiceGroupProps> = (props) => {
  const isGroup = isItemGroupComponent(props.compDef);
  return (
    <p>SingleChoiceGroup</p>
  );
};

export default SingleChoiceGroup;
