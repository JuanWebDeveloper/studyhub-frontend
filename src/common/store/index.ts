//*> Export of the interface for the global state.
export { StoreState } from './store';
//*> Export of the types for the global state and its dispatch function.
export type { StoreStateType, StoreDispatchType } from './store';
//*> Export of the component that provides the global state to the rest of the application.
export { SharedStateProvider } from './provider/sharedStateProvider';
//*> Export of the actions that modify the global state.
export { setHasErrors, setErrorMessage, setLoading } from './slices/uiSlice';