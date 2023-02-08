import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:string = "";
  public personajes: Array<any> = [];
  public comics: Array<any> = [];
  constructor(private route: ActivatedRoute,private personaje: MarvelService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.id = params["id"];
    })
    this.personaje.getCharacters().subscribe((res)=>{
      this.personajes = res.data.results;
      
      
    })
    this.personaje.getComics(this.id).subscribe((res)=>{
      this.comics = res.data.results
    })
  }
}
