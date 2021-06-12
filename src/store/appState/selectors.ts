import { StoreState } from '../types';

export const selectAppLoading = (state: StoreState): boolean => state.appState.loading;

export const selectMessage = (state: StoreState): string | null => state.appState.message;
