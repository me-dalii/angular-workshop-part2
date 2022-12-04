import { Director } from "./Director";

export interface Movie{
    id?: number;
    name?: string;
    catergory? : string;
    rating? : String;
    director? : Director;
}