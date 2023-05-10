import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';



@Component({
  selector: 'filter-front',
  template: `
   <div fxLayout="row" fxLayoutAlign="center center">
     <mat-form-field fxFlex="50%" appearance="outline">
         <mat-label>Pesquisar</mat-label>
         <input #input (input)="filtering(input.value)" matInput type="text">
         <!-- <mat-error>
<span>{{validatorMessages.required(formMain,'price', 'Preço')}}</span>
</mat-error> -->
     </mat-form-field>
 </div>
  `,
  styles: [
    `
.break {
    word-wrap: break-word;
}
    `
  ]
})

export class FilterFrontComponent {
  constructor(
    //private _search: SearchTestFilterFrontService,
  ) { }

  @Output() params = new EventEmitter<string>(null);

  filtering(params: string) {
    this.params.emit(params);
  }


}
