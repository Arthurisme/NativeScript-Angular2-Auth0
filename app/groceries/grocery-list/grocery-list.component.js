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
var shared_1 = require("../shared");
var shared_2 = require("../../shared");
var GroceryListComponent = (function () {
    function GroceryListComponent(store) {
        this.store = store;
        this.loading = new core_1.EventEmitter();
        this.loaded = new core_1.EventEmitter();
        this.listLoaded = false;
    }
    GroceryListComponent.prototype.load = function () {
        var _this = this;
        this.loading.next("");
        this.store.load()
            .then(function () {
            _this.loaded.next("");
            _this.listLoaded = true;
        })
            .catch(function () {
            shared_2.alert("An error occurred loading your grocery list.");
        });
    };
    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    GroceryListComponent.prototype.makeBackgroundTransparent = function (args) {
        var cell = args.ios;
        if (cell) {
            cell.backgroundColor = UIColor.clearColor();
        }
    };
    GroceryListComponent.prototype.imageSource = function (grocery) {
        if (grocery.deleted) {
            return grocery.done ? "res://selected" : "res://nonselected";
        }
        return grocery.done ? "res://checked" : "res://unchecked";
    };
    GroceryListComponent.prototype.toggleDone = function (grocery) {
        this.store.toggleDoneFlag(grocery, this.showDeleted)
            .catch(function () {
            shared_2.alert("An error occurred managing your grocery list.");
        });
    };
    GroceryListComponent.prototype.delete = function (grocery) {
        this.store.setDeleteFlag(grocery)
            .catch(function () {
            shared_2.alert("An error occurred while deleting an item from your list.");
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GroceryListComponent.prototype, "showDeleted", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GroceryListComponent.prototype, "row", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroceryListComponent.prototype, "loading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroceryListComponent.prototype, "loaded", void 0);
    GroceryListComponent = __decorate([
        core_1.Component({
            selector: "gr-grocery-list",
            templateUrl: "groceries/grocery-list/grocery-list.component.html",
            styleUrls: ["groceries/grocery-list/grocery-list.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [shared_1.GroceryService])
    ], GroceryListComponent);
    return GroceryListComponent;
}());
exports.GroceryListComponent = GroceryListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2NlcnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRixlQUFlLENBQUMsQ0FBQTtBQUVoRyx1QkFBd0MsV0FBVyxDQUFDLENBQUE7QUFDcEQsdUJBQXNCLGNBQWMsQ0FBQyxDQUFBO0FBVXJDO0lBUUUsOEJBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTC9CLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFdEMsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUUwQixDQUFDO0lBRTlDLG1DQUFJLEdBQUo7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2FBQ2QsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDO1lBQ0wsY0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOERBQThEO0lBQzlELGtEQUFrRDtJQUNsRCx3REFBeUIsR0FBekIsVUFBMEIsSUFBSTtRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO1FBQy9ELENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDNUQsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNqRCxLQUFLLENBQUM7WUFDTCxjQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sT0FBZ0I7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2FBQzlCLEtBQUssQ0FBQztZQUNMLGNBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpERDtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFWWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxvREFBb0Q7WUFDakUsU0FBUyxFQUFFLENBQUMsbURBQW1ELENBQUM7WUFDaEUsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7NEJBQUE7SUFvREYsMkJBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBbkRZLDRCQUFvQix1QkFtRGhDLENBQUEifQ==