import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem, isItemGroupComponent, ItemGroupComponent } from 'survey-engine/lib/data_types';
import SingleChoiceGroup from './SingleChoiceGroup/SingleChoiceGroup';
import MultipleChoiceGroup from './MultipleChoiceGroup/MultipleChoiceGroup';

interface ResponseComponentProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const ResponseComponent: React.FC<ResponseComponentProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      props.responseChanged(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const isGroup = isItemGroupComponent(props.compDef);
  if (!isGroup) {
    return <p>question root should be a group component</p>
  }

  const getPrefillForItem = (item: ItemComponent): ResponseItem | undefined => {
    if (!props.prefill || !props.prefill.items) { return undefined; }
    const itemPrefill = props.prefill.items.find(ri => ri.key === item.key);
    return itemPrefill;
  }

  const handleItemResponse = (key: string) => (response: ResponseItem | undefined) => {
    setTouched(true);
    setResponse(
      prev => {
        if (!prev || !prev.items) {
          return {
            key: props.compDef.key ? props.compDef.key : 'no key defined',
            items: response ? [response] : [],
          }
        }

        if (!response) {
          return {
            ...prev,
            items: prev.items?.filter(i => i.key !== key),
          }
        }

        const ind = prev.items.findIndex(item => item.key === response.key);
        if (ind > -1) {
          prev.items[ind] = { ...response };
        } else {
          prev.items.push({ ...response });
        }
        return {
          ...prev,
          items: [...prev.items],
        }
      });
  };

  return <React.Fragment>
    {(props.compDef as ItemGroupComponent).items.map(respComp => {
      switch (respComp.role) {
        case 'singleChoiceGroup':
          return <SingleChoiceGroup
            key={respComp.key}
            languageCode={props.languageCode}
            compDef={respComp}
            prefill={getPrefillForItem(respComp)}
            responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
          />
        case 'multipleChoiceGroup':
          return <MultipleChoiceGroup
            key={respComp.key}
            languageCode={props.languageCode}
            compDef={respComp}
            prefill={getPrefillForItem(respComp)}
            responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
          />
        default:
          return <p key={respComp.key}>{respComp.role}</p>
      }
    })
    }
  </React.Fragment>
};

export default ResponseComponent;
