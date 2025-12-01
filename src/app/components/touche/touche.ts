import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-touche',
  imports: [],
  templateUrl: './touche.html',
  styleUrl: './touche.css',
})
export class ToucheComponent {
  value = input.required<string>();
  touched = output<string>();
  onButtonClicked() {
    this.touched.emit(this.value());
  }
}
