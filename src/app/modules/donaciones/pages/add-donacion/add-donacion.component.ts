import { Component } from '@angular/core';

interface Options {
  value: string;
  descrip: string;
}

@Component({
  selector: 'app-add-donacion',
  templateUrl: './add-donacion.component.html',
  styleUrl: './add-donacion.component.scss'
})
export class AddDonacionComponent {

  options: Options[] = [
    {value: '1', descrip: 'Tipo 1'},
    {value: '2', descrip: 'Tipo 2'},
    {value: '3', descrip: 'Tipo 3'}
  ];

}
