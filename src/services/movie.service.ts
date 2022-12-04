import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public host = environment.backendUrl + "/movies/";

  constructor( private http : HttpClient ) { }

  public getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.host + "all");
  }

  public saveMovie(movie : Movie):Observable<Movie>{
    return this.http.post<Movie>(this.host, movie);
  }

  public deleteMovie(id : Number):Observable<Movie>{
    return this.http.delete<Movie>(`${this.host}${id}`);
  }

  public setMovieDirector(movieId : Number, formData : FormData):Observable<Movie>{
    return this.http.patch<Movie>(`${this.host}${movieId}/set-director`, formData);
  }
}
