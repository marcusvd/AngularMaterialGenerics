import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";
import { UrlBackEndService } from "src/backEnd/url-backend.service";
import { CardGenericListService } from "../components/card-simple-g/services/card-g-list.service";
import { TableGModule } from "../components/table-g/modules/table-g.module";
import { TableGModuleExpandable } from "../components/table-g-expandable/modules/table-g-expandable.module";
import { ExpansionPanelModule } from "../components/expansion-panel/module/expansion-panel.module";
import { TabGModule } from "../components/tab-g/modules/tab-g.module";
import { ApproachTestsComponent } from "../components/approach-tests/approach-tests.component";
import { GridGModule } from "../components/grid-g/modules/grid-g.module";




@NgModule({
  declarations: [
    ApproachTestsComponent
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
    GridGModule,


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
    GridGModule


  ],
  providers: [
    CardGenericListService,
    UrlBackEndService,
    ]
})
export class SharedModule {

}
