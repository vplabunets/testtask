import {CardData} from '../types';

export const cardsData: CardData[] = [
  {
    id: '1',
    colorType: 'green',
    cardHolder: 'Eric Boone',
    currency: 'USD',
    balance: 1345.04, //to be refactored using Currency
    cardNumber: '3455 4562 7710 3507',
    expiryDate: '01/30', //to be refactored using Date
  },
  {
    id: '2',
    colorType: 'orange',
    cardHolder: 'Rita Ora',
    currency: 'USD', //to be refactored using Currency
    balance: 3156.5,
    cardNumber: '3455 6587 4258 3457',
    expiryDate: '02/30', //to be refactored using Date
  },
];
