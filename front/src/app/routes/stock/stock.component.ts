import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles = [
    { name: 'Tournevis', price: 12.34, qty: 4 },
    { name: 'Marteau', price: 12.34, qty: 14 },
    { name: 'Clous', price: 12.34, qty: 24 },
    { name: 'Pince', price: 12.34, qty: 41 },
    { name: 'Scie', price: 12.34, qty: 45 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
