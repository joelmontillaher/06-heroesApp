import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { } // Injecta el Router

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value)
      .subscribe(heroes => {
        this.heroes = heroes.filter(hero =>
          hero.superhero.toLowerCase().includes(value.toLowerCase()));
      });
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    const heroName: string = event.option.value;
    const hero = this.heroes.find(h => h.superhero === heroName);
    if (hero) {

      this.router.navigate(['/heroes', hero.id]);
    }
  }
}
