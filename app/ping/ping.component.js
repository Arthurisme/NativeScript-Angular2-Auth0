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
var http_1 = require('@angular/http');
require("rxjs/add/operator/map");
var auth0 = require("nativescript-auth0");
var application = require("application");
var navigate_service_1 = require("../shared/service/navigate.service");
var nshttp = require("http");
// import {NS_HTTP_PROVIDERS} from 'nativescript-angular/http';
// import {HeaderComponent} from "../header/header.component"
// import {alert, setHintColor, LoginService, User} from "../shared";
var config_1 = require("../config/config");
var PingComponent = (function () {
    function PingComponent(router, http, navigateService) {
        this.router = router;
        this.http = http;
        this.navigateService = navigateService;
        this.config = new config_1.Config();
        // API_URL:string = 'http://localhost:3001';
        this.messagePing = 'begin text';
        this.messageSecurityPing = 'begin text';
    }
    PingComponent.prototype.ngOnInit = function () {
    };
    PingComponent.prototype.ping = function () {
        var _this = this;
        this.messagePing = '';
        console.log("start ping");
        // let tokenAtLocal = appSettings.getString('auth0Token');
        // var tokenData = JSON.parse(appSettings.getString("auth0Token"));
        // console.log("tokenAtLocal");
        // console.log(tokenAtLocal);
        //Using  http @angular
        this.http.get(this.config.apiUrl + "/ping")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log("data origin:");
            console.log(data);
            console.log("data._body origin:");
            console.log(data.toString());
            _this.messagePing = data.toString();
            _this.messageLast = _this.messagePing;
            // this.messages =  ((JSON.parse(data)));
            // this.messages = JSON.parse(JSON.parse(JSON.stringify(data)));
            // this.messages = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            // this.messages =  (JSON.parse(JSON.stringify(data))._body);
            console.log("messageLast from http.get() :");
            console.log(_this.messageLast);
            // this.message =  data._body ;
        }, function (error) { return _this.messagePing = error._body; });
        //End Using  http @angular
        //Using ns http:
        // http.request({
        //     url: `${this.API_URL}/ping`,
        //     method: "GET"
        // }).then( (response) => {
        //
        //     let str = response.content.toString();
        //     console.log("result str:");
        //     console.log(str);
        //
        //
        //     this.message = str;
        //     this.messageORs=this.message;
        //     // this.message = "test message after ping.";
        //
        //
        // }, function (err) {
        //     console.log(err);
        // });
        //End Using ns http
    };
    PingComponent.prototype.securedPing = function () {
        var _this = this;
        this.messageSecurityPing = '';
        console.log("start ping");
        //Debug:
        //Get idToken from auth0Token:
        var tokenAtLocal = this.config.auth0TokenFromLocalStorage;
        console.log("tokenAtLocal");
        console.log(tokenAtLocal);
        var idTokenJson = this.config.idTokenJsonLocalStorage;
        console.log("idTokenJson");
        console.log(idTokenJson);
        //Using  http @angular
        this.http.get(this.config.apiUrl + "/secured/ping", { headers: this.config.authHeaderGet })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log("data origin:");
            console.log(data);
            console.log("data._body origin:");
            console.log(data.toString());
            _this.messageSecurityPing = data.toString();
            _this.messageLast = _this.messageSecurityPing;
            // this.messages =  ((JSON.parse(data)));
            // this.messages = JSON.parse(JSON.parse(JSON.stringify(data)));
            // this.messages = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            // this.messages =  (JSON.parse(JSON.stringify(data))._body);
            console.log("messageLast from http.get() :");
            console.log(_this.messageLast);
            // this.message =  data._body ;
        }, function (error) { return _this.messagePing = error._body; });
        //End Using  http @angular
        //@Using ns http:
        // this.messageSecurityPing = '';
        // console.log("start ping");
        // let tokenAtLocal = appSettings.getString('auth0Token');
        // var tokenData = JSON.parse(appSettings.getString("auth0Token"));
        // console.log("tokenAtLocal");
        // console.log(tokenAtLocal);
        // console.log("tokenData");
        // console.log(tokenData);
        //
        // let idTokenJson = tokenData.idToken;
        // console.log("idTokenJson");
        // console.log(idTokenJson);
        //
        //
        // let header = {'Authorization': 'Bearer ' + idTokenJson};
        // //or in some http:  headers: { "Content-Type": "application/json" },
        //
        //
        // nshttp.request({
        //     url: `${this.API_URL}/secured/ping`,
        //     method: "GET",
        //     headers: header
        //
        // }).then((response) => {
        //
        //     let str = response.content.toString();
        //     console.log("result str:");
        //     console.log(str);
        //
        //
        //     this.messageSecurityPing = str;
        //     this.messageLast = this.messageSecurityPing;
        //
        //     // this.message = "test message after ping.";
        //
        //
        // }, function (err) {
        //     console.log(err);
        // });
        //@End Using ns http
    };
    PingComponent = __decorate([
        core_1.Component({
            selector: "gr-ping",
            templateUrl: "ping/ping.component.html",
            styleUrls: ["ping/ping-common.css", "ping/ping.component.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, navigate_service_1.NavigateService])
    ], PingComponent);
    return PingComponent;
}());
exports.PingComponent = PingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUVqRCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFHL0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDMUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXpDLGlDQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBRW5FLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwrREFBK0Q7QUFDL0QsNkRBQTZEO0FBRTdELHFFQUFxRTtBQUdyRSx1QkFBcUIsa0JBQWtCLENBQUMsQ0FBQTtBQVN4QztJQVVJLHVCQUFvQixNQUFhLEVBQ2IsSUFBUyxFQUNULGVBQStCO1FBRi9CLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1Qsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBVm5ELFdBQU0sR0FBVyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBRzlCLDRDQUE0QztRQUM1QyxnQkFBVyxHQUFVLFlBQVksQ0FBQztRQUNsQyx3QkFBbUIsR0FBVSxZQUFZLENBQUM7SUFVMUMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBR00sNEJBQUksR0FBWDtRQUFBLGlCQTBEQztRQXpERyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLDBEQUEwRDtRQUMxRCxtRUFBbUU7UUFDbkUsK0JBQStCO1FBQy9CLDZCQUE2QjtRQUU3Qixz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