import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interface/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  path:string;
  constructor(private http: HttpClient) { 
    this.path ='http://localhost:8080/usuarios';
  }
  altaUsuarios(u:Usuarios){
    return this.http.post<Usuarios>(this.path,u);
  }
  modificarUsuarios(u:Usuarios){
    return this.http.put<Usuarios>(this.path+"/"+u.username,u);
  }
  getUsuarios(){
    return this.http.get<Usuarios[]>(this.path);
  }
  getRegistroUsuarios(username:string){
    return this.http.get<Usuarios>(this.path+'/'+username);
  }
  deleteUsuario(username:string){

    return this.http.delete<Usuarios>(this.path+'/'+username);
  }
  loginUser(username:string,clave:string){
    return this.http.get<Usuarios>(this.path+'/validacion/'+username+','+clave);
  }
}
