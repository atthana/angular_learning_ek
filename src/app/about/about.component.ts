import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About us';
  age: number;
  info = {
    email: 'q@codium.co'
  }

  constructor() {
    this.age = 30;
   }

  ngOnInit(): void {
  }

}
