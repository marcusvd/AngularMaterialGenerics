import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { FormBuilder } from '@angular/forms';
import { ICheck } from '../interfaces/Icheck';


@Component({
  selector: 'check-button',
  template: `
   <div fxFlex [(ngModel)]="selectedStart" [fxLayout]="positionHtmlColumn" fxLayoutGap="30px">
   <div [fxLayout]="positionHtmlRow" *ngFor="let check of entity">
     <div  fxLayoutAlign="center center">
     <mat-checkbox [checked]="check.checked" #checkButton value={{check.codeName}} (click)="setValueUpdate(checkButton.value)">
                    {{check.displayName}}
      </mat-checkbox>
     </div>
   </div>
  </div>
  `,
  styles: [`
tr:hover  {
  background-color:yellow;
}
  `]
})

export class CheckButtonGComponent implements OnChanges{

  @Input() position: string = 'horizontal';
  @Input() entities: ICheck[];

  @Output() selected = new EventEmitter<string>();
  @Input() selectedStart: string = 'customer'

  //@ViewChild('radioButton') radioButton: MatCheckButton;

  positionHtmlColumn = 'row';
  positionHtmlRow = 'column';

  constructor(private _fb: FormBuilder
  ) { }




@Input() set markAsCustomer(flag:boolean){
  if(flag){
    //this.radioButton.value = 'customer'

    this.onChangeRadioChoice('customer');
  }

}

  onChangeRadioChoice(event: string) {
    this.selected.emit(event);
  }

  setValueUpdate($event): void {
    //control?: string, value?: string
    console.log($event)
    // this.formMain.get(control).setValue(value);
  }

   entity = [
    { displayName: 'Cliente', codeName: 'customer', checked: true },
    { displayName: 'Parceiro', codeName: 'partner', checked: false },
    { displayName: 'Outros', codeName: 'other', checked: false },
  ]


  positionManager() {
    this.positionHtmlColumn = 'column';
    this.positionHtmlRow = 'row';

    if (this.position == 'horizontal') {
      this.positionHtmlColumn = 'row';
      this.positionHtmlRow = 'column';
    }

  }


  ngOnChanges(): void {
    this.positionManager();
  }



}
