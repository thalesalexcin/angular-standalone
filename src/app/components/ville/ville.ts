import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ville',
  imports: [],
  templateUrl: './ville.html',
  styleUrl: './ville.css',
})
export class VilleComponent {
  value = input.required<string>();
  valueOutput = output<string>();
  onValueInput(event: Event) {
    let newValue = (event.target as HTMLInputElement).value;
    this.valueOutput.emit(newValue);
  }
}
