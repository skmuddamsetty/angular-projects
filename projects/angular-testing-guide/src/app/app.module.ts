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
import { TwainQuoteComponent } from './twain-quote/twain-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    LightSwitchComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent,
    HeroDetailComponent,
    AboutComponent,
    TwainQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
