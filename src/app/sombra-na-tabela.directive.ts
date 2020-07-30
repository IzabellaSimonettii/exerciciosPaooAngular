import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]',
  exportAs: 'sombraNoComponente'
})

//  posso mudar a diretiva table div button

// @Directive({
//   selector: 'table'
// })


export class SombraNaTabelaDirective {
  @HostBinding('style.boxShadow') sombra: string;

  @Input() sombraEntrada: string;


  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
  ) { }

  @HostListener('mouseover') quandoOMousePassarPorCima() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'box-shadow',
    //   '3px 2px 5px 5px;');
    this.sombra = '3px 2px 5px 5px;';
    this.sombra = this.sombraEntrada;
  }

  @HostListener('mouseleave') quandoOMouseSair() {
    // this.renderer.removeStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow');
    this.sombra = '';
  }

}
