import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public charecterList: Character[] = [];

  onDeleteCharacter(uuid: string): void {
    console.log(uuid);
    this.onDeleteId.emit(uuid);
  }

}
