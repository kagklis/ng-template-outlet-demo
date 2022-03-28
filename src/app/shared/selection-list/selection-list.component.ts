import {
   ChangeDetectionStrategy,
   Component,
   ContentChild,
   EventEmitter,
   Input,
   Output,
   TemplateRef,
} from '@angular/core';
import { IdOwner } from 'src/app/interfaces/id-owner';
import { SelectedItems } from 'src/app/interfaces/selected-items';

@Component({
   selector: 'app-selection-list',
   templateUrl: './selection-list.component.html',
   styleUrls: ['./selection-list.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionListComponent {
   public selectedItems: SelectedItems = {};

   @Input() items!: IdOwner[] | null;
   @Output() selectionChanged = new EventEmitter<SelectedItems>();

   @ContentChild('itemTemplate', { static: false })
   itemTemplateRef!: TemplateRef<any>;

   selectItem(item: IdOwner) {
      if (Object.keys(this.selectedItems).includes(item.id.toString())) {
         delete this.selectedItems[item.id];
      } else {
         this.selectedItems[item.id] = item;
      }
      this.selectionChanged.emit(this.selectedItems);
   }
}
