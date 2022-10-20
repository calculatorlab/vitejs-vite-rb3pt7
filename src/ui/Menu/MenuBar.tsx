import React, { useState } from 'react';
import MenuItem from './MenuItem';

const menuItemNames = ['File', 'Home', 'Insert', 'Layout', 'Help'];

const Menu: React.FC = () => {
  const [selected, setSelected] = useState('Home');
  return (
    <div className="h-7 flex-none flex bg-green-800">
      {menuItemNames.map((i) => (
        <MenuItem
          key={i}
          name={i}
          onClick={(name) => setSelected(name)}
          selected={selected === i}
        />
      ))}
    </div>
  );
};

export default Menu;
