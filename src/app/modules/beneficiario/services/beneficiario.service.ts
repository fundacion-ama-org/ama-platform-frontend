import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseArray, ResponseObject } from '../../../shared/interfaces/http.interfaces';
import { enviroments } from '../../../../environments/envieronments';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  private _baseUrl: string = enviroments.base_url;

  constructor(private _html: HttpClient) { }

  guardarBeneficiario(beneficiario: any): Observable<ResponseObject<any>> {
    const url: string = `${this._baseUrl}`
    return this._html.post<ResponseObject<any>>(url, beneficiario)
  }

  listarBeneficiario(): Observable<ResponseArray<any>> {
    const url: string = `${this._baseUrl}`
    return this._html.get<ResponseArray<any>>(url)
  }

  editarBeneficiario(id: string): Observable<ResponseObject<any>> {
    const url: string = `${this._baseUrl}/${id}`
    return this._html.put<ResponseObject<any>>(url, {})
  }

  eliminarBeneficiario(id: string): Observable<ResponseObject<any>> {
    const url: string = `${this._baseUrl}/${id}`
    return this._html.delete<ResponseObject<any>>(url)
  }

}
