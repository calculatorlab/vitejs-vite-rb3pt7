import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Tabs from '@mui/material/Tabs';

type Sheet = {
  name: string;
  selected: boolean;
};

const SheetBar: React.FC = () => {
  const sheetTabContainerRef = useRef<HTMLDivElement>(null);
  const sheets: Sheet[] = [];
  const [sheetCounter, setSheetCounter] = useState<number>(0);
  const [sheetDB, setSheetDB] = useState<Sheet[]>(sheets);
  const addSheet = (): void => {
    const newCount = sheetCounter + 1;
    setSheetCounter(newCount);
    const newSheet: Sheet = { name: `Sheet ${newCount}`, selected: true };
    const updatedSheetDB: Sheet[] = sheetDB.map((s) => {
      return { ...s, selected: false };
    });
    updatedSheetDB.push(newSheet);
    setSheetDB(updatedSheetDB);
  };
  const selectSheet = (currentSheetName: string): void => {
    const updatedSheetDB: Sheet[] = sheetDB.map((s) => {
      return { ...s, selected: s.name === currentSheetName };
    });
    setSheetDB(updatedSheetDB);
  };
  console.log(sheetTabContainerRef.current);
  return (
    <div className="flex-none h-8 flex items-center bg-gray-100">
      <Scroller />
      <div
        ref={sheetTabContainerRef}
        id="temp"
        className="flex-auto flex border-solid border-2 border-gray-300"
      >
        {sheetDB.map((s) => (
          <SheetTab
            key={s.name}
            selected={s.selected}
            name={s.name}
            onClick={() => selectSheet(s.name)}
          />
        ))}
        <span className="flex-none px-2.5 text-green-800 hover:scale-110">
          <AddCircleIcon onClick={addSheet} />
        </span>
      </div>
    </div>
  );
};

const Scroller: React.FC = () => (
  <div className="flex-none flex items-center">
    <span className="px-2.5 hover:bg-gray-300">
      <ArrowLeftIcon />
    </span>
    <span className="px-2.5 hover:bg-gray-300">
      <ArrowRightIcon />
    </span>
  </div>
);

const SheetTab: React.FC<{
  name: string;
  onClick: React.MouseEventHandler;
  selected?: boolean;
}> = (props) => (
  <div
    className={classnames(
      'flex-none mx-0.5 px-2.5 bg-white hover:cursor-pointer',
      props.selected
        ? 'border-solid border-b-4 border-green-800'
        : 'hover:font-bold'
    )}
    onClick={props.onClick}
  >
    {props.name}
  </div>
);
export default SheetBar;
