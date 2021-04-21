import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL:string = "https://restcountries.eu/rest/v2";

  get httpParams(){
    return new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) { }


  buscarPorPais( termino: string): Observable<Country[]> {
    const url= `${this.apiURL}/name/${termino}`

    return this.http.get<Country[]>(url, {params: this.httpParams});
    
  }

  buscarPorCapital( termino: string): Observable<Country[]> {
    const url= `${this.apiURL}/capital/${termino}`

    return this.http.get<Country[]>(url, {params: this.httpParams});
    
  }

  getPaisPorAlpha( termino: string): Observable<Country> {
    const url= `${this.apiURL}/alpha/${termino}`

    return this.http.get<Country>(url);
    
  }

  buscarRegion( region: string): Observable<Country[]> {

    const url= `${this.apiURL}/region/${region}`

    return this.http.get<Country[]>(url, {params: this.httpParams});
    
  }
  
}
