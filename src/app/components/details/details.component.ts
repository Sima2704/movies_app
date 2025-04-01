import { Component } from '@angular/core';
import { DetailsActorsComponent } from "../details-actors/details-actors.component";
import { DetailsReviewsComponent } from "../details-reviews/details-reviews.component";
import { DetailsMoviesComponent } from "../details-movies/details-movies.component";

@Component({
  selector: 'app-details',
  imports: [DetailsActorsComponent, DetailsReviewsComponent, DetailsMoviesComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  
}
