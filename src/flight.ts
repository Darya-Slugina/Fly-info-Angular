  export interface Flight {
    id: string;
    from: string;
    to: string;
    airplaneType: string;
    milestones: {
      atRisk: number;
      failed: number;
      success: number;
      missing: number;
      upcoming: number;
    }
    actualTime: string;
    plannedTime: string;
    totalTime: string; 
    imgURL: string;
    product: string;
    shc: string;
    shipper:string;
    forwarder: string;
  }

  export interface FlightTitle {
    name: string;
  }