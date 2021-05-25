import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../shared/services/flight.service';
import { Flight } from 'src/app/shared/models/flight.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public flights: Flight[] = [];

  constructor(private flightServ: FlightService) {}

  ngOnInit() {
    this.flightServ.getFlight().subscribe((data) => (this.flights = data));
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
