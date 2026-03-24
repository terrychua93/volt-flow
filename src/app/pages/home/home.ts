import { Slide } from '@/interfaces/slide';
import { Component } from '@angular/core';
import { HERO_SLIDES } from '@datas/hero-slides';
import { HeroSliderComponent } from "@components/homeheroslider/homeheroslider.component";

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroSlides: Slide[] = HERO_SLIDES;
}
