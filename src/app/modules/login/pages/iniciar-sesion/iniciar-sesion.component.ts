import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: LoginService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.router.navigateByUrl('/admin/beneficiario');
    console.log(this.router.navigateByUrl('/admin/beneficiario'))
    console.log('entra')
    // if (this.loginForm.valid) {
    //   const username = this.loginForm.get('username')?.value;
    //   const password = this.loginForm.get('password')?.value;

    //   // Utiliza el servicio de autenticación para verificar las credenciales
    //   const isAuthenticated = this.authService.login(username, password);

    //   if (isAuthenticated) {
    //     // Si las credenciales son válidas, redirige a la ruta deseada

    //   } else {
    //     // Si las credenciales son inválidas, puedes mostrar un mensaje o realizar otra acción
    //     alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    //   }
    // }
  }

  onClickLogin() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario o contraseña incorrecta!",
    });
  }
}
