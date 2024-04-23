import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaiciuokleComponent } from './skaiciuokle.component';

describe('SkaiciuokleComponent', () => {
  let component: SkaiciuokleComponent;
  let fixture: ComponentFixture<SkaiciuokleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkaiciuokleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkaiciuokleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
