import { createAction, props } from '@ngrx/store';

export const ajouterAuPanier = createAction('[panier] Ajouter', props<{ name: string }>());
export const enleverDuPanier = createAction('[panier] Enlever', props<{ name: string }>());
