import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "src/company/shared/modules/material.module";
import { TabGComponent } from "../component/tab-g.component";
import { ServicesBudgetListService } from "../../../../../app/services/services-budget-list.service";
import { ClientListService } from "src/app/services/client-list.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    TabGComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  exports: [
    TabGComponent
  ],
  providers:[
    ServicesBudgetListService,
    ClientListService
  ]
})

export class TabGModule {

}
