import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantspotComponent } from './plantspot.component';

describe('PlantspotComponent', () => {
  let component: PlantspotComponent;
  let fixture: ComponentFixture<PlantspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantspotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
