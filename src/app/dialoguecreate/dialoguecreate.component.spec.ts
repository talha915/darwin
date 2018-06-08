import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguecreateComponent } from './dialoguecreate.component';

describe('DialoguecreateComponent', () => {
  let component: DialoguecreateComponent;
  let fixture: ComponentFixture<DialoguecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoguecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
