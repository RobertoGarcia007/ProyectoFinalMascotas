import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuarios';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {
  usuario:Usuarios[]=[];
  sw:boolean=false;
  constructor(private router:Router,private us:UsuariosService) { }

  ngOnInit(): void {
    this.us.getUsuarios().subscribe(
      datos=>{
            this.usuario=datos;
            console.log(this.usuario);
        if(this.usuario.length===0){
          this.sw=true;
          console.log(this.sw);
        }else{
          this.sw=false;
          console.log(this.sw);
        }
      }
    );
  }
  menuAdmin(){
    this.router.navigate(['loginAdmin']);
  }
  menuUser(){
    this.router.navigate(['LoginUser']);
  }
}
