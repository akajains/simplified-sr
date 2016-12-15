import {Injectable} from '@angular/core'

@Injectable()
export class LuckyNumberService{

    public getLuckyNumber(){
        return Math.random();
    }

}