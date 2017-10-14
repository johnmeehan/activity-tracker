export class Activity {

  constructor(
    public id: number,
    public name: string,
    public date: Date,
    public comments: string,
    public distance: number,
    public gpxData: string) {

    }

    // process the gpx file and get attributes like name, date, distance, heart rate, elevation from it.
}
