import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableComponent } from './table/table.component';
import { CharactersService } from './table/characters.service';
import { DataMemoryServiceService } from './data-memory-service.service';
import { TableRowComponent } from './table-row/table-row.component';

import {DialogModule} from './primeng/primeng';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TableComponent, TableRowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CharactersService, DataMemoryServiceService]
})
export class AppModule { }
