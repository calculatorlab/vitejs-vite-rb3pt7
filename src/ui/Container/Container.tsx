import React from 'react';
import TitleBar from '../TitleBar/TitleBar';
import MenuBar from '../Menu/MenuBar';
import MenuIconBar from '../Menu/MenuIconBar';
import FormulaBar from '../FormulaBar/FormulaBar';
import DataContainer from '../DataContainer/DataContainer';
import SheetBar from '../SheetBar/SheetBar';

const Container: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <TitleBar />
      <MenuBar />
      <MenuIconBar />
      <FormulaBar />
      <DataContainer />
      <SheetBar />
    </div>
  );
};

export default Container;
