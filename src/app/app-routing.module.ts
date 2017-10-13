import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'activities', component: ActivityListComponent },
  { path: 'activity/:id', component: MapComponent },
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
