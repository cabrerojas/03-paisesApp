import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino :string = "";
  hayError: boolean = false;
  paisesSugeridos  : Country[] = [];
  mostrarSugerencias: boolean = false;
  paises  : Country[] = [];


  constructor(private paisServices:PaisService) { }

  buscar( termio: string){

    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termio;
    
    this.paisServices.buscarPorPais(this.termino)
      .subscribe( (paises) =>{
        this.hayError = false;
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });
        
  }

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisServices.buscarPorPais(termino)
        .subscribe( 
          paises => this.paisesSugeridos = paises.slice(0,3),
          (err) => this.paisesSugeridos = []
          );

  }


}
