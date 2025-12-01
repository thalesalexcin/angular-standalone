import { Component, EventEmitter, input, Output, output } from '@angular/core';
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
  //@Output() sendNote = new EventEmitter<number>();
  sendNote = output<number>();
  envoyer() {
    this.sendNote.emit(this.note);
    this.isDisabled = true;
  }
}
