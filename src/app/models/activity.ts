export class Activity {
  id: number;
  name: string;
  date: Date;
  comments?: string;
  distance?: number;
  gpxData: string;

  constructor(id: number, name: string, date: Date, comments: string, distance: number, gpxData: string) {
    this.id = id;
    this.name = name;
    this.date = new Date(date);
    this.comments = comments;
    this.distance = distance;
    this.gpxData = gpxData;
  }
}
