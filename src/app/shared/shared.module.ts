import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

//* Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    CommonModule,
    //* Http Client Module
    HttpClientModule,

    //* Modulos de Material
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,


    ToolbarComponent

  ]
})
export class SharedModule { }
