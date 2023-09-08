import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { ExpansionPanelModule } from "../components/expansion-panel/module/expansion-panel.module";
import { TabGModule } from "../components/tab-g/modules/tab-g.module";
import { ApproachTestsComponent } from "../components/approach-tests/approach-tests.component";
import { TreeGModule } from "../components/tree-g/modules/tree-g.module";
import { CardGModule } from "../components/card-g/module/card-g.module";
import { CardGBreakPointsModule } from "../components/card-g-breakpoints/module/card-g-breakpoints.module";
import { StepperGModule } from "../components/stepper-g/module/stepper-g.module";
import { FilterFrontComponent } from "../search/filter-front/filter-front.component";
import { SearchFilterFrontService } from "../services/get-all-search/search-filter-front.service";
import { TableGGridModule } from "../components/table-g-grid/modules/table-g-grid.module";
import { RadioButtonGModule } from "../components/radio-button-g/modules/radio-button-g.module";
import { CheckButtonGModule } from "../components/check-button-g/modules/check-button-g.module";
import { TableGGridPuzzleModule } from "../components/table-g-grid-puzzle/modules/table-g-grid-puzzle.module";
import { GridGModule } from "../components/grid-g/modules/grid-g.module";


@NgModule({
  declarations: [
    ApproachTestsComponent,
    FilterFrontComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    TabGModule,
    TableGGridModule,
    TableGGridPuzzleModule,
    ExpansionPanelModule,
    TreeGModule,
    CardGModule,
    CardGBreakPointsModule,
    StepperGModule,
    RadioButtonGModule,
    CheckButtonGModule,
    GridGModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    TabGModule,
    TableGGridModule,
    TableGGridPuzzleModule,
    ExpansionPanelModule,
    ApproachTestsComponent,
    TreeGModule,
    CardGModule,
    CardGBreakPointsModule,
    StepperGModule,
    FilterFrontComponent,
    RadioButtonGModule,
    CheckButtonGModule,
    GridGModule

  ],
  providers: [
    SearchFilterFrontService
  ]
})
export class SharedModule {

}
