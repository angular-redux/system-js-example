import { Component } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { CounterActions } from './actions';
import { AppState, INITIAL_STATE, rootReducer } from './store';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello @angular-redux/store!</h1>
    <p>The counter value is {{ counter$ | async }}</p>
    <p>
      <button (click)="actions.increment()">+</button>
      <button (click)="actions.decrement()">-</button>
    </p>
  `
})
export class AppComponent {
  @select() readonly counter$: Observable<number>;

  constructor(
    ngRedux: NgRedux<AppState>,
    devTools: DevToolsExtension,
    private actions: CounterActions) {
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        null,
        devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}
