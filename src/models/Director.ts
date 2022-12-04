import { Movie } from "./Movie";

export interface Director {
    id?: number;
    name?: string;
    dob? : Date;
    movies? : Movie[];
}