import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*-------------------------------------------------------------------*/
import { TilesComponent } from './tiles/tiles.component';
import { TablesComponent } from './tables/tables.component';
import { HighLightDirective } from './high-light.directive';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TilesComponent, TablesComponent, HighLightDirective, SearchPipe],
  exports:[TilesComponent,TablesComponent,HighLightDirective,SearchPipe]
})
export class SharedModule { }
