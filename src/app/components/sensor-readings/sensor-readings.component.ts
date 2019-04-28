import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sensor } from '../../sensor';
import { SensorReading } from '../../sensor-reading';
import { SensorService } from 'src/app/services/sensor.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-sensor-readings',
  templateUrl: './sensor-readings.component.html',
  styleUrls: ['./sensor-readings.component.css']
})
export class SensorReadingsComponent implements OnInit {

  sensor : Sensor;
  logs : SensorReading[];
  displayedColumns: string[] = ["timestamp", "value"];
  dataSource;

  constructor(
    private route: ActivatedRoute,
    private sensorService: SensorService
  ) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getSensor();
    this.getLogs();
  }

  getSensor(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sensorService.getSensor(id)
      .subscribe(sensor => this.sensor = sensor);
  }

  getLogs(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sensorService.getWeatherLogs(id)
      .subscribe(
        logs => {
          this.logs = logs;
          this.dataSource = new MatTableDataSource(logs);
          this.dataSource.sort = this.sort;
          console.log('HTTP response', logs);
        },
        err => console.log('HTTP error', err),
        () => console.log('HTTP request completed'));
  }
}
