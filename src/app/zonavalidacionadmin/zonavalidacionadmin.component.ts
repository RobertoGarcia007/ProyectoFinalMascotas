import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zonavalidacionadmin',
  templateUrl: './zonavalidacionadmin.component.html',
  styleUrls: ['./zonavalidacionadmin.component.css']
})
export class ZonavalidacionadminComponent implements OnInit {
  username!: string;
  clave!:string;
  nomAdmin:string="adminn";
  claveAdmin:string="123456";
  sw:boolean=false;
  mensage!:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  logearse(){
    
    
    if((this.username===this.nomAdmin) && (this.clave===this.claveAdmin)){

      this.router.navigate(['MenuAdmin']);
    }else{
      this.sw=true;
      this.mensage='introduzca de nuevo contraseña';
    }
  }
  cancelar(){
    this.router.navigate(['MenuPrincipal']);
  }
}
