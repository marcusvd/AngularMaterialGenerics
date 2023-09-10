import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { IRadiosDictionary } from 'src/company/shared/components/radio-button-g/interfaces/Iradios-dictionary';

import { BackEndService } from 'src/company/shared/services/back-end/backend-service';
import { ClientListService } from '../services/client-list.service';
import { CustomerGridDto } from './grid-dto/customer-grid-dto';
import { CustomerDto } from 'src/company/shared/components/table-g-grid/dto/customer-dto';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit, AfterViewInit {

  private entitiesBehaviorSubject = new BehaviorSubject<any[]>([]);

  public entities$ = this.entitiesBehaviorSubject.asObservable();

  titlesHeader: string[] = ['Nome', 'Responsável'];
  fieldsInEnglish: string[] = ['name', 'responsible'];


  constructor(
    // public _tableGV2Service: TableGV2Service,
    private _clientListService: ClientListService,
    private _route: ActivatedRoute,
  ) { }

  loadEntities(backEndUrl:string = "customers/GetAllPagedCustomersAsync", pageIndex: number = 0, pageSize: number = 10, filter: string = '') {
    this._clientListService.loadAllPaged2$<any[]>(backEndUrl, pageIndex, pageSize, filter).subscribe((response: any) => {
      this.entitiesBehaviorSubject.next(response.body);
      })


      // .pipe(
      //   catchError(() => of([])),
      //   finalize(() => this.loadingSubject.next(false))
      // )
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    console.log(this.paginator.page)
    this.paginator.page
      .pipe(
        tap(() => this.loadEntities("customers/GetAllPagedCustomersAsync",  this.paginator.pageIndex + 1,this.paginator.pageSize, ''))
      ).subscribe(() => {

      })
  }

  paramsTo(pageIndex: number = 1, pageSize: number = 10) {
    let params = new HttpParams();
    params = params.append('pgnumber', pageIndex);
    params = params.append('pgsize', pageSize);
    params = params.append('companyid', JSON.parse(localStorage.getItem('companyId')));
    params = params.append('term', this.queryField.value);
    return params;
  }

  outputFieldSearch($event: FormControl) {
    this.queryField = $event;
    let value = this.queryField.value;
    if (value && (value = value.trim() != '')) {
      this.getPaginatedEntities(this.paramsTo()).subscribe(x => {
        this.entitiesBehaviorSubject.next(x.body);
      })
    }
  }

  getPaginatedEntities(params: HttpParams) {
    this._clientListService.loadAllPaged$<any[]>("customers/GetAllPagedCustomersAsync", params).subscribe(x => {
    })
    return this._clientListService.loadAllPaged$<any[]>("customers/GetAllPagedCustomersAsync", params);
  }

  queryField = new FormControl()
  lengthCustomer: number;

  ngOnInit(): void {

    this._clientListService.loadAllPaged$<any[]>("customers/GetAllPagedCustomersAsync", this.paramsTo())
      .subscribe((entities: any) => {
        this.entitiesBehaviorSubject.next(entities.body);
      })

    this._route.data.subscribe({
      next: (item: any) => {
        this.lengthCustomer = item.loaded;
      }
    });


    this.queryField.valueChanges.pipe(
      map(x => x.trim()),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(() => this.getPaginatedEntities(this.paramsTo())),
      tap(value => {
        this.entitiesBehaviorSubject.next(value.body);
      })
    ).subscribe(
      () => {
        if (this.queryField.value === '') {
          this._clientListService.loadAllPaged$<any[]>("customers/GetAllPagedCustomersAsync", this.paramsTo())
        }
      }
    );
  }
}
