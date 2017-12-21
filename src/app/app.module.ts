import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ArtDetailsComponent } from './art-details/art-details.component';
import { ArtListComponent } from './art-list/art-list.component';
import {ArtListService} from "./art-list/art-list.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ArtDetailsComponent,
    ArtListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArtListService],
  bootstrap: [ArtListComponent]
})
export class AppModule { }
