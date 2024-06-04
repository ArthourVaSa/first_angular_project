import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public nameHasChanged: boolean = true;
  public ageHasChanged: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  changeName(): void {
    this.nameHasChanged = !this.nameHasChanged;
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.ageHasChanged = !this.ageHasChanged;
    this.age = 20;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
    this.nameHasChanged = !this.nameHasChanged;
    this.ageHasChanged = !this.ageHasChanged;
  }

}
