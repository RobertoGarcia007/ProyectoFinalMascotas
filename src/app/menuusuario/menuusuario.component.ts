import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuusuario',
  templateUrl: './menuusuario.component.html',
  styleUrls: ['./menuusuario.component.css']
})
export class MenuusuarioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cerrarUser(){
    this.router.navigate(['MenuPrincipal']);
  }
  
  irVenta(){
    this.router.navigate(['VentaMascotas'])
  }
  irHistorico(){
    this.router.navigate(['HistoricoVentas']);
  }
}
