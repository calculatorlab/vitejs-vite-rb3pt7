import React, { useState, useEffect } from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

type Props = {
  sheetsContainerRef: React.RefObject<HTMLDivElement>;
};

const Scroller = (props: Props) => {
  const [enableLeftScrollButton, setEnableLeftScrollButton] =
    useState<boolean>(false);
  const [enableRightScrollButton, setEnableRightScrollButton] =
    useState<boolean>(false);

  let scrollWidth = 0;
  let clientWidth = 0;
  if (props.sheetsContainerRef.current) {
    const currentSheetsContainerRef = props.sheetsContainerRef.current;
    scrollWidth = currentSheetsContainerRef.scrollWidth;
    clientWidth = currentSheetsContainerRef.clientWidth;
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableLeftScrollButton(scrollWidth > clientWidth);
      setEnableRightScrollButton(scrollWidth < clientWidth);
    }, 10);
    return () => clearTimeout(timer);
  }, [scrollWidth, clientWidth]);

  return (
    <div className="flex-none flex items-center">
      <span
        className="px-2.5 hover:bg-gray-300"
        onClick={() => {
          props.sheetsContainerRef.current?.scrollTo({
            left: scrollWidth - clientWidth - 100 > 0 ? scrollWidth - clientWidth - 100 : 0,
          });
        }}
      >
        <ArrowLeftIcon
          color={enableLeftScrollButton ? "inherit" : "disabled"}
        />
      </span>
      <span className="px-2.5 hover:bg-gray-300">
        <ArrowRightIcon
          color={enableRightScrollButton ? "inherit" : "disabled"}
        />
      </span>
    </div>
  );
};

export default Scroller;
