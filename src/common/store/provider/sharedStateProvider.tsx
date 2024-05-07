'use client';

import { Provider } from 'react-redux';
import { StoreState } from '@/src/common/store';

interface SharedStateProviderModel {
 children: React.ReactNode;
}

export const SharedStateProvider = ({ children }: SharedStateProviderModel) => {
 return <Provider store={StoreState}>{children}</Provider>;
};
