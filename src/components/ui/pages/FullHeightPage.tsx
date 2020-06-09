import React from 'react';
import { useFullHeightRef } from '../../../hooks/useFullHeightRef';

const FullHeightPage: React.FC = (props) => {
  const containerRef = useFullHeightRef();

  return (
    <div ref={containerRef}>
      {props.children}
    </div>
  );
};

export default FullHeightPage;
