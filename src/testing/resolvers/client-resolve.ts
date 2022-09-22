import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core'
import { ClientDto } from "src/company/shared/components/table-g/dtos/client-dto";
import { ClientListService } from "src/app/services/client-list.service";

@Injectable()
export class ClientResolver implements Resolve<ClientDto>{
  constructor(private _clientListService: ClientListService,) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ClientDto> {
    return this._clientListService.getByIdAsyncIncluded$(Number.parseInt(route.paramMap.get('id')))
    //Number.parseInt(route.paramMap.get('id'))
  }

}
