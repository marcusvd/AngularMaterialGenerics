import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-g-display-item',
  template: `<div class="grid-container">{{item}}</div>`,
  styles: [`
  .grid-container {
    display: grid;
    grid-template-columns:200px;
    grid-gap: 1px;
    /* background-color: #2196F3; */
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
}

.grid-container>div {
    /* background-color: rgba(255, 255, 255, 0.8); */
    text-align: left;
    padding: 5px 0;
    font-size: 20px;
}
  `]
})
export class GridGDisplayItemComponent implements OnInit {

  @Input() item: string;
  // @Input() entities: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
