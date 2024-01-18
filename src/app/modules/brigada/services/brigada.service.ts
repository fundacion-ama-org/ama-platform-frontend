import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrigadaRequest } from '../models/Request/BrigadaRequest';

@Injectable({
  providedIn: 'root'
})
export class BrigadaService {

private urlEndPoint: string = 'https://localhost:7071/api/Brigada';
constructor(private http: HttpClient) { }

  public obtenerBrigadas() {
    return this.http.get<any>(this.urlEndPoint);
  }

  public eliminarBrigada(id:number){
    return this.http.delete(this.urlEndPoint+'/11651'+id);
  }

  public editarBrigada(datarequest:BrigadaRequest, id:number){
    return this.http.put(this.urlEndPoint+'/'+id,datarequest);
  }

  public crearBrigada(datarequest:BrigadaRequest){
    return this.http.post(this.urlEndPoint,datarequest);
  }

}
