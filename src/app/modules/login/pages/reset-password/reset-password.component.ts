// reset-password.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  showNewPassword = false;
  showConfirmPassword = false;
  token: string = '';
  email: string = '';

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener los parámetros de la URL al inicializar el componente
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];
    });
  }

  togglePasswordVisibility(control: 'newPassword' | 'confirmPassword') {
    if (control === 'newPassword') {
      this.showNewPassword = !this.showNewPassword;
    } else if (control === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }

    const passwordControl = this.resetPasswordForm.get(control)?.get('password');
    if (passwordControl) {
      const passwordType = this.showNewPassword || this.showConfirmPassword ? 'text' : 'password';
      passwordControl.patchValue(passwordType);
    }
  }

  onSubmit() {
    const newPassword = this.resetPasswordForm.get('newPassword')?.value;
    const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value;
  
    if (newPassword === confirmPassword) {
      this.loginService.resetPassword(this.email, this.token, newPassword, { responseType: 'text' }).subscribe(response => {
        console.log(response);
        this.router.navigate(['/admin/listar']);
      }, error => {
        console.error(error);
      
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al restablecer la contraseña!',
        });
      });      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden!',
      });
    }
  }
}
