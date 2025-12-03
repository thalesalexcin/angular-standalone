import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.html',
  styleUrl: './computed.css',
})
export class ComputedComponent {
  value1: WritableSignal<number> = signal(2);
  value2: WritableSignal<number> = signal(5);
  resultat: Signal<number> = signal(0);

  constructor() {
    setInterval(() => {
      this.value1.update((v) => v + 10);
      this.value1.set(this.value1() + 10);
    }, 2 * 1000);

    this.resultat = computed(() => this.value1() + this.value2());
    effect(() => console.log(this.value1(), this.value2()));
  }
}
