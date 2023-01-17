import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    CrisisDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot([
        {path: 'crisis-list', component: CrisisListComponent},
        {path: 'crisis-details', component: CrisisDetailsComponent},
        {path: '', redirectTo: '/crisis-list', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
       ]),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
