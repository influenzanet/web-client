import React, { useEffect } from 'react';

const ClosePage: React.FC = () => {
  useEffect(() => {
    window.onbeforeunload = null;
    window.location.reload();
  }, [])
  return (
    <p>ClosePage</p>
  );
};

export default ClosePage;
