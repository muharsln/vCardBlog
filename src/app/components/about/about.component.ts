import { CommonModule } from '@angular/common';
import {} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  skills: string[] = [
    "C#","Angular","Docker","MsSql","TypeScript","Jenkins","Onion Architecture","Clean Code","CQRS Pattern","OOP"
  ];
  constructor(private titleService:Title){}

  ngOnInit() {
    this.titleService.setTitle("Muhammed Arslan | About");
  }

}