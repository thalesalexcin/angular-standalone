import { createAction, props } from '@ngrx/store';

export const increment = createAction('[counter] Increment');
export const decrement = createAction('[counter] Decrement');
export const addBy = createAction('[counter] AddBy', props<{ value: number }>());
