import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BettingMainPageWithHeaderFooterComponent } from './View/betting-main-page-with-header-footer/betting-main-page-with-header-footer.component';

const routes: Routes = [
  { path: '', component: BettingMainPageWithHeaderFooterComponent, pathMatch: 'full' },
  {
    path: 'betting-main-page-with-header-footer',
    component: BettingMainPageWithHeaderFooterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
