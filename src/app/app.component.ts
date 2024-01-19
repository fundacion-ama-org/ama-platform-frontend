import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private config: PrimeNGConfig) { }

  title = 'ama-platform-frontend';

  ngOnInit(): void {
    this.config.ripple = true
    this.config.setTranslation({
      accept: 'Aceptar',
      reject: 'Canc',
      //translations
    });
  }
}
