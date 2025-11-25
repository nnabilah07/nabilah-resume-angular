import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  openMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '250px';
  }

  closeMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '0';
  }
}
