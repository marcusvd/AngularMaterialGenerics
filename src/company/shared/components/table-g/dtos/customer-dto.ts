import { ServiceBudgetDto } from "src/company/shared/dto/service-budget-dto";
import { AddressDto } from "./address-dto";
import { ContactDto } from "./contact-dto";
import { CollectDeliverDto } from "./collect-deliver-dto";

export class CustomerDto {
  id: number;
  name: string;
  cnpj: string;
  responsible: string;
  assured: boolean;
  customerType: boolean;
  payment: number;
  registered: Date;
  expiration: number;
  disabled: boolean;
  toBusinessBox: boolean;
  discount: number;
  addressid: number;
  address: AddressDto;
  contactid: number;
  contact: ContactDto;
  comments: string;
  //netWorkDevices: NetworkDevicesDto[];
  servicesBudgets: ServiceBudgetDto[];
  CollectsDelivers: CollectDeliverDto[];

}
