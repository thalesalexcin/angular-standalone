import { Component, EventEmitter, input, Input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class ChildComponent {
  nom = input('');
  note = 0;
  isDisabled = false;
  @Output() sendNote = new EventEmitter<number>();
  envoyer() {
    this.sendNote.emit(this.note);
    this.isDisabled = true;
  }
}
