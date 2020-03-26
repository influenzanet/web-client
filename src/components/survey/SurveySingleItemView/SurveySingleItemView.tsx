import React, { useState, useEffect } from 'react';
import { SurveySingleItem, ItemGroupComponent, ResponseItem, ItemComponent } from 'survey-engine/lib/data_types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getItemComponentTranslationByRole, getItemComponentByRole } from './utils';
import Box from '@material-ui/core/Box';
import HelpGroup from './HelpGroup/HelpGroup';
import TextViewComponent from './TextViewComponent/TextViewComponent';
import ErrorComponent from './ErrorComponent/ErrorComponent';
import WarningComponent from './WarningComponent/WarningComponent';
import ResponseComponent from './ResponseComponent/ResponseComponent';

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
  }),
);

const SurveySingleItemView: React.FC<SurveySingleItemViewProps> = (props) => {
  const classes = useStyles();

  const [response, setResponse] = useState<ResponseItem | undefined>(props.responsePrefill);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      props.responseChanged(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

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

  const renderBodyComponents = (): React.ReactNode => {
    return <React.Fragment>
      {props.renderItem.components.items.map((component: ItemComponent, index: number) => {
        if (component.displayCondition === false) {
          return null;
        }
        switch (component.role) {
          case 'title':
            return null;
          case 'helpGroup':
            return null;
          case 'responseGroup':
            if (!response) {
              setResponse({
                key: component.key ? component.key : 'no key found',
                items: []
              })
            }
            return <ResponseComponent key={index.toFixed()}
              languageCode={props.languageCode}
              compDef={component}
              prefill={props.responsePrefill}
              responseChanged={(response) => {
                console.log('new response set', response)
                setTouched(true);
                setResponse(response);
              }}
            />
          case 'text':
            return <TextViewComponent key={index.toFixed()}
              compDef={component}
              languageCode={props.languageCode}
            />
          case 'error':
            return <ErrorComponent key={index.toFixed()}
              compDef={component}
              languageCode={props.languageCode}
            />
          case 'warning':
            return <WarningComponent key={index.toFixed()}
              compDef={component}
              languageCode={props.languageCode}
            />
          default:
            console.warn('compment role not implemented: ' + component.role);
            return <p key={index.toFixed()}>{component.role} not implemented</p>
        }
      })}
    </React.Fragment>;
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
      {renderBodyComponents()}
    </div>
  );
};

export default SurveySingleItemView;
