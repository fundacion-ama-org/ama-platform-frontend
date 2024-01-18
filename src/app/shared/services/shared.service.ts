import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public soloLetras = /^[A-Za-zÁÉÍÓÍáéíóú]+$/
  public onlyNumerosValores = /^[1-9][0-9]*$/;
  public onlyNumeros = /^[0-9]+$/
  public onlyLetrasEspacios = /^[ÃÃ‰ÃÃ“ÃÃšÃ¡Ã©Ã­Ã³Ãº0A-Za-z ]+$/
  public soloNumerosLetras = /^[0-9A-Za-z]+$/
  public onlyLetrasNumeroEspacios = /^[ÃÃ‰ÃÃ“ÃÃšÃ¡Ã©Ã­Ã³Ãº0-9A-Za-z ]+$/
  public onlyLetras = /^[A-Za-z]+$/

}
