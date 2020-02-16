import React, { useEffect, useState } from 'react';
import { ItemComponent, isItemGroupComponent, ItemGroupComponent } from 'survey-engine/lib/data_types/survey-item-component';
import { ResponseItem } from 'survey-engine/lib/data_types/response';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../../utils';

interface SingleChoiceGroupProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const SingleChoiceGroup: React.FC<SingleChoiceGroupProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValues, setInputValues] = useState<ResponseItem[]>(
    props.prefill && props.prefill.items ? props.prefill.items.slice() : []
  );


  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);


  const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    const key = (event.target as HTMLInputElement).value;
    setResponse(prev => {
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          items: [{ key: key }]
        }
      }
      const value = inputValues.find(v => v.key === key);
      return {
        ...prev,
        items: [
          {
            key,
            value: value ? value.value : undefined
          }]
      }
    });
  };

  const getSelectedKey = (): string | undefined => {
    if (!response || !response.items || response.items.length < 1) {
      return '';
    }
    return response.items[0].key;
  }


  const renderResponseOption = (option: ItemComponent): React.ReactNode => {
    switch (option.role) {
      case 'responseOption':
        return <FormControlLabel
          key={option.key}
          value={option.key}
          control={<Radio />}
          label={getLocaleStringTextByCode(option, props.languageCode)}
          disabled={option.disabled !== undefined}
        />;
      default:
        return <p key={option.key}>role inside single choice group not implemented yet: {option.role}</p>
    }
  }
  return (
    <FormControl component="fieldset"
    //className={classes.formControl}
    >
      <RadioGroup aria-label="options"
        name={props.compDef.key}
        value={getSelectedKey()}
        onChange={handleSelectionChange}
      >
        {
          (props.compDef as ItemGroupComponent).items.map(option => renderResponseOption(option))
        }
      </RadioGroup>
    </FormControl>
  );
};

export default SingleChoiceGroup;
