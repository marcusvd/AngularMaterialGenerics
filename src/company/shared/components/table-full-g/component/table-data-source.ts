import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, debounceTime, distinctUntilChanged, finalize, of, switchMap } from "rxjs";
import { TableFullGService } from "../services/table-full-g.service";

export class TableDataSource implements DataSource<any> {

  public entitiesSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private _tableFullGService: TableFullGService) { }

  connect(collectionViewer: CollectionViewer): Observable<readonly any[]> {
    return this.entitiesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.entitiesSubject.complete();
    this.loadingSubject.complete();
  }

  loadEntities(pageIndex: number = 0, pageSize: number = 10, filter: string = '', sortDirection: string = 'asc') {
    this._tableFullGService.GetAllPaginated('customers/GetAllPagedCustomersAsync', pageIndex, pageSize, filter)
    .pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((response: any) => {
      this.entitiesSubject.next(response.body);
    })
  }
  loadEntitiesTest(pageIndex: number = 0, pageSize: number = 10, filter: string = '', sortDirection: string = 'asc') {
    return this._tableFullGService.GetAllPaginated('customers/GetAllPagedCustomersAsync', pageIndex, pageSize, filter);
  }
  // loadEntities(pageIndex: number = 0, pageSize: number = 10, filter: string = '', sortDirection: string = 'asc') {
  //   this._tableFullGService.GetAllPaginated('customers/GetAllPagedCustomersAsync', pageIndex, pageSize, filter)
  //   .pipe(
  //     switchMap((x => this._tableFullGService.GetAllPaginated('customers/GetAllPagedCustomersAsync', pageIndex, pageSize, filter))),
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     catchError(() => of([])),
  //     finalize(() => this.loadingSubject.next(false))
  //   ).subscribe((response: any) => {
  //      console.log(response)
  //     this.entitiesSubject.next(response.body);
  //   })
  // }



}
