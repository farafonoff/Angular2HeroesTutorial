/**
 * Created by Artem_Farafonov on 2/10/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
