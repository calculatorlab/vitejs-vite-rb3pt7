import React from 'react';

import ColumnNameContainer from '../ColumnNameContainer/ColumnNameContainer';
import RowNameContainer from '../RowNameContainer/RowNameContainer';
import InputCellContainer from '../InputCellContainer/InputCellContainer';

const DataContainer: React.FC = () => {
  return (
    <div className="flex-auto">
      <RowNameContainer />
      <ColumnNameContainer />
      <InputCellContainer>Ashish</InputCellContainer>
    </div>
  );
};

export default DataContainer;
