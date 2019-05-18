(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/conference-graph/conference-graph.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/conference-graph/conference-graph.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; justify-content: center; align-items: center; flex-direction: column; margin: 50px;\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <div *ngIf=\"!loading\">\n    <ngx-charts-bubble-chart\n      [view]=\"[900, 600]\"\n      [scheme]=\"'vivid'\"\n      [schemeType]=\"'ordinal'\"\n      [results]=\"data\"\n      [animations]=\"true\"\n      [legendPosition]=\"'below'\"\n      [minRadius]=\"5\"\n      [maxRadius]=\"10\"\n      [tooltipDisabled]=\"false\"\n      [autoScale]=\"true\"\n      [showXAxisLabel]=\"true\"\n      [showYAxisLabel]=\"true\"\n      [showGridLines]=\"true\"\n      [roundDomains]=\"true\"\n      [xAxisLabel]=\"'Teams'\"\n      [yAxisLabel]=\"'RBI'\"\n      (select)=\"clickHandler($event)\"\n    ></ngx-charts-bubble-chart>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Components/conference-graph/conference-graph.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/conference-graph/conference-graph.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY29uZmVyZW5jZS1ncmFwaC9jb25mZXJlbmNlLWdyYXBoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/conference-graph/conference-graph.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/conference-graph/conference-graph.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConferenceGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenceGraphComponent", function() { return ConferenceGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ConferenceGraphComponent = /** @class */ (function () {
    function ConferenceGraphComponent(apollo, router) {
        this.apollo = apollo;
        this.router = router;
        this.loading = true;
        this.data = [];
    }
    ConferenceGraphComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, team, _b, _c, _d, player, playerData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _i = 0, _a = this.conference.teams;
                        _e.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        team = _a[_i];
                        // @ts-ignore
                        _b = team;
                        return [4 /*yield*/, this.getPlayers(team)];
                    case 2:
                        // @ts-ignore
                        _b.players = _e.sent();
                        for (_c = 0, _d = team.players; _c < _d.length; _c++) {
                            player = _d[_c];
                            playerData = {
                                name: player.name,
                                series: [{
                                        name: team.name,
                                        x: team.university_name,
                                        y: player.rbi,
                                        r: player.rbi
                                    }]
                            };
                            this.data.push(playerData);
                        }
                        _e.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ConferenceGraphComponent.prototype.clickHandler = function (e) {
        var player = this.conference.teams.filter(function (team) { return team.university_name === e.name; })[0].players.filter(function (p) { return p.name === e.series; });
        this.router.navigateByUrl("player/" + player[0].id);
    };
    ConferenceGraphComponent.prototype.getPlayers = function (team) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var subscription = _this.apollo.watchQuery({
                            query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            teamPlayers(id: ", ") {\n            id\n            name\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            rbi\n          }\n          }\n        "], ["\n          {\n            teamPlayers(id: ", ") {\n            id\n            name\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            rbi\n          }\n          }\n        "])), team.id)
                        }).valueChanges.subscribe(function (result) {
                            resolve(result.data.teamPlayers);
                            subscription.unsubscribe();
                        });
                    })];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConferenceGraphComponent.prototype, "conference", void 0);
    ConferenceGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conference-graph',
            template: __webpack_require__(/*! ./conference-graph.component.html */ "./src/app/Components/conference-graph/conference-graph.component.html"),
            styles: [__webpack_require__(/*! ./conference-graph.component.scss */ "./src/app/Components/conference-graph/conference-graph.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConferenceGraphComponent);
    return ConferenceGraphComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/Components/loading/loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Components/loading/loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center\">\n <mat-spinner></mat-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/loading/loading.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Components/loading/loading.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    LoadingComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.loading.currentValue) {
            this.dialogRef.close();
        }
    };
    LoadingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadingComponent.prototype, "loading", void 0);
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/Components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/Components/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/Components/manual-rbi/manual-rbi.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/manual-rbi/manual-rbi.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rbiForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <mat-form-field>\n    <mat-label>Rush Yards</mat-label>\n    <textarea\n      matInput\n      cdkTextareaAutosize\n      #autosize=\"cdkTextareaAutosize\"\n      cdkAutosizeMinRows=\"1\"\n      cdkAutosizeMaxRows=\"5\"\n      formControlName=\"manual_rush_yards\"\n    ></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Rec Yards</mat-label>\n    <textarea\n      matInput\n      cdkTextareaAutosize\n      #autosize=\"cdkTextareaAutosize\"\n      cdkAutosizeMinRows=\"1\"\n      cdkAutosizeMaxRows=\"5\"\n      formControlName=\"manual_rec_yards\"\n    ></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Rush Attempts</mat-label>\n    <textarea\n      matInput\n      cdkTextareaAutosize\n      #autosize=\"cdkTextareaAutosize\"\n      cdkAutosizeMinRows=\"1\"\n      cdkAutosizeMaxRows=\"5\"\n      formControlName=\"manual_rush_attempts\"\n    ></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Catches</mat-label>\n    <textarea\n      matInput\n      cdkTextareaAutosize\n      #autosize=\"cdkTextareaAutosize\"\n      cdkAutosizeMinRows=\"1\"\n      cdkAutosizeMaxRows=\"5\"\n      formControlName=\"manual_catches\"\n    ></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Rush Tds</mat-label>\n    <textarea\n      matInput\n      cdkTextareaAutosize\n      #autosize=\"cdkTextareaAutosize\"\n      cdkAutosizeMinRows=\"1\"\n      cdkAutosizeMaxRows=\"5\"\n      formControlName=\"manual_rush_tds\"\n    ></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Reciving Tds</mat-label>\n    <textarea\n      matInput\n      cdkTextareaAutosize\n      #autosize=\"cdkTextareaAutosize\"\n      cdkAutosizeMinRows=\"1\"\n      cdkAutosizeMaxRows=\"5\"\n      formControlName=\"manual_rec_tds\"\n    ></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Fumbles</mat-label>\n    <textarea\n      matInput\n      cdkTextareaAutosize\n      #autosize=\"cdkTextareaAutosize\"\n      cdkAutosizeMinRows=\"1\"\n      cdkAutosizeMaxRows=\"5\"\n      formControlName=\"manual_fumbles\"\n    ></textarea>\n  </mat-form-field>\n\n  <div style=\"text-align:center\">\n    <button type=\"submit\">Submit</button>\n\n    <button type=\"reset\">Reset</button>\n  </div>\n  \n  <p style=\"text-align: center; text-decoration: underline\">\n    Calculated RBI Rating is:\n    {{ this.rbiForm.get(\"rbi\").value }}\n  </p>\n</form>\n"

