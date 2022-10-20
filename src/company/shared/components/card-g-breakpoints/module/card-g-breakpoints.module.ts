import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/company/shared/modules/material.module";
import { CardGBreakpointsContainerComponent } from "../card-g-breakpoints-container.component";
import { CardGBreakpointsComponent } from "../card-g-breakpoints.component";

@NgModule({
    declarations: [
      CardGBreakpointsContainerComponent,
      CardGBreakpointsComponent
    ],
    imports:[
      CommonModule,
      MaterialModule,

    ],
    exports:[
      CardGBreakpointsContainerComponent,
      CardGBreakpointsComponent
    ],
  })

export class CardGBreakPointsModule {

}
