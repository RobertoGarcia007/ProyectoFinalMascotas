import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltacompradorComponent } from './altacomprador/altacomprador.component';
import { AltamascotaComponent } from './altamascota/altamascota.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { BajausuarioComponent } from './bajausuario/bajausuario.component';
import { ListadousuarioComponent } from './listadousuario/listadousuario.component';
import { ListarmascotasComponent } from './listarmascotas/listarmascotas.component';
import { MenuadministracionComponent } from './menuadministracion/menuadministracion.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { MenuusuarioComponent } from './menuusuario/menuusuario.component';
import { ModificarmascotaComponent } from './modificarmascota/modificarmascota.component';
import { ModificarusuarioComponent } from './modificarusuario/modificarusuario.component';
import { VentahistoricosComponent } from './ventahistoricos/ventahistoricos.component';
import { VentamascotasComponent } from './ventamascotas/ventamascotas.component';
import { ZonavalidacionadminComponent } from './zonavalidacionadmin/zonavalidacionadmin.component';
import { ZonavalidacionuserComponent } from './zonavalidacionuser/zonavalidacionuser.component';

const routes: Routes = [
  {
   path:'AltaUsuario',
   component:AltausuarioComponent
  },
  {
   path:'ModificarUsuario',
   component:ModificarusuarioComponent  
  },
  {
   path:'ListaUsuario',
   component:ListadousuarioComponent
  },
  {
   path:'BajaUsuario',
   component:BajausuarioComponent 
  },
  {
    path:'AltaMascota',
    component:AltamascotaComponent
  },
  {
    path:'ModificarMascota',
    component:ModificarmascotaComponent
  },
  {
    path:'MenuAdmin',
    component:MenuadministracionComponent
  },
  {
    path:'ListaMascota',
    component: ListarmascotasComponent
  },
  {
    path:'MenuPrincipal',
    component:MenuprincipalComponent
  },
  {
    path:'MenuUser',
    component: MenuusuarioComponent
  },
  {
    path:'VentaMascotas',
    component: VentamascotasComponent
  },
  {
    path:'AltaComprador',
    component: AltacompradorComponent
  },
  {
    path:'HistoricoVentas',
    component: VentahistoricosComponent
  },
  {
    path:'LoginUser',
    component: ZonavalidacionuserComponent
  },
  {
    path:'loginAdmin',
    component: ZonavalidacionadminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
