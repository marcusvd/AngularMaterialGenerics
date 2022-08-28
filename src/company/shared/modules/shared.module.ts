import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { MaterialModule } from "./material.module";
import { UrlBackEndService } from "src/backEnd/url-backend.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardGenericListService } from "../components/card-simple-g/services/card-g-list.service";
import { TableGModule } from "../components/table-g/modules/table-g.module";
import { TableGModuleExpandable } from "../components/table-g-expandable/modules/table-g-expandable.module";
import { TabGroupGModule } from "../components/tab-group-g/modules/tab-group-g.module";
import { ExpansionPanelModule } from "../components/expansion-panel/module/expansion-panel.module";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MaterialModule,
    TableGModule,
    TabGroupGModule,
    TableGModuleExpandable,
    ExpansionPanelModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,


    MaterialModule,
    TableGModule,
    TabGroupGModule,
    TableGModuleExpandable,
    ExpansionPanelModule
  ],
  providers: [
    CardGenericListService,
    UrlBackEndService,
    ]
})
export class SharedModule {

}
