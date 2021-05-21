import { Flight, Status } from './flight';

export const FLIGHTS: Flight[] = [
  {
    id: '765-7563494375',
    from: 'ADD',
    to: 'SYD',
    airplaneType: 'EK 414',
    milestones: [
      { code: 'RCF', status: Status.AtRisk },
      { code: 'FWB', status: Status.Failed },
      { code: 'BKD', status: Status.Success },
      { code: 'LAT', status: Status.Success },
      { code: 'DEP', status: Status.Success },
      { code: 'ARR', status: Status.Success },
      { code: 'RCS', status: Status.Missing },
      { code: 'NFD', status: Status.Upcoming },
      { code: 'AWD', status: Status.Upcoming },
      { code: 'DLV', status: Status.Upcoming },
    ],
    accieved: {
      code: 'ARR',
      time: '21:10',
    },
    upcoming: {
      code: 'RCF',
      time: '22:30',
    },
    totalTime: '2 days 21 hours 50 minutes',
    imgURL: 'https://www.flyswoop.com/images/icon-route.png',
    product: ['GCR'],
    shc: ['PIL', 'MIK', 'GFR', 'PLK'],
    ancillaries: ['DDPU', 'HHNK', 'FGDS'],
    shipper: ['Samsung'],
    forwarder: ['SHC'],
  },
];