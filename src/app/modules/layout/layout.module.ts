import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { VerticalComponent } from './vertical/vertical.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    VerticalComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    //*
    SharedModule
  ],
  exports: [
    VerticalComponent
  ]
})
export class LayoutModule { }
