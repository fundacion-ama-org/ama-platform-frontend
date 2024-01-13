import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonantesService {
  private apiUrl = 'https://platform-ama-backend.azurewebsites.net/api'; 

  constructor(private http: HttpClient) { }

  // Obtener todos los donantes
  getAllDonantes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Donors`);
  }

  // Obtener un donante por ID
  getDonanteById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/donantes/${id}`);
  }

  // Agregar un nuevo donante
  addDonante(donante: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Donors`, donante);
  }

  // Actualizar un donante
  updateDonante(id: string, donante: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/donantes/${id}`, donante);
  }

  // Eliminar un donante
  eliminarDonante(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Donors/${id}`);
  }

  private donanteCreado = new Subject<void>();

  // Permitir a los componentes suscribirse al evento de donante creado
  donanteCreado$ = this.donanteCreado.asObservable();

  // Método para emitir el evento
  donanteFueCreado() {
    this.donanteCreado.next();
  }

}
