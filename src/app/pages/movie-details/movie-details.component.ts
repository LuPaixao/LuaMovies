import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
  standalone: true,
  imports: [ CommonModule ]
})
export class MovieDetailsComponent {

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute) { }
  getMovieDetailsResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result)
      this.getMovieDetailsResult = result;
    });
  }


  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {

      const trailer = result.results.find((element:any) => element.type === 'Trailer');
      if (trailer) {
        this.getMovieVideoResult = trailer.key;
      } else {
        console.warn('Nenhum trailer encontrado');
      }
    });
  }

  getCast(id:any){
    this.service.getMovieCast(id).subscribe((result) =>{
      this.getMovieCastResult = result.cast;
    });
  }
}
