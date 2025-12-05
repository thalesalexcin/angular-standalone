import { Produit } from '../../components/interaction-module/produit/produit';

export interface PanierState {
  current: Map<string, number>;
  products: Produit[];
}
