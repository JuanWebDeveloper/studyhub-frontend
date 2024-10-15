import { Dispatch, SetStateAction } from 'react';

export type stateBooleanModel = [boolean, Dispatch<SetStateAction<boolean>>];
export type setStateBooleanModel = Dispatch<SetStateAction<boolean>>;
