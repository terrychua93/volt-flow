import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_ITEMS } from '@datas/navItems';
import { NavItem } from '@/interfaces/navItem';
import { TopInfobar } from '../topinfobar/topinfobar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ TopInfobar, CommonModule ],
  templateUrl: './header.html',
})
export class HeaderComponent {
  navItems: NavItem[] = NAV_ITEMS;

  menuOpen = signal(false);          // mobile drawer open/close
  showNavbar = signal(true);         // show/hide navbar
  activeSection = signal('home');    // active section
  closing = signal(false);

  private lastY = 0;

  // 🔥 Hide/show navbar on scroll
  @HostListener('window:scroll')
  onScroll() {
    const currentY = window.scrollY;
    this.showNavbar.set(currentY < this.lastY || currentY < 100);
    this.lastY = currentY;

    // Update active section
    this.navItems.forEach((item) => {
      const el = document.getElementById(item.id!);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection.set(item.id!);
        }
      }
    });
  }

  scrollTo(id?: string) {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen.set(false);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openMenu() {
    this.menuOpen.set(true);
  }

  closeMenu() {
    this.closing.set(true);

    setTimeout(() => {
      this.menuOpen.set(false);
      this.closing.set(false);
    }, 300); // must match transition duration
  }
}