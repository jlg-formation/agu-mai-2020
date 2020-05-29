import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(this.getArticles());

  constructor() {
    this.articles$.subscribe((articles) => {
      localStorage.setItem('articles', JSON.stringify(articles));
    });
  }

  create(article: Article) {
    // debugger;
    console.log('article: ', article);
    this.articles$.value.push(article);
    this.articles$.next(this.articles$.value);
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    const articles = JSON.parse(str);
    return articles;
  }

  delete(selectedArticles: Article[]) {
    const articles = this.articles$.value;
    for (const art of selectedArticles) {
      const index = articles.findIndex((a) => a === art);
      articles.splice(index, 1);
    }
    this.articles$.next(articles);
  }
}
