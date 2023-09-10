import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'paginator-g',
  template: `
  <div fxLayout="row" fxLayoutAlign="center center">
      <mat-paginator  [length]="length" [pageSize]="pageSize" [pageSizeOptions]="pageSizeOptions" aria-label="Select page">
      </mat-paginator>
  </div>
`,
  styles: [
    `
    `
  ]
})

export class PaginationGComponent {

  constructor() { }

  @Input() pageSizeOptions: number[] = [];
  @Input() length: number = 0;
  @Input() pageSize: number = 0;



}
