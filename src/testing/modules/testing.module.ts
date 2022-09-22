import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { ClientResolver } from "../resolvers/client-resolve";
import { TestingRoutingModule } from "./testing.routing.module";


@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TestingRoutingModule,
  ],
  exports: [

  ],
  providers: [
  ClientResolver

  ]

})

export class TestingModule {

}
