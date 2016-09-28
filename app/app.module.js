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
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var shared_1 = require("./shared");
var login_module_1 = require("./login/login.module");
var groceries_module_1 = require("./groceries/groceries.module");
var ping_module_1 = require("./ping/ping.module");
var module_a_module_1 = require("./module-a/module-a.module");
var shared_module_1 = require("./shared/shared.module");
var auth0_login_module_1 = require("./auth0-login/auth0-login.module");
// import {Auth0LoginService} from "./shared/Auth0-login.service";
shared_1.setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                shared_1.BackendService,
                shared_1.LoginService,
                // Auth0LoginService,
                app_routing_1.authProviders
            ],
            imports: [
                shared_module_1.SharedModule,
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes),
                auth0_login_module_1.Auth0LoginModule,
                login_module_1.LoginModule,
                groceries_module_1.GroceriesModule,
                ping_module_1.PingModule,
                module_a_module_1.ModuleAModule
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQUFtQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ25FLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RSw0QkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQWlFLFVBQVUsQ0FBQyxDQUFBO0FBRTVFLDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQy9ELDRCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLGdDQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELG1DQUErQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2xFLGtFQUFrRTtBQUVsRSwyQkFBa0IsRUFBRSxDQUFDO0FBbUNyQjtJQUFBO0lBQXlCLENBQUM7SUFqQzFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsU0FBUyxFQUFFO2dCQUNULHVCQUFjO2dCQUNkLHFCQUFZO2dCQUVaLHFCQUFxQjtnQkFHckIsMkJBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCw0QkFBWTtnQkFJWiw2QkFBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7Z0JBRTNDLHFDQUFnQjtnQkFFaEIsMEJBQVc7Z0JBQ1gsa0NBQWU7Z0JBRWYsd0JBQVU7Z0JBRVYsK0JBQWE7YUFDZDtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEifQ==