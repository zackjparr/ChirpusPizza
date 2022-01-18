import { Component } from '@angular/core';
import { menuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : string = 'Chirpus Pizza';
  item : menuItem[] = 
  [new menuItem("Chicken Fingers", "dinner", 12.99),
new menuItem("Pizza", "dinner", 11.99),
new menuItem("Wings", "sides", 8.99),
new menuItem("Breadsticks", "sides", 4.99),
new menuItem("Caesar Salad", "salads", 5.99),
new menuItem("Cinnamon Roll", "dessert", 8.99)]
}