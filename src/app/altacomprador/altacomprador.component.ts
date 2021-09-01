import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comprador } from '../interface/comprador';
import { CompradorService } from '../servicios/comprador.service';

@Component({
  selector: 'app-altacomprador',
  templateUrl: './altacomprador.component.html',
  styleUrls: ['./altacomprador.component.css']
})
export class AltacompradorComponent implements OnInit {
  c!:Comprador;
  dni!: string | null;
  nombre!: string;
  apellido!: string;
  direccion!: string;
  localidad!: string;
  email!: string;
  telefonoconc!: number;

  constructor(private router:Router,private cs:CompradorService) { }

  ngOnInit(): void {
    this.dni=localStorage.getItem("dnic");
    
  }
  altaComprador(){
    this.c={dni:this.dni!,nombre:this.nombre,apellido:this.apellido,direccion:this.direccion,
      localidad:this.localidad,email:this.email,telefonoconc:this.telefonoconc};

    this.cs.altaComprador(this.c).subscribe(
      datos=>{
        localStorage.removeItem("dnic");
        localStorage.setItem("dni",this.dni!.toString());
        this.router.navigate(['VentaMascotas']);
      }
    )
  }
  cancelar(){
    this.router.navigate(['VentaMascotas']);
  }

}
