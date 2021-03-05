import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Servicio
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService
    ) {
    this.activatedRoute.params.subscribe( params => {
      this._heroesService.getHeroe( params['heroeId']);
    });
   }

  ngOnInit(): void {
  }

}
