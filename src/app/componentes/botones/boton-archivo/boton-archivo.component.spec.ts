import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonArchivoComponent } from './boton-archivo.component';

describe('BotonArchivoComponent', () => {
  let component: BotonArchivoComponent;
  let fixture: ComponentFixture<BotonArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonArchivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
