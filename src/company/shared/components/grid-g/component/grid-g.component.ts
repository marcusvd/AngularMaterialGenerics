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

  @Input() tiles: Tile[] = [];

  //Grid:
  @Input() numberGridCols: number;
  @Input() rowHeight: string | number;
  @Input() gridBackGroundColor: string | number;
  @Input() gridTextColor: string | number;

  //Tile
  // @Input() numberTileCols: number;
  // @Input() numberTileRows: number;
  // @Input() tileBackGroundColor: string;
  // @Input() tileText: string;
  // @Input() tileTextColor: string;




  entities: ClientDto[] = [];
  constructor(private _clientListService: ClientListService) { }

  ngOnInit(): void {
    this.tiles.push({ backGroundColor: 'blue', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo1' })
    this.tiles.push({ backGroundColor: 'black', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo2' })
    this.tiles.push({ backGroundColor: 'yellow', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo3' })
    this.tiles.push({ backGroundColor: 'green', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo4' })
    this.tiles.push({ backGroundColor: 'yellow', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo5' })
    this.tiles.push({ backGroundColor: 'silver', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo6' })
    this.tiles.push({ backGroundColor: 'purple', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo7' })
    this.tiles.push({ backGroundColor: 'lilac', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo8' })
    this.tiles.push({ backGroundColor: 'yellow', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo9' })
    this.tiles.push({ backGroundColor: 'pink', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo10' })
    this.tiles.push({ backGroundColor: 'brown', textColor: 'red', numberCols: 1, numberRows: 1, text: 'Titulo11' })
    this.tiles.push({ backGroundColor: 'orange', textColor: 'white', numberCols: 1, numberRows: 5, text: 'Titulo12' })
    this._clientListService.getAllIncludedAsync$().subscribe((entities: ClientDto[]) => {
      this.entities = entities
    })
  }




}
