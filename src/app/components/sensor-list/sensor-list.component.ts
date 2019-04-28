import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sensor } from '../../sensor';
import { SensorService } from '../../services/sensor.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

  sensors : Sensor[];

  constructor(
    private sensorService: SensorService,
    private router: Router) { }

  ngOnInit() {
    this.getSensors();
  }

  getSensors(): void {
    this.sensorService.getSensors()
      .subscribe(sensors => this.sensors = sensors);
  }

  onEdit(e: Event, id: string): void {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.router.navigateByUrl("/sensors/");
  }
}
