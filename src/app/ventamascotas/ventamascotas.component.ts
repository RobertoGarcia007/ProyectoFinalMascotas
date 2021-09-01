import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../interface/mascota';
import { Ventas } from '../interface/ventas';
import { CompradorService } from '../servicios/comprador.service';
import { MascotaService } from '../servicios/mascota.service';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-ventamascotas',
  templateUrl: './ventamascotas.component.html',
  styleUrls: ['./ventamascotas.component.css']
})
export class VentamascotasComponent implements OnInit {
  mascota:Mascota[]=[];
  tipo!:string;
  arraytipo:string[]=[];
  dnic!:string | null;
  id!:number | undefined;
  v!:Ventas;
  sw1:boolean=false;
  mensage!:string;
  sw2:boolean=false;
  constructor(private router:Router, private cs:CompradorService,private ms:MascotaService,private vs:VentasService) { }


  ngOnInit(): void {
    
    this.dnic=localStorage.getItem("dni");
    this.ms.getNombreMascotas().subscribe(
      datos=>{
        this.arraytipo=datos;
      }
    )
    

  }

  ventaMascota(){
   

      this.cs.getRegistroComprador(this.dnic!).subscribe(
        datos=>{
          if(datos===null){
           
            localStorage.setItem("dnic",this.dnic!.toString());
            this.router.navigate(['AltaComprador']);
          }else{
            this.sw1=true;
          }
        }
     );  
      

      let pipe = new DatePipe('en-US')
      let formatDate=pipe.transform(Date.now(),'dd/MM/yyyy');
      console.log(this.sw1)

      if(this.sw1===true && this.id!=null){

        this.v={dnic:this.dnic!,idmascota:this.id!,fechaventa:formatDate!.toString()}
        console.log(this.v);
        this.vs.altaVentas(this.v).subscribe(
          datos=>{
            
            localStorage.setItem("dni","");
            this.dnic="";
            this.router.navigate(['HistoricoVentas']);
            console.log("venta realizada con exito");
        }
        );

       
       this.sw1=false;
      }else if(this.id==null){
        this.sw2=true;
       this.mensage="te falta el id de mascota, usa el buscador de mascotas";
      }

     
  }


  menuUser(){
    localStorage.setItem("dni","");
    this.router.navigate(['MenuUser']);
  }
  listadoTipo(){

    this.ms.getMascotasTipo(this.tipo).subscribe(
      datos=>{
        this.mascota=datos;
      }
    )
  }
  exportarIdMascota(m:Mascota){
    this.id=m.id;
  }
}
