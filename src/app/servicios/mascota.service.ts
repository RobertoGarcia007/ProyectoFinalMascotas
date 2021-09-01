import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../interface/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
path:string;
  constructor(private http: HttpClient) { 
    this.path ='http://localhost:8080/mascotas';
  }

  altaMascotas(m:Mascota){
    return this.http.post<Mascota>(this.path,m);
  }
  modificarMascotas(m:Mascota){
    return this.http.put<Mascota>(this.path+"/"+m.id,m);
  }
  getMascotas(){
    return this.http.get<Mascota[]>(this.path);
  }
  getRegistroMascota(id:number){
    return this.http.get<Mascota>(this.path+'/'+id);
  }
  getNombreMascotas(){
    return this.http.get<string[]>(this.path+'/tipos');
  }
  getMascotasTipo(tipo:string){
    return this.http.get<Mascota[]>(this.path+'/mascota/'+tipo);
  }

}
