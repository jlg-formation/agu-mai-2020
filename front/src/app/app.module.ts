import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { StockComponent } from './routes/stock/stock.component';
import { CreateComponent } from './routes/create/create.component';
import { WidgetModule } from './widget/widget.module';
import { ArticleService } from './services/article.service';
import { HttpArticleService } from './services/http-article.service';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent,
    StockComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    WidgetModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    {
      provide: ArticleService,
      useClass: HttpArticleService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
