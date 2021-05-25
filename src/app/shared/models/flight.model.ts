import {Status} from './enum'

export interface Flight {
  id: string;
  from: string;
  to: string;
  airplaneType: string;
  milestones: Milestones[];
  accieved: FlightData;
  upcoming: FlightData;
  totalTime: string;
  imgURL: string;
  product: string[];
  shc: string[];
  ancillaries: string[];
  shipper: string[];
  forwarder: string[];
}

export interface Milestones {
  code:string;
  status: Status;
}

export interface FlightData {
  code: string;
  status: Status;
  time: string;
}


