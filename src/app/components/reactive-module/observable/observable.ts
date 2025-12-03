import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { filter, interval, map, Observable, Observer, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})
export class ObservableComponent implements OnInit, OnDestroy {
  subscription: Subscription | null = null;
  valeurs = signal<number[]>([]);
  state = signal<string>('');

  ngOnInit(): void {
    const observable$: Observable<number> = interval(1000).pipe(
      take(10),
      filter((v) => v % 2 == 0),
      map((v) => v * 2),
    );

    this.subscription = observable$.subscribe({
      next: (v) => {
        this.valeurs.update((arr) => {
          return [...arr, v];
        });
      },
      error: (err) => {
        this.state.set(err);
      },
      complete: () => {
        this.state.set('fin');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
