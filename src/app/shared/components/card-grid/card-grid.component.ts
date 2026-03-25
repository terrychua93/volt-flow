import { CardItem } from '@interfaces/cardItem';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  imports: [],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css',
})
export class CardGridComponent {
  @Input() services: CardItem[] = [];
}
