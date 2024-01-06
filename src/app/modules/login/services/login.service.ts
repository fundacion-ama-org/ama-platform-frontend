import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Lógica de autenticación simulada con credenciales estáticas
    return username === 'admin' && password === 'admin';
  }
}
