(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define(["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["RIS"] = factory(require("PIXI"));
	else
		root["RIS"] = factory(root["PIXI"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_pixi_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elements/base.element.ts":
/*!**************************************!*\
  !*** ./src/elements/base.element.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var mouse_service_1 = __webpack_require__(/*! ../services/mouse.service */ "./src/services/mouse.service.ts");
var Base = /** @class */ (function () {
    function Base(_a) {
        var ref = _a.ref, color = _a.color, x = _a.x, y = _a.y;
        var _this = this;
        this.container = new pixi_js_1.Container();
        this.x = x;
        this.y = y;
        this.ref = ref;
        this.color = color;
        this.container.interactive = true;
        this.container.buttonMode = true;
        this.container.sortableChildren = true;
        this.container
            .on("pointerdown", mouse_service_1.onDragStart)
            .on("pointerup", mouse_service_1.onDragEnd)
            .on("pointerupoutside", mouse_service_1.onDragEnd)
            .on("pointermove", mouse_service_1.onDragMoveStep);
        this.container.on("pointerup", function () { return (window.muup.selected = _this); });
        window.muup.container.addChild(this.container);
    }
    Base.prototype.select = function () {
        window.muup.selected = this;
    };
    Object.defineProperty(Base.prototype, "x", {
        get: function () {
            return this.container.position.x;
        },
        set: function (x) {
            this.container.position.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "y", {
        get: function () {
            return this.container.position.y;
        },
        set: function (y) {
            this.container.position.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "color", {
        set: function (color) {
            this._color = pixi_js_1.utils.string2hex(color);
        },
        enumerable: false,
        configurable: true
    });
    return Base;
}());
exports.Base = Base;


/***/ }),

/***/ "./src/elements/component.element.ts":
/*!*******************************************!*\
  !*** ./src/elements/component.element.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMPONENT = void 0;
var base_element_1 = __webpack_require__(/*! ./base.element */ "./src/elements/base.element.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var label_widget_1 = __webpack_require__(/*! ./widgets/label.widget */ "./src/elements/widgets/label.widget.ts");
var sprite_widget_1 = __webpack_require__(/*! ./widgets/sprite.widget */ "./src/elements/widgets/sprite.widget.ts");
var COMPONENT = /** @class */ (function (_super) {
    __extends(COMPONENT, _super);
    function COMPONENT(options) {
        var _this = _super.call(this, options) || this;
        _this._sprite = new sprite_widget_1.SPRITE();
        _this._label = new label_widget_1.LABEL();
        return _this;
    }
    COMPONENT.prototype.setup = function () {
        this._label.color = this._color;
        this.container.addChild(this._label);
        this._sprite.zIndex = 2;
        this._sprite.position.y = this._label.height + 20;
        this.container.addChild(this._sprite);
        this.circle(0, this.container.height + 20);
        this.circle(0, this.container.height + 20, this._sprite.width / 4);
        this.circle(0, this.container.height + 20, this._sprite.width / 2);
        this.container.pivot.set(0, this.container.height + 20);
    };
    COMPONENT.prototype.circle = function (x, y, offset) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        var circle = new pixi_js_1.Graphics();
        var rad = offset;
        window.muup.ticker.add(function (d) {
            if (rad >= _this._sprite.width) {
                rad = 0;
            }
            rad += d / 2;
            var opacity = (_this._sprite.width - rad) / _this._sprite.width;
            circle.clear();
            circle.lineStyle(2, _this._color, opacity);
            circle.beginFill(_this._color, opacity - 0.1);
            circle.drawEllipse(x, y, rad, rad / 1.6);
        });
        circle.zIndex = 0;
        this.container.addChild(circle);
    };
    Object.defineProperty(COMPONENT.prototype, "props", {
        get: function () {
            return this._props;
        },
        set: function (props) {
            this._props = props;
            this._sprite.texture = pixi_js_1.Texture.from("".concat(props.name));
            this._label.text = props.label;
            this.container.removeChildren();
            this.setup();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(COMPONENT.prototype, "color", {
        get: function () {
            return pixi_js_1.utils.hex2string(this._color);
        },
        set: function (color) {
            this._color = pixi_js_1.utils.string2hex(color);
            if (this._label) {
                this._label.color = this._color;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(COMPONENT.prototype, "config", {
        get: function () {
            return {
                ref: this.ref,
                color: this.color,
                x: this.container.position.x,
                y: this.container.position.y,
                props: this._props,
            };
        },
        enumerable: false,
        configurable: true
    });
    return COMPONENT;
}(base_element_1.Base));
exports.COMPONENT = COMPONENT;


/***/ }),

/***/ "./src/elements/line.element.ts":
/*!**************************************!*\
  !*** ./src/elements/line.element.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LINE = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var base_element_1 = __webpack_require__(/*! ./base.element */ "./src/elements/base.element.ts");
var LINE = /** @class */ (function (_super) {
    __extends(LINE, _super);
    function LINE(options) {
        var _this = _super.call(this, options) || this;
        _this._line = new pixi_js_1.Graphics();
        _this.container.addChild(_this._line);
        return _this;
    }
    LINE.prototype.pointInLine = function (a, b, offset) {
        var segmentLength = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
        var factor = offset / segmentLength;
        return { x: a.x + (b.x - a.x) * factor, y: a.y + (b.y - a.y) * factor };
    };
    LINE.prototype.segments = function (points, radius) {
        var _this = this;
        return points.reduce(function (acc, point, i) {
            if (points[i - 1]) {
                if (i === points.length - 1) {
                    acc.push({
                        start: _this.pointInLine(points[i - 1], point, radius),
                        end: point,
                    });
                }
                else {
                    acc.push({
                        start: _this.pointInLine(points[i - 1], point, radius),
                        end: _this.pointInLine(point, points[i - 1], radius),
                    });
                }
                if (points[i + 1]) {
                    acc.push({
                        start: _this.pointInLine(point, points[i - 1], radius),
                        end: _this.pointInLine(point, points[i + 1], radius),
                        bazier: point,
                    });
                }
            }
            else {
                acc.push({
                    start: point,
                    end: _this.pointInLine(point, points[i + 1], radius),
                });
            }
            return acc;
        }, []);
    };
    LINE.prototype.setup = function () {
        var _this = this;
        this._line.clear();
        this._line.lineStyle(this._props.width, this._color, 1);
        this.segments(this._props.points, this._props.radius).forEach(function (segment) {
            if (!segment.bazier) {
                _this._line.moveTo(segment.start.x, segment.start.y);
                _this._line.lineTo(segment.end.x, segment.end.y);
                return;
            }
            _this._line.bezierCurveTo(segment.start.x, segment.start.y, segment.bazier.x, segment.bazier.y, segment.end.x, segment.end.y);
        });
        this._line.lineStyle(1, this._color, 0);
        this._line.beginFill(0x000000, 0.01);
        this._line.moveTo(this._props.points[0].x, this._props.points[0].y);
        this._props.points.forEach(function (point) {
            _this._line.lineTo(point.x + _this._props.width, point.y);
        });
        this._props.points.forEach(function (point, i, arr) {
            _this._line.lineTo(arr[arr.length - 1 - i].x - _this._props.width, arr[arr.length - 1 - i].y);
        });
        this._line.endFill();
        this._line.closePath();
    };
    LINE.prototype.addPoints = function () {
        var _this = this;
        this.container.removeChildren(1, this._props.points.length + 1);
        this._props.points.forEach(function (point) {
            var p = new pixi_js_1.Graphics();
            // p.pivot.set(3, 3 / 1.6);
            p.position.set(point.x, point.y);
            p.lineStyle(1, _this._color, 0.5);
            p.beginFill(0x000000, 1);
            p.drawEllipse(0, 0, 10, 10 / 1.6);
            p.endFill();
            p.interactive = true;
            p.buttonMode = true;
            _this.dragPoint(p, point);
            _this.container.addChild(p);
        });
    };
    LINE.prototype.dragPoint = function (p, point) {
        var _this = this;
        var data;
        var drag = false;
        p.on("pointerdown", function (e) {
            data = e.data;
            drag = true;
            window.muup.move = false;
            point.x += 10;
            _this.setup();
        })
            .on("pointerup", function () {
            drag = false;
            window.muup.move = true;
        })
            .on("pointerupoutside", function () {
            drag = false;
            window.muup.move = true;
        })
            .on("pointermove", function () {
            if (drag) {
                var newp = data.getLocalPosition(p.parent);
                point.x = newp.x;
                p.position.x = newp.x;
                point.y = newp.y;
                p.position.y = newp.y;
                _this.setup();
            }
        });
    };
    Object.defineProperty(LINE.prototype, "props", {
        get: function () {
            return this._props;
        },
        set: function (props) {
            this._props = props;
            if (this._line)
                this.setup();
            if (window.muup.editable)
                this.addPoints();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LINE.prototype, "color", {
        get: function () {
            return pixi_js_1.utils.hex2string(this._color);
        },
        set: function (color) {
            this._color = pixi_js_1.utils.string2hex(color);
            if (this._line) {
                this.setup();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LINE.prototype, "config", {
        get: function () {
            return {
                ref: this.ref,
                color: this.color,
                x: this.container.position.x,
                y: this.container.position.y,
                props: this._props,
            };
        },
        enumerable: false,
        configurable: true
    });
    return LINE;
}(base_element_1.Base));
exports.LINE = LINE;


/***/ }),

/***/ "./src/elements/plane.element.ts":
/*!***************************************!*\
  !*** ./src/elements/plane.element.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PLANE = void 0;
var base_element_1 = __webpack_require__(/*! ./base.element */ "./src/elements/base.element.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var PLANE = /** @class */ (function (_super) {
    __extends(PLANE, _super);
    function PLANE(options) {
        var _this = _super.call(this, options) || this;
        _this._plane = new pixi_js_1.Graphics();
        _this.container.addChild(_this._plane);
        return _this;
    }
    PLANE.prototype.setup = function () {
        var rad = (31 * Math.PI) / 180;
        var a = this._props.h * Math.sin(rad);
        var b = this._props.h * Math.cos(rad);
        var A = this._props.w * Math.sin(rad);
        var B = this._props.w * Math.cos(rad);
        this._plane.clear();
        this._plane.beginFill(this._color, 0.1);
        this._plane.lineStyle(2, this._color, 0.5);
        this._plane.moveTo(0, 0);
        this._plane.lineTo(b, -a);
        this._plane.lineTo(b + B, -a + A);
        this._plane.lineTo(B, A);
        this._plane.closePath();
        this._plane.endFill();
    };
    Object.defineProperty(PLANE.prototype, "props", {
        get: function () {
            return this._props;
        },
        set: function (props) {
            this._props = props;
            this.setup();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PLANE.prototype, "color", {
        get: function () {
            return pixi_js_1.utils.hex2string(this._color);
        },
        set: function (color) {
            this._color = pixi_js_1.utils.string2hex(color);
            if (this._plane) {
                this.setup();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PLANE.prototype, "config", {
        get: function () {
            return {
                ref: this.ref,
                color: this.color,
                x: this.container.position.x,
                y: this.container.position.y,
                props: this._props,
            };
        },
        enumerable: false,
        configurable: true
    });
    return PLANE;
}(base_element_1.Base));
exports.PLANE = PLANE;


/***/ }),

/***/ "./src/elements/text.element.ts":
/*!**************************************!*\
  !*** ./src/elements/text.element.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TEXT = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var base_element_1 = __webpack_require__(/*! ./base.element */ "./src/elements/base.element.ts");
var TEXT = /** @class */ (function (_super) {
    __extends(TEXT, _super);
    function TEXT(options) {
        var _this = _super.call(this, options) || this;
        _this._text = new pixi_js_1.Text("");
        return _this;
    }
    TEXT.prototype.setup = function () {
        if (this._props.skew) {
            this._text.skew.set(-1.03, (31 * Math.PI) / 180);
        }
        this._text.style.fontWeight = this._props.fontWidth;
        this._text.style.fontSize = this._props.fontSize;
        this._text.style.fill = this._color;
        this._text.text = this._props.text;
        this.container.addChild(this._text);
    };
    Object.defineProperty(TEXT.prototype, "props", {
        get: function () {
            return this._props;
        },
        set: function (props) {
            this._props = props;
            this.container.removeChildren();
            this.setup();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TEXT.prototype, "text", {
        set: function (text) {
            if (this._text) {
                this._text.text = text;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TEXT.prototype, "color", {
        get: function () {
            return pixi_js_1.utils.hex2string(this._color);
        },
        set: function (color) {
            this._color = pixi_js_1.utils.string2hex(color);
            if (this._text) {
                this._text.style.fill = this._color;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TEXT.prototype, "config", {
        get: function () {
            return {
                ref: this.ref,
                color: this.color,
                x: this.container.position.x,
                y: this.container.position.y,
                props: this._props,
            };
        },
        enumerable: false,
        configurable: true
    });
    return TEXT;
}(base_element_1.Base));
exports.TEXT = TEXT;


/***/ }),

/***/ "./src/elements/widgets/label.widget.ts":
/*!**********************************************!*\
  !*** ./src/elements/widgets/label.widget.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LABEL = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var LABEL = /** @class */ (function (_super) {
    __extends(LABEL, _super);
    function LABEL() {
        var _this = _super.call(this) || this;
        _this._text = "";
        _this._label = new pixi_js_1.Graphics();
        _this._style = new pixi_js_1.TextStyle({
            letterSpacing: 1,
            fontSize: 14,
            fill: "#A2A3A7",
            wordWrap: true,
            wordWrapWidth: 100,
            lineJoin: "round",
        });
        _this._labelText = new pixi_js_1.Text("", _this._style);
        _this._labelText.x = 16;
        _this._labelText.y = 4;
        _this.addChild(_this._label);
        _this.addChild(_this._labelText);
        _this.draw();
        return _this;
    }
    LABEL.prototype.draw = function () {
        this._label.clear();
        this._label.beginFill(this._color);
        this._label.drawRect(0, 0, 6, this._labelText.height + 10);
        this._label.endFill();
        this._label.lineStyle(1, 0xffffff, 0.1);
        this._label.beginFill(0x11121b, 1);
        this._label.drawRect(6, 0, this._labelText.width + 20, this._labelText.height + 10);
        this._label.endFill();
    };
    Object.defineProperty(LABEL.prototype, "color", {
        set: function (color) {
            this._color = color;
            this.draw();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LABEL.prototype, "text", {
        set: function (text) {
            var _this = this;
            this._text = "";
            var acc = 0;
            text.split("").forEach(function (s) {
                if (acc < 20) {
                    acc += 1;
                    _this._text += s;
                }
                else {
                    acc = 0;
                    _this._text += " ";
                }
            }, 0);
            this._labelText.text = this._text;
            this.draw();
        },
        enumerable: false,
        configurable: true
    });
    return LABEL;
}(pixi_js_1.Container));
exports.LABEL = LABEL;


/***/ }),

/***/ "./src/elements/widgets/sprite.widget.ts":
/*!***********************************************!*\
  !*** ./src/elements/widgets/sprite.widget.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SPRITE = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var SPRITE = /** @class */ (function (_super) {
    __extends(SPRITE, _super);
    function SPRITE() {
        var _this = _super.call(this) || this;
        _this._offset = 10;
        _this.swing();
        return _this;
    }
    SPRITE.prototype.swing = function () {
        var _this = this;
        var flag = false;
        window.muup.ticker.add(function (d) {
            if (_this._sprite) {
                if (_this._sprite.position.y >= _this._offset)
                    flag = false;
                else if (_this._sprite.position.y <= 0)
                    flag = true;
                if (flag)
                    _this._sprite.position.y += d / 5;
                else
                    _this._sprite.position.y -= d / 5;
            }
        });
    };
    Object.defineProperty(SPRITE.prototype, "texture", {
        set: function (texture) {
            this.removeChildren();
            this._sprite = new pixi_js_1.Sprite(texture);
            this.addChild(this._sprite);
            this.pivot.set(this._sprite.width / 2, 0);
        },
        enumerable: false,
        configurable: true
    });
    return SPRITE;
}(pixi_js_1.Container));
exports.SPRITE = SPRITE;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.create = exports.App = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var mouse_service_1 = __webpack_require__(/*! ./services/mouse.service */ "./src/services/mouse.service.ts");
var component_element_1 = __webpack_require__(/*! ./elements/component.element */ "./src/elements/component.element.ts");
var line_element_1 = __webpack_require__(/*! ./elements/line.element */ "./src/elements/line.element.ts");
var plane_element_1 = __webpack_require__(/*! ./elements/plane.element */ "./src/elements/plane.element.ts");
var text_element_1 = __webpack_require__(/*! ./elements/text.element */ "./src/elements/text.element.ts");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(selector, options) {
        var _this = _super.call(this, __assign({ antialias: true, backgroundColor: 0x0a0c13 }, options)) || this;
        _this.offset = { x: 0, y: 0 };
        _this.editable = false;
        _this.container = new pixi_js_1.Container();
        _this.move = true;
        _this._config = {
            offset: { x: 0, y: 0 },
            assets: [],
            components: [],
            texts: [],
            planes: [],
            lines: [],
        };
        _this.refs = {};
        var container = document.querySelector(selector);
        if (!container)
            document.body.appendChild(_this.view);
        else
            container.appendChild(_this.view);
        _this.loader = pixi_js_1.Loader.shared;
        return _this;
    }
    App.prototype.setup = function () {
        var _this = this;
        this.bg = new pixi_js_1.TilingSprite(pixi_js_1.Texture.from("bg"), this.screen.width, this.screen.height);
        this.bg.interactive = true;
        this.bg
            .on("pointerdown", function () {
            _this.selected = null;
        })
            .on("pointerdown", mouse_service_1.onDragStart)
            .on("pointerup", mouse_service_1.onDragEnd)
            .on("pointerupoutside", mouse_service_1.onDragEnd)
            .on("pointermove", mouse_service_1.onDragMoveMap);
        this.stage.addChild(this.bg);
        this.stage.addChild(this.container);
        this.ticker.add(function (d) {
            _this.scrollToSelected(d);
            if (_this.container.position.x != _this.bg.tilePosition.x) {
                _this.container.position.x = _this.bg.tilePosition.x;
                _this.container.position.y = _this.bg.tilePosition.y;
                _this._config.offset.x = _this.bg.tilePosition.x;
                _this._config.offset.y = _this.bg.tilePosition.y;
            }
        });
    };
    App.prototype.load = function (config, cb, editable) {
        var _this = this;
        if (editable) {
            this.editable = true;
        }
        config.assets.forEach(function (sprite) {
            _this._config.assets.push(sprite);
            _this.loader.add(sprite.name, sprite.data);
        });
        this.loader.load(function () {
            _this.setup();
            _this.config = config;
            cb(_this);
        });
        return this;
    };
    Object.defineProperty(App.prototype, "config", {
        set: function (config) {
            var _this = this;
            this.bg.tilePosition.x = config.offset.x;
            this.bg.tilePosition.y = config.offset.y;
            this.refs = {};
            this.container.removeChildren();
            config.planes.forEach(function (plane) {
                _this.add("plane", plane).props = plane.props;
            });
            config.lines.forEach(function (line) {
                _this.add("line", line).props = line.props;
            });
            config.components.forEach(function (component) {
                _this.add("component", component).props = component.props;
            });
            config.texts.forEach(function (text) {
                _this.add("text", text).props = text.props;
            });
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.scrollToSelected = function (d) {
        if (this._selected && this.bg.tilePosition.x > this.offset.x) {
            this.bg.tilePosition.x -= d * 20;
            if (this.bg.tilePosition.x < this.offset.x)
                this.bg.tilePosition.x = this.offset.x;
        }
        if (this._selected && this.bg.tilePosition.x < this.offset.x) {
            this.bg.tilePosition.x += d * 20;
            if (this.bg.tilePosition.x > this.offset.x)
                this.bg.tilePosition.x = this.offset.x;
        }
        if (this._selected && this.bg.tilePosition.y > this.offset.y) {
            this.bg.tilePosition.y -= d * 20;
            if (this.bg.tilePosition.y < this.offset.y)
                this.bg.tilePosition.y = this.offset.y;
        }
        if (this._selected && this.bg.tilePosition.y < this.offset.y) {
            this.bg.tilePosition.y += d * 20;
            if (this.bg.tilePosition.y > this.offset.y)
                this.bg.tilePosition.y = this.offset.y;
        }
    };
    App.prototype.add = function (type, config) {
        if (!this.refs[config.ref]) {
            switch (type) {
                case "component":
                    var comp = new component_element_1.COMPONENT(config);
                    this._config.components.push(comp);
                    this.refs[config.ref] = comp;
                    return comp;
                case "text":
                    var text = new text_element_1.TEXT(config);
                    this._config.texts.push(text);
                    this.refs[config.ref] = text;
                    return text;
                case "plane":
                    var plane = new plane_element_1.PLANE(config);
                    this._config.planes.push(plane);
                    this.refs[config.ref] = plane;
                    return plane;
                case "line":
                    var line = new line_element_1.LINE(config);
                    this._config.lines.push(line);
                    this.refs[config.ref] = line;
                    return line;
                default:
                    break;
            }
        }
        else {
            console.error("In schema configuration link \"".concat(config.ref, "\" is duplicated. ").concat(JSON.stringify(config, null, 2), "\""));
        }
    };
    App.prototype.remove = function (ref) {
        if (this.refs[ref]) {
            this.container.removeChild(this.refs[ref].container);
            delete this.refs[ref];
        }
    };
    App.prototype.use = function (plugin) {
        plugin(this);
    };
    App.prototype.makeConfig = function () {
        return {
            offset: {
                x: this.bg.tilePosition.x,
                y: this.bg.tilePosition.y,
            },
            assets: this._config.assets,
            components: this._config.components.map(function (comp) { return comp.config; }),
            texts: this._config.texts.map(function (text) { return text.config; }),
            planes: this._config.planes.map(function (plane) { return plane.config; }),
            lines: this._config.lines.map(function (line) { return line.config; }),
        };
    };
    Object.defineProperty(App.prototype, "selected", {
        set: function (el) {
            if (el) {
                this._selected = el;
                this.offset = {
                    x: this.screen.width / 2 - el.container.position.x,
                    y: this.screen.height / 2 - el.container.position.y,
                };
            }
            else
                this._selected = null;
        },
        enumerable: false,
        configurable: true
    });
    return App;
}(pixi_js_1.Application));
exports.App = App;
function create(selector, options) {
    window.muup = new App(selector, options);
    return window.muup;
}
exports.create = create;


/***/ }),

/***/ "./src/services/mouse.service.ts":
/*!***************************************!*\
  !*** ./src/services/mouse.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onDragMoveMap = exports.onDragMoveStep = exports.onDragMove = exports.onDragEnd = exports.onDragStart = void 0;
function onDragStart(event) {
    // this.scale.set(0.95, 0.95);
    this.data = event.data;
    this.start = this.data.getLocalPosition(this.parent);
    this.alpha = 0.8;
    this.dragging = true;
}
exports.onDragStart = onDragStart;
function onDragEnd() {
    // this.scale.set(1, 1);
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}
exports.onDragEnd = onDragEnd;
function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}
exports.onDragMove = onDragMove;
function onDragMoveStep() {
    if (this.dragging && window.muup.move) {
        var newPosition = this.data.getLocalPosition(this.parent);
        if (newPosition.x - this.x >= 25) {
            this.x += 25;
        }
        else if (newPosition.x - this.x <= -25) {
            this.x -= 25;
        }
        if (newPosition.y - this.y >= 15) {
            this.y += 15;
        }
        else if (newPosition.y - this.y <= -15) {
            this.y -= 15;
        }
    }
}
exports.onDragMoveStep = onDragMoveStep;
function onDragMoveMap() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        var x = newPosition.x - this.start.x;
        var y = newPosition.y - this.start.y;
        this.tilePosition.x += x;
        this.tilePosition.y += y;
        this.start.x += x;
        this.start.y += y;
    }
}
exports.onDragMoveMap = onDragMoveMap;


/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_pixi_js__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFFLENBQUM7U0FDZDthQUFNLElBQUksV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Q7S0FDRjtBQUNILENBQUM7QUFkRCx3Q0FjQztBQUNELFNBQWdCLGFBQWE7SUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2pCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkI7QUFDSCxDQUFDO0FBVkQsc0NBVUM7Ozs7Ozs7Ozs7O0FDL0NEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUklTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9SSVMvLi9zcmMvZWxlbWVudHMvYmFzZS5lbGVtZW50LnRzIiwid2VicGFjazovL1JJUy8uL3NyYy9lbGVtZW50cy9jb21wb25lbnQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9SSVMvLi9zcmMvZWxlbWVudHMvbGluZS5lbGVtZW50LnRzIiwid2VicGFjazovL1JJUy8uL3NyYy9lbGVtZW50cy9wbGFuZS5lbGVtZW50LnRzIiwid2VicGFjazovL1JJUy8uL3NyYy9lbGVtZW50cy90ZXh0LmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vUklTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvbGFiZWwud2lkZ2V0LnRzIiwid2VicGFjazovL1JJUy8uL3NyYy9lbGVtZW50cy93aWRnZXRzL3Nwcml0ZS53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vUklTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL1JJUy8uL3NyYy9zZXJ2aWNlcy9tb3VzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL1JJUy9leHRlcm5hbCB1bWQgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vUklTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1JJUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1JJUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vUklTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlBJWElcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUklTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUklTXCJdID0gZmFjdG9yeShyb290W1wiUElYSVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX18pID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBDb250YWluZXIsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIG9uRHJhZ0VuZCxcclxuICBvbkRyYWdNb3ZlU3RlcCxcclxuICBvbkRyYWdTdGFydCxcclxufSBmcm9tIFwiLi4vc2VydmljZXMvbW91c2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2Uge1xyXG4gIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICByZWY6IHN0cmluZztcclxuICBfY29sb3I6IG51bWJlcjtcclxuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xyXG4gIGNvbnN0cnVjdG9yKHsgcmVmLCBjb2xvciwgeCwgeSB9OiBCYXNlT3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnJlZiA9IHJlZjtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuY29udGFpbmVyLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXIuc29ydGFibGVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCBvbkRyYWdTdGFydClcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsIG9uRHJhZ0VuZClcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCBvbkRyYWdFbmQpXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsIG9uRHJhZ01vdmVTdGVwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9uKFwicG9pbnRlcnVwXCIsICgpID0+ICh3aW5kb3cubXV1cC5zZWxlY3RlZCA9IHRoaXMpKTtcclxuICAgIHdpbmRvdy5tdXVwLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG4gIHNlbGVjdCgpIHtcclxuICAgIHdpbmRvdy5tdXVwLnNlbGVjdGVkID0gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLng7XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IHg7XHJcbiAgfVxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG4gIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueSA9IHk7XHJcbiAgfVxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFRleHR1cmUsIEdyYXBoaWNzLCB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IExBQkVMIH0gZnJvbSBcIi4vd2lkZ2V0cy9sYWJlbC53aWRnZXRcIjtcclxuaW1wb3J0IHsgU1BSSVRFIH0gZnJvbSBcIi4vd2lkZ2V0cy9zcHJpdGUud2lkZ2V0XCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRQcm9wcyxcclxuICBDb21wb25lbnRDb25maWcsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENPTVBPTkVOVCBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3Byb3BzOiBDb21wb25lbnRQcm9wcztcclxuICBwcml2YXRlIF9zcHJpdGUgPSBuZXcgU1BSSVRFKCk7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgTEFCRUwoKTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgdGhpcy5fbGFiZWwuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUuekluZGV4ID0gMjtcclxuICAgIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ID0gdGhpcy5fbGFiZWwuaGVpZ2h0ICsgMjA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xyXG5cclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwKTtcclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwLCB0aGlzLl9zcHJpdGUud2lkdGggLyA0KTtcclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwLCB0aGlzLl9zcHJpdGUud2lkdGggLyAyKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnNldCgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBuZXcgR3JhcGhpY3MoKTtcclxuICAgIGxldCByYWQgPSBvZmZzZXQ7XHJcbiAgICB3aW5kb3cubXV1cC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmIChyYWQgPj0gdGhpcy5fc3ByaXRlLndpZHRoKSB7XHJcbiAgICAgICAgcmFkID0gMDtcclxuICAgICAgfVxyXG4gICAgICByYWQgKz0gZCAvIDI7XHJcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSAodGhpcy5fc3ByaXRlLndpZHRoIC0gcmFkKSAvIHRoaXMuX3Nwcml0ZS53aWR0aDtcclxuICAgICAgY2lyY2xlLmNsZWFyKCk7XHJcbiAgICAgIGNpcmNsZS5saW5lU3R5bGUoMiwgdGhpcy5fY29sb3IsIG9wYWNpdHkpO1xyXG4gICAgICBjaXJjbGUuYmVnaW5GaWxsKHRoaXMuX2NvbG9yLCBvcGFjaXR5IC0gMC4xKTtcclxuICAgICAgY2lyY2xlLmRyYXdFbGxpcHNlKHgsIHksIHJhZCwgcmFkIC8gMS42KTtcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlLnpJbmRleCA9IDA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBDb21wb25lbnRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gVGV4dHVyZS5mcm9tKGAke3Byb3BzLm5hbWV9YCk7XHJcbiAgICB0aGlzLl9sYWJlbC50ZXh0ID0gcHJvcHMubGFiZWw7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fbGFiZWwpIHtcclxuICAgICAgdGhpcy5fbGFiZWwuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogQ29tcG9uZW50Q29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmFwaGljcywgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IExpbmVQcm9wcywgTGluZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2xpbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMSU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfbGluZTogR3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wcm9wczogTGluZVByb3BzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9saW5lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnRJbkxpbmUoXHJcbiAgICBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBvZmZzZXQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgTWF0aC5wb3coYi54IC0gYS54LCAyKSArIE1hdGgucG93KGIueSAtIGEueSwgMilcclxuICAgICk7XHJcbiAgICBjb25zdCBmYWN0b3IgPSBvZmZzZXQgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiBmYWN0b3IsIHk6IGEueSArIChiLnkgLSBhLnkpICogZmFjdG9yIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlZ21lbnRzKHBvaW50czogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCwgaSkgPT4ge1xyXG4gICAgICBpZiAocG9pbnRzW2kgLSAxXSkge1xyXG4gICAgICAgIGlmIChpID09PSBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludHNbaSAtIDFdLCBwb2ludCwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiBwb2ludCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50SW5MaW5lKHBvaW50c1tpIC0gMV0sIHBvaW50LCByYWRpdXMpLFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvaW50c1tpICsgMV0pIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgYmF6aWVyOiBwb2ludCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICBzdGFydDogcG9pbnQsXHJcbiAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpICsgMV0sIHJhZGl1cyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICB0aGlzLl9saW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9saW5lLmxpbmVTdHlsZSh0aGlzLl9wcm9wcy53aWR0aCwgdGhpcy5fY29sb3IsIDEpO1xyXG4gICAgdGhpcy5zZWdtZW50cyh0aGlzLl9wcm9wcy5wb2ludHMsIHRoaXMuX3Byb3BzLnJhZGl1cykuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIXNlZ21lbnQuYmF6aWVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGluZS5tb3ZlVG8oc2VnbWVudC5zdGFydC54LCBzZWdtZW50LnN0YXJ0LnkpO1xyXG4gICAgICAgIHRoaXMuX2xpbmUubGluZVRvKHNlZ21lbnQuZW5kLngsIHNlZ21lbnQuZW5kLnkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9saW5lLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgc2VnbWVudC5zdGFydC54LFxyXG4gICAgICAgIHNlZ21lbnQuc3RhcnQueSxcclxuICAgICAgICBzZWdtZW50LmJhemllci54LFxyXG4gICAgICAgIHNlZ21lbnQuYmF6aWVyLnksXHJcbiAgICAgICAgc2VnbWVudC5lbmQueCxcclxuICAgICAgICBzZWdtZW50LmVuZC55XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2xpbmUubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwKTtcclxuICAgIHRoaXMuX2xpbmUuYmVnaW5GaWxsKDB4MDAwMDAwLCAwLjAxKTtcclxuICAgIHRoaXMuX2xpbmUubW92ZVRvKHRoaXMuX3Byb3BzLnBvaW50c1swXS54LCB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8ocG9pbnQueCArIHRoaXMuX3Byb3BzLndpZHRoLCBwb2ludC55KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8oXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueCAtIHRoaXMuX3Byb3BzLndpZHRoLFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9saW5lLmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRQb2ludHMoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigxLCB0aGlzLl9wcm9wcy5wb2ludHMubGVuZ3RoICsgMSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgY29uc3QgcCA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgICAvLyBwLnBpdm90LnNldCgzLCAzIC8gMS42KTtcclxuICAgICAgcC5wb3NpdGlvbi5zZXQocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgIHAubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgICBwLmJlZ2luRmlsbCgweDAwMDAwMCwgMSk7XHJcbiAgICAgIHAuZHJhd0VsbGlwc2UoMCwgMCwgMTAsIDEwIC8gMS42KTtcclxuICAgICAgcC5lbmRGaWxsKCk7XHJcbiAgICAgIHAuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICBwLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRyYWdQb2ludChwLCBwb2ludCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmFnUG9pbnQocDogR3JhcGhpY3MsIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgIGxldCBkYXRhOiBhbnk7XHJcbiAgICBsZXQgZHJhZyA9IGZhbHNlO1xyXG4gICAgcC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIGRhdGEgPSBlLmRhdGE7XHJcbiAgICAgIGRyYWcgPSB0cnVlO1xyXG4gICAgICB3aW5kb3cubXV1cC5tb3ZlID0gZmFsc2U7XHJcbiAgICAgIHBvaW50LnggKz0gMTA7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZyA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5tdXVwLm1vdmUgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93Lm11dXAubW92ZSA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZHJhZykge1xyXG4gICAgICAgICAgY29uc3QgbmV3cCA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbihwLnBhcmVudCk7XHJcbiAgICAgICAgICBwb2ludC54ID0gbmV3cC54O1xyXG4gICAgICAgICAgcC5wb3NpdGlvbi54ID0gbmV3cC54O1xyXG4gICAgICAgICAgcG9pbnQueSA9IG5ld3AueTtcclxuICAgICAgICAgIHAucG9zaXRpb24ueSA9IG5ld3AueTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogTGluZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHRoaXMuc2V0dXAoKTtcclxuICAgIGlmICh3aW5kb3cubXV1cC5lZGl0YWJsZSkgdGhpcy5hZGRQb2ludHMoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBMaW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzLCB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgUGxhbmVQcm9wcywgUGxhbmVDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGFuZS5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQTEFORSBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3BsYW5lOiBHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBQbGFuZVByb3BzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9wbGFuZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgY29uc3QgcmFkID0gKDMxICogTWF0aC5QSSkgLyAxODA7XHJcbiAgICBjb25zdCBhID0gdGhpcy5fcHJvcHMuaCAqIE1hdGguc2luKHJhZCk7XHJcbiAgICBjb25zdCBiID0gdGhpcy5fcHJvcHMuaCAqIE1hdGguY29zKHJhZCk7XHJcbiAgICBjb25zdCBBID0gdGhpcy5fcHJvcHMudyAqIE1hdGguc2luKHJhZCk7XHJcbiAgICBjb25zdCBCID0gdGhpcy5fcHJvcHMudyAqIE1hdGguY29zKHJhZCk7XHJcbiAgICB0aGlzLl9wbGFuZS5jbGVhcigpO1xyXG4gICAgdGhpcy5fcGxhbmUuYmVnaW5GaWxsKHRoaXMuX2NvbG9yLCAwLjEpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVN0eWxlKDIsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgdGhpcy5fcGxhbmUubW92ZVRvKDAsIDApO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKGIsIC1hKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhiICsgQiwgLWEgKyBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhCLCBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5fcGxhbmUuZW5kRmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBQbGFuZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fcGxhbmUpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBQbGFuZUNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy5jb250YWluZXIucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXRpbHMsIFRleHQsIFRleHRTdHlsZUZvbnRXZWlnaHQgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRleHRDb25maWcsIFRleHRQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RleHQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBURVhUIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfdGV4dCA9IG5ldyBUZXh0KFwiXCIpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBUZXh0UHJvcHM7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIGlmICh0aGlzLl9wcm9wcy5za2V3KSB7XHJcbiAgICAgIHRoaXMuX3RleHQuc2tldy5zZXQoLTEuMDMsICgzMSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZm9udFdlaWdodCA9IHRoaXMuX3Byb3BzLmZvbnRXaWR0aCBhcyBUZXh0U3R5bGVGb250V2VpZ2h0O1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5mb250U2l6ZSA9IHRoaXMuX3Byb3BzLmZvbnRTaXplO1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl90ZXh0LnRleHQgPSB0aGlzLl9wcm9wcy50ZXh0O1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fdGV4dCk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFRleHRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFRleHRDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyYXBoaWNzLCBUZXh0U3R5bGUsIFRleHQsIENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTEFCRUwgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX2NvbG9yOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nID0gXCJcIjtcclxuICBwcml2YXRlIF9sYWJlbFRleHQ6IFRleHQ7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9zdHlsZSA9IG5ldyBUZXh0U3R5bGUoe1xyXG4gICAgbGV0dGVyU3BhY2luZzogMSxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIGZpbGw6IFwiI0EyQTNBN1wiLFxyXG4gICAgd29yZFdyYXA6IHRydWUsXHJcbiAgICB3b3JkV3JhcFdpZHRoOiAxMDAsXHJcbiAgICBsaW5lSm9pbjogXCJyb3VuZFwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dCA9IG5ldyBUZXh0KFwiXCIsIHRoaXMuX3N0eWxlKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC54ID0gMTY7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQueSA9IDQ7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWxUZXh0KTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgdGhpcy5fbGFiZWwuY2xlYXIoKTtcclxuICAgIHRoaXMuX2xhYmVsLmJlZ2luRmlsbCh0aGlzLl9jb2xvcik7XHJcbiAgICB0aGlzLl9sYWJlbC5kcmF3UmVjdCgwLCAwLCA2LCB0aGlzLl9sYWJlbFRleHQuaGVpZ2h0ICsgMTApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fbGFiZWwubGluZVN0eWxlKDEsIDB4ZmZmZmZmLCAwLjEpO1xyXG4gICAgdGhpcy5fbGFiZWwuYmVnaW5GaWxsKDB4MTExMjFiLCAxKTtcclxuICAgIHRoaXMuX2xhYmVsLmRyYXdSZWN0KFxyXG4gICAgICA2LFxyXG4gICAgICAwLFxyXG4gICAgICB0aGlzLl9sYWJlbFRleHQud2lkdGggKyAyMCxcclxuICAgICAgdGhpcy5fbGFiZWxUZXh0LmhlaWdodCArIDEwXHJcbiAgICApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcbiAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gXCJcIjtcclxuICAgIGxldCBhY2MgPSAwO1xyXG4gICAgdGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgIGlmIChhY2MgPCAyMCkge1xyXG4gICAgICAgIGFjYyArPSAxO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gXCIgXCI7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnRleHQgPSB0aGlzLl90ZXh0O1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgVGV4dHVyZSwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTUFJJVEUgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xyXG4gIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX29mZnNldCA9IDEwO1xyXG4gICAgdGhpcy5zd2luZygpO1xyXG4gIH1cclxuXHJcbiAgc3dpbmcoKSB7XHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgd2luZG93Lm11dXAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ID49IHRoaXMuX29mZnNldCkgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IDw9IDApIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGlmIChmbGFnKSB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSArPSBkIC8gNTtcclxuICAgICAgICBlbHNlIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IC09IGQgLyA1O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCB0ZXh0dXJlKHRleHR1cmU6IFRleHR1cmUpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICB0aGlzLnBpdm90LnNldCh0aGlzLl9zcHJpdGUud2lkdGggLyAyLCAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgQXBwbGljYXRpb24sXG4gIExvYWRlcixcbiAgSUFwcGxpY2F0aW9uT3B0aW9ucyxcbiAgVGV4dHVyZSxcbiAgVGlsaW5nU3ByaXRlLFxuICBDb250YWluZXIsXG59IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQge1xuICBvbkRyYWdTdGFydCxcbiAgb25EcmFnRW5kLFxuICBvbkRyYWdNb3ZlTWFwLFxufSBmcm9tIFwiLi9zZXJ2aWNlcy9tb3VzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgdHlwZSB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xuaW1wb3J0IHR5cGUgeyBBcHBDb25maWcsIENvbmZpZyB9IGZyb20gXCIuL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQ09NUE9ORU5UIH0gZnJvbSBcIi4vZWxlbWVudHMvY29tcG9uZW50LmVsZW1lbnRcIjtcbmltcG9ydCB7IExJTkUgfSBmcm9tIFwiLi9lbGVtZW50cy9saW5lLmVsZW1lbnRcIjtcbmltcG9ydCB7IFBMQU5FIH0gZnJvbSBcIi4vZWxlbWVudHMvcGxhbmUuZWxlbWVudFwiO1xuaW1wb3J0IHsgVEVYVCB9IGZyb20gXCIuL2VsZW1lbnRzL3RleHQuZWxlbWVudFwiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2VsZW1lbnRzL2Jhc2UuZWxlbWVudFwiO1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBtdXVwOiBBcHA7XG4gIH1cbiAgaW50ZXJmYWNlIENvbnRhaW5lciB7XG4gICAgaW50ZXJhY3RpdmU6IGJvb2xlYW47XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBCYXNlO1xuICBwcml2YXRlIG9mZnNldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XG4gIHB1YmxpYyBiZzogVGlsaW5nU3ByaXRlO1xuICBwdWJsaWMgbG9hZGVyOiBMb2FkZXI7XG4gIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICBtb3ZlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY29uZmlnOiBBcHBDb25maWcgPSB7XG4gICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICBhc3NldHM6IFtdLFxuICAgIGNvbXBvbmVudHM6IFtdLFxuICAgIHRleHRzOiBbXSxcbiAgICBwbGFuZXM6IFtdLFxuICAgIGxpbmVzOiBbXSxcbiAgfTtcbiAgcHVibGljIHJlZnM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBDT01QT05FTlQgfCBMSU5FIHwgVEVYVCB8IFBMQU5FO1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3I6IHN0cmluZywgb3B0aW9uczogSUFwcGxpY2F0aW9uT3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwYTBjMTMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmICghY29udGFpbmVyKSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudmlldyk7XG4gICAgZWxzZSBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcbiAgICB0aGlzLmxvYWRlciA9IExvYWRlci5zaGFyZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0dXAoKSB7XG4gICAgdGhpcy5iZyA9IG5ldyBUaWxpbmdTcHJpdGUoXG4gICAgICBUZXh0dXJlLmZyb20oXCJiZ1wiKSxcbiAgICAgIHRoaXMuc2NyZWVuLndpZHRoLFxuICAgICAgdGhpcy5zY3JlZW4uaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmJnLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJnXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgfSlcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIG9uRHJhZ1N0YXJ0KVxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsIG9uRHJhZ0VuZClcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgb25EcmFnRW5kKVxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgb25EcmFnTW92ZU1hcCk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmJnKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLnRpY2tlci5hZGQoKGQpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZChkKTtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54ICE9IHRoaXMuYmcudGlsZVBvc2l0aW9uLngpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IHRoaXMuYmcudGlsZVBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnkgPSB0aGlzLmJnLnRpbGVQb3NpdGlvbi55O1xuICAgICAgICB0aGlzLl9jb25maWcub2Zmc2V0LnggPSB0aGlzLmJnLnRpbGVQb3NpdGlvbi54O1xuICAgICAgICB0aGlzLl9jb25maWcub2Zmc2V0LnkgPSB0aGlzLmJnLnRpbGVQb3NpdGlvbi55O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9hZChjb25maWc6IENvbmZpZywgY2I6IChtdXVwOiBBcHApID0+IHZvaWQsIGVkaXRhYmxlPzogYm9vbGVhbikge1xuICAgIGlmIChlZGl0YWJsZSkge1xuICAgICAgdGhpcy5lZGl0YWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbmZpZy5hc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XG4gICAgICB0aGlzLl9jb25maWcuYXNzZXRzLnB1c2goc3ByaXRlKTtcbiAgICAgIHRoaXMubG9hZGVyLmFkZChzcHJpdGUubmFtZSwgc3ByaXRlLmRhdGEpO1xuICAgIH0pO1xuICAgIHRoaXMubG9hZGVyLmxvYWQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICBjYih0aGlzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXQgY29uZmlnKGNvbmZpZzogQ29uZmlnKSB7XG4gICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueCA9IGNvbmZpZy5vZmZzZXQueDtcbiAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi55ID0gY29uZmlnLm9mZnNldC55O1xuICAgIHRoaXMucmVmcyA9IHt9O1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgY29uZmlnLnBsYW5lcy5mb3JFYWNoKChwbGFuZSkgPT4ge1xuICAgICAgdGhpcy5hZGQoXCJwbGFuZVwiLCBwbGFuZSkucHJvcHMgPSBwbGFuZS5wcm9wcztcbiAgICB9KTtcbiAgICBjb25maWcubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgdGhpcy5hZGQoXCJsaW5lXCIsIGxpbmUpLnByb3BzID0gbGluZS5wcm9wcztcbiAgICB9KTtcbiAgICBjb25maWcuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgIHRoaXMuYWRkKFwiY29tcG9uZW50XCIsIGNvbXBvbmVudCkucHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG4gICAgfSk7XG4gICAgY29uZmlnLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcbiAgICAgIHRoaXMuYWRkKFwidGV4dFwiLCB0ZXh0KS5wcm9wcyA9IHRleHQucHJvcHM7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBzY3JvbGxUb1NlbGVjdGVkKGQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZCAmJiB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ID4gdGhpcy5vZmZzZXQueCkge1xuICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueCAtPSBkICogMjA7XG4gICAgICBpZiAodGhpcy5iZy50aWxlUG9zaXRpb24ueCA8IHRoaXMub2Zmc2V0LngpXG4gICAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPSB0aGlzLm9mZnNldC54O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgdGhpcy5iZy50aWxlUG9zaXRpb24ueCA8IHRoaXMub2Zmc2V0LngpIHtcbiAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggKz0gZCAqIDIwO1xuICAgICAgaWYgKHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPiB0aGlzLm9mZnNldC54KVxuICAgICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ID0gdGhpcy5vZmZzZXQueDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkICYmIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPiB0aGlzLm9mZnNldC55KSB7XG4gICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi55IC09IGQgKiAyMDtcbiAgICAgIGlmICh0aGlzLmJnLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5vZmZzZXQueSlcbiAgICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueSA9IHRoaXMub2Zmc2V0Lnk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCAmJiB0aGlzLmJnLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5vZmZzZXQueSkge1xuICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueSArPSBkICogMjA7XG4gICAgICBpZiAodGhpcy5iZy50aWxlUG9zaXRpb24ueSA+IHRoaXMub2Zmc2V0LnkpXG4gICAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPSB0aGlzLm9mZnNldC55O1xuICAgIH1cbiAgfVxuXG4gIGFkZCh0eXBlOiBzdHJpbmcsIGNvbmZpZzogQmFzZU9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMucmVmc1tjb25maWcucmVmXSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJjb21wb25lbnRcIjpcbiAgICAgICAgICBjb25zdCBjb21wID0gbmV3IENPTVBPTkVOVChjb25maWcpO1xuICAgICAgICAgIHRoaXMuX2NvbmZpZy5jb21wb25lbnRzLnB1c2goY29tcCk7XG4gICAgICAgICAgdGhpcy5yZWZzW2NvbmZpZy5yZWZdID0gY29tcDtcbiAgICAgICAgICByZXR1cm4gY29tcDtcbiAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFRFWFQoY29uZmlnKTtcbiAgICAgICAgICB0aGlzLl9jb25maWcudGV4dHMucHVzaCh0ZXh0KTtcbiAgICAgICAgICB0aGlzLnJlZnNbY29uZmlnLnJlZl0gPSB0ZXh0O1xuICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICBjYXNlIFwicGxhbmVcIjpcbiAgICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBQTEFORShjb25maWcpO1xuICAgICAgICAgIHRoaXMuX2NvbmZpZy5wbGFuZXMucHVzaChwbGFuZSk7XG4gICAgICAgICAgdGhpcy5yZWZzW2NvbmZpZy5yZWZdID0gcGxhbmU7XG4gICAgICAgICAgcmV0dXJuIHBsYW5lO1xuICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgIGNvbnN0IGxpbmUgPSBuZXcgTElORShjb25maWcpO1xuICAgICAgICAgIHRoaXMuX2NvbmZpZy5saW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgIHRoaXMucmVmc1tjb25maWcucmVmXSA9IGxpbmU7XG4gICAgICAgICAgcmV0dXJuIGxpbmU7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEluIHNjaGVtYSBjb25maWd1cmF0aW9uIGxpbmsgXCIke1xuICAgICAgICAgIGNvbmZpZy5yZWZcbiAgICAgICAgfVwiIGlzIGR1cGxpY2F0ZWQuICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX1cImBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKHJlZjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMucmVmc1tyZWZdKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnJlZnNbcmVmXS5jb250YWluZXIpO1xuICAgICAgZGVsZXRlIHRoaXMucmVmc1tyZWZdO1xuICAgIH1cbiAgfVxuXG4gIHVzZShwbHVnaW46IChtdXVwOiBBcHApID0+IHZvaWQpIHtcbiAgICBwbHVnaW4odGhpcyk7XG4gIH1cblxuICBtYWtlQ29uZmlnKCk6IENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB4OiB0aGlzLmJnLnRpbGVQb3NpdGlvbi54LFxuICAgICAgICB5OiB0aGlzLmJnLnRpbGVQb3NpdGlvbi55LFxuICAgICAgfSxcbiAgICAgIGFzc2V0czogdGhpcy5fY29uZmlnLmFzc2V0cyxcbiAgICAgIGNvbXBvbmVudHM6IHRoaXMuX2NvbmZpZy5jb21wb25lbnRzLm1hcCgoY29tcCkgPT4gY29tcC5jb25maWcpLFxuICAgICAgdGV4dHM6IHRoaXMuX2NvbmZpZy50ZXh0cy5tYXAoKHRleHQpID0+IHRleHQuY29uZmlnKSxcbiAgICAgIHBsYW5lczogdGhpcy5fY29uZmlnLnBsYW5lcy5tYXAoKHBsYW5lKSA9PiBwbGFuZS5jb25maWcpLFxuICAgICAgbGluZXM6IHRoaXMuX2NvbmZpZy5saW5lcy5tYXAoKGxpbmUpID0+IGxpbmUuY29uZmlnKSxcbiAgICB9O1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKGVsOiBCYXNlKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGVsO1xuICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgIHg6IHRoaXMuc2NyZWVuLndpZHRoIC8gMiAtIGVsLmNvbnRhaW5lci5wb3NpdGlvbi54LFxuICAgICAgICB5OiB0aGlzLnNjcmVlbi5oZWlnaHQgLyAyIC0gZWwuY29udGFpbmVyLnBvc2l0aW9uLnksXG4gICAgICB9O1xuICAgIH0gZWxzZSB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nLCBvcHRpb25zOiBJQXBwbGljYXRpb25PcHRpb25zKSB7XG4gIHdpbmRvdy5tdXVwID0gbmV3IEFwcChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gIHJldHVybiB3aW5kb3cubXV1cDtcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2ZW50OiBhbnkpIHtcclxuICAvLyB0aGlzLnNjYWxlLnNldCgwLjk1LCAwLjk1KTtcclxuICB0aGlzLmRhdGEgPSBldmVudC5kYXRhO1xyXG4gIHRoaXMuc3RhcnQgPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudCk7XHJcbiAgdGhpcy5hbHBoYSA9IDAuODtcclxuICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ0VuZCgpIHtcclxuICAvLyB0aGlzLnNjYWxlLnNldCgxLCAxKTtcclxuICB0aGlzLmFscGhhID0gMTtcclxuICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgdGhpcy5kYXRhID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ01vdmUoKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG4gICAgdGhpcy54ID0gbmV3UG9zaXRpb24ueDtcclxuICAgIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlU3RlcCgpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZyAmJiB3aW5kb3cubXV1cC5tb3ZlKSB7XHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54ID49IDI1KSB7XHJcbiAgICAgIHRoaXMueCArPSAyNTtcclxuICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA8PSAtMjUpIHtcclxuICAgICAgdGhpcy54IC09IDI1O1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPj0gMTUpIHtcclxuICAgICAgdGhpcy55ICs9IDE1O1xyXG4gICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55IDw9IC0xNSkge1xyXG4gICAgICB0aGlzLnkgLT0gMTU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlTWFwKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgIGNvbnN0IHggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5zdGFydC54O1xyXG4gICAgY29uc3QgeSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnN0YXJ0Lnk7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi54ICs9IHg7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi55ICs9IHk7XHJcbiAgICB0aGlzLnN0YXJ0LnggKz0geDtcclxuICAgIHRoaXMuc3RhcnQueSArPSB5O1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==