import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuarios';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-listadousuario',
  templateUrl: './listadousuario.component.html',
  styleUrls: ['./listadousuario.component.css']
})
export class ListadousuarioComponent implements OnInit {
  usuario:Usuarios[]=[];
  constructor(private router:Router, private us:UsuariosService) { }

  ngOnInit(): void {
    this.us.getUsuarios().subscribe(
      datos=>{
        this.usuario=datos;
      }
    )
  }
  altaUsuarios(){
    this.router.navigate(['AltaUsuario']);
  }
  irModificar(u:Usuarios){
    localStorage.setItem("username",u.username!.toString());
    this.router.navigate(["ModificarUsuario"]);    
  }
  irBorrar(u:Usuarios){
    localStorage.setItem("username",u.username!.toString());
    this.router.navigate(["BajaUsuario"]);
  }
  menuAdmin(){
    this.router.navigate(["MenuAdmin"]); 
  }

}
