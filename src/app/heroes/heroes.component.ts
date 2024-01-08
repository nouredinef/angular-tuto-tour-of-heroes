import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroesList: Hero[] = []
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    if (this.selectedHero == hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero
      this.messageService.add(hero.name)
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(list => this.heroesList = list);
  }

}
