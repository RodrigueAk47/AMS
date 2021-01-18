import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie1Component } from './categorie1.component';

describe('Categorie1Component', () => {
  let component: Categorie1Component;
  let fixture: ComponentFixture<Categorie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categorie1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
