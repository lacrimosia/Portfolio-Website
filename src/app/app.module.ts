import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { KeysPipe } from './keys.pipe';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { InteractivesComponent } from './interactives/interactives.component';
import { HomeComponent } from './home/home.component';
import { WipsComponent } from './wips/wips.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ZoomComponent } from './zoom/zoom.component';


const appRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'app', component: InteractivesComponent },
  { path: 'wips', component: WipsComponent },
  { path: 'graphics', component: GraphicsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InteractivesComponent,
    HomeComponent,
    WipsComponent,
    GraphicsComponent,
    KeysPipe,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
