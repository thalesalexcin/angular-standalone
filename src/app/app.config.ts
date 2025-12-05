import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './stores/counter/counter.reducer';
import { panierReducer } from './stores/panier/panier.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffect } from './stores/counter/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
    provideStore(),
    provideState('counter', counterReducer),
    provideState('panier', panierReducer),
    provideEffects(CounterEffect),
  ],
};
