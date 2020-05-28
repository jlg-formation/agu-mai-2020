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
    this.http.get<Article[]>('/ws/articles').subscribe({
      next: (articles) => {
        this.articles = articles;
        this.save();
      },
      error: (err) => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  save() {
    super.save();
    console.log('coucou je suis http');
  }

  delete(selectedArticles: Article[]) {
    const ids = selectedArticles.map((a) => a.id);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };
    (async () => {
      try {
        await this.http.delete('/ws/articles-bulk', options).toPromise();
        this.refresh();
      } catch (err) {
        console.log('err: ', err);
      }
    })();
  }
}
