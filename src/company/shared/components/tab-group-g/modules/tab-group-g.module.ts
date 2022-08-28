import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { SharedModule } from "src/company/shared/modules/shared.module";
import { TabGroupGComponent } from "../component/tab-group-g.component";

import { ServicesBudgetListService } from "../../../../../app/services/services-budget-list.service";
import { ClientListService } from "src/app/services/client-list.service";

@NgModule({
  declarations: [
    TabGroupGComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    TabGroupGComponent
  ],
  providers:[
    ServicesBudgetListService,
    ClientListService
  ]
})

export class TabGroupGModule {

}
