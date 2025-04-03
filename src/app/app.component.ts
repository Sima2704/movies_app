import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DetailsComponent} from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';


@Component({
  selector: 'app-root',
  imports: [ DetailsComponent, DetailsMoviesComponent, DetailsReviewsComponent, FooterComponent, HomeComponent, 
    LoaderComponent, ModalComponent, NavbarComponent, NotAuthorizedComponent, SearchComponent,
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
}
