import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles: Article[] = [
    { name: 'Tournevis', price: 12.34, qty: 4 },
    { name: 'Marteau', price: 12.34, qty: 14 },
    { name: 'Clous', price: 12.34, qty: 24 },
    { name: 'Pince', price: 12.34, qty: 41 },
    { name: 'Scie', price: 12.34, qty: 23 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
