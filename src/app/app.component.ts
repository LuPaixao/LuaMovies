import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { MovieApiServiceService } from './service/movie-api-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CommonModule, RouterLink, RouterLinkActive, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieApiServiceService]
})
export class AppComponent {
  title = 'luamovies';

  navbg:any;
  @HostListener('document:scroll') scrollover(){

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#282828'
      }
    }else
    {
        this.navbg = {}
    }
  }


  /*
  Criei assim, porém continuou do mesmo jeito
  @HostListener('document:scroll') scrollover() {
    const navbar = document.getElementById('navbar') ?? null;
    if (navbar) {
      navbar?.classList.add('navbar-scroll');
    } else {
      (navbar as HTMLElement | null)?.classList.remove('navbar-scroll');
    }
  }

  Css:
  .navbar-scroll {
  background-color: #282828;
  transition: background-color 0.5s ease-in-out;
}

html:
<nav id="navbar" class="navbar navbar-expand-lg fixed-top">
  */

}
