import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path: 'movie/:id', component:MovieDetailsComponent}
];

