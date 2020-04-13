import React, { useEffect, useState } from 'react';
import { ItemComponent, ItemGroupComponent } from 'survey-engine/lib/data_types/survey-item-component';
import { ResponseItem } from 'survey-engine/lib/data_types/response';
import { FormControl, RadioGroup, FormControlLabel, Radio, Tooltip } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../../utils';
import RadioCtrlWithTextField from './RadioCtrlWithTextField/RadioCtrlWithTextField';

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
          value ? { key, value: value.value } : { key }
        ]
      }
    });
  };

  const handleInputValueChange = (key: string | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!key) { return; }
    setTouched(true);

    const value = (event.target as HTMLInputElement).value;

    setInputValues(prev => {
      setResponse(prevResp => {
        if (!prevResp) { return { key: 'no key found', items: [] } }
        return {
          ...prevResp,
          items: [{
            key,
            value
          }]
        }
      });
      const ind = prev.findIndex(v => v.key === key);
      if (ind > -1) {
        prev[ind] = { key, value }
      }
      return [
        ...prev
      ]
    })
  };

  const getSelectedKey = (): string | undefined => {
    if (!response || !response.items || response.items.length < 1) {
      return '';
    }
    return response.items[0].key;
  }

  const renderResponseOption = (option: ItemComponent): React.ReactNode => {
    if (option.displayCondition === false) {
      return null;
    }
    switch (option.role) {
      case 'option':
        const renderedOption = <FormControlLabel
          key={option.key}
          value={option.key}
          control={<Radio />}
          label={getLocaleStringTextByCode(option.content, props.languageCode)}
          disabled={option.disabled !== undefined}
        />;
        const description = getLocaleStringTextByCode(option.description, props.languageCode);
        if (description) {
          return <Tooltip key={option.key} title={description} arrow>
            {renderedOption}
          </Tooltip>
        }
        return renderedOption;
      case 'input':
        let r = inputValues.find(v => v.key === option.key);
        if (!r) {
          r = { key: option.key ? option.key : 'errorkey', value: '' };
          const nr = r;
          setInputValues(prev => [
            ...prev,
            nr
          ]);
        }
        return <RadioCtrlWithTextField
          key={option.key}
          compDef={option}
          inputValue={r.value ? r.value : ''}
          languageCode={props.languageCode}
          onInputChange={handleInputValueChange(option.key)}
        />
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
