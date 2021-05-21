import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../shared/services/flight.service';
import { Flight } from 'src/app/shared/models/flight';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public flights: Flight[] = [];
  public atRisk: number = 0;
  public failed: number = 0;
  public success: number = 0;
  public missing: number = 0;
  public upcoming: number = 0;

  constructor(private flightServ: FlightService) {}

  ngOnInit() {
    this.flightServ.getFlight().subscribe((data) => (this.flights = data));
    this.atRisk = this.flights[0].milestones.filter(
      (el) => el.status === 'AtRisk'
    ).length;
    this.failed = this.flights[0].milestones.filter(
      (el) => el.status === 'Failed'
    ).length;
    this.success = this.flights[0].milestones.filter(
      (el) => el.status === 'Success'
    ).length;
    this.missing = this.flights[0].milestones.filter(
      (el) => el.status === 'Missing'
    ).length;
    this.upcoming = this.flights[0].milestones.filter(
      (el) => el.status === 'Upcoming'
    ).length;
  }

  public getColor(status: string):any {
    switch (status) {
      case 'AtRisk':
        return 'orange';
      case 'Success':
        return 'green';
      case 'Missing':
        return 'blue';
      case 'Upcoming':
        return 'gray';
      case 'Failed':
        return 'red';
    }
  }
}