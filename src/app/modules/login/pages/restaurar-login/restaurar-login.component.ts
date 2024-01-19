import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../../services/login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-restaurar-login',
  templateUrl: './restaurar-login.component.html',
  styleUrl: './restaurar-login.component.css'
})
export class RestaurarLoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(private loginService: LoginService) {}  // Inyecta el servicio en el constructor

  enviarCorreo() {
    // Obtén el valor del control de correo electrónico
    const email = this.emailFormControl.value;

    // Verifica si el valor no es nulo antes de llamar al servicio
    if (email !== null) {
      // Llama al método forgotPassword del servicio
      this.loginService.forgotPassword(email).subscribe(
        (response) => {
          // Maneja la respuesta exitosa si es necesario
          console.log('Correo enviado exitosamente', response);
        },
        (error) => {
          // Maneja el error si ocurre alguno
          console.error('Error al enviar el correo', error);
        }
      );
    } else {
      console.error('El valor del correo electrónico es nulo.');
    }
  }
}
