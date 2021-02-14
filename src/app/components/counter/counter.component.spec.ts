import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with "Counter" value for the title prop', () => {
    expect(component.title).toBe('Counter')
  })

  it('should start with "0" value for the counter prop', () => {
    expect(component.counter).toEqual(0)
  })

  it('should start whit "Counter: 0" value in h1 tag', () => {
    const element = fixture.debugElement.query(By.css('h1')).nativeElement
    expect(element.innerHTML).toBe('Counter: 0')
  })

  it('should render 3 buttons in DOM', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'))
    expect(buttons.length).toEqual(3)
  })

  it('should have a value "1" the prop counter when Increment button is clicled', () => {
    expect(component.counter).toEqual(0)
    
    const button = fixture.debugElement.query(By.css('.increment')).nativeElement
    button.click()

    expect(component.counter).toEqual(1)
  })

  it('should have a value "-1" the prop counter when Decrement button is clicled', () => {
    expect(component.counter).toEqual(0)
    
    const button = fixture.debugElement.query(By.css('.decrement')).nativeElement
    button.click()

    expect(component.counter).toEqual(-1)
  })

  it('should have a value "0" the prop counter when Reset button is clicled', () => {
    expect(component.counter).toEqual(0)
    
    const button = fixture.debugElement.query(By.css('.reset')).nativeElement
    button.click()

    expect(component.counter).toEqual(0)
  })
});
