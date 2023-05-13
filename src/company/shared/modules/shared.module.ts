import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";
import { TableGModule } from "../components/table-g/modules/table-g.module";
import { TableGModuleExpandable } from "../components/table-g-expandable/modules/table-g-expandable.module";
import { ExpansionPanelModule } from "../components/expansion-panel/module/expansion-panel.module";
import { TabGModule } from "../components/tab-g/modules/tab-g.module";
import { ApproachTestsComponent } from "../components/approach-tests/approach-tests.component";
import { TreeGModule } from "../components/tree-g/modules/tree-g.module";
import { CardGModule } from "../components/card-g/module/card-g.module";
import { CardGBreakPointsModule } from "../components/card-g-breakpoints/module/card-g-breakpoints.module";
import { StepperGModule } from "../components/stepper-g/module/stepper-g.module";
import { FilterFrontComponent } from "../search/filter-front/filter-front.component";
import { SearchFilterFrontService } from "../services/get-all-search/search-filter-front.service";
import { TableFullGModule } from "../components/table-full-g/modules/table-full-g.module";

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
    TableGModule,
    TabGModule,
    TableGModuleExpandable,
    ExpansionPanelModule,
    TreeGModule,
    CardGModule,
    CardGBreakPointsModule,
    StepperGModule,
    TableFullGModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MaterialModule,
    TableGModule,
    TabGModule,
    TableGModuleExpandable,
    ExpansionPanelModule,
    ApproachTestsComponent,

    TreeGModule,
    CardGModule,
    CardGBreakPointsModule,
    StepperGModule,
    FilterFrontComponent,
    TableFullGModule
  ],
  providers: [
    SearchFilterFrontService
  ]
})
export class SharedModule {

}
