import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelechargementComponent } from './telechargement.component';

describe('TelechargementComponent', () => {
  let component: TelechargementComponent;
  let fixture: ComponentFixture<TelechargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelechargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
