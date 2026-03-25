import { Slide } from '@/interfaces/slide';
import { Component } from '@angular/core';
import { HERO_SLIDES } from '@datas/hero-slides';
import { HeroSliderComponent } from "@components/homeheroslider/homeheroslider.component";
import { SERVICE_ITEMS } from '@/datas/service-item';
import { CardItem } from '@/interfaces/cardItem';
import { CardGridComponent } from '@/shared/components/card-grid/card-grid.component';

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent, CardGridComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroSlides: Slide[] = HERO_SLIDES;
  serviceItems: CardItem[] = SERVICE_ITEMS;
}
