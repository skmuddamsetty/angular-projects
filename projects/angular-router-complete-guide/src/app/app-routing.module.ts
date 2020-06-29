import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*
  SPOTLIGHT ON PATHMATCH
  Technically, pathMatch = 'full' results in a route hit when the remaining, unmatched segments of the URL match ''. In this example, the redirect is in a top level route so the remaining URL and the entire URL are the same thing.

  The other possible pathMatch value is 'prefix' which tells the router to match the redirect route when the remaining URL begins with the redirect route's prefix path. This doesn't apply to this sample app because if the pathMatch value were 'prefix', every URL would match ''.

  Try setting it to 'prefix' and clicking the Go to sidekicks button. Since that's a bad URL, you should see the "Page not found" page. Instead, you're still on the "Heroes" page. Enter a bad URL in the browser address bar. You're instantly re-routed to /heroes. Every URL, good or bad, that falls through to this route definition is a match.

  The default route should redirect to the HeroListComponent only when the entire url is ''. Remember to restore the redirect to pathMatch = 'full'.

  Learn more in Victor Savkin's [post on redirects](http://vsavkin.tumblr.com/post/146722301646/ angular-router-empty-paths-componentless-routes).
*/
const routes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  // Registering the RouterModule.forRoot() using imports array makes the Router service available everywhere in the application.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
