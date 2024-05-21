import { useState, ChangeEvent } from 'react';

type FormState = {
 title: string;
 content: string;
 category: string;
};

export const useForm = (initialState: FormState = { title: '', content: '', category: '' }) => {
 const [formValues, setFormValues] = useState<FormState>(initialState);

 const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  const nameInputChange = target.name;
  const valueInputChange = target.value;

  setFormValues((prevValues) => ({
   ...prevValues,
   [nameInputChange]: valueInputChange,
  }));
 };

 const resetOrInitialize = (newFormState: FormState = initialState) => setFormValues(newFormState);

 return { formValues, handleInputChange, resetOrInitialize };
};
