import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Director } from 'src/models/Director';
import { Movie } from 'src/models/Movie';
import { DirectorService } from 'src/services/director.service';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  movies : Movie[];
  directors : Director[];

  editMovie : Movie;

  movieForm : FormGroup;

  constructor(private router: Router, 
    private movieService : MovieService,
    private directorService : DirectorService) {
  }

  ngOnInit(): void {

    // let director1 : Director = { id: 1, name: "Quentin Tarantino", dob: new Date("March 27, 1963") };
    // let director2 : Director = { id: 2, name: "Roman Polanski", dob: new Date(" August 18, 1933")};

    // this.directors = [director1, director2];

    // let movie1 : Movie = {id : 1, name : "Pulp Fiction", catergory : "Crime/Drama", rating : "9", director : director1}
    // let movie2 : Movie = {id : 2, name : "The Pianist", catergory : "War/Drama", rating : "9.5", director : director2}
    // let movie3 : Movie = {id : 3, name : "Django Unchained", catergory : "Western/Action", rating : "8", director : director1}
    
    // this.movies = [movie1, movie2, movie3];

    this.movieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl(''),
      rating: new FormControl(''),
      director: new FormControl('', Validators.required),
    });

    this.getMovies();
    this.getDirectors();

  }

  addMovie(){
    
    console.log(this.movieForm.value);
    //add movie to the list
    let movie = this.movieForm.value
    this.movieService.saveMovie(movie).subscribe
    ({
      next: (response: Movie) => {
        this.getMovies();
      },
      error: (e) => console.log(e),
      complete: () => {}
    })
  
    document.getElementById("close-modal-button").click(); //to close the modal
    
    //reset form
    this.movieForm.reset();

  }


  deleteMovie(movie){
    // this.movies = this.movies.filter(m => m.id != movie.id);
    this.movieService.deleteMovie(movie.id).subscribe({
      next: (response: Movie) => {
        this.movies = this.movies.filter(m => m.id != movie.id);
      }
    })

  }

  updateMovie(movie){
    this.router.navigate(['movies/',movie.name]);
  }

  getMovies(){
    this.movieService.getMovies().subscribe({
      next: (response: Movie[]) => {
        this.movies = response;
      },
      error: (e) => console.log(e),
      complete: () => {}
    })
  }

  getDirectors(){
    this.directorService.getDirectors().subscribe({
      next: (response: Director[]) => {
        this.directors = response;
      },
      error: (e) => console.log(e),
      complete: () => {}
    })
  }

  
}
