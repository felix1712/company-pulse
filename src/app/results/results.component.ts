import { Component, OnInit } from '@angular/core';
import { SurveysService } from '../services/surveys.service';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  genre;
  constructor(
    private resultService: ResultsService
    ) { 

    resultService.getGenre().subscribe(
      genre =>{
        this.genre = genre.genres;
      },
      err =>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
