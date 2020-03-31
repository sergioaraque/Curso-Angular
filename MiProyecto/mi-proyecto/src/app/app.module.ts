import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemplocomponenteComponent } from './ejemplocomponente/ejemplocomponente.component';
import { RandomComponent } from './random/random.component';
import { ColoresComponent } from './colores/colores.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemplocomponenteComponent,
    RandomComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
