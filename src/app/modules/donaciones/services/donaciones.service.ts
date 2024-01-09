import { Injectable } from '@angular/core';
import { Donacion } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  donaciones: Donacion[] = [
    {
      id: 1,
      nDonacion: 'Benefica',
      tipo: '2',
      valor: 215,
      nDonante: 'hashdhsa',
      fecha: new Date()
    },
    {
      id: 2,
      nDonacion: 'Estrella',
      tipo: '2',
      valor: 1,
      nDonante: 'hashdhsa',
      fecha: new Date()
    },
    {
      id: 3,
      nDonacion: 'Estelar',
      tipo: '2',
      valor: 1,
      nDonante: 'hashdhsa',
      fecha: new Date()
    },
    {
      id: 4,
      nDonacion: 'Gozo',
      tipo: '2',
      valor: 1,
      nDonante: 'hashdhsa',
      fecha: new Date()
    },
    {
      id: 5,
      nDonacion: 'Bellísima',
      tipo: '2',
      valor: 1,
      nDonante: 'hashdhsa',
      fecha: new Date()
    },
    {
      id: 6,
      nDonacion: 'Excelente',
      tipo: '2',
      valor: 1,
      nDonante: 'hashdhsa',
      fecha: new Date()
    },
    {
      id: 7,
      nDonacion: 'Magnífica',
      tipo: '2',
      valor: 1,
      nDonante: 'hashdhsa',
      fecha: new Date()
    },
    {
      id: 8,
      nDonacion: 'Gran Donacion',
      tipo: '2',
      valor: 1,
      nDonante: 'hashdhsa',
      fecha: new Date()
    }
  ];

  constructor() { }

  putDonacion( donacion: Donacion) {
    this.donaciones.push(donacion);
    console.log(this.donaciones);
  }

  getDonaciones() {
    return [...this.donaciones];
  }

  getDonacionXId(id: number): Donacion {
    return this.donaciones.find( (donacion) => donacion.id === id ) as Donacion;
  }

  actualizarDonacion( donacion: Donacion) {
    return
  }
}
