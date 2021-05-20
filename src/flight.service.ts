import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Flight } from './flight';
import { FLIGHTS } from './mock-flight';


@Injectable({ providedIn: 'root' })
export class FlightService {

  constructor() {
  }

  getFlight(): Observable<Flight[]> {
    const flight = of(FLIGHTS);
    return flight;
  }
}
