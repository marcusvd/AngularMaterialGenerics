import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Input } from "@angular/core";
import { inject } from "@angular/core/testing";

import { BackEndService } from "src/company/shared/services/back-end/backend-service";


@Injectable()
export class AlternativeService extends BackEndService<any, string> {


  constructor(override _Http: HttpClient) {

    super(_Http, '')

  }

  // loadAll() {
  //   this.getAllAsync$<T>().subscribe(() => {

  //   })
  // }






}
