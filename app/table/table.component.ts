import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { CharactersService } from './characters.service';

import {DataGridModule} from 'primeng/primeng';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
characters: Observable<any[]>;
columns: string[];

  constructor(private atService: CharactersService) {}

  ngOnInit() {
    this.columns = this.atService.getColumns(); 
  //["name", "age", "species", "occupation"]
  this.characters = this.atService.getCharacters();
  //all data in mock-data.ts
  }

}


export class TableColToggleDemo implements OnInit {

    cars: Character[];

    cols: any[];

    selectedColumns: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.selectedColumns = this.cols;
    }
}