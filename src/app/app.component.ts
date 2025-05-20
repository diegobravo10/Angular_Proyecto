import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaupsComponent } from "./holaups/holaups.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HolaupsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardb';
}
