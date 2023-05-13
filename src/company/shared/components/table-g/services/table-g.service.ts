import { Injectable, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { CustomerDto } from "../dtos/customer-dto";
import { Sort } from "@angular/material/sort";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { PaginatorDto } from "../dtos/paginator-dto";
import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";
import { debounce, debounceTime, distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class TableGService extends BackEndService<CustomerDto, number>{

  constructor(
    private _http: HttpClient
  ) { super(_http, environment._base) }


  term: Subject<string> = new Subject<string>();
  // result: Subscription = new Subscription();
  result: Observable<HttpResponse<any[]>> = new Observable<HttpResponse<any[]>>();


  paginatorBehaviorSubject = new BehaviorSubject<PaginatorDto>(null);

  _dataTable = new MatTableDataSource<any>();
  private _lenght: number;
  private _pageIndex: number;
  private _pageSize: number;

  get dataTable(): MatTableDataSource<any> {
    return this._dataTable;
  }
  get lenght(): number {
    return this._lenght;
  }
  get pageIndex(): number {
    return this._pageIndex;
  }
  get pageSize(): number {
    return this._pageSize;
  }

  searchPagination(url: string, pgNumber: number, pgSize: number, term?: string) {

    this.result = this.term.pipe(switchMap((x: string) =>
      this.loadAllPaged$<any[]>(url, pgNumber, pgSize, term)));

console.log(this.result)

    // this.result.
    //   subscribe((response: HttpResponse<any[]>) => {

    //     const pagination = JSON.parse(response.headers.get('pagination'));

    //     this._dataTable.data = response.body;
    //     console.log(response.body)
    //     this.paginatorBehaviorSubject.next(this.paginator(pagination));

    //     this.startSorted();
    //   })

  }
  GetAllPaginated(url: string, pgNumber: number, pgSize: number, term?: string) {

    this.loadAllPaged$<any[]>(url, pgNumber, pgSize, term).
      subscribe((response: HttpResponse<any[]>) => {

        const pagination = JSON.parse(response.headers.get('pagination'));

        this._dataTable.data = response.body;

        this.paginatorBehaviorSubject.next(this.paginator(pagination));

        this.startSorted();
      })
  }

  paginator(paginatorFromBackEndHeaders: any) {
    const paginator: PaginatorDto = new PaginatorDto();
    paginator.length = paginatorFromBackEndHeaders.totalCount;
    paginator.pageIndex = paginatorFromBackEndHeaders.currentPg - 1;
    paginator.pageSize = paginatorFromBackEndHeaders.pgSize;
    return paginator
  }

  startSorted() {
    this.sortData({ active: 'id', direction: 'asc' }, this._dataTable)
  }

  // GetAllPaginated(url: string, pgNumber: number, pgSize: number, term?: string) {

  // this.term.pipe(map(value => value.trim()),
  //   debounceTime(200),
  //   distinctUntilChanged(),
  //   switchMap((x:string) => this.loadAllPaged$<any[]>(url, pgNumber, pgSize, x ))).
  //   subscribe((response: HttpResponse<any[]>) => {
  //     const paginatorFromBackEndHeaders = JSON.parse(response.headers.get('pagination'));
  //     const paginator: PaginatorDto = new PaginatorDto();
  //     paginator.length = paginatorFromBackEndHeaders.totalCount;
  //     paginator.pageIndex = paginatorFromBackEndHeaders.currentPg - 1;
  //     paginator.pageSize = paginatorFromBackEndHeaders.pgSize;
  //     this._dataTable.data = response.body;
  //     this.paginatorBehaviorSubject.next(paginator);
  //     this.sortData({ active: 'id', direction: 'asc' }, this._dataTable)
  //   })

  // }



  private sortedData: any[];
  sortData(sort: Sort, dataTable: MatTableDataSource<any>) {

    const getSetdata = dataTable;
    this.sortedData = getSetdata.data.slice();
    const data = this.sortedData.slice();

    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    getSetdata.data = data.sort((a, b) => {
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











}
