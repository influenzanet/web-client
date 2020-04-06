import React, { useRef, useEffect, Fragment } from 'react';
import { Container, Typography, Box, Card, Paper } from '@material-ui/core';
import FlexGrow from '../../common/FlexGrow';
import ParticleText from '../../common/ParticleText/ParticleText';

interface SurveyEndViewProps {
}

const SurveyEndView: React.FC<SurveyEndViewProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);

  const emojiSize = "142px";

  const emojiList = ['😃', '😊', '🙂', '😍', '😎', '🤩', '🥳', '😱', '👍', '👌', '💪', '🎊', '🎉', '❤️',];

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `calc(100vh - ${containerRef.current.offsetTop}px)`;
      if (emojiRef.current) emojiRef.current.style.top = `${containerRef.current.offsetTop}px`;
    }
  });

  const getRandomEmoji = () => {
    let index = Math.round(Math.random() * (emojiList.length - 1));
    return emojiList[index];
  }

  const Emoji = () => {
    return (
      <Fragment>
        <div style={{ minHeight: emojiSize }} />
        <div ref={emojiRef} style={{ position: "absolute", bottom: 0, left: 0, right: 0, top: 0 }}>
          <ParticleText
            text={getRandomEmoji()}
            fontSize={emojiSize}
            fontFillStyle=""
          />
        </div>
      </Fragment>
    );
  }

  const NextStepsBox = (title: string) => {
    return (
      <div style={{ display: "flex" }}>
        <Paper elevation={0} style={{ width: 280, height: 150, padding: 16, margin: 16, borderRadius: 42 }}>
          <Typography variant="h6" align="center">
            {title}
          </Typography>
        </Paper>
      </div>
    );
  }

  const NextSteps = () => {
    return (
      <Fragment>
        <Typography variant="h5" color="secondary" align="center">
          Here are some ideas for your next steps:
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {NextStepsBox("Learn more about this study")}
          {NextStepsBox("Read the news")}
          {NextStepsBox("Improve your health")}
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Container ref={containerRef} style={{ display: "flex", flexDirection: "column" }}>
        <FlexGrow />
        <Typography variant="h3" color="primary" align="center">
          Thank you for participating!
      </Typography>
        <Typography variant="h3" color="secondary" align="center">
          Stay healthy!
      </Typography>
        <FlexGrow />
        <Emoji />
        <FlexGrow />
        <NextSteps />
      </Container>
    </Fragment>
  );
};

export default SurveyEndView;
