import { Flight, FlightTitle } from './flight';

export const FLIGHTS: Flight[] = [
  {
    id: "765-7563494375",
    from: "ADD",
    to: "SYD",
    airplaneType: "EK 414",
    milestones: {
      atRisk: ["RCF"],
      failed: ["FWB"],
      success: ["BKD", "LAT", "DEP", "ARR"],
      missing: ["RCS"],
      upcoming: ["NFD", "AWD", "DLV"],
    },
    accieved: {
      code: "ARR",
      time: "21:10"
    },
    upcoming: {
      code: "RCF",
      time: "22:30"
    },
    totalTime: "2 days 21 hours 50 minutes",
    imgURL: "https://www.flyswoop.com/images/icon-route.png",
    product: ["GCR"],
    shc: ["PIL", "MIK", "GFR", "PLK"],
    ancillaries: ["DDPU", "HHNK", "FGDS"],
    shipper:["Samsung"],
    forwarder: ["SHC"]
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
