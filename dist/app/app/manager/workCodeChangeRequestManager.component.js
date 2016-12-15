"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("../shared/service/employee.service");
var WorkCode = (function () {
    function WorkCode(empSvc) {
        this.empSvc = empSvc;
        this.title = "Workcode change request";
        this.employeeSelected = false;
        this.searchTerm = "";
        this.empMdl = {};
    }
    WorkCode.prototype.submitWorkCodeChanges = function (formData) {
        console.log(formData.value);
    };
    WorkCode.prototype.validateWorkCode = function () {
        console.log('validateWorkCode');
    };
    WorkCode.prototype.diagnostic = function () { return JSON.stringify(this.empMdl); };
    WorkCode.prototype.findEmployee = function () {
        var _this = this;
        console.log("findEmployee***");
        this.empSvc.getEmployee()
            .subscribe(function (data) { return _this.setEmployee(data); }, function (error) { return _this.handleError(error); });
    };
    WorkCode.prototype.setEmployee = function (data) {
        if (this.searchTerm == data.id) {
            this.empMdl = data;
            this.empMdl.fullName = data.firstName + " " + data.surname;
            this.employeeSelected = true;
        }
        else
            this.employeeSelected = false;
    };
    WorkCode.prototype.handleError = function (error) {
        console.log(error);
        this.employeeSelected = false;
    };
    WorkCode.prototype.ngOnInit = function () {
    };
    return WorkCode;
}());
WorkCode = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'workCode',
        templateUrl: "workCodeChangeRequestManager.html"
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], WorkCode);
exports.WorkCode = WorkCode;
//# sourceMappingURL=workCodeChangeRequestManager.component.js.map