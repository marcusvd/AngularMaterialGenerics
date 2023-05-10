import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';


import { PaginatorDto } from 'src/company/shared/components/table-g/dtos/paginator-dto';
import { TableGService } from 'src/company/shared/components/table-g/services/table-g.service';
import { BackEndService } from 'src/company/shared/services/back-end/backend-service';

@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  dataTable = this._tableGService.dataTable;

  length: number;
  pageIndex: number;
  pageSize: number;
  pageSizeOptionsInput: number[] = [5, 10, 20]

  @Input() columnsFields: string[] = []
  @Input() columnsNamesToDisplay: string[] = []
  @Input() url: string;

  constructor(
    private _tableGService: TableGService,
  ) { }

  GetAllPaginated(pgNumber: number, pgSize: number, params?: string) {

    this._tableGService.GetAllPaginated(this.url, pgNumber, pgSize, params);
    // this._tableGService.PaginatedReturn(this.url, pgNumber, pgSize, params);

    this._tableGService.paginatorBehaviorSubject.subscribe((x: PaginatorDto) => {

      this.length = x?.length;
      this.pageIndex = x?.pageIndex;
      this.pageSize = x?.pageSize;
    })
  }

  filtering(params: string) {
    this._tableGService.term.next(params);
    this.GetAllPaginated(this.pageIndex, this.pageSize, params);
  }

  pageChange($event: any) {
    const pgIndex = $event.pageIndex + 1;
    this.GetAllPaginated(pgIndex, $event.pageSize, 'l')
    console.log($event)
  }

  sort($event: Sort) {
    const evt: Sort = $event;
    this._tableGService.sortData(evt, this.dataTable);
  }

  ngOnInit(): void {
    this.GetAllPaginated(1, 10);
  }

}
