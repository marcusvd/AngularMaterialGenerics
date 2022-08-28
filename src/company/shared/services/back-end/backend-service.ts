import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IBackEndService } from "./ibackend-service";

export class BackEndService<T, ID> implements IBackEndService<T, ID> {


  constructor(
    protected _Http: HttpClient,
    protected _BackEndUrl?: string,
    protected _BackEndUrlIncluded?: string
  ) { }

  addAsync$<T>(entity: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  updateAsync$<T>(id: ID, entity: T): Observable<T> {
    throw new Error("Method not implemented.");
  }

  getAllAsync$<T>(): Observable<T[]> {
    return this._Http.get<T[]>(this._BackEndUrl);
  }
  getAllIncludedAsync$<T>(): Observable<T[]> {
    return this._Http.get<T[]>(this._BackEndUrlIncluded);
  }

  getByIdAsyncIncluded$<T>(id: ID): Observable<T> {
    return this._Http.get<T>(`${this._BackEndUrlIncluded}/${id}`);
  }
  getByIdAsync$<T>(id: ID): Observable<T> {
    return this._Http.get<T>(`${this._BackEndUrl}/${id}`);
  }

  deleteAsync$<T>(id: ID): Observable<any> {
    throw new Error("Method not implemented.");
  }
  //Pagination
  pagAllIncluded<T>(currentPg?: number, pgSize?:number, term?:string, start?:Date,  end?:Date  ): Observable<HttpResponse<T[]>> {
    let params = new HttpParams();

    if(currentPg &&  pgSize){
      params = params.append('pgnumber', currentPg.toString());
      params = params.append('pgsize', pgSize.toString());
    }

    if(start &&  end){
      params = params.append('start', start.toDateString());
      params = params.append('end', end.toDateString());
    }

    if(term){
      params = params.append('searchTerm', term.toString());
    }


    return this._Http.get<T[]>(this._BackEndUrlIncluded, {observe: 'response', params});


  }


}



