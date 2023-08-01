import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsItemsComponent } from './add-news-items.component';

describe('AddNewsItemsComponent', () => {
  let component: AddNewsItemsComponent;
  let fixture: ComponentFixture<AddNewsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
