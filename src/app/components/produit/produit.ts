import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class ProduitComponent {
  @Input({ required: true }) produit: Produit;

  constructor() {
    this.produit = {
      nom: '',
      prix: 0,
      quantite: 0,
    };
  }
}

export interface Produit {
  nom: string;
  prix: number;
  quantite: number;
}
