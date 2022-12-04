import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieName : string;

  constructor(private route: ActivatedRoute, ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieName = params['name'];
    });

    //if id use
    //this.pathId = parseInt(this.route.snapshot.paramMap.get('id'));
  }


}
