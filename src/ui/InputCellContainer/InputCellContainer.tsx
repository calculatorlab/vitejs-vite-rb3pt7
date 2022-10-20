import React from 'react';

interface Props {
  children: React.ReactNode;
}

const InputCellContainer: React.FC<Props> = (props) => {
  return <div>{props.children}</div>;
};

export default InputCellContainer;
