import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ajouterAuPanier, enleverDuPanier } from '../../../stores/panier/panier.action';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class ProduitComponent {
  @Input({ required: true }) produit: Produit;
  quantite: number = 0;
  isDisabled = false;

  onProduitAjoute = output<number>();

  store = inject(Store);

  constructor() {
    this.produit = {
      nom: '',
      prix: 0,
      quantite: 0,
    };
  }

  ajouterAuPanier() {
    this.store.dispatch(ajouterAuPanier({ name: this.produit.nom }));
  }
  enleverDuPanier() {
    this.store.dispatch(enleverDuPanier({ name: this.produit.nom }));
  }

  onQuantiteChanged() {
    if (this.quantite < 0) this.quantite = 0;
    if (this.quantite > this.produit.quantite) this.quantite = this.produit.quantite;
  }
}

export interface Produit {
  nom: string;
  prix: number;
  quantite: number;
}

export interface LigneCommandeProduit {
  nom: string;
  quantite: number;
}
