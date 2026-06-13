import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Go } from './go';

describe('Go', () => {
  let component: Go;
  let fixture: ComponentFixture<Go>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Go],
    }).compileComponents();

    fixture = TestBed.createComponent(Go);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
