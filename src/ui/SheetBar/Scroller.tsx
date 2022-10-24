import React from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

type Props = {};

const Scroller = (props: Props) => {
  return (
    <div className="flex-none flex items-center">
      <span className="px-2.5 hover:bg-gray-300">
        <ArrowLeftIcon />
      </span>
      <span className="px-2.5 hover:bg-gray-300">
        <ArrowRightIcon />
      </span>
    </div>
  );
};

export default Scroller;
