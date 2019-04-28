import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { SensorDetailComponent } from './components/sensor-detail/sensor-detail.component';
import { SensorReadingsComponent } from './components/sensor-readings/sensor-readings.component';

const routes: Routes = [
  { path: '', redirectTo:'/sensors', pathMatch: 'full' },
  { path: 'sensors', component: SensorListComponent },
  { path: 'sensor/:id', component: SensorDetailComponent },
  { path: 'sensor/:id/logs', component: SensorReadingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
