import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { PaginatedTableGExpandable } from "../component/paginated-table-g-expandable.component";
import { SearchTableGExpandable } from "../component/search-table-g-expandable.component";
import { AlternativeService } from "../services/alternative.service";
import { TableGenericListService } from "../services/table-g-list.service";

@NgModule({
  declarations: [
    SearchTableGExpandable,
    PaginatedTableGExpandable
  ],
  imports: [
     MaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchTableGExpandable,
    PaginatedTableGExpandable
  ],
  providers: [
    TableGenericListService
    ,AlternativeService
  ]

})

export class TableGModuleExpandable {

}
