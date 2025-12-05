import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { addBy, decrement, increment, updateSigne } from './counter.action';
import { map, withLatestFrom } from 'rxjs';
import { selectValue } from './counter.selector';

export class CounterEffect {
  actions$ = inject(Actions);
  store = inject(Store);

  updateSigneOnCountChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment, decrement, addBy),
      withLatestFrom(this.store.select(selectValue)),
      map(([a, value]) => {
        const signe = value > 0 ? 'positif' : value < 0 ? 'negatif' : 'nul';
        return updateSigne({ signe });
      }),
    );
  });
}
