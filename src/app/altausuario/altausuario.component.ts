import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuarios';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {
  u!: Usuarios;
  username:any;
  clave:any;
  nombre:any;
  apellidos:any;
  telefonoCon:any;

  constructor(private router:Router, private us:UsuariosService) { }

  ngOnInit(): void {
  }
  altaUser(){
    this.u={username:this.username,clave:this.clave,nombre:this.nombre,apellidos:this.apellidos,telefonocon:this.telefonoCon};
    this.us.altaUsuarios(this.u).subscribe(
      datos=>{
        this.router.navigate(['ListaUsuario']);
      }
    );

  }

  cancelar(){
    this.router.navigate(['ListaUsuario']);
  }
}
