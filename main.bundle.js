webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "html {\r\n    background: lightslategrey\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "app-buses {\r\n    width:900px;\r\n}\r\n\r\nul {\r\n    margin: 0 auto;\r\n    padding-left: 0px;\r\n}\r\nli {\r\n    display: inline-block;\r\n    margin-right:15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.routes {\r\n  width: 60px;\r\n  text-align: center;\r\n  height: 20px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  background: lightgray;\r\n}\r\n\r\n.blue {\r\n  background: #13b4ff;\r\n}\r\n\r\n.purple {\r\n  background: #ab3fdd;\r\n}\r\n\r\n.wine {\r\n  background: #ae163e;\r\n}\r\n.btn-custom {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    color: white;\r\n    line-height: 30px;\r\n    margin: 5px;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    background: lightgray;\r\n    color: black;\r\n}\r\n.wrapper2 {\r\n    \r\n\r\n}\r\n.header {\r\n    margin: 0 auto;\r\n}\r\n\r\nsvg title {display: none;}\r\nsvg g:hover title {display: block;}\r\n\r\n.container {\r\n    width: 250px;\r\n    float: left;\r\n    margin-right: 50px;\r\n}\r\n.panel-heading {\r\n    background: darkslategray;\r\n    color:white;\r\n}\r\n#collapse3 .panel-body {\r\n    padding:0;\r\n}\r\n#collapse3 a {\r\n    float: left;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    color: white;\r\n    width: 100%;\r\n    line-height: 30px;\r\n    margin: 3px;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    background: lightgray;\r\n    color: black;\r\n}\r\n.active {\r\n    background: darkslategray;\r\n    color:white;\r\n}\r\nh1 {\r\n    background: darkslategray;\r\n    color:white;\r\n    text-align: center;\r\n    padding: 30px 0px;\r\n}\r\n\r\n.buses {\r\n        text-align: center;\r\n    color: indianred;\r\n    font-size: 30px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    background: darkslategray;\r\n    color:white;\r\n    text-align: center;\r\n    padding: 30px 0px;\r\n}\r\n.wrapper {\r\n    /*text-align: center;*/\r\n}\r\n.menu {\r\n    width: 200px;\r\n    height: 100px;\r\n}\r\nspan.sf-map {\r\n    max-width: 100%;\r\n    height: 900px;\r\n    background: white;\r\n\r\n}\r\npath {\r\n    fill:green;\r\n\r\n}\r\n.map2 {\r\n    background-color: red;\r\n}\r\nsvg {\r\n        margin-top: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<h1>\n\n</h1>\n\n<app-map #map></app-map>\n\n"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<h1>\n  San Francisco Muni Transportation\n</h1>\n\n<div *ngIf=\"!buses\" class=\"buses\">\n  \n  The buses will appear in a second...\n  <img src=\"./../assets/gears.gif\"/>\n  </div>\n\n<div class=\"container\">\n  <h2>Menu</h2>\n  <div class=\"panel-group\" id=\"accordion\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Reset</a>\n        </h4>\n      </div>\n      <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n\n        <div class=\"btn-custom\" (click)=\"reset()\"> See All Buses</div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">See the routes</a>\n          </h4>\n        </div>\n        <div id=\"collapse2\" class=\"panel-collapse collapse\">\n          <ul>\n\n            <li *ngFor=\"let tag of tags; let i = index\" class=\"routes\" [class.active]='this.activeRoutes.get(tag)' (click)=\"changeView(tag)\">{{ tag }}</li>\n          </ul>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">About Lilia</a>\n            </h4>\n          </div>\n          <div id=\"collapse3\" class=\"panel-collapse collapse\">\n            <a href=\"https://github.com/lilia-simeonova\">GitHub</a>\n            <a href=\"http://thelillysblog.com\">Blog</a>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  \n\n  <span #map class=\"sf-map\">\n\n    <img *ngIf=\"!scale\" src=\"./../assets/default.gif\" width=\"300\" height=\"300\"/>\n\n    <app-buses *ngIf=\"scale\" [scale]=\"scale\">\n\n\n    </app-buses>\n\n  </span>\n\n\n\n  <div>\n   \n  </div>\n</div>\n\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MapService = (function () {
    function MapService(http, config) {
        this.http = http;
        this.config = config;
    }
    MapService.prototype.getStreets = function () {
        return this.http.get('./../assets/streets.json')
            .map(function (res) { return res; });
    };
    MapService.prototype.getOneRoute = function (route, n) {
        var url = this.config.RouteConfig(route, n);
        return this.http.get(url)
            .map(function (result) { return result.json(); });
    };
    MapService.prototype.getAllRoutes = function (tags) {
        var _this = this;
        console.log(tags);
        var n = new Date().getTime() - 1000 * 10;
        return Promise.all(tags.map(function (tag) {
            return new Promise(function (resolve, reject) {
                _this.getOneRoute(tag, n).subscribe(function (result) {
                    if (result.error) {
                        reject(result.error);
                        console.log(result.error);
                    }
                    else {
                        // console.log(result)
                        resolve({ tag: tag, result: result });
                    }
                });
            });
        }));
    };
    MapService.prototype.getRoutes = function () {
        return this.http.get(this.config.RoutesUrl)
            .map(function (res) { return res.json(); });
    };
    return MapService;
}());
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigToken */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["Config"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["Config"]) === "function" && _b || Object])
], MapService);

