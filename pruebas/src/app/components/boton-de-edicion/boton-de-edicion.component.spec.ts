import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDeEdicionComponent } from './boton-de-edicion.component';

describe('BotonDeEdicionComponent', () => {
  let component: BotonDeEdicionComponent;
  let fixture: ComponentFixture<BotonDeEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonDeEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonDeEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
