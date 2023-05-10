import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  template: `
<mat-paginator fxFlex
fxLayoutAlign="center center"
[pageIndex]="pageIndex"
[length]="length"
[pageSize]="pageSize"
 [pageSizeOptions]="pageSizeOptionsInput"
 (page)="pageChange($event)"
   aria-label="Select page">
</mat-paginator>
  `,
  styles: [`
    tr:hover  {
  background-color:yellow;
}

  `]
})


export class Paginator {

  @Input() pageIndex: number;
  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageSizeOptionsInput: number[] = [];

  @Output() pgEvent: EventEmitter<any> = new EventEmitter();
  pageChange($event) {
    const evt = $event;
    this.pgEvent.emit(evt);
  }

}
