import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const selectCounterState = createFeatureSelector<CounterState>('counter');
export const selectValue = createSelector(selectCounterState, (state) => state.value);
export const selectSigne = createSelector(selectCounterState, (state) => state.signe);
