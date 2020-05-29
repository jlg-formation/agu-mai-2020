import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article service', this.http);
    this.refresh();
  }

  refresh() {
    return this.http.get<Article[]>('/ws/articles');
  }

  delete(selectedArticles: Article[]) {
    super.delete(selectedArticles);
    const ids = selectedArticles.map((a) => a.id);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };

    this.http.delete<void>('/ws/articles-bulk', options).subscribe({
      next: () => {
        this.refresh().subscribe({
          next: (articles) => this.articles$.next(articles),
          error: (err) => console.error('err', err),
        });
      },
      error: (err) => console.error('err', err),
    });
  }

  create(article: Article) {
    super.create(article);
    this.http.post('/ws/articles', article).subscribe({
      next: () => {
        this.refresh();
      },
      error: (err) => console.error('err', err),
    });
  }
}
