import { Injectable, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { CustomerDto } from "../dtos/customer-dto";
import { Sort } from "@angular/material/sort";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { PaginatorDto } from "../dtos/paginator-dto";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })

export class TableGService extends BackEndService<CustomerDto, number>{

  constructor(
    private _http: HttpClient
  ) { super(_http) }

  private sortedData: any[];

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

  GetAllPaginated(url:string, pgNumber: number, pgSize: number) {
    this.loadAllPaged$<any[]>(url, pgNumber, pgSize).
      subscribe((response: HttpResponse<any[]>) => {

        const paginatorFromBackEndHeaders = JSON.parse(response.headers.get('pagination'));

        const paginator: PaginatorDto = new PaginatorDto();
        paginator.length = paginatorFromBackEndHeaders.totalCount;
        paginator.pageIndex = paginatorFromBackEndHeaders.currentPg - 1;
        paginator.pageSize = paginatorFromBackEndHeaders.pgSize;

        this._dataTable.data = response.body;
        this.paginatorBehaviorSubject.next(paginator);
        this.sortData({ active: 'id', direction: 'asc' }, this._dataTable)
      }
      )
    return this.paginatorBehaviorSubject
  }

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
