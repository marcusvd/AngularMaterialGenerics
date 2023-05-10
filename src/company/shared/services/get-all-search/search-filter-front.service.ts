import { Injectable, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { SearchType } from "./search-type";
import { Observable, Subscription, of } from "rxjs";
import { map } from "rxjs/operators";
import { CustomerDto } from "../../components/table-g/dtos/customer-dto";

@Injectable({
  providedIn: 'root'
})

export class SearchFilterFrontService {

  constructor() {

  }


  customerToFilter: CustomerDto[] = [];

  resultFilterCustomer: CustomerDto[] = [];
  public filteringCustomers(params: string) {
    console.log(this.customerToFilter)
    this.resultFilterCustomer = [];
    this.resultFilterCustomer = this.customerToFilter.filter((x: CustomerDto) => x.name.toLowerCase().includes(params))
  }


}


