/**
 * Created by Artem_Farafonov on 2/10/2017.
 */

import { Injectable } from '@angular/core';
import { Hero } from './entities/hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{resolve(HEROES)}, 10);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
