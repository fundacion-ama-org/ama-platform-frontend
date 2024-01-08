import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-voluntario',
  templateUrl: './crear-voluntario.component.html',
  styleUrl: './crear-voluntario.component.scss',
})
export class CrearVoluntarioComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {}

  get title(): string {
    return this.data.title;
  }
}
