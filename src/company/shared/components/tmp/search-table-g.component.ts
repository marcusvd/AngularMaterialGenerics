import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'search-table',
  templateUrl: 'search-table-G.component.html'
  // styleUrls: ['./table-g.component.css']
})
export class SearchTableG implements OnInit {

  private _startDate: Date = new Date();
  private _endDate: Date = new Date();
  public _textSearch: string = null;

  @Input() searchByText = false;
  @Input() searchByDate = false;
  @Input() searchCombined = false;

  @Output() searchKey: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }

  startDateSearch(date: Date) {
    this._startDate = date;
  }
  endDateSearch(date: Date) {
    this._endDate = date;

    // if (this._startDate && this._endDate) {
    //   let fiterTrigger: any = { start: this._startDate, end: this._endDate, text: null }
    //   this.searchKey.emit(fiterTrigger)
    // }

  }
  filtering() {

    let fiterTrigger: any = { start: this._startDate, end: this._endDate, text: this._textSearch }
    fiterTrigger = {}

    if (this._startDate && this._endDate || this._textSearch) {

      fiterTrigger = { start: this._startDate, end: this._endDate, text: this._textSearch }
      this.searchKey.emit(fiterTrigger)

      console.log(this._startDate, this._endDate)

      console.log(this._textSearch)
    }


  }
  _ranger = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  })
  Searchbytxt(term:string) {

    // this._textSearch = text;
    if (this._textSearch) {
      let fiterTrigger: any = { start: null, end: null, text:term }

      this.searchKey.emit(fiterTrigger)
    }
  }
  //#endregion




}
