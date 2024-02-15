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

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');

    this.getMovie(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result, 'result#');
      this.getMovieDetailsResult = result;
    });
  }

}
