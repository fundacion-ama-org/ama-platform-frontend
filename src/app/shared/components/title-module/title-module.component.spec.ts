import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleModuleComponent } from './title-module.component';

describe('TitleModuleComponent', () => {
  let component: TitleModuleComponent;
  let fixture: ComponentFixture<TitleModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
