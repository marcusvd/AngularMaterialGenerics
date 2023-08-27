import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { TableGenericListService } from "../../table-g-expandable/services/table-g-list.service";
import { AlternativeService } from "../../table-g-expandable/services/alternative.service";
import { TableGGridComponent } from "../component/table-g-grid.component";



@NgModule({
  declarations: [
    TableGGridComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableGGridComponent,
  ],
  providers: [
    TableGenericListService,
    AlternativeService,
  ]

})

export class TableGGridModule {

}
