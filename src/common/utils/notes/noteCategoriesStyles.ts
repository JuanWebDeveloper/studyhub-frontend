import { GroupBase, StylesConfig } from 'react-select';
import { SelectOptionModel } from '@/src/common/models';

export const categorySelectorStylesFormCreate: StylesConfig<SelectOptionModel, boolean, GroupBase<SelectOptionModel>> = {
 control: (styles, { isFocused }) => ({
  ...styles,
  backgroundColor: '#f7f8f895',
  boxShadow: isFocused ? '0 0 20px 5px #22222265' : '0 2px 8px #22222280',
  borderColor: isFocused ? '#1e8624' : 'transparent',

  '&:hover': {
   borderColor: isFocused ? '#1e8624' : 'transparent',
  },
 }),
 menu: (styles) => ({ ...styles, backgroundColor: '#dfe1e2', boxShadow: '0 2px 8px #22222280' }),
 option: (styles, { isSelected }) => ({
  ...styles,
  backgroundColor: isSelected ? '#1e8624' : '#dfe1e2',
  color: isSelected ? '#e9e9e9' : '#222222',
  textAlign: 'center',

  '&:hover': {
   backgroundColor: isSelected ? '#1e8624' : '#1e862490',
   color: '#e9e9e9',
  },
 }),
 placeholder: (styles) => ({ ...styles, textAlign: 'center', color: '#2e7d32' }),
 singleValue: (styles) => ({ ...styles, textAlign: 'center', color: '#2e7d32' }),
};

export const categorySelectorStylesFormEdit: StylesConfig<SelectOptionModel, boolean, GroupBase<SelectOptionModel>> = {
 control: (styles, { isFocused }) => ({
  ...styles,
  backgroundColor: '#f7f8f895',
  boxShadow: isFocused ? '0 0 20px 5px #22222265' : '0 2px 8px #22222280',
  borderColor: isFocused ? '#0050a0' : 'transparent',

  '&:hover': {
   borderColor: isFocused ? '#0050a0' : 'transparent',
  },
 }),
 menu: (styles) => ({ ...styles, backgroundColor: '#dfe1e2', boxShadow: '0 2px 8px #22222280' }),
 option: (styles, { isSelected }) => ({
  ...styles,
  backgroundColor: isSelected ? '#0657a8' : '#dfe1e2',
  color: isSelected ? '#e9e9e9' : '#222222',
  textAlign: 'center',

  '&:hover': {
   backgroundColor: isSelected ? '#0050a0' : '#0050a090',
   color: '#e9e9e9',
  },
 }),
 placeholder: (styles) => ({ ...styles, textAlign: 'center', color: '#0657a8' }),
 singleValue: (styles) => ({ ...styles, textAlign: 'center', color: '#0657a8' }),
};
