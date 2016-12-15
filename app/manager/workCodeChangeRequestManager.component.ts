import {Component, OnInit} from '@angular/core'
import {EmployeeService} from '../shared/service/employee.service'
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@Component({
    moduleId: module.id,    
    selector: 'workCode',
    templateUrl: "workCodeChangeRequestManager.html"

})

export class WorkCode implements OnInit{
    private title:string ="Workcode change request";
    private employeeSelected:boolean=false;
    private searchTerm:string ="";
    private empMdl:any = {};


    public countries:string[] = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                        "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                        "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
                        "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                        "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                        "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                        "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","United States", "Vatican City"];

    constructor(private empSvc:EmployeeService){        

    }

    submitWorkCodeChanges(formData){
        console.log(formData.value);
    }

    validateWorkCode(){
        console.log('validateWorkCode');
    }

  diagnostic() { return JSON.stringify(this.empMdl); }   

    findEmployee(){
        console.log("findEmployee***");
        this.empSvc.getEmployee()
            .subscribe(
                (data:any[]) => this.setEmployee(data),
                error => this.handleError(error)
                )
    }

    setEmployee(data){
        if(this.searchTerm==data.id)
        {         
          this.empMdl = data;
          this.empMdl.fullName = data.firstName + " " + data.surname;
          this.employeeSelected=true;   
        }
        else 
            this.employeeSelected=false;
    }

    handleError(error){
        console.log(error)
        this.employeeSelected=false;    
    }

    ngOnInit(){

    }
}