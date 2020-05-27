import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = this.getArticles();

  constructor() {}

  create(article: Article) {
    console.log('article: ', article);
    this.articles.push(article);
    this.save();
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    const articles = JSON.parse(str);
    return articles;
  }
}
