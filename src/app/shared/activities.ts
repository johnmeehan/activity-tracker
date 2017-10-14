import { Activity } from '../models/activity';

export const SAVED_ACTIVITES: Activity[] = [
  new Activity( 1, 'Camino', new Date('2017/08/31'), 'Sarria to Portomarin', 23.54, '../../assets/gpx/2017-08-31.gpx'),
  new Activity( 2, 'Camino', new Date('2017/09/01'), 'Portomarin to Palas dl Rei', 23.85, '../../assets/gpx/2017-09-01.gpx'),
  new Activity( 3, 'Camino', new Date('2017/09/02'), 'Palas dl Rei to Aruza', 30.27, '../../assets/gpx/2017-09-02.gpx'),
  new Activity( 4, 'Camino', new Date('2017/09/03'), 'Aruza to Pedrouzo', 21.19, '../../assets/gpx/2017-09-03.gpx'),
  new Activity( 5, 'Camino', new Date('2017/09/04'), 'Pedrouzo to Santiago de Compostela', 21.04, '../../assets/gpx/2017-09-04.gpx')
];
