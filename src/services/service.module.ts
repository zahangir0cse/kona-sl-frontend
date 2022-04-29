import { NgModule } from '@angular/core';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';
import {ItemSearchPipePipe} from './item.search.pipe';

@NgModule({
  providers: [
    AuthGuardService,
    AuthService,
    RestDataService,
  ],
  exports: [
    ItemSearchPipePipe
  ],
  declarations: [ItemSearchPipePipe]
})
export class ServiceModule { }
