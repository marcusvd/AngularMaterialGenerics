import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, zip } from "rxjs";
import { map } from "rxjs/operators";
import { CustomerDto } from "src/company/shared/components/table-g/dtos/customer-dto";
import { PartnerDto } from "src/company/shared/components/table-g/dtos/partner-dto";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { environment } from "src/environments/environment";




@Injectable()
export class CollectDeliverCreateResolverDISABLED extends BackEndService<any, number> implements Resolve<Observable<{ customers: CustomerDto[], partners: PartnerDto[]}>> {

  constructor(
    private _http:HttpClient

  ) { super(_http, environment._base) }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ customers: CustomerDto[], partners: PartnerDto[]}> {

    const customers$: Observable<CustomerDto[]> =
    this.loadById$('customers/GetAllCustomersByIdCompanyAsync', route.paramMap.get('id'));

    const partners$: Observable<PartnerDto[]>  =
    this.loadById$('partners/GetAllPartnersByIdCompanyAsync', route.paramMap.get('id'));


    const Zip = zip(customers$, partners$)
      .pipe(map(([customers, partners]) =>
        ({ customers, partners })))

    return Zip;
  }
}
