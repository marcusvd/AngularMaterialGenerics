import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { PaginatedTableG } from "../component/paginated-table-g.component";
import { SearchTableG } from "../component/search-table-g.component";
import { TableGenericListService } from "../../table-g-expandable/services/table-g-list.service";
import { AlternativeService } from "../../table-g-expandable/services/alternative.service";


@NgModule({
  declarations: [
    SearchTableG,
    PaginatedTableG
  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchTableG,
    PaginatedTableG
  ],
  providers: [
    TableGenericListService
    ,AlternativeService
  ]

})

export class TableGModule {

}
