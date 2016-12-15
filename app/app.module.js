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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var workCodeChangeRequestManager_component_1 = require("./manager/workCodeChangeRequestManager.component");
var header_component_1 = require("./shared/header/header.component");
var footer_component_1 = require("./shared/footer/footer.component");
var employee_service_1 = require("./shared/service/employee.service");
var ng2_auto_complete_1 = require("ng2-auto-complete");
var appRoutes = [
    { path: 'work-cr/:id', component: workCodeChangeRequestManager_component_1.WorkCode },
    { path: '', component: app_component_1.AppComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, forms_1.FormsModule, http_1.JsonpModule, ng2_auto_complete_1.Ng2AutoCompleteModule],
        declarations: [app_component_1.AppComponent, workCodeChangeRequestManager_component_1.WorkCode, header_component_1.Header, footer_component_1.Footer],
        providers: [employee_service_1.EmployeeService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map