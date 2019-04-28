import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sensor } from '../../sensor';
import { SensorService } from '../../services/sensor.service';


@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent implements OnInit {
  
  sensor : Sensor;

  constructor(
    private route: ActivatedRoute,
    private sensorService: SensorService
    ){}

  ngOnInit(): void{
    this.getSensor();
  }

  getSensor() :void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sensorService.getSensor(id)
      .subscribe(sensor => this.sensor = sensor);
  }
}
