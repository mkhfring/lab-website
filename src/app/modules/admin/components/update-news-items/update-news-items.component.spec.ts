import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsItemsComponent } from './update-news-items.component';

describe('UpdateNewsItemsComponent', () => {
  let component: UpdateNewsItemsComponent;
  let fixture: ComponentFixture<UpdateNewsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNewsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNewsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
