import { IdOwner } from "./id-owner";

export interface Movie extends IdOwner  {
   title: string;
   description: string;
   durationInMinutes: number;
   releaseYear: number;
   starRating: number;
}
