import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import { Container, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import FlexGrow from '../../../../components/common/FlexGrow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      width: 200,
    },
  }),
);


const ErrorPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['app']);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, [])


  return (
    <Container ref={containerRef} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <FlexGrow />
      <Typography variant="h3" color="primary" align="center">
        {t("app:errorPage.errorMsgBig")}
      </Typography>
      <div style={{ height: 8 }} />
      <Typography variant="h5" color="secondary" align="center">
        {t("app:errorPage.errorMsgSmall")}
      </Typography>
      <div style={{ height: 64 }} />
      <RoundedButton
        color="primary"
        onClick={() => history.goBack()}
        className={classes.btn}
      >
        {t("app:errorPage.retryButtonLabel")}
      </RoundedButton>
      <FlexGrow />
    </Container>
  );
};

export default ErrorPage;
