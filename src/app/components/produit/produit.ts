import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor() {
    this.produit = {
      nom: '',
      prix: 0,
      quantite: 0,
    };
  }

  ajouterAuPanier() {
    this.isDisabled = true;
    this.produit.quantite -= this.quantite;

    this.onProduitAjoute.emit(this.quantite * this.produit.prix);
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
