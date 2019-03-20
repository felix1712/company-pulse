import { Component } from '@angular/core';

import { SurveysService } from './services/surveys.service';
import { ResultsService } from './services/results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  catalog;
  genre;

  constructor(
    private surveyService: SurveysService,
    private resultService: ResultsService) {

     /* to get Catalog from survey Service */
    surveyService.getCatalog().subscribe(
      catalog => {
        this.catalog = catalog.categories;
        console.log(this.catalog);
      },
      err => {
        console.log(err);
      }
    );

    /* to get Genre from Result */
    resultService.getGenre().subscribe(
      genre =>{
        this.genre = genre.genres;
      },
      err =>{
        console.log(err);
      }
    );
  }

  ngOnInit() {}

}

export class AppSettings{
   public static API_URL='https://trade.ripples.asia/api/v1/';
}
