import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addBy, decrement, increment } from '../../../stores/counter/counter.action';
import { selectValue } from '../../../stores/counter/counter.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compteur',
  imports: [CommonModule, FormsModule],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {
  value: number = 0;
  valueToAdd: number = 0;
  store = inject(Store);
  //value$: Observable<Number>;
  constructor() {
    this.store.select(selectValue).subscribe((v) => (this.value = v));
    //this.value$ = this.store.select(selectValue);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }

  onAddBy() {
    this.store.dispatch(addBy({ value: this.valueToAdd }));
  }
}
