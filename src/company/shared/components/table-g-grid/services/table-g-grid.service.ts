import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { environment } from "src/environments/environment";
import { CustomerDto } from "../dto/customer-dto";


@Injectable({ providedIn: 'root' })

export class TableGGridService extends BackEndService<CustomerDto, number>{

  constructor(
    private _http: HttpClient,
   ) { super(_http, environment._base) }

  }









