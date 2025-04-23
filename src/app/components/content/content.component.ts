import { Component } from '@angular/core';
import { AboutPage } from '../../pages/about-page/about-page.component';

@Component({
    selector: 'Content-component',
    standalone: true,
    imports: [AboutPage],
    templateUrl: './content.component.html',
    styleUrl: './content.component.sass'
  })

  export class Content {}