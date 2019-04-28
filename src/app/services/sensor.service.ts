import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sensor } from '../sensor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SensorReading } from '../sensor-reading';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  //private sensorsUrl = 'http://localhost:3000/sensors';
  private sensorsUrl = 'http://logweather.herokuapp.com/sensors';
  constructor(
    private http: HttpClient) { }

  getSensors() : Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.sensorsUrl);
  }

  getSensor(id: string) : Observable<Sensor> {
    const url = `${this.sensorsUrl}/${id}`;
    return this.http.get<Sensor>(url);
  }

  getWeatherLogs(sensorId: string): Observable<SensorReading[]>{
    const url = `${this.sensorsUrl}/${sensorId}/weatherLogs`;
    return this.http.get<SensorReading[]>(url);
  }
}
