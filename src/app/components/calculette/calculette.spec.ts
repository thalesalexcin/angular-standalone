import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetteComponent } from './calculette';

describe('Calculette', () => {
  let component: CalculetteComponent;
  let fixture: ComponentFixture<CalculetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculetteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculetteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
