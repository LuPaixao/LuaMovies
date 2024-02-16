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
      console.log(result, 'result#');
      this.getMovieDetailsResult = result;
    });
  }


  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'getMovieVideo#');

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
      console.log(result, 'cast#');
      this.getMovieCastResult = result.cast;
    });
  }
}


  /*

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

        // updatetags
        this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});

        // facebook
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`});

    });
  }

  */



