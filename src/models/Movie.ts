import { Director } from "./Director";

export interface Movie{
    id?: number;
    name?: string;
    category? : string;
    rating? : String;
    director? : Director;
}