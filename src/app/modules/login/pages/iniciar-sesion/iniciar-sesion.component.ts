import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
  providers: [MessageService]
})
export class IniciarSesionComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: LoginService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      // Utiliza el servicio de autenticación para verificar las credenciales
      const isAuthenticated = this.authService.login(username, password);
      console.log(isAuthenticated)
      if (isAuthenticated) {
        // Si las credenciales son válidas, redirige a la ruta deseada
        this.router.navigateByUrl('/admin');

      } else {
        // Si las credenciales son inválidas, puedes mostrar un mensaje o realizar otra acción
        this.messageService.add({ severity: 'Advertencia', summary: 'Error', detail: 'Credenciales Incorrectas' })
      }
    }
  }

  onClickLogin() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario o contraseña incorrecta!",
    });
  }
}
