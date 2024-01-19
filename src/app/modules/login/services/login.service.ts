import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private getRequestOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return { headers };
  }

  constructor(private http: HttpClient) { }

  setAuthenticated(value: boolean): void {
    this.isAuthenticatedSubject.next(value);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  signIn(identification: string, password: string): Observable<any> {
    const url = `${environment.base_url}/Auth/signin`;
    const body = { identification, password };

    return this.http.post(url, body, this.getRequestOptions())
    .pipe(
      map(resp => {
        // Lógica para manejar la respuesta del servidor
        this.setAuthenticated(true); // Marcar al usuario como autenticado
        return resp;
      }),
      catchError(this.handleError)
    );
  }

  forgotPassword(email: string): Observable<any> {
    const url = `${environment.base_url}/Auth/forgot-password`;
    const body = { email };

    return this.http.post(url, body, this.getRequestOptions())
    .pipe(
      map(resp => resp),
      catchError(this.handleError)
    );
  }

  resetPassword(email: string, token: string, newPassword: string, options?: any): Observable<any> {
    const url = `${environment.base_url}/Auth/reset-password`;
    const body = { email, token, newPassword };
  
    return this.http.post(url, body, { ...this.getRequestOptions(), ...options })
      .pipe(
        map(resp => resp),
        catchError(error => {
          console.error('Error response:', error.error);
          return this.handleError(error);
        })
      );
  }   

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
  
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  
      // Puedes agregar lógica para manejar errores específicos aquí
      if (error.status === 401) {
        // Código para manejar errores de no autorizado
      }
    }
  
    return throwError(errorMessage);
  }
}
