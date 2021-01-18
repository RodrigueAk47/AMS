import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie8Component } from './categorie8.component';

describe('Categorie8Component', () => {
  let component: Categorie8Component;
  let fixture: ComponentFixture<Categorie8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categorie8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorie8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
