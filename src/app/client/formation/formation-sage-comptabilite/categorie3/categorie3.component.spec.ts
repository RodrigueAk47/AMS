import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie3Component } from './categorie3.component';

describe('Categorie3Component', () => {
  let component: Categorie3Component;
  let fixture: ComponentFixture<Categorie3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categorie3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
