import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PanierState } from './panier.state';

export const selectPanierState = createFeatureSelector<PanierState>('panier');
export const selectCurrent = createSelector(selectPanierState, (state) => state.current);
export const selectProducts = createSelector(selectPanierState, (state) => state.products);
