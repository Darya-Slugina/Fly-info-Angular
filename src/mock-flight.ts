import { Flight, FlightTitle } from './flight';

export const FLIGHTS: Flight[] = [
  {
    id: "765-7563494375",
    from: "ADD",
    to: "SYD",
    airplaneType: "EK 414",
    milestones: {
      atRisk: 1,
      failed: 1,
      success: 4,
      missing: 1,
      upcoming: 11,
    },
    actualTime: "21:10",
    plannedTime: "22:30",
    totalTime: "2 days 21 hours 50 minutes",
    imgURL: "https://www.flyswoop.com/images/icon-route.png",
    product: "GCR",
    shc: "PIL",
    shipper:"Samsung",
    forwarder: "SHC"
  }
];

export const FLIGHTSTITLES: FlightTitle[] = [
    { name: "SDA" },
    { name: "BKD" },
    { name: "FWA" },
    { name: "LAT" },
    { name: "RCS" },
    { name: "DEP" },
  ];
