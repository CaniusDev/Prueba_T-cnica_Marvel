import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(public http: HttpClient) { }

  public getCharacters(){


    return this.http.get(`${environment.apiUrl}ts=1000&${environment.apiKey}&${environment.hash}&offset=0&limit=100`).pipe(
      map((res:any)=>{
        return res;
      }),
      retry(5)
    )
  }


  public getComics(idComic :string){
    return this.http.get(`http://gateway.marvel.com/v1/public/characters/${idComic}/comics?ts=1000&${environment.apiKey}&${environment.hash}&offset=0&limit=100`).pipe(
      map((res:any)=>{
        return res;
      }),
      retry(5)
    )
  }
  

  
}
