import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';

// Constantes
const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent}, // Para verlo habrá que ir a http://localhost:4200/listado-libros
  // Estas rutas, al ser más globales las dejamos para el final
  {path: '', component: InicioComponent, pathMatch: 'full'}, // Este será el componente por defecto
  {path: '**', redirectTo: '/'} // Si introducimos otro que no exista anteriormente, nos devuelve a la raiz.
];

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
