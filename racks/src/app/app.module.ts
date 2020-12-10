import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { RacksComponent } from './racks/racks.component';
import { RackComponent } from './racks/rack/rack.component';
import { RackListComponent } from './racks/rack-list/rack-list.component';
import { ToastrModule } from 'ngx-toastr';
import {Ng2SearchPipe} from 'ng2-search-filter'

@NgModule({
  declarations: [
    AppComponent,
    RacksComponent,
    RackComponent,
    RackListComponent,
    Ng2SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
