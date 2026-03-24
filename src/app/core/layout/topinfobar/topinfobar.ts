import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-topinfobar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topinfobar.html',
  styleUrls: ['./topinfobar.css']
})
export class TopInfobar implements OnInit {
  address = '6391 Elgin St. Celina, Delaware 10299';
  phone = '(629) 555-0129';
  email = 'info@example.com';
  phoneLink = this.phone.replace(/[()\s-]/g, '');

  // Signal to track whether TopInfobar should show
  show = signal(true);

  ngOnInit(): void {
    // Only access window if it exists (browser environment)
    if (typeof window !== 'undefined') {
      // Set initial state
      this.show.set(window.innerWidth >= 768);

      // Update on resize
      window.addEventListener('resize', () => {
        this.show.set(window.innerWidth >= 768);
      });
    }
  }
}