import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { SearchTableG } from "../../tmp/search-table-g.component";
import { TableGenericListService } from "../../table-g-expandable/services/table-g-list.service";
import { AlternativeService } from "../../table-g-expandable/services/alternative.service";
import { Paginator } from "../component/paginator";
import { TableGComponent } from "../component/table-g.component";


@NgModule({
  declarations: [
    SearchTableG,
    TableGComponent,
    Paginator
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
    TableGComponent,
    Paginator
  ],
  providers: [
    TableGenericListService,
    AlternativeService,
  ]

})

export class TableGModule {

}
