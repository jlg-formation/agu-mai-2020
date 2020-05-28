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

  async refresh() {
    try {
      const articles = await this.http
        .get<Article[]>('/ws/articles')
        .toPromise();
      this.articles = articles;
      this.save();
    } catch (err) {
      console.error('err: ', err);
    }
  }

  save() {
    super.save();
    console.log('coucou je suis http');
  }

  async delete(selectedArticles: Article[]) {
    const ids = selectedArticles.map((a) => a.id);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };

    try {
      await this.http.delete('/ws/articles-bulk', options).toPromise();
      await this.refresh();
    } catch (err) {
      console.log('err: ', err);
    }
  }

  async create(article: Article) {
    try {
      super.create(article);
      await this.http.post('/ws/articles', article).toPromise();
    } catch (err) {
      console.log('err: ', err);
    }
  }
}
