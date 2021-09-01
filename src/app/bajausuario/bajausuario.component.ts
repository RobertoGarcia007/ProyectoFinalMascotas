import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuarios';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-bajausuario',
  templateUrl: './bajausuario.component.html',
  styleUrls: ['./bajausuario.component.css']
})
export class BajausuarioComponent implements OnInit {
  u!:Usuarios;
  username?: string;
  constructor(private router:Router,private us:UsuariosService) { }

  ngOnInit(): void {
    this.listarBaja();
  }

  listarBaja(){
    let username:any=localStorage.getItem("username");
    this.us.getRegistroUsuarios(username).subscribe(
      datos=>{
        this.u=datos;
      }
    )
  }
  borrarUsuario(u:Usuarios){
    this.username=u.username;
    this.us.deleteUsuario(this.username!.toString()).subscribe(
      datos=>{
        this.router.navigate(['ListaUsuario']);
      }
    )
  }
  cancelar(){
    this.router.navigate(['ListaUsuario']);
  }
}
