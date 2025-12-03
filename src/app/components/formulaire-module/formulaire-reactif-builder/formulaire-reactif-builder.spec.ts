import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReactifBuilderComponent } from './formulaire-reactif-builder';

describe('FormulaireReactifBuilder', () => {
  let component: FormulaireReactifBuilderComponent;
  let fixture: ComponentFixture<FormulaireReactifBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireReactifBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireReactifBuilderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
