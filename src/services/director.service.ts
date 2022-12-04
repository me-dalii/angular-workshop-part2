import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Director } from 'src/models/Director';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  public host = environment.backendUrl + "/directors/";

  constructor( private http : HttpClient ) { }

  public getDirectors(): Observable<Director[]>{
    return this.http.get<Director[]>(this.host + "all");
  }

}
