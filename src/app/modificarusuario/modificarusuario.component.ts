import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuarios';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-modificarusuario',
  templateUrl: './modificarusuario.component.html',
  styleUrls: ['./modificarusuario.component.css']
})
export class ModificarusuarioComponent implements OnInit {
  u!: Usuarios;
  constructor(private router:Router, private us:UsuariosService) { }

  ngOnInit(): void {
    this.listaModificar();
  }
  listaModificar(){
    let username:any=localStorage.getItem("username");
    this.us.getRegistroUsuarios(username).subscribe(
      datos=>{
        this.u=datos;
      }
    )
  }

  modificar(u:Usuarios){

    this.us.modificarUsuarios(u).subscribe(
      datos=>{
        this.router.navigate(['ListaUsuario']);
      }
    )

  }

  cancelar(){
    this.router.navigate(['ListaUsuario']);
  }
}
