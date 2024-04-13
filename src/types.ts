import {tapGestureHandlerProps} from './../node_modules/react-native-gesture-handler/src/handlers/TapGestureHandler';
export type CardData = {
  id: string;
  colorType: string;
  cardHolder: string;
  currency: string;
  balance: number;
  cardNumber: string;
  expiryDate: string;
};
export type TransactionsData = {
  id: number;
  date: string;
  name: string;
  value: number;
  type: string;
  currency: string;
  image: string;
};
