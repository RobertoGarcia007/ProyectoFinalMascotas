import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ventas } from '../interface/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  path:string;
  constructor(private http: HttpClient) { 
    this.path ='http://localhost:8080/ventas';
  }

  getListadoVentas(){
    return this.http.get<Ventas[]>(this.path);
  }

  altaVentas(v:Ventas){
    return this.http.post<Ventas>(this.path,v);
  }

}
