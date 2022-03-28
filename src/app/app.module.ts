import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PandaListModule } from './panda-list/panda-list.module';
import { MovieListModule } from './movie-list/movie-list.module';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      PandaListModule,
      MovieListModule,
      SharedModule,
      NgbModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
