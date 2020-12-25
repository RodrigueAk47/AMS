import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoshopComponent } from './photoshop.component';

describe('PhotoshopComponent', () => {
  let component: PhotoshopComponent;
  let fixture: ComponentFixture<PhotoshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
