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
var router_1 = require("@angular/router");
var auth0 = require("nativescript-auth0");
var application = require("application");
var appSettings = require("application-settings");
var Auth0_login_service_1 = require("../shared/service/Auth0-login.service");
var Auth0LoginComponent = (function () {
    function Auth0LoginComponent(router, auth0LoginService) {
        this.router = router;
        this.auth0LoginService = auth0LoginService;
        if (!this.auth0LoginService.isLoggedIn) {
            this.doLogin();
        }
        else {
            this.gotonextpage();
        }
        // // Check to see if the user is logged in
        // if(!appSettings.hasKey("auth0Token")){
        //     console.log("no token stored.");
        //     // this.router.navigate(["/ping"]);
        //
        //     this.doLogin();
        //
        // }else{
        //     console.log("has token stored");
        //     // this.gotonextpage();
        //
        //
        //     //Deserialzise the saved user
        //     var tokenData = JSON.parse(appSettings.getString("auth0Token"));
        //     console.log("token begain: "+ appSettings.getString("auth0Token")+ " token end.");
        //
        //
        //     //Check if it's expired
        //     // if(auth0.isTokenExpired(tokenData.token.idToken)){
        //         if(auth0.isTokenExpired(tokenData.idToken)){
        //         //Make them log in again
        //         console.log("token expired, login again.");
        //
        //         this.doLogin();
        //     }else{
        //         //All good, navigate to your start page
        //         console.log("has token stored, go to next page");
        //
        //         this.gotonextpage();
        //     }
        // }
    }
    Auth0LoginComponent.prototype.doLogin = function () {
        //login with service.
        this.auth0LoginService.loginAndTo("/ping");
        //or: this.auth0LoginService.login ();
        //login by using plugin directly.
        // console.log("doLoging start...");
        //
        // if(this.auth0LoginService.isLoggedIn){
        //     this.router.navigate(["/ping"]);
        // }
        // else {
        //
        //     auth0.show().then( (args) =>{
        //         console.log(args.profile);
        //         console.log(args.token);
        //         // appSettings.setString("auth0Token", JSON.stringify(args));
        //
        //         this.router.navigate(["/ping"]);
        //
        //         console.log("login ok 1 !");
        //
        //
        //         // this.loginService.logoff();
        //         // this.router.navigate(["/groceries"]);
        //         // this.router.navigate(["/"]);
        //
        //
        //         // this.gotonextpage();
        //     }, (error) => {
        //         alert(error);
        //     });
        //
        // }
        //
        //
        //
        // console.log("login ok 2!");
        // // this.gotonextpage();
    };
    Auth0LoginComponent.prototype.doLogout = function () {
        appSettings.remove("auth0Token");
        appSettings.remove("auth0UserData");
        this.router.navigate(["/ping"]);
    };
    Auth0LoginComponent.prototype.gotonextpage = function () {
        this.router.navigate(["/ping"]);
        // this.router.navigate(["/groceries"]);
        // this.router.navigate(["/"]);
    };
    Auth0LoginComponent.prototype.goToHome = function () {
        this.router.navigate(["/"]);
    };
    Auth0LoginComponent.prototype.showToken = function () {
        this.currentToken = appSettings.getString("auth0Token");
        console.log(this.currentToken);
        console.log("Test console function");
    };
    Auth0LoginComponent.prototype.test1 = function () {
    };
    Auth0LoginComponent.prototype.test2 = function () {
        this.test1();
        this.gotonextpage();
    };
    Auth0LoginComponent = __decorate([
        core_1.Component({
            selector: "my-auth0-login",
            templateUrl: "auth0-login/auth0-login.component.html",
            styleUrls: ["auth0-login/auth0-login-common.css", "auth0-login/auth0-login.component.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, Auth0_login_service_1.Auth0LoginService])
    ], Auth0LoginComponent);
    return Auth0LoginComponent;
}());
exports.Auth0LoginComponent = Auth0LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aDAtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFNdkMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDMUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLElBQVksV0FBVyxXQUFNLHNCQUFzQixDQUFDLENBQUE7QUFDcEQsb0NBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFReEU7SUFLSSw2QkFBb0IsTUFBYSxFQUNiLGlCQUFtQztRQURuQyxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUduRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDdkIsQ0FBQztRQUdELDJDQUEyQztRQUMzQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLDBDQUEwQztRQUMxQyxFQUFFO1FBQ0Ysc0JBQXNCO1FBQ3RCLEVBQUU7UUFDRixTQUFTO1FBQ1QsdUNBQXVDO1FBQ3ZDLDhCQUE4QjtRQUM5QixFQUFFO1FBQ0YsRUFBRTtRQUNGLG9DQUFvQztRQUNwQyx1RUFBdUU7UUFDdkUseUZBQXlGO1FBQ3pGLEVBQUU7UUFDRixFQUFFO1FBQ0YsOEJBQThCO1FBQzlCLDREQUE0RDtRQUM1RCx1REFBdUQ7UUFDdkQsbUNBQW1DO1FBQ25DLHNEQUFzRDtRQUN0RCxFQUFFO1FBQ0YsMEJBQTBCO1FBQzFCLGFBQWE7UUFDYixrREFBa0Q7UUFDbEQsNERBQTREO1FBQzVELEVBQUU7UUFDRiwrQkFBK0I7UUFDL0IsUUFBUTtRQUNSLElBQUk7SUFFUixDQUFDO0lBR00scUNBQU8sR0FBZDtRQUVJLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLHNDQUFzQztRQUd0QyxpQ0FBaUM7UUFDakMsb0NBQW9DO1FBQ3BDLEVBQUU7UUFDRix5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLElBQUk7UUFDSixTQUFTO1FBQ1QsRUFBRTtRQUNGLG9DQUFvQztRQUNwQyxxQ0FBcUM7UUFDckMsbUNBQW1DO1FBQ25DLHdFQUF3RTtRQUN4RSxFQUFFO1FBQ0YsMkNBQTJDO1FBQzNDLEVBQUU7UUFDRix1Q0FBdUM7UUFDdkMsRUFBRTtRQUNGLEVBQUU7UUFDRix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDBDQUEwQztRQUMxQyxFQUFFO1FBQ0YsRUFBRTtRQUNGLGtDQUFrQztRQUNsQyxzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLFVBQVU7UUFDVixFQUFFO1FBQ0YsSUFBSTtRQUNKLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLDhCQUE4QjtRQUM5QiwwQkFBMEI7SUFHOUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLHdDQUF3QztRQUN4QywrQkFBK0I7SUFFbkMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFaEMsQ0FBQztJQUVNLHVDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFySUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLHVDQUF1QyxDQUFDO1NBQzdGLENBQUM7OzJCQUFBO0lBa0lGLDBCQUFDO0FBQUQsQ0FBQyxBQWpJRCxJQWlJQztBQWpJWSwyQkFBbUIsc0JBaUkvQixDQUFBIn0=