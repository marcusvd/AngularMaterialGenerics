import { HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IBackEndService<T, ID> {

  addAsync$<T>(entity: T): Observable<T>;
  updateAsync$<T>(id: ID, entity: T): Observable<T>;
  getAllAsync$<T>(): Observable<T[]>;
  deleteAsync$<T>(id: ID): Observable<any>;
  loadById$<T>(url: string, id: string): Observable<T>;
  loadByIdLength$<T>(url: string, id: string): Observable<T>;
  loadAllPagedSearch$<T>(url:string, params:HttpParams): Observable<HttpResponse<T>>;
  loadAllPaged$<T>(url:string, pgNumber?: number, pgSize?: number, term?: string): Observable<HttpResponse<T>>;
  getByIdAsync$<T>(id: ID): Observable<T>;
  getByIdAsyncIncluded$<T>(id: ID): Observable<T>;

  //pagination
  pagAllIncluded<T>(currentPg?: number, pgSize?:number, term?:string, start?:Date,  end?:Date ):Observable<HttpResponse<T[]>>;
  //loadAllPagedIncluded$<T>(pgNumber?: number, pgSize?: number, term?: string):Observable<HttpResponse<T[]>>

}
