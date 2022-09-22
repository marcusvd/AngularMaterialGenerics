import { Component, Input, OnInit } from '@angular/core';
import { ClientListService } from 'src/app/services/client-list.service';
import { ClientDto } from '../../table-g/dtos/client-dto';
import { Tile } from '../interfaces/tile';

@Component({
  selector: 'grid-g',
  templateUrl: './grid-g.component.html',
  styleUrls: ['./grid-g.component.css']
})
export class GridGComponent implements OnInit {


  //Grid:
  @Input() numberGridCols: number;
  @Input() rowHeight: string | number;
  @Input() gridBackGroundColor: string | number;
  @Input() gridTextColor: string | number;

  //Tile
  @Input() tiles: Tile[] = [];
  // using manually


  constructor() { }

  ngOnInit(): void {



  }




}
