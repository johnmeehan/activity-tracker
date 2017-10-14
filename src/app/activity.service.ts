import { SAVED_ACTIVITES } from './shared/activities';
import { Activity } from './models/activity';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivityService {
  activities: Activity[];

  constructor() {
    this.activities = SAVED_ACTIVITES;
   }

  getActivity(index: number): Activity {
    return this.activities.find( x => x.id === index);
  }

  getActivities(): Activity[] {
    return this.activities.slice(0);
  }

  getTotalActivities(allActivities: Activity[]): number {
    return allActivities.length;
  }

  getTotalDistance(allActivities: Activity[]): number {
    let totalDistance = 0;
    for (let i = 0; i < allActivities.length; i ++) {
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }

  getFirstDate(allActivities: Activity[]) {
    let firstDate = new Date('01/01/9999');
    for (let i = 0; i < allActivities.length; i++) {
      const currentDate = allActivities[i].date;
      if (currentDate < firstDate ) {
        firstDate = currentDate;
      }
    }
    return firstDate;
  }

}
