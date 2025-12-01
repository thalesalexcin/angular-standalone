import { Component, input, Input } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class FilsComponent {
  @Input({ required: true }) ville = 'Paris';
  codePostal = input<string>('');
  pays = input.required<string>();
}
