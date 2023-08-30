import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { TableGenericListService } from "../../table-g-expandable/services/table-g-list.service";
import { AlternativeService } from "../../table-g-expandable/services/alternative.service";
import { TableGGridPuzzleComponent } from "../component/table-g-grid-puzzle.component";




@NgModule({
  declarations: [
    TableGGridPuzzleComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableGGridPuzzleComponent,
  ],
  providers: [
    TableGenericListService,
    AlternativeService,
  ]

})

export class TableGGridPuzzleModule {

}
