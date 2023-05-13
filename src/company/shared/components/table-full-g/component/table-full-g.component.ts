import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TableDataSource } from './table-data-source';
import { TableFullGService } from '../services/table-full-g.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, map, merge, switchMap, tap } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatInput } from '@angular/material/input';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'table-full-g',
  template: `
  <div>
  <div class="spinner-container" *ngIf="dataSource.loading$ | async">
        <mat-spinner></mat-spinner>
    </div>
<div fxLayout="row" fxLayoutAlign="center center">
<mat-form-field appearance="outline">
<mat-label>Pesquisar</mat-label>
  <input matInput [formControl]="queryField" (input)="onSearch()" type="text" >
</mat-form-field>
</div>
  <table mat-table style="width:100%;"  mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSortActive="'name'" matSort  matSortDirection="asc" matSortDisableClear>
  <!-- (matSortChange)="announceSortChange($event)"
[matSortActive]="matSortActive" -->

    <ng-container [matColumnDef]="entity" *ngFor="let entity of columnsFields; let i = index;">
        <th style="font-size:25px; color:black;" mat-header-cell *matHeaderCellDef id="cod" mat-sort-header>{{columnsNamesToDisplay[i]}}</th>
        <td mat-cell *matCellDef="let element" id="cod"> {{element[entity]}} </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="columnsFields"></tr>
    <tr mat-row *matRowDef="let dataSource; columns: columnsFields;"></tr>
</table>
</div>
<!-- [pageIndex]="pageIndex" -->
<!-- (page)="pageChange($event)" -->
<mat-paginator
fxLayoutAlign="center center"
[length]="length"
[pageSize]="pageSize"
 [pageSizeOptions]="pageSizeOptions"
 aria-label="Select page">
</mat-paginator>
  `,
  styles: [`
tr:hover  {
  background-color:yellow;
}
  `]
})
export class TableFullGComponent implements OnInit, AfterViewInit {

  dataSource: TableDataSource;

  columnsFields = ['id', 'name'];
  columnsNamesToDisplay = ['Código', 'Nome'];

  @Input() pageSizeOptions: number[] = [];
  @Input() pageSize: number;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;


  constructor(
    private _tableFullGService: TableFullGService,
    private route: ActivatedRoute,
    private _http: HttpClient,

  ) { }

  loadEntitiesPage() {
    this.dataSource.loadEntities(
      this.paginator.pageIndex + 1,
      this.paginator.pageSize, '', 'asc'
    )
  }



  length: number;


  searchTerm = new Subject<string>();

  // filtering(term: string) {
  //   this.searchTerm.next(term)
  //   this.searchTerm.pipe(
  //     map(x => x.trim()),
  //     debounceTime(500),
  //     // distinctUntilChanged(),
  //   ).subscribe((paramTerm: string) => {
  //     console.log(paramTerm)
  //     this.dataSource.loadEntities(
  //       this.paginator.pageIndex + 1,
  //       this.paginator.pageSize,
  //       paramTerm,
  //       this.sort.direction
  //     )
  //   }

  //   )
  //   // this._tableFullGService.GetAllPaginated('customers/GetAllPagedCustomersAsync',
  //   // this.paginator.pageIndex +1, this.paginator.pageSize, term).

  // }
  // searchTerm2 = new Subject<any>();
  // filterring2() {

  // }

  results: Observable<any>;
  queryField = new FormControl()
  onSearch() {

    let value = this.queryField.value;

      if (value && (value = value.trim() != '')) {

        this.results = this.getPaginatedEntities(this.paramsTo());
      }
  }

  getPaginatedEntities(params: HttpParams) {
    return this._tableFullGService.GetAllPaginatedSearch('customers/GetAllPagedCustomersAsync', params);
  }
  paramsTo() {
    let params = new HttpParams();
    params = params.append('pgnumber', 1);
    params = params.append('pgsize', 10);
    params = params.append('companyid', 1);
    params = params.append('term', this.queryField.value);
    return params
  }


  ngOnInit(): void {
    this.length = this.route.snapshot.data['loaded'];
    // console.log(this.entities.length)
    this.dataSource = new TableDataSource(this._tableFullGService);

    this.dataSource.loadEntities(1, 10);


    this.queryField.valueChanges.pipe(
      map(x => x.trim()),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(termValue => this.getPaginatedEntities(this.paramsTo())),
      tap(value => {
        this.dataSource.entitiesSubject.next(value.body)
      })

    ).subscribe(
      ()=> {
        if (this.queryField.value ==='') {
          this.dataSource.loadEntities(1, 10);
          console.log('esta nulo')
        }
      }
    );
  }

  ngAfterViewInit(): void {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 1);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadEntitiesPage())
      )
      .subscribe();

    this.paginator.page
      .pipe(
        tap(() => this.loadEntitiesPage())
      )

  }

}
