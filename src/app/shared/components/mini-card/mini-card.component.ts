import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [CardModule, NgOptimizedImage, MenubarModule],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.scss'
})
export class MiniCardComponent {
  public description: string = 'No Artificial Colours';
  public descriptionOne: string = 'No Paraben';
  public descriptionTwo: string = 'Vegan';
}
