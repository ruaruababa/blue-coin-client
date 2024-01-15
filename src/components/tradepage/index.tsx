import React from 'react';

import Navbar from './components/navbar';
import StackingTab from './components/stackingTab';
import TableContent from './components/table';

const TradingPage = () => {
  return (
    <>
      <Navbar />
      <StackingTab />
      <TableContent />
    </>
  );
};

export default TradingPage;
