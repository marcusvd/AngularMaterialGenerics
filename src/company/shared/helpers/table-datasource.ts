
import { catchError, finalize, of} from "rxjs";

import { MatTableDataSource } from "@angular/material/table";

import { AlternativeService } from "../components/table-g-expandable/services/alternative.service";
import { TableGenericListService } from "../components/table-g-expandable/services/table-g-list.service";
import { AppInventoryService, AppServiceBudgetService } from "src/app/services/app.services";


export class TableDataSource {
  constructor(
    private collectionDeliveryService?: TableGenericListService,
    private _AppInventoryService?: AppInventoryService,
    private servicesBudget?: AppServiceBudgetService,

  ) {

  }

  inventoryLoad$(pageIndex = 0, pageSize = 10, filter = '', sortDirection = 'asc') {

    return this._AppInventoryService?.pagAllIncluded(pageIndex, pageSize, filter)
       .pipe(
         catchError(() => of([])),
         finalize(() => console.log('FINALIZE'))
       )
   }

  serviceBudgetLoad$() {

    return this.servicesBudget?.getAllAsync$()
       .pipe(
         catchError(() => of([])),
         finalize(() => console.log('FINALIZE'))
       )
   }



}
