import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Flight } from '../models/flight.model';
import { FLIGHTS } from '../models/mock-flight';


@Injectable({ providedIn: 'root' })
export class FlightService {

  constructor() {
  }

  getFlight(): Observable<Flight[]> {
    const flight = of(FLIGHTS);
    return flight;
  }
}
