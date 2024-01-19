import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrigadaRequest } from '../models/Request/BrigadaRequest';

@Injectable({
  providedIn: 'root'
})
export class BrigadaService {

private urlEndPoint: string = 'https://platform-ama-backend.azurewebsites.net/api/Brigadas';
constructor(private http: HttpClient) { }

  public obtenerBrigadas() {
    return this.http.get<any>(this.urlEndPoint);
  }

  public eliminarBrigada(id:number){
    return this.http.delete(this.urlEndPoint+'/'+id);
  }

  public editarBrigada(datarequest:BrigadaRequest, id:number){
    return this.http.put(this.urlEndPoint+'/'+id,datarequest);
  }

  public crearBrigada(datarequest:BrigadaRequest){
    return this.http.post(this.urlEndPoint,datarequest);
  }

}
