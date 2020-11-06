import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';declare var __RevDeBug: any; /*tslint:disable*/const __revD4 = __RevDeBug.init("example-angular-heroes", "Angular Heroes Example", "0.0.0", "c=V6XOPb6Cg5bDXOd<a7WNWOXJXFhO", "0000000000000000", "127.0.0.1", 42735, 3, 2, 512, 20, 28, ";78787:#7<7#579>97:5", "WM575=5795#7=9A5#;59;", "35Y=&5", "4v1&x*R2JB4g~4t@SQ+4%.y;0jGKPq:7", 0, "app/hero-detail/hero-detail.component.ts");__revD4.es.push(__revD4.e);__revD4.a(0, __revD4.e = 28);






@Component({ selector: 'app-hero-detail', templateUrl: './hero-detail.component.html', styleUrls: ['./hero-detail.component.css'] })export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location) {let __revDE: any;try
    {__revD4.a(0, route, heroService, location, __revDE = 30);__revD4.v(31);} catch (__revDErr) {throw __revD4.c(__revDE, __revDErr);}}

  ngOnInit(this: any): void {let __revDT0: any, __revDE: any;try {__revD4.a(0, __revDE = 32);
      __revD4.a((([__revDT0 = this, __revDE = -53][0] as any).getHero, __revDT0), __revDE = 34).getHero();__revD4.v(33);
    } catch (__revDErr) {throw __revD4.c(__revDE, __revDErr);}}

  getHero(this: any): void {let __revDT0: any, __revDE: any;try {__revD4.a(0, __revDE = 35);
      const id = __revD4.v(37, +__revD4.a((([__revDT0 = ([this, __revDE = -58][0] as any).route.snapshot.paramMap, __revDE = -59][0] as any).get, __revDT0), __revDT0 = 'id', __revDE = 38).get(__revDT0));
      __revD4.a((([__revDT0 = __revD4.a((([__revDT0 = ([this, __revDE = -64][0] as any).heroService, __revDE = -65][0] as any).getHero, __revDT0), __revDT0 = (__revDE = -66, id), __revDE = 40).getHero(__revDT0), __revDE = -67][0] as any).
      subscribe, __revDT0), __revDT0 = (hero: any) => {let __revDE: any;try {__revD4.a(0, hero, __revDE = 41);return __revD4.v(42, __revD4.v(43, ([this, __revDE = -72][0] as any).hero = (__revDE = -73, hero)));} catch (__revDErr) {throw __revD4.c(__revDE, __revDErr);}}, __revDE = 39).subscribe(__revDT0);__revD4.v(36);
    } catch (__revDErr) {throw __revD4.c(__revDE, __revDErr);}}

  goBack(this: any): void {let __revDT0: any, __revDE: any;try {__revD4.a(0, __revDE = 44);__revDT0 =
      new (__revD4.a((__revDE = -81, Error), __revDT0 = 'Oops...', __revDE = 47))(__revDT0);throw __revDE = -75, __revDT0;
      __revD4.a((([__revDT0 = ([this, __revDE = -77][0] as any).location, __revDE = -78][0] as any).back, __revDT0), __revDE = 46).back();__revD4.v(45);
    } catch (__revDErr) {throw __revD4.c(__revDE, __revDErr);}}}__revD4.v(29);__revD4.e = __revD4.es.pop();


//# sourceMappingURL=hero-detail.component.ts.map
