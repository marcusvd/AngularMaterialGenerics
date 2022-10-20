import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-g-breakpoints-container',
  template: `
  <ng-content></ng-content>
  `
})
export class CardGBreakpointsContainerComponent implements OnInit {
  @Input() dataCards: any[] = [];
  @Input() objAny:any = {};
  // @Input() subTitle: string;
  // @Input() content: string;
  // @Input() btnText1: string;
  // @Input() btnText2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
