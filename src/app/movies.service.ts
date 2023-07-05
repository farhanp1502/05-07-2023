import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  getmovie(){
   return this.http.get('http://localhost:3000/movies')
  }
  updatemovie(movie1:any){
    // console.log(movie1[a].id)
return this.http.put('http://localhost:3000/movies/'+movie1.id,movie1)
  }
  delete1(movie2:any,a:number){
    return this.http.delete('http://localhost:3000/movies/'+movie2[a].id)
  }
}
