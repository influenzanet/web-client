import React, { useState, useEffect } from 'react';
import { SurveySingleItem, ResponseGroupComponent, ResponseItem, ResponseComponent } from 'survey-engine/lib/data_types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import { getLocaleStringTextByCode, getItemComponentTranslationByRole } from '../../../utils';
import { TextField, Box } from '@material-ui/core';

interface SingleChoiceProps {
  question: SurveySingleItem;
  languageCode: string;
  responsePrefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
}

const SingleChoice: React.FC<SingleChoiceProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.responsePrefill);
  const [touched, setTouched] = useState(false);

  const [inputValues, setInputValues] = useState<ResponseItem[]>(
    props.responsePrefill && props.responsePrefill.items ? props.responsePrefill.items.slice() : []
  );

  useEffect(() => {
    if (touched) {
      props.responseChanged(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const getResponseGroup = (): ResponseGroupComponent | undefined => {
    const rg = props.question.components.find(cont => cont.role === 'responseGroup');
    if (!rg) {
      return;
    }
    if (!response) {
      setResponse({
        key: rg.key ? rg.key : 'no key found',
        items: []
      })
    }
    return rg as ResponseGroupComponent;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    const key = (event.target as HTMLInputElement).value;
    setResponse(prev => {
      if (!prev) { return { key: 'no key found', items: [] } }
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

  const getResponseOptionLabel = (comp: ResponseComponent) => {
    switch (comp.role) {
      case 'responseOption':
        return <React.Fragment>{getLocaleStringTextByCode(comp, props.languageCode)}</React.Fragment>
      case 'userInput':
        let r = inputValues.find(v => v.key === comp.key);
        if (!r) {
          r = { key: comp.key ? comp.key : 'errorkey', value: '' };
          const nr = r;
          setInputValues(prev => [
            ...prev,
            nr
          ]);
        }

        return (
          <Box display="flex" height="100%" alignItems="center" width="100%">
            <Box mr={1}>
              {getLocaleStringTextByCode(comp, props.languageCode)}
            </Box>
            <Box flexGrow={1}>
              <TextField
                fullWidth
                value={r?.value}
                margin="dense"
                onChange={handleInputValueChange(comp.key)}
              ></TextField>
            </Box>
          </Box>
        )
      default:
        return <React.Fragment>
          Unknown component role: {comp.role}
        </React.Fragment>
    }
  }

  const answersGroup = (
    <FormControl component="fieldset"
    //className={classes.formControl}
    >
      <RadioGroup aria-label="options"
        name={getResponseGroup()?.key}
        value={getSelectedKey()}
        onChange={handleChange}
      >
        {
          getResponseGroup() ?
            <React.Fragment> {getResponseGroup()?.items.map(option =>
              <FormControlLabel
                key={option.key}
                value={option.key}
                control={<Radio />}
                label={getResponseOptionLabel(option as ResponseComponent)}
                disabled={option.disabled !== undefined} // TODO: fix this
              />
            )}</React.Fragment> : null
        }
      </RadioGroup>
    </FormControl>
  )
  const description = getItemComponentTranslationByRole(props.question.components, 'description', props.languageCode);
  return (
    <div>
      <Typography variant="h6">
        {getItemComponentTranslationByRole(props.question.components, 'title', props.languageCode)}
      </Typography>
      {description ?
        <Typography variant="subtitle2">
          {description}
        </Typography> : null}
      {answersGroup}
    </div>

  );
};

export default SingleChoice;
