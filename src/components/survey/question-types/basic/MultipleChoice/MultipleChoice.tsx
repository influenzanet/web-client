import React, { useState, useEffect } from 'react';
import { Question, QComponentType, ResponseOptionGroup } from 'survey-engine/lib/data_types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';


interface MultipleChoiceProps {
  question: Question;
  languageCode: string;
  answerChanged: (currenAnsers: string[]) => void;
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

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    props.answerChanged(selectedOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

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

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedOptions(prev => {
        return [...prev, name];
      });
    } else {
      setSelectedOptions(prev => {
        return prev.filter(opt => opt !== name);
      })
    }
  };

  const isChecked = (key: string): boolean => {
    return selectedOptions.includes(key);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        {getTitle(props.question.components, props.languageCode)}
      </Typography>
      <FormControl component="fieldset">
        <FormGroup>
          {
            getResponseGroup() ?
              <React.Fragment> {getResponseGroup()?.items.map(option =>
                <FormControlLabel
                  key={option.key}
                  value={option.key}
                  control={<Checkbox checked={isChecked(option.key)} onChange={handleChange(option.key)} value={option.key} />}
                  label={getTranslation(option, props.languageCode)}
                  disabled={option.disabled !== undefined} // TODO: fix this
                />
              )}</React.Fragment> : null
          }

        </FormGroup>

        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
};

export default MultipleChoice;
