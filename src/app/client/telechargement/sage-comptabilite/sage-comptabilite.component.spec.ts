import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageComptabiliteComponent } from './sage-comptabilite.component';

describe('SageComptabiliteComponent', () => {
  let component: SageComptabiliteComponent;
  let fixture: ComponentFixture<SageComptabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageComptabiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
