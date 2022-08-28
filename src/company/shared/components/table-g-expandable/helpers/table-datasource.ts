import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { HttpResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, finalize, Observable, of, Subscription } from "rxjs";

import { AlternativeService } from "../services/alternative.service";
import { TableGenericListService } from "../services/table-g-list.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Injectable } from "@angular/core";

export class TableDataSource extends MatTableDataSource<any>{
  constructor(
    private collectionDeliveryService?: TableGenericListService,
    private AService?: AlternativeService,


  ) {
    super();
  }
  inventoryLoad$(pageIndex = 0, pageSize = 10, filter = '', sortDirection = 'asc') {

    return this.AService?.pagAllIncluded(pageIndex, pageSize, filter)
       .pipe(
         catchError(() => of([])),
         finalize(() => console.log('FINALIZE'))
       )
   }

}
