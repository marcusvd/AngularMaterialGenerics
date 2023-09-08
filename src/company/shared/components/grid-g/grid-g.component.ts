import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-g',
  templateUrl: './grid-g.component.html',
  styleUrls: ['./grid-g.component.css']
})
export class GridGComponent implements OnInit {

  @Input() header: string[] = []
  @Input() entities: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
