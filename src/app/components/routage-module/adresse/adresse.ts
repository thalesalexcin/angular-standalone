import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adresse',
  imports: [RouterLink],
  templateUrl: './adresse.html',
  styleUrl: './adresse.css',
})
export class AdresseComponent {
  @Input() ville = '';
  @Input('cp') codePostal = '';
}
