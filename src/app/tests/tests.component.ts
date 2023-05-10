import { HttpClient, HttpResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CollectDeliverDto } from 'src/company/shared/components/table-g/dtos/collect-deliver-dto';
import { CustomerDto } from 'src/company/shared/components/table-g/dtos/customer-dto';
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

  GetAllPaginated(pgNumber: number, pgSize: number) {

    this._tableGService.GetAllPaginated(this.url, pgNumber, pgSize).subscribe((x: PaginatorDto) => {

      this.length = x?.length;
      this.pageIndex = x?.pageIndex;
      this.pageSize = x?.pageSize;
    })
  }
  filtering1(params:string) {
    this.dataTable.data = this.dataTable.data.filter((x: CustomerDto) => x.name.toLowerCase().includes(params))
   }

  pageChange($event: any) {
    const pgIndex = $event.pageIndex + 1;
    this._tableGService.GetAllPaginated(this.url, pgIndex, $event.pageSize)
  }

  sort($event: Sort) {
    const evt: Sort = $event;
    this._tableGService.sortData(evt, this.dataTable);
  }

  ngOnInit(): void {
    this.GetAllPaginated(1, 10);
  }

}
