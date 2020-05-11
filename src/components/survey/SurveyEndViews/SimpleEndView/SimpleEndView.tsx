import React, { Fragment } from 'react';
import { Container, Typography, Grid, Box, makeStyles, createStyles, Theme } from '@material-ui/core';
import FlexGrow from '../../../common/FlexGrow';
import RoundedButton from '../../../ui/buttons/RoundedButton';


interface SimpleEndViewProps {
  actions: Array<{ key: string; label: string; color?: "primary" | "secondary" }>;
  onActionClicked: (action: string) => void;

  titleText?: string;
  subtitleText?: string;
  actionHeaderText?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }),
);

const SimpleEndView: React.FC<SimpleEndViewProps> = (props) => {
  const classes = useStyles();

  const Emoji = () => {
    return (
      <Box py={10} textAlign="center">
        <Typography variant="h1">
          {'😷'}
        </Typography>
      </Box>
    );
  }

  const NextSteps = () => {
    return (
      <Box pb={5}>
        {props.actions.length > 0 ?
          <React.Fragment>
            <Typography variant="h5" color="secondary" align="center">
              {props.actionHeaderText ? props.actionHeaderText : 'Here are some ideas for your next steps:'}
            </Typography>
            <Grid container justify="center">
              {props.actions.map(action =>
                <RoundedButton className={classes.btn} key={action.key}
                  color={action.color}
                  onClick={() => { props.onActionClicked(action.key) }}
                >
                  {action.label}
                </RoundedButton>
              )}
            </Grid>
          </React.Fragment> : null}
      </Box>
    );
  }

  return (
    <Fragment>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <FlexGrow />
        <Box pt={8}>
          <Typography variant="h3" color="primary" align="center">
            {props.titleText ? props.titleText : 'Thank you for participating!'}
          </Typography>
          {props.subtitleText ?
            <Typography variant="h3" color="secondary" align="center">
              {props.subtitleText}
            </Typography> : null}
        </Box>
        <FlexGrow />
        <Emoji />
        <FlexGrow />

        <NextSteps />
      </Container>
    </Fragment>
  );
};

export default SimpleEndView;


