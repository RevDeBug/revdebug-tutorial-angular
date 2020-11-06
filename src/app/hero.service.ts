import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';declare var __RevDeBug: any; /*tslint:disable*/const __revD5 = __RevDeBug.init("example-angular-heroes", "Angular Heroes Example", "0.0.0", "c=V6XOPb6Cg5bDXOd<a7WNWOXJXFhO", "0000000000000000", "127.0.0.1", 42735, 3, 2, 512, 15, 48, ";787#8;<78;<579", "Z5575978A=9:C;=5", "*5ZE$5K$5I", "4v1&x*R2JB4g~4t@SQ+4%.y;0jGKPq:7", 0, "app/hero.service.ts");__revD5.es.push(__revD5.e);__revD5.a(0, __revD5.e = 48);


@Injectable({ providedIn: 'root' })export class HeroService {

  constructor(private messageService: MessageService) {let __revDE: any;try {__revD5.a(0, messageService, __revDE = 50);__revD5.v(51);} catch (__revDErr) {throw __revD5.c(__revDE, __revDErr);}}

  getHeroes(this: any): Observable<Hero[]> {let __revDT0: any, __revDE: any;try {__revD5.a(0, __revDE = 52);
      // TODO: send the message _after_ fetching the heroes
      __revD5.a((([__revDT0 = ([this, __revDE = -88][0] as any).messageService, __revDE = -89][0] as any).add, __revDT0), __revDT0 = 'HeroService: fetched heroes', __revDE = 53).add(__revDT0);
      return __revD5.v(54, __revD5.a((__revDE = -93, of), __revDT0 = (__revDE = -94, HEROES), __revDE = 55)(__revDT0));
    } catch (__revDErr) {throw __revD5.c(__revDE, __revDErr);}}

  getHero(this: any, id: number): Observable<Hero> {let __revDT0: any, __revDE: any;try {__revD5.a(0, id, __revDE = 56);
      // TODO: send the message _after_ fetching the hero
      __revD5.a((([__revDT0 = ([this, __revDE = -99][0] as any).messageService, __revDE = -100][0] as any).add, __revDT0), __revDT0 = `HeroService: fetched hero id=${id}`, __revDE = 57).add(__revDT0);
      return __revD5.v(58, __revD5.a((__revDE = -104, of), __revDT0 = __revD5.a((([__revDT0 = (__revDE = -107, HEROES), __revDE = -108][0] as any).find, __revDT0), __revDT0 = (hero: any) => {let __revDE: any;try {__revD5.a(0, hero, __revDE = 61);return __revD5.v(62, (__revDE = -112, hero.id) === (__revDE = -113, id));} catch (__revDErr) {throw __revD5.c(__revDE, __revDErr);}}, __revDE = 60).find(__revDT0), __revDE = 59)(__revDT0));
    } catch (__revDErr) {throw __revD5.c(__revDE, __revDErr);}}}__revD5.v(49);__revD5.e = __revD5.es.pop();


//# sourceMappingURL=hero.service.ts.map
