import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from 'src/company/shared/modules/shared.module';
import { MaterialModule } from 'src/company/shared/modules/material.module';
import { AppInventoryService, AppServiceBudgetService } from './services/app.services';
import { TestedComponent } from 'src/tested/tested.component';
import { TestingComponent } from 'src/testing/testing.component';


@NgModule({
  declarations: [
    AppComponent,
    TestedComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,


  ],
  exports:[

  ],

  providers: [AppInventoryService, AppServiceBudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
