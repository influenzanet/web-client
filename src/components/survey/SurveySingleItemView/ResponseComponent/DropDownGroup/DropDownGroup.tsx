import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem, ItemGroupComponent } from 'survey-engine/lib/data_types';
import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getLocaleStringTextByCode } from '../../utils';

interface DropDownGroupProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const DropDownGroup: React.FC<DropDownGroupProps> = (props) => {
  const classes = useStyles();

  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const getSelectedKey = (): string | undefined => {
    if (!response || !response.items || response.items.length < 1) {
      return '';
    }
    return response.items[0].key;
  }

  const handleSelectionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTouched(true);
    const key = (event.target as HTMLInputElement).value as string;
    setResponse(prev => {
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          items: [{ key: key }]
        }
      }
      return {
        ...prev,
        items: [
          { key }
        ]
      }
    });
  };

  return (
    <Box display="flex" alignItems="flex-end" my={1}>
      <Box pb="5px" mr={1}>
        <Typography variant="body1">
          {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
        </Typography>
      </Box>
      <FormControl className={classes.formControl} margin="dense" style={{ margin: 0 }}>
        {
          props.compDef.description ?
            <InputLabel id={props.compDef.key + 'label'}>
              {getLocaleStringTextByCode(props.compDef.description, props.languageCode)}
            </InputLabel> : null
        }
        <Select
          margin="dense"
          labelId={props.compDef.key + 'label'}
          id={props.compDef.key}
          value={getSelectedKey()}
          onChange={handleSelectionChange}
        >
          {
            (props.compDef as ItemGroupComponent).items.map(
              item =>
                <MenuItem value={item.key} key={item.key}>
                  {getLocaleStringTextByCode(item.content, props.languageCode)}
                </MenuItem>
            )
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownGroup;
