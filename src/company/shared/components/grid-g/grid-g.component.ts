import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'grid-g',
  templateUrl: './grid-g.component.html',
  styleUrls: ['./grid-g.component.css']
})
export class GridGComponent implements OnInit {

  // @Input() titlesHeader: string[] = [];
  // @Input() entities = new Observable<any[]>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.titlesHeader.length - 1)
  }

}
