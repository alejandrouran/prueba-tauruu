import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MenubarModule, MenuModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

   public items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                // icon: 'pi pi-home'
            },
            {
                label: 'Products',
                // icon: 'pi pi-star'
            },
            {
                label: 'teeth whiterning',
                // icon: 'pi pi-search',
                // items: [
                //     {
                //         label: 'Components',
                //         icon: 'pi pi-bolt'
                //     },
                //     {
                //         label: 'Blocks',
                //         icon: 'pi pi-server'
                //     },
                //     {
                //         label: 'UI Kit',
                //         icon: 'pi pi-pencil'
                //     },
                //     {
                //         label: 'Templates',
                //         icon: 'pi pi-palette',
                //         items: [
                //             {
                //                 label: 'Apollo',
                //                 icon: 'pi pi-palette'
                //             },
                //             {
                //                 label: 'Ultima',
                //                 icon: 'pi pi-palette'
                //             }
                //         ]
                //     }
                // ]
            },
            {
                label: 'toothpaste',
                // icon: 'pi pi-envelope'
            },
            {
              label: 'mouthwash',
              // icon: 'pi pi-envelope'
          },
          {
            // label: 'mouthwash',
            icon: 'pi pi-user'
        },
        {
          // label: 'mouthwash',
          icon: 'pi pi-shopping-cart'
      },
        ]
    }
}



