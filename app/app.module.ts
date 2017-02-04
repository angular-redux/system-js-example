import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgReduxModule }  from '@angular-redux/store';

import { AppComponent }   from './app.component';
import { CounterActions } from './actions';

@NgModule({
  imports:      [ BrowserModule, NgReduxModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ CounterActions ]
})
export class AppModule { }
