import { IdOwner } from './id-owner';

export interface Panda extends IdOwner {
   name: string;
   sex: 'F' | 'M'
   birthDate: Date;
   currentLocation: string;
}
