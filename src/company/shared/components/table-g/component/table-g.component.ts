import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';



@Component({
  selector: 'paginated-table',
  template: `
  <table style="width:100%;" (matSortChange)="announceSortChange($event)" mat-table [dataSource]="dataSourceInput" class="mat-elevation-z8" matSort [matSortActive]="matSortActive" matSortDirection="asc" matSortDisableClear>
    <ng-container [matColumnDef]="inventory" *ngFor="let inventory of displayedColumnsInput; let i = index;">
        <th style="font-size:25px; color:black;" mat-header-cell *matHeaderCellDef id="cod" mat-sort-header>{{displayedColumnsUserShows[i]}}</th>
        <td mat-cell *matCellDef="let element" id="cod"> {{element[inventory]}} </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumnsInput"></tr>
    <tr mat-row *matRowDef="let datasource; columns: displayedColumnsInput;"></tr>
</table>
<ng-content></ng-content>

  `,
  styles: [`
tr:hover  {
  background-color:yellow;
}
  `]
})
export class TableGComponent implements OnInit {

  @Input() displayedColumnsInput: string[] = [];
  @Input() displayedColumnsUserShows: string[] = [];

  @Input() dataSourceInput = new MatTableDataSource<any>(null);
  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Input() length: number;

  @Output() SortOut = new EventEmitter<Sort>()
  @Input() matSortActive: string;

  constructor(
    private _liveAnnouncer: LiveAnnouncer
  ) { }



  announceSortChange(sortState: Sort) {

    this.SortOut.emit(sortState);

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }




  ngOnInit(): void {
  }


}