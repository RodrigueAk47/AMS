import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagePaieComponent } from './sage-paie.component';

describe('SagePaieComponent', () => {
  let component: SagePaieComponent;
  let fixture: ComponentFixture<SagePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagePaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
