import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Input } from "@angular/core";
import { inject } from "@angular/core/testing";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { environment } from "src/environments/environment";
import { ServiceBudgetDto } from "src/company/shared/dto/service-budget-dto";

@Injectable({providedIn:'root'})

export class AppInventoryService extends BackEndService<any, number> {

  constructor(override _Http: HttpClient) {

    super(_Http, environment._INVENTORIES_EQUIPAMENT_INCLUDED)

  }

}

@Injectable({providedIn:'root'})
export class AppServiceBudgetService extends BackEndService<ServiceBudgetDto, number> {

  constructor(override _Http: HttpClient) {

    super(_Http, environment._SERVICES_BUDGET, environment._SERVICES_BUDGET_ALL_INCLUDED)

  }





}
