import React, { useState, useEffect } from 'react';
import { Question, QComponentType, ResponseOptionGroup } from 'survey-engine/lib/data_types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

interface SingleChoiceProps {
  question: Question;
  languageCode: string;
  answerSelected: (selectedAnswer: string | undefined) => void;
}

const SingleChoice: React.FC<SingleChoiceProps> = (props) => {
  const [value, setValue] = useState<string | undefined>('');

  useEffect(() => {
    props.answerSelected(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const getTitle = (components: Array<QComponentType>, lang: string): string | undefined => {
    const title = components.find(comp => comp.role === 'title');
    if (!title) {
      return undefined;
    }
    console.log(title);
    console.log('check display condition');
    const translation = title.content?.find(cont => cont.code === lang);
    if (!translation) {
      return undefined;
    }
    return translation.parts.join('');
  }

  const getTranslation = (comp: QComponentType, code: string): string | undefined => {
    return comp.content?.find(cont => cont.code === code).parts.join('');
  }

  const getResponseGroup = (): ResponseOptionGroup | undefined => {
    const rg = props.question.components.find(cont => cont.role === 'responseGroup');
    return rg;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const answersGroup = (
    <FormControl component="fieldset"
    //className={classes.formControl}
    >
      <RadioGroup aria-label="options"
        name={getResponseGroup()?.key}
        value={value}
        onChange={handleChange}
      >
        {
          getResponseGroup() ?
            <React.Fragment> {getResponseGroup()?.items.map(option =>
              <FormControlLabel
                key={option.key}
                value={option.key}
                control={<Radio />}
                label={getTranslation(option, props.languageCode)}
                disabled={option.disabled !== undefined} // TODO: fix this
              />
            )}</React.Fragment> : null
        }

        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
  )

  return (
    <div>
      <Typography variant="h6">
        {getTitle(props.question.components, props.languageCode)}
      </Typography>
      {answersGroup}
    </div>

  );
};

export default SingleChoice;
