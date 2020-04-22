import React, { useState, useEffect, useRef } from 'react';
import { ItemComponent, ResponseItem, ItemGroupComponent } from 'survey-engine/lib/data_types';
import { FormControl, Select, MenuItem, Box, Typography, Tooltip } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getLocaleStringTextByCode } from '../../utils';

interface DropDownGroupProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
  fullWidth?: boolean;
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
  const labelRef = useRef<HTMLLabelElement>(null);
  const labelWidth = labelRef.current ? labelRef.current.clientWidth : 0;


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

  let renderedInput = <FormControl
    className={classes.formControl}
    variant="filled"
    margin="dense"
    style={{ margin: 0 }}
    fullWidth={props.fullWidth}
  >
    <Select
      margin="dense"
      labelId={props.compDef.key + 'label'}
      labelWidth={labelWidth}
      id={props.compDef.key}
      SelectDisplayProps={{
        style: {
          padding: "8px 32px 8px 16px",
          borderRadius: 1000,
        }
      }}
      disableUnderline={true}
      style={{
        borderRadius: 1000,
        padding: 0,
      }}
      value={getSelectedKey()}
      onChange={handleSelectionChange}
    >
      {
        (props.compDef as ItemGroupComponent).items.map(
          item => {
            if (item.displayCondition) {
              return null;
            }
            return <MenuItem value={item.key} key={item.key} >
              {getLocaleStringTextByCode(item.content, props.languageCode)}
            </MenuItem>
          }
        )
      }
    </Select>
  </FormControl>;

  let description = getLocaleStringTextByCode(props.compDef.description, props.languageCode);

  if (description) {
    renderedInput = <Tooltip title={description} arrow>
      {renderedInput}
    </Tooltip>;
  }

  return (
    <Box display="flex" alignItems="center" my={1}>
      {props.compDef.content ?
        <Box mr={1} minWidth={80} flexShrink={1}>
          <Typography variant="body1">
            {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
          </Typography>
        </Box>
        : null}
      {renderedInput}
    </Box >
  );
};

export default DropDownGroup;
