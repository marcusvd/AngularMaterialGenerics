
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, flatMap, map, merge, Observable, switchMap, tap } from 'rxjs';

import { ServiceBudgetDto } from 'src/company/shared/dto/service-budget-dto';
import { InventoryToView } from 'src/company/shared/components/table-g/dtos/inventory-to-view';
import { PaginatorDto } from 'src/company/shared/components/table-g/dtos/paginator-dto';
import { GenericDataSource } from 'src/company/shared/helpers/generic-datasource';
import { AppInventoryService, AppServiceBudgetService } from './services/app.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //table
  private _genericDataSource: GenericDataSource;

  public dataSource = new Observable<ServiceBudgetDto[]>();

  tabs: string[] = [];


  namesOfClientToTitle:string[] =[];
  expansionDescription:string[] =[];

  // public _dataSource = new BehaviorSubject<any>(null);

  // pagination: PaginatorDto = JSON.parse(localStorage?.getItem('pagination'));
  // displayedColumnsInventory = ['id', 'equipament', 'quantity', 'model', 'saleprice', 'manufactorer'];
  // displayedColumnsInventoryBr = ['Código', 'Peça', 'Quantidade', 'Modelo', 'Preço', 'Fabricante'];
  // pageSizeOptions = [10, 50, 100]
  // pageIndex: number;
  // pageSize: number;
  // length: number;

  entities: any[] = [];
  // private _ServicesBudgetEntities: ServiceBudgetDto[] = [];
  //table

  constructor(
    private _ServicesBudgetListService: AppServiceBudgetService,
    private _AppInventoryService: AppInventoryService,
    private _route: Router,
  ) {

  }

  // get getRecordFromDb() {
  //   return this._ServicesBudgetListService.recordsFromDb;
  // }



  paging($event) {
    const Pagination: PaginatorDto = $event;
    // this.dataSource.inventoryLoad(Pagination.pageIndex + 1, Pagination.pageSize);
  }

  search($event) {
    const terms = $event;
    // this.dataSource.inventoryLoad(this.pageIndex + 1, this.pageSize, terms.terms);
    console.log($event)
  }



  ngOnInit(): void {

    // this._route.navigateByUrl(`${'tree'}/${1}`);
    //tab
    // this._servicesBudgetListService.details(1);

    // this._servicesBudgetListService.loadAllFromDb();
    // this._servicesBudgetListService.recordsFromDb

    // this.dataSource = new TableDataSource(null, null);
    // this.dataSource.inventoryLoad$();
    //
    // this.pageIndex = this.pagination.pageIndex;
    // this.pageSize = this.pagination.pageSize;
    // this.length = this.pagination.length;
    // console.log(this.displayedColumnsInventory[4])

    // this.dataSource = new TableDataSource(null, null,this._appService);

    // this.dataSource.inventoryLoad$(1,10).subscribe((invDto: HttpResponse<InventoryDto[]>) => {

    //   let ToView: InventoryToView;

    //   invDto.body.forEach((inv: InventoryDto) => {
    //     ToView = new InventoryToView();
    //     ToView.id = inv.id;
    //     ToView.equipament = inv.equipament.name;
    //     ToView.manufactorer = inv.manufactorer;
    //     ToView.model = inv.model;
    //     ToView.quantity = inv.quantity;
    //     ToView.saleprice = inv.saleprice;
    //     this.entities.push(ToView)
    //   })
    //   this.dataSource.data = this.entities


    //   //console.log(this.entities)
    // })


    // this._genericDataSource = new GenericDataSource(null, null, this._ServicesBudgetListService, null);

    // this.dataSource = this._genericDataSource.serviceBudgetLoad$();


    // this.dataSource.pipe(
    //   map((serviceBudgetDto) => {
    //   this.namesOfClientToTitle =  serviceBudgetDto.map(namesOfClientToTitle => namesOfClientToTitle.client.name);
    //   this.expansionDescription = serviceBudgetDto.map(namesOfClientToTitle => namesOfClientToTitle.clientProblems)
    //   this.entities = serviceBudgetDto.map(namesOfClientToTitle => namesOfClientToTitle);
    //   })
    // ).subscribe();



    // this._genericDataSource.serviceBudgetLoad$().forEach((ids: number[]) => {
    //   ids.forEach((id: number) => {
    //     this._ServicesBudgetListService.getByIdAsyncIncluded$<ServiceBudgetDto>(id)
    //       .subscribe((sbDto: ServiceBudgetDto) => {
    //         this._dataSource = sbDto;
    //       //  this._dataSource.next(sbDto)
    //        console.log(this._dataSource);
    //       })
    //   })

    // })

  }
}
