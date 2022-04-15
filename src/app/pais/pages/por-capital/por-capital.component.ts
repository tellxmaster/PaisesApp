import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {


  ngOnInit(): void {
  }

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  public index: number = 0;
  constructor(private paisService: PaisService){}

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital( termino )
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
  }

}
