import React, { useState } from 'react';
import { ItemComponent, ResponseItem, isItemGroupComponent, ItemGroupComponent } from 'survey-engine/lib/data_types';
import SingleChoiceGroup from './SingleChoiceGroup/SingleChoiceGroup';

interface ResponseComponentProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (key: string, response: ResponseItem | undefined) => void;
}

const ResponseComponent: React.FC<ResponseComponentProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const isGroup = isItemGroupComponent(props.compDef);
  if (!isGroup) {
    return <p>question root should be a group component</p>
  }

  return <React.Fragment>
    {(props.compDef as ItemGroupComponent).items.map(respComp => {
      switch (respComp.role) {
        case 'singleChoiceGroup':
          return <SingleChoiceGroup
            compDef={respComp}
            prefill={undefined} // todo: look up prefill for comp key
            responseChanged={() => { console.log('todo: handle response for given key') }} // todo: handle response from sub-component
          />
        default:
          return <p>{props.compDef.role}</p>
      }
    })
    }
  </React.Fragment>
};

export default ResponseComponent;
