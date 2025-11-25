import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {   // <-- Rename from Home to HomeComponent
  imageUrl = 'assets/298612.jpg';

  openMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '250px';
  }

  closeMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '0';
  }
}

