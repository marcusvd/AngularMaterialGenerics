import { AfterContentChecked, AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TableDataSource } from '../helpers/table-datasource';
import { PaginatorDto } from '../dtos/paginator-dto';
import { AlternativeService } from '../services/alternative.service';
import { of, tap } from 'rxjs';
import { InventoryToView } from '../dtos/inventory-to-view';
import { MatSort } from '@angular/material/sort';
import { catchError, filter, finalize, merge } from 'rxjs/operators';
import { TableGenericListService } from '../services/table-g-list.service';
import { HttpResponse } from '@angular/common/http';
import { InventoryDto } from '../dtos/inventory-dto';




@Component({
  selector: 'table-g',
  template: `<div style="padding:30px;">
  <search-table (searchKey)="search($event)" [searchByText]="true"></search-table>
  <br>
  <mat-divider></mat-divider>
  <br>
  <paginated-table
  [dataSourceInput]="dataSource"
  (pgEvent)="paging($event)"
  [displayedColumnsInput]="displayedColumnsInventory"
  [displayedColumnsInputBr]="displayedColumnsInventoryBr"
  [pageSizeOptionsInput]="pageSizeOptions"
  [length]="this.length"
  [pageIndex]="this.pageIndex"
  [pageSize]="this.pageSize">
</paginated-table>
</div>`,

  styleUrls: ['./main-table-g.component.css']
})
export class TableGComponentBkp<T> implements OnInit, AfterViewInit, AfterContentChecked {
  displayedColumnsInventory = ['id', 'equipament', 'quantity', 'model', 'saleprice', 'manufactorer'];
  displayedColumnsInventoryBr = ['Código', 'Peça', 'Quantidade', 'Modelo', 'Preço', 'Fabricante'];
  // @Input() displayedColumnsInput: string[] = [];
  // @Input() displayedColumnsInputBr: string[] = [];
  @Input() pageSizeOptionsInput: number[] = []
  private _bodyReturnToView: InventoryToView[] = [];
  dataSource: TableDataSource;
  pagination: PaginatorDto = new PaginatorDto();
  // pagination: PaginatorDto = JSON.parse(localStorage?.getItem('pagination'));
  pageSizeOptions = [10, 50, 100]


  public spinnerShowHide = false;



  private searchTerms: string;
  pageIndex: number;
  pageSize: number;
  length: number;

  constructor(
    private collectionDeliveryService: TableGenericListService,
    private AService: AlternativeService
  ) {

  }
  ngAfterContentChecked(): void {

  }
  ngAfterViewInit(): void {
//    this.firstToLoad(this.pageIndex + 1, this.pageSize);
  }

  paging($event) {
    const Pagination: PaginatorDto = $event;
    // this.dataSource.inventoryLoad(Pagination.pageIndex + 1, Pagination.pageSize,);
    // console.log($event)
  }

  search($event) {
    const evt = $event;

    if (evt.text) {
      this.searchTerms = evt.text.toLowerCase();
      console.log(evt)
       this.firstToLoad(null, null, this.searchTerms.toLowerCase());
    }

   // console.log(evt.text.toLowerCase())

  // this.dataSource.data.next(this._bodyReturnToView = this._bodyReturnToView.filter(filtering => filtering.model.toLowerCase().indexOf(evt.text)));


    // filtrarClientes(filtrarPor: string): Cliente[] {
    //   filtrarPor = filtrarPor.toLocaleLowerCase();
    //   return this._cliente.filter(
    //     cliente => cliente.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    //     || cliente.nomeDelegacia.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    //     || cliente.status.toLocaleLowerCase().startsWith(filtrarPor)
    //   );
    // }


    // console.log($event)
  }
  firstToLoad(pageIndex?: number, pageSize?: number, terms?: string) {

    //
    this.dataSource = new TableDataSource(null, this.AService);
    //
    this.dataSource.inventoryLoad$(pageIndex, pageSize, terms).pipe(
      catchError(() => of([])),
      finalize(() => { /*console.log('Finished')*/ })
    ).subscribe((httpResponse: HttpResponse<any[]>) => {
      const HttpdataReturn = httpResponse;
      HttpdataReturn.body.forEach((element: InventoryDto) => {
        const InvToView = new InventoryToView();
        InvToView.id = element.id;
        InvToView.equipament = element?.equipament.name;
        InvToView.quantity = element.quantity;
        InvToView.model = element.model;
        InvToView.saleprice = element.saleprice;
        InvToView.manufactorer = element.manufactorer;
        this._bodyReturnToView.push(InvToView)

      })
      this.pagination = {...JSON.parse(HttpdataReturn.headers.get('pagination')) }

      // if(terms){
      //   bodyReturnToView = bodyReturnToView
      //   .filter((term:InventoryToView) =>
      //   term?.model.toLowerCase().includes(terms?.toLocaleLowerCase()) );
      // }

      // this.dataSource.data.next(this._bodyReturnToView);
      //
      this.pageIndex = this.pagination.pageIndex;
      this.pageSize = this.pagination.pageSize;
      this.length = this.pagination.length;
    })

  }

  ngOnInit(): void {

    this.firstToLoad()
    // this.dataSource.inventoryLoad();
  }




}
