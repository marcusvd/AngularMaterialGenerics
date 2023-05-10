import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { DialogQuizGComponent } from "../dialog-quiz-g.component";

@NgModule({
  declarations: [
    DialogQuizGComponent
  ],
  imports: [
    CommonModule,

    MaterialModule,
  ],
  exports: [
    DialogQuizGComponent
  ]
})

export class DialogQuizGModule {

}
