import React, { useState, useEffect } from 'react';
import { SurveySingleItem, ItemGroupComponent, ResponseItem, ItemComponent } from 'survey-engine/lib/data_types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { getLocaleStringTextByCode, getItemComponentTranslationByRole, getItemComponentByRole, getItemComponentsByRole } from '../../../utils';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';


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
    warning: {
      color: "#ffce00",
      fontWeight: "bold"
    },
    error: {
      color: "#ff2300",
      fontWeight: "bold"
    },
    helpText: {
      padding: theme.spacing(2),
    }
  }),
);

const MultipleChoice: React.FC<MultipleChoiceProps> = (props) => {
  const classes = useStyles();

  const [response, setResponse] = useState<ResponseItem | undefined>(props.responsePrefill);
  const [touched, setTouched] = useState(false);

  // for helpGroup
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (touched) {
      props.responseChanged(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const getResponseGroup = (): ItemGroupComponent | undefined => {
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
    return (rg as ItemGroupComponent);
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

  const openHelpGroup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseHelpGroup = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'help-group-popover' : undefined;

  const renderHelpGroup = () => {
    const helpGroup = getItemComponentByRole(props.question.components, 'helpGroup') as ItemGroupComponent;
    if (!helpGroup) {
      return null;
    }

    return <Box alignItems="center">
      <IconButton aria-describedby={id} onClick={openHelpGroup} size="small">
        <InfoOutlinedIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseHelpGroup}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={2}>
          {
            helpGroup.items.map((item, index) => {
              const isTitle = item.role === "title";
              return (
                <Typography key={index} variant={isTitle ? "subtitle2" : "body1"}>
                  {getLocaleStringTextByCode(item, props.languageCode)}
                </Typography>
              )
            })
          }
        </Box>
      </Popover>
    </Box>

  }


  const description = getItemComponentTranslationByRole(props.question.components, 'description', props.languageCode);
  return (
    <div className={classes.root}>
      <Box display="flex">
        <Box flexGrow="1">
          <Typography variant="h6">
            {getItemComponentTranslationByRole(props.question.components, 'title', props.languageCode)}
          </Typography>
        </Box>
        {renderHelpGroup()}
      </Box>

      {description ?
        <Typography variant="subtitle2">
          {description}
        </Typography> : null}

      <FormControl component="fieldset">
        <FormGroup>
          {
            getResponseGroup() ?
              <React.Fragment> {getResponseGroup()?.items.map(option => {
                if (option.displayCondition === false) {
                  return null;
                }
                return (
                  <FormControlLabel
                    key={option.key}
                    value={option.key}
                    control={<Checkbox checked={isChecked(option.key ? option.key : 'no key found')} onChange={handleChange(option.key ? option.key : 'no key found')} value={option.key} />}
                    label={getLocaleStringTextByCode(option, props.languageCode)}
                    disabled={isDisabled(option)} // TODO: fix this
                  />
                )
              }
              )}</React.Fragment> : null
          }
        </FormGroup>

        {
          getItemComponentsByRole(props.question.components, 'warning').map(
            (comp, index) => {
              if (comp.displayCondition === false) {
                return null;
              }
              return (<FormHelperText key={index} className={classes.warning}> {getLocaleStringTextByCode(comp, props.languageCode)}</FormHelperText>)
            }
          )
        }
        {
          getItemComponentsByRole(props.question.components, 'error').map(
            (comp, index) => {
              if (comp.displayCondition === false) {
                return null;
              }
              return (<FormHelperText key={index} className={classes.error}> {getLocaleStringTextByCode(comp, props.languageCode)}</FormHelperText>)
            }
          )
        }
      </FormControl>
    </div>
  );
};

export default MultipleChoice;
