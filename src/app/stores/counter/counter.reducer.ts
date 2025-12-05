import { createReducer, on } from '@ngrx/store';
import { CounterState } from './counter.state';
import { addBy, decrement, increment, updateSigne } from './counter.action';

export const initialState: CounterState = { signe: 'nul', value: 0 };
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, value: state.value + 1 })),
  on(decrement, (state) => ({ ...state, value: state.value - 1 })),
  on(addBy, (state, { value }) => ({ ...state, value: state.value + value })),
  on(updateSigne, (state, { signe }) => ({ ...state, signe })),
);
