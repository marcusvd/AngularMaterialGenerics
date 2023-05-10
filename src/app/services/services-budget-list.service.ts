import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { environment } from "src/environments/environment";
import { ServiceBudgetDto } from "../../company/shared/dto/service-budget-dto";
import { BackEndService } from "src/company/shared/services/back-end/backend-service";
import { ClientListService } from "./client-list.service";
import { CustomerDto } from "src/company/shared/components/table-g/dtos/customer-dto";



@Injectable()

export class ServicesBudgetListService extends BackEndService<ServiceBudgetDto, number>{


  recordsFromDb: ServiceBudgetDto[] = [];
  status: string[] = [
    'Em andamento...',
    'Aguardando peças',
    'Aguardando o cliente',
    'Tentando uma nova abordagem',
    'FINALIZADO',
  ];

  public _checkBoxChecked: boolean;

  constructor(
    protected override _Http: HttpClient,
    private _LoadClient: ClientListService,
    private _Fb: FormBuilder,
    // private _Dialog: MatDialog,
  ) {
    super(_Http, environment._SERVICES_BUDGET);
  }

  get getRecordFromDb() {
    return this.recordsFromDb;
  }



  details(id: number) {

    let record: ServiceBudgetDto;

    this.getByIdAsync$(id).subscribe(
      (sb: ServiceBudgetDto) => {

        record = sb;
        //client: Client
        console.log(sb)
      },
      (err: Error) => { console.log(err) },
      () => { console.log('complete') }
    )




  }

  loadAllFromDb() {
    this.recordsFromDb = [];
    this.getAllAsync$().subscribe((srvget: ServiceBudgetDto[]) => {

      srvget.forEach((srvBudget: ServiceBudgetDto) => {
        const sb: ServiceBudgetDto = srvBudget;

        this._LoadClient.getByIdAsync$<CustomerDto>(srvBudget.clientId).subscribe(
          (cli: CustomerDto) => {
            sb.client = cli

            this.recordsFromDb.push(sb);
          },
          (err: Error) => { console.log(err) },
          () => { }
        )

      })
    });

    return false;
  }
}
