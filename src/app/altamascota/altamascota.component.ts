import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../interface/mascota';
import { MascotaService } from '../servicios/mascota.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-altamascota',
  templateUrl: './altamascota.component.html',
  styleUrls: ['./altamascota.component.css']
})
export class AltamascotaComponent implements OnInit {
  m!: Mascota;
  nombre:any;
  tipo:any;
  precio:any;
  constructor(private ms:MascotaService,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  
  altaMasco(){
    this.m={nombre:this.nombre,tipo:this.tipo,precio:this.precio};
    console.log(this.m);
    this.ms.altaMascotas(this.m).subscribe(
      datos=>{
          
          this.router.navigate(['ListaMascota']);
      }
    );
  }
  cancelar(){
    this.router.navigate(['ListaMascota']);
  }

}
