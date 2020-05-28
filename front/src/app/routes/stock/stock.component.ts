import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  selectedArticles: Article[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  select(evt: MouseEvent, article: Article) {
    console.log('evt: ', evt);
    console.log('select');
    const elt = evt.target as HTMLElement;
    const row = elt.parentElement;
    console.log('row: ', row);
    if (row.classList.contains('selected')) {
      row.classList.remove('selected');
      const index = this.selectedArticles.findIndex((a) => a === article);
      this.selectedArticles.splice(index, 1);
    } else {
      row.classList.add('selected');
      this.selectedArticles.push(article);
    }
    console.log('this.selectedArticles: ', this.selectedArticles);
  }

  async delete() {
    console.log('delete');
    await this.articleService.delete(this.selectedArticles);
    this.selectedArticles.length = 0;
  }
}
