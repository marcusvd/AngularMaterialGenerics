import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaginationGComponent } from "../pagination-g.component";
import { MaterialModule } from "src/company/shared/modules/material.module";

@NgModule({
  declarations: [PaginationGComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PaginationGComponent]
})

export class PaginationGModule { }
