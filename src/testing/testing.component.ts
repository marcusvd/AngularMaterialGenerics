import { Component, Input, OnInit } from '@angular/core';
import { ClientListService } from 'src/app/services/client-list.service';
import { ClientDto } from 'src/company/shared/components/table-g/dtos/client-dto';

@Component({
  selector: 'testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {


  numberGridCols: number = 12;
  rowHeight: number|string = 100;
  gridBackGroundColor: string = 'blue';
  gridTextColor: string = 'green';


  constructor() { }

  ngOnInit(): void {

  }

}
