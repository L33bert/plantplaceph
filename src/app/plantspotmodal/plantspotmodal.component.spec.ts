import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantspotmodalComponent } from './plantspotmodal.component';

describe('PlantspotmodalComponent', () => {
  let component: PlantspotmodalComponent;
  let fixture: ComponentFixture<PlantspotmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantspotmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantspotmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
