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
        this.container.on("pointerup", function () { return (window.ois.selected = _this); });
        window.ois.container.addChild(this.container);
    }
    Base.prototype.select = function () {
        window.ois.selected = this;
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
        _this.type = "component";
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
        window.ois.ticker.add(function (d) {
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
        _this.type = "line";
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
            window.ois.move = false;
            point.x += 10;
            _this.setup();
        })
            .on("pointerup", function () {
            drag = false;
            window.ois.move = true;
        })
            .on("pointerupoutside", function () {
            drag = false;
            window.ois.move = true;
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
            if (window.ois.editable)
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
        _this.type = "plane";
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
        _this.type = "text";
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
        window.ois.ticker.add(function (d) {
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
var elements_service_1 = __webpack_require__(/*! ./services/elements.service */ "./src/services/elements.service.ts");
var config_service_1 = __webpack_require__(/*! ./services/config.service */ "./src/services/config.service.ts");
var newmouse_service_1 = __webpack_require__(/*! ./services/newmouse.service */ "./src/services/newmouse.service.ts");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(selector, options) {
        var _this = _super.call(this, __assign({ antialias: true, backgroundColor: 0x0a0c13 }, options)) || this;
        _this.container = new pixi_js_1.Container();
        _this.elementsService = new elements_service_1.ElementsService();
        _this.mouseService = new newmouse_service_1.MouseService(_this.container);
        _this.configService = new config_service_1.ConfigService();
        _this.offset = { x: 0, y: 0 };
        _this.editable = false;
        _this.move = true;
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
            .on("pointerdown", function (e) {
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
            }
        });
    };
    App.prototype.load = function (config, cb, editable) {
        var _this = this;
        if (editable) {
            this.editable = true;
        }
        config.assets.forEach(function (sprite) {
            _this.loader.add(sprite.name, sprite.data);
        });
        this.loader.load(function () {
            _this.setup();
            _this.config = config;
            cb(_this);
        });
        return this;
    };
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
    Object.defineProperty(App.prototype, "config", {
        set: function (config) {
            var _this = this;
            this.bg.tilePosition.x = config.offset.x;
            this.bg.tilePosition.y = config.offset.y;
            this.elementsService.refs = {};
            this.container.removeChildren();
            config.planes.forEach(function (plane) {
                _this.elementsService.add("plane", plane);
            });
            config.lines.forEach(function (line) {
                _this.elementsService.add("line", line);
            });
            config.components.forEach(function (component) {
                _this.elementsService.add("component", component);
            });
            config.texts.forEach(function (text) {
                _this.elementsService.add("text", text);
            });
        },
        enumerable: false,
        configurable: true
    });
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
    Object.defineProperty(App.prototype, "refs", {
        get: function () {
            return this.elementsService.refs;
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.use = function (plugin) {
        plugin(this);
    };
    return App;
}(pixi_js_1.Application));
exports.App = App;
function create(selector, options) {
    window.ois = new App(selector, options);
    return window.ois;
}
exports.create = create;


/***/ }),

/***/ "./src/services/config.service.ts":
/*!****************************************!*\
  !*** ./src/services/config.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.prototype.makeConfig = function (refs) {
        var result = {
            components: [],
            texts: [],
            planes: [],
            lines: [],
            offset: { x: 0, y: 0 },
            assets: [],
        };
        Object.keys(refs).forEach(function (key) {
            switch (refs[key].type) {
                case "component":
                    // result.components.push(refs[key].config)
                    break;
                case "text":
                    // result.texts.push(refs[key].config)
                    break;
                default:
                    break;
            }
        });
    };
    return ConfigService;
}());
exports.ConfigService = ConfigService;


/***/ }),

/***/ "./src/services/elements.service.ts":
/*!******************************************!*\
  !*** ./src/services/elements.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementsService = void 0;
var component_element_1 = __webpack_require__(/*! ../elements/component.element */ "./src/elements/component.element.ts");
var line_element_1 = __webpack_require__(/*! ../elements/line.element */ "./src/elements/line.element.ts");
var plane_element_1 = __webpack_require__(/*! ../elements/plane.element */ "./src/elements/plane.element.ts");
var text_element_1 = __webpack_require__(/*! ../elements/text.element */ "./src/elements/text.element.ts");
var ElementsService = /** @class */ (function () {
    function ElementsService() {
        this.refs = {};
    }
    ElementsService.prototype.add = function (type, config) {
        if (!this.refs[config.ref]) {
            var el = void 0;
            switch (type) {
                case "component":
                    el = new component_element_1.COMPONENT(config);
                    el.props = config.props;
                    break;
                case "text":
                    el = new text_element_1.TEXT(config);
                    el.props = config.props;
                    break;
                case "plane":
                    el = new plane_element_1.PLANE(config);
                    el.props = config.props;
                    break;
                case "line":
                    el = new line_element_1.LINE(config);
                    el.props = config.props;
                    break;
                default:
                    break;
            }
            this.refs[config.ref] = el;
            return this.refs[config.ref];
        }
        else {
            console.error("In schema configuration link \"".concat(config.ref, "\" is duplicated. ").concat(JSON.stringify(config, null, 2), "\""));
        }
    };
    ElementsService.prototype.remove = function (ref) {
        if (this.refs[ref]) {
            window.ois.container.removeChild(this.refs[ref].container);
            delete this.refs[ref];
        }
    };
    return ElementsService;
}());
exports.ElementsService = ElementsService;


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
    if (this.dragging && window.ois.move) {
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

/***/ "./src/services/newmouse.service.ts":
/*!******************************************!*\
  !*** ./src/services/newmouse.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MouseService = void 0;
var MouseService = /** @class */ (function () {
    function MouseService(container) {
        var _this = this;
        this.container = container;
        console.log(this.container);
        this.container.on("pointerdown", function () {
            _this.selected = null;
        });
        // .on("pointerdown", onDragStart)
        // .on("pointerup", onDragEnd)
        // .on("pointerupoutside", onDragEnd)
        // .on("pointermove", onDragMoveMap);
    }
    return MouseService;
}());
exports.MouseService = MouseService;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkI7QUFDSCxDQUFDO0FBVkQsc0NBVUM7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0lBR0Usc0JBQW9CLFNBQW9CO1FBQXhDLGlCQVNDO1FBVG1CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsa0NBQWtDO1FBQ2xDLDhCQUE4QjtRQUM5QixxQ0FBcUM7UUFDckMscUNBQXFDO0lBQ3ZDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFiWSxvQ0FBWTs7Ozs7Ozs7Ozs7QUNIekI7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PSVMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9iYXNlLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9saW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3RleHQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9sYWJlbC53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvc3ByaXRlLndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9tb3VzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9uZXdtb3VzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy9leHRlcm5hbCB1bWQgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09JUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL09JUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlBJWElcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiT0lTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiT0lTXCJdID0gZmFjdG9yeShyb290W1wiUElYSVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX18pID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBDb250YWluZXIsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIG9uRHJhZ0VuZCxcclxuICBvbkRyYWdNb3ZlU3RlcCxcclxuICBvbkRyYWdTdGFydCxcclxufSBmcm9tIFwiLi4vc2VydmljZXMvbW91c2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2Uge1xyXG4gIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcmVmOiBzdHJpbmc7XHJcbiAgX2NvbG9yOiBudW1iZXI7XHJcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcclxuICBjb25zdHJ1Y3Rvcih7IHJlZiwgY29sb3IsIHgsIHkgfTogQmFzZU9wdGlvbnMpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXJcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgb25EcmFnU3RhcnQpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCBvbkRyYWdFbmQpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgb25EcmFnRW5kKVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCBvbkRyYWdNb3ZlU3RlcCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiAod2luZG93Lm9pcy5zZWxlY3RlZCA9IHRoaXMpKTtcclxuICAgIHdpbmRvdy5vaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcbiAgc2VsZWN0KCkge1xyXG4gICAgd2luZG93Lm9pcy5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBzZXQgeCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnkgPSB5O1xyXG4gIH1cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlLCBHcmFwaGljcywgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBMQUJFTCB9IGZyb20gXCIuL3dpZGdldHMvbGFiZWwud2lkZ2V0XCI7XHJcbmltcG9ydCB7IFNQUklURSB9IGZyb20gXCIuL3dpZGdldHMvc3ByaXRlLndpZGdldFwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50UHJvcHMsXHJcbiAgQ29tcG9uZW50Q29uZmlnLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDT01QT05FTlQgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF9wcm9wczogQ29tcG9uZW50UHJvcHM7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlID0gbmV3IFNQUklURSgpO1xyXG4gIHByaXZhdGUgX2xhYmVsID0gbmV3IExBQkVMKCk7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy50eXBlID0gXCJjb21wb25lbnRcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICB0aGlzLl9sYWJlbC5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPSB0aGlzLl9sYWJlbC5oZWlnaHQgKyAyMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcblxyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjApO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDQpO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIpO1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3Quc2V0KDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgbGV0IHJhZCA9IG9mZnNldDtcclxuICAgIHdpbmRvdy5vaXMudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAocmFkID49IHRoaXMuX3Nwcml0ZS53aWR0aCkge1xyXG4gICAgICAgIHJhZCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgcmFkICs9IGQgLyAyO1xyXG4gICAgICBjb25zdCBvcGFjaXR5ID0gKHRoaXMuX3Nwcml0ZS53aWR0aCAtIHJhZCkgLyB0aGlzLl9zcHJpdGUud2lkdGg7XHJcbiAgICAgIGNpcmNsZS5jbGVhcigpO1xyXG4gICAgICBjaXJjbGUubGluZVN0eWxlKDIsIHRoaXMuX2NvbG9yLCBvcGFjaXR5KTtcclxuICAgICAgY2lyY2xlLmJlZ2luRmlsbCh0aGlzLl9jb2xvciwgb3BhY2l0eSAtIDAuMSk7XHJcbiAgICAgIGNpcmNsZS5kcmF3RWxsaXBzZSh4LCB5LCByYWQsIHJhZCAvIDEuNik7XHJcbiAgICB9KTtcclxuICAgIGNpcmNsZS56SW5kZXggPSAwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlKTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogQ29tcG9uZW50UHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLl9zcHJpdGUudGV4dHVyZSA9IFRleHR1cmUuZnJvbShgJHtwcm9wcy5uYW1lfWApO1xyXG4gICAgdGhpcy5fbGFiZWwudGV4dCA9IHByb3BzLmxhYmVsO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX2xhYmVsKSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IENvbXBvbmVudENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy5jb250YWluZXIucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JhcGhpY3MsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMaW5lUHJvcHMsIExpbmVDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9saW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTElORSBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX2xpbmU6IEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IExpbmVQcm9wcztcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fbGluZSk7XHJcbiAgICB0aGlzLnR5cGUgPSBcImxpbmVcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnRJbkxpbmUoXHJcbiAgICBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBvZmZzZXQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgTWF0aC5wb3coYi54IC0gYS54LCAyKSArIE1hdGgucG93KGIueSAtIGEueSwgMilcclxuICAgICk7XHJcbiAgICBjb25zdCBmYWN0b3IgPSBvZmZzZXQgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiBmYWN0b3IsIHk6IGEueSArIChiLnkgLSBhLnkpICogZmFjdG9yIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlZ21lbnRzKHBvaW50czogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCwgaSkgPT4ge1xyXG4gICAgICBpZiAocG9pbnRzW2kgLSAxXSkge1xyXG4gICAgICAgIGlmIChpID09PSBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludHNbaSAtIDFdLCBwb2ludCwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiBwb2ludCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50SW5MaW5lKHBvaW50c1tpIC0gMV0sIHBvaW50LCByYWRpdXMpLFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvaW50c1tpICsgMV0pIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgYmF6aWVyOiBwb2ludCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICBzdGFydDogcG9pbnQsXHJcbiAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpICsgMV0sIHJhZGl1cyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICB0aGlzLl9saW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9saW5lLmxpbmVTdHlsZSh0aGlzLl9wcm9wcy53aWR0aCwgdGhpcy5fY29sb3IsIDEpO1xyXG4gICAgdGhpcy5zZWdtZW50cyh0aGlzLl9wcm9wcy5wb2ludHMsIHRoaXMuX3Byb3BzLnJhZGl1cykuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIXNlZ21lbnQuYmF6aWVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGluZS5tb3ZlVG8oc2VnbWVudC5zdGFydC54LCBzZWdtZW50LnN0YXJ0LnkpO1xyXG4gICAgICAgIHRoaXMuX2xpbmUubGluZVRvKHNlZ21lbnQuZW5kLngsIHNlZ21lbnQuZW5kLnkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9saW5lLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgc2VnbWVudC5zdGFydC54LFxyXG4gICAgICAgIHNlZ21lbnQuc3RhcnQueSxcclxuICAgICAgICBzZWdtZW50LmJhemllci54LFxyXG4gICAgICAgIHNlZ21lbnQuYmF6aWVyLnksXHJcbiAgICAgICAgc2VnbWVudC5lbmQueCxcclxuICAgICAgICBzZWdtZW50LmVuZC55XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2xpbmUubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwKTtcclxuICAgIHRoaXMuX2xpbmUuYmVnaW5GaWxsKDB4MDAwMDAwLCAwLjAxKTtcclxuICAgIHRoaXMuX2xpbmUubW92ZVRvKHRoaXMuX3Byb3BzLnBvaW50c1swXS54LCB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8ocG9pbnQueCArIHRoaXMuX3Byb3BzLndpZHRoLCBwb2ludC55KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8oXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueCAtIHRoaXMuX3Byb3BzLndpZHRoLFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9saW5lLmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRQb2ludHMoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigxLCB0aGlzLl9wcm9wcy5wb2ludHMubGVuZ3RoICsgMSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgY29uc3QgcCA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgICAvLyBwLnBpdm90LnNldCgzLCAzIC8gMS42KTtcclxuICAgICAgcC5wb3NpdGlvbi5zZXQocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgIHAubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgICBwLmJlZ2luRmlsbCgweDAwMDAwMCwgMSk7XHJcbiAgICAgIHAuZHJhd0VsbGlwc2UoMCwgMCwgMTAsIDEwIC8gMS42KTtcclxuICAgICAgcC5lbmRGaWxsKCk7XHJcbiAgICAgIHAuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICBwLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRyYWdQb2ludChwLCBwb2ludCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmFnUG9pbnQocDogR3JhcGhpY3MsIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgIGxldCBkYXRhOiBhbnk7XHJcbiAgICBsZXQgZHJhZyA9IGZhbHNlO1xyXG4gICAgcC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIGRhdGEgPSBlLmRhdGE7XHJcbiAgICAgIGRyYWcgPSB0cnVlO1xyXG4gICAgICB3aW5kb3cub2lzLm1vdmUgPSBmYWxzZTtcclxuICAgICAgcG9pbnQueCArPSAxMDtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93Lm9pcy5tb3ZlID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZyA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5vaXMubW92ZSA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZHJhZykge1xyXG4gICAgICAgICAgY29uc3QgbmV3cCA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbihwLnBhcmVudCk7XHJcbiAgICAgICAgICBwb2ludC54ID0gbmV3cC54O1xyXG4gICAgICAgICAgcC5wb3NpdGlvbi54ID0gbmV3cC54O1xyXG4gICAgICAgICAgcG9pbnQueSA9IG5ld3AueTtcclxuICAgICAgICAgIHAucG9zaXRpb24ueSA9IG5ld3AueTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogTGluZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHRoaXMuc2V0dXAoKTtcclxuICAgIGlmICh3aW5kb3cub2lzLmVkaXRhYmxlKSB0aGlzLmFkZFBvaW50cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fbGluZSkge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IExpbmVDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZVByb3BzLCBQbGFuZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBMQU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfcGxhbmU6IEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IFBsYW5lUHJvcHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3BsYW5lKTtcclxuICAgIHRoaXMudHlwZSA9IFwicGxhbmVcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBjb25zdCByYWQgPSAoMzEgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgIGNvbnN0IGEgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IGIgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5jb3MocmFkKTtcclxuICAgIGNvbnN0IEEgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IEIgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5jb3MocmFkKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIDAuMSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lU3R5bGUoMiwgdGhpcy5fY29sb3IsIDAuNSk7XHJcbiAgICB0aGlzLl9wbGFuZS5tb3ZlVG8oMCwgMCk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oYiwgLWEpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKGIgKyBCLCAtYSArIEEpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKEIsIEEpO1xyXG4gICAgdGhpcy5fcGxhbmUuY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5lbmRGaWxsKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFBsYW5lUHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9wbGFuZSkge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFBsYW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1dGlscywgVGV4dCwgVGV4dFN0eWxlRm9udFdlaWdodCB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVGV4dENvbmZpZywgVGV4dFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGV4dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRFWFQgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF90ZXh0ID0gbmV3IFRleHQoXCJcIik7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IFRleHRQcm9wcztcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLnR5cGUgPSBcInRleHRcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBpZiAodGhpcy5fcHJvcHMuc2tldykge1xyXG4gICAgICB0aGlzLl90ZXh0LnNrZXcuc2V0KC0xLjAzLCAoMzEgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSB0aGlzLl9wcm9wcy5mb250V2lkdGggYXMgVGV4dFN0eWxlRm9udFdlaWdodDtcclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZm9udFNpemUgPSB0aGlzLl9wcm9wcy5mb250U2l6ZTtcclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZmlsbCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5fdGV4dC50ZXh0ID0gdGhpcy5fcHJvcHMudGV4dDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3RleHQpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBUZXh0UHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl90ZXh0KSB7XHJcbiAgICAgIHRoaXMuX3RleHQudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl90ZXh0KSB7XHJcbiAgICAgIHRoaXMuX3RleHQuc3R5bGUuZmlsbCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBUZXh0Q29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmFwaGljcywgVGV4dFN0eWxlLCBUZXh0LCBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExBQkVMIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIF9jb2xvcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgcHJpdmF0ZSBfbGFiZWxUZXh0OiBUZXh0O1xyXG4gIHByaXZhdGUgX2xhYmVsID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfc3R5bGUgPSBuZXcgVGV4dFN0eWxlKHtcclxuICAgIGxldHRlclNwYWNpbmc6IDEsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBmaWxsOiBcIiNBMkEzQTdcIixcclxuICAgIHdvcmRXcmFwOiB0cnVlLFxyXG4gICAgd29yZFdyYXBXaWR0aDogMTAwLFxyXG4gICAgbGluZUpvaW46IFwicm91bmRcIixcclxuICB9KTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQgPSBuZXcgVGV4dChcIlwiLCB0aGlzLl9zdHlsZSk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQueCA9IDE2O1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnkgPSA0O1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYWJlbCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsVGV4dCk7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhdygpIHtcclxuICAgIHRoaXMuX2xhYmVsLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9sYWJlbC5iZWdpbkZpbGwodGhpcy5fY29sb3IpO1xyXG4gICAgdGhpcy5fbGFiZWwuZHJhd1JlY3QoMCwgMCwgNiwgdGhpcy5fbGFiZWxUZXh0LmhlaWdodCArIDEwKTtcclxuICAgIHRoaXMuX2xhYmVsLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX2xhYmVsLmxpbmVTdHlsZSgxLCAweGZmZmZmZiwgMC4xKTtcclxuICAgIHRoaXMuX2xhYmVsLmJlZ2luRmlsbCgweDExMTIxYiwgMSk7XHJcbiAgICB0aGlzLl9sYWJlbC5kcmF3UmVjdChcclxuICAgICAgNixcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5fbGFiZWxUZXh0LndpZHRoICsgMjAsXHJcbiAgICAgIHRoaXMuX2xhYmVsVGV4dC5oZWlnaHQgKyAxMFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2xhYmVsLmVuZEZpbGwoKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgYWNjID0gMDtcclxuICAgIHRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICBpZiAoYWNjIDwgMjApIHtcclxuICAgICAgICBhY2MgKz0gMTtcclxuICAgICAgICB0aGlzLl90ZXh0ICs9IHM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjID0gMDtcclxuICAgICAgICB0aGlzLl90ZXh0ICs9IFwiIFwiO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC50ZXh0ID0gdGhpcy5fdGV4dDtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFRleHR1cmUsIFNwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU1BSSVRFIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9vZmZzZXQgPSAxMDtcclxuICAgIHRoaXMuc3dpbmcoKTtcclxuICB9XHJcblxyXG4gIHN3aW5nKCkge1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIHdpbmRvdy5vaXMudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ID49IHRoaXMuX29mZnNldCkgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IDw9IDApIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGlmIChmbGFnKSB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSArPSBkIC8gNTtcclxuICAgICAgICBlbHNlIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IC09IGQgLyA1O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCB0ZXh0dXJlKHRleHR1cmU6IFRleHR1cmUpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICB0aGlzLnBpdm90LnNldCh0aGlzLl9zcHJpdGUud2lkdGggLyAyLCAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvbixcclxuICBMb2FkZXIsXHJcbiAgSUFwcGxpY2F0aW9uT3B0aW9ucyxcclxuICBUZXh0dXJlLFxyXG4gIFRpbGluZ1Nwcml0ZSxcclxuICBDb250YWluZXIsXHJcbn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHtcclxuICBvbkRyYWdTdGFydCxcclxuICBvbkRyYWdFbmQsXHJcbiAgb25EcmFnTW92ZU1hcCxcclxufSBmcm9tIFwiLi9zZXJ2aWNlcy9tb3VzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9lbGVtZW50cy9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZWxlbWVudHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTW91c2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbmV3bW91c2Uuc2VydmljZVwiO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBvaXM6IEFwcDtcclxuICB9XHJcbiAgaW50ZXJmYWNlIENvbnRhaW5lciB7XHJcbiAgICBpbnRlcmFjdGl2ZTogYm9vbGVhbjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIEFwcGxpY2F0aW9uIHtcclxuICBwdWJsaWMgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIHByaXZhdGUgZWxlbWVudHNTZXJ2aWNlID0gbmV3IEVsZW1lbnRzU2VydmljZSgpO1xyXG4gIHByaXZhdGUgbW91c2VTZXJ2aWNlID0gbmV3IE1vdXNlU2VydmljZSh0aGlzLmNvbnRhaW5lcik7XHJcbiAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlID0gbmV3IENvbmZpZ1NlcnZpY2UoKTtcclxuICBwcml2YXRlIF9zZWxlY3RlZDogQmFzZTtcclxuICBwcml2YXRlIG9mZnNldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgcHVibGljIGJnOiBUaWxpbmdTcHJpdGU7XHJcbiAgcHVibGljIGxvYWRlcjogTG9hZGVyO1xyXG4gIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1vdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcjogc3RyaW5nLCBvcHRpb25zOiBJQXBwbGljYXRpb25PcHRpb25zKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAweDBhMGMxMyxcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAoIWNvbnRhaW5lcikgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xyXG4gICAgZWxzZSBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgIHRoaXMubG9hZGVyID0gTG9hZGVyLnNoYXJlZDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMuYmcgPSBuZXcgVGlsaW5nU3ByaXRlKFxyXG4gICAgICBUZXh0dXJlLmZyb20oXCJiZ1wiKSxcclxuICAgICAgdGhpcy5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIHRoaXMuc2NyZWVuLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMuYmcuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5iZ1xyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCBvbkRyYWdTdGFydClcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsIG9uRHJhZ0VuZClcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCBvbkRyYWdFbmQpXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsIG9uRHJhZ01vdmVNYXApO1xyXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmJnKTtcclxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgdGhpcy50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZChkKTtcclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggIT0gdGhpcy5iZy50aWxlUG9zaXRpb24ueCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggPSB0aGlzLmJnLnRpbGVQb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnkgPSB0aGlzLmJnLnRpbGVQb3NpdGlvbi55O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWQoY29uZmlnOiBDb25maWcsIGNiOiAob2lzOiBBcHApID0+IHZvaWQsIGVkaXRhYmxlPzogYm9vbGVhbikge1xyXG4gICAgaWYgKGVkaXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uZmlnLmFzc2V0cy5mb3JFYWNoKChzcHJpdGUpID0+IHtcclxuICAgICAgdGhpcy5sb2FkZXIuYWRkKHNwcml0ZS5uYW1lLCBzcHJpdGUuZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubG9hZGVyLmxvYWQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICBjYih0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbFRvU2VsZWN0ZWQoZDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgdGhpcy5iZy50aWxlUG9zaXRpb24ueCA+IHRoaXMub2Zmc2V0LngpIHtcclxuICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueCAtPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLmJnLnRpbGVQb3NpdGlvbi54IDwgdGhpcy5vZmZzZXQueClcclxuICAgICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ID0gdGhpcy5vZmZzZXQueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCAmJiB0aGlzLmJnLnRpbGVQb3NpdGlvbi54IDwgdGhpcy5vZmZzZXQueCkge1xyXG4gICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ICs9IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPiB0aGlzLm9mZnNldC54KVxyXG4gICAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPSB0aGlzLm9mZnNldC54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkICYmIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPiB0aGlzLm9mZnNldC55KSB7XHJcbiAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgLT0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy5iZy50aWxlUG9zaXRpb24ueSA8IHRoaXMub2Zmc2V0LnkpXHJcbiAgICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueSA9IHRoaXMub2Zmc2V0Lnk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgdGhpcy5iZy50aWxlUG9zaXRpb24ueSA8IHRoaXMub2Zmc2V0LnkpIHtcclxuICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueSArPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLmJnLnRpbGVQb3NpdGlvbi55ID4gdGhpcy5vZmZzZXQueSlcclxuICAgICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi55ID0gdGhpcy5vZmZzZXQueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBjb25maWcoY29uZmlnOiBDb25maWcpIHtcclxuICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPSBjb25maWcub2Zmc2V0Lng7XHJcbiAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi55ID0gY29uZmlnLm9mZnNldC55O1xyXG4gICAgdGhpcy5lbGVtZW50c1NlcnZpY2UucmVmcyA9IHt9O1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIGNvbmZpZy5wbGFuZXMuZm9yRWFjaCgocGxhbmUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwicGxhbmVcIiwgcGxhbmUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJsaW5lXCIsIGxpbmUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwiY29tcG9uZW50XCIsIGNvbXBvbmVudCk7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZy50ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcInRleHRcIiwgdGV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZChlbDogQmFzZSkge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gZWw7XHJcbiAgICAgIHRoaXMub2Zmc2V0ID0ge1xyXG4gICAgICAgIHg6IHRoaXMuc2NyZWVuLndpZHRoIC8gMiAtIGVsLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuc2NyZWVuLmhlaWdodCAvIDIgLSBlbC5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVmcygpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzU2VydmljZS5yZWZzO1xyXG4gIH1cclxuXHJcbiAgdXNlKHBsdWdpbjogKG9pczogQXBwKSA9PiB2b2lkKSB7XHJcbiAgICBwbHVnaW4odGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHNlbGVjdG9yOiBzdHJpbmcsIG9wdGlvbnM6IElBcHBsaWNhdGlvbk9wdGlvbnMpIHtcclxuICB3aW5kb3cub2lzID0gbmV3IEFwcChzZWxlY3Rvciwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIHdpbmRvdy5vaXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50c1NlcnZpY2UgfSBmcm9tIFwiLi9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcbiAgcHVibGljIG1ha2VDb25maWcocmVmczogRWxlbWVudHNTZXJ2aWNlW1wicmVmc1wiXSkge1xyXG4gICAgY29uc3QgcmVzdWx0OiBDb25maWcgPSB7XHJcbiAgICAgIGNvbXBvbmVudHM6IFtdLFxyXG4gICAgICB0ZXh0czogW10sXHJcbiAgICAgIHBsYW5lczogW10sXHJcbiAgICAgIGxpbmVzOiBbXSxcclxuICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgYXNzZXRzOiBbXSxcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhyZWZzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgc3dpdGNoIChyZWZzW2tleV0udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb21wb25lbnRcIjpcclxuICAgICAgICAgIC8vIHJlc3VsdC5jb21wb25lbnRzLnB1c2gocmVmc1trZXldLmNvbmZpZylcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAvLyByZXN1bHQudGV4dHMucHVzaChyZWZzW2tleV0uY29uZmlnKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTVBPTkVOVCB9IGZyb20gXCIuLi9lbGVtZW50cy9jb21wb25lbnQuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMSU5FIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2xpbmUuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQTEFORSB9IGZyb20gXCIuLi9lbGVtZW50cy9wbGFuZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFRFWFQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdGV4dC5lbGVtZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50Q29uZmlnLFxyXG4gIENvbXBvbmVudFByb3BzLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTGluZUNvbmZpZywgTGluZVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbGluZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgUGxhbmVDb25maWcsIFBsYW5lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGFuZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVGV4dENvbmZpZywgVGV4dFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGV4dC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbGVtZW50c1NlcnZpY2Uge1xyXG4gIHB1YmxpYyByZWZzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBDT01QT05FTlQgfCBMSU5FIHwgVEVYVCB8IFBMQU5FO1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHVibGljIGFkZChcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIGNvbmZpZzogQ29tcG9uZW50Q29uZmlnIHwgVGV4dENvbmZpZyB8IFBsYW5lQ29uZmlnIHwgTGluZUNvbmZpZ1xyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLnJlZnNbY29uZmlnLnJlZl0pIHtcclxuICAgICAgbGV0IGVsOiBDT01QT05FTlQgfCBMSU5FIHwgVEVYVCB8IFBMQU5FO1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiY29tcG9uZW50XCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBDT01QT05FTlQoY29uZmlnKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIENvbXBvbmVudFByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFRFWFQoY29uZmlnKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIFRleHRQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJwbGFuZVwiOlxyXG4gICAgICAgICAgZWwgPSBuZXcgUExBTkUoY29uZmlnKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIFBsYW5lUHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGluZVwiOlxyXG4gICAgICAgICAgZWwgPSBuZXcgTElORShjb25maWcpO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgTGluZVByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmc1tjb25maWcucmVmXSA9IGVsO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzW2NvbmZpZy5yZWZdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgSW4gc2NoZW1hIGNvbmZpZ3VyYXRpb24gbGluayBcIiR7XHJcbiAgICAgICAgICBjb25maWcucmVmXHJcbiAgICAgICAgfVwiIGlzIGR1cGxpY2F0ZWQuICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX1cImBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUocmVmOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xyXG4gICAgICB3aW5kb3cub2lzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnJlZnNbcmVmXS5jb250YWluZXIpO1xyXG4gICAgICBkZWxldGUgdGhpcy5yZWZzW3JlZl07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudDogYW55KSB7XHJcbiAgLy8gdGhpcy5zY2FsZS5zZXQoMC45NSwgMC45NSk7XHJcbiAgdGhpcy5kYXRhID0gZXZlbnQuZGF0YTtcclxuICB0aGlzLnN0YXJ0ID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG4gIHRoaXMuYWxwaGEgPSAwLjg7XHJcbiAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdFbmQoKSB7XHJcbiAgLy8gdGhpcy5zY2FsZS5zZXQoMSwgMSk7XHJcbiAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gIHRoaXMuZGF0YSA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgIHRoaXMueCA9IG5ld1Bvc2l0aW9uLng7XHJcbiAgICB0aGlzLnkgPSBuZXdQb3NpdGlvbi55O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnTW92ZVN0ZXAoKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcgJiYgd2luZG93Lm9pcy5tb3ZlKSB7XHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54ID49IDI1KSB7XHJcbiAgICAgIHRoaXMueCArPSAyNTtcclxuICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA8PSAtMjUpIHtcclxuICAgICAgdGhpcy54IC09IDI1O1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPj0gMTUpIHtcclxuICAgICAgdGhpcy55ICs9IDE1O1xyXG4gICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55IDw9IC0xNSkge1xyXG4gICAgICB0aGlzLnkgLT0gMTU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlTWFwKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgIGNvbnN0IHggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5zdGFydC54O1xyXG4gICAgY29uc3QgeSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnN0YXJ0Lnk7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi54ICs9IHg7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi55ICs9IHk7XHJcbiAgICB0aGlzLnN0YXJ0LnggKz0geDtcclxuICAgIHRoaXMuc3RhcnQueSArPSB5O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZDogQmFzZTtcclxuICBwdWJsaWMgdG9vbDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBDb250YWluZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgLy8gLm9uKFwicG9pbnRlcmRvd25cIiwgb25EcmFnU3RhcnQpXHJcbiAgICAvLyAub24oXCJwb2ludGVydXBcIiwgb25EcmFnRW5kKVxyXG4gICAgLy8gLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCBvbkRyYWdFbmQpXHJcbiAgICAvLyAub24oXCJwb2ludGVybW92ZVwiLCBvbkRyYWdNb3ZlTWFwKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=