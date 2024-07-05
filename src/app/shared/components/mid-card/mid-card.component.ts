import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-mid-card',
  standalone: true,
  imports: [CardModule, NgOptimizedImage],
  templateUrl: './mid-card.component.html',
  styleUrl: './mid-card.component.scss'
})
export class MidCardComponent {
  public description: string = 'your go-to choice for a naturally clean and eco-friendly smile';
}
