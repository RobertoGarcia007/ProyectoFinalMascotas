import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../interface/mascota';
import { MascotaService } from '../servicios/mascota.service';

@Component({
  selector: 'app-listarmascotas',
  templateUrl: './listarmascotas.component.html',
  styleUrls: ['./listarmascotas.component.css']
})
export class ListarmascotasComponent implements OnInit {
  mascota: Mascota[]=[];

  constructor(private router:Router,private ms:MascotaService) { }

  ngOnInit(): void {
    this.ms.getMascotas().subscribe(
      datos=>{
        this.mascota=datos;
      }
    )      
  }
  irModificar(m:Mascota){
    localStorage.setItem("id",m.id!.toString());
    this.router.navigate(["ModificarMascota"]);    
  }
  irAlta(){
    this.router.navigate(["AltaMascota"]);
  }
  menuAdmin(){
    this.router.navigate(['MenuAdmin']);
  }

}
