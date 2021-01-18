import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie4Component } from './categorie4.component';

describe('Categorie4Component', () => {
  let component: Categorie4Component;
  let fixture: ComponentFixture<Categorie4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categorie4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorie4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
