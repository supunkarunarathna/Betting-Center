import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingMainPageWithHeaderFooterComponent } from './betting-main-page-with-header-footer.component';

describe('BettingMainPageWithHeaderFooterComponent', () => {
  let component: BettingMainPageWithHeaderFooterComponent;
  let fixture: ComponentFixture<BettingMainPageWithHeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingMainPageWithHeaderFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingMainPageWithHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
