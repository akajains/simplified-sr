"use strict";
var testing_1 = require("@angular/core/testing");
var luckyNumber_component_1 = require("./luckyNumber.component");
//import {LuckyNumberService} from './luckyNumber.service'
var platform_browser_1 = require("@angular/platform-browser");
//import { DebugElement }    from '@angular/core';
describe('Test simple service', function () {
    var fixture, comp, de, el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [luckyNumber_component_1.LuckyNumber]
        });
        fixture = testing_1.TestBed.createComponent(luckyNumber_component_1.LuckyNumber);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h2'));
        el = de.nativeElement;
    }); //beforeEach
    it('should have been declared', function () {
        expect(comp).toBeDefined();
    });
    it('should have original title', function () {
        fixture.detectChanges(); // Require to detect changes 
        expect(el.textContent).toContain('Simple');
    });
    it('should have new updated title', function () {
        comp.title = 'test title'; // Change title property of component
        fixture.detectChanges();
        expect(el.textContent).toContain('test title');
    });
}); //describe
