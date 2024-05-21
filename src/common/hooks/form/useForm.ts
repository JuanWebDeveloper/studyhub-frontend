import { useState } from 'react';
import { FormStateModel, InputChangeModel, SelectOptionModel } from '@/src/common/models';

export const useForm = (initialState: FormStateModel = { title: '', content: '', category: '' }) => {
 const [formValues, setFormValues] = useState<FormStateModel>(initialState);

 const handleInputChange = ({ name, value }: InputChangeModel) => {
  setFormValues((prevValues) => ({
   ...prevValues,
   [name]: value,
  }));
 };

 const handleSelectChange = (selectedOption: SelectOptionModel | null) => {
  handleInputChange({
   name: 'category',
   value: selectedOption ? selectedOption.value : '',
  });
 };

 const resetOrInitialize = (newFormState: FormStateModel = initialState) => setFormValues(newFormState);

 return { formValues, handleInputChange, handleSelectChange, resetOrInitialize };
};
