import {Component} from '@angular/core'
import {LuckyNumberService} from './luckyNumber.service'

@Component({
    providers:[LuckyNumberService],
    selector: 'ng-lucky-number',
    template: '<div><h2>{{title}}</h2><p>your lucky number is {{luckyNumber}}</p></div>'
})

export class LuckyNumber{
    private luckyNumber:number;
    private title:string = "Simple Service [without Http]";
    
    constructor(private luckyNumberService: LuckyNumberService){this.setLuckyNumber();}
    

    public setLuckyNumber(){
        this.luckyNumber = this.luckyNumberService.getLuckyNumber();
    }

}