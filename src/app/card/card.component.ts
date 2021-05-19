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
  flights?: Flight[];
  flightsTitles = FLIGHTSTITLES;

  constructor(private flightServ: FlightService) {}

  ngOnInit() {
    this.flightServ.getFlight().subscribe((data) => (this.flights = data),
      
    );
  }
}
