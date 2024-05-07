import { useDispatch } from 'react-redux';
import { StoreDispatchType } from '@/src/common/store';

export const useStoreDispatch = () => useDispatch<StoreDispatchType>();
