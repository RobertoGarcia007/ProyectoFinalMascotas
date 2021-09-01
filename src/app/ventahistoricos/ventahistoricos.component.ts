import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ventas } from '../interface/ventas';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-ventahistoricos',
  templateUrl: './ventahistoricos.component.html',
  styleUrls: ['./ventahistoricos.component.css']
})
export class VentahistoricosComponent implements OnInit {
  venta:Ventas[]=[];
  ventasTotales!: number;
  constructor(private router:Router, private vs:VentasService) { }

  ngOnInit(): void {
      this.vs.getListadoVentas().subscribe(
        datos=>{
          this.venta=datos;
          this.ventasTotales=this.venta.length;
        }
      )

      this.ventasTotales=this.venta.length;
  }
  menuUser(){
    this.router.navigate(['MenuUser']);
  }

}
