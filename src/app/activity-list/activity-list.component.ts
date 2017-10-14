import { ActivityService } from './../activity.service';
import { Activity } from './../models/activity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];
  totalActivites: number;
  totalDistance: number;
  firstDate: Date;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
    this.totalActivites = this.activityService.getTotalActivities(this.activities);
    this.totalDistance = this.activityService.getTotalDistance(this.activities);
    this.firstDate = this.activityService.getFirstDate(this.activities);
  }



}
