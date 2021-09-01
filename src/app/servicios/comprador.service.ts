import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comprador } from '../interface/comprador';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  path:string;
  constructor(private http: HttpClient) { 
    this.path ='http://localhost:8080/comprador';
  }
  getRegistroComprador(dni:string){
    return this.http.get<Comprador>(this.path+'/'+dni);
  }
  altaComprador(c:Comprador){
    return this.http.post<Comprador>(this.path,c);
  }
}
