import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BettingMainPageWithHeaderFooterComponent } from './View/betting-main-page-with-header-footer/betting-main-page-with-header-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './View/test/test.component';
import { LoginComponent } from './View/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BettingMainPageWithHeaderFooterComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
