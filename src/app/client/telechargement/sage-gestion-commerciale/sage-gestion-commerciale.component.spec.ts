import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageGestionCommercialeComponent } from './sage-gestion-commerciale.component';

describe('SageGestionCommercialeComponent', () => {
  let component: SageGestionCommercialeComponent;
  let fixture: ComponentFixture<SageGestionCommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageGestionCommercialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageGestionCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
