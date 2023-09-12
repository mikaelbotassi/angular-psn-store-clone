import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() gameCover:string = '';
  @Input() gameLabel: string = 'Exclusive';
  @Input() gameType:string = "Digital PS4";
  @Input() consoleType:string = "| PS4";
  @Input() gamePrice:string = "$ 59,99"

}
