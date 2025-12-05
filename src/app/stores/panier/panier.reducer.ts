import { createReducer, on } from '@ngrx/store';
import { PanierState } from './panier.state';
import { ajouterAuPanier, enleverDuPanier } from './panier.action';

export const initialState: PanierState = {
  products: [
    { nom: 'banane', prix: 3, quantite: 10 },
    { nom: 'fraise', prix: 10, quantite: 20 },
    { nom: 'poivron', prix: 5, quantite: 10 },
  ],
  current: new Map(),
};
export const panierReducer = createReducer(
  initialState,
  on(ajouterAuPanier, (state, { name }) => {
    let products = [...state.products];
    let current = new Map(state.current);
    let productIndex = products.findIndex((p) => p.nom == name);

    if (products[productIndex].quantite > 0) {
      products[productIndex] = {
        ...products[productIndex],
        quantite: products[productIndex].quantite - 1,
      };

      if (!current.has(name)) {
        current.set(name, 0);
      }

      current.set(name, current.get(name)! + 1);
    }

    return { ...state, products: products, current: current };
  }),
  on(enleverDuPanier, (state, { name }) => {
    let products = [...state.products];
    let current = new Map(state.current);
    let productIndex = products.findIndex((p) => p.nom == name);
    if (current.has(name)) {
      let quantite = current.get(name) as number;
      if (quantite > 0) {
        current.set(name, quantite - 1);
        if (quantite == 1) {
          current.delete(name);
        }
        products[productIndex] = {
          ...products[productIndex],
          quantite: products[productIndex].quantite + 1,
        };
      }
    }

    return { ...state, products: products, current: current };
  }),
);
