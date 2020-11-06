import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';declare var __RevDeBug: any; /*tslint:disable*/const __revD3 = __RevDeBug.init("example-angular-heroes", "Angular Heroes Example", "0.0.0", "c=V6XOPb6Cg5bDXOd<a7WNWOXJXFhO", "0000000000000000", "127.0.0.1", 42735, 3, 2, 512, 16, 12, ";7<9787:#7:579>7", "V=5#759579579=5;9", "25W=#5", "4v1&x*R2JB4g~4t@SQ+4%.y;0jGKPq:7", 0, "app/dashboard/dashboard.component.ts");__revD3.es.push(__revD3.e);__revD3.a(0, __revD3.e = 12);






@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css'] })export class DashboardComponent implements OnInit {
  heroes: Hero[] = __revD3.v(14, []);

  constructor(private heroService: HeroService) {let __revDE: any;try {__revD3.a(0, heroService, __revDE = 15);__revD3.v(16);} catch (__revDErr) {throw __revD3.c(__revDE, __revDErr);}}

  ngOnInit(this: any) {let __revDT0: any, __revDE: any;try {__revD3.a(0, __revDE = 17);
      __revD3.a((([__revDT0 = this, __revDE = -28][0] as any).getHeroes, __revDT0), __revDE = 19).getHeroes();__revD3.v(18);
    } catch (__revDErr) {throw __revD3.c(__revDE, __revDErr);}}

  getHeroes(this: any): void {let __revDT0: any, __revDE: any;try {__revD3.a(0, __revDE = 20);
      __revD3.a((([__revDT0 = __revD3.a((([__revDT0 = ([this, __revDE = -33][0] as any).heroService, __revDE = -34][0] as any).getHeroes, __revDT0), __revDE = 23).getHeroes(), __revDE = -35][0] as any).
      subscribe, __revDT0), __revDT0 = (heroes: any) => {let __revDT0: any, __revDT1: any, __revDE: any;try {__revD3.a(0, heroes, __revDE = 24);return __revD3.v(25, __revD3.v(26, ([this, __revDE = -40][0] as any).heroes = __revD3.a((([__revDT0 = (__revDE = -44, heroes), __revDE = -45][0] as any).slice, __revDT0), __revDT0 = 1, __revDT1 = 5, __revDE = 27).slice(__revDT0, __revDT1)));} catch (__revDErr) {throw __revD3.c(__revDE, __revDErr);}}, __revDE = 22).subscribe(__revDT0);__revD3.v(21);
    } catch (__revDErr) {throw __revD3.c(__revDE, __revDErr);}}}__revD3.v(13);__revD3.e = __revD3.es.pop();


//# sourceMappingURL=dashboard.component.ts.map
