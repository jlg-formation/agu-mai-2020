import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  constructor() { }

  create(article: Article) {
    console.log('article: ', article);

  }
}
