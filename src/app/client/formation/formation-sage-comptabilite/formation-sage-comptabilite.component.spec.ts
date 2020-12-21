import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationSageComptabiliteComponent } from './formation-sage-comptabilite.component';

describe('FormationSageComptabiliteComponent', () => {
  let component: FormationSageComptabiliteComponent;
  let fixture: ComponentFixture<FormationSageComptabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationSageComptabiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationSageComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
