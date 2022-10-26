import React, { useState, useRef, useEffect } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import Scroller from "./Scroller";
import SheetTab from "./SheetTab";

type Sheet = {
  name: string;
  selected: boolean;
};

const SheetBar = () => {
  const sheetsContainerRef = useRef<HTMLDivElement>(null);

  const [sheetCounter, setSheetCounter] = useState<number>(0);
  const [sheetDB, setSheetDB] = useState<Sheet[]>([]);

  const addSheet = (sheetsContainerRef: React.RefObject<HTMLDivElement>) => {
    const newCount = sheetCounter + 1;
    setSheetCounter(newCount);
    const newSheet: Sheet = { name: `Sheet ${newCount}`, selected: true };
    const updatedSheetDB: Sheet[] = sheetDB.map((s) => {
      return { ...s, selected: false };
    });
    updatedSheetDB.push(newSheet);
    setSheetDB(updatedSheetDB);
    setTimeout(
      () =>
        sheetsContainerRef.current?.scrollTo({
          left: sheetsContainerRef.current.scrollWidth,
        }),
      10
    );
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

  return (
    <div className="flex-none h-8 flex items-center bg-gray-100">
      <Scroller sheetsContainerRef={sheetsContainerRef} />
      <div
        ref={sheetsContainerRef}
        className={
          "flex-auto flex border-solid border-2 border-gray-300 overflow-hidden"
        }
      >
        {sheetDB.map((s) => (
          <SheetTab
            key={s.name}
            selected={s.selected}
            name={s.name}
            onClick={() => selectSheet(s.name, sheetsContainerRef)}
          />
        ))}
        <AddSheetButton addSheetFn={() => addSheet(sheetsContainerRef)} />
      </div>
    </div>
  );
};

const AddSheetButton = ({ addSheetFn }: { addSheetFn: () => void }) => (
  <span className="flex-none px-2.5 text-green-800 hover:scale-110">
    <AddCircleIcon onClick={addSheetFn} />
  </span>
);

export default SheetBar;
