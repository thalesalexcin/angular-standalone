import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSimpleComponent } from './formulaire-simple';

describe('FormulaireSimple', () => {
  let component: FormulaireSimpleComponent;
  let fixture: ComponentFixture<FormulaireSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireSimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireSimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
