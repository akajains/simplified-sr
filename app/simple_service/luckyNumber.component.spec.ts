import {TestBed} from '@angular/core/testing'
import {LuckyNumber} from './luckyNumber.component'
//import {LuckyNumberService} from './luckyNumber.service'

import { By }              from '@angular/platform-browser';
//import { DebugElement }    from '@angular/core';

describe ('Test simple service',()=>{
let fixture, comp, de, el;

    beforeEach(()=>{        

        TestBed.configureTestingModule({
         
            declarations:[LuckyNumber]
        });

        fixture = TestBed.createComponent(LuckyNumber);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h2'));
        el = de.nativeElement;
        

    }); //beforeEach

    it('should have been declared',()=>{            //Assert if the component under test is defined without errors
        expect(comp).toBeDefined();
    });

    it ('should have original title',()=>{
        fixture.detectChanges();                    // Require to detect changes 
        expect(el.textContent).toContain('Simple');
    });

    it('should have new updated title',()=>{
        comp.title = 'test title';                  // Change title property of component
        fixture.detectChanges();
        expect(el.textContent).toContain('test title');
    });


}); //describe