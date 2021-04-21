import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  paises: Country[] = [];
  hayError: boolean = false;
  constructor( private paisService: PaisService) { }

  getClaseCSS( region: string) {
    return  (region === this.regionActiva) 
            ? 'btn btn-primary' : 'btn btn-outline-primary' ;
  }

  activarRegion(region: string){

    if (region === this.regionActiva) {
      return;
    }
  
    this.regionActiva = region;
    this.paises = [];
    this.buscar();
  }

  buscar(){

    this.hayError = false;
    
    this.paisService.buscarRegion(this.regionActiva)
      .subscribe( (paises) =>{
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });
        
  }


}
