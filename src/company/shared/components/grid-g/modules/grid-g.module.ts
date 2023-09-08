import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridGComponent } from '../grid-g.component';
import { MaterialModule } from 'src/company/shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridGDisplayItemComponent } from '../grid-g-display-item.component';
import { GridGDisplayHeaderComponent } from '../grid-g-display-header.component';



@NgModule({
  declarations: [
    GridGComponent,
    GridGDisplayItemComponent,
    GridGDisplayHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    GridGComponent,
    GridGDisplayItemComponent,
    GridGDisplayHeaderComponent
  ]
})
export class GridGModule { }
