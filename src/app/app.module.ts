import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformetipomascotaComponent } from './informetipomascota/informetipomascota.component';
import { HistoricoventasComponent } from './historicoventas/historicoventas.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { BajausuarioComponent } from './bajausuario/bajausuario.component';
import { ModificarusuarioComponent } from './modificarusuario/modificarusuario.component';
import { ListadousuarioComponent } from './listadousuario/listadousuario.component';
import { AltamascotaComponent } from './altamascota/altamascota.component';
import { ModificarmascotaComponent } from './modificarmascota/modificarmascota.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MenuadministracionComponent } from './menuadministracion/menuadministracion.component';
import { ListarmascotasComponent } from './listarmascotas/listarmascotas.component';
import { DatePipe } from '@angular/common';
import { MenuusuarioComponent } from './menuusuario/menuusuario.component';
import { VentamascotasComponent } from './ventamascotas/ventamascotas.component';
import { VentahistoricosComponent } from './ventahistoricos/ventahistoricos.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { AltacompradorComponent } from './altacomprador/altacomprador.component';
import { ZonavalidacionadminComponent } from './zonavalidacionadmin/zonavalidacionadmin.component';
import { ZonavalidacionuserComponent } from './zonavalidacionuser/zonavalidacionuser.component';

@NgModule({
  declarations: [
    AppComponent,
    InformetipomascotaComponent,
    HistoricoventasComponent,
    AltausuarioComponent,
    BajausuarioComponent,
    ModificarusuarioComponent,
    ListadousuarioComponent,
    AltamascotaComponent,
    ModificarmascotaComponent,
    MenuadministracionComponent,
    ListarmascotasComponent,
    MenuusuarioComponent,
    VentamascotasComponent,
    VentahistoricosComponent,
    MenuprincipalComponent,
    AltacompradorComponent,
    ZonavalidacionadminComponent,
    ZonavalidacionuserComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
