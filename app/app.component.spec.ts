import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NgRedux }      from 'ng2-redux';

import { AppComponent } from './app.component';
import { CounterActions } from './actions';

// I follow a 'mock all dependencies' strategy when unit testing.
const mockNgRedux = {
  configureStore: () => {},
  dispatch: () => {},
  select: () => Observable.of(null),
};
NgRedux.instance = mockNgRedux;

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
    expect(h1.innerText).toMatch(/NG2-Redux/i,
      '<h1> should say something about "Redux"');
  });
});
