import React from 'react';
import { ResponseItem, ItemComponent, isItemGroupComponent, ItemGroupComponent } from 'survey-engine/lib/data_types';

interface ResponseItemViewProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
}

const ResponseItemView: React.FC<ResponseItemViewProps> = (props) => {
  const isGroup = isItemGroupComponent(props.compDef);

  if (isGroup) {
    return <React.Fragment>
      {(props.compDef as ItemGroupComponent).items.map(
        (respItem) =>
          <ResponseItemView
            key={respItem.key}
            compDef={respItem}
            prefill={undefined}
            responseChanged={() => { console.log('todo') }}
          />

      )}
    </React.Fragment>
  }

  return (

    <p>{props.compDef.role}</p>
  );
};

export default ResponseItemView;
