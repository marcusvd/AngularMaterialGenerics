import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridGComponent } from '../grid-g.component';
import { MaterialModule } from 'src/company/shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationGModule } from '../../pagination-g/modules/pagination-g.module';
import { SearchGModule } from '../../search-g/modules/search-g.module';
import { GridGItemsComponent } from '../grid-g-items.component';
import { GridGHeaderComponent } from '../grid-g-header.component';



@NgModule({
  declarations: [
    GridGComponent,
    GridGItemsComponent,
    GridGHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SearchGModule,
    PaginationGModule
  ],
  exports:[
    GridGComponent,
    GridGItemsComponent,
    GridGHeaderComponent
  ]
})
export class GridGModule { }
