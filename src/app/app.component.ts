import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { MoviesService } from './movies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '05-07-2023';
  flop: any;
  constructor(private movie: MoviesService) {}
  ngOnInit() {
    this.movie.getmovie().subscribe((moviedata) => {
      this.flop = moviedata;
      // console.log(this.flop);
    });
  }
  selected = true;
  onchange() {
this.selected=false;
    this.flop.onSale = !this.flop.onSale;

    this.movie.updatemovie(this.flop).subscribe((res) => {
      console.log(res);

    });
  }

  ondelete(a:any){
    this.movie.delete1(this.flop,a).subscribe((resp)=>{
      console.log(resp);
       this.movie.getmovie().subscribe((moviedata) => {
      this.flop = moviedata;
      // console.log(this.flop);
    });
    })
  }
}
