import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get('http://localhost:3000/ws/articles').subscribe();
  }

  save() {
    super.save();
    console.log('coucou je suis http');
  }
}
