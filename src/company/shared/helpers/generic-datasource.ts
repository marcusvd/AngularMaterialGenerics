
import { BehaviorSubject, catchError, filter, finalize, map, Observable, of, switchMap } from "rxjs";

import { MatTableDataSource } from "@angular/material/table";

import { AlternativeService } from "../components/table-g-expandable/services/alternative.service";
import { TableGenericListService } from "../components/table-g-expandable/services/table-g-list.service";
import { AppInventoryService, AppServiceBudgetService } from "src/app/services/app.services";
import { ClientListService } from "src/app/services/client-list.service";
import { ServiceBudgetDto } from "../components/tab-group-g/dto/service-budget-dto";
import { ClientDto } from "../components/table-g/dtos/client-dto";


export class GenericDataSource {


  private gDataSource = new BehaviorSubject<any>(null);

  constructor(
    private collectionDeliveryService?: TableGenericListService,
    private _AppInventoryService?: AppInventoryService,
    private _ServicesBudgetService?: AppServiceBudgetService,
    private _ClientListService?: ClientListService,
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
    // const _serviceBudgetIncluded: ServiceBudgetDto[] = [];
    // let _serviceBudgetObservable = new Observable<ServiceBudgetDto[]>(null);

    return this._ServicesBudgetService.getAllIncludedAsync$<ServiceBudgetDto>();

  }
  // switchMap(f => this._ServicesBudgetService.getByIdAsyncIncluded$(f)

}
