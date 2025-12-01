import { Component, signal } from '@angular/core';
import { Produit, ProduitComponent } from '../produit/produit';
import { FormsModule } from '@angular/forms';
import { form, Field } from '@angular/forms/signals';

@Component({
  selector: 'app-primeur',
  imports: [ProduitComponent, FormsModule, Field],
  templateUrl: './primeur.html',
  styleUrl: './primeur.css',
})
export class PrimeurComponent {
  nouveauProduit = signal<Produit>({
    nom: '',
    prix: 0,
    quantite: 0,
  });
  nouveauProduitForm = form(this.nouveauProduit);
  total: number = 0;
  produits: Produit[] = [
    { nom: 'banane', prix: 3, quantite: 10 },
    { nom: 'fraise', prix: 10, quantite: 20 },
    { nom: 'poivron', prix: 5, quantite: 10 },
  ];

  ajouter() {
    this.produits.push(this.nouveauProduit());
    this.nouveauProduit.set({
      nom: '',
      prix: 0,
      quantite: 0,
    });
  }

  ajouterAuPanier(event: number) {
    this.total += event;
  }
}
