import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ville',
  imports: [FormsModule],
  templateUrl: './ville.html',
  styleUrl: './ville.css',
})
export class VilleComponent {
  value = model<string>();
}
