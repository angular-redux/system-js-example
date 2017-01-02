import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { CounterActions } from './actions';
import { AppState, INITIAL_STATE, rootReducer } from './store';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello NG2-Redux!</h1>
    <p>The counter value is {{ counter$ | async }}</p>
    <p>
      <button (click)="actions.increment()">+</button>
      <button (click)="actions.decrement()">-</button>
    </p>
  `
})
export class AppComponent {
  @select() counter$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: CounterActions) {
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
