import React, { useState } from 'react';
import { SurveySingleItem, ItemGroupComponent, ResponseItem, ItemComponent } from 'survey-engine/lib/data_types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { getLocaleStringTextByCode, getItemComponentTranslationByRole, getItemComponentByRole, getItemComponentsByRole } from './utils';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import HelpGroup from './HelpGroup/HelpGroup';

interface SurveySingleItemViewProps {
  renderItem: SurveySingleItem;
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
    helpBox: {
      backgroundColor: '#f1f1f1',
    }
  }),
);

const SurveySingleItemView: React.FC<SurveySingleItemViewProps> = (props) => {
  const classes = useStyles();

  const [response, setResponse] = useState<ResponseItem | undefined>(props.responsePrefill);
  const [touched, setTouched] = useState(false);


  // find first title
  // find help group
  //

  const renderHelpGroup = (): React.ReactNode => {
    const helpGroup = getItemComponentByRole(props.renderItem.components.items, 'helpGroup') as ItemGroupComponent;
    if (!helpGroup) {
      return null;
    }
    return (
      <HelpGroup
        componentGroup={helpGroup}
        languageCode={props.languageCode}
      />
    )
  }


  return (
    <div className={classes.root}>
      <Box display="flex">
        <Box flexGrow="1">
          <Typography variant="h6">
            {getItemComponentTranslationByRole(props.renderItem.components.items, 'title', props.languageCode)}
          </Typography>
        </Box>
        {renderHelpGroup()}
      </Box>

      <p>SurveySingleItemView</p>
    </div>
  );
};

export default SurveySingleItemView;
