import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FieldsetModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public title: string = "Echo - Friendy Smile";
  public description: string = "Transform Your Dental Routine width Eco-Friendly Toothbrushes";
  public boton: string = "SHOW NOW";
}
