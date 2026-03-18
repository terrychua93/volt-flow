import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('volt-flow');
  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }
}
