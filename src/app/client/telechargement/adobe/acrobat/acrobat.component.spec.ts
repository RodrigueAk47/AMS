import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrobatComponent } from './acrobat.component';

describe('AcrobatComponent', () => {
  let component: AcrobatComponent;
  let fixture: ComponentFixture<AcrobatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrobatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrobatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
