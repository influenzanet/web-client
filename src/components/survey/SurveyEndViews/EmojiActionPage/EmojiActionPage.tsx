import React, { useRef, useEffect, Fragment } from 'react';
import { Container, Typography, Grid, Box, makeStyles, createStyles, Theme } from '@material-ui/core';
import FlexGrow from '../../../common/FlexGrow';
import ParticleText from '../../../common/ParticleText/ParticleText';
import RoundedButton from '../../../ui/buttons/RoundedButton';

interface EmojiActionPageProps {
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

const EmojiActionPage: React.FC<EmojiActionPageProps> = (props) => {
  const classes = useStyles();

  const containerRef = useRef<HTMLDivElement>(null);
  const emojiPlaceholderRef = useRef<HTMLDivElement>(null);

  const emojiSize = 7.4;

  const emojiList = ['😃', '😊', '🙂', '😍', '😎', '🤩', '🥳', '😱', '👍', '👏', '👌', '💪', '🎊', '🎉', '❤️', '😷', '🧼🖐️'];

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  });

  const getRandomEmoji = () => {
    let index = Math.floor(Math.random() * Math.floor(emojiList.length));
    return emojiList[index];
  }

  const Emoji = () => {
    return (
      <Box py={10}>
        <div ref={emojiPlaceholderRef} style={{ minHeight: `${emojiSize}em` }} />
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, top: 0, pointerEvents: "none" }}>
          <ParticleText
            text={getRandomEmoji()}
            fontSize={emojiSize}
            fontFillStyle=""
            placeholderRef={emojiPlaceholderRef}
          />
        </div>
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
      <Container ref={containerRef} style={{ display: "flex", flexDirection: "column" }}>
        <FlexGrow />
        <Box pt={4}>
          <Typography variant="h3" color="primary" align="center">
            {props.titleText ? props.titleText : 'Thank you for participating!'}
          </Typography>
          <Typography variant="h3" color="secondary" align="center">
            {props.subtitleText ? props.subtitleText : 'Stay healthy!'}
          </Typography>
        </Box>
        <FlexGrow />
        <Emoji />
        <FlexGrow />

        <NextSteps />
      </Container>
    </Fragment>
  );
};

export default EmojiActionPage;
