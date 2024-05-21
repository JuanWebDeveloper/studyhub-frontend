import { useState } from 'react';

type FormState = {
 title: string;
 content: string;
 category: string;
};

type InputChange = {
 name: string;
 value: string;
};

type OptionType = {
 value: string;
 label: string;
};

export const useForm = (initialState: FormState = { title: '', content: '', category: '' }) => {
 const [formValues, setFormValues] = useState<FormState>(initialState);

 const handleInputChange = ({ name, value }: InputChange) => {
  setFormValues((prevValues) => ({
   ...prevValues,
   [name]: value,
  }));
 };

 const handleSelectChange = (selectedOption: OptionType | null) => {
  handleInputChange({
   name: 'category',
   value: selectedOption ? selectedOption.value : '',
  });
 };

 const resetOrInitialize = (newFormState: FormState = initialState) => setFormValues(newFormState);

 return { formValues, handleInputChange, handleSelectChange, resetOrInitialize };
};
