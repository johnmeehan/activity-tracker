import { SAVED_ACTIVITES } from './shared/activities';
import { IActivity } from './shared/iactivity';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivityService {
  activities: IActivity[];
  constructor() {
    this.activities = SAVED_ACTIVITES;
   }

  getActivity(index: number): IActivity {
    return this.activities[index];
  }

  getActivities(): IActivity[] {
    return this.activities.slice(0);
  }

  getTotalActivities(allActivities: IActivity[]): number {
    return allActivities.length;
  }

  getTotalDistance(allActivities: IActivity[]): number {
    let totalDistance = 0;
    for (let i = 0; i < allActivities.length; i ++) {
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }

  getFirstDate(allActivities: IActivity[]) {
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
