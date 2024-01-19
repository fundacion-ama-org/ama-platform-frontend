import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  showPassword = false;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;

    const newPasswordControl = this.loginForm.get('newPassword');

    if (newPasswordControl) {
      const newPasswordType = this.showPassword ? 'text' : 'password';
      newPasswordControl.get('password')?.patchValue(newPasswordType);
    }
  }

  onSubmit() {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    if (usernameControl && passwordControl) {
      const identification = usernameControl.value;
      const password = passwordControl.value;

      this.loginService.signIn(identification, password).subscribe(response => {
        console.log(response);
        this.router.navigate(['/admin/listar']);
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
}
