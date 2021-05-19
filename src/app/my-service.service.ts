import { Injectable } from '@angular/core';
import { FLIGHTS } from 'src/mock-flight';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

constructor() { }
getFlight2() {
  return FLIGHTS
}
}
