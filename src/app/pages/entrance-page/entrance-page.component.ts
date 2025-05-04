import { Component } from '@angular/core';
import { Header } from '../../components/header/header.component'
import { Footer } from '../../components/footer/footer.component'
import { Sidebar } from '../../components/sidebar/sidebar.component'
import { Content } from '../../components/content/content.component'
import { Navigation } from '../../components/navigation/navigation.component'

@Component({
    selector: 'entrance-page',
    standalone: true,
    imports: [Header, Footer, Sidebar, Content, Navigation],
    templateUrl: './entrance-page.component.html',
    styleUrl: './entrance-page.component.sass'
  })

  export class EntrancePage {}