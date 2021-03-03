import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language: string;

  constructor() { }

  ngOnInit(): void {
    this.language =localStorage.getItem('language') || 'en';
  
  }

  changeLanguage(language:string): void {
    localStorage.setItem("language",language);
    window.location.reload();


  }

}
