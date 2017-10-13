import { MapService } from './map.service';
import { AppRoutingModule } from './app-routing.module';
import { ActivityService } from './activity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
