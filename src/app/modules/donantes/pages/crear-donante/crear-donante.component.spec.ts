import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDonanteComponent } from './crear-donante.component';

describe('CrearDonanteComponent', () => {
  let component: CrearDonanteComponent;
  let fixture: ComponentFixture<CrearDonanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearDonanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
