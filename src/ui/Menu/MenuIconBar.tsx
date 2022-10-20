import React from 'react';

import { range } from '../../util/seqgen';

import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

const MenuIconBar: React.FC = () => {
  return (
    <div className="h-9 flex-none flex items-center bg-gray-100">
      <IconWrapper>
        <ContentCopyIcon key={'contentCopyIcon'} />
        <ContentPasteIcon key={'contentPasteIcon'} />
        <ContentCutIcon key={'contentCutIcon'} />
        <FontFamilySelector key={'fontFamilySelector'} />
        <FontSizeSelector key={'fontSizeSelector'} />
        <FormatBoldIcon key={'formatBoldIcon'} />
        <FormatItalicIcon key={'formatItalicIcon'} />
        <FormatUnderlinedIcon key={'formatUnderlinedIcon'} />
        <FormatAlignLeftIcon key={'formatAlignLeftIcon'} />
        <FormatAlignCenterIcon key={'formatAlignCenterIcon'} />
        <FormatAlignRightIcon key={'formatAlignRightIcon'} />
        <FormatColorFillIcon key={'formatColorFillIcon'} />
        <FormatColorTextIcon key={'formatColorTextIcon'} />
      </IconWrapper>
    </div>
  );
};

const IconWrapper: React.FC<{ children: React.ReactNode }> = (props) => (
  <>
    {Array.isArray(props.children)
      ? props.children.map((c) => (
          <span
            key={c.key}
            className="flex items-center px-2.5 h-full hover:bg-gray-300"
          >
            {c}
          </span>
        ))
      : null}
  </>
);

const fontSelectorValues: string[] = [
  'Noto Sans',
  'Arial',
  'Calibri',
  'Comic Sans MS',
  'Courier New',
  'Impact',
  'Georgia',
  'Garamond',
  'Lato',
  'Open Sans',
  'Palatino',
  'Verdana',
];

const FontFamilySelector: React.FC = () => {
  return (
    <select title="font-selector" className="h-4/5 w-40 text-lg">
      {fontSelectorValues.map((v) => (
        <option style={{ fontFamily: v }} value={v} className="text-lg" key={v}>
          {v}
        </option>
      ))}
    </select>
  );
};

const FontSizeSelector: React.FC = () => {
  const fontRange = range(10, 30, 2);
  return (
    <select title="font-size-selector" className="h-4/5 text-lg">
      {fontRange.map((v) => (
        <option value={v} className="text-lg" key={v}>
          {v}
        </option>
      ))}
    </select>
  );
};

export default MenuIconBar;
