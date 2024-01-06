import { Injectable } from '@angular/core';
import { Donacion } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  donaciones: Donacion[] = [];

  constructor() { }

  putDonacion( donacion: Donacion) {
    this.donaciones.push(donacion);
    console.log(this.donaciones);
  }
}
