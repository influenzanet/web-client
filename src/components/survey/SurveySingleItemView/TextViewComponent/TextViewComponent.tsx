import React from 'react';
import { ItemComponent } from 'survey-engine/lib/data_types';
import { Typography } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../utils';
import { Variant } from '@material-ui/core/styles/createTypography';

interface TextViewComponentProps {
  compDef: ItemComponent;
  languageCode: string;
}

const TextViewComponent: React.FC<TextViewComponentProps> = (props) => {
  let style = {};

  let variant = 'body1' as Variant | 'annotation';
  if (props.compDef.style) {
    const v = props.compDef.style.find(st => st.key === 'variant')
    if (v) {
      variant = v.value as Variant;
    }
  }

  if (variant === 'annotation') {
    variant = 'body1';
    style = { color: "#757575" }
  }

  return (
    <Typography variant={variant} style={style}>
      {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
    </Typography>
  );
};

export default TextViewComponent;
