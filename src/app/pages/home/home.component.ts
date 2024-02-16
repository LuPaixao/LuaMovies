import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive, RouterOutlet ]
})
export class HomeComponent{

  constructor( private service: MovieApiServiceService){ }

  bannerResult:any = [];
  trendingMovieResult: any[] = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      this.bannerResult = result.results;
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }

}
