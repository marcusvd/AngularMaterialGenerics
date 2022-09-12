import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { finalize } from "rxjs/operators";
import { ClientDto } from "src/company/shared/components/table-g/dtos/client-dto";
import { PaginatorDto } from "src/company/shared/components/table-g/dtos/paginator-dto";
import { TableDataSource } from "src/company/shared/helpers/table-datasource";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";

import { environment } from "src/environments/environment";




@Injectable()

export class ClientListService extends BackEndService<ClientDto, number> {
  //Columns
  private _displayedColumnsInventory = ['id', 'name', 'responsible', 'clientType', "email"];
  private _displayedColumnsInventoryBr = ['Código', 'Nome', 'Responsável', 'Tipo', 'E-Mail'];

  //Data
  private _dataSource: TableDataSource;
  public getSetdata = new MatTableDataSource<any>();
  // private sortedData: ClientTableDto[];
  //pagination
  private _pagination: PaginatorDto = new PaginatorDto();
  private _pageSizeOptions: number[] = [10, 50, 100];
  private _pageIndex: number;
  private _pageSize: number = 10;
  private _length: number;

  //spinner and search
  private _spinnerShowHide = true;
  private _searchTerms: string;

  constructor(
    protected override _Http: HttpClient
  ) {
    super(_Http,
      environment._CLIENTS
    );

  }



  //#region Columns
  get displayedColumnsInventory() {
    return this._displayedColumnsInventory;
  }
  get displayedColumnsInventoryBr() {
    return this._displayedColumnsInventoryBr;
  }
  //#endregion

  //#region pagination
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  get pageIndex() {
    return this._pageIndex;
  }
  get pageSize() {
    return this._pageSize;
  }
  get length() {
    return this._length;
  }
  get pagination() {
    return this._pagination;
  }


  set setPageSizeOptions(setPageSizeOptionsInput: any) {
    if (setPageSizeOptionsInput) {
      this._pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  //#endregion

  //#region data
  get dataSource() {
    return this._dataSource;
  }

  get data() {
    return this.getSetdata;
  }
  get spinnerShowHide() {
    return this._spinnerShowHide;
  }
  set data($event: any) {
    this.getSetdata = $event;
  }


}
