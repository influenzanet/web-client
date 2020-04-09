import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem, ItemGroupComponent } from 'survey-engine/lib/data_types';
import { FormControl, FormGroup, FormControlLabel, Checkbox, Box, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getLocaleStringTextByCode } from '../../utils';

interface MultipleChoiceGroupProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputLabel: {
      width: "100%",
    }
  }),
);

const MultipleChoiceGroup: React.FC<MultipleChoiceGroupProps> = (props) => {
  const classes = useStyles();

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
    const key = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      const newRI: ResponseItem = {
        key: key,
      }
      setResponse(prev => {
        if (!prev) {
          return {
            key: props.compDef.key ? props.compDef.key : 'no key found',
            items: [newRI]
          }
        }
        return {
          ...prev,
          items: prev.items ? [...prev.items, newRI] : [newRI]
        }
      });
    } else {
      setResponse(prev => {
        if (!prev) {
          return {
            key: props.compDef.key ? props.compDef.key : 'no key found',
            items: []
          }
        }
        return {
          ...prev,
          items: prev.items?.filter(i => i.key !== key),
        }
      });
    }
  }

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

  const isChecked = (key: string): boolean => {
    if (!response || !response.items || response.items.length < 1) {
      return false;
    }
    return response.items.findIndex(ri => ri.key === key) > -1;
  }

  const isDisabled = (item: ItemComponent): boolean => {
    if (item.disabled === true) {
      const key = item.key ? item.key : 'no key found';
      if (isChecked(key)) {
        setResponse(prev => {
          if (!prev) { return { key: 'no key found', items: [] } }
          return {
            ...prev,
            items: prev.items?.filter(i => i.key !== key),
          }
        });
      }
      return true;
    }
    return false;
  }

  const renderResponseOption = (option: ItemComponent): React.ReactNode => {
    if (option.displayCondition === false) {
      return null;
    }
    switch (option.role) {
      case 'option':
        return <FormControlLabel
          key={option.key}
          value={option.key}
          control={
            <Checkbox checked={isChecked(option.key ? option.key : 'no key found')}
              onChange={handleSelectionChange}
              value={option.key} />}
          label={getLocaleStringTextByCode(option.content, props.languageCode)}
          disabled={isDisabled(option)}
        />
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

        const label = <Box display="flex" height="100%" alignItems="center" width="100%">
          {
            option.content ?
              <Box mr={1}>
                {getLocaleStringTextByCode(option.content, props.languageCode)}
              </Box> : null
          }
          <Box flexGrow={1}>
            <TextField
              fullWidth
              value={r.value ? r.value : ''}
              margin="dense"
              variant="outlined"
              label={getLocaleStringTextByCode(option.description, props.languageCode)}
              InputLabelProps={{ shrink: true }}
              onChange={handleInputValueChange(option.key)}
              disabled={isDisabled(option)}
            ></TextField>
          </Box>
        </Box >;

        return <FormControlLabel
          classes={{ label: classes.inputLabel }}
          key={option.key}
          value={option.key}
          control={
            <Checkbox checked={isChecked(option.key ? option.key : 'no key found')}
              onChange={handleSelectionChange}
              value={option.key} />}
          label={label}
          disabled={isDisabled(option)}
        />
      default:
        return <p key={option.key}>role inside multiple choice group not implemented yet: {option.role}</p>
    }
  }

  return (
    <FormControl component="fieldset">
      <FormGroup>
        {
          (props.compDef as ItemGroupComponent).items.map(option => renderResponseOption(option))
        }
      </FormGroup>
    </FormControl>
  );
};

export default MultipleChoiceGroup;
