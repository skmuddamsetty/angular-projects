import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './banner/banner.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AboutComponent } from './about/about.component';
import { TwainComponent } from './twain-quote/twain-quote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LightSwitchComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent,
    HeroDetailComponent,
    AboutComponent,
    TwainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
