import React from 'react';
import classnames from 'classnames';

interface Props {
  name: string;
  onClick: (name: string) => void;
  selected: boolean;
}

const MenuItem: React.FC<Props> = (p) => {
  return (
    <div
      className={classnames(
        'px-2.5 text-white text-sm flex items-center',
        p.selected ? 'bg-white text-green-800' : 'hover:bg-green-900'
      )}
      onClick={() => p.onClick(p.name)}
    >
      {p.name}
    </div>
  );
};

export default MenuItem;
