import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Flight } from './flight';
import { FLIGHTS } from './mock-flight';


@Injectable({ providedIn: 'root' })
export class FlightService {
  total = 0;

  constructor() {
  }

  getFlight(): Observable<Flight[]> {
    const flight = of(FLIGHTS);
    return flight;
  }

  getTotal() {
    // console.log(flight);

    // return (this.flightsTitles.milestones.atRisk +
    //             this.milestones.failed +
    //             this.milestones.success +
    //             this.milestones.missing +
    //             this.milestones.upcoming)
  }
}
