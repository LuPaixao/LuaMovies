import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class SearchComponent {

  constructor(private movieApiServiceService: MovieApiServiceService) {}

  ngOnInit(): void {
  }

  searchResult:any;

  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  async submitForm() {
    const movieName = this.searchForm.value.movieName;

    if (movieName) {
      try {
        const result = await this.movieApiServiceService.searchMovie(movieName);
        console.log(result);
        this.searchResult = result.results;
        console.log(this.searchResult, 'result#')
      } catch (error) {
        console.error(error);
      }
    } else {
      console.warn('Por favor digite o nome do filme');
    }
}

}
