import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { OtrosComponent } from './otros/otros.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    EstudiosComponent,
    ExperienciaComponent,
    ConocimientosComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