/***/ }),

/***/ "./src/app/Components/manual-rbi/manual-rbi.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/manual-rbi/manual-rbi.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  text-align: center;\n  padding: 16px 32px;\n  -webkit-appearance: \"fill\";\n     -moz-appearance: \"fill\";\n          appearance: \"fill\"; }\n\nbutton {\n  background-color: #f44336;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9Db21wb25lbnRzL21hbnVhbC1yYmkvbWFudWFsLXJiaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtVQUFsQixrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyx5QkFBd0I7RUFBRSxVQUFBO0VBQzFCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYW51YWwtcmJpL21hbnVhbC1yYmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBhcHBlYXJhbmNlOiBcImZpbGxcIjtcbn1cblxuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6I2Y0NDMzNjsgLyogR3JlZW4gKi9cbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/Components/manual-rbi/manual-rbi.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/manual-rbi/manual-rbi.component.ts ***!
  \***************************************************************/
/*! exports provided: ManualRbiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualRbiComponent", function() { return ManualRbiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ManualRbiComponent = /** @class */ (function () {
    function ManualRbiComponent() {
        this.rbiForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            manual_rush_yards: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            manual_rec_yards: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            manual_rush_attempts: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            manual_catches: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            manual_rush_tds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            manual_rec_tds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            manual_fumbles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rbi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    ManualRbiComponent.prototype.onKeyDown = function (e) {
        if (
        // Allow: Delete, Backspace, Tab, Escape, Enter
        [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
            (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
            (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
            (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return; // let it happen, don't do anything
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    ManualRbiComponent.prototype.mm = function (x) {
        return Math.max(0, Math.min(x, 3));
    };
    ManualRbiComponent.prototype.onSubmit = function () {
        //const result:  ManualRbiComponent = Object.assign({}, this.rbiForm.value);
        //console.log(result);
        var a = (this.rbiForm.get("manual_rush_yards").value /
            this.rbiForm.get("manual_rush_attempts").value -
            3.5) *
            2.1;
        var b = (this.rbiForm.get("manual_rec_yards").value /
            this.rbiForm.get("manual_catches").value -
            7) *
            1.7;
        var c = (this.rbiForm.get("manual_rush_tds").value /
            this.rbiForm.get("manual_rush_attempts").value) *
            50.3;
        var d = (this.rbiForm.get("manual_rec_tds").value /
            this.rbiForm.get("manual_catches").value) *
            57.4;
        var f = 3 -
            (this.rbiForm.get("manual_fumbles").value /
                (this.rbiForm.get("manual_catches").value +
                    this.rbiForm.get("manual_rush_attempts").value)) *
                129.9;
        var x = 0.87 * a + 0.13 * b;
        var y = 0.87 * c + 0.13 * d;
        var z = f;
        var rbi_value = ((this.mm(x) + this.mm(y) + this.mm(z)) / 9) * 100;
        var rbi_fixed = rbi_value.toFixed(2);
        if (Number.isNaN(rbi_value)) {
            this.rbiForm.get("rbi").setValue("ERROR: NOT A NUMBER. PLEASE FILL IN MINIMUM RUSH ATTEMPTS AND CATCHES TO GET VALID RBI");
        }
        else {
            this.rbiForm.get("rbi").setValue(rbi_fixed);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keydown", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ManualRbiComponent.prototype, "onKeyDown", null);
    ManualRbiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-manual-rbi",
            template: __webpack_require__(/*! ./manual-rbi.component.html */ "./src/app/Components/manual-rbi/manual-rbi.component.html"),
            styles: [__webpack_require__(/*! ./manual-rbi.component.scss */ "./src/app/Components/manual-rbi/manual-rbi.component.scss")]
        })
    ], ManualRbiComponent);
    return ManualRbiComponent;
}());



/***/ }),

/***/ "./src/app/Components/top-ten-table/top-ten-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/top-ten-table/top-ten-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"dataSource.length > 0\" mat-table [dataSource]=\"dataSource\" class=\"top-ten-container mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <ng-container matColumnDef=\"image\">\n    <th mat-header-cell *matHeaderCellDef> Picture </th>\n    <td mat-cell *matCellDef=\"let element\"> <img style=\"height: 100px\" src=\"{{element.player_img}}\"/> </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- RBI -->\n  <ng-container matColumnDef=\"rbi\">\n    <th mat-header-cell *matHeaderCellDef> RBI </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.rbi?.toFixed(2)}} </td>\n  </ng-container>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"team\">\n    <th mat-header-cell *matHeaderCellDef> Team </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.team.name}} - {{element.team.university_name}} </td>\n  </ng-container>\n\n  <!-- Rush Yards -->\n  <ng-container matColumnDef=\"rush_yds\">\n    <th mat-header-cell *matHeaderCellDef> Rush Yards </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element?.stats[0]?.rush_yds}} </td>\n  </ng-container>\n\n  <!-- Rush Attempt -->\n  <ng-container matColumnDef=\"rush_attempt\">\n    <th mat-header-cell *matHeaderCellDef> Rush Attempts </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.stats[0]?.rush_attempt}} </td>\n  </ng-container>\n\n   <!-- Symbol Column -->\n  <ng-container matColumnDef=\"rec_yds\">\n    <th mat-header-cell *matHeaderCellDef> Rec Yards </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.stats[0]?.rec_yds}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"catches\">\n    <th mat-header-cell *matHeaderCellDef> Catches </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.stats[0]?.catches}} </td>\n  </ng-container>\n\n   <!-- Symbol Column -->\n  <ng-container matColumnDef=\"rush_td\">\n    <th mat-header-cell *matHeaderCellDef> Rush TD </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.stats[0]?.rush_td}} </td>\n  </ng-container>\n\n     <!-- Symbol Column -->\n  <ng-container matColumnDef=\"rec_td\">\n    <th mat-header-cell *matHeaderCellDef> Rec TD </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.stats[0]?.rec_td}} </td>\n  </ng-container>\n\n   <!-- Symbol Column -->\n  <ng-container matColumnDef=\"fumbles\">\n    <th mat-header-cell *matHeaderCellDef> Fumbles </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.stats[0]?.fumbles}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef> Action </th>\n    <td mat-cell *matCellDef=\"let element\"> <a routerLink=\"/player/{{element.id}}\">Details</a></td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/Components/top-ten-table/top-ten-table.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Components/top-ten-table/top-ten-table.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-ten-container {\n  width: 80%;\n  overflow: auto;\n  text-align: center;\n  align-content: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*\n      table, th , td {\n        border: 2px solid black;\n        border-collapse: collapse;\n        padding: 5px;\n        text-align:center;\n      }\n      */\n\n.mat-header-cell {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9Db21wb25lbnRzL3RvcC10ZW4tdGFibGUvdG9wLXRlbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy90b3AtdGVuLXRhYmxlL3RvcC10ZW4tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDTyxVQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUFBOztBQUdsQjs7Ozs7OztPQ0tDOztBRElEO0VBQ0Usa0JBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3RvcC10ZW4tdGFibGUvdG9wLXRlbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvcC10ZW4tY29udGFpbmVyIHtcbiAgICAgICB3aWR0aDo4MCU7XG4gICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgICAgfSBcbiAgICAgIFxuICAgICAgLypcbiAgICAgIHRhYmxlLCB0aCAsIHRkIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB9XG4gICAgICAqL1xuXG4gICAgICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgfVxuIiwiLnRvcC10ZW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi8qXG4gICAgICB0YWJsZSwgdGggLCB0ZCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgfVxuICAgICAgKi9cbi5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/top-ten-table/top-ten-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/top-ten-table/top-ten-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: TopTenTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTenTableComponent", function() { return TopTenTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/main-controller.service */ "./src/app/Services/main-controller.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");





var TopTenTableComponent = /** @class */ (function () {
    function TopTenTableComponent(mainCtrl, apollo) {
        this.mainCtrl = mainCtrl;
        this.apollo = apollo;
        this.loading = true;
        this.displayedColumns = ['image', 'name', 'rbi', 'team', 'rush_yds',
            'rush_attempt', 'rec_yds', 'catches', 'rush_td', 'rec_td', 'fumbles', 'action'];
        this.dataSource = [];
        this.mainCtrl.openLoadingDialog();
    }
    TopTenTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        {\n          topPlayers{\n            id\n            name\n            rbi\n            team {\n              id\n              name\n              university_name\n              team_img\n            }\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            stats {\n              id\n              year\n              rush_yds\n              rush_attempt\n              rec_yds\n              catches\n              rush_td\n              rec_td\n              fumbles\n            }\n          }\n        }\n      "], ["\n        {\n          topPlayers{\n            id\n            name\n            rbi\n            team {\n              id\n              name\n              university_name\n              team_img\n            }\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            stats {\n              id\n              year\n              rush_yds\n              rush_attempt\n              rec_yds\n              catches\n              rush_td\n              rec_td\n              fumbles\n            }\n          }\n        }\n      "])))
        }).valueChanges.subscribe(function (result) {
            _this.dataSource = result.data.topPlayers;
            _this.mainCtrl.closeLoadingDialog();
            _this.subscription.unsubscribe();
        });
    };
    TopTenTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-ten-table',
            template: __webpack_require__(/*! ./top-ten-table.component.html */ "./src/app/Components/top-ten-table/top-ten-table.component.html"),
            styles: [__webpack_require__(/*! ./top-ten-table.component.scss */ "./src/app/Components/top-ten-table/top-ten-table.component.scss")]
        })
        /*
        export class TopTenTableComponent implements OnInit {
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_main_controller_service__WEBPACK_IMPORTED_MODULE_2__["MainControllerService"], apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]])
    ], TopTenTableComponent);
    return TopTenTableComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/Pages/about-us/about-us.component.html":
/*!********************************************************!*\
  !*** ./src/app/Pages/about-us/about-us.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>\n  The A Team:\n  </h3>\n  <div class=\"section\">\n    <p><strong>Huyen Vu​</strong> - <a href=\"https://github.com/UpToEleven1102\">github</a></p>\n    <p><strong>Christian Melchiorre</strong> - <a href=\"https://github.com/Cmelchio\">github</a></p>\n    <p><strong>Isaac Simpson</strong> - <a href=\"#\">github</a></p>\n    <p><strong>Zachary Simpson</strong> - <a href=\"#\">github</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/about-us/about-us.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Pages/about-us/about-us.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1000px;\n  padding-top: 3rem; }\n\n.section {\n  display: block;\n  margin: 2rem;\n  padding: 2rem;\n  background-color: antiquewhite;\n  width: 100%;\n  max-width: 800px; }\n\na, a:visited {\n  color: blueviolet; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9QYWdlcy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cblxuLnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAycmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogYmx1ZXZpb2xldDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/Pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/Pages/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/calculate-rbi/calculate-rbi.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Pages/calculate-rbi/calculate-rbi.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-app-background basic-container\" >\n  <h3> Manual Running Back Index Calculation</h3>\n  <app-manual-rbi></app-manual-rbi>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/calculate-rbi/calculate-rbi.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Pages/calculate-rbi/calculate-rbi.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NhbGN1bGF0ZS1yYmkvY2FsY3VsYXRlLXJiaS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/calculate-rbi/calculate-rbi.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/calculate-rbi/calculate-rbi.component.ts ***!
  \****************************************************************/
/*! exports provided: CalculateRbiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateRbiComponent", function() { return CalculateRbiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalculateRbiComponent = /** @class */ (function () {
    function CalculateRbiComponent() {
    }
    CalculateRbiComponent.prototype.ngOnInit = function () {
    };
    CalculateRbiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculate-rbi',
            template: __webpack_require__(/*! ./calculate-rbi.component.html */ "./src/app/Pages/calculate-rbi/calculate-rbi.component.html"),
            styles: [__webpack_require__(/*! ./calculate-rbi.component.scss */ "./src/app/Pages/calculate-rbi/calculate-rbi.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalculateRbiComponent);
    return CalculateRbiComponent;
}());



/***/ }),

/***/ "./src/app/Pages/conference-page/conference-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Pages/conference-page/conference-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left: 100px; padding-right: 100px; margin: 50px;\">\n  <div *ngIf=\"loading\" style=\"min-height: 500px; display: flex; flex-direction: column; justify-content: center; align-items: center;\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"conference\" style=\"width: 100%; display: inline-block; position: relative;\">\n    <div style=\"display: flex; flex-direction: row\">\n      <div style=\"width: 50%;\">\n        <h1>{{conference.name}}</h1><p>{{conference.nick_name}}</p>\n      </div>\n      <div>\n        <p>Founded: {{conference.founded}}</p>\n        <p>Number of members: {{conference.member_number}}</p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div>\n        <div class=\"row\">\n          <p>Chart: </p>\n          <button mat-raised-button *ngIf=\"!showGraph\" (click)=\"showGraph=true\">Show Graph</button>\n          <button mat-raised-button *ngIf=\"showGraph\" (click)=\"showGraph=false\">Close</button>\n        </div>\n\n        <app-conference-graph *ngIf=\"showGraph\" [conference]=\"conference\"></app-conference-graph>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div>\n        <div class=\"row\">\n          <p>Teams: </p>\n          <button *ngIf=\"!showTeam\" (click)=\"showTeam=true\">Show All</button>\n          <button *ngIf=\"showTeam\" (click)=\"showTeam=false\">Close</button>\n        </div>\n\n        <table mat-table *ngIf=\"showTeam\" [dataSource]=\"conference.teams\" style=\"width: 100%;\" class=\"mat-elevation-z8\">\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n\n          <ng-container matColumnDef=\"image\">\n            <th mat-header-cell *matHeaderCellDef> Picture </th>\n            <td mat-cell *matCellDef=\"let element\"> <img style=\"height: 100px\" src=\"{{element.team_img}}\"/> </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n\n          <!-- RBI -->\n          <ng-container matColumnDef=\"university_name\">\n            <th mat-header-cell *matHeaderCellDef> University </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.university_name}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action</th>\n            <td mat-cell *matCellDef=\"let element\"><a routerLink=\"/team/{{element.id}}\">Details</a>  </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Pages/conference-page/conference-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Pages/conference-page/conference-page.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  align-content: center;\n  margin-top: 50px; }\n\n.mat-header-cell {\n  text-align: center; }\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: #555555;\n  padding: 5px; }\n\n.row p {\n    color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9QYWdlcy9jb25mZXJlbmNlLXBhZ2UvY29uZmVyZW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQUUsbUJBQW1CO0VBQUUsOEJBQThCO0VBQ2xFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBSGQ7SUFNSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9jb25mZXJlbmNlLXBhZ2UvY29uZmVyZW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XG4gIHBhZGRpbmc6IDVweDtcblxuICBwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/conference-page/conference-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Pages/conference-page/conference-page.component.ts ***!
  \********************************************************************/
/*! exports provided: ConferencePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferencePageComponent", function() { return ConferencePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/main-controller.service */ "./src/app/Services/main-controller.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ConferencePageComponent = /** @class */ (function () {
    function ConferencePageComponent(apollo, mainCtrl, route) {
        this.apollo = apollo;
        this.mainCtrl = mainCtrl;
        this.route = route;
        this.showTeam = true;
        this.showGraph = true;
        this.loading = true;
        this.displayedColumns = ['image', 'name', 'university_name', 'action'];
    }
    ConferencePageComponent.prototype.ngOnInit = function () {
        this.getConference();
    };
    ConferencePageComponent.prototype.getConference = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.subscription = _this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            conference(id: ", ") {\n              id\n              name\n              nick_name\n              founded\n              member_number\n              teams {\n                id\n                name\n                university_name\n                team_img\n              }\n            }\n          }\n        "], ["\n          {\n            conference(id: ", ") {\n              id\n              name\n              nick_name\n              founded\n              member_number\n              teams {\n                id\n                name\n                university_name\n                team_img\n              }\n            }\n          }\n        "])), params.id)
        }).valueChanges.subscribe(function (result) {
            _this.loading = false;
            if (result.errors) {
                alert('Failed to fetch data');
            }
            _this.conference = result.data.conference;
            _this.subscription.unsubscribe();
        }); });
    };
    ConferencePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conference-page',
            template: __webpack_require__(/*! ./conference-page.component.html */ "./src/app/Pages/conference-page/conference-page.component.html"),
            styles: [__webpack_require__(/*! ./conference-page.component.scss */ "./src/app/Pages/conference-page/conference-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"], _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_3__["MainControllerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ConferencePageComponent);
    return ConferencePageComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">\n  <form style=\"margin: auto\">\n    <p>Please enter the name of the player to get RBI</p>\n    <mat-form-field>\n      <input matInput placeholder=\"Player Name\" (input)=\"onSearchChange($event.target.value)\"/>\n    </mat-form-field>\n  </form>\n\n  <div *ngIf=\"loading\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"!loading\">\n    <div *ngIf=\"data.length === 0 && searched\">No players found!</div>\n    <div *ngIf=\"data.length > 0\">\n      <table>\n        <tr><th>Picture</th><th>Name</th><th>RBI</th><th>Team</th><th>Action</th></tr>\n        <tr style=\"height: 100px;\" *ngFor=\"let player of data\">\n          <td><img src=\"{{player.player_img}}\" /> </td>\n          <td>{{player.name}}</td>\n          <td>{{player.rbi?.toFixed(2)}}</td>\n          <td><a routerLink=\"/team/{{player.team.id}}\">{{player.team.name}} - {{player.team.university_name}}</a></td>\n          <td><a routerLink=\"/player/{{player.id}}\">Details</a></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  border-right: #555555;\n  border-right-width: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9QYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAjNTU1NTU1O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/main-controller.service */ "./src/app/Services/main-controller.service.ts");





var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(apollo, mainCtrl) {
        this.apollo = apollo;
        this.mainCtrl = mainCtrl;
        this.data = [];
        this.searchText = '';
        this.loading = false;
        this.searched = false;
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.onSearchChange = function (text) {
        var _this = this;
        if (text.length > 1) {
            this.searched = true;
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            this.loading = true;
            this.subscription = this.apollo.watchQuery({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            players(filter: \"", "\"){\n              id\n              name\n              rbi\n              team {\n                id\n                name\n                university_name\n                team_img\n              }\n              player_img\n              class\n              ht_wt\n              home_town\n              dob\n              stats {\n                id\n                year\n                rush_yds\n                rush_attempt\n                rec_yds\n                catches\n                rush_td\n                rec_td\n                fumbles\n              }\n            }\n          }\n        "], ["\n          {\n            players(filter: \"", "\"){\n              id\n              name\n              rbi\n              team {\n                id\n                name\n                university_name\n                team_img\n              }\n              player_img\n              class\n              ht_wt\n              home_town\n              dob\n              stats {\n                id\n                year\n                rush_yds\n                rush_attempt\n                rec_yds\n                catches\n                rush_td\n                rec_td\n                fumbles\n              }\n            }\n          }\n        "])), text)
            }).valueChanges.subscribe(function (result) {
                _this.data = result.data.players;
                console.log(_this.data);
                _this.loading = false;
                _this.subscription.unsubscribe();
            });
        }
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/Pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/Pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"], _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_4__["MainControllerService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/Pages/main-page/main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Pages/main-page/main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <h1> RBI Ranking app {{ title }}</h1>\n  <div>\n    <p>This software is a brand new application that allows you to simply search the name of a running back and obtain a valuable rank based on their performance.\n      The program will use a <br>players' statistics from each seasont to give a RBI score. RBI stands for Running Back Index where the higher a players' RBI is the \n      more valuable a player is to have on your team.</p>\n  </div>\n\n</div>\n\n<hr>\n\n<div style=\"text-align: center;\">\n  <h2>All Conferences:</h2>\n</div>\n<div style=\"display: flex;justify-content: space-around; min-width: 300px; flex-wrap: wrap\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <mat-card *ngFor=\"let conference of data\" style=\"width: 20%; margin: 20px;\">\n    <mat-card-content>\n      <a routerLink=\"/conference/{{conference.id}}\" style=\"text-decoration: none\">\n        <h1>{{conference.name}}</h1>\n        <p>{{conference.nick_name}}</p>\n      </a>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/main-page/main-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Pages/main-page/main-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:visited, a {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9QYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6dmlzaXRlZCwgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");




