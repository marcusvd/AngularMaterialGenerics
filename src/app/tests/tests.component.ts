import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


import { PaginatorDto } from 'src/company/shared/components/table-g/dtos/paginator-dto';
import { TableGService } from 'src/company/shared/components/table-g/services/table-g.service';
import { BackEndService } from 'src/company/shared/services/back-end/backend-service';

@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {


  constructor(
    private _tableGService: TableGService,
  ) { }

  ngOnInit(): void {



  }

}
