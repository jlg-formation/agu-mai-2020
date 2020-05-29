import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { WidgetModule } from 'src/app/widget/widget.module';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockComponent],
      imports: [WidgetModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete an article', fakeAsync(() => {
    const articleService = fixture.debugElement.injector.get(ArticleService);
    articleService.articles$.next([]);
    // debugger;
    const article = {
      name: 'TestOutilAEffacer',
      price: 2.34,
      qty: 1,
    } as Article;
    articleService.create(article);
    tick();
    const articles = articleService.articles$.value;
    const selectedArticle = articles.find((a) => a.name === article.name);
    expect(selectedArticle).toBeTruthy();
    component.selectedArticles = [selectedArticle];
    component.delete();
    tick();
    const result = articleService.articles$.value.find(
      (a) => a.name === article.name
    );
    expect(result).toBeUndefined();
  }));

  it('should select and unselect an item', fakeAsync(() => {
    const articleService = fixture.debugElement.injector.get(ArticleService);
    articleService.articles$.next([
      {
        name: 'TestOutil a selectionner',
        price: 2.34,
        qty: 1,
      },
    ]);
    fixture.detectChanges();
    // debugger;
    const compiled = fixture.nativeElement;
    const cell = compiled.querySelector('.body .row .cell.name') as HTMLElement;
    expect(cell).toBeTruthy();
    cell.click();
    const row = cell.parentElement;
    const isSelected = row.classList.contains('selected');
    expect(isSelected).toBeTrue();
    cell.click();
    const isSelected2 = row.classList.contains('selected');
    expect(isSelected2).toBeFalse();
  }));
});
