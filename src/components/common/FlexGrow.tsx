import React from 'react';

interface FlexGrowProps {
  flexGrow?: number,
}

const FlexGrow: React.FC<FlexGrowProps> = (props) => {
  let flexGrow = (props.flexGrow) ? props.flexGrow : 1;

  return (
    <div style={{
      flexGrow: flexGrow
    }}
    ></div>
  );
};
export default FlexGrow;
