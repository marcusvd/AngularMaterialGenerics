import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "src/company/shared/modules/material.module";
import { TabGModule } from "../../tab-g/modules/tab-g.module";
import { ExpansionPanelComponent } from "../component/expansion-panel.component";


@NgModule({
  declarations: [
    ExpansionPanelComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ExpansionPanelComponent,
  ]
})



export class ExpansionPanelModule {}
