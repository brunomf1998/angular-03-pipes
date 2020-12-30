import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Capitán América';
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
  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 3000);
  });
  date: Date = new Date();
  language = 'es';
  name2 = 'bRuNo mUñOz fEiJóO';
  videoUrl = 'https://www.youtube.com/embed/eVTXPUF4Oz4';
  activate = true;
}
