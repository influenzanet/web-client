import React, { useState, useEffect } from 'react';
import { SurveySingleItem, ResponseGroupComponent, ResponseItem } from 'survey-engine/lib/data_types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import { getLocaleStringTextByCode, getItemComponentTranslationByRole } from '../../../utils';

interface SingleChoiceProps {
  question: SurveySingleItem;
  languageCode: string;
  responsePrefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
}

const SingleChoice: React.FC<SingleChoiceProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.responsePrefill);
  const [touched, setTouched] = useState(false);

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
      return {
        ...prev,
        items: [{ key }]
      }
    });
  };

  const getSelectedKey = (): string | undefined => {
    if (!response || !response.items || response.items.length < 1) {
      return '';
    }
    return response.items[0].key;
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
                label={getLocaleStringTextByCode(option, props.languageCode)}
                disabled={option.disabled !== undefined} // TODO: fix this
              />
            )}</React.Fragment> : null
        }
      </RadioGroup>
    </FormControl>
  )

  return (
    <div>
      <Typography variant="h6">
        {getItemComponentTranslationByRole(props.question.components, 'title', props.languageCode)}
      </Typography>
      {answersGroup}
    </div>

  );
};

export default SingleChoice;
