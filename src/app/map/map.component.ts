import { ActivityService } from './../activity.service';
import { Activity } from './../models/activity';
import { MapService } from './../map.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  activity: Activity;

  constructor(
    private mapService: MapService,
    private route: ActivatedRoute,
    private activitiesService: ActivityService
  ) { }

  ngOnInit() {
    this.activity = this.activitiesService.getActivity(+this.route.snapshot.params['id']);
  }

  ngAfterViewInit() {
    this.mapService.plotActivity(this.activity);
  }
}
