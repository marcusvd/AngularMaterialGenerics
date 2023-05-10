import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core'

import { ClientListService } from "src/app/services/client-list.service";
import { CustomerDto } from "src/company/shared/components/table-g/dtos/customer-dto";

@Injectable()
export class ClientResolver implements Resolve<CustomerDto>{
  constructor(private _clientListService: ClientListService,) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CustomerDto> {
    return this._clientListService.getByIdAsyncIncluded$(Number.parseInt(route.paramMap.get('id')))
    //Number.parseInt(route.paramMap.get('id'))
  }

}
