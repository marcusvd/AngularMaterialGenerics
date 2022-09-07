import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {



  // public entities = [];

  // @Input() panelTitle: string[] = [];
  // @Input() panelDescription: string[] = [];
  //  @Input() panelBody: any[] = [];
  // @Input() dataSourceInput = new Observable<any>();
  // panelOpenState = false;

  public entities = [];

  @Input() panelTitle: string;
  @Input() panelDescription: string;
  //  @Input() panelBody: any[] = [];
  @Input() dataSourceInput = new Observable<any>();
  panelOpenState = false;

  constructor() { }





  ngOnInit(): void {
    // console.log(this.panelTitle)
    this.dataSourceInput.subscribe(
      toView => {
        this.entities = toView;
      }
    )



  }








}
