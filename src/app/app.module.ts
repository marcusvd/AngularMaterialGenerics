import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/company/shared/modules/shared.module';
import { MaterialModule } from 'src/company/shared/modules/material.module';

import { TabGroupGModule } from 'src/company/shared/components/tab-group-g/modules/tab-group-g.module';
import { AppInventoryService, AppServiceBudgetService } from './services/app.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,

  ],

  providers: [AppInventoryService, AppServiceBudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
