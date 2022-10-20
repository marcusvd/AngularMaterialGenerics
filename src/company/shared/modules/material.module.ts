import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatGridTile} from '@angular/material/grid-list/grid-tile'



@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,

    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatStepperModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatTreeModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    FlexLayoutModule,

    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatTreeModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule


  ],
  providers: []
})

export class MaterialModule {

}
