import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AN1';
  constructor(private http: HttpClient) { }

  onSubmit(formulario: any) {
    // Obtén los datos del formulario y conviértelos a JSON
    const datosJson = JSON.stringify(formulario.value);

    // Realiza la petición POST
    this.http.post('https://aniku.onrender.com/usuarios', datosJson)
      .subscribe(
        (respuesta) => {
          // Maneja la respuesta exitosa
          console.log(respuesta);
        },
        (error) => {
          // Maneja el error
          console.error(error);
        }
      );

  }
}
