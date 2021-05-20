export interface Flight {
  id: string;
  from: string;
  to: string;
  airplaneType: string;
  milestones: {
    atRisk: string[];
    failed: string[];
    success: string[];
    missing: string[];
    upcoming: string[];
  };
  accieved: FlightData;
  upcoming: FlightData;
  // actualTime: string;
  // plannedTime: string;
  totalTime: string;
  imgURL: string;
  product: string[];
  shc: string[];
  ancillaries: string[];
  shipper: string[];
  forwarder: string[];
}

export interface FlightData {
  code: string;
  time: string;
}

export interface FlightTitle {
  name: string;
}

export enum Status {
  AtRisk = 'AtRisk',
  Failed = 'Failed',
  Success = 'Success',
  Missing = 'Missing',
  Upcoming = 'Upcoming',
}
