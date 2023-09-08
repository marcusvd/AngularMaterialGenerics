import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-g-display-header',
  template: `<div  class="grid-container-header"><h2>{{headerItem}}</h2></div>`,
  styleUrls: ['./grid-g.component.css']
//   styles: [`
//   .grid-container {
//     display: grid;
//     grid-template-columns:70px;
//     grid-gap: 1px;
//     /* background-color: #365011;
//     color: white; */
//     height: 20px;
//     padding: 10px;
// }

// .grid-container>div {
//     /* background-color: blue; */
//     text-align: left;
//     padding: 5px 0;
//     font-size: 15px;
// }
// .background {
//     background-color: #365011;
//     color: white;
//     border-bottom: 1px solid #1c2c06;
//     height: 40px;
// }
//   `]
})
export class GridGDisplayHeaderComponent implements OnInit {

  @Input() headerItem: string;
  // @Input() entities: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
