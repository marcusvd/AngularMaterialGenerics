import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { StepperVerticalGComponent } from "../component/stepper-vertical-g.component";

@NgModule({
  declarations: [
    StepperVerticalGComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    StepperVerticalGComponent
  ]
})

export class StepperModules {

}
