import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Input } from "@angular/core";
import { inject } from "@angular/core/testing";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { environment } from "src/environments/environment";


@Injectable()
export class TableGenericListService extends BackEndService<any, string> {


  constructor(override _Http: HttpClient) {

    super(_Http, environment._COLLECTDELIVER_INTERVALDATE)

  }

  // loadAll() {
  //   this.getAllAsync$<T>().subscribe(() => {

  //   })
  // }






}
