/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__racional__ = __webpack_require__(1);

var Saludos = /** @class */ (function () {
    function Saludos() {
    }
    Saludos.prototype.saludo = function () {
        console.log('Hello world som ething');
        console.log('something else');
    };
    return Saludos;
}());
// var s: Saludos;
//
// s = new Saludos();
//
// s.saludo();
var r, r1, r2, rr, sum;
r = new __WEBPACK_IMPORTED_MODULE_0__racional__["a" /* numeros */].Racional(5, 6);
r2 = new __WEBPACK_IMPORTED_MODULE_0__racional__["a" /* numeros */].Racional(4, 8);
r.disp();
console.log("+");
r2.disp();
console.log("=");
sum = __WEBPACK_IMPORTED_MODULE_0__racional__["a" /* numeros */].Racional.suma(r, r2);
sum.disp();
console.log("reduced");
rr = __WEBPACK_IMPORTED_MODULE_0__racional__["a" /* numeros */].Racional.reducion(sum);
rr.disp();
var sn;
var sd;
sn = prompt("numerador:");
sd = prompt("Denomador:");
r1 = new __WEBPACK_IMPORTED_MODULE_0__racional__["a" /* numeros */].Racional(Number(sn), Number(sd));
r1.dispHtml();
// numeros.Racional.move(55);
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeteasdfrs = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeteasdfrs);
//     }
// }
//
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters:number = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
//
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
//
// sam.move(3);
// tom.move();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return numeros; });
var numeros;
(function (numeros) {
    var Racional = /** @class */ (function () {
        function Racional(n, d) {
            //undefined es valor de nada
            if (n == undefined && d == undefined) {
                this.n = 0;
                this.d = 1;
            }
            else {
                this.n = n;
                this.d = d;
            }
        }
        Racional.move = function (distanceinMeters) {
            if (distanceinMeters === void 0) { distanceinMeters = 0; }
            console.log("Animal moved " + distanceinMeters);
        };
        Racional.suma = function (r1, r2) {
            var rr;
            var nr, dr;
            nr = (r1.n * r2.d) + (r1.d * r2.n);
            dr = r1.d * r2.d;
            rr = new Racional(nr, dr);
            return rr;
        };
        Racional.resta = function (r1, r2) {
            var rr;
            var nr, dr;
            nr = (r1.n * r2.d) - (r1.d * r2.n);
            dr = r1.d * r2.d;
            rr = new Racional(nr, dr);
            return rr;
        };
        // hacer las funciones de resta, mult, div
        // hacer algorimo maximo comun eculaid
        Racional.reducion = function (rad) {
            var r1, r2;
            r1 = rad.n;
            r2 = rad.d;
            if (r1 < 1 || r2 < 1) {
                console.log('not possible');
            }
            var r;
            do {
                r = r1 % r2;
                r1 = r2;
                r2 = r;
            } while (r2 != 0);
            rad.n = rad.n / r1;
            rad.d = rad.d / r1;
            return rad;
        };
        Racional.prototype.disp = function () {
            console.log(this.n + " / " + this.d);
        };
        Racional.prototype.dispHtml = function () {
            document.writeln(this.n + "/" + this.d + "<br>");
        };
        return Racional;
    }());
    numeros.Racional = Racional;
})(numeros || (numeros = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY2MTczMmU3ODM4OTFhNmRmNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yYWNpb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3RG1DO0FBQ25DO0lBQUE7SUFNQSxDQUFDO0lBSkcsd0JBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBRUQsa0JBQWtCO0FBQ2xCLEVBQUU7QUFDRixxQkFBcUI7QUFDckIsRUFBRTtBQUNGLGNBQWM7QUFFZCxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFxQixDQUFDO0FBRXJDLENBQUMsR0FBRyxJQUFJLDBEQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixFQUFFLEdBQUcsSUFBSSwwREFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FB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SSxHQUFKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELDJCQUFRLEdBQVI7WUFDQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDO1FBQzNDLENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FBQztJQWxFVyxnQkFBUSxXQWtFbkI7QUFFUCxDQUFDLEVBdkVnQixPQUFPLEtBQVAsT0FBTyxRQXVFdkIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjY2MTczMmU3ODM4OTFhNmRmNTUiLCJpbXBvcnQge251bWVyb3N9IGZyb20gJy4vcmFjaW9uYWwnO1xyXG5jbGFzcyBTYWx1ZG9zIHtcclxuXHJcbiAgICBzYWx1ZG8oKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZCBzb20gZXRoaW5nJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgZWxzZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyB2YXIgczogU2FsdWRvcztcclxuLy9cclxuLy8gcyA9IG5ldyBTYWx1ZG9zKCk7XHJcbi8vXHJcbi8vIHMuc2FsdWRvKCk7XHJcblxyXG52YXIgcixyMSxyMixycixzdW06IG51bWVyb3MuUmFjaW9uYWw7XHJcblxyXG5yID0gbmV3IG51bWVyb3MuUmFjaW9uYWwoNSw2KTtcclxucjIgPSBuZXcgbnVtZXJvcy5SYWNpb25hbCg0LDgpO1xyXG5yLmRpc3AoKTtcclxuY29uc29sZS5sb2coXCIrXCIpO1xyXG5yMi5kaXNwKCk7XHJcbmNvbnNvbGUubG9nKFwiPVwiKTtcclxuc3VtID0gbnVtZXJvcy5SYWNpb25hbC5zdW1hKHIscjIpO1xyXG5zdW0uZGlzcCgpO1xyXG5jb25zb2xlLmxvZyhcInJlZHVjZWRcIik7XHJcbiByciA9IG51bWVyb3MuUmFjaW9uYWwucmVkdWNpb24oc3VtKTtcclxuIHJyLmRpc3AoKTtcclxuXHJcblxyXG52YXIgc246c3RyaW5nO1xyXG52YXIgc2Q6c3RyaW5nO1xyXG5zbj1wcm9tcHQoXCJudW1lcmFkb3I6XCIpO1xyXG5zZD1wcm9tcHQoXCJEZW5vbWFkb3I6XCIpO1xyXG5cclxucjEgPSBuZXcgbnVtZXJvcy5SYWNpb25hbChOdW1iZXIoc24pLE51bWJlcihzZCkpO1xyXG5yMS5kaXNwSHRtbCgpO1xyXG4vLyBudW1lcm9zLlJhY2lvbmFsLm1vdmUoNTUpO1xyXG5cclxuXHJcbi8vIGNsYXNzIEFuaW1hbCB7XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih0aGVOYW1lOiBzdHJpbmcpIHsgdGhpcy5uYW1lID0gdGhlTmFtZTsgfVxyXG4vLyAgICAgbW92ZShkaXN0YW5jZUluTWV0ZXJzOiBudW1iZXIgPSAwKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBtb3ZlZCAke2Rpc3RhbmNlSW5NZXRlcnN9bS5gKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyBjbGFzcyBTbmFrZSBleHRlbmRzIEFuaW1hbCB7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHsgc3VwZXIobmFtZSk7IH1cclxuLy8gICAgIG1vdmUoZGlzdGFuY2VJbk1ldGVhc2RmcnMgPSA1KSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJTbGl0aGVyaW5nLi4uXCIpO1xyXG4vLyAgICAgICAgIHN1cGVyLm1vdmUoZGlzdGFuY2VJbk1ldGVhc2RmcnMpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGNsYXNzIEhvcnNlIGV4dGVuZHMgQW5pbWFsIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykgeyBzdXBlcihuYW1lKTsgfVxyXG4vLyAgICAgbW92ZShkaXN0YW5jZUluTWV0ZXJzOm51bWJlciA9IDQ1KSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJHYWxsb3BpbmcuLi5cIik7XHJcbi8vICAgICAgICAgc3VwZXIubW92ZShkaXN0YW5jZUluTWV0ZXJzKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyBsZXQgc2FtID0gbmV3IFNuYWtlKFwiU2FtbXkgdGhlIFB5dGhvblwiKTtcclxuLy8gbGV0IHRvbTogQW5pbWFsID0gbmV3IEhvcnNlKFwiVG9tbXkgdGhlIFBhbG9taW5vXCIpO1xyXG4vL1xyXG4vLyBzYW0ubW92ZSgzKTtcclxuLy8gdG9tLm1vdmUoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiZXhwb3J0IG5hbWVzcGFjZSBudW1lcm9ze1xyXG5cclxuXHJcbiAgICBleHBvcnQgIGNsYXNzIFJhY2lvbmFsIHtcclxuICAgICAgICBuOiBudW1iZXI7IC8vIG51bWVyYWRvclxyXG4gICAgICAgIGQ6bnVtYmVyOyAvLyBkZW5vbWluYWRvclxyXG5cclxuICAgICAgICAvLyBzb2JyZSBjYXJnYSBkZWwgY29uc3RydWN0b3JcclxuICAgICAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG46bnVtYmVyICxkOm51bWJlcik7XHJcbiAgICAgICAgY29uc3RydWN0b3Iobj86bnVtYmVyLGQ/Om51bWJlcil7XHJcbiAgICAgICAgICAvL3VuZGVmaW5lZCBlcyB2YWxvciBkZSBuYWRhXHJcbiAgICAgICAgICBpZihuPT11bmRlZmluZWQmJmQ9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMubj0wO1xyXG4gICAgICAgICAgICAgdGhpcy5kPTE7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5uPW47XHJcbiAgICAgICAgICAgIHRoaXMuZD1kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBzdGF0aWMgICAgbW92ZShkaXN0YW5jZWluTWV0ZXJzOm51bWJlciA9IDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEFuaW1hbCBtb3ZlZCAke2Rpc3RhbmNlaW5NZXRlcnN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBzdW1hKHIxOiBSYWNpb25hbCwgcjI6UmFjaW9uYWwpOlJhY2lvbmFse1xyXG4gICAgICB2YXIgIHJyOlJhY2lvbmFsO1xyXG4gICAgICB2YXIgbnIsZHI6bnVtYmVyO1xyXG4gICAgICBuciA9IChyMS5uKnIyLmQpKyhyMS5kKnIyLm4pO1xyXG4gICAgICBkciA9IHIxLmQqcjIuZDtcclxuICAgICAgICByciA9IG5ldyBSYWNpb25hbChucixkcik7XHJcbiAgICAgICAgICByZXR1cm4gcnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0aWMgcmVzdGEocjE6IFJhY2lvbmFsLCByMjpSYWNpb25hbCk6UmFjaW9uYWx7XHJcbiAgICAgICAgdmFyICBycjpSYWNpb25hbDtcclxuICAgICAgICB2YXIgbnIsZHI6bnVtYmVyO1xyXG4gICAgICAgIG5yID0gKHIxLm4qcjIuZCktKHIxLmQqcjIubik7XHJcbiAgICAgICAgZHIgPSByMS5kKnIyLmQ7XHJcbiAgICAgICAgICByciA9IG5ldyBSYWNpb25hbChucixkcik7XHJcbiAgICAgICAgICAgIHJldHVybiBycjtcclxuICAgICAgICAgICAgfVxyXG4vLyBoYWNlciBsYXMgZnVuY2lvbmVzIGRlIHJlc3RhLCBtdWx0LCBkaXZcclxuLy8gaGFjZXIgYWxnb3JpbW8gbWF4aW1vIGNvbXVuIGVjdWxhaWRcclxuICAgICAgc3RhdGljIHJlZHVjaW9uKHJhZDpSYWNpb25hbCk6UmFjaW9uYWx7XHJcbiAgICAgICAgdmFyIHIxLHIyOm51bWJlcjtcclxuICAgICAgICByMSA9IHJhZC5uO1xyXG4gICAgICAgIHIyID0gcmFkLmQ7XHJcbiAgICAgICAgICAgaWYoIHIxIDwgMSB8fCByMiA8IDEgKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHBvc3NpYmxlJyk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHZhciByOm51bWJlcjtcclxuICAgICAgICAgICBkb3tcclxuICAgICAgICAgICAgIHIgPSByMSAlIHIyO1xyXG4gICAgICAgICAgICByMSA9IHIyO1xyXG4gICAgICAgICAgICByMiA9IHI7XHJcbiAgICAgICAgICAgfXdoaWxlICggcjIgIT0gMCk7XHJcblxyXG4gICAgICAgICAgIHJhZC5uID0gcmFkLm4vcjE7XHJcbiAgICAgICAgICAgcmFkLmQgPSByYWQuZC9yMTtcclxuXHJcbiAgICAgICAgICAgcmV0dXJuIHJhZDtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGRpc3AoKTp2b2lke1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5uK1wiIC8gXCIrdGhpcy5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcEh0bWwoKTp2b2lke1xyXG4gICAgICAgICBkb2N1bWVudC53cml0ZWxuKHRoaXMubitcIi9cIit0aGlzLmQrXCI8YnI+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYWNpb25hbC50cyJdLCJzb3VyY2VSb290IjoiIn0=