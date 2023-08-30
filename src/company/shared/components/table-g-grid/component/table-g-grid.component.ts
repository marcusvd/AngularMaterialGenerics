import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';

import { TableDataSource } from './table-data-source-grid';
import { TableGGridService } from '../services/table-g-grid.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'table-g-grid',
  templateUrl: './table-data-source-grid.html',
  styles: [`
tr:hover  {
  background-color:green;
  cursor:pointer;
}
th:hover  {
  background-color:green;
  color:white;
}
td:hover{
  color:white;
}
.input-search{

}
  `]
})
export class TableGGridComponent implements OnInit, AfterViewInit {

  dataSource: TableDataSource;

  @Input() columnsFields: string[] = [];
  @Input() columnsNamesToDisplay: string[] = [];
  @Input() url: string;
  @Input() pageSizeOptions: number[] = [];
  @Input() pageSize: number;
  @Input() tableHtml: string;


  selection = new SelectionModel<any>(true, []);

  expandedElement:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _tableGGridService: TableGGridService,
    private route: ActivatedRoute,
    private _liveAnnouncer: LiveAnnouncer
  ) {
  }


  loadEntitiesPage() {
    this.dataSource.loadEntities(this.url,
      this.paginator.pageIndex + 1,
      this.paginator.pageSize, ''
    )

  }

  results: Observable<any>;
  queryField = new FormControl()

  onSearch() {

    let value = this.queryField.value;

    if (value && (value = value.trim() != '')) {
      this.results = this.getPaginatedEntities(this.paramsTo());
    }
  }

  getPaginatedEntities(params: HttpParams) {
    return this._tableGGridService.loadAllPagedSearch$<any[]>(this.url, params);
  }

  paramsTo() {
    let params = new HttpParams();
    params = params.append('pgnumber', 1);
    params = params.append('pgsize', 10);
    params = params.append('companyid', 1);
    params = params.append('term', this.queryField.value);
    return params;
  }

  startSorted() {
    this.sortData({ active: 'id', direction: 'asc' }, this.dataSource)
  }

  private sortedData: any[];

  sortData(sort: Sort, dataTable: TableDataSource) {

    const getSetdata = dataTable;
    this.sortedData = getSetdata.dataBase.slice();
    const data = this.sortedData.slice();

    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    getSetdata.dataBase = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        default:
          return 0;

      };
    })

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

  }

  sortChanged(sortState: Sort) {

    this.sortData(sortState, this.dataSource)

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onRowClicked(entity: any) {
    console.log(entity)
  }

  checkboxLabel(row?: any): string {
    return (!row)
      ? `${this.isAllSelected() ? 'select' : 'deselect'} all`
      : `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.dataBase.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.dataBase.length;
    return numSelected === numRows;
  }

  selectedStart:number;
  onChangeRadioChoice(event:any){
    this.selectedStart = event.id;
    console.log(event)
  }


  checkboxCollect(row?: any){
    console.log(row)
   }
   checkboxDeliver(row?: any){

     console.log(row)
   }

  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        tap(() => this.loadEntitiesPage())
      ).subscribe(() => {

      })
  }
  //Paginator
  length: number;

  ngOnInit(): void {
    this.length = this.route.snapshot.data['loaded'];

    this.dataSource = new TableDataSource(this._tableGGridService);

    this.dataSource.loadEntities(this.url, 1, 10);

    // this.sortDirection = 'asc';
    this.startSorted();


    this.queryField.valueChanges.pipe(
      map(x => x.trim()),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(() => this.getPaginatedEntities(this.paramsTo())),
      tap(value => {
        this.dataSource.dataBase = value.body;
      })
    ).subscribe(
      () => {

        if (this.queryField.value === '') {
          this.dataSource.loadEntities(this.url, 1, 10);

        }
      }
    );
  }

}