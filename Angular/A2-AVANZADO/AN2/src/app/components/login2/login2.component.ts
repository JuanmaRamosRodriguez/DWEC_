import { Component } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  formulario = {
    name: '',
    telephone: '',
    email: '',
    password: ''
  };

  onSubmit() {

    const datosFormulario = JSON.stringify(this.formulario);

    fetch('https://aniku.onrender.com/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: datosFormulario
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }
}
