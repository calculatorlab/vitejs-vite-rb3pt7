import React, { useState, useRef } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import Scroller from "./Scroller";
import SheetTab from "./SheetTab";

type Sheet = {
  name: string;
  selected: boolean;
};

const SheetBar: React.FC = (): JSX.Element => {
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
  const selectSheet = (
    currentSheetName: string,
    sheetContainerRef: React.RefObject<HTMLDivElement>
  ): void => {
    const updatedSheetDB: Sheet[] = sheetDB.map((s) => {
      return { ...s, selected: s.name === currentSheetName };
    });
    setSheetDB(updatedSheetDB);
    sheetContainerRef.current?.scrollTo({
      left: sheetContainerRef.current.scrollWidth,
    });
  };
  console.log(sheetTabContainerRef.current);
  return (
    <div className="flex-none h-8 flex items-center bg-gray-100">
      <Scroller />
      <div
        ref={sheetTabContainerRef}
        id="temp"
        className="flex-auto flex border-solid border-2 border-gray-300 overflow-x-auto"
      >
        {sheetDB.map((s) => (
          <SheetTab
            key={s.name}
            selected={s.selected}
            name={s.name}
            onClick={() => selectSheet(s.name, sheetTabContainerRef)}
          />
        ))}
        <AddSheetButton addSheetFn={addSheet} />
      </div>
    </div>
  );
};

const AddSheetButton: React.FC<{ addSheetFn: () => void }> = ({
  addSheetFn,
}) => (
  <span className="flex-none px-2.5 text-green-800 hover:scale-110">
    <AddCircleIcon onClick={addSheetFn} />
  </span>
);

export default SheetBar;
