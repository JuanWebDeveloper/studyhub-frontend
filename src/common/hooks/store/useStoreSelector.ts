import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { StoreStateType } from '@/src/common/store/';

export const useStoreSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
