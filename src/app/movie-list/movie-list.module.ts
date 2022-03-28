import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
   declarations: [MovieComponent, MovieListComponent],
   imports: [SharedModule],
   exports: [MovieListComponent],
})
export class MovieListModule {}
