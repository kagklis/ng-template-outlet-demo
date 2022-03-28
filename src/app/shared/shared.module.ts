import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HoursPipe } from './hours.pipe';

@NgModule({
   declarations: [SelectionListComponent, StarRatingComponent, HoursPipe],
   imports: [CommonModule, ScrollingModule],
   exports: [
      CommonModule,
      SelectionListComponent,
      StarRatingComponent,
      HoursPipe,
   ],
})
export class SharedModule {}