var _a, _b;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DevConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigToken; });

var DevConfig = {
    StreetsConfigUrl: 'https://sf-map-169207.appspot.com/load',
    RoutesUrl: 'http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni',
    RouteConfig: function (route, time) {
        return 'http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=' + route + '&t=' + time;
    }
};
var ConfigToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* InjectionToken */]('AppConfig');
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_map_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_config_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__buses_buses_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_8__buses_buses_component__["a" /* BusesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_map_service__["a" /* MapService */], { provide: __WEBPACK_IMPORTED_MODULE_5__shared_config_service__["a" /* ConfigToken */], useValue: __WEBPACK_IMPORTED_MODULE_5__shared_config_service__["b" /* DevConfig */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_map_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntervalDuration = 15000;
var BusesComponent = (function () {
    function BusesComponent(map) {
        this.map = map;
        this.tags = [];
        this.restrictedTags = [];
        this.hash = new Map();
        this.activeRoutes = new Map();
    }
    BusesComponent.prototype.ngOnInit = function () {
        this.view = 'default';
        this.fetchBuses();
    };
    BusesComponent.prototype.changeView = function (id) {
        console.log('I trigerred change', id);
        this.restrictedTags.push(id);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('svg').select('svg').select('g');
        svg.selectAll('image').remove();
        this.view = 'none';
        this.hash = new Map();
        this.activeRoutes.set(id, 'active');
        this.fetchBuses();
    };
    BusesComponent.prototype.reset = function () {
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('svg').select('svg').select('g');
        svg.selectAll('image').remove();
        this.view = 'default';
        this.activeRoutes = new Map();
        this.hash = new Map();
        this.fetchBuses();
    };
    BusesComponent.prototype.fetchBuses = function () {
        var _this = this;
        this.map.getStreets()
            .subscribe(function (res) {
            _this.result = res['_body'];
            _this.result = JSON.parse(_this.result);
            _this.center = __WEBPACK_IMPORTED_MODULE_1_d3__["geoCentroid"](_this.result);
            var getData = function () {
                _this.map.getRoutes()
                    .subscribe(function (res) {
                    _this.routes = res;
                    var restriction;
                    if (_this.view === 'default') {
                        restriction = _this.tags;
                        if (!_this.tags.length) {
                            _this.routes.route.map(function (tag) { return _this.tags.push(tag.tag); });
                        }
                    }
                    else if (_this.view === 'none') {
                        restriction = _this.restrictedTags;
                    }
                    _this.map.getAllRoutes(restriction)
                        .then(_this.renderRoute.bind(_this));
                });
            };
            getData();
            setInterval(getData, IntervalDuration);
        });
    };
    BusesComponent.prototype.renderRoute = function (route) {
        var tag;
        var projection = __WEBPACK_IMPORTED_MODULE_1_d3__["geoMercator"]().center(this.center)
            .scale(this.scale);
        var g = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('g');
        for (var i = 0; i < route.length; i++) {
            tag = route[i]['tag'];
            this.buses = route[i]['result'];
            var arr = this.buses.vehicle || [];
            for (var i_1 = 0; i_1 < arr.length; i_1++) {
                var cx = projection([arr[i_1].lon, arr[i_1].lat])[0];
                var cy = projection([arr[i_1].lon, arr[i_1].lat])[1];
                var width = 50;
                var height = 50;
                if (this.hash.get(arr[i_1]['id']) === undefined) {
                    this.hash.set(arr[i_1]['id'], { coordinates: [arr[i_1].lon, arr[i_1].lat] });
                    var img = g.append('image')
                        .data([cx, cy])
                        .attr('width', width)
                        .attr('height', height)
                        .attr('x', cx)
                        .attr('y', cy)
                        .attr('id', 'a' + arr[i_1]['id'])
                        .attr('xlink:href', './../assets/bus-side-view (1).svg')
                        .append('title').text('Bus #' + arr[i_1]['id'] + ' Route #' + tag);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#a' + arr[i_1]['id'])
                        .data([cx, cy])
                        .transition()
                        .attr('width', width)
                        .attr('height', height)
                        .attr('x', cx)
                        .attr('y', cy);
                    this.hash.set(arr[i_1]['id'], { coordinates: [arr[i_1].lon, arr[i_1].lat] });
                }
            }
        }
    };
    return BusesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BusesComponent.prototype, "scale", void 0);
BusesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-buses',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_map_service__["a" /* MapService */]) === "function" && _a || Object])
], BusesComponent);

var _a;
//# sourceMappingURL=buses.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_map_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Width = 1200;
var Height = 600;
var MapComponent = (function () {
    function MapComponent(map) {
        this.map = map;
    }
    // projection$ = this.http.get(this.url)
    //   .map((res: Response) => res.json())
    //   .map((res => d3.geoCentroid(res.result)));
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.getStreets()
            .subscribe(function (res) {
            res = res['_body'];
            res = JSON.parse(res);
            _this.renderMap(res);
        });
    };
    // Intentionally public in order to be testable
    MapComponent.prototype.getScale = function (bounds) {
        var scale = 170;
        var hscale = scale * Width / (bounds[1][0] - bounds[0][0]);
        var vscale = scale * Height / (bounds[1][1] - bounds[0][1]);
        return (hscale < vscale) ? hscale : vscale;
    };
    MapComponent.prototype.renderMap = function (map) {
        this.center = __WEBPACK_IMPORTED_MODULE_4_d3__["geoCentroid"](map);
        var path = __WEBPACK_IMPORTED_MODULE_4_d3__["geoPath"]().projection(undefined);
        var bounds = path.bounds(map);
        this.scale = this.getScale(bounds);
        var projection = __WEBPACK_IMPORTED_MODULE_4_d3__["geoMercator"]().center(this.center)
            .scale(this.scale);
        path = path.projection(projection);
        var svg = __WEBPACK_IMPORTED_MODULE_4_d3__["select"]('span.sf-map').append('svg')
            .attr('width', Width)
            .attr('height', Height)
            .style('fill', 'white')
            .style('margin-top', '50px');
        var svg2 = svg.append('svg')
            .style('stroke-width', '1.5px')
            .attr('class', 'map2')
            .attr('width', Width)
            .attr('height', Height)
            .append('g');
        var g = svg2.append('g')
            .style('stroke-width', '1.5px')
            .attr('class', 'map2');
        g.selectAll('path')
            .data(map.features)
            .enter().append('path')
            .attr('d', path)
            .attr('stroke', 'black');
        var zoom = __WEBPACK_IMPORTED_MODULE_4_d3__["zoom"]()
            .on('zoom', function () {
            svg2.attr('transform', __WEBPACK_IMPORTED_MODULE_4_d3__["event"].transform);
        });
        svg.call(zoom)
            .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_4_d3__["zoomIdentity"]);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__(144),
        styles: [__webpack_require__(141)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_map_service__["a" /* MapService */]) === "function" && _a || Object])
], MapComponent);

var _a;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[171]);
//# sourceMappingURL=main.bundle.js.map