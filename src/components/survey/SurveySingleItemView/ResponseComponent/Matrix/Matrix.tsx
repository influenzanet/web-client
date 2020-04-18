import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem, ItemGroupComponent } from 'survey-engine/lib/data_types';
import { getLocaleStringTextByCode, getItemComponentByRole } from '../../utils';
import { makeStyles, Theme, createStyles, Tooltip, Radio } from '@material-ui/core';
import clsx from 'clsx';

interface MatrixProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflowX: 'auto',
      padding: theme.spacing(2),
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
      justifyContent: 'center',
      textAlign: 'center',
    },
    table: {
      margin: '0 auto',
      borderCollapse: 'collapse',
      borderRadius: 15,
      overflow: 'hidden'
    },
    headerRow: {
      backgroundColor: '#e5e5e5',
    },
    cell: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      minWidth: 33,
    },
    cellRadio: {
      textAlign: 'center'
    },
    rowBackground1: {
      backgroundColor: '#dedede',
    },
    rowBackground2: {
      backgroundColor: '#e5e5e5',
    }
  }),
);

const Matrix: React.FC<MatrixProps> = (props) => {
  const classes = useStyles();

  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);



  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const radioSelectionChanged = (rowKey: string | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!rowKey) { return; }
    const selectedValue = event.target.value;

    setTouched(true);
    setResponse(prev => {
      if (!prev || !prev.items) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          items: [{
            key: rowKey, items: [{ key: selectedValue }]
          }]
        }
      }

      const rowIndex = prev.items.findIndex(item => item.key === rowKey);
      const items = [...prev.items];
      if (rowIndex > -1) {
        items[rowIndex].items = [{ key: selectedValue }];
      } else {
        items.push({
          key: rowKey, items: [{ key: selectedValue }]
        });
      }

      return {
        ...prev,
        items: items
      }
    });
  }

  const radioSelected = (rowKey: string | undefined, itemKey: string | undefined): boolean => {
    if (!rowKey || !itemKey) { return false; }

    if (!response || !response.items || response.items.length < 1) {
      return false;
    }

    const rowResponse = response.items.find(item => item.key === rowKey);
    if (!rowResponse || !rowResponse.items || rowResponse.items.length < 1) { return false; }

    return rowResponse.items[0].key === itemKey;
  }

  const renderRadioRow = (compDef: ItemGroupComponent, index: number): React.ReactNode => {
    const cells = (compDef as ItemGroupComponent).items.map((cell, cindex) => {
      let currentCellContent: React.ReactNode | null;

      switch (cell.role) {
        case 'label':
          currentCellContent = getLocaleStringTextByCode(cell.content, props.languageCode);
          break;
        case 'option':
          currentCellContent = <Radio
            checked={radioSelected(compDef.key, cell.key)}
            // checked={selectedValue === 'a'}
            // onChange={handleChange}
            onChange={radioSelectionChanged(compDef.key)}
            value={cell.key}
            disabled={compDef.disabled !== undefined || cell.disabled !== undefined}
            inputProps={{ 'aria-label': cell.key }}
          />;
          break;
        default:
          console.warn('cell role for matrix question unknown: ', cell.role);
          break;
      }
      return <td
        key={cell.key ? cell.key : cindex.toString()}
        className={clsx(classes.cell, {
          [classes.cellRadio]: cell.role === 'option',
          [classes.rowBackground1]: index % 2 === 1,
          [classes.rowBackground2]: index % 2 === 0,
        })}
      >{currentCellContent}</td>
    }

    );
    return <tr key={compDef.key}
    >
      {cells}
    </tr>
  }

  const renderResponseRow = (compDef: ItemGroupComponent, index: number): React.ReactNode => {
    const cells = (compDef as ItemGroupComponent).items.map((cell, index) => {
      let currentCellContent: React.ReactNode | null;
      switch (cell.role) {
        case 'text':
          currentCellContent = getLocaleStringTextByCode(cell.content, props.languageCode);
          break;
        default:
          console.warn('cell role for matrix question unknown: ', cell.role);
          break;
      }
      return <td
        key={cell.key ? cell.key : index.toString()}
        className={classes.cell}
      >{currentCellContent}</td>
    }

    );
    return <tr key={compDef.key}
    >
      {cells}
    </tr>
  }

  const renderTableRow = (compDef: ItemGroupComponent, index: number): React.ReactNode => {
    if (compDef.displayCondition === false) {
      return null;
    }
    switch (compDef.role) {
      case 'radioRow':
        return renderRadioRow(compDef, index);
      case 'responseRow':
        return renderResponseRow(compDef, index);
      case 'headerRow':
        // header is already rendered separately
        return null;
      default:
        console.warn('row role for matrix question unknown: ', compDef.role);
        return null;
    }
  }

  const renderHeaderRow = (header: ItemGroupComponent | undefined): React.ReactNode => {
    if (!header) {
      return null;
    }
    const cells = header.items.map((cell, index) => {
      let currentCellContent: React.ReactNode | null;
      switch (cell.role) {
        case 'text':
          currentCellContent = getLocaleStringTextByCode(cell.content, props.languageCode);
          break;
        default:
          console.warn('cell role for matrix header unknown: ', cell.role);
          break;
      }
      const description = getLocaleStringTextByCode(cell.description, props.languageCode);
      if (description) {

      }
      return <th
        key={cell.key ? cell.key : index.toString()}
        className={classes.cell}
      >
        {description ?
          <Tooltip title={description} arrow>
            <span>{currentCellContent}</span>
          </Tooltip> :
          currentCellContent
        }
      </th>
    })
    return <tr
      key={header.key ? header.key : "header"}
      className={classes.headerRow}
    >
      {cells}
    </tr>
  }

  const matrixDef = (props.compDef as ItemGroupComponent);
  const headerRow = getItemComponentByRole(matrixDef.items, 'headerRow');

  return (
    <div className={classes.root}>
      <table className={classes.table}>
        <thead>
          {renderHeaderRow(headerRow as ItemGroupComponent)}
        </thead>
        <tbody>
          {matrixDef.items.map((row, index) => renderTableRow(row as ItemGroupComponent, index))}
        </tbody>
      </table>
    </div>
  );
};

export default Matrix;
