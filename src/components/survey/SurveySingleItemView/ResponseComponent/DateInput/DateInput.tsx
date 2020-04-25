import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { DatePicker, DatePickerView } from '@material-ui/pickers';

import moment from 'moment';
import { getLocaleStringTextByCode } from '../../utils';
import { Box, Typography } from '@material-ui/core';

interface DateInputProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(
    props.prefill && props.prefill.value ? moment.unix(parseInt(props.prefill.value)) : null,
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

  const handleDateChange = (date: moment.Moment | null) => {
    setTouched(true);

    setSelectedDate(date);
    if (!date) {
      setResponse(undefined);
      return;
    }

    switch (props.compDef.properties?.dateInputMode) {
      case 'YM':
        date = date.clone().utc().startOf('month');
        break;
      case 'Y':
        date = date.clone().utc().startOf('year');
        break;
    }

    setResponse(prev => {
      if (!date) { return undefined; }
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          dtype: 'date',
          value: date.unix().toString(),
        }
      }

      return {
        ...prev,
        dtype: 'date',
        value: date.unix().toString(),
      }
    });
  }

  let format: string;
  let pickerView: string[];
  switch (props.compDef.properties?.dateInputMode) {
    case 'YM':
      pickerView = ['year', 'month'];
      format = 'MMMM, YYYY';
      break;
    case 'Y':
      pickerView = ['year'];
      format = 'YYYY';
      break;
    default:
      pickerView = ['year', 'month', 'date'];
      format = 'L';
      break;
  }

  return (
    <Box display="flex"
      alignItems="center"
      my={1}
    >
      {props.compDef.content ?
        <Box mr={1}>
          <Typography variant="body1" >
            {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
          </Typography>
        </Box> : null}
      <Box>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          views={pickerView as DatePickerView[]}
          format={format}
          maxDate={props.compDef.properties?.max ? moment.unix(props.compDef.properties?.max as number) : undefined}
          minDate={props.compDef.properties?.min ? moment.unix(props.compDef.properties?.min as number) : undefined}
          inputVariant="filled"
          margin="dense"
          inputProps={{
            style: {
              padding: "8px 16px",
            }
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              borderRadius: 1000,
            }
          }}
          placeholder={getLocaleStringTextByCode(props.compDef.description, props.languageCode)}
          clearable
          disabled={props.compDef.disabled !== undefined}
        />
      </Box>
    </Box>
  );
};

export default DateInput;
