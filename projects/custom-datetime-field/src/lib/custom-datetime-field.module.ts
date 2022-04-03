import { NgModule } from '@angular/core';
import { CustomDatetimeFieldComponent } from './custom-datetime-field.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CustomDatetimeFieldComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CustomDatetimeFieldComponent
  ]
})
export class CustomDatetimeFieldModule { }
