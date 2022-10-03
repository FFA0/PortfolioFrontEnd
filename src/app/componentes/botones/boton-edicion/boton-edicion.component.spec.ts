import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEdicionComponent } from './boton-edicion.component';

describe('BotonEdicionComponent', () => {
  let component: BotonEdicionComponent;
  let fixture: ComponentFixture<BotonEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
