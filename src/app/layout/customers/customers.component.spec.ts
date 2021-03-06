import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './blank-page.component';

describe('BlankPageComponent', () => {
    let component: CustomersComponent;
    let fixture: ComponentFixture<CustomersComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CustomersComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
