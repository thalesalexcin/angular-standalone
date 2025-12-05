import { Component, inject, signal } from '@angular/core';
import {
  LigneCommandeProduit,
  Produit,
  ProduitComponent,
} from '../interaction-module/produit/produit';
import { Store } from '@ngrx/store';
import { selectCurrent, selectProducts } from '../../stores/panier/panier.selector';

@Component({
  selector: 'app-panier',
  imports: [ProduitComponent],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class PanierComponent {
  produits = signal<Produit[]>([]);
  current = signal<LigneCommandeProduit[]>([]);
  store = inject(Store);

  constructor() {
    this.store.select(selectProducts).subscribe((res) => {
      this.produits.set(res);
    });

    this.store.select(selectCurrent).subscribe((res) => {
      let result: LigneCommandeProduit[] = [];
      for (let entry of res.entries()) {
        result.push({
          nom: entry[0],
          quantite: entry[1],
        });
      }
      this.current.set(result);
    });
  }
}
