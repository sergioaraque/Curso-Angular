import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  errorHttp: boolean;

  constructor(private http: HttpClient, public libroClicked: LibroclickedService) { // Private porque realiza la conexión y público porque habla con el servidor

   }

  ngOnInit(): void {
    this.cargarLista();
  }

  // Método para cargar la lista de los libros
  cargarLista() {
    // Nos suscribimos, osea que Angular va a estar mirando a esta página
    this.http.get('assets/lista-libros2.json').subscribe(
      (respuesta: Response) => {this.libros = respuesta;}, // Obtenemos la respuesta y es cuando es okey.
      (respuesta: Response) => {this.errorHttp = true;}// Esto es cuando ha dado error. Si hay un error, la variable errorHttp la ponemos a true
    )
  }

  // Método para agregar el libro visto, que llamará al método libroVisto
  agregarLibro(_libroVisto) {
    this.libroClicked.libroVisto(_libroVisto);
  }
}
