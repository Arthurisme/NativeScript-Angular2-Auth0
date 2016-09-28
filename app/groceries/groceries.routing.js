"use strict";
var router_1 = require("@angular/router");
var groceries_component_1 = require("./groceries.component");
var auth_guard_service_1 = require("../auth-guard.service");
var groceriesRoutes = [
    { path: "groceries", component: groceries_component_1.GroceriesComponent, canActivate: [auth_guard_service_1.AuthGuard] },
];
exports.groceriesRouting = router_1.RouterModule.forChild(groceriesRoutes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyaWVzLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJpZXMucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFDM0QsbUNBQTBCLHVCQUF1QixDQUFDLENBQUE7QUFFbEQsSUFBTSxlQUFlLEdBQVc7SUFDOUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyw4QkFBUyxDQUFDLEVBQUU7Q0FDL0UsQ0FBQztBQUNXLHdCQUFnQixHQUF3QixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyJ9