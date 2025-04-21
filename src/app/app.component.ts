import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntrancePage } from './pages/entrance-page/entrance-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EntrancePage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'my-angular-portfolio';
}
