import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About us';
  age: number;
  info = { email: 'q@codium.co' };
  logo = './assets/images/logo.jpg';
  imgWidth = 300;
  isShow = false;
  users = ['John', 'Mary', 'Bob']
  courses = [
    { name: 'PHP', price: 200},
    { name: 'Angular', price: 300},
    { name: 'Reac', price: 400},
  ];
  myColor = 'yellow';
  isActive = false;

  constructor() {
    this.age = 30;
   }

  ngOnInit(): void {
    this.title = 'About';  // ทำครั้งเดียวนะ
  }

  go() {
    // alert('Hello Angular');
    this.title = 'About Q-Electronics';
    this.imgWidth = 600;
    // this.isShow = true;
    this.isShow = !this.isShow;
    this.myColor = 'red';
    this.isActive = true;
  }

}
