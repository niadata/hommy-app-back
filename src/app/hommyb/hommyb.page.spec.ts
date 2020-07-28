import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HommybPage } from './hommyb.page';

describe('HommybPage', () => {
  let component: HommybPage;
  let fixture: ComponentFixture<HommybPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HommybPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HommybPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
