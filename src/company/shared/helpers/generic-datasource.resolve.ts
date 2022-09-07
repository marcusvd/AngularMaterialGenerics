import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceBudgetService } from 'src/app/services/app.services';
import { ServiceBudgetDto } from '../dto/service-budget-dto';

@Injectable({
  providedIn: 'root'
})
export class ResolveServiceBudget implements Resolve<Observable<ServiceBudgetDto[]>> {
  constructor(
    private _ServicesBudgetService?: AppServiceBudgetService,
  ){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<ServiceBudgetDto[]> {
    return this._ServicesBudgetService.getAllIncludedAsync$();
  }
}
