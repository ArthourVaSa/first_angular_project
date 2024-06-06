import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [];

  onNewCharacter(character: Character): void {
    this.characters.push({ ...character, id: v4()});
  }

  onDeleteCharacter(uuid: string): void {
    this.characters = this.characters.filter(character => character.id !== uuid);
    console.log(this.characters);
  }
}
