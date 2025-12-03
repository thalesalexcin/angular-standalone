import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireComponent } from './stagiaire';

describe('Stagiaire', () => {
  let component: StagiaireComponent;
  let fixture: ComponentFixture<StagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagiaireComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StagiaireComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
