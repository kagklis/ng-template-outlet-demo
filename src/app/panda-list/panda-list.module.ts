import { NgModule } from '@angular/core';
import { PandaListComponent } from './panda-list/panda-list.component';
import { PandaComponent } from './panda/panda.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
   declarations: [PandaComponent, PandaListComponent],
   imports: [SharedModule],
   exports: [PandaListComponent],
})
export class PandaListModule {}
