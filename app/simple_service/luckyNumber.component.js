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
var luckyNumber_service_1 = require("./luckyNumber.service");
var LuckyNumber = (function () {
    function LuckyNumber(luckyNumberService) {
        this.luckyNumberService = luckyNumberService;
        this.title = "Simple Service [without Http]";
        this.setLuckyNumber();
    }
    LuckyNumber.prototype.setLuckyNumber = function () {
        this.luckyNumber = this.luckyNumberService.getLuckyNumber();
    };
    return LuckyNumber;
}());
LuckyNumber = __decorate([
    core_1.Component({
        providers: [luckyNumber_service_1.LuckyNumberService],
        selector: 'ng-lucky-number',
        template: '<div><h2>{{title}}</h2><p>your lucky number is {{luckyNumber}}</p></div>'
    }),
    __metadata("design:paramtypes", [luckyNumber_service_1.LuckyNumberService])
], LuckyNumber);
exports.LuckyNumber = LuckyNumber;
//# sourceMappingURL=luckyNumber.component.js.map