import React from "react";
import classnames from "classnames";

type Props = {
  name: string;
  onClick: React.MouseEventHandler;
  selected?: boolean;
};

const SheetTab = (props: Props) => {
  return (
    <div
      className={classnames(
        "flex-none mx-0.5 px-2.5 bg-white hover:cursor-pointer",
        props.selected
          ? "border-solid border-b-4 border-green-800"
          : "hover:font-bold"
      )}
      onClick={props.onClick}
    >
      {props.name}
      {props.name}
      {props.name}
    </div>
  );
};

export default SheetTab;
