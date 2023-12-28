import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
