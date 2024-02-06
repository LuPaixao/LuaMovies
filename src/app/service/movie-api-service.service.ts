import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "39e601755abb72f4a88da6599f60fcaf";

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  //trendigMovieAppData() Observable<any> {
   // return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  //}


}
