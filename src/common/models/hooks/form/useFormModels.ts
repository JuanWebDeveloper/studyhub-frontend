import { ChangeEvent } from 'react';

export interface FormStateModel {
 title: string;
 content: string;
 category: string;
}

export type InputChangeModel = ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string };

export interface SelectOptionModel {
 value: string;
 label: string;
}
