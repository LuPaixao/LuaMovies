import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [ CommonModule ]
})
export class HomeComponent{

  constructor( private service: MovieApiServiceService){ }

  bannerResult:any = [];

  ngOnInit(): void {
    this.bannerData();
  }

  async bannerData() {
    try {
      const result = await this.service.bannerApiData();
      this.bannerResult = result.results;
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  }

}
