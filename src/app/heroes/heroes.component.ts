import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';declare var __RevDeBug: any; /*tslint:disable*/const __revD7 = __RevDeBug.init("example-angular-heroes", "Angular Heroes Example", "0.0.0", "c=V6XOPb6Cg5bDXOd<a7WNWOXJXFhO", "0000000000000000", "127.0.0.1", 42735, 3, 2, 512, 14, 65, ";78787:#7:579>", "b75759579579=5;", "15c55", "4v1&x*R2JB4g~4t@SQ+4%.y;0jGKPq:7", 0, "app/heroes/heroes.component.ts");__revD7.es.push(__revD7.e);__revD7.a(0, __revD7.e = 65);






@Component({ selector: 'app-heroes', templateUrl: './heroes.component.html', styleUrls: ['./heroes.component.css'] })export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {let __revDE: any;try {__revD7.a(0, heroService, __revDE = 67);__revD7.v(68);} catch (__revDErr) {throw __revD7.c(__revDE, __revDErr);}}

  ngOnInit(this: any) {let __revDT0: any, __revDE: any;try {__revD7.a(0, __revDE = 69);
      __revD7.a((([__revDT0 = this, __revDE = -120][0] as any).getHeroes, __revDT0), __revDE = 71).getHeroes();__revD7.v(70);
    } catch (__revDErr) {throw __revD7.c(__revDE, __revDErr);}}

  getHeroes(this: any): void {let __revDT0: any, __revDE: any;try {__revD7.a(0, __revDE = 72);
      __revD7.a((([__revDT0 = __revD7.a((([__revDT0 = ([this, __revDE = -125][0] as any).heroService, __revDE = -126][0] as any).getHeroes, __revDT0), __revDE = 75).getHeroes(), __revDE = -127][0] as any).
      subscribe, __revDT0), __revDT0 = (heroes: any) => {let __revDE: any;try {__revD7.a(0, heroes, __revDE = 76);return __revD7.v(77, __revD7.v(78, ([this, __revDE = -132][0] as any).heroes = (__revDE = -133, heroes)));} catch (__revDErr) {throw __revD7.c(__revDE, __revDErr);}}, __revDE = 74).subscribe(__revDT0);__revD7.v(73);
    } catch (__revDErr) {throw __revD7.c(__revDE, __revDErr);}}}__revD7.v(66);__revD7.e = __revD7.es.pop();


//# sourceMappingURL=heroes.component.ts.map
