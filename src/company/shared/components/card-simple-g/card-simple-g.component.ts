import { Component, OnInit } from '@angular/core';
import { CardGenericListService } from './services/card-g-list.service';

@Component({
  selector: 'card-simple-g',
  templateUrl: './card-simple-g.component.html',
  styleUrls: ['./card-simple-g.component.css']
})
export class CardSimpleGComponent implements OnInit {

  constructor(private services: CardGenericListService<any>) { }


  // toView() {
  //   this.services.getAllAsync$().subscribe((i: any[]) => {
  //     console.log(i)
  //   })
  // }













  ngOnInit(): void {
  }











}
