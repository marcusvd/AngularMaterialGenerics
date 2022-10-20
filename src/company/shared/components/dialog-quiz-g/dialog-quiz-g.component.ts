import { Component, OnInit, Input, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'dialog-quiz-g',
  template: `<h1 mat-dialog-title>{{title}}</h1>
  <div mat-dialog-content>{{message}}</div>
  <div mat-dialog-actions>
  <button mat-raised-button mat-dialog-close color="accent">{{btn1}}</button>
  <button mat-raised-button mat-dialog-close color="accent">{{btn2}}</button>
  </div>`,
  styles: [``]
})
export class DialogQuizGComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btn1: string;
  @Input() btn2: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.btn1 = this.data.btn1;
    this.btn2 = this.data.btn2;
    console.log(this.data)
  }

  // openDialog() {
  //   this.dialog.open(DialogQuizGComponent,{
  //     width:'500px',
  //     height:'300px',
  //     data:{title:'Deu bom.', btn1:'Ok', btn2:'Cancelar'}
  //   })
  // }
  //this is in the component that will call it.

}
