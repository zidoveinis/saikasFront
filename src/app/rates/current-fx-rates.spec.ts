import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrentFxRates } from './current-fx-rates.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CurrentFxRates
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CurrentFxRates);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SaikasFront'`, () => {
    const fixture = TestBed.createComponent(CurrentFxRates);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SaikasFront');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CurrentFxRates);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to SaikasFront!');
  });
});
