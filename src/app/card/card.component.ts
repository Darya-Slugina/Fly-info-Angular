import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flight.service';
import { Flight, Status } from 'src/flight';
import { FLIGHTSTITLES } from '../../mock-flight';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public flights: Flight[] = [];
  public flightsTitles = FLIGHTSTITLES;
  public total: number = 0;

  constructor(private flightServ: FlightService) {}

  ngOnInit() {
    this.flightServ.getFlight().subscribe((data) => (this.flights = data));
    this.total =
      this.flights[0].milestones.atRisk.length +
      this.flights[0].milestones.failed.length +
      this.flights[0].milestones.success.length +
      this.flights[0].milestones.missing.length +
      this.flights[0].milestones.upcoming.length;
  }
}
