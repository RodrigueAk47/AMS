import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie5Component } from './categorie5.component';

describe('Categorie5Component', () => {
  let component: Categorie5Component;
  let fixture: ComponentFixture<Categorie5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categorie5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorie5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
