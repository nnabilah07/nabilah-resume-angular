import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.html',
  styleUrls: ['./hobbies.css']
})
export class HobbiesComponent {
  openMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '250px';
  }

  closeMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '0';
  }
}
