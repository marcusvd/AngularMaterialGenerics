import { AddressDto } from "./address-dto";
import { ContactDto } from "./contact-dto";
import { ServiceBudgetDto } from "../../../dto/service-budget-dto";

export class ClientDto {
  id: number;
  name: string;
  cnpj: string;
  responsible: string;
  comments: string;
  assured: boolean;
  clientType: string;
  payment: number;
  expiration: Date;
  disabled: boolean;
  toBusinessBox: boolean;
  discount: number;
  addressid: number;
  address: AddressDto;
  contactid: number;
  contact: ContactDto;
  // netWorkDevices: NetworkDevicesDto[];
  ServicesBudgets: ServiceBudgetDto[];

}
