import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ville',
  imports: [],
  templateUrl: './ville.html',
  styleUrl: './ville.css',
})
export class VilleComponent {
  value = input.required<string>();
  //   valueOutput = output<string>();
  valueChange = output<string>();
  onValueInput() {
    this.valueChange.emit(this.value());
  }
}
