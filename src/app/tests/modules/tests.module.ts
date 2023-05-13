import { Injectable, NgModule } from "@angular/core";
import { TestsComponent } from "../tests.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "src/company/shared/modules/shared.module";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestsRoutingModule } from "./tests-routing.module";
import { CollectDeliverCreateResolver } from "../resolver/collect-deliver.resolver";

@NgModule({
  declarations: [
    TestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    TestsRoutingModule
  ],
  exports: [TestsComponent],
  providers: [
    CollectDeliverCreateResolver

  ]
})

export class TestsModule { }
