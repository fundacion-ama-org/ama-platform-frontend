import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Asegúrate de importar el Router
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    if (usernameControl && passwordControl) {
      const identification = usernameControl.value;
      const password = passwordControl.value;

      this.loginService.signIn(identification, password).subscribe(response => {
        console.log(response);
        this.router.navigate(['/listar']);
      }, error => {
        console.error(error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrecta!',
        });
      });
    } else {
      console.error('Error al acceder a los controles del formulario');
    }
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const username = this.loginForm.get('username')?.value;
  //     const password = this.loginForm.get('password')?.value;

  //     // Llamada al servicio de autenticación
  //     this.loginService.signIn(username, password).subscribe(
  //       (response: any) => {
  //         if (response.success) {
  //           // Si las credenciales son válidas, redirige a la ruta deseada
  //           this.router.navigate(['/brigada']);
  //         } else {
  //           // Si las credenciales son inválidas, puedes mostrar un mensaje o realizar otra acción
  //           alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
  //         }
  //       },
  //       (error: any) => {
  //         console.error('Error al realizar la solicitud:', error);
  //         // Puedes mostrar un mensaje de error o realizar otra acción según tus necesidades
  //       }
  //     );
  //   }
  // }
}
