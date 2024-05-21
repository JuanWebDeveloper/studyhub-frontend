import { GroupBase, StylesConfig } from 'react-select';
import { SelectOptionModel } from '@/src/common/models';

export const customNoteCategorySelectStyles: StylesConfig<SelectOptionModel, boolean, GroupBase<SelectOptionModel>> = {
 control: (styles, { isFocused }) => ({
  ...styles,
  backgroundColor: '#f7f8f895',
  boxShadow: isFocused ? '0 0 20px 5px #22222265' : '0 2px 8px #22222280',
 }),
 menu: (styles) => ({ ...styles, backgroundColor: '#dfe1e2', boxShadow: '0 2px 8px #22222280' }),
 option: (styles, { isSelected }) => ({
  ...styles,
  backgroundColor: isSelected ? '#0657a8' : '#dfe1e2',
  color: isSelected ? '#e9e9e9' : '#222222',
  textAlign: 'center',
  '&:hover': {
   backgroundColor: isSelected ? '#0657a8' : '#0657a890',
   color: '#e9e9e9',
  },
 }),
 placeholder: (styles) => ({ ...styles, textAlign: 'center' }),
 singleValue: (styles) => ({ ...styles, textAlign: 'center' }),
};
