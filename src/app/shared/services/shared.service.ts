import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public soloLetras = /^[A-Za-zÁÉÍÓÍáéíóú]+$/
  public onlyNumerosValores = /^[1-9][0-9]*$/;
  public onlyNumeros = /^[0-9]+$/
  public onlyLetrasEspacios = /^[ÁÉÍÓÍÚáéíóú0A-Za-z ]+$/
  public soloNumerosLetras = /^[0-9A-Za-z]+$/
  public onlyLetrasNumeroEspacios = /^[ÁÉÍÓÍÚáéíóú0-9A-Za-z ]+$/
  public onlyLetras = /^[A-Za-z]+$/
}
