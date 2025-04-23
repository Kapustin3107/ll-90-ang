import { Component } from '@angular/core';
import { Header } from '../../components/header/header.component'
import { Footer } from '../../components/footer/footer.component'
import { Sidebar } from '../../components/sidebar/sidebar.component'
import { Content } from '../../components/content/content.component'

@Component({
    selector: 'entrance-page',
    standalone: true,
    imports: [Header, Footer, Sidebar, Content],
    templateUrl: './entrance-page.component.html',
    styleUrl: './entrance-page.component.sass'
  })

  export class EntrancePage {}