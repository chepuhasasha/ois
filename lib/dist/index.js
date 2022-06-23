(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define(["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["OIS"] = factory(require("PIXI"));
	else
		root["OIS"] = factory(root["PIXI"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEVBQUUsQ0FBQztTQUNkO2FBQU0sSUFBSSxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtLQUNGO0FBQ0gsQ0FBQztBQWRELHdDQWNDO0FBQ0QsU0FBZ0IsYUFBYTtJQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDakIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjtBQUNILENBQUM7QUFWRCxzQ0FVQzs7Ozs7Ozs7Ozs7QUMvQ0Q7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PSVMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9iYXNlLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9saW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3RleHQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9sYWJlbC53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvc3ByaXRlLndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL3NlcnZpY2VzL21vdXNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vT0lTL2V4dGVybmFsIHVtZCBcIlBJWElcIiIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBJWElcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUElYSVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJPSVNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPSVNcIl0gPSBmYWN0b3J5KHJvb3RbXCJQSVhJXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXykgPT4ge1xucmV0dXJuICIsImltcG9ydCB7IENvbnRhaW5lciwgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgb25EcmFnRW5kLFxyXG4gIG9uRHJhZ01vdmVTdGVwLFxyXG4gIG9uRHJhZ1N0YXJ0LFxyXG59IGZyb20gXCIuLi9zZXJ2aWNlcy9tb3VzZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZSB7XHJcbiAgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIHJlZjogc3RyaW5nO1xyXG4gIF9jb2xvcjogbnVtYmVyO1xyXG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XHJcbiAgY29uc3RydWN0b3IoeyByZWYsIGNvbG9yLCB4LCB5IH06IEJhc2VPcHRpb25zKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMucmVmID0gcmVmO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250YWluZXIuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXIuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zb3J0YWJsZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyXHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgb25EcmFnRW5kKVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsIG9uRHJhZ0VuZClcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgb25EcmFnTW92ZVN0ZXApO1xyXG4gICAgdGhpcy5jb250YWluZXIub24oXCJwb2ludGVydXBcIiwgKCkgPT4gKHdpbmRvdy5tdXVwLnNlbGVjdGVkID0gdGhpcykpO1xyXG4gICAgd2luZG93Lm11dXAuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcbiAgc2VsZWN0KCkge1xyXG4gICAgd2luZG93Lm11dXAuc2VsZWN0ZWQgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIucG9zaXRpb24ueDtcclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54ID0geDtcclxuICB9XHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIucG9zaXRpb24ueTtcclxuICB9XHJcbiAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55ID0geTtcclxuICB9XHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSwgR3JhcGhpY3MsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgTEFCRUwgfSBmcm9tIFwiLi93aWRnZXRzL2xhYmVsLndpZGdldFwiO1xyXG5pbXBvcnQgeyBTUFJJVEUgfSBmcm9tIFwiLi93aWRnZXRzL3Nwcml0ZS53aWRnZXRcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudFByb3BzLFxyXG4gIENvbXBvbmVudENvbmZpZyxcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb21wb25lbnQuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ09NUE9ORU5UIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IENvbXBvbmVudFByb3BzO1xyXG4gIHByaXZhdGUgX3Nwcml0ZSA9IG5ldyBTUFJJVEUoKTtcclxuICBwcml2YXRlIF9sYWJlbCA9IG5ldyBMQUJFTCgpO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICB0aGlzLl9sYWJlbC5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPSB0aGlzLl9sYWJlbC5oZWlnaHQgKyAyMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcblxyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjApO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDQpO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIpO1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3Quc2V0KDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgbGV0IHJhZCA9IG9mZnNldDtcclxuICAgIHdpbmRvdy5tdXVwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgaWYgKHJhZCA+PSB0aGlzLl9zcHJpdGUud2lkdGgpIHtcclxuICAgICAgICByYWQgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJhZCArPSBkIC8gMjtcclxuICAgICAgY29uc3Qgb3BhY2l0eSA9ICh0aGlzLl9zcHJpdGUud2lkdGggLSByYWQpIC8gdGhpcy5fc3ByaXRlLndpZHRoO1xyXG4gICAgICBjaXJjbGUuY2xlYXIoKTtcclxuICAgICAgY2lyY2xlLmxpbmVTdHlsZSgyLCB0aGlzLl9jb2xvciwgb3BhY2l0eSk7XHJcbiAgICAgIGNpcmNsZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIG9wYWNpdHkgLSAwLjEpO1xyXG4gICAgICBjaXJjbGUuZHJhd0VsbGlwc2UoeCwgeSwgcmFkLCByYWQgLyAxLjYpO1xyXG4gICAgfSk7XHJcbiAgICBjaXJjbGUuekluZGV4ID0gMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNpcmNsZSk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IENvbXBvbmVudFByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5fc3ByaXRlLnRleHR1cmUgPSBUZXh0dXJlLmZyb20oYCR7cHJvcHMubmFtZX1gKTtcclxuICAgIHRoaXMuX2xhYmVsLnRleHQgPSBwcm9wcy5sYWJlbDtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9sYWJlbCkge1xyXG4gICAgICB0aGlzLl9sYWJlbC5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBDb21wb25lbnRDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyYXBoaWNzLCB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTGluZVByb3BzLCBMaW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbGluZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExJTkUgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF9saW5lOiBHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBMaW5lUHJvcHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2xpbmUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludEluTGluZShcclxuICAgIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIG9mZnNldDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gTWF0aC5zcXJ0KFxyXG4gICAgICBNYXRoLnBvdyhiLnggLSBhLngsIDIpICsgTWF0aC5wb3coYi55IC0gYS55LCAyKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZhY3RvciA9IG9mZnNldCAvIHNlZ21lbnRMZW5ndGg7XHJcbiAgICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIGZhY3RvciwgeTogYS55ICsgKGIueSAtIGEueSkgKiBmYWN0b3IgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VnbWVudHMocG9pbnRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwb2ludHMucmVkdWNlKChhY2MsIHBvaW50LCBpKSA9PiB7XHJcbiAgICAgIGlmIChwb2ludHNbaSAtIDFdKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50SW5MaW5lKHBvaW50c1tpIC0gMV0sIHBvaW50LCByYWRpdXMpLFxyXG4gICAgICAgICAgICBlbmQ6IHBvaW50LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9pbnRzW2kgKyAxXSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSArIDFdLCByYWRpdXMpLFxyXG4gICAgICAgICAgICBiYXppZXI6IHBvaW50LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgIHN0YXJ0OiBwb2ludCxcclxuICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIHRoaXMuX2xpbmUuY2xlYXIoKTtcclxuICAgIHRoaXMuX2xpbmUubGluZVN0eWxlKHRoaXMuX3Byb3BzLndpZHRoLCB0aGlzLl9jb2xvciwgMSk7XHJcbiAgICB0aGlzLnNlZ21lbnRzKHRoaXMuX3Byb3BzLnBvaW50cywgdGhpcy5fcHJvcHMucmFkaXVzKS5mb3JFYWNoKChzZWdtZW50KSA9PiB7XHJcbiAgICAgIGlmICghc2VnbWVudC5iYXppZXIpIHtcclxuICAgICAgICB0aGlzLl9saW5lLm1vdmVUbyhzZWdtZW50LnN0YXJ0LngsIHNlZ21lbnQuc3RhcnQueSk7XHJcbiAgICAgICAgdGhpcy5fbGluZS5saW5lVG8oc2VnbWVudC5lbmQueCwgc2VnbWVudC5lbmQueSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xpbmUuYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICBzZWdtZW50LnN0YXJ0LngsXHJcbiAgICAgICAgc2VnbWVudC5zdGFydC55LFxyXG4gICAgICAgIHNlZ21lbnQuYmF6aWVyLngsXHJcbiAgICAgICAgc2VnbWVudC5iYXppZXIueSxcclxuICAgICAgICBzZWdtZW50LmVuZC54LFxyXG4gICAgICAgIHNlZ21lbnQuZW5kLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5saW5lU3R5bGUoMSwgdGhpcy5fY29sb3IsIDApO1xyXG4gICAgdGhpcy5fbGluZS5iZWdpbkZpbGwoMHgwMDAwMDAsIDAuMDEpO1xyXG4gICAgdGhpcy5fbGluZS5tb3ZlVG8odGhpcy5fcHJvcHMucG9pbnRzWzBdLngsIHRoaXMuX3Byb3BzLnBvaW50c1swXS55KTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgICB0aGlzLl9saW5lLmxpbmVUbyhwb2ludC54ICsgdGhpcy5fcHJvcHMud2lkdGgsIHBvaW50LnkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGksIGFycikgPT4ge1xyXG4gICAgICB0aGlzLl9saW5lLmxpbmVUbyhcclxuICAgICAgICBhcnJbYXJyLmxlbmd0aCAtIDEgLSBpXS54IC0gdGhpcy5fcHJvcHMud2lkdGgsXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9saW5lLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX2xpbmUuY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFBvaW50cygpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKDEsIHRoaXMuX3Byb3BzLnBvaW50cy5sZW5ndGggKyAxKTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgICBjb25zdCBwID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICAgIC8vIHAucGl2b3Quc2V0KDMsIDMgLyAxLjYpO1xyXG4gICAgICBwLnBvc2l0aW9uLnNldChwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgcC5saW5lU3R5bGUoMSwgdGhpcy5fY29sb3IsIDAuNSk7XHJcbiAgICAgIHAuYmVnaW5GaWxsKDB4MDAwMDAwLCAxKTtcclxuICAgICAgcC5kcmF3RWxsaXBzZSgwLCAwLCAxMCwgMTAgLyAxLjYpO1xyXG4gICAgICBwLmVuZEZpbGwoKTtcclxuICAgICAgcC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHAuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZHJhZ1BvaW50KHAsIHBvaW50KTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQocCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYWdQb2ludChwOiBHcmFwaGljcywgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xyXG4gICAgbGV0IGRhdGE6IGFueTtcclxuICAgIGxldCBkcmFnID0gZmFsc2U7XHJcbiAgICBwLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcclxuICAgICAgZGF0YSA9IGUuZGF0YTtcclxuICAgICAgZHJhZyA9IHRydWU7XHJcbiAgICAgIHdpbmRvdy5tdXVwLm1vdmUgPSBmYWxzZTtcclxuICAgICAgcG9pbnQueCArPSAxMDtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93Lm11dXAubW92ZSA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubXV1cC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkcmFnKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdwID0gZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHAucGFyZW50KTtcclxuICAgICAgICAgIHBvaW50LnggPSBuZXdwLng7XHJcbiAgICAgICAgICBwLnBvc2l0aW9uLnggPSBuZXdwLng7XHJcbiAgICAgICAgICBwb2ludC55ID0gbmV3cC55O1xyXG4gICAgICAgICAgcC5wb3NpdGlvbi55ID0gbmV3cC55O1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBMaW5lUHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICBpZiAodGhpcy5fbGluZSkgdGhpcy5zZXR1cCgpO1xyXG4gICAgaWYgKHdpbmRvdy5tdXVwLmVkaXRhYmxlKSB0aGlzLmFkZFBvaW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fbGluZSkge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IExpbmVDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZVByb3BzLCBQbGFuZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBMQU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfcGxhbmU6IEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IFBsYW5lUHJvcHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3BsYW5lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBjb25zdCByYWQgPSAoMzEgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgIGNvbnN0IGEgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IGIgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5jb3MocmFkKTtcclxuICAgIGNvbnN0IEEgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IEIgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5jb3MocmFkKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIDAuMSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lU3R5bGUoMiwgdGhpcy5fY29sb3IsIDAuNSk7XHJcbiAgICB0aGlzLl9wbGFuZS5tb3ZlVG8oMCwgMCk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oYiwgLWEpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKGIgKyBCLCAtYSArIEEpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKEIsIEEpO1xyXG4gICAgdGhpcy5fcGxhbmUuY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5lbmRGaWxsKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFBsYW5lUHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9wbGFuZSkge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFBsYW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1dGlscywgVGV4dCwgVGV4dFN0eWxlRm9udFdlaWdodCB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVGV4dENvbmZpZywgVGV4dFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGV4dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRFWFQgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF90ZXh0ID0gbmV3IFRleHQoXCJcIik7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IFRleHRQcm9wcztcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgaWYgKHRoaXMuX3Byb3BzLnNrZXcpIHtcclxuICAgICAgdGhpcy5fdGV4dC5za2V3LnNldCgtMS4wMywgKDMxICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5mb250V2VpZ2h0ID0gdGhpcy5fcHJvcHMuZm9udFdpZHRoIGFzIFRleHRTdHlsZUZvbnRXZWlnaHQ7XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZvbnRTaXplID0gdGhpcy5fcHJvcHMuZm9udFNpemU7XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZpbGwgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuX3RleHQudGV4dCA9IHRoaXMuX3Byb3BzLnRleHQ7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl90ZXh0KTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogVGV4dFByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcbiAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fdGV4dCkge1xyXG4gICAgICB0aGlzLl90ZXh0LnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fdGV4dCkge1xyXG4gICAgICB0aGlzLl90ZXh0LnN0eWxlLmZpbGwgPSB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogVGV4dENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy5jb250YWluZXIucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JhcGhpY3MsIFRleHRTdHlsZSwgVGV4dCwgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMQUJFTCBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBfY29sb3I6IG51bWJlcjtcclxuICBwcml2YXRlIF90ZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIHByaXZhdGUgX2xhYmVsVGV4dDogVGV4dDtcclxuICBwcml2YXRlIF9sYWJlbCA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3N0eWxlID0gbmV3IFRleHRTdHlsZSh7XHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAxLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgZmlsbDogXCIjQTJBM0E3XCIsXHJcbiAgICB3b3JkV3JhcDogdHJ1ZSxcclxuICAgIHdvcmRXcmFwV2lkdGg6IDEwMCxcclxuICAgIGxpbmVKb2luOiBcInJvdW5kXCIsXHJcbiAgfSk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0ID0gbmV3IFRleHQoXCJcIiwgdGhpcy5fc3R5bGUpO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnggPSAxNjtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC55ID0gNDtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYWJlbFRleHQpO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcoKSB7XHJcbiAgICB0aGlzLl9sYWJlbC5jbGVhcigpO1xyXG4gICAgdGhpcy5fbGFiZWwuYmVnaW5GaWxsKHRoaXMuX2NvbG9yKTtcclxuICAgIHRoaXMuX2xhYmVsLmRyYXdSZWN0KDAsIDAsIDYsIHRoaXMuX2xhYmVsVGV4dC5oZWlnaHQgKyAxMCk7XHJcbiAgICB0aGlzLl9sYWJlbC5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9sYWJlbC5saW5lU3R5bGUoMSwgMHhmZmZmZmYsIDAuMSk7XHJcbiAgICB0aGlzLl9sYWJlbC5iZWdpbkZpbGwoMHgxMTEyMWIsIDEpO1xyXG4gICAgdGhpcy5fbGFiZWwuZHJhd1JlY3QoXHJcbiAgICAgIDYsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuX2xhYmVsVGV4dC53aWR0aCArIDIwLFxyXG4gICAgICB0aGlzLl9sYWJlbFRleHQuaGVpZ2h0ICsgMTBcclxuICAgICk7XHJcbiAgICB0aGlzLl9sYWJlbC5lbmRGaWxsKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IG51bWJlcikge1xyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RleHQgPSBcIlwiO1xyXG4gICAgbGV0IGFjYyA9IDA7XHJcbiAgICB0ZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgaWYgKGFjYyA8IDIwKSB7XHJcbiAgICAgICAgYWNjICs9IDE7XHJcbiAgICAgICAgdGhpcy5fdGV4dCArPSBzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjYyA9IDA7XHJcbiAgICAgICAgdGhpcy5fdGV4dCArPSBcIiBcIjtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQudGV4dCA9IHRoaXMuX3RleHQ7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0dXJlLCBTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNQUklURSBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBTcHJpdGU7XHJcbiAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fb2Zmc2V0ID0gMTA7XHJcbiAgICB0aGlzLnN3aW5nKCk7XHJcbiAgfVxyXG5cclxuICBzd2luZygpIHtcclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICB3aW5kb3cubXV1cC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPj0gdGhpcy5fb2Zmc2V0KSBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPD0gMCkgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKGZsYWcpIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ICs9IGQgLyA1O1xyXG4gICAgICAgIGVsc2UgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgLT0gZCAvIDU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRleHR1cmUodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuICAgIHRoaXMucGl2b3Quc2V0KHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIsIDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uLFxyXG4gIExvYWRlcixcclxuICBJQXBwbGljYXRpb25PcHRpb25zLFxyXG4gIFRleHR1cmUsXHJcbiAgVGlsaW5nU3ByaXRlLFxyXG4gIENvbnRhaW5lcixcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIG9uRHJhZ1N0YXJ0LFxyXG4gIG9uRHJhZ0VuZCxcclxuICBvbkRyYWdNb3ZlTWFwLFxyXG59IGZyb20gXCIuL3NlcnZpY2VzL21vdXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBDb25maWcsIENvbmZpZyB9IGZyb20gXCIuL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDT01QT05FTlQgfSBmcm9tIFwiLi9lbGVtZW50cy9jb21wb25lbnQuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMSU5FIH0gZnJvbSBcIi4vZWxlbWVudHMvbGluZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFBMQU5FIH0gZnJvbSBcIi4vZWxlbWVudHMvcGxhbmUuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBURVhUIH0gZnJvbSBcIi4vZWxlbWVudHMvdGV4dC5lbGVtZW50XCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9lbGVtZW50cy9iYXNlLmVsZW1lbnRcIjtcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgbXV1cDogQXBwO1xyXG4gIH1cclxuICBpbnRlcmZhY2UgQ29udGFpbmVyIHtcclxuICAgIGludGVyYWN0aXZlOiBib29sZWFuO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQXBwbGljYXRpb24ge1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBCYXNlO1xyXG4gIHByaXZhdGUgb2Zmc2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICBwdWJsaWMgYmc6IFRpbGluZ1Nwcml0ZTtcclxuICBwdWJsaWMgbG9hZGVyOiBMb2FkZXI7XHJcbiAgcHVibGljIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICBtb3ZlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YXRlIF9jb25maWc6IEFwcENvbmZpZyA9IHtcclxuICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICBhc3NldHM6IFtdLFxyXG4gICAgY29tcG9uZW50czogW10sXHJcbiAgICB0ZXh0czogW10sXHJcbiAgICBwbGFuZXM6IFtdLFxyXG4gICAgbGluZXM6IFtdLFxyXG4gIH07XHJcbiAgcHVibGljIHJlZnM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgfSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcjogc3RyaW5nLCBvcHRpb25zOiBJQXBwbGljYXRpb25PcHRpb25zKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAweDBhMGMxMyxcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAoIWNvbnRhaW5lcikgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xyXG4gICAgZWxzZSBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgIHRoaXMubG9hZGVyID0gTG9hZGVyLnNoYXJlZDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMuYmcgPSBuZXcgVGlsaW5nU3ByaXRlKFxyXG4gICAgICBUZXh0dXJlLmZyb20oXCJiZ1wiKSxcclxuICAgICAgdGhpcy5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIHRoaXMuc2NyZWVuLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMuYmcuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5iZ1xyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgb25EcmFnRW5kKVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsIG9uRHJhZ0VuZClcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgb25EcmFnTW92ZU1hcCk7XHJcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuYmcpO1xyXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKGQpO1xyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIucG9zaXRpb24ueCAhPSB0aGlzLmJnLnRpbGVQb3NpdGlvbi54KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IHRoaXMuYmcudGlsZVBvc2l0aW9uLng7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueSA9IHRoaXMuYmcudGlsZVBvc2l0aW9uLnk7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLm9mZnNldC54ID0gdGhpcy5iZy50aWxlUG9zaXRpb24ueDtcclxuICAgICAgICB0aGlzLl9jb25maWcub2Zmc2V0LnkgPSB0aGlzLmJnLnRpbGVQb3NpdGlvbi55O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWQoY29uZmlnOiBDb25maWcsIGNiOiAobXV1cDogQXBwKSA9PiB2b2lkLCBlZGl0YWJsZT86IGJvb2xlYW4pIHtcclxuICAgIGlmIChlZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbmZpZy5hc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NvbmZpZy5hc3NldHMucHVzaChzcHJpdGUpO1xyXG4gICAgICB0aGlzLmxvYWRlci5hZGQoc3ByaXRlLm5hbWUsIHNwcml0ZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2FkZXIubG9hZCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgIGNiKHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0IGNvbmZpZyhjb25maWc6IENvbmZpZykge1xyXG4gICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueCA9IGNvbmZpZy5vZmZzZXQueDtcclxuICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPSBjb25maWcub2Zmc2V0Lnk7XHJcbiAgICB0aGlzLnJlZnMgPSB7fTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICBjb25maWcucGxhbmVzLmZvckVhY2goKHBsYW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkKFwicGxhbmVcIiwgcGxhbmUpLnByb3BzID0gcGxhbmUucHJvcHM7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZy5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkKFwibGluZVwiLCBsaW5lKS5wcm9wcyA9IGxpbmUucHJvcHM7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZChcImNvbXBvbmVudFwiLCBjb21wb25lbnQpLnByb3BzID0gY29tcG9uZW50LnByb3BzO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZChcInRleHRcIiwgdGV4dCkucHJvcHMgPSB0ZXh0LnByb3BzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgc2Nyb2xsVG9TZWxlY3RlZChkOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCAmJiB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ID4gdGhpcy5vZmZzZXQueCkge1xyXG4gICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi54IC09IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPCB0aGlzLm9mZnNldC54KVxyXG4gICAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPSB0aGlzLm9mZnNldC54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkICYmIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPCB0aGlzLm9mZnNldC54KSB7XHJcbiAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggKz0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy5iZy50aWxlUG9zaXRpb24ueCA+IHRoaXMub2Zmc2V0LngpXHJcbiAgICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueCA9IHRoaXMub2Zmc2V0Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgdGhpcy5iZy50aWxlUG9zaXRpb24ueSA+IHRoaXMub2Zmc2V0LnkpIHtcclxuICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueSAtPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLmJnLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5vZmZzZXQueSlcclxuICAgICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi55ID0gdGhpcy5vZmZzZXQueTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCAmJiB0aGlzLmJnLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5vZmZzZXQueSkge1xyXG4gICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi55ICs9IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPiB0aGlzLm9mZnNldC55KVxyXG4gICAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPSB0aGlzLm9mZnNldC55O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkKHR5cGU6IHN0cmluZywgY29uZmlnOiBCYXNlT3B0aW9ucykge1xyXG4gICAgaWYgKCF0aGlzLnJlZnNbY29uZmlnLnJlZl0pIHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImNvbXBvbmVudFwiOlxyXG4gICAgICAgICAgY29uc3QgY29tcCA9IG5ldyBDT01QT05FTlQoY29uZmlnKTtcclxuICAgICAgICAgIHRoaXMuX2NvbmZpZy5jb21wb25lbnRzLnB1c2goY29tcCk7XHJcbiAgICAgICAgICB0aGlzLnJlZnNbY29uZmlnLnJlZl0gPSBjb21wO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbXA7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIGNvbnN0IHRleHQgPSBuZXcgVEVYVChjb25maWcpO1xyXG4gICAgICAgICAgdGhpcy5fY29uZmlnLnRleHRzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICB0aGlzLnJlZnNbY29uZmlnLnJlZl0gPSB0ZXh0O1xyXG4gICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgY2FzZSBcInBsYW5lXCI6XHJcbiAgICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBQTEFORShjb25maWcpO1xyXG4gICAgICAgICAgdGhpcy5fY29uZmlnLnBsYW5lcy5wdXNoKHBsYW5lKTtcclxuICAgICAgICAgIHRoaXMucmVmc1tjb25maWcucmVmXSA9IHBsYW5lO1xyXG4gICAgICAgICAgcmV0dXJuIHBsYW5lO1xyXG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XHJcbiAgICAgICAgICBjb25zdCBsaW5lID0gbmV3IExJTkUoY29uZmlnKTtcclxuICAgICAgICAgIHRoaXMuX2NvbmZpZy5saW5lcy5wdXNoKGxpbmUpO1xyXG4gICAgICAgICAgdGhpcy5yZWZzW2NvbmZpZy5yZWZdID0gbGluZTtcclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgYEluIHNjaGVtYSBjb25maWd1cmF0aW9uIGxpbmsgXCIke1xyXG4gICAgICAgICAgY29uZmlnLnJlZlxyXG4gICAgICAgIH1cIiBpcyBkdXBsaWNhdGVkLiAke0pTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMil9XCJgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmUocmVmOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnJlZnNbcmVmXS5jb250YWluZXIpO1xyXG4gICAgICBkZWxldGUgdGhpcy5yZWZzW3JlZl07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2UocGx1Z2luOiAobXV1cDogQXBwKSA9PiB2b2lkKSB7XHJcbiAgICBwbHVnaW4odGhpcyk7XHJcbiAgfVxyXG5cclxuICBtYWtlQ29uZmlnKCk6IENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvZmZzZXQ6IHtcclxuICAgICAgICB4OiB0aGlzLmJnLnRpbGVQb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuYmcudGlsZVBvc2l0aW9uLnksXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzc2V0czogdGhpcy5fY29uZmlnLmFzc2V0cyxcclxuICAgICAgY29tcG9uZW50czogdGhpcy5fY29uZmlnLmNvbXBvbmVudHMubWFwKChjb21wKSA9PiBjb21wLmNvbmZpZyksXHJcbiAgICAgIHRleHRzOiB0aGlzLl9jb25maWcudGV4dHMubWFwKCh0ZXh0KSA9PiB0ZXh0LmNvbmZpZyksXHJcbiAgICAgIHBsYW5lczogdGhpcy5fY29uZmlnLnBsYW5lcy5tYXAoKHBsYW5lKSA9PiBwbGFuZS5jb25maWcpLFxyXG4gICAgICBsaW5lczogdGhpcy5fY29uZmlnLmxpbmVzLm1hcCgobGluZSkgPT4gbGluZS5jb25maWcpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZChlbDogQmFzZSkge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gZWw7XHJcbiAgICAgIHRoaXMub2Zmc2V0ID0ge1xyXG4gICAgICAgIHg6IHRoaXMuc2NyZWVuLndpZHRoIC8gMiAtIGVsLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuc2NyZWVuLmhlaWdodCAvIDIgLSBlbC5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHNlbGVjdG9yOiBzdHJpbmcsIG9wdGlvbnM6IElBcHBsaWNhdGlvbk9wdGlvbnMpIHtcclxuICB3aW5kb3cubXV1cCA9IG5ldyBBcHAoc2VsZWN0b3IsIG9wdGlvbnMpO1xyXG4gIHJldHVybiB3aW5kb3cubXV1cDtcclxufVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2ZW50OiBhbnkpIHtcclxuICAvLyB0aGlzLnNjYWxlLnNldCgwLjk1LCAwLjk1KTtcclxuICB0aGlzLmRhdGEgPSBldmVudC5kYXRhO1xyXG4gIHRoaXMuc3RhcnQgPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudCk7XHJcbiAgdGhpcy5hbHBoYSA9IDAuODtcclxuICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ0VuZCgpIHtcclxuICAvLyB0aGlzLnNjYWxlLnNldCgxLCAxKTtcclxuICB0aGlzLmFscGhhID0gMTtcclxuICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgdGhpcy5kYXRhID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ01vdmUoKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG4gICAgdGhpcy54ID0gbmV3UG9zaXRpb24ueDtcclxuICAgIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlU3RlcCgpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZyAmJiB3aW5kb3cubXV1cC5tb3ZlKSB7XHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54ID49IDI1KSB7XHJcbiAgICAgIHRoaXMueCArPSAyNTtcclxuICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA8PSAtMjUpIHtcclxuICAgICAgdGhpcy54IC09IDI1O1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPj0gMTUpIHtcclxuICAgICAgdGhpcy55ICs9IDE1O1xyXG4gICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55IDw9IC0xNSkge1xyXG4gICAgICB0aGlzLnkgLT0gMTU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlTWFwKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgIGNvbnN0IHggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5zdGFydC54O1xyXG4gICAgY29uc3QgeSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnN0YXJ0Lnk7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi54ICs9IHg7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi55ICs9IHk7XHJcbiAgICB0aGlzLnN0YXJ0LnggKz0geDtcclxuICAgIHRoaXMuc3RhcnQueSArPSB5O1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==