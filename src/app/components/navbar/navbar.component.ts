import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  activeTab: string = 'about'; // Varsayılan olarak 'home' sekmesi aktif

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
