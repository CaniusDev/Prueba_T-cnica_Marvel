import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { MarvelService } from 'src/app/services/marvel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  public personajes: Array<any> = [];
  public personajesCopy: Array<any> = [];

  constructor(public http: HttpClient, private personaje: MarvelService, private router:Router) {
    
  }
  

  ngOnInit(): void {
    this.personaje.getCharacters().subscribe((res)=>{
      
      this.personajes = res.data.results


    })
  }
  
  
  filter(e:any){
    const search = e.target.value
    // .filter(item => item.toLowerCase().indexOf(term.toLowerCase()) >= 0);

    this.personajes.filter(item=>{
      console.log(item.name);
      
      
      return item.name.toLowerCase().includes(search.toLowerCase());
    })
  }
  btnClick(id: string){
    this.router.navigate(
      ['/details'],
      {queryParams: {id: id}}
    );
  }
}