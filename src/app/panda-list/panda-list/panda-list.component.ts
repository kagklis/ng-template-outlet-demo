import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Panda } from 'src/app/interfaces/panda';
import { SelectedItems } from 'src/app/interfaces/selected-items';
import { PandaService } from 'src/app/services/panda.service';

@Component({
   selector: 'app-panda-list',
   templateUrl: './panda-list.component.html',
   styleUrls: ['./panda-list.component.scss'],
})
export class PandaListComponent {
   public selection: string[] = [];

   public pandas$: Observable<Panda[]>;

   constructor(pandaService: PandaService) {
      this.pandas$ = pandaService.getPandas();
   }

   updateSelection(selectedItems: SelectedItems) {
      this.selection = Object.keys(selectedItems);
   }
}
