import React from 'react';
import { Box, IconButton, Popover, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { ItemGroupComponent } from 'survey-engine/lib/data_types';
import { getLocaleStringTextByCode } from '../utils';

import TextViewComponent from '../TextViewComponent/TextViewComponent';

interface HelpGroupProps {
  componentGroup: ItemGroupComponent;
  languageCode: string;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    helpBox: {
      backgroundColor: '#f1f1f1',
    }
  }),
);


const HelpGroup: React.FC<HelpGroupProps> = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'help-group-popover' : undefined;

  const openHelpGroup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseHelpGroup = () => {
    setAnchorEl(null);
  };

  return (
    <Box alignItems="center">
      <IconButton aria-describedby={id} onClick={openHelpGroup} size="small" color="secondary">
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
        <Box p={2} maxWidth={400} className={classes.helpBox}>
          {
            props.componentGroup.items.map((item, index) => {
              return <TextViewComponent key={index.toFixed()}
                compDef={item}
                languageCode={props.languageCode}
              />
            })
          }
        </Box>
      </Popover>
    </Box>
  );
};

export default HelpGroup;
