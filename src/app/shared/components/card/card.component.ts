import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public description: string = 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash';
  public price: string = '$135';
  public cart: string = 'Add to Cart';

}
