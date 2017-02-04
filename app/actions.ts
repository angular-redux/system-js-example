import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  constructor(private ngRedux: NgRedux<AppState>) {}

  increment() {
    this.ngRedux.dispatch({ type: CounterActions.INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: CounterActions.DECREMENT });
  }
}
