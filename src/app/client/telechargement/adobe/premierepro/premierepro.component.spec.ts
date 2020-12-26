import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereproComponent } from './premierepro.component';

describe('PremiereproComponent', () => {
  let component: PremiereproComponent;
  let fixture: ComponentFixture<PremiereproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiereproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
