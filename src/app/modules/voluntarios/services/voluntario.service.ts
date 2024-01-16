import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Voluntarios } from '../interfaces/voluntarios';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {

  private _baseUrl : string = environment.base_url;

  constructor(private http : HttpClient){ }

  getVoluntarios() : Observable<Voluntarios[]>{
    return this.http.get<Voluntarios[]>(`${this._baseUrl}/Volunteers`);
  }

  addVoluntario(donante: any): Observable<any> {
    return this.http.post(`${this._baseUrl}/Volunteers`, donante);
  }

  eliminarVoluntario(id: string): Observable<any> {
    return this.http.delete(`${this._baseUrl}/Volunteers/${id}`).pipe(
      map(resp => true),
      catchError( err => of(false))
    );
  }


}


// {
//   "identificationTypeId": 1,
//   "firstName": "voluntario1",
//   "lastName": "voluntarioaAp",
//   "email": "voluntario@example.com",
//   "phoneNumber": "0999999988",
//   "gender": "masculino",
//   "address": "sur voluntad",
//   "activityTypeId": 1
// }
