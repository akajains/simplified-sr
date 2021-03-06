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
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.serviceurl = "app/shared/testDataEmployee.json";
        console.log('employee service constructor');
    }
    EmployeeService.prototype.getEmployee = function () {
        return this.http.get(this.serviceurl)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
        //  .do((resp: Response) => console.log(resp));
    };
    EmployeeService.prototype.handleError = function (error) {
        console.log(error || 'server error');
        return Rx_1.Observable.throw(error || 'Server error');
    };
    EmployeeService.prototype.ngOnInit = function () {
        console.log('employee service init');
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
