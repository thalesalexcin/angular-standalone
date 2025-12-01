import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLine } from './comment-line';

describe('CommentLine', () => {
  let component: CommentLine;
  let fixture: ComponentFixture<CommentLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
