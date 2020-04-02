import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroclickedService } from './libroclicked.service';

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { InformacionComponent } from './informacion/informacion.component';

// Constantes
const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent}, // Para verlo habrá que ir a http://localhost:4200/listado-libros
  {path: 'informacion/:libroId', component: InformacionComponent}, // :libroId es una variable
  {path: 'informacion', redirectTo: '/'}, // Si alguien no introduce el id del libro, le redirigimos a la portada
  // Estas rutas, al ser más globales las dejamos para el final
  {path: '', component: InicioComponent, pathMatch: 'full'}, // Este será el componente por defecto
  {path: '**', component: ErrorComponent} // Si introducimos otro que no exista anteriormente, nos devuelve a la raiz.
];

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    ErrorComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
