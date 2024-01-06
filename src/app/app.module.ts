import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DonacionesModule } from './modules/donaciones/donaciones.module';
import { DonanteModule } from './modules/donante/donante.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //* Shared Module
    SharedModule,
    DonacionesModule,
    DonanteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
