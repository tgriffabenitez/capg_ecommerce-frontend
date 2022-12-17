import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartHistoryComponent } from './shopping-cart-history.component';

describe('ShoppingCartHistoryComponent', () => {
  let component: ShoppingCartHistoryComponent;
  let fixture: ComponentFixture<ShoppingCartHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
