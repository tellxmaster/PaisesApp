import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li
    {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent{

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public index: number = 0;
  public mostrarSugerencias: boolean = false;
  constructor(private paisService: PaisService){}

  buscar( termino: string ){
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    
    this.paisService.buscarPais( termino )
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }
  
  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais( termino )
    .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => {this.paisesSugeridos = []});
  }

  buscarSugerido(termino: string){
    this.buscar(termino);

  }

}
