import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertical',
  standalone: true,
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss',
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class VerticalComponent {

}
