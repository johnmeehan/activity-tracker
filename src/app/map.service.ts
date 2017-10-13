import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { ActivityService } from './activity.service';
import { IActivity } from './shared/iactivity';

declare var omnivore: any;
declare var L: any;

@Injectable()
export class MapService {
  apiToken: string = environment.MAPBOX_API_KEY;
  // omnivore: any;
  // L: any;
  defaultCoords: number[] = [40, -80];
  defaultZoom = 8;

  constructor() { }

  plotActivity(activity: IActivity) {
    const myStyle = {
      'color': '#3949AB',
      'weight': 5,
      'opacity': 0.95
    };

    const map = L.map('map').setView(this.defaultCoords, this.defaultZoom);

    map.maxZoom = 100;
    const apiUrl = `https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.apiToken}`;

    L.tileLayer(apiUrl, {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.pencil',
      accessToken: this.apiToken
    }).addTo(map);

    const customLayer = L.geoJSON(null, {
      style: myStyle
    });

    const gpxLayer = omnivore.gpx(activity.gpxData, null, customLayer)
    .on('ready', function() {
      map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
  }
}
