import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuadministracion',
  templateUrl: './menuadministracion.component.html',
  styleUrls: ['./menuadministracion.component.css']
})
export class MenuadministracionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  listaUsuarios( ){
    this.router.navigate(['ListaUsuario']);
  }
  listarMascota(){
    this.router.navigate(['ListaMascota']);
  }
  cerrarAdministracion(){
    this.router.navigate(['MenuPrincipal']);
  }

}
