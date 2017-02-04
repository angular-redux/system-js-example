import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { StoreCreator } from 'redux';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { CounterActions } from './actions';

const mockNgRedux = {
  configureStore: () => {},
  dispatch: () => {},
  select: () => Observable.of(null),
};
NgRedux.instance = mockNgRedux;

const mockDevToolsExtension = {
  isEnabled: () => false,
  enhancer: (): StoreCreator => null,
};

const mockCounterActions = {
  increment: () => {},
  decrement: () => {},
};

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: NgRedux, useValue: mockNgRedux },
        { provide: DevToolsExtension, useValue: mockDevToolsExtension },
        { provide: CounterActions, useValue: mockCounterActions },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/@angular-redux\/store/i,
      '<h1> should say something about "Redux"');
  });
});
