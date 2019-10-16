import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {

  heroe: any ;
  isMarvel: Boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe.casa);
    });
    if (this.heroe.casa == 'Marvel') {
      this.isMarvel = true;
    }
  }


}
