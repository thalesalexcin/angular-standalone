import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReactifComponent } from './formulaire-reactif';

describe('FormulaireReactif', () => {
  let component: FormulaireReactifComponent;
  let fixture: ComponentFixture<FormulaireReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireReactifComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireReactifComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
