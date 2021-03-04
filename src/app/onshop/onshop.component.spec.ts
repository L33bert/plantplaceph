import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnshopComponent } from './onshop.component';

describe('OnshopComponent', () => {
  let component: OnshopComponent;
  let fixture: ComponentFixture<OnshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
