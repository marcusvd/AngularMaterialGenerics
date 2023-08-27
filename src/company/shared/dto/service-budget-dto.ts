

import { CustomerDto } from "../components/table-g-grid/dto/customer-dto";
import { SolutionPriceDto } from "./solution-price-dto";


export class ServiceBudgetDto {
  id: number;
  client: CustomerDto;
  clientId: number;
  entryDate: Date;
  entryDateOs: Date;
  clientProblems: string;
  status: string;
  visually: string;
  osMake: boolean;
  finished: boolean;
  solutionsPrices: SolutionPriceDto[]
}
