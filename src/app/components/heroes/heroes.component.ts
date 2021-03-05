import { Component, OnInit } from '@angular/core';
//Service
import { HeroesService, Heroe } from '../../services/heroes.service';
//Rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private _router:Router          
    ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index:number) {
    this._router.navigate(['/heroe',index])
  }

}