var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(apollo) {
        var _this = this;
        this.apollo = apollo;
        this.loading = true;
        this.getConferences = function () {
            _this.subscription = _this.apollo.watchQuery({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        {\n          conferences {\n            id\n            name\n            nick_name\n            founded\n            member_number\n          }\n        }\n      "], ["\n        {\n          conferences {\n            id\n            name\n            nick_name\n            founded\n            member_number\n          }\n        }\n      "])))
            }).valueChanges.subscribe(function (result) {
                _this.data = result.data.conferences;
                console.log(_this.data);
                _this.loading = false;
                _this.subscription.unsubscribe();
            });
        };
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.getConferences();
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/Pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/Pages/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]])
    ], MainPageComponent);
    return MainPageComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/Pages/player-page/player-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/player-page/player-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left: 100px; padding-right: 100px;\">\n  <div *ngIf=\"loading\" style=\"min-height: 500px; display: flex; flex-direction: column; justify-content: center; align-items: center;\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"player\" style=\"width: 100%; display: inline-block; position: relative;\">\n    <div style=\"display: flex; flex-direction: row\">\n      <img src=\"{{player.player_img}}\" style=\"height: 150px;\" />\n      <div style=\"width: 50%;\">\n        <h1>{{player.name}}</h1>\n          <a routerLink=\"/team/{{player.team.id}}\"  style=\"display: flex; flex-direction: row;\">\n            <img style=\"height: 50px;\" src=\"{{player.team.team_img}}\"/>\n            <p>{{player.team.name}} - {{player.team.university_name}}</p>\n          </a>\n      </div>\n      <div>\n        <p *ngIf=\"player.dob\">DOB: {{player.dob}}</p>\n        <p *ngIf=\"player.class\">Class: {{player.class}}</p>\n        <p *ngIf=\"player.home_town\">Home Town: {{player.home_town}}</p>\n        <p *ngIf=\"player.ht_wt\">HT/WT: {{player.ht_wt}}</p>\n      </div>\n    </div>\n\n    <div style=\"display: flex; flex: 1; justify-content: center; align-items: center;\">\n      <table style=\"width: 100%; margin-top: 50px; border: 1px solid #bcbcbc;\" *ngIf=\"player.stats && player.stats.length > 0; else noStats\">\n        <tr style=\"line-height: 2rem;\">\n          <th>year</th>\n          <th>rbi</th>\n          <th>rush_yds</th>\n          <th>rush_td</th>\n          <th>rec_yds</th>\n          <th>rec_td</th>\n          <th>catches</th>\n          <th>fumble</th>\n        </tr>\n        <tr *ngFor=\"let stat of player.stats\" style=\"line-height: 1.5rem;\">\n          <td style=\"text-align: center;\">{{stat.year}}</td>\n          <td style=\"text-align: center;\">{{stat.rbi?.toFixed(2)}}</td>\n          <td style=\"text-align: center;\">{{stat.rush_yds}}</td>\n          <td style=\"text-align: center;\">{{stat.rush_td}}</td>\n          <td style=\"text-align: center;\">{{stat.rec_yds}}</td>\n          <td style=\"text-align: center;\">{{stat.rec_td}}</td>\n          <td style=\"text-align: center;\">{{stat.catches}}</td>\n          <td style=\"text-align: center;\">{{stat.fumbles}}</td>\n        </tr>\n      </table>\n\n      <ng-template #noStats>\n        <p>No Stats Recorded</p>\n      </ng-template>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Pages/player-page/player-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Pages/player-page/player-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3BsYXllci1wYWdlL3BsYXllci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/player-page/player-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/player-page/player-page.component.ts ***!
  \************************************************************/
