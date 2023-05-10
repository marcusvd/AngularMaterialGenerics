import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/company/shared/modules/material.module';
import { StepperGComponent } from '../stepper-g.component';

@NgModule({
  declarations: [
    StepperGComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
   ],
  exports: [
    StepperGComponent,
  ],
  providers: [],
})
export class StepperGModule {}
