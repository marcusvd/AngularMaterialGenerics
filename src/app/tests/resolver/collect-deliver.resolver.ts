import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable} from "rxjs";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { environment } from "src/environments/environment";

@Injectable()
export class CollectDeliverCreateResolver extends BackEndService<any, number> implements Resolve<Observable<number>> {

  constructor(
    private _http: HttpClient

  ) { super(_http, environment._base) }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<number> {

    const customers$: Observable<number> = this.loadByIdLength$<number>('customers/GetTotalCountAsync', route.paramMap.get('id'));

    return customers$;
  }
}
