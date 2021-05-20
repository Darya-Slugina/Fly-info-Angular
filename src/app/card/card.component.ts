import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flight.service';
import { Flight } from 'src/flight';
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
      this.flights[0].milestones.atRisk +
      this.flights[0].milestones.failed +
      this.flights[0].milestones.success +
      this.flights[0].milestones.missing +
      this.flights[0].milestones.upcoming;
  }
}
