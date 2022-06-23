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
            .on("pointerdown", function () {
            window.ois.selected = _this;
        })
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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(selector, options) {
        var _this = _super.call(this, __assign({ antialias: true, backgroundColor: 0x0a0c13 }, options)) || this;
        _this.container = new pixi_js_1.Container();
        _this.elementsService = new elements_service_1.ElementsService();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSx3QkFBSzthQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFD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QUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjtBQUNILENBQUM7QUFWRCxzQ0FVQzs7Ozs7Ozs7Ozs7QUMvQ0Q7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PSVMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9iYXNlLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9saW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3RleHQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9sYWJlbC53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvc3ByaXRlLndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9tb3VzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy9leHRlcm5hbCB1bWQgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09JUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL09JUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlBJWElcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiT0lTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiT0lTXCJdID0gZmFjdG9yeShyb290W1wiUElYSVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX18pID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBDb250YWluZXIsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIG9uRHJhZ0VuZCxcclxuICBvbkRyYWdNb3ZlU3RlcCxcclxuICBvbkRyYWdTdGFydCxcclxufSBmcm9tIFwiLi4vc2VydmljZXMvbW91c2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2Uge1xyXG4gIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcmVmOiBzdHJpbmc7XHJcbiAgX2NvbG9yOiBudW1iZXI7XHJcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcclxuICBjb25zdHJ1Y3Rvcih7IHJlZiwgY29sb3IsIHgsIHkgfTogQmFzZU9wdGlvbnMpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXJcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vaXMuc2VsZWN0ZWQgPSB0aGlzO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCBvbkRyYWdTdGFydClcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsIG9uRHJhZ0VuZClcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCBvbkRyYWdFbmQpXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsIG9uRHJhZ01vdmVTdGVwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9uKFwicG9pbnRlcnVwXCIsICgpID0+ICh3aW5kb3cub2lzLnNlbGVjdGVkID0gdGhpcykpO1xyXG4gICAgd2luZG93Lm9pcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuICBzZWxlY3QoKSB7XHJcbiAgICB3aW5kb3cub2lzLnNlbGVjdGVkID0gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLng7XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IHg7XHJcbiAgfVxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG4gIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueSA9IHk7XHJcbiAgfVxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFRleHR1cmUsIEdyYXBoaWNzLCB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IExBQkVMIH0gZnJvbSBcIi4vd2lkZ2V0cy9sYWJlbC53aWRnZXRcIjtcclxuaW1wb3J0IHsgU1BSSVRFIH0gZnJvbSBcIi4vd2lkZ2V0cy9zcHJpdGUud2lkZ2V0XCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRQcm9wcyxcclxuICBDb21wb25lbnRDb25maWcsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENPTVBPTkVOVCBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3Byb3BzOiBDb21wb25lbnRQcm9wcztcclxuICBwcml2YXRlIF9zcHJpdGUgPSBuZXcgU1BSSVRFKCk7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgTEFCRUwoKTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLnR5cGUgPSBcImNvbXBvbmVudFwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIHRoaXMuX2xhYmVsLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9sYWJlbCk7XHJcblxyXG4gICAgdGhpcy5fc3ByaXRlLnpJbmRleCA9IDI7XHJcbiAgICB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSA9IHRoaXMuX2xhYmVsLmhlaWdodCArIDIwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuXHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCk7XHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCwgdGhpcy5fc3ByaXRlLndpZHRoIC8gNCk7XHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCwgdGhpcy5fc3ByaXRlLndpZHRoIC8gMik7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5waXZvdC5zZXQoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgY29uc3QgY2lyY2xlID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICBsZXQgcmFkID0gb2Zmc2V0O1xyXG4gICAgd2luZG93Lm9pcy50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmIChyYWQgPj0gdGhpcy5fc3ByaXRlLndpZHRoKSB7XHJcbiAgICAgICAgcmFkID0gMDtcclxuICAgICAgfVxyXG4gICAgICByYWQgKz0gZCAvIDI7XHJcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSAodGhpcy5fc3ByaXRlLndpZHRoIC0gcmFkKSAvIHRoaXMuX3Nwcml0ZS53aWR0aDtcclxuICAgICAgY2lyY2xlLmNsZWFyKCk7XHJcbiAgICAgIGNpcmNsZS5saW5lU3R5bGUoMiwgdGhpcy5fY29sb3IsIG9wYWNpdHkpO1xyXG4gICAgICBjaXJjbGUuYmVnaW5GaWxsKHRoaXMuX2NvbG9yLCBvcGFjaXR5IC0gMC4xKTtcclxuICAgICAgY2lyY2xlLmRyYXdFbGxpcHNlKHgsIHksIHJhZCwgcmFkIC8gMS42KTtcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlLnpJbmRleCA9IDA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBDb21wb25lbnRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gVGV4dHVyZS5mcm9tKGAke3Byb3BzLm5hbWV9YCk7XHJcbiAgICB0aGlzLl9sYWJlbC50ZXh0ID0gcHJvcHMubGFiZWw7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fbGFiZWwpIHtcclxuICAgICAgdGhpcy5fbGFiZWwuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogQ29tcG9uZW50Q29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmFwaGljcywgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IExpbmVQcm9wcywgTGluZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2xpbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMSU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfbGluZTogR3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wcm9wczogTGluZVByb3BzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9saW5lKTtcclxuICAgIHRoaXMudHlwZSA9IFwibGluZVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludEluTGluZShcclxuICAgIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIG9mZnNldDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gTWF0aC5zcXJ0KFxyXG4gICAgICBNYXRoLnBvdyhiLnggLSBhLngsIDIpICsgTWF0aC5wb3coYi55IC0gYS55LCAyKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZhY3RvciA9IG9mZnNldCAvIHNlZ21lbnRMZW5ndGg7XHJcbiAgICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIGZhY3RvciwgeTogYS55ICsgKGIueSAtIGEueSkgKiBmYWN0b3IgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VnbWVudHMocG9pbnRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwb2ludHMucmVkdWNlKChhY2MsIHBvaW50LCBpKSA9PiB7XHJcbiAgICAgIGlmIChwb2ludHNbaSAtIDFdKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50SW5MaW5lKHBvaW50c1tpIC0gMV0sIHBvaW50LCByYWRpdXMpLFxyXG4gICAgICAgICAgICBlbmQ6IHBvaW50LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9pbnRzW2kgKyAxXSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSArIDFdLCByYWRpdXMpLFxyXG4gICAgICAgICAgICBiYXppZXI6IHBvaW50LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgIHN0YXJ0OiBwb2ludCxcclxuICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIHRoaXMuX2xpbmUuY2xlYXIoKTtcclxuICAgIHRoaXMuX2xpbmUubGluZVN0eWxlKHRoaXMuX3Byb3BzLndpZHRoLCB0aGlzLl9jb2xvciwgMSk7XHJcbiAgICB0aGlzLnNlZ21lbnRzKHRoaXMuX3Byb3BzLnBvaW50cywgdGhpcy5fcHJvcHMucmFkaXVzKS5mb3JFYWNoKChzZWdtZW50KSA9PiB7XHJcbiAgICAgIGlmICghc2VnbWVudC5iYXppZXIpIHtcclxuICAgICAgICB0aGlzLl9saW5lLm1vdmVUbyhzZWdtZW50LnN0YXJ0LngsIHNlZ21lbnQuc3RhcnQueSk7XHJcbiAgICAgICAgdGhpcy5fbGluZS5saW5lVG8oc2VnbWVudC5lbmQueCwgc2VnbWVudC5lbmQueSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xpbmUuYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICBzZWdtZW50LnN0YXJ0LngsXHJcbiAgICAgICAgc2VnbWVudC5zdGFydC55LFxyXG4gICAgICAgIHNlZ21lbnQuYmF6aWVyLngsXHJcbiAgICAgICAgc2VnbWVudC5iYXppZXIueSxcclxuICAgICAgICBzZWdtZW50LmVuZC54LFxyXG4gICAgICAgIHNlZ21lbnQuZW5kLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5saW5lU3R5bGUoMSwgdGhpcy5fY29sb3IsIDApO1xyXG4gICAgdGhpcy5fbGluZS5iZWdpbkZpbGwoMHgwMDAwMDAsIDAuMDEpO1xyXG4gICAgdGhpcy5fbGluZS5tb3ZlVG8odGhpcy5fcHJvcHMucG9pbnRzWzBdLngsIHRoaXMuX3Byb3BzLnBvaW50c1swXS55KTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgICB0aGlzLl9saW5lLmxpbmVUbyhwb2ludC54ICsgdGhpcy5fcHJvcHMud2lkdGgsIHBvaW50LnkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGksIGFycikgPT4ge1xyXG4gICAgICB0aGlzLl9saW5lLmxpbmVUbyhcclxuICAgICAgICBhcnJbYXJyLmxlbmd0aCAtIDEgLSBpXS54IC0gdGhpcy5fcHJvcHMud2lkdGgsXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9saW5lLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX2xpbmUuY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFBvaW50cygpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKDEsIHRoaXMuX3Byb3BzLnBvaW50cy5sZW5ndGggKyAxKTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgICBjb25zdCBwID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICAgIC8vIHAucGl2b3Quc2V0KDMsIDMgLyAxLjYpO1xyXG4gICAgICBwLnBvc2l0aW9uLnNldChwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgcC5saW5lU3R5bGUoMSwgdGhpcy5fY29sb3IsIDAuNSk7XHJcbiAgICAgIHAuYmVnaW5GaWxsKDB4MDAwMDAwLCAxKTtcclxuICAgICAgcC5kcmF3RWxsaXBzZSgwLCAwLCAxMCwgMTAgLyAxLjYpO1xyXG4gICAgICBwLmVuZEZpbGwoKTtcclxuICAgICAgcC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHAuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZHJhZ1BvaW50KHAsIHBvaW50KTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQocCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYWdQb2ludChwOiBHcmFwaGljcywgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xyXG4gICAgbGV0IGRhdGE6IGFueTtcclxuICAgIGxldCBkcmFnID0gZmFsc2U7XHJcbiAgICBwLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcclxuICAgICAgZGF0YSA9IGUuZGF0YTtcclxuICAgICAgZHJhZyA9IHRydWU7XHJcbiAgICAgIHdpbmRvdy5vaXMubW92ZSA9IGZhbHNlO1xyXG4gICAgICBwb2ludC54ICs9IDEwO1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cub2lzLm1vdmUgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93Lm9pcy5tb3ZlID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkcmFnKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdwID0gZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHAucGFyZW50KTtcclxuICAgICAgICAgIHBvaW50LnggPSBuZXdwLng7XHJcbiAgICAgICAgICBwLnBvc2l0aW9uLnggPSBuZXdwLng7XHJcbiAgICAgICAgICBwb2ludC55ID0gbmV3cC55O1xyXG4gICAgICAgICAgcC5wb3NpdGlvbi55ID0gbmV3cC55O1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBMaW5lUHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICBpZiAodGhpcy5fbGluZSkgdGhpcy5zZXR1cCgpO1xyXG4gICAgaWYgKHdpbmRvdy5vaXMuZWRpdGFibGUpIHRoaXMuYWRkUG9pbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9saW5lKSB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogTGluZUNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy5jb250YWluZXIucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcywgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBsYW5lUHJvcHMsIFBsYW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxhbmUuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUExBTkUgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF9wbGFuZTogR3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wcm9wczogUGxhbmVQcm9wcztcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fcGxhbmUpO1xyXG4gICAgdGhpcy50eXBlID0gXCJwbGFuZVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIGNvbnN0IHJhZCA9ICgzMSAqIE1hdGguUEkpIC8gMTgwO1xyXG4gICAgY29uc3QgYSA9IHRoaXMuX3Byb3BzLmggKiBNYXRoLnNpbihyYWQpO1xyXG4gICAgY29uc3QgYiA9IHRoaXMuX3Byb3BzLmggKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgY29uc3QgQSA9IHRoaXMuX3Byb3BzLncgKiBNYXRoLnNpbihyYWQpO1xyXG4gICAgY29uc3QgQiA9IHRoaXMuX3Byb3BzLncgKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgdGhpcy5fcGxhbmUuY2xlYXIoKTtcclxuICAgIHRoaXMuX3BsYW5lLmJlZ2luRmlsbCh0aGlzLl9jb2xvciwgMC4xKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVTdHlsZSgyLCB0aGlzLl9jb2xvciwgMC41KTtcclxuICAgIHRoaXMuX3BsYW5lLm1vdmVUbygwLCAwKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhiLCAtYSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oYiArIEIsIC1hICsgQSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oQiwgQSk7XHJcbiAgICB0aGlzLl9wbGFuZS5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMuX3BsYW5lLmVuZEZpbGwoKTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogUGxhbmVQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX3BsYW5lKSB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogUGxhbmVDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHV0aWxzLCBUZXh0LCBUZXh0U3R5bGVGb250V2VpZ2h0IH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0Q29uZmlnLCBUZXh0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZXh0LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVEVYVCBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3RleHQgPSBuZXcgVGV4dChcIlwiKTtcclxuICBwcml2YXRlIF9wcm9wczogVGV4dFByb3BzO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMudHlwZSA9IFwidGV4dFwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIGlmICh0aGlzLl9wcm9wcy5za2V3KSB7XHJcbiAgICAgIHRoaXMuX3RleHQuc2tldy5zZXQoLTEuMDMsICgzMSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZm9udFdlaWdodCA9IHRoaXMuX3Byb3BzLmZvbnRXaWR0aCBhcyBUZXh0U3R5bGVGb250V2VpZ2h0O1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5mb250U2l6ZSA9IHRoaXMuX3Byb3BzLmZvbnRTaXplO1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl90ZXh0LnRleHQgPSB0aGlzLl9wcm9wcy50ZXh0O1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fdGV4dCk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFRleHRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFRleHRDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyYXBoaWNzLCBUZXh0U3R5bGUsIFRleHQsIENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTEFCRUwgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX2NvbG9yOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nID0gXCJcIjtcclxuICBwcml2YXRlIF9sYWJlbFRleHQ6IFRleHQ7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9zdHlsZSA9IG5ldyBUZXh0U3R5bGUoe1xyXG4gICAgbGV0dGVyU3BhY2luZzogMSxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIGZpbGw6IFwiI0EyQTNBN1wiLFxyXG4gICAgd29yZFdyYXA6IHRydWUsXHJcbiAgICB3b3JkV3JhcFdpZHRoOiAxMDAsXHJcbiAgICBsaW5lSm9pbjogXCJyb3VuZFwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dCA9IG5ldyBUZXh0KFwiXCIsIHRoaXMuX3N0eWxlKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC54ID0gMTY7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQueSA9IDQ7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWxUZXh0KTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgdGhpcy5fbGFiZWwuY2xlYXIoKTtcclxuICAgIHRoaXMuX2xhYmVsLmJlZ2luRmlsbCh0aGlzLl9jb2xvcik7XHJcbiAgICB0aGlzLl9sYWJlbC5kcmF3UmVjdCgwLCAwLCA2LCB0aGlzLl9sYWJlbFRleHQuaGVpZ2h0ICsgMTApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fbGFiZWwubGluZVN0eWxlKDEsIDB4ZmZmZmZmLCAwLjEpO1xyXG4gICAgdGhpcy5fbGFiZWwuYmVnaW5GaWxsKDB4MTExMjFiLCAxKTtcclxuICAgIHRoaXMuX2xhYmVsLmRyYXdSZWN0KFxyXG4gICAgICA2LFxyXG4gICAgICAwLFxyXG4gICAgICB0aGlzLl9sYWJlbFRleHQud2lkdGggKyAyMCxcclxuICAgICAgdGhpcy5fbGFiZWxUZXh0LmhlaWdodCArIDEwXHJcbiAgICApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcbiAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gXCJcIjtcclxuICAgIGxldCBhY2MgPSAwO1xyXG4gICAgdGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgIGlmIChhY2MgPCAyMCkge1xyXG4gICAgICAgIGFjYyArPSAxO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gXCIgXCI7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnRleHQgPSB0aGlzLl90ZXh0O1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgVGV4dHVyZSwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTUFJJVEUgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xyXG4gIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX29mZnNldCA9IDEwO1xyXG4gICAgdGhpcy5zd2luZygpO1xyXG4gIH1cclxuXHJcbiAgc3dpbmcoKSB7XHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgd2luZG93Lm9pcy50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPj0gdGhpcy5fb2Zmc2V0KSBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPD0gMCkgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKGZsYWcpIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ICs9IGQgLyA1O1xyXG4gICAgICAgIGVsc2UgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgLT0gZCAvIDU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRleHR1cmUodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuICAgIHRoaXMucGl2b3Quc2V0KHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIsIDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uLFxyXG4gIExvYWRlcixcclxuICBJQXBwbGljYXRpb25PcHRpb25zLFxyXG4gIFRleHR1cmUsXHJcbiAgVGlsaW5nU3ByaXRlLFxyXG4gIENvbnRhaW5lcixcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIG9uRHJhZ1N0YXJ0LFxyXG4gIG9uRHJhZ0VuZCxcclxuICBvbkRyYWdNb3ZlTWFwLFxyXG59IGZyb20gXCIuL3NlcnZpY2VzL21vdXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2VsZW1lbnRzL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50c1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBvaXM6IEFwcDtcclxuICB9XHJcbiAgaW50ZXJmYWNlIENvbnRhaW5lciB7XHJcbiAgICBpbnRlcmFjdGl2ZTogYm9vbGVhbjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIEFwcGxpY2F0aW9uIHtcclxuICBwdWJsaWMgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIHByaXZhdGUgZWxlbWVudHNTZXJ2aWNlID0gbmV3IEVsZW1lbnRzU2VydmljZSgpO1xyXG4gIHByaXZhdGUgY29uZmlnU2VydmljZSA9IG5ldyBDb25maWdTZXJ2aWNlKCk7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEJhc2U7XHJcbiAgcHJpdmF0ZSBvZmZzZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xyXG4gIHB1YmxpYyBiZzogVGlsaW5nU3ByaXRlO1xyXG4gIHB1YmxpYyBsb2FkZXI6IExvYWRlcjtcclxuICBwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBtb3ZlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3I6IHN0cmluZywgb3B0aW9uczogSUFwcGxpY2F0aW9uT3B0aW9ucykge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwYTBjMTMsXHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKCFjb250YWluZXIpIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgIGVsc2UgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudmlldyk7XHJcbiAgICB0aGlzLmxvYWRlciA9IExvYWRlci5zaGFyZWQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLmJnID0gbmV3IFRpbGluZ1Nwcml0ZShcclxuICAgICAgVGV4dHVyZS5mcm9tKFwiYmdcIiksXHJcbiAgICAgIHRoaXMuc2NyZWVuLndpZHRoLFxyXG4gICAgICB0aGlzLnNjcmVlbi5oZWlnaHRcclxuICAgICk7XHJcbiAgICB0aGlzLmJnLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuYmdcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgb25EcmFnU3RhcnQpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCBvbkRyYWdFbmQpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgb25EcmFnRW5kKVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCBvbkRyYWdNb3ZlTWFwKTtcclxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5iZyk7XHJcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQoZCk7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54ICE9IHRoaXMuYmcudGlsZVBvc2l0aW9uLngpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54ID0gdGhpcy5iZy50aWxlUG9zaXRpb24ueDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55ID0gdGhpcy5iZy50aWxlUG9zaXRpb24ueTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKGNvbmZpZzogQ29uZmlnLCBjYjogKG9pczogQXBwKSA9PiB2b2lkLCBlZGl0YWJsZT86IGJvb2xlYW4pIHtcclxuICAgIGlmIChlZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbmZpZy5hc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVyLmFkZChzcHJpdGUubmFtZSwgc3ByaXRlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxvYWRlci5sb2FkKCgpID0+IHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgY2IodGhpcyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxUb1NlbGVjdGVkKGQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkICYmIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggPiB0aGlzLm9mZnNldC54KSB7XHJcbiAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggLT0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy5iZy50aWxlUG9zaXRpb24ueCA8IHRoaXMub2Zmc2V0LngpXHJcbiAgICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueCA9IHRoaXMub2Zmc2V0Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgdGhpcy5iZy50aWxlUG9zaXRpb24ueCA8IHRoaXMub2Zmc2V0LngpIHtcclxuICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueCArPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLmJnLnRpbGVQb3NpdGlvbi54ID4gdGhpcy5vZmZzZXQueClcclxuICAgICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ID0gdGhpcy5vZmZzZXQueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCAmJiB0aGlzLmJnLnRpbGVQb3NpdGlvbi55ID4gdGhpcy5vZmZzZXQueSkge1xyXG4gICAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi55IC09IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPCB0aGlzLm9mZnNldC55KVxyXG4gICAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPSB0aGlzLm9mZnNldC55O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkICYmIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgPCB0aGlzLm9mZnNldC55KSB7XHJcbiAgICAgIHRoaXMuYmcudGlsZVBvc2l0aW9uLnkgKz0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy5iZy50aWxlUG9zaXRpb24ueSA+IHRoaXMub2Zmc2V0LnkpXHJcbiAgICAgICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueSA9IHRoaXMub2Zmc2V0Lnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgY29uZmlnKGNvbmZpZzogQ29uZmlnKSB7XHJcbiAgICB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ID0gY29uZmlnLm9mZnNldC54O1xyXG4gICAgdGhpcy5iZy50aWxlUG9zaXRpb24ueSA9IGNvbmZpZy5vZmZzZXQueTtcclxuICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlZnMgPSB7fTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICBjb25maWcucGxhbmVzLmZvckVhY2goKHBsYW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcInBsYW5lXCIsIHBsYW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwibGluZVwiLCBsaW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcImNvbXBvbmVudFwiLCBjb21wb25lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJ0ZXh0XCIsIHRleHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQoZWw6IEJhc2UpIHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGVsO1xyXG4gICAgICB0aGlzLm9mZnNldCA9IHtcclxuICAgICAgICB4OiB0aGlzLnNjcmVlbi53aWR0aCAvIDIgLSBlbC5jb250YWluZXIucG9zaXRpb24ueCxcclxuICAgICAgICB5OiB0aGlzLnNjcmVlbi5oZWlnaHQgLyAyIC0gZWwuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2UgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1NlcnZpY2UucmVmcztcclxuICB9XHJcblxyXG4gIHVzZShwbHVnaW46IChvaXM6IEFwcCkgPT4gdm9pZCkge1xyXG4gICAgcGx1Z2luKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nLCBvcHRpb25zOiBJQXBwbGljYXRpb25PcHRpb25zKSB7XHJcbiAgd2luZG93Lm9pcyA9IG5ldyBBcHAoc2VsZWN0b3IsIG9wdGlvbnMpO1xyXG4gIHJldHVybiB3aW5kb3cub2lzO1xyXG59XHJcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgRWxlbWVudHNTZXJ2aWNlIH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBtYWtlQ29uZmlnKHJlZnM6IEVsZW1lbnRzU2VydmljZVtcInJlZnNcIl0pIHtcclxuICAgIGNvbnN0IHJlc3VsdDogQ29uZmlnID0ge1xyXG4gICAgICBjb21wb25lbnRzOiBbXSxcclxuICAgICAgdGV4dHM6IFtdLFxyXG4gICAgICBwbGFuZXM6IFtdLFxyXG4gICAgICBsaW5lczogW10sXHJcbiAgICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgIGFzc2V0czogW10sXHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocmVmcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAocmVmc1trZXldLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiY29tcG9uZW50XCI6XHJcbiAgICAgICAgICAvLyByZXN1bHQuY29tcG9uZW50cy5wdXNoKHJlZnNba2V5XS5jb25maWcpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgLy8gcmVzdWx0LnRleHRzLnB1c2gocmVmc1trZXldLmNvbmZpZylcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT01QT05FTlQgfSBmcm9tIFwiLi4vZWxlbWVudHMvY29tcG9uZW50LmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTElORSB9IGZyb20gXCIuLi9lbGVtZW50cy9saW5lLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgUExBTkUgfSBmcm9tIFwiLi4vZWxlbWVudHMvcGxhbmUuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBURVhUIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3RleHQuZWxlbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudENvbmZpZyxcclxuICBDb21wb25lbnRQcm9wcyxcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb21wb25lbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IExpbmVDb25maWcsIExpbmVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2xpbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBsYW5lQ29uZmlnLCBQbGFuZVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxhbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRleHRDb25maWcsIFRleHRQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RleHQuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWxlbWVudHNTZXJ2aWNlIHtcclxuICBwdWJsaWMgcmVmczoge1xyXG4gICAgW2tleTogc3RyaW5nXTogQ09NUE9ORU5UIHwgTElORSB8IFRFWFQgfCBQTEFORTtcclxuICB9ID0ge307XHJcblxyXG4gIHB1YmxpYyBhZGQoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBjb25maWc6IENvbXBvbmVudENvbmZpZyB8IFRleHRDb25maWcgfCBQbGFuZUNvbmZpZyB8IExpbmVDb25maWdcclxuICApIHtcclxuICAgIGlmICghdGhpcy5yZWZzW2NvbmZpZy5yZWZdKSB7XHJcbiAgICAgIGxldCBlbDogQ09NUE9ORU5UIHwgTElORSB8IFRFWFQgfCBQTEFORTtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImNvbXBvbmVudFwiOlxyXG4gICAgICAgICAgZWwgPSBuZXcgQ09NUE9ORU5UKGNvbmZpZyk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBDb21wb25lbnRQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBURVhUKGNvbmZpZyk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBUZXh0UHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicGxhbmVcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFBMQU5FKGNvbmZpZyk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBQbGFuZVByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxpbmVcIjpcclxuICAgICAgICAgIGVsID0gbmV3IExJTkUoY29uZmlnKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIExpbmVQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnNbY29uZmlnLnJlZl0gPSBlbDtcclxuICAgICAgcmV0dXJuIHRoaXMucmVmc1tjb25maWcucmVmXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgYEluIHNjaGVtYSBjb25maWd1cmF0aW9uIGxpbmsgXCIke1xyXG4gICAgICAgICAgY29uZmlnLnJlZlxyXG4gICAgICAgIH1cIiBpcyBkdXBsaWNhdGVkLiAke0pTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMil9XCJgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKHJlZjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5yZWZzW3JlZl0pIHtcclxuICAgICAgd2luZG93Lm9pcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5yZWZzW3JlZl0uY29udGFpbmVyKTtcclxuICAgICAgZGVsZXRlIHRoaXMucmVmc1tyZWZdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQ6IGFueSkge1xyXG4gIC8vIHRoaXMuc2NhbGUuc2V0KDAuOTUsIDAuOTUpO1xyXG4gIHRoaXMuZGF0YSA9IGV2ZW50LmRhdGE7XHJcbiAgdGhpcy5zdGFydCA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICB0aGlzLmFscGhhID0gMC44O1xyXG4gIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnRW5kKCkge1xyXG4gIC8vIHRoaXMuc2NhbGUuc2V0KDEsIDEpO1xyXG4gIHRoaXMuYWxwaGEgPSAxO1xyXG4gIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICB0aGlzLmRhdGEgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnTW92ZSgpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudCk7XHJcbiAgICB0aGlzLnggPSBuZXdQb3NpdGlvbi54O1xyXG4gICAgdGhpcy55ID0gbmV3UG9zaXRpb24ueTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ01vdmVTdGVwKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nICYmIHdpbmRvdy5vaXMubW92ZSkge1xyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudCk7XHJcbiAgICBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA+PSAyNSkge1xyXG4gICAgICB0aGlzLnggKz0gMjU7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPD0gLTI1KSB7XHJcbiAgICAgIHRoaXMueCAtPSAyNTtcclxuICAgIH1cclxuICAgIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55ID49IDE1KSB7XHJcbiAgICAgIHRoaXMueSArPSAxNTtcclxuICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA8PSAtMTUpIHtcclxuICAgICAgdGhpcy55IC09IDE1O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnTW92ZU1hcCgpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudCk7XHJcbiAgICBjb25zdCB4ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuc3RhcnQueDtcclxuICAgIGNvbnN0IHkgPSBuZXdQb3NpdGlvbi55IC0gdGhpcy5zdGFydC55O1xyXG4gICAgdGhpcy50aWxlUG9zaXRpb24ueCArPSB4O1xyXG4gICAgdGhpcy50aWxlUG9zaXRpb24ueSArPSB5O1xyXG4gICAgdGhpcy5zdGFydC54ICs9IHg7XHJcbiAgICB0aGlzLnN0YXJ0LnkgKz0geTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=