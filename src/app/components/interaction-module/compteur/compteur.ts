import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { decrement, increment } from '../../../stores/counter/counter.action';
import { selectValue } from '../../../stores/counter/counter.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compteur',
  imports: [CommonModule],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {
  value: number = 0;
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
}
