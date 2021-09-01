import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-zonavalidacionuser',
  templateUrl: './zonavalidacionuser.component.html',
  styleUrls: ['./zonavalidacionuser.component.css']
})
export class ZonavalidacionuserComponent implements OnInit {
  username!: string;
  clave!: string;
  sw:boolean=false;
  mensage!:string;
  constructor(private router:Router, private us:UsuariosService) { }

  ngOnInit(): void {
  }
  logearse(){
    this.us.loginUser(this.username,this.clave).subscribe(
      datos=>{
        if(datos!==null){
          
          this.router.navigate(['MenuUser']);
        }else {
          this.sw=true;
          this.mensage='introduzca de nuevo contraseña';
        }
      }
    );
  }
  cancelar(){
    this.router.navigate(['MenuPrincipal']);
  }
}
