import React, { useState, useEffect } from 'react';
import { SurveySingleItem, ResponseGroupComponent, ResponseItem, ItemComponent } from 'survey-engine/lib/data_types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { getLocaleStringTextByCode, getItemComponentTranslationByRole, getItemComponentByRole, getItemComponentsByRole } from '../../../utils';


interface MultipleChoiceProps {
  question: SurveySingleItem;
  languageCode: string;
  responsePrefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
    },
  }),
);

const MultipleChoice: React.FC<MultipleChoiceProps> = (props) => {
  const classes = useStyles();

  const [response, setResponse] = useState<ResponseItem | undefined>(props.responsePrefill);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      props.responseChanged(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const getResponseGroup = (): ResponseGroupComponent | undefined => {
    const rg = getItemComponentByRole(props.question.components, 'responseGroup');
    if (!rg) {
      return;
    }
    if (!response) {
      setResponse({
        key: rg.key ? rg.key : 'no key found',
        items: []
      })
    }
    return (rg as ResponseGroupComponent);
  }

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    if (event.target.checked) {
      const newRI: ResponseItem = {
        key: name,
      }

      setResponse(prev => {
        if (!prev) { return { key: 'no key found', items: [] } }
        return {
          ...prev,
          items: prev.items ? [...prev.items, newRI] : [newRI]
        }
      });
    } else {
      setResponse(prev => {
        if (!prev) { return { key: 'no key found', items: [] } }
        return {
          ...prev,
          items: prev.items?.filter(i => i.key !== name),
        }
      });
    }
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

  const description = getItemComponentTranslationByRole(props.question.components, 'description', props.languageCode);
  return (
    <div className={classes.root}>
      <Typography variant="h6">
        {getItemComponentTranslationByRole(props.question.components, 'title', props.languageCode)}
      </Typography>
      {description ?
        <Typography variant="subtitle2">
          {description}
        </Typography> : null}

      <FormControl component="fieldset">
        <FormGroup>
          {
            getResponseGroup() ?
              <React.Fragment> {getResponseGroup()?.items.map(option =>
                <FormControlLabel
                  key={option.key}
                  value={option.key}
                  control={<Checkbox checked={isChecked(option.key ? option.key : 'no key found')} onChange={handleChange(option.key ? option.key : 'no key found')} value={option.key} />}
                  label={getLocaleStringTextByCode(option, props.languageCode)}
                  disabled={isDisabled(option)} // TODO: fix this
                />
              )}</React.Fragment> : null
          }
        </FormGroup>

        {
          getItemComponentsByRole(props.question.components, 'warning').map(
            (comp, index) => <FormHelperText key={index}> {getLocaleStringTextByCode(comp, props.languageCode)}</FormHelperText>
          )
        }
      </FormControl>
    </div>
  );
};

export default MultipleChoice;
