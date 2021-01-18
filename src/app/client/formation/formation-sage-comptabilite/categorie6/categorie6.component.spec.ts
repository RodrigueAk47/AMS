import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie6Component } from './categorie6.component';

describe('Categorie6Component', () => {
  let component: Categorie6Component;
  let fixture: ComponentFixture<Categorie6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categorie6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categorie6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
