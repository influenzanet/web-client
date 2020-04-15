import React, { useEffect, Fragment, useRef } from 'react';
import { Typography, Container } from '@material-ui/core';
import FlexGrow from '../../../../components/common/FlexGrow';
import { useTranslation } from 'react-i18next';

const ClosePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['app']);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }

    window.onbeforeunload = null;
    window.location.reload();
  }, [])


  return (
    <Fragment>
      <Container ref={containerRef} style={{ display: "flex", flexDirection: "column" }}>
        <FlexGrow />
        <Typography variant="h3" color="primary" align="center">
          {t("app:closeMsgBig")}
        </Typography>
        <div style={{ height: 8 }} />
        <Typography variant="h5" color="secondary" align="center">
          {t("app:closeMsgSmall")}
        </Typography>
        <FlexGrow />
      </Container>
    </Fragment>
  );
};

export default ClosePage;
