import { Component } from '@angular/core';
import { Header } from '../../components/header/header.component'
import { Footer } from '../../components/footer/footer.component'

@Component({
    selector: 'entrance-page',
    standalone: true,
    imports: [Header, Footer],
    templateUrl: './entrance-page.component.html',
    styleUrl: './entrance-page.component.sass'
  })

  export class EntrancePage {}