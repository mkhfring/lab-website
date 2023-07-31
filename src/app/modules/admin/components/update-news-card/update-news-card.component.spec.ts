import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsCardComponent } from './update-news-card.component';

describe('UpdateNewsCardComponent', () => {
  let component: UpdateNewsCardComponent;
  let fixture: ComponentFixture<UpdateNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNewsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