/*! exports provided: PlayerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageComponent", function() { return PlayerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/main-controller.service */ "./src/app/Services/main-controller.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PlayerPageComponent = /** @class */ (function () {
    function PlayerPageComponent(apollo, mainCtrl, route) {
        this.apollo = apollo;
        this.mainCtrl = mainCtrl;
        this.route = route;
        this.player = null;
        this.loading = false;
    }
    PlayerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.id = params.id;
            }
        });
        this.getPlayer(this.id);
    };
    PlayerPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PlayerPageComponent.prototype.getPlayer = function (id) {
        var _this = this;
        this.loading = true;
        this.apolloSubscription = this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        {\n          player(id: ", "){\n            id\n            name\n            rbi\n            team {\n              id\n              name\n              university_name\n              team_img\n            }\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            stats {\n              id\n              year\n              rush_yds\n              rush_attempt\n              rec_yds\n              catches\n              rush_td\n              rec_td\n              fumbles\n              rbi\n            }\n          }\n        }\n      "], ["\n        {\n          player(id: ", "){\n            id\n            name\n            rbi\n            team {\n              id\n              name\n              university_name\n              team_img\n            }\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            stats {\n              id\n              year\n              rush_yds\n              rush_attempt\n              rec_yds\n              catches\n              rush_td\n              rec_td\n              fumbles\n              rbi\n            }\n          }\n        }\n      "])), id)
        }).valueChanges.subscribe(function (result) {
            _this.player = result.data.player;
            _this.loading = false;
            console.log(_this.player);
            _this.apolloSubscription.unsubscribe();
        });
    };
    PlayerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-page',
            template: __webpack_require__(/*! ./player-page.component.html */ "./src/app/Pages/player-page/player-page.component.html"),
            styles: [__webpack_require__(/*! ./player-page.component.scss */ "./src/app/Pages/player-page/player-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"], _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_4__["MainControllerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PlayerPageComponent);
    return PlayerPageComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/Pages/team-page/team-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Pages/team-page/team-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left: 100px; padding-right: 100px;\">\n  <div *ngIf=\"loading\" style=\"min-height: 500px; display: flex; flex-direction: column; justify-content: center; align-items: center;\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"team\" style=\"width: 100%; display: inline-block; position: relative;\">\n    <div style=\"display: flex; flex-direction: row\">\n      <img src=\"{{team.team_img}}\" style=\"height: 150px;\" />\n      <div style=\"width: 50%;\">\n        <h1>{{team.name}}</h1><h2>University: {{team.university_name}}</h2>\n        <a routerLink=\"/conference/{{team.conference.id}}\"  style=\"display: flex; flex-direction: row;\">\n          <p>{{team.conference.name}} - {{team.conference.nick_name}}</p>\n        </a>\n      </div>\n    </div>\n\n\n\n    <div *ngIf=\"players && players.length > 0\">\n      <table mat-table [dataSource]=\"players\" class=\"container mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n        <ng-container matColumnDef=\"image\">\n          <th mat-header-cell *matHeaderCellDef> Picture </th>\n          <td mat-cell *matCellDef=\"let element\"> <img style=\"height: 100px\" src=\"{{element.player_img}}\"/> </td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n        <!-- RBI -->\n        <ng-container matColumnDef=\"rbi\">\n          <th mat-header-cell *matHeaderCellDef> RBI </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.rbi?.toFixed(2)}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"class\">\n          <th mat-header-cell *matHeaderCellDef> Class </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.class}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"dob\">\n          <th mat-header-cell *matHeaderCellDef> DOB </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.dob}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"home_town\">\n          <th mat-header-cell *matHeaderCellDef> Home Town </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.home_town}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"ht_wt\">\n          <th mat-header-cell *matHeaderCellDef> HT/WT </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.ht_wt}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef> Action</th>\n          <td mat-cell *matCellDef=\"let element\"><a routerLink=\"/player/{{element.id}}\">Details</a>  </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Pages/team-page/team-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Pages/team-page/team-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 80%;\n  overflow: auto;\n  text-align: center;\n  align-content: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.mat-header-cell {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9QYWdlcy90ZWFtLXBhZ2UvdGVhbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBUztFQUNULGNBQWM7RUFDZCxrQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RlYW0tcGFnZS90ZWFtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6ODAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Pages/team-page/team-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Pages/team-page/team-page.component.ts ***!
  \********************************************************/
/*! exports provided: TeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageComponent", function() { return TeamPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/main-controller.service */ "./src/app/Services/main-controller.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");






var TeamPageComponent = /** @class */ (function () {
    function TeamPageComponent(route, mainCtrl, apollo) {
        this.route = route;
        this.mainCtrl = mainCtrl;
        this.apollo = apollo;
        this.displayedColumns = ['name', 'rbi', 'image', 'class', 'dob', 'home_town', 'ht_wt', 'action'];
    }
    TeamPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.getTeam();
        });
    };
    TeamPageComponent.prototype.getTeamPlayers = function (team_id) {
        var _this = this;
        this.subscription = this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        {\n          teamPlayers(id: ", ") {\n            id\n            name\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            rbi\n          }\n        }\n      "], ["\n        {\n          teamPlayers(id: ", ") {\n            id\n            name\n            player_img\n            class\n            ht_wt\n            home_town\n            dob\n            rbi\n          }\n        }\n      "])), team_id)
        }).valueChanges.subscribe(function (result) {
            _this.players = result.data.teamPlayers;
            console.log(_this.players);
            _this.subscription.unsubscribe();
        });
    };
    TeamPageComponent.prototype.getTeam = function () {
        var _this = this;
        this.subscription = this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        {\n          team(id: ", "){\n            id\n            name\n            university_name\n            team_img\n            conference {\n              id\n              name\n              nick_name\n              founded\n              member_number\n          }\n        }\n        }\n      "], ["\n        {\n          team(id: ", "){\n            id\n            name\n            university_name\n            team_img\n            conference {\n              id\n              name\n              nick_name\n              founded\n              member_number\n          }\n        }\n        }\n      "])), this.id)
        }).valueChanges.subscribe(function (result) {
            _this.team = result.data.team;
            console.log(_this.team);
            _this.subscription.unsubscribe();
            if (_this.team) {
                _this.getTeamPlayers(result.data.team.id);
            }
        });
    };
    TeamPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-page',
            template: __webpack_require__(/*! ./team-page.component.html */ "./src/app/Pages/team-page/team-page.component.html"),
            styles: [__webpack_require__(/*! ./team-page.component.scss */ "./src/app/Pages/team-page/team-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Services_main_controller_service__WEBPACK_IMPORTED_MODULE_3__["MainControllerService"], apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]])
    ], TeamPageComponent);
    return TeamPageComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/Pages/top-players/top-players.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/top-players/top-players.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<h3>Top Ten Players with highest RBI:</h3>\n<app-top-ten-table></app-top-ten-table>\n"

