import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../interface/mascota';
import { MascotaService } from '../servicios/mascota.service';

@Component({
  selector: 'app-modificarmascota',
  templateUrl: './modificarmascota.component.html',
  styleUrls: ['./modificarmascota.component.css']
})
export class ModificarmascotaComponent implements OnInit {
  m!:Mascota;
  constructor(private router:Router,private ms:MascotaService) { }

  ngOnInit(): void {
  this.listaModificar();
  }

  listaModificar(){
    let id:any=localStorage.getItem("id");
    this.ms.getRegistroMascota(id).subscribe(
      datos=>{
        this.m=datos;
      }
    )
  }
  cancelar(){
    this.router.navigate(['ListaMascota']);
  }
   modificar(m:Mascota){
     this.ms.modificarMascotas(m).subscribe(
       datos=>{
         this.router.navigate(['ListaMascota']);
       }
     )
   }
}
