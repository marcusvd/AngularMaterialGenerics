import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, debounceTime, distinctUntilChanged, finalize, of, switchMap } from "rxjs";
import { TableGGridService } from "../services/table-g-grid.service";


export class TableDataSource implements DataSource<any> {

  private entitiesSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private _tableGGridService: TableGGridService) { }

  connect(collectionViewer: CollectionViewer): Observable<readonly any[]> {
    return this.entitiesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.entitiesSubject.complete();
    this.loadingSubject.complete();
  }

  loadEntities(backEndUrl:string, pageIndex: number = 0, pageSize: number = 10, filter: string = '') {
    this._tableGGridService.loadAllPaged2$<any[]>(backEndUrl, pageIndex, pageSize, filter)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      ).subscribe((response: any) => {
        this.entitiesSubject.next(response.body);
      })
  }

  set dataBase(entities: any[]) {
    this.entitiesSubject.next(entities);
  }
  get dataBase() {
    return this.entitiesSubject.value;
  }



}
