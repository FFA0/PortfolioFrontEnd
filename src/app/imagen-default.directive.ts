import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagenDefault]'
})
export class ImagenDefaultDirective {
  
  imagenDefault = "./assets/imagenDefault.png"

  constructor(private el : ElementRef) { }

  @HostListener("error")
  cargarImagenDefault(){
    this.el.nativeElement.src = this.imagenDefault;
  }

}
