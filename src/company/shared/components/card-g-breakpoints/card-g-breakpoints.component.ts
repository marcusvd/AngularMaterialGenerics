import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, VERSION, ViewChildren } from '@angular/core';
import { CardGBreakpointsContainerComponent } from './card-g-breakpoints-container.component';

@Component({
  selector: 'card-g-breakpoints',
  templateUrl: './card-g-breakpoints.component.html',
  styleUrls: ['./card-g-breakpoints.component.css']
})
export class CardGBreakpointsComponent implements OnInit {

  constructor(
    private cards: CardGBreakpointsContainerComponent,
    private responsive: BreakpointObserver
  ) { }

  cols: number = 5;
  rowHeight: string = '500px';

  private _dataCard: any[] = [];
  private _card: any;

  get dataCard() {
    return this._card;
  }
  get dataSource() {
    return this._dataCard;
  }

  onResize() {

    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
    ]).subscribe(result => {

      this.cols = 5;
      this.rowHeight = "500px"

      const breakPoints = result.breakpoints;

      if (breakPoints[Breakpoints.TabletPortrait]) {
        this.cols = 1;
      }
      else if (breakPoints[Breakpoints.TabletLandscape]) {
        this.cols = 1;
        this.rowHeight = "430px"
      }
      else if (breakPoints[Breakpoints.HandsetPortrait]) {
        this.cols = 1;
      }
      else if (breakPoints[Breakpoints.HandsetLandscape]) {
        this.cols = 2;
      }




    })
  }


  ngOnInit(): void {
    this._card = this.cards.objAny;
    this._dataCard = this.cards.dataCards;


  }

}
