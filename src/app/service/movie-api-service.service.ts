import { Injectable } from '@angular/core';
import { fetch } from 'cross-fetch';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor() { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "39e601755abb72f4a88da6599f60fcaf";

  async bannerApiData(): Promise<any> {
    const response = await fetch(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
    const data = await response.json();
    return data;
  }

  async trendingAppData(): Promise<any> {
    const response = await fetch(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
    const data = await response.json();
    return data;
  }
}

//Eu usei assim e a IDE pediu para usar o fetch pois de acordo com a api eu teria uma reposta mais rápida
/*

 bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

HOME.COMPONENT

ngOnInit(): void {
    this.bannerData();
  }

    bannerData(){
      this.service.bannerApiData().subscribe((result)=>{
        console.log(result,'bannerresult#');
        this.bannerResult = result.results;
      })
  }

*/



