import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie7Component } from './categorie7.component';

describe('Categorie7Component', () => {
  let component: Categorie7Component;
  let fixture: ComponentFixture<Categorie7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categorie7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorie7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
