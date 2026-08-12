import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageLoan } from './marriage-loan';

describe('MarriageLoan', () => {
  let component: MarriageLoan;
  let fixture: ComponentFixture<MarriageLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriageLoan],
    }).compileComponents();

    fixture = TestBed.createComponent(MarriageLoan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
