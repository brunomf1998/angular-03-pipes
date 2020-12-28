import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Bruno';
  characters: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI = Math.PI;
  percent = 0.234;
  salary = 1234.5;
  hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'First',
      number: 20
    }
  };
}
