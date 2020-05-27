import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 12.34, qty: 4 },
    { name: 'Marteau', price: 12.34, qty: 14 },
    { name: 'Clous', price: 12.34, qty: 24 },
    { name: 'Pince', price: 12.34, qty: 41 },
    { name: 'Scie', price: 12.34, qty: 23 },
  ];

  constructor() {}

  create(article: Article) {
    console.log('article: ', article);
    this.articles.push(article);
  }
}
