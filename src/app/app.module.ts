import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from 'src/company/shared/modules/shared.module';
import { MaterialModule } from 'src/company/shared/modules/material.module';
import { AppInventoryService, AppServiceBudgetService } from './services/app.services';
import { MatButtonModule } from '@angular/material/button';
import { TestsModule } from './tests/modules/tests.module';
import { GridGModule } from 'src/company/shared/components/grid-g/modules/grid-g.module';
import { SearchGModule } from 'src/company/shared/components/search-g/modules/search-g.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    MatButtonModule,
    TestsModule,
  ],
  exports:[

  ],

  providers: [AppInventoryService, AppServiceBudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
