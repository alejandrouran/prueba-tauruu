import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardsComponent, HeaderComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
