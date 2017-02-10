/**
 * Created by Artem_Farafonov on 2/10/2017.
 */

import { Component, OnInit } from '@angular/core';

import { Hero } from './entities/hero';
import { HeroService } from './hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
