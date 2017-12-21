import { Component, OnInit } from '@angular/core';
import {ArtListService} from './art-list.service';

@Component({
  selector: 'ff-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {

    artListService;
    arts;

    constructor(artListService : ArtListService){
      this.artListService = artListService;
    }

    ngOnInit() {
      this.artListService.getAll().subscribe((response) => {
        console.log(response.artObjects);
        this.arts = response.artObjects;
      });
    }

}
