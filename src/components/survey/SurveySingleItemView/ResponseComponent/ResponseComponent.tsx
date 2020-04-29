import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem, isItemGroupComponent, ItemGroupComponent } from 'survey-engine/lib/data_types';
import SingleChoiceGroup from './SingleChoiceGroup/SingleChoiceGroup';
import MultipleChoiceGroup from './MultipleChoiceGroup/MultipleChoiceGroup';
import DropDownGroup from './DropDownGroup/DropDownGroup';
import DateInput from './DateInput/DateInput';
import TextInput from './TextInput/TextInput';
import MultilineTextInput from './MultilineTextInput/MultilineTextInput';
import NumberInput from './NumberInput/NumberInput';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import "moment/locale/de";
import "moment/locale/fr";

// pick a date util library
import MomentUtils from '@date-io/moment';
import SliderNumeric from './Sliders/SliderNumeric/SliderNumeric';
import SliderNumericRange from './Sliders/SliderNumericRange/SliderNumericRange';
import SliderCategorical from './Sliders/SliderCategorical/SliderCategorical';
import Matrix from './Matrix/Matrix';
import RoundedBox from '../../../ui/RoundedBox';
import TextViewComponent from '../TextViewComponent/TextViewComponent';
import moment from 'moment';

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

  moment.locale(props.languageCode);

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

  return <MuiPickersUtilsProvider utils={MomentUtils} locale={props.languageCode}>
    <RoundedBox color="#f2f2f2" style={{ padding: "8px 16px" }}>
      {(props.compDef as ItemGroupComponent).items.map((respComp, index) => {
        if (respComp.displayCondition === false) {
          return <div key={respComp.key} hidden></div>;
        }
        switch (respComp.role) {
          case 'text':
            return <TextViewComponent
              key={respComp.key ? respComp.key : index.toString()}
              compDef={respComp}
              languageCode={props.languageCode}
            />
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
          case 'dropDownGroup':
            return <DropDownGroup
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'input':
            return <TextInput
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'multilineTextInput':
            return <MultilineTextInput
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'numberInput':
            return <NumberInput
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'dateInput':
            return <DateInput
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'sliderNumeric':
            return <SliderNumeric
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'sliderNumericRange':
            return <SliderNumericRange
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'sliderCategorical':
            return <SliderCategorical
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          case 'matrix':
            return <Matrix
              key={respComp.key}
              languageCode={props.languageCode}
              compDef={respComp}
              prefill={getPrefillForItem(respComp)}
              responseChanged={handleItemResponse(respComp.key ? respComp.key : 'no key found')}
            />
          default:
            return <p key={respComp.key ? respComp.key : index.toString()}>{respComp.role}</p>
        }
      })
      }
    </RoundedBox>
  </MuiPickersUtilsProvider>
};

export default ResponseComponent;
