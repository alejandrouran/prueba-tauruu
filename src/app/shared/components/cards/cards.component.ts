import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MidCardComponent } from '../mid-card/mid-card.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';
import { CardModule } from 'primeng/card';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, MidCardComponent, MiniCardComponent, CardModule, MenuComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  public title: string = 'Trending Products';
  public description: string = 'Top Picks for Sustainable Dental Care';

  // @Input() image: string = '';
  // @Input() description: string = '';
  // @Input() price: string = '';
  // public description: string = 'ho'
  // public price: string = '$135'



}
