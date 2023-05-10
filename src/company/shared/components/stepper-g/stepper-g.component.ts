import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'stepper-g',
  templateUrl: './stepper-g.component.html',
  styleUrls: ['./stepper-g.component.css']
})
export class StepperGComponent implements OnInit {
  isLinear:true;
  constructor() { }

  currentUserInteractions = [
    {name: 'first', key: 'firstStep'},
    {name: 'second', key: 'secondStep'},
    {name: 'third', key: 'thirdStep'},
    {name: 'fourth', key: 'fourthStep'},
 ];

  @Output() selectedIndex: EventEmitter<number>;

  clickGetEvent($event) {
    console.log($event)
  }



  ngOnInit(): void {
  }

}
