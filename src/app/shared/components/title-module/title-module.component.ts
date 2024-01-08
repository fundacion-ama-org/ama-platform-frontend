import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-module',
  templateUrl: './title-module.component.html',
  styleUrl: './title-module.component.scss'
})
export class TitleModuleComponent {

  @Input({ required: true }) title!: string;

}
