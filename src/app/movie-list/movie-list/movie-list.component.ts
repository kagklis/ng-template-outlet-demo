import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { SelectedItems } from 'src/app/interfaces/selected-items';
import { MovieService } from 'src/app/services/movie.service';

@Component({
   selector: 'app-movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
   public selection: string[] = [];

   public movies$: Observable<Movie[]>;

   constructor(movieService: MovieService) {
      this.movies$ = movieService.getMovies();
   }

   updateSelection(selectedItems: SelectedItems) {
      this.selection = Object.keys(selectedItems);
   }
}
