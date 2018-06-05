import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueComponentComponent } from './dialogue-component.component';

describe('DialogueComponentComponent', () => {
  let component: DialogueComponentComponent;
  let fixture: ComponentFixture<DialogueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
