import { Component, Input, signal } from '@angular/core';
import { Slide } from '@/interfaces/slide';
import AOS from 'aos';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './homeheroslider.component.html',
  styleUrls: ['./homeheroslider.component.css'],
})
export class HeroSliderComponent {
    @Input() slides: Slide[] = [];

  activeIndex = signal(0);

  ngOnInit() {
    AOS.init({
      once: false,     // ⭐ allow re-animation
      duration: 1000,
      easing: 'ease-out-cubic'
    });

    // Auto-slide (optional)
    setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.activeIndex.set(
      (this.activeIndex() + 1) % this.slides.length
    );

    setTimeout(() => AOS.refresh(), 50); // ⭐ IMPORTANT
  }
}