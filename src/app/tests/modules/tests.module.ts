import { Injectable, NgModule } from "@angular/core";
import { TestsComponent } from "../tests.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "src/company/shared/modules/shared.module";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestsRoutingModule } from "./tests-routing.module";
import { CollectDeliverCreateResolver } from "../resolver/collect-deliver.resolver";
import { GridGModule } from "src/company/shared/components/grid-g/modules/grid-g.module";
import { SearchGModule } from "src/company/shared/components/search-g/modules/search-g.module";
import { PaginationGModule } from "src/company/shared/components/pagination-g/modules/pagination-g.module";

@NgModule({
  declarations: [
    TestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    TestsRoutingModule,
    GridGModule,
    SearchGModule,
    PaginationGModule
  ],
  exports: [
    TestsComponent
  ],
  providers: [
    CollectDeliverCreateResolver
  ]
})

export class TestsModule { }