/***/ }),

/***/ "./src/app/Pages/top-players/top-players.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Pages/top-players/top-players.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RvcC1wbGF5ZXJzL3RvcC1wbGF5ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/top-players/top-players.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/top-players/top-players.component.ts ***!
  \************************************************************/
/*! exports provided: TopPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPlayersComponent", function() { return TopPlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopPlayersComponent = /** @class */ (function () {
    function TopPlayersComponent() {
    }
    TopPlayersComponent.prototype.ngOnInit = function () {
    };
    TopPlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-players',
            template: __webpack_require__(/*! ./top-players.component.html */ "./src/app/Pages/top-players/top-players.component.html"),
            styles: [__webpack_require__(/*! ./top-players.component.scss */ "./src/app/Pages/top-players/top-players.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopPlayersComponent);
    return TopPlayersComponent;
}());



/***/ }),

/***/ "./src/app/Services/main-controller.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/main-controller.service.ts ***!
  \*****************************************************/
/*! exports provided: MainControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainControllerService", function() { return MainControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/loading/loading.component */ "./src/app/Components/loading/loading.component.ts");




var MainControllerService = /** @class */ (function () {
    function MainControllerService(dialog) {
        this.dialog = dialog;
    }
    MainControllerService.prototype.openLoadingDialog = function () {
        this.loadingDialogRef = this.dialog.open(_Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
            width: '250px',
        });
    };
    MainControllerService.prototype.closeLoadingDialog = function () {
        this.loadingDialogRef.close();
    };
    MainControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MainControllerService);
    return MainControllerService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"height: 100vh;\">\n  <mat-drawer-container style=\"height: 100%;\">\n    <mat-drawer [opened]=\"menuOpen\" mode=\"side\" style=\"height: 100%\">\n      <div style=\"display: flex; flex-direction: column; justify-content: center; align-items: center\">\n        <button mat-button (click)=\"goToHome()\">\n          <img style=\"height: 80px; margin: 40px;\" src=\"http://images.performgroup.com/di/library/omnisport/d1/d9/ncaa-football-logo_1dtqtdoitpl9t1cqksvegay0r8.jpg\" />\n        </button>\n      </div>\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"/top-players\">Top 10 players</a>\n        <a mat-list-item routerLink=\"/search\">Search</a>\n        <a mat-list-item routerLink=\"/calculate-rbi\">Manually Calculate RBI</a>\n        <a mat-list-item routerLink=\"/about-us\">About Us</a>\n      </mat-nav-list>\n    </mat-drawer>\n    <mat-drawer-content>\n      <div class=\"nav-bar\">\n        <button mat-button style=\"background-color: #fff; margin: 10px; color: #555555;\" (click)=\"toggleMenu()\">\n          <mat-icon>reorder</mat-icon>\n        </button>\n      </div>\n      <div>\n        <app-conference-graph *ngIf=\"showGraph\"></app-conference-graph>\n      </div>\n      <router-outlet></router-outlet>\n    </mat-drawer-content>\n  </mat-drawer-container>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar {\n  display: flex;\n  flex-direction: row;\n  background-color: #555555;\n  height: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eWVuL1dvcmtzcGFjZXMvdHR1L1JCSS1mcm9udC1lbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XG4gIGhlaWdodDogNzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'RBI-front-end';
        this.menuOpen = true;
        this.toggleMenu = function () { return _this.menuOpen = !_this.menuOpen; };
        this.goToHome = function () { return _this.router.navigateByUrl('/main'); };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && event.url.indexOf('conference/') >= 0) {
                _this.showGraph = true;
            }
            else {
                _this.showGraph = false;
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/home-page/home-page.component */ "./src/app/Pages/home-page/home-page.component.ts");
/* harmony import */ var _Pages_top_players_top_players_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/top-players/top-players.component */ "./src/app/Pages/top-players/top-players.component.ts");
/* harmony import */ var _Pages_calculate_rbi_calculate_rbi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages/calculate-rbi/calculate-rbi.component */ "./src/app/Pages/calculate-rbi/calculate-rbi.component.ts");
/* harmony import */ var _Components_top_ten_table_top_ten_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/top-ten-table/top-ten-table.component */ "./src/app/Components/top-ten-table/top-ten-table.component.ts");
/* harmony import */ var _Components_manual_rbi_manual_rbi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/manual-rbi/manual-rbi.component */ "./src/app/Components/manual-rbi/manual-rbi.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/loading/loading.component */ "./src/app/Components/loading/loading.component.ts");
/* harmony import */ var _Pages_player_page_player_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Pages/player-page/player-page.component */ "./src/app/Pages/player-page/player-page.component.ts");
/* harmony import */ var _Pages_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Pages/team-page/team-page.component */ "./src/app/Pages/team-page/team-page.component.ts");
/* harmony import */ var _Pages_conference_page_conference_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Pages/conference-page/conference-page.component */ "./src/app/Pages/conference-page/conference-page.component.ts");
/* harmony import */ var _Pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Pages/main-page/main-page.component */ "./src/app/Pages/main-page/main-page.component.ts");
/* harmony import */ var _Pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Pages/about-us/about-us.component */ "./src/app/Pages/about-us/about-us.component.ts");
/* harmony import */ var _Components_conference_graph_conference_graph_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/conference-graph/conference-graph.component */ "./src/app/Components/conference-graph/conference-graph.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");

























