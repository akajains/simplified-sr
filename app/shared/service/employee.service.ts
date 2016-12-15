import {Injectable, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Rx'
import {Response, Http} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EmployeeService implements OnInit{

    private serviceurl = "app/shared/testDataEmployee.json";
    constructor (private http:Http){
        console.log('employee service constructor');
    }

    getEmployee():Observable<any>{
      return  this.http.get(this.serviceurl)
        .map((resp:Response)=><any>resp.json())
        .catch(this.handleError)
      //  .do((resp: Response) => console.log(resp));

    }

     private handleError(error:Response){
        console.log(error || 'server error');
        return Observable.throw(error || 'Server error');
    }

    ngOnInit(){
        console.log('employee service init');
    }




}