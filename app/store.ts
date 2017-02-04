import { Action } from 'redux';
import { CounterActions } from './actions';

export interface AppState {
  counter: number;
}

export const INITIAL_STATE: AppState = {
  counter: 0,
};

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case CounterActions.INCREMENT: return { counter: state.counter + 1 };
    case CounterActions.DECREMENT: return { counter: state.counter - 1 };
    default: return state;
  }
}