var appRoutes = [
    { path: 'top-players', component: _Pages_top_players_top_players_component__WEBPACK_IMPORTED_MODULE_9__["TopPlayersComponent"] },
    { path: 'main', component: _Pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_21__["MainPageComponent"] },
    { path: 'search', component: _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"] },
    { path: 'calculate-rbi', component: _Pages_calculate_rbi_calculate_rbi_component__WEBPACK_IMPORTED_MODULE_10__["CalculateRbiComponent"] },
    { path: 'player/:id', component: _Pages_player_page_player_page_component__WEBPACK_IMPORTED_MODULE_18__["PlayerPageComponent"] },
    { path: 'team/:id', component: _Pages_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_19__["TeamPageComponent"] },
    { path: 'conference/:id', component: _Pages_conference_page_conference_page_component__WEBPACK_IMPORTED_MODULE_20__["ConferencePageComponent"] },
    { path: 'about-us', component: _Pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_22__["AboutUsComponent"] },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
                _Pages_top_players_top_players_component__WEBPACK_IMPORTED_MODULE_9__["TopPlayersComponent"],
                _Pages_calculate_rbi_calculate_rbi_component__WEBPACK_IMPORTED_MODULE_10__["CalculateRbiComponent"],
                _Components_top_ten_table_top_ten_table_component__WEBPACK_IMPORTED_MODULE_11__["TopTenTableComponent"],
                _Components_manual_rbi_manual_rbi_component__WEBPACK_IMPORTED_MODULE_12__["ManualRbiComponent"],
                _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"],
                _Pages_player_page_player_page_component__WEBPACK_IMPORTED_MODULE_18__["PlayerPageComponent"],
                _Pages_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_19__["TeamPageComponent"],
                _Pages_conference_page_conference_page_component__WEBPACK_IMPORTED_MODULE_20__["ConferencePageComponent"],
                _Pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_21__["MainPageComponent"],
                _Pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_22__["AboutUsComponent"],
                _Components_conference_graph_conference_graph_component__WEBPACK_IMPORTED_MODULE_23__["ConferenceGraphComponent"],
            ],
            entryComponents: [_Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["TextFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_15__["GraphQLModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");





var uri = 'https://rbi-node.herokuapp.com/'; // <-- add the URL of the GraphQL server here
// const uri = 'http://localhost:4000/'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                },
            ],
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/huyen/Workspaces/ttu/RBI-front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map