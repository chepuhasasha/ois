(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pixi.js"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OIS"] = factory(require("pixi.js"));
	else
		root["OIS"] = factory(root["PIXI"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_pixi_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/base.ts":
/*!****************************!*\
  !*** ./src/assets/base.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.baseAssets = void 0;
exports.baseAssets = [
    {
        name: "select",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7djNDYMwDAXgNwIjMEJHYQPYpN2k3YBROgIjdATXlnypVMU5ROQBtmRxyDt8Cj8hAf6UiNy0N7uiUDo+eu4R5Abtt/YLQWnm7tmhFErg0YHbEYAj9gJ6dm0G9GBr4LMlUMdnsAMtB3Zg9Kz2Bn6KdzmBCUwgN3AKgR7sBaxejsEOlGjFYQCGk5jARsAV5MDyXiOBCbwy0MPUQJtEsAMl+lYnMIG/QPthnUAOXLAzcE7gqYEepAbaewJ2oFQe/XUFSuXR34LOwC8NK07hRfQzXAAAAABJRU5ErkJggg==",
    },
    {
        name: "bg",
        data: "data:image/png;base64,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",
    },
    {
        name: "selectedTile",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAYAAACQPx/OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQjSURBVHgB7Zw9T9tAGMf/57hFqkIHNvqiMrQSQ9UBiZmhX4CFLUiwZunYoWuXrh3oCFLYWPgEldoVlaHqQNUOVBTapR0IoIbEvj4mCYTwJLnEL/dckp8U2Vyc5Ox/7nePYwsFxykWdf70FAs+UD4+w+7WljqBwyg4ytKSvp3P46muYZZ24k/URstp7ePz+rrahaM4GUihoKd9hQVaPVc+9sMQlajd8zChQjygv+8gh08bG+obHMOpQJp6UgpTdNC/0/KY2y4IMOX7mMlp/HBNY04E0q6n0MNPk9d5NFpc05j4QDrpyRTXNCY2EFM9meKKxsQFMqieTJGuMVGBxNWTKZI1JiKQpPVkikSNWQ0kbT2ZIklj1gLJSk+mSNFY5oHY0pMptjWWWSBS9GSKLY1lEog0PZliQ2OpBiJdT6ZkqbFUAnFNT6ZkobHEA3FVT6akrbHEAhkWPZmSlsZiBzKsejIlaY3FCmTY9WRKkhobKJBR05MpSWisr0BGXU+mxNGYcSBjPfXHoBrrGchYT/HoV2MdA5GmJ9LAOi3m6XEYAu/gYbvni0IsegoF6It9KAUe3sASphpjA5GoJxr+L6mzyy1Ne9SvF/BxyGw7T9sWUQ+wjsZOmMMqLGKisWuBiNdT9I3XdKAV7jWbaAe2g5BGDAWjapj0cihq3RKcxpFWeKU97EAI3TR2EYhr1ZMKUKQvS3TQJxtNhxp4T31fbGkrUzAlCqpEyzIEwmlMuVo9qWiURMHUQ7j+HI0a0tMaBXEE4bRrzKOhk6ed0/QIqlU4g652rxB7PS+F6JhTGH6UQa2Gk8tOrxb0HI2QZ1TB/KZv1gGE0pgnlhvzxJWeaFQoject80uZdrIUKKxBKNS/hzTKp6jfeycVfKG55PzGpF45xRxNko9o+OzTTv+FIBrV02tavd9soyBKqOup3EFj5mVyRlBf71Jx8jg6vmcVfLgxqbezsqKf0M7P0eq/aoiDXM7+vNJyHlKHyliqnta46ikKhib+t7Q6e9lm+TwkgqqrCZqvZ6h/t+i4ftzcVL/at+nqWUkauzwP0fgakoqMTwybZbLl8xBOT+x2vd5Iusak001PHMaViESNScZETxx9l4auVGM2MdUT+1oMwFhjPP3qiSPWydNYY3UG1RNHImezo6yxOHpi3w8JMWoaS0JPHIn/3jPsGktSTxyp/QA3jBpLWk/sZyBFhkVjaemJI5OfqF3VWNp64sj0moFLGstCT+znImOkayxLPXFYu6omTWM29MRh/TKnBI3Z0hPbFwjAlsZs64lD1I0AWWlMip44RN6ZkabGJOmJQ/S/Z0pSYxL1xCH+3qW4GpOsJw4nbiaLGERj0vXE4UwgEaYac0VPHE4F0qSTxlzTE4eTgTRp1dhFg2N64nA6kIimxmoBJl3TE8d//HrwMl2T+FEAAAAASUVORK5CYII=",
    },
    {
        name: "deleteBTN",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgB7ZffrQFBFMa/vbmvNKAANKAA0QDvaIB3FEABNIB3GkABGkABGqCAe++XzWTvw8zIObMjkcwvxGbsn9/MnnP2bPYD/H0+hy98GEk4Nkk4Nkk4Nkk4Nkk4Nt8og0oF6PWAVgtoNoFaLR+/34HLBTgcgP0eZZAFNz+dDrBYANWqfz/KL5fB4mHCsxkwHIoOwWqViyvRx/B4LJclo1E+USU64W43v7AWTpShpEAXEqdTkVhaHg+g3QaeT9Fh8hXm6tpkKcCE4q9vzMAkZWURIhd23UqWrskEGAxyQX65zbHz2X4My6AQeR1mnbXBiazXed2lKOE293eJuc7lQR7Dt5v7P65qvw9cr4XQZuOv0fU6JJT/aM4yxEQuzCeWDROzJgwajSI8bEnnO5cHuTAlbDDpjCzDYLstpF1J5zqXB3nS8eK2SsExxioTzMQspbm/K+k4SSHypKPM8fi62XkFw4EPDiHykGA8TqcIRtkA6aoEbyVrrpaANlNf1uZz3SpxomwxlYQ38Owt2Gq+aoZMKCkS7T/hwgaKs1LYXpFYKXY7cWdmozzhN5Fe82OThGOThGOThGOThGPzccK/HguaUE/f9fEAAAAASUVORK5CYII=",
    },
    {
        name: "copyBTN",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgB7Zg9S8NQFIbfSofUuYOoU60OgjgUPwalKIiDIA6idNDV1b/hIi4KXRx0EZwdxEERB0EXQac2XfzAodjNdNN7A8GlYA6ck/SW8ywJ+YAnNyfvvTmZfH7gBw7RB8fIRjvN5ie6GVMJ4da5EVZhaVRYGhWWRoWlyYIJz8ths7KFQnEUXq7/3+s/3t9wclxFq/UFCmwjPFdewPjEZCxZy+DQMDYq26DCJlwYGQMV+zao6EcnTe+nhE2D+fKiqdm/+qseHSApyMKra+soTc8iLcglkaasRT86adiE28E3koBF2CaG79dA5fHhHlRYFj9LyythtLWDAKWpmVj3NMwD3t3egEom6vzE7Uvs7R92PN6o13B1eRGKSBD1JdiWl3Yhs1Pc7XjOPgzX5KKxJg1Z2K/Ta9RnrGuy8PnZqfm9eY11rU2Nl+cnkwbX4IKcEmmh3cukUGFpVFgaFZbG3b5ENJN0O86N8C+kZlKMkjIpFgAAAABJRU5ErkJggg==",
    },
    {
        name: "pointBTN",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKGSURBVHgB7Zg9SBxBFMffJha3R5rbSCKXL+JpGhMtAiGFCAkJkgjBIhEskjZFmhQphHySBJImkDZNiqQIBAU/UBAFQRQUOURRC78qvwq9A5W76/S9p7OM53Lc7r0VF/Z3HDP7Zmfvf2/evJlZo7y8Yg8CxBkIGGWqsrm5AacZjAQuA+fhULDfhIL9JhTsN6FgvykDYWIxC16+es31nz++QS6bBUnEPRyzztvfePwySCMmmDz7oPExC7VtWGcbtkkhFhLPWl9AoqoaQyBj21pan3MZv3QF/vz+BRKIeXh2ZorLiBk91ra+ugJSiAkeHR6Cgf7eY/bB/j5Hu1fORqPnPlElk9l104/jsgXD4MLFClheWmCbKhNVN8BJbH3DPXjU1AzLi/OQy7nLHqiTS88xfPvOXai5VctfQgkjkelUiuvJiTH7fpp8Dxub7L50nxdcezgSMeHqtetYM1BsHdsqcbIZ+FEeTqe2YHdn2/aiLjaLeXlqMgmmafJ1sZ5WHjbUIbTYI1Lbu89HUpfO/39/ebjb3n/h649v30DNzTo7W+RDf+z71w9QDCUckYyCrbrHTIeM4eZZjj3cephXMZxwVD5pfopp7GBo9QlGbTT0KifrIUHQSJB319ZWj+TtQnj2MP0QxWrMshzFEpWJagyFWvs6v5360jOKFavjOUskJ8ZZ2NzMNIxgDlbo3rTQ03r2IGh/QX294jokCpE/9ITUwiH+XsJJrLLXN9wHKcQEO20l1V5Yj+dSEdut9XR14Kxf4VVO5d3uznaeYKXEbD5igil7ULzSRNRt+vIsgfgRaf3Qy0Q6nQJpRLOEn4RvL0+KULDfhIL9JhTsN8F9e6lWktNO4Dy8D7QW8WDGH5tWAAAAAElFTkSuQmCC",
    },
    {
        name: "element",
        data: "data:image/png;base64,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",
    },
    {
        name: "settingsBTN",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7ZhNTxNRFIZflAVtXNhClBRWrbgQFROKYUFINBoTl0RJupCFC0l0w0/wJ7gyYWOiLkhQE6JxYfwBisDCD1gIrVFhUD5aFqRtAgmcc8MAnWkbzvRewoR5Np17e+fOO+eer0xdU1PzFnzECfiMevtiZeUfjjLkCerXdxYOBJsmEGyaQLBpAsGmqYdGIpEoBh8NIRJtVGNrYR6jIy+xaM1DF1ot3Hm1e1csE2tpRZLmdKJVcDxx3jUXi7VCJyfD4VOP+SKfX5fch57ea+i4ksTm5gYKhQL67qTQfqnDtY4tHo00Kvdgi/f0XseZs8348/sXJJBO9Vtn98OSbq2zqxv9qXuohefPhjHz49uB19fUrd28dRu10p8aQEMoBCliwe0XL5cEVjly2VUUyU2qESKxvJcUcVqzrAUSlCXRUdd/PD868gKZ9KwaxxNtypKV1mbSc5AitjBbb/jpE/VAJ2/HXu2KZfiaX8C9R3Znj1VI8eTD/KDJiU8lc5wpygURi3a6B9/rRSxzPHoJLsHJrtIKxkHEPuuEA8uZDfhe3sML4sLh7Bf2kzjXpo56eem/GvML9N1N0cuES9bxmIvM9PevKBYLOAh24RBniTiJqpTWeH7g/iD5bF6NGxxCnWu58uVyWUgQC+bA4iCqlvSrCbXhTDEtqHQ2Yh/mbFAuVUn5+OE9vOCpH2bLvBt7jdN0rDPkh3ysN6hcOwPRZnLiM61/Q51bCy6Q766Rn0/RnBc8NT+VePBwSAXefjJzs6pI1IqRT1WL1l/XXDr9EzrRKnjqyzj1vXuic+rox6ETrS5hkuDr5WERCDZNINg0gWDT+PfrpV1Jjjq+s/A2brnbyl9qAS4AAAAASUVORK5CYII=",
    },
    {
        name: "upBTN",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFJSURBVHgB7dk/a8JAGMfxX0qHOEYd2rRTS5e2dCmFvpJCF4cuDl36Ulxa0KVQhxZfSaF0aP0z6SbioHHzssW70xPB8Z5HDDxfOAwXkA/HBTwTlMtHGXLUAXLWobuYTMbY5/ROsJ+5W2EBcydg7gTMnYC5EzB3AuZOwKaz8wtcXt+AI3JwHJ+g+vyCh8cKjuNTUEcKdtjfn2/02n/2mhpNBnbYbucfrc8mWl9NFjQZuPJURZLMLDaKinYY9CyZWjRVgTs1+57prvRDNhj0UQjDNbD+WkOaKo0vYTQawifyM53ZCg6rVKqHstdhWPDGbkYGNltgubIB6m81NPRwaHOPKjLwJjZVc4v9eG/YOco9bPZGttrHXuP27j6LiqWteTNn7vl+v3OSPXTcyR8pu0rA3AmYOwFzJ2DuBMydgLlbv6dzP9/2vdyt8AKRbI7iOxtm9wAAAABJRU5ErkJggg==",
    },
    {
        name: "downBTN",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFiSURBVHgB7Ze/SgNBEMa/kxS3dnem0OATaNBCBF9ALOyDFrGwOdHCgJVPYCXEQiGVkEbwbfwTnyAeFjF2d6XZ2bAhIekyAzkyP7i7vdnmx9y3x25QLq//o0CsoGCU/KDX+8EiY5PgnoXrsApLo8LSqLA0KiyNCkujwtIsr/De/gGiKJ6qU43muGATPjw6RnLVmJCmMdVojgs24dZT094DnJ0nCI1BGBonS7XhHA+BP9NxnDiieA3JZQN5nrl3Y1ad7F//F/PCfuLYqGw6URIkUS+bZxm2qjvgogQmLuzn79tOPtzfjSJAnb2+uXXyX5/v4IAvw49NxDYStZO6E6Wrdlp3tfZzC1ywZrhiY0ELrfPxRmsN29Vd1+30u4t58RlmFSa8NP0pKB4csoQXZsuwJ027eH1p2wWYs8mOwy5MdJgW2Cx08yONCkujwtKosDQqLI0KS6PC0oy2l36DvOgUrsMD6Qlm2cGng/cAAAAASUVORK5CYII=",
    },
    {
        name: "plusBTN",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEzSURBVHgB7Zi9agJBEMf/F3yBMxbBdDFJkWBSSD7eII+SIk1KC7EQC0srQQvBlxAEH8APbFQs/KpELfTuEfRu4QqLFVd31IX5wXIDOxw/9oZZ5qxI5G4Dg7iBYYSCYLVa4prxKkE8jTthFqaGhalhYWpYmJoQNGPbYfz+/Yu4Ui5hMZ9BJ9pPOPH5DTt8K9Zr/A264RqmhoWpYWFqlPtwNHqPl/i7dD8We96Nf6Sp6LQacF0HKljBEHroiJRMZUSP1YHrrJHLpg/KPWFEsqAP9Xcpl0SxkEfi40u675fBw+OTiKfjESaToTR30O9CFWVh/zPWa1V5glezgbAvuzf3CLitUcPC1LAwNdqFB72u1/ocsTrtJnSjfDVfCv57eS5YmBoWpoaFqTF3ag5ukmvHuBPeAgfAQcUpRCg5AAAAAElFTkSuQmCC",
    },
];


/***/ }),

/***/ "./src/elements/background.element.ts":
/*!********************************************!*\
  !*** ./src/elements/background.element.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Background = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var Background = /** @class */ (function () {
    function Background(app) {
        var _this = this;
        this.app = app;
        this.tile = new pixi_js_1.TilingSprite(pixi_js_1.Texture.from("bg"), this.app.screen.width, this.app.screen.height);
        this.tile.interactive = true;
        this.tile
            .on("pointerdown", function (e) { return _this.pointerDown(e); })
            .on("pointerup", function () { return _this.pointerUp(); })
            // .on("pointerupoutside", () => this.pointerOut())
            .on("pointermove", function (e) { return _this.pointerMove(e); });
        this.app.stage.addChild(this.tile);
        this.app.ticker.add(function (d) {
            if (_this.app.offset.x != _this.tile.tilePosition.x ||
                _this.app.offset.y != _this.tile.tilePosition.y)
                _this.moveToOffset(d);
            if (_this.app.container.position.x != _this.tile.tilePosition.x)
                _this.app.container.position.x = _this.tile.tilePosition.x;
            if (_this.app.container.position.y != _this.tile.tilePosition.y)
                _this.app.container.position.y = _this.tile.tilePosition.y;
        });
    }
    Background.prototype.moveToOffset = function (d) {
        if (this.tile.tilePosition.x > this.app.offset.x) {
            this.tile.tilePosition.x -= d * 20;
            if (this.tile.tilePosition.x < this.app.offset.x)
                this.tile.tilePosition.x = this.app.offset.x;
        }
        if (this.tile.tilePosition.x < this.app.offset.x) {
            this.tile.tilePosition.x += d * 20;
            if (this.tile.tilePosition.x > this.app.offset.x)
                this.tile.tilePosition.x = this.app.offset.x;
        }
        if (this.tile.tilePosition.y > this.app.offset.y) {
            this.tile.tilePosition.y -= d * 20;
            if (this.tile.tilePosition.y < this.app.offset.y)
                this.tile.tilePosition.y = this.app.offset.y;
        }
        if (this.tile.tilePosition.y < this.app.offset.y) {
            this.tile.tilePosition.y += d * 20;
            if (this.tile.tilePosition.y > this.app.offset.y)
                this.tile.tilePosition.y = this.app.offset.y;
        }
    };
    Background.prototype.pointerDown = function (e) {
        if (this.app.selected) {
            this.app.selected = null;
        }
        this.start = e.data.getLocalPosition(this.tile.parent);
        this.dragging = true;
    };
    Background.prototype.pointerUp = function () {
        this.dragging = false;
    };
    // pointerOut() {
    //   this.dragging = false;
    // }
    Background.prototype.pointerMove = function (e) {
        if (this.dragging) {
            var newPosition = e.data.getLocalPosition(this.tile.parent);
            var x = newPosition.x - this.start.x;
            var y = newPosition.y - this.start.y;
            this.tile.tilePosition.x += x;
            this.tile.tilePosition.y += y;
            this.start.x += x;
            this.start.y += y;
            this.app.offset.x += x;
            this.app.offset.y += y;
        }
    };
    return Background;
}());
exports.Background = Background;


/***/ }),

/***/ "./src/elements/base.element.ts":
/*!**************************************!*\
  !*** ./src/elements/base.element.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var menu_widget_1 = __webpack_require__(/*! ./widgets/menu.widget */ "./src/elements/widgets/menu.widget.ts");
var Base = /** @class */ (function () {
    function Base(_a, app) {
        var ref = _a.ref, color = _a.color, x = _a.x, y = _a.y, zIndex = _a.zIndex;
        var _this = this;
        this.container = new pixi_js_1.Container();
        this.isSelected = false;
        this.cursor = { x: 0, y: 0 };
        this.app = app;
        this.x = x;
        this.y = y;
        this.ref = ref;
        this.color = color;
        this.zIndex = zIndex;
        this.container.interactive = true;
        this.container.buttonMode = true;
        this.container.sortableChildren = true;
        this.container
            .on("pointerdown", function (e) { return _this.pointerDown(e); })
            .on("pointerup", function (e) { return _this.pointerUp(e); })
            .on("pointerupoutside", function (e) { return _this.pointerOut(e); })
            .on("pointermove", function (e) { return _this.pointerMove(e); });
        this.menu = new menu_widget_1.MENU(this);
        this.app.container.addChild(this.menu);
        this.app.container.addChild(this.container);
    }
    Base.prototype.select = function () {
        var _this = this;
        if (this.app.selected != this) {
            this.app.selected = this;
            this.menu.open();
            this.app.events["select"].forEach(function (cb) { return cb(_this); });
            return true;
        }
        return false;
    };
    Base.prototype.unselect = function () {
        this.menu.close();
    };
    Base.prototype.pointerDown = function (e) {
        this.start = e.data.getLocalPosition(this.container.parent);
        this.container.alpha = 0.8;
        this.dragging = true;
        this.cursor = e.data.getLocalPosition(this.container);
        // this.container.zIndex = Object.keys(this.app.elementsService.refs).length;
    };
    Base.prototype.pointerUp = function (e) {
        this.container.alpha = 1;
        this.dragging = false;
        if (this.start && this.start.x != this.x && this.start.y != this.y) {
            this.app.configService.do();
        }
        this.end = e.data.getLocalPosition(this.container.parent);
        this.select();
    };
    Base.prototype.pointerOut = function (e) {
        this.container.alpha = 1;
        this.dragging = false;
        // this.app.configService.do();
        this.end = e.data.getLocalPosition(this.container.parent);
        this.select();
    };
    Base.prototype.pointerMove = function (e) {
        if (this.dragging && this.app.move && this.app.edit) {
            var newPosition = e.data.getLocalPosition(this.container.parent);
            // this.x = newPosition.x - this.cursor.x;
            // this.y = newPosition.y - this.cursor.y;
            newPosition.x = newPosition.x - this.cursor.x;
            newPosition.y = newPosition.y - this.cursor.y;
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
            this.menu.position.set(this.x, this.y);
        }
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
    Object.defineProperty(Base.prototype, "zIndex", {
        get: function () {
            return this.container.zIndex;
        },
        set: function (i) {
            this.container.zIndex = i;
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
    function COMPONENT(options, app) {
        var _this = _super.call(this, options, app) || this;
        _this.selectTile = new pixi_js_1.TilingSprite(pixi_js_1.Texture.from("select"));
        _this.selectGraphics = new pixi_js_1.Graphics();
        _this._sprite = new sprite_widget_1.SPRITE();
        _this._label = new label_widget_1.LABEL();
        _this.type = "component";
        _this.app.ticker.add(function (d) {
            _this.selectTile.tilePosition.x += d / 6;
            _this.selectTile.tilePosition.y += d / 6;
        });
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
    COMPONENT.prototype.select = function () {
        if (_super.prototype.select.call(this)) {
            this.selectTile.width = this._sprite.width + 20;
            this.selectTile.height = this._sprite.height + 20;
            this.selectTile.position.x = -this._sprite.width / 2 - 10;
            this.selectTile.position.y = this._sprite.y - 10;
            this.selectTile.tint = this._color;
            this.selectTile.alpha = 0.5;
            this.cross(this.selectTile.position.x, this.selectTile.position.y);
            this.cross(this.selectTile.position.x + this.selectTile.width, this.selectTile.position.y);
            this.cross(this.selectTile.position.x, this.selectTile.position.y + this.selectTile.height);
            this.cross(this.selectTile.position.x + this.selectTile.width, this.selectTile.position.y + this.selectTile.height);
            this.container.addChild(this.selectTile);
            this.container.addChild(this.selectGraphics);
            return true;
        }
        return false;
    };
    COMPONENT.prototype.unselect = function () {
        _super.prototype.unselect.call(this);
        this.container.removeChild(this.selectTile);
        this.container.removeChild(this.selectGraphics);
    };
    COMPONENT.prototype.circle = function (x, y, offset) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        var circle = new pixi_js_1.Graphics();
        var rad = offset;
        this.app.ticker.add(function (d) {
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
    COMPONENT.prototype.cross = function (x, y) {
        this.selectGraphics.lineStyle(1, 0xffffff, 1);
        this.selectGraphics.moveTo(x - 6, y);
        this.selectGraphics.lineTo(x + 6, y);
        this.selectGraphics.moveTo(x, y - 6);
        this.selectGraphics.lineTo(x, y + 6);
        this.selectGraphics.tint = this._color;
    };
    COMPONENT.prototype.pointerMove = function (e) {
        if (this.dragging && this.app.move && this.app.edit) {
            var newPosition = e.data.getLocalPosition(this.container.parent);
            newPosition.x = newPosition.x - this.cursor.x;
            newPosition.y =
                newPosition.y +
                    (this._label.height + this._sprite.height + 30 - this.cursor.y);
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
            this.menu.position.set(this.x, this.y);
        }
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
                this.selectTile.tint = this._color;
                this.selectGraphics.tint = this._color;
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
                x: this.x,
                y: this.y,
                zIndex: this.zIndex,
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
    function LINE(options, app) {
        var _this = _super.call(this, options, app) || this;
        _this._line = new pixi_js_1.Graphics();
        _this.editPoints = [];
        _this.container.addChild(_this._line);
        _this.type = "line";
        return _this;
    }
    LINE.prototype.pointInLine = function (a, b, offset) {
        var segmentLength = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
        var factor = segmentLength / 2 / segmentLength;
        if (offset) {
            factor = offset / segmentLength;
        }
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
                        index: i,
                    });
                }
                else {
                    acc.push({
                        start: _this.pointInLine(points[i - 1], point, radius),
                        end: _this.pointInLine(point, points[i - 1], radius),
                        index: i,
                    });
                }
                if (points[i + 1]) {
                    acc.push({
                        start: _this.pointInLine(point, points[i - 1], radius),
                        end: _this.pointInLine(point, points[i + 1], radius),
                        bazier: point,
                        index: i,
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
        this._line.beginFill(0xffffff, 0.01);
        this._line.moveTo(this._props.points[0].x, this._props.points[0].y);
        this._props.points.forEach(function (point) {
            _this._line.lineTo(point.x + _this._props.width, point.y);
        });
        this._props.points.forEach(function (point, i, arr) {
            _this._line.lineTo(arr[arr.length - 1 - i].x - _this._props.width - 40, arr[arr.length - 1 - i].y);
        });
        this._line.endFill();
        this._line.closePath();
    };
    LINE.prototype.addPoints = function () {
        var _this = this;
        this._props.points.forEach(function (point, i, arr) {
            var p = _this.point(point.x, point.y);
            _this.dragPoint(p, point);
            _this.container.addChild(p);
            _this.editPoints.push(p);
            if (arr[i + 1]) {
                var center = _this.pointInLine(point, arr[i + 1]);
                var centerPoint = _this.point(center.x, center.y, true);
                _this.editPoints.push(centerPoint);
                _this.container.addChild(centerPoint);
                _this.dragPoint(centerPoint, center, i + 1);
            }
        });
    };
    LINE.prototype.point = function (x, y, center) {
        var point = new pixi_js_1.Graphics();
        point.position.set(x, y);
        point.lineStyle(2, 0xffffff, 0.3);
        point.moveTo(0, 0);
        point.lineTo(0, -20);
        point.lineStyle(0, 0);
        point.beginFill(0xffffff, 0.2);
        point.drawEllipse(0, 0, center ? 16 : 25, center ? 16 / 1.6 : 25 / 1.6);
        point.endFill();
        point.interactive = true;
        point.buttonMode = true;
        return point;
    };
    LINE.prototype.dragPoint = function (p, point, furcateIndex) {
        var _this = this;
        var data;
        var drag = false;
        p.on("pointerdown", function (e) {
            data = e.data;
            drag = true;
            _this.app.move = false;
            if (furcateIndex) {
                _this._props.points.splice(furcateIndex, 0, point);
            }
            _this.setup();
        })
            .on("pointerup", function () {
            drag = false;
            _this.app.move = true;
            _this.app.configService.do();
            _this.editPoints.forEach(function (p) { return _this.container.removeChild(p); });
            _this.editPoints = [];
            _this.addPoints();
        })
            .on("pointerupoutside", function () {
            drag = false;
            _this.app.move = true;
            _this.app.configService.do();
        })
            .on("pointermove", function () {
            if (drag) {
                var newp = data.getLocalPosition(p.parent);
                newp.x = newp.x - (newp.x % 25);
                newp.y = newp.y - (newp.y % 15);
                if (furcateIndex) {
                    point = _this._props.points[furcateIndex];
                }
                point.x = newp.x;
                p.position.x = newp.x;
                point.y = newp.y;
                p.position.y = newp.y;
                _this.setup();
            }
        });
    };
    LINE.prototype.select = function () {
        if (_super.prototype.select.call(this)) {
            this.addPoints();
            return true;
        }
        return false;
    };
    LINE.prototype.unselect = function () {
        var _this = this;
        _super.prototype.unselect.call(this);
        this.editPoints.forEach(function (p) { return _this.container.removeChild(p); });
        this.editPoints = [];
    };
    Object.defineProperty(LINE.prototype, "props", {
        get: function () {
            return this._props;
        },
        set: function (props) {
            this._props = props;
            if (this._line)
                this.setup();
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
                x: this.x,
                y: this.y,
                zIndex: this.zIndex,
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
    function PLANE(options, app) {
        var _this = _super.call(this, options, app) || this;
        _this._plane = new pixi_js_1.Graphics();
        _this._planeTile = new pixi_js_1.TilingSprite(pixi_js_1.Texture.from("select"));
        _this.point = new pixi_js_1.Graphics();
        _this.container.addChild(_this._plane);
        _this.point.interactive = true;
        _this.type = "plane";
        _this.app.ticker.add(function (d) {
            _this._planeTile.tilePosition.x += d / 2;
        });
        _this.dragPoint();
        return _this;
    }
    PLANE.prototype.setup = function () {
        var rad = (31 * Math.PI) / 180;
        var a = this._props.h * Math.sin(rad);
        var b = this._props.h * Math.cos(rad);
        var A = this._props.w * Math.sin(rad);
        var B = this._props.w * Math.cos(rad);
        this._plane.clear();
        this._plane.beginFill(this._color, 0.04);
        this._plane.lineStyle(2, this._color, 0.5);
        this._plane.moveTo(0, 0);
        this._plane.lineTo(b, -a);
        this._plane.lineTo(b + B, -a + A);
        this._plane.lineTo(B, A);
        this._plane.closePath();
        this._plane.endFill();
        this._planeTile.x = b;
        this._planeTile.y = -a;
        this._planeTile.width = this._props.w;
        this._planeTile.height = this._props.h;
        this._planeTile.tileScale.set(1.5, 1.5);
        this._planeTile.tint = this._color;
        this._planeTile.alpha = 0.4;
        this._planeTile.skew.set(-1.03, (31 * Math.PI) / 180);
        this.container.addChild(this._planeTile);
        this.point.position.set(b + B, -a + A);
    };
    PLANE.prototype.select = function () {
        if (_super.prototype.select.call(this)) {
            this.container.addChild(this.point);
            return true;
        }
        return false;
    };
    PLANE.prototype.unselect = function () {
        _super.prototype.unselect.call(this);
        this.container.removeChild(this.point);
    };
    PLANE.prototype.dragPoint = function () {
        var _this = this;
        this.point.lineStyle(2, 0xffffff, 0.3);
        this.point.moveTo(0, 0);
        this.point.lineTo(0, -20);
        this.point.lineStyle(0, 0);
        this.point.beginFill(0xffffff, 0.2);
        this.point.drawEllipse(0, 0, 25, 25 / 1.6);
        this.point.endFill();
        var data;
        var drag = false;
        var start = { x: 0, y: 0 };
        this.point
            .on("pointerdown", function (e) {
            data = e.data;
            drag = true;
            _this.app.move = false;
            _this.start = data.getLocalPosition(_this.point.parent);
            _this.setup();
        })
            .on("pointerup", function () {
            drag = false;
            _this.app.move = true;
            _this.app.configService.do();
        })
            .on("pointerupoutside", function () {
            drag = false;
            _this.app.move = true;
            _this.app.configService.do();
        })
            .on("pointermove", function () {
            if (drag) {
                var end = data.getLocalPosition(_this.point.parent);
                if (end.x - start.x > 0 || end.y - start.y > 0) {
                    _this.props.h += 1;
                    _this.props.w += 1;
                }
                else {
                    _this.props.h -= 1;
                    _this.props.w -= 1;
                }
                start = end;
                // newp.x = newp.x - (newp.x % 25);
                // newp.y = newp.y - (newp.y % 15);
                // const rad = (31 * Math.PI) / 180;
                // this.props.w += 1;
                // this.props.h += 1;
                _this.setup();
            }
        });
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
                x: this.x,
                y: this.y,
                zIndex: this.zIndex,
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
    function TEXT(options, app) {
        var _this = _super.call(this, options, app) || this;
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
            // this.container.removeChildren();
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
                x: this.x,
                y: this.y,
                zIndex: this.zIndex,
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
        this._label.lineStyle(1, this._color, 0.5);
        this._label.beginFill(0x000000, 1);
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

/***/ "./src/elements/widgets/menu.widget.ts":
/*!*********************************************!*\
  !*** ./src/elements/widgets/menu.widget.ts ***!
  \*********************************************/
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
exports.MENU = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var MENU = /** @class */ (function (_super) {
    __extends(MENU, _super);
    function MENU(el) {
        var _this = _super.call(this) || this;
        _this.delete = new pixi_js_1.Sprite(pixi_js_1.Texture.from("deleteBTN"));
        _this.copy = new pixi_js_1.Sprite(pixi_js_1.Texture.from("copyBTN"));
        _this.point = new pixi_js_1.Sprite(pixi_js_1.Texture.from("pointBTN"));
        _this.settings = new pixi_js_1.Sprite(pixi_js_1.Texture.from("settingsBTN"));
        _this.up = new pixi_js_1.Sprite(pixi_js_1.Texture.from("upBTN"));
        _this.down = new pixi_js_1.Sprite(pixi_js_1.Texture.from("downBTN"));
        _this.el = el;
        _this.point.anchor.set(0.5, 0.5);
        _this.delete.anchor.set(0.5, 0.5);
        _this.copy.anchor.set(0.5, 0.5);
        _this.settings.anchor.set(0.5, 0.5);
        _this.up.anchor.set(0.5, 0.5);
        _this.down.anchor.set(0.5, 0.5);
        _this.point.interactive = true;
        _this.delete.interactive = true;
        _this.copy.interactive = true;
        _this.settings.interactive = true;
        _this.up.interactive = true;
        _this.down.interactive = true;
        _this.point.buttonMode = true;
        _this.delete.buttonMode = true;
        _this.copy.buttonMode = true;
        _this.settings.buttonMode = true;
        _this.up.buttonMode = true;
        _this.down.buttonMode = true;
        _this.point.on("pointerover", function () { return _this.hover(_this.point); });
        _this.point.on("pointerout", function () { return _this.unhover(_this.point); });
        _this.delete.on("pointerover", function () { return _this.hover(_this.delete); });
        _this.delete.on("pointerout", function () { return _this.unhover(_this.delete); });
        _this.copy.on("pointerout", function () { return _this.unhover(_this.copy); });
        _this.copy.on("pointerover", function () { return _this.hover(_this.copy); });
        _this.settings.on("pointerover", function () { return _this.hover(_this.settings); });
        _this.settings.on("pointerout", function () { return _this.unhover(_this.settings); });
        _this.up.on("pointerover", function () { return _this.hover(_this.up); });
        _this.up.on("pointerout", function () { return _this.unhover(_this.up); });
        _this.down.on("pointerover", function () { return _this.hover(_this.down); });
        _this.down.on("pointerout", function () { return _this.unhover(_this.down); });
        _this.point.on("pointerup", function () {
            _this.el.app.offset = {
                x: _this.el.app.screen.width / 2 - _this.el.container.position.x,
                y: _this.el.app.screen.height / 2 - _this.el.container.position.y,
            };
        });
        _this.delete.on("pointerup", function () {
            _this.el.app.elementsService.remove(_this.el.ref);
        });
        _this.copy.on("pointerup", function () {
            _this.el.app.setCopy();
            _this.el.app.paste();
        });
        _this.up.on("pointerup", function () {
            _this.el.zIndex += 1;
        });
        _this.down.on("pointerup", function () {
            _this.el.zIndex -= 1;
        });
        _this.copy.y = 0;
        _this.settings.y = _this.point.height;
        _this.delete.y = _this.point.height * 2;
        _this.point.y = 0;
        _this.point.x = -_this.point.height;
        _this.up.y = _this.point.height;
        _this.up.x = -_this.point.height;
        _this.down.y = _this.point.height * 2;
        _this.down.x = -_this.point.height;
        return _this;
    }
    MENU.prototype.hover = function (e) {
        e.scale.set(0.9, 0.9);
    };
    MENU.prototype.unhover = function (e) {
        e.scale.set(1, 1);
    };
    MENU.prototype.close = function () {
        this.removeChild(this.point);
        this.removeChild(this.delete);
        this.removeChild(this.copy);
        this.removeChild(this.settings);
        this.removeChild(this.up);
        this.removeChild(this.down);
    };
    MENU.prototype.open = function () {
        if (this.el.app.edit) {
            this.addChild(this.point);
            this.addChild(this.delete);
            this.addChild(this.copy);
            this.addChild(this.settings);
            this.addChild(this.up);
            this.addChild(this.down);
            this.point.x = -this.point.height;
            this.pivot.set(this.point.height / 2, this.height - 20);
        }
        else {
            this.addChild(this.point);
            this.point.x = 0;
            this.pivot.set(0, 0);
        }
        this.zIndex = this.el.app.container.children.length;
        this.position.set(this.el.x, this.el.y);
    };
    return MENU;
}(pixi_js_1.Container));
exports.MENU = MENU;


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
var elements_service_1 = __webpack_require__(/*! ./services/elements.service */ "./src/services/elements.service.ts");
var config_service_1 = __webpack_require__(/*! ./services/config.service */ "./src/services/config.service.ts");
var background_element_1 = __webpack_require__(/*! ./elements/background.element */ "./src/elements/background.element.ts");
var base_1 = __webpack_require__(/*! ./assets/base */ "./src/assets/base.ts");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(selector) {
        var _this = _super.call(this, { antialias: true, backgroundColor: 0x000000 }) || this;
        _this.offset = { x: 0, y: 0 };
        _this.elementsService = new elements_service_1.ElementsService(_this);
        _this.configService = new config_service_1.ConfigService(_this);
        _this.container = new pixi_js_1.Container();
        _this._edit = true;
        _this.move = true;
        _this.events = {
            select: [],
        };
        _this.div = document.querySelector(selector);
        if (!_this.div) {
            _this.div = document.createElement("div");
            document.body.appendChild(_this.div);
        }
        _this.div.appendChild(_this.view);
        _this.loader = pixi_js_1.Loader.shared;
        _this.container.sortableChildren = true;
        _this.keyboard();
        return _this;
    }
    App.prototype.setup = function () {
        var _this = this;
        this.background = new background_element_1.Background(this);
        this.stage.addChild(this.container);
        this.ticker.add(function () {
            _this.sizing();
        });
    };
    App.prototype.keyboard = function () {
        var _this = this;
        document.addEventListener("keydown", function (e) {
            if (_this.edit && e.code === "Delete" && _this.selected) {
                _this.elementsService.remove(_this.selected.ref);
            }
            if (e.code === "KeyC" && e.ctrlKey && _this._selected) {
                _this.setCopy();
            }
            if (e.code === "KeyV" && e.ctrlKey && _this.copy) {
                _this.paste();
            }
            if (e.code === "KeyZ" && e.ctrlKey) {
                _this.configService.undo();
            }
        });
    };
    App.prototype.setCopy = function () {
        this.copy = this.selected;
    };
    App.prototype.paste = function () {
        this.copy = this.elementsService.add(this.copy.type, __assign(__assign({}, this.copy.config), { x: this.copy.x + 100, ref: this.copy.ref + Date.now() }));
        this.configService.do();
    };
    App.prototype.load = function (config, cb) {
        var _this = this;
        base_1.baseAssets.forEach(function (sprite) {
            _this.loader.add(sprite.name, sprite.data);
        });
        config.assets.forEach(function (sprite) {
            _this.loader.add(sprite.name, sprite.data);
        });
        this.loader.load(function () {
            _this.setup();
            _this.config = config;
            _this.configService.do();
            cb(_this);
        });
        return this;
    };
    App.prototype.sizing = function () {
        var rect = this.div.getBoundingClientRect();
        this.view.width = rect.width;
        this.view.height = rect.height;
        this.screen.width = rect.width;
        this.screen.height = rect.height;
        this.background.tile.width = rect.width;
        this.background.tile.height = rect.height;
    };
    Object.defineProperty(App.prototype, "config", {
        set: function (config) {
            var _this = this;
            this.offset = config.offset;
            // this.background.tile.tilePosition.x = config.offset.x;
            // this.background.tile.tilePosition.y = config.offset.y;
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
        get: function () {
            return this._selected;
        },
        set: function (el) {
            if (this._selected)
                this._selected.unselect();
            if (el) {
                this._selected = el;
            }
            else {
                this._selected = null;
            }
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
    Object.defineProperty(App.prototype, "edit", {
        get: function () {
            return this._edit;
        },
        set: function (edit) {
            this._edit = edit;
            if (this.selected) {
                this.selected.menu.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.on = function (event, cb) {
        if (this.events[event])
            this.events[event].push(cb);
    };
    return App;
}(pixi_js_1.Application));
exports.App = App;
function create(selector) {
    window.ois = new App(selector);
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
    function ConfigService(app) {
        this.history = [];
        this.app = app;
    }
    ConfigService.prototype.do = function () {
        var _a;
        if (this.history.length <= 20 &&
            JSON.stringify(this.config) !==
                JSON.stringify(this.history[this.history.length - 1])) {
            this.history.push({
                config: this.config,
                selected: (_a = this.app.selected) === null || _a === void 0 ? void 0 : _a.ref,
            });
        }
    };
    ConfigService.prototype.undo = function () {
        if (this.history.length >= 2) {
            this.history.pop();
            var point = this.history[this.history.length - 1];
            this.app.config = point.config;
            // if (point.selected) {
            //   this.app.elementsService.refs[point.selected].select();
            // }
        }
    };
    Object.defineProperty(ConfigService.prototype, "config", {
        get: function () {
            return {
                offset: {
                    x: this.app.offset.x,
                    y: this.app.offset.y,
                },
                components: this.app.elementsService.components,
                lines: this.app.elementsService.lines,
                planes: this.app.elementsService.planes,
                texts: this.app.elementsService.texts,
                assets: this.app.elementsService.assets,
            };
        },
        enumerable: false,
        configurable: true
    });
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
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var component_element_1 = __webpack_require__(/*! ../elements/component.element */ "./src/elements/component.element.ts");
var line_element_1 = __webpack_require__(/*! ../elements/line.element */ "./src/elements/line.element.ts");
var plane_element_1 = __webpack_require__(/*! ../elements/plane.element */ "./src/elements/plane.element.ts");
var text_element_1 = __webpack_require__(/*! ../elements/text.element */ "./src/elements/text.element.ts");
var ElementsService = /** @class */ (function () {
    function ElementsService(app) {
        this.refs = {};
        this.app = app;
    }
    ElementsService.prototype.add = function (type, config) {
        if (!this.refs[config.ref]) {
            var el = void 0;
            switch (type) {
                case "component":
                    el = new component_element_1.COMPONENT(config, this.app);
                    el.props = config.props;
                    break;
                case "text":
                    el = new text_element_1.TEXT(config, this.app);
                    el.props = config.props;
                    break;
                case "plane":
                    el = new plane_element_1.PLANE(config, this.app);
                    el.props = config.props;
                    break;
                case "line":
                    el = new line_element_1.LINE(config, this.app);
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
            this.app.container.removeChild(this.refs[ref].container);
            this.app.selected = null;
            delete this.refs[ref];
            this.app.configService.do();
        }
    };
    ElementsService.prototype.getElementsOfType = function (type) {
        var _this = this;
        return Object.keys(this.refs)
            .filter(function (key) {
            return _this.refs[key].type === type;
        })
            .map(function (key) { return _this.refs[key].config; });
    };
    Object.defineProperty(ElementsService.prototype, "components", {
        get: function () {
            return this.getElementsOfType("component");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementsService.prototype, "lines", {
        get: function () {
            return this.getElementsOfType("line");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementsService.prototype, "texts", {
        get: function () {
            return this.getElementsOfType("text");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementsService.prototype, "planes", {
        get: function () {
            return this.getElementsOfType("plane");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementsService.prototype, "assets", {
        get: function () {
            var keys = [];
            this.components.forEach(function (component) {
                if (!keys.includes(component.props.name)) {
                    keys.push(component.props.name);
                }
            });
            return keys.map(function (name) { return ({
                name: name,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                data: pixi_js_1.utils.TextureCache["server"].baseTexture.resource.url,
            }); });
        },
        enumerable: false,
        configurable: true
    });
    return ElementsService;
}());
exports.ElementsService = ElementsService;


/***/ }),

/***/ "pixi.js":
/*!***********************************************************************************************************!*\
  !*** external {"commonjs":"pixi.js","commonjs2":"pixi.js","umd":"pixi.js","script":"PIXI","root":"PIXI"} ***!
  \***********************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLENBQVM7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLENBQW1CO1FBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQs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LElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztR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QyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRzthQUM1RCxDQUFDLEVBTHdCLENBS3hCLENBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBN0ZZLDBDQUFlOzs7Ozs7Ozs7OztBQ2Q1Qjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL09JUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2Fzc2V0cy9iYXNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9iYWNrZ3JvdW5kLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2Jhc2UuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvY29tcG9uZW50LmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2xpbmUuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvcGxhbmUuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvdGV4dC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy93aWRnZXRzL2xhYmVsLndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9tZW51LndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9zcHJpdGUud2lkZ2V0LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvc2VydmljZXMvY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vT0lTL2V4dGVybmFsIHVtZCB7XCJjb21tb25qc1wiOlwicGl4aS5qc1wiLFwiY29tbW9uanMyXCI6XCJwaXhpLmpzXCIsXCJ1bWRcIjpcInBpeGkuanNcIixcInNjcmlwdFwiOlwiUElYSVwiLFwicm9vdFwiOlwiUElYSVwifSIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInBpeGkuanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiT0lTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicGl4aS5qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiT0lTXCJdID0gZmFjdG9yeShyb290W1wiUElYSVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX18pID0+IHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgYmFzZUFzc2V0cyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcInNlbGVjdFwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVlBQUFDb1lBRDJBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRE9TVVJCVkhnQjdkak5EWU13REFYZ053SWpNRUpIWVFQWXBOMmszWUJST2dJamRBVFhsbnlwVk1VNVJPUUJ0bVJ4eUR0OENqOGhBZjZVaU55ME43dWlVRG8rZXU0UjVBYnR0L1lMUVdubTd0bWhGRXJnMFlIYkVZQWo5Z0o2ZG0wRzlHQnI0TE1sVU1kbnNBTXRCM1pnOUt6MkJuNktkem1CQ1V3Z04zQUtnUjdzQmF4ZWpzRU9sR2pGWVFDR2s1akFSc0FWNU1EeVhpT0JDYnd5ME1QVVFKdEVzQU1sK2xZbk1JRy9RUHRoblVBT1hMQXpjRTdncVlFZXBBYmFld0oyb0ZRZS9YVUZTdVhSMzRMT3dDOE5LMDdoUmZRelhBQUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImJnXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1FBQUFBOENBWUFBQUNRUHgvT0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFhWlNVUkJWSGdCNVZ4QlR4dzNGSDVlUUswYUVBT3Bta2h0SlM4bkJFUmRma0hKTDJqNEJZRmZrT1RVSTh1cFIrQVhMRG4xQ0RsRlBTMzhBa0FoVmRwRGQzcUwwa3FkU0NCUkJXYnluajJaWFdCM3hqTmp6OWpLSjYxWWRyMHo5dGorM251Zm44MGdCdWZ6M1BmZitPQUllSE94QjhENDhHOGozKys5Ym9JajRKeDdBQjc0L25IUWtCL01jMkJqWFQ2MzJCSHZMWWRvUUFRSCtEYkF2OGZKRnhIenhWOEcrK0FJT0Y5WUF6YUZnK3YvRmZxZjliK2dqaGgvQ296OWhJMTg1dnV2ckd3VTUwc3JXTWNPUkpFUGNMbCtjMWJMZG95MWdUVitoT2hxMC9kLzN3VUxnUjNSd2pwdTRiTW1ZRDFQRDBZVW5PZWkwWlpCMUt1NTFDV3FVcWtmalR4UjF0SlpMNS96NGxNb0FzbHg5WUR1emVlV05uanpBWFZFTzI5ZHhHK2FTeEZkQXh6QVdGWUJ6bHNlc0lranovdjZmUkQ4Y3d3VlF0TFRGeTl4V21NblhLNGkvZXdIUVhDUjV4cEI4TzdBODJhZm8zMVo5V2J1YjlYVGpvV1dOM1B2Vjd6M0NkNzdiVnBaQmdxUVJuOThENHVqTWYzdzBMUTNGdCt2ZzFhYTQ0TmNIOG12dWE5TEJwUnRZS3NQSUNUN1lyb2RPSnNiVXh0bzc5YndoZmQ3dlozMW13WW9nQ3J1OTA2WHlVaWk0VjhEUS9oRVR6Z2p1emdyRGlFNlg5YlZHUVF5OE1JZER0bmYyT0U5OHpSMlp3M0NpRUYwMWxUcERJTFNES2tDV2Q2VC92dTU0WTNsQnA5N3NGZkdpOG5yUGVtR0xtOHNjVDdJNXBhQUVtV2xJcng2VVNTb05FMVBxdEJCWTBsd0Y4SU14YXBsb0lXeStrRWwvSUMyNW1GMitXcnBTUlZGYUF3WllndnRSQXZTZ2p0YlVUYzlxU0lQamVtTzBUTGprREtnaG5uZTNjRHpKc0diL2U1bnZOMDIwdE1MZ0hPY0ZYKytBVXRCY1FxK2RyenBlOHM0Vy9hODJXOGcrTy9kSVgxSEF3bGpHNzlmTmw5Y2xBV2pYaFpGeVVoTmo4VS9sdEdUS3E3UkdLcklVbnNhWHlWbEZneWd2RkVmQVJuY0FUWWlCUG1DUTljNmd4RFhHU1A3eUJPQmFvTUcxb1V4S1VsN2h3ejFuc1RheEpsU1lHUW5ydlpGY0ZkQlVLbVZzbFM5SjBrRGpSV3JwWEVJZy9UNm13a3F0UmgxcWlBS2QzdkFTTE1CMHA0MmcrRGZrUnpyZWZkeExRQzIwRmkydk9tN0oybGxxd1ROYm0vMisxOXduTkpzL21PVUNFbjF4ZS8yU2Fna2JVeG5PMHBSVnRIZ2pzcjBwejhHbFNXalcyMWdVMGQ5N1NsNzFGZXZqYVdBNkNsZW8raTZzT3lyZ2pJeFJiemd0Q3VmQ1VidUJaSGJocGlTeHBOcnc5Z1ROS0k3MVVqamswOGdITi9SNmNLV2xmaVZLYXNLN1VsV25yMDNQZjExYWs4M1VaYkdGQmVvYXBMRzRhcXQrMTdDWGpVdU85Z1pPNmExcHlMZUdNdThvQ0Y2K3B5UWg4WWF3eTlnaHpSK3JVNWtMQXRLNHlob0h0WHB5ZVdoc1ZzenhBMXBQRHR2VERudnFXSW8wNWhUMHJpSXBMUEtsY2g3cWdDakpINUdPVXNneERPRzlpTGNoL0FjUjU5dlJlU3NBcUxYVC9VZGZPOEtjUEJ2STAraHEwOXBzQkVmanovSEVZZjlFcEcrNUZhREFMNTZoUFpsUTBqampHZ1cxc0VsVU9xdTRGVjBuT0NXVVEvQlBUQXZrY2JKYURxSDY4OWNkb2lEV2VOOURFampjTGtMRG1GWUZ2K043SGRIc3NaQnVKTEg2ZVZzbC9pSGU3TkQzTjVxMHkxVmNUMHRNM3lXOWFCbGc2T09mZTFJRDdadkJZWldTY3FEWUpQZGZOSzRYUksvbG1CYmw2U3NBN3JUYmFwRW5xVUtSWEd4anF4eC9kSjRjbTI0czFHTnhKOWZDMVRNZnErT3hreEs0d1FaWjVtVitNdlFVN0VGS2tQZVdDM1N1R2FKdjZ3V1dEanJ4Rlp2ckM3b1dxb29uT1NnSzJ1OGJtbDhFRVVrZnE1NXFVSmo5cnM2amJraGphdEkvSFl1VlNSUXpScW5EckZlR2srdHZ4dExGUW1HYlVWMk80NlFkZWNsdDJpcndGajIrNUNzOFJPa0ptdG5SUnFxek9JM2x2MHVLdHhndllHczhXa1hFK3F1Wi9GSEFYYU0wVU42akhXSVFFaGVSelZaNDdveFBJdWZ0b1pIYmkyQXBjRW1iU3dOZWJRbjNYWkVrOXViU09NclloUmxscmRWNHM4ZjNJbE5ueEU4MG5YQ1JlbnRDUExoZnZrU08rTUU0R3hkWmM5ZDJoNitPaUMzSVJUYkE0bjEvazF1UzJoMDVMYUVidytENEszV2ZZZTVRRmtUWlh6eHVtbE1WeFovZkt4VkcwckNvcU0xcXBiNDdVeVR6ZVZsaVFqV2tKZFVsY1N2VzN0S3Z4YzlyM3duWENoMWlKQTZVQ3JBNG8rRksyc1ErSERhRUYxaXgwUk4zVFFtdFNmYUpRVXIwZ2lmdHMzbW9ZVTQyMm50WmFLcjJvNU15cElIbUgwNHd0RzBvM3JFa0M3b29yRzY2U2s1Ynl3SzE3T3laYXl4SVdtUTBnVlF4N1Q5djA0MzFYOFhMd1ZIakE0UWUwNWJzMjNQekJ5V0JxU1U5MVExOGt2OGRrdmpvL0xHQmhMbDh1VTkxWVVzR25ObGs5R29ZeE5aLzh1Sm8zaGF0MjJmMW9TYldlUHh4ODVsOFNjRExCNDhBek5rb1dVYlRhV0JQTENCanJnQjV2dTlWdzRkTlU3MGRSSFFBUG9JUUhVUG9wN0xoVkVBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJzZWxlY3RlZFRpbGVcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUE4Q0FZQUFBQ1FQeC9PQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVFqU1VSQlZIZ0I3Wnc5VDl0QUdNZi81N2hGcWtJSE52cWlNclFTUTlVQmlabWhYNENGTFVpd1p1bllvV3VYcmgzb0NGTFlXUGdFbGRvVmxhSHFRTlVPVkJUYXBSMElvSWJFdmo0bUNZVHdKTG5FTC9kY2twOFUyVnljNU94LzduZVBZd3NGeHlrV2RmNzBGQXMrVUQ0K3crN1dsanFCd3lnNHl0S1N2cDNQNDZtdVlaWjI0ay9VUnN0cDdlUHorcnJhaGFNNEdVaWhvS2Q5aFFWYVBWYys5c01RbGFqZDh6Q2hRanlndis4Z2gwOGJHK29iSE1PcFFKcDZVZ3BUZE5DLzAvS1kyeTRJTU9YN21NbHAvSEJOWTA0RTBxNm4wTU5QazlkNU5GcGMwNWo0UURycHlSVFhOQ1kyRUZNOW1lS0t4c1FGTXFpZVRKR3VNVkdCeE5XVEtaSTFKaUtRcFBWa2lrU05XUTBrYlQyWklrbGoxZ0xKU2srbVNORlk1b0hZMHBNcHRqV1dXU0JTOUdTS0xZMWxFb2cwUFpsaVEyT3BCaUpkVDZaa3FiRlVBbkZOVDZaa29iSEVBM0ZWVDZha3JiSEVBaGtXUFptU2xzWmlCektzZWpJbGFZM0ZDbVRZOVdSS2tob2JLSkJSMDVNcFNXaXNyMEJHWFUrbXhOR1ljU0JqUGZYSG9CcnJHY2hZVC9Ib1YyTWRBNUdtSjlMQU9pM202WEVZQXUvZ1lidm5pMElzZWdvRjZJdDlLQVVlM3NBU3BocGpBNUdvSnhyK0w2bXp5eTFOZTlTdkYvQnh5R3c3VDlzV1VRK3dqc1pPbU1NcUxHS2lzV3VCaU5kVDlJM1hkS0FWN2pXYmFBZTJnNUJHREFXamFwajBjaWhxM1JLY3hwRldlS1U5N0VBSTNUUjJFWWhyMVpNS1VLUXZTM1RRSnh0Tmh4cDRUMzFmYkdrclV6QWxDcXBFeXpJRXdtbE11Vm85cVdpVVJNSFVRN2orSEkwYTB0TWFCWEVFNGJScnpLT2hrNmVkMC9RSXFsVTRnNjUycnhCN1BTK0Y2SmhUR0g2VVFhMkdrOHRPcnhiMEhJMlFaMVRCL0tadjFnR0UwcGdubGh2enhKV2VhRlFvamVjdDgwdVpkcklVS0t4QktOUy9oelRLcDZqZmV5Y1ZmS0c1NVB6R3BGNDV4UnhOa285bytPelRUditGSUJyVjAydGF2ZDlzb3lCS3FPdXAzRUZqNW1WeVJsQmY3MUp4OGpnNnZtY1ZmTGd4cWJlenNxS2YwTTdQMGVxL2FvaURYTTcrdk5KeUhsS0h5bGlxbnRhNDZpa0toaWIrdDdRNmU5bG0rVHdrZ3FxckNacXZaNmgvdCtpNGZ0emNWTC9hdCtucVdVa2F1endQMGZnYWtvcU1Ud3liWmJMbDh4Qk9UK3gydmQ1SXVzYWswMDFQSE1hVmlFU05TY1pFVHh4OWw0YXVWR00yTWRVVCsxb013RmhqUFAzcWlTUFd5ZE5ZWTNVRzFSTkhJbWV6bzZ5eE9IcGkzdzhKTVdvYVMwSlBISW4vM2pQc0drdFNUeHlwL1FBM2pCcExXay9zWnlCRmhrVmphZW1KSTVPZnFGM1ZXTnA2NHNqMG1vRkxHc3RDVCt6bkltT2theXhMUFhGWXU2b21UV00yOU1SaC9US25CSTNaMGhQYkZ3akFsc1pzNjRsRDFJMEFXV2xNaXA0NFJONlprYWJHSk9tSlEvUy9aMHBTWXhMMXhDSCszcVc0R3BPc0p3NG5iaWFMR0VSajB2WEU0VXdnRWFZYWMwVlBIRTRGMHFTVHhselRFNGVUZ1RScDFkaEZnMk42NG5BNmtJaW14bW9CSmwzVEU4ZC8vSHJ3TWwyVCtGRUFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImRlbGV0ZUJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRy9TVVJCVkhnQjdaZmZyUUZCRk1hL3ZibXZOS0FBTktBQTBRRHZhSUIzRkVBQk5JQjNHa0FCR2tBQkdxQ0FlKytYeldUdnc4eklPYk1qa2N3dnhHYnNuOS9Nbm5QMmJQWUQvSDAraHk5OEdFazROa2s0TmtrNE5razROa2s0TnQ4b2cwb0Y2UFdBVmd0b05vRmFMUisvMzRITEJUZ2NnUDBlWlpBRk56K2REckJZQU5XcWZ6L0tMNWZCNG1IQ3N4a3dISW9Pd1dxVml5dlJ4L0I0TEpjbG8xRStVU1U2NFc0M3Y3QVdUcFNocEVBWEVxZFRrVmhhSGcrZzNRYWVUOUZoOGhYbTZ0cGtLY0NFNHE5dnpNQWtaV1VSSWhkMjNVcVdyc2tFR0F4eVFYNjV6Ykh6Mlg0TXk2QVFlUjFtbmJYQmlhelhlZDJsS09FMjkzZUp1YzdsUVI3RHQ1djdQNjVxdnc5Y3I0WFFadU92MGZVNkpKVC9hTTR5eEVRdXpDZVdEUk96Smd3YWpTSThiRW5uTzVjSHVUQWxiRERwakN6RFlMc3RwRjFKNXpxWEIzblM4ZUsyU3NFeHhpb1R6TVFzcGJtL0srazRTU0h5cEtQTThmaTYyWGtGdzRFUERpSHlrR0E4VHFjSVJ0a0E2YW9FYnlWcnJwYUFObE5mMXVaejNTcHhvbXd4bFlRMzhPd3QyR3ErYW9aTUtDa1M3VC9od2dhS3MxTFlYcEZZS1hZN2NXZG1venpoTjVGZTgyT1RoR09UaEdPVGhHT1RoR1B6Y2NLL0hndWFVRS9mOWZFQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiY29weUJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRnFTVVJCVkhnQjdaZzlTOE5RRkliZlNvZlV1WU9vVTYwT2dqZ1VQd2FsS0lpRElBNmlkTkRWMWIvaElpNEtYUngwRVp3ZHhFRVJCMEVYUWFjMlhmekFvZGpOZE5ON0E4R2xZQTZjay9TVzh5d0orWUFuTnlmdnZUbVpmSDdnQnc3UkI4ZklSanZONWllNkdWTUo0ZGE1RVZaaGFWUllHaFdXUm9XbHlZSUp6OHRoczdLRlFuRVVYcTcvMytzLzN0OXdjbHhGcS9VRkNtd2pQRmRld1BqRVpDeFp5K0RRTURZcTI2RENKbHdZR1FNVit6YW82RWNuVGUrbmhFMkQrZktpcWRtLytxc2VIU0FweU1LcmErc29UYzhpTGNnbGthYXNSVDg2YWRpRTI4RTNrb0JGMkNhRzc5ZEE1ZkhoSGxSWUZqOUx5eXRodExXREFLV3BtVmozTk13RDN0M2VnRW9tNnZ6RTdVdnM3UjkyUE42bzEzQjFlUkdLU0JEMUpkaVdsM1loczFQYzdYak9QZ3pYNUtLeEpnMVoySy9UYTlSbnJHdXk4UG5acWZtOWVZMTFyVTJObCtjbmt3Ylg0SUtjRW1taDNjdWtVR0ZwVkZnYUZaYkczYjVFTkpOME84Nk44QytrWmxLTWtqSXBGZ0FBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJwb2ludEJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBS0dTVVJCVkhnQjdaZzlTQnhCRk1mZkpoYTNSNXJiU0NLWEwrSnBHaE10QWlHRkNBa0prZ2pCSWhFc2tqWkZtaFFwaEh5U0JKSW1rRFpOaXFRSUJBVS9VQkFGUVJRVU9VUlJDNzhxdndxOUE1Vzc2L1M5cDdPTTUzTGM3cjBWRi9aM0hEUDdabWZ2ZjIvZXZKbFpvN3k4WWc4Q3hCa0lHR1dxc3JtNUFhY1pqQVF1QStmaFVMRGZoSUw5SmhUc042Rmd2eWtEWVdJeEMxNitlczMxbnorK1FTNmJCVW5FUFJ5enp0dmZlUHd5U0NNbW1EejdvUEV4QzdWdFdHY2J0a2toRmhMUFdsOUFvcW9hUXlCajIxcGFuM01adjNRRi92eitCUktJZVhoMlpvckxpQms5MXJhK3VnSlNpQWtlSFI2Q2dmN2VZL2JCL2o1SHUxZk9ScVBuUGxFbGs5bDEwNC9qc2dYRDRNTEZDbGhlV21DYktoTlZOOEJKYkgzRFBYalUxQXpMaS9PUXk3bkxIcWlUUzg4eGZQdk9YYWk1VmN0ZlFna2prZWxVaXV2SmlUSDdmcHA4RHh1YjdMNTBueGRjZXpnU01lSHF0ZXRZTTFCc0hkc3FjYklaK0ZFZVRxZTJZSGRuMi9haUxqYUxlWGxxTWdtbWFmSjFzWjVXSGpiVUliVFlJMUxidTg5SFVwZk8vMzkvZWJqYjNuL2g2NDl2MzBETnpUbzdXK1JEZit6NzF3OVFEQ1Vja1l5Q3JickhUSWVNNGVaWmpqM2NlcGhYTVp4d1ZENXBmb3BwN0dCbzlRbEdiVFQwS2lmcklVSFFTSkIzMTlaV2orVHRRbmoyTVAwUXhXck1zaHpGRXBXSmFneUZXdnM2djUzNjBqT0tGYXZqT1Vza0o4WloyTnpNTkl4Z0RsYm8zclRRMDNyMklHaC9RWDI5NGpva0NwRS85SVRVd2lIK1hzSkpyTExYTjl3SEtjUUVPMjBsMVY1WWorZFNFZHV0OVhSMTRLeGY0VlZPNWQzdXpuYWVZS1hFYkQ1aWdpbDdVTHpTUk5SdCt2SXNnZmdSYWYzUXkwUTZuUUpwUkxPRW40UnZMMCtLVUxEZmhJTDlKaFRzTjhGOWU2bFdrdE5PNER5OEQ3UVc4V0RHSDV0V0FBQUFBRWxGVGtTdVFtQ0NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZWxlbWVudFwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdZQUFBQjVDQVlBQUFETFgxUXNBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBWnFTVVJCVkhnQjdaMXRTSjFWSE1EL2o5MU5uYUJYcmQxMFdicjJwUStEVE1nUGk1Z1ExaTBJb1gySkVqZjJna0hNVVRGaUJHbUZ0TkdIK2xCUkxmSkRFUlE0WThpbE43SndFRnFNNW9jVWNidGxNa2ZrNXJzdTgzYk90VWRNei9XZTUrV2M1MzhlL3orNDdISjNyMjcrdUw5em5uUHU4MmhCQ0VqOGVyVnljWG5oMDlucDZXc2xSYmVkaU45VGxnVERzY0JnemwyOEVzMkw3bWl4bHVGRUNsTFIxYi9Jc1ZyalZiRTJNQmhqeFp3ZnZyby9rbU45eE81V1puaEtjam1WYW50c1Qxa0hHSWh4WW5pMklKY0pTY0YrdVZkWUhYQnp1YzIwdkJrakptTzJaREVzYjBhSWtjaVdMTWJrRGJVWTU5bVNCWC9lVUlyeG5DMVpFT2NOblJnZnN5VUx5cnloRWFNdVc3TGd5bHZnWXJSbFN4WWtlUXRVVEFEWmtpWHd2QVVpSnZoc3lSSmMzclNLUVpjdFdRTEltell4aUxNbGk5YThLUmRqVHJaazBaTTNaV0tNelpZc2l2T21SRXdJc2lXTHNyejVLaVo4MlpMRi83ejVJaWIwMlpMRng3eDVGck9Gc2lXTEwzbHpMV2JyWmtzV2IzbHpMSWF5NVJDWGVYTWtockxsR3NkNWt4SkQyZklMK2J4dEtvYXlwUWlKdkdVVVE5bFN6cVo1MnlDR3NxVWJjZDVXeFZDMkFtWmQzdEppS0Z0b1dNMWJXc3duRi9wVGhhVXhpR3piRGtSdzVFZHVnYjA3QzZFMFA5ZUs4QWZtcGliU3Q4TFMyNEVMSXZRU3ljbUJ5cUo4ZGl0ZzkxZEdsOGphSjB6OU5RNnphVUV4S0Nnc0FVSTlKWG5iMkx1a0tQMXVXVXRrL1JQLytmc21YQjhmaGNXNVdhQzhxY1BPVmttZStPY2J5ZlJDeXBzYVJOa1NQaS9iRjZLOCtVZW1iSW5JS29aRGVmTkd0bXlKa0JKalEzbHpobXkyaEs4RkYxRGVzdU1rV3lKY2llRlEzc1M0eVpZSTEySnNLRzhyZU1tVzhPdUJUMnpsdkhuTmxnamZ4SEMyV3Q3OHlwWUlYOFhZaEQxdmZtZEwrRDFBSVdITW00cHNpVkFxaGhPV3ZLbk1sZ2psWW14TXpadU9iQW0vTDJqR3BMenB5cFlJN1dJNDJQT21PMXNpQWhGamd5MXZRV1ZMK0c4QkJHRElXNURaRW9GQ0RDZW92R0hJbGdnMFlteDA1UTFUdGtTZ0UyT2pNbS9Zc2lVQ3JSaU8zM25EbWkwUnFNWFllTTBiOW15Sk1FS01qWnU4bVpBdEVVYUo0Y2ptemFSc2lUQk9qRTJtdkptWUxSSEdpckZabTdlS25URWpzeVVpQjBLQW5iZjd5MHRDSVlVVENqRmhoTVFnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoWXNwQndJYlplbDNURS8zK1k5bnBxY25nUWlVaVltSnlaYVdscmZaWFd2dG1UMFBmSkJJUE1UZVJDK0RvUng1cEI0TTVRYTd2VlZiVzl2ZjE5ZjNMYnUvc09HVXEzY1RpY3BJQ2xyQnlta0N3ekJVVEErN0hiSXNLN24yd1EyRC96UHhlUExvby9HREtWZyt0TGk0ZUEwSUpjek56ZkdmYlIwVFVyZGVDaWZqck94WVBON3hiTVBqVC9kLy8xMHZFTDR4UHorLzJOWFY5VTFkWGQxaEpxUW4wL095blJkMytlZmUzcTQva2xlR284VWxWYVd4R09vcndOMjM1MjdBek5EUTBPOU5UVTJ2dDdlM254b2JHN3UwMlhPZG5OWmI4K3Jac3cvR2RsVWN0NUQreWl6RVkweVNEZXJQc2NIOUYzYi9zc3dMWEoxdnpXWnZyUmhuYndqRnBHZGI3UFlteTlZTkp5OTBkZVIvTkI1dlhZTGxxcW1KaVMrQUVNSUc5eC9aSDlWTVNLdFRLUnpYU3pKODl2YjhVMCtlb29QVC8yTWZKQllVRkR3aG1tM0o0dldrK0Q4SCt2ck9mZm41WnorVlZkeXhlMWRsMVowUUlFRU8vbnkyMWQzZDNkUGMzSHl5czdQelBmYlFkZkNBWDFjclNNL2VabWFtZjloYlU3UEVGaFR1aFFBSVVBd1g4aUxqekgrenJTWHdpSktMcmJ5ZlNCemtrd1BkczdjQUJ2OGtyQnkxOTREUEtGbjI1d2VueCtJUFY4M1BUcCtHRU1Lek5UazV5Zjl2MVNxa2NKVHV4eHcvY0tEMW5kZGVPVEk4TURBQUlZRWZKRFkwTkx3VWpVWlB1NWx0eWFMNmlqaEw0Nk9qRnk5OC9WVmZZWEYweDYxbDVYZHR6ODNOQTBXb0hHUDRiSXVOSVI4Mk5qWTJqNHlNZExPSEZrQWh1aS9vcFhSclFkRVlzMkZKSGpRUXlKWFdWRzB0S0JEVEE0SWxlUjBFc3VlUGZXc2gyNUs4RGdMOU1BYTJyUVhaSlhrZFlMZ2NubTliQzE0R2Z5ZEw4anJBZGpWUFQxc0xMc2NZeDB2eU9rQjdtVlUzV3dzT3hiaGVrdGNCMmcvOHFkeGE4TG9rcndQVW44VDBlMnZCcnlWNUhaaHdMVnpwcllWTWc3L2ZTL0k2TU9raXhWbTNGaktJOFgxSlhnZkdYbU5kdExXd2J2QlBncUlsZVIwWSsybi9URnNMT3Bia0NUbnlxdmZ0TzN6eXpCdVhCZ2NIZjZ1dnIzK0JQVllNQkJwcTJHMDNoSVIvQVRhR2QrenZIL0xRQUFBQUFFbEZUa1N1UW1DQ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJzZXR0aW5nc0JUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSi9TVVJCVkhnQjdaaE5UeE5SRklaZmxBVnRYTmhDbEJSV3JiZ1FGUk9LWVVGSU5Cb1RsMFJKdXBDRkMwbDB3MC93SjdneVlXT2lMa2hRRTZKeFlmd0Jpc0RDRDFnSXJWRmhVRDVhRnFSdEFnbWNjOE1BbldrYnp2UmV3b1I1TnAxN2UrZk9PK2VlcjB4ZFUxUHpGbnpFQ2ZpTWV2dGlaZVVmampMa0NlclhkeFlPQkpzbUVHeWFRTEJwQXNHbXFZZEdJcEVvQmg4TklSSnRWR05yWVI2akl5K3hhTTFERjFvdDNIbTFlMWNzRTJ0cFJaTG1kS0pWY0R4eDNqVVhpN1ZDSnlmRDRWT1ArU0tmWDVmY2g1N2VhK2k0a3NUbTVnWUtoUUw2N3FUUWZxbkR0WTR0SG8wMEt2ZGdpL2YwWHNlWnM4MzQ4L3NYSkpCTzlWdG45OE9TYnEyenF4djlxWHVvaGVmUGhqSHo0OXVCMTlmVXJkMjhkUnUxMHA4YVFFTW9CQ2xpd2UwWEw1Y0VWamx5MlZVVXlVMnFFU0t4dkpjVWNWcXpyQVVTbENYUlVkZC9QRDg2OGdLWjlLd2F4eE50eXBLVjFtYlNjNUFpdGpCYmIvanBFL1ZBSjIvSFh1MktaZmlhWDhDOVIzWm5qMVZJOGVURC9LREppVThsYzV3cHlnVVJpM2E2QjkvclJTeHpQSG9KTHNISnJ0SUt4a0hFUHV1RUE4dVpEZmhlM3NNTDRzTGg3QmYya3pqWHBvNTZlZW0vR3ZNTDlOMU4wY3VFUzlieG1Jdk05UGV2S0JZTE9BaDI0UkJuaVRpSnFwVFdlSDdnL2lENWJGNk5HeHhDbld1NTh1VnlXVWdRQytiQTRpQ3FsdlNyQ2JYaFRERXRxSFEyWWgvbWJGQXVWVW41K09FOXZPQ3BIMmJMdkJ0N2pkTjByRFBraDN5c042aGNPd1BSWm5MaU02MS9RNTFiQ3k2UTc2NlJuMC9SbkJjOE5UK1ZlUEJ3U0FYZWZqSnpzNnBJMUlxUlQxV0wxbC9YWERyOUV6clJLbmpxeXpqMXZYdWljK3JveDZFVHJTNWhrdURyNVdFUkNEWk5JTmcwZ1dEVCtQZnJwVjFKampxK3MvQTJicm5ieWw5cUFTNEFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInVwQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGSlNVUkJWSGdCN2RrL2E4SkFHTWZ4WDBxSE9FWWQyclJUUzVlMmRDbUZ2cEpDRjRjdURsMzZVbHhhMEtWUWh4WmZTYUYwYVAwejZTYmlvSEh6c3NXNzB4UEI4WjVIRER4Zk9Bd1hrQS9IQlR3VGxNdEhHWExVQVhMV29idVlUTWJZNS9ST3NKKzVXMkVCY3lkZzdnVE1uWUM1RXpCM0F1Wk93S2F6OHd0Y1h0K0FJM0p3SEorZyt2eUNoOGNLanVOVFVFY0tkdGpmbjIvMDJuLzJtaHBOQm5iWWJ1Y2ZyYzhtV2w5TkZqUVp1UEpVUlpMTUxEYUtpbllZOUN5WldqUlZnVHMxKzU3cHJ2UkROaGowVVFqRE5iRCtXa09hS28wdllUUWF3aWZ5TTUzWkNnNnJWS3FIc3RkaFdQREdia1lHTmx0Z3ViSUI2bTgxTlBSd2FIT1BLakx3SmpaVmM0djllRy9ZT2NvOWJQWkd0dHJIWHVQMjdqNkxpcVd0ZVRObjd2bCt2M09TUFhUY3lSOHB1MHJBM0FtWU93RnpKMkR1Qk15ZGdMbGJ2NmR6UDkvMnZkeXQ4QUtSYkk3aU94dG05d0FBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJkb3duQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGaVNVUkJWSGdCN1plL1NnTkJFTWEva3hTM2RuZW0wT0FUYU5CQ0JGOUFMT3lERnJHd09kSENnSlZQWUNYRVFpR1ZrRWJ3YmZ3VG55QWVGakYyZDZYWjJiQWhJZWt5QXpreVA3aTd2ZG5teDl5M3gyNVFMcS8vbzBDc29HQ1UvS0RYKzhFaVk1UGdub1hyc0FwTG84TFNxTEEwS2l5TkNrdWp3dElzci9EZS9nR2lLSjZxVTQzbXVHQVRQanc2Um5MVm1KQ21NZFZvamdzMjRkWlQwOTREbkowbkNJMUJHQm9uUzdYaEhBK0JQOU54bkRpaWVBM0paUU41bnJsM1kxYWQ3Ri8vRi9QQ2Z1TFlxR3c2VVJJa1VTK2JaeG0ycWp2Z29nUW1MdXpuNzl0T1B0emZqU0pBbmIyK3VYWHlYNS92NElBdnc0OU54RFlTdFpPNkU2V3JkbHAzdGZaekMxeXdacmhpWTBFTHJmUHhSbXNOMjlWZDErMzB1NHQ1OFJsbUZTYThOUDBwS0I0Y3NvUVhac3V3SjAyN2VIMXAyd1dZczhtT3d5NU1kSmdXMkN4MDh5T05Da3Vqd3RLb3NEUXFMSTBLUzZQQzBveTJsMzZEdk9nVXJzTUQ2UWxtMmNHbmcvY0FBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInBsdXNCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUV6U1VSQlZIZ0I3Wmk5YWdKQkVNZi9GM3lCTXhiQmRERkprV0JTU0Q3ZUlJK1NJazFLQzdFUUMwc3JRUXZCbHhBRUg4QVBiRlFzL0twRUxmVHVFZlJ1NFFxTEZWZDMxSVg1d1hJRE94dy85b1paNXF4STVHNERnN2lCWVlTQ1lMVmE0cHJ4S2tFOGpUdGhGcWFHaGFsaFlXcFltSm9RTkdQYllmeisvWXU0VWk1aE1aOUJKOXBQT1BINURUdDhLOVpyL0EyNjRScW1ob1dwWVdGcWxQdHdOSHFQbC9pN2REOFdlOTZOZjZTcDZMUWFjRjBIS2xqQkVIcm9pSlJNWlVTUDFZSHJySkhMcGcvS1BXRkVzcUFQOVhjcGwwU3hrRWZpNDB1Njc1ZkJ3K09UaUtmakVTYVRvVFIzME85Q0ZXVmgvelBXYTFWNWdsZXpnYkF2dXpmM0NMaXRVY1BDMUxBd05kcUZCNzJ1MS9vY3NUcnRKblNqZkRWZkN2NTdlUzVZbUJvV3BvYUZxVEYzYWc1dWttdkh1QlBlQWdmQVFjVXBSQ2c1QUFBQUFFbEZUa1N1UW1DQ1wiLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IEludGVyYWN0aW9uRXZlbnQsIFRleHR1cmUsIFRpbGluZ1Nwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQge1xyXG4gIHB1YmxpYyB0aWxlOiBUaWxpbmdTcHJpdGU7XHJcbiAgcHJpdmF0ZSBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gIHByaXZhdGUgZHJhZ2dpbmc6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEFwcCkge1xyXG4gICAgdGhpcy50aWxlID0gbmV3IFRpbGluZ1Nwcml0ZShcclxuICAgICAgVGV4dHVyZS5mcm9tKFwiYmdcIiksXHJcbiAgICAgIHRoaXMuYXBwLnNjcmVlbi53aWR0aCxcclxuICAgICAgdGhpcy5hcHAuc2NyZWVuLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMudGlsZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnRpbGVcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHRoaXMucG9pbnRlckRvd24oZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB0aGlzLnBvaW50ZXJVcCgpKVxyXG4gICAgICAvLyAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsICgpID0+IHRoaXMucG9pbnRlck91dCgpKVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCAoZSkgPT4gdGhpcy5wb2ludGVyTW92ZShlKSk7XHJcbiAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLnRpbGUpO1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5hcHAub2Zmc2V0LnggIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IHx8XHJcbiAgICAgICAgdGhpcy5hcHAub2Zmc2V0LnkgIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55XHJcbiAgICAgIClcclxuICAgICAgICB0aGlzLm1vdmVUb09mZnNldChkKTtcclxuICAgICAgaWYgKHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi54ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueClcclxuICAgICAgICB0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueCA9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueDtcclxuICAgICAgaWYgKHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi55ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSlcclxuICAgICAgICB0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueSA9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvT2Zmc2V0KGQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA+IHRoaXMuYXBwLm9mZnNldC54KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCAtPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPCB0aGlzLmFwcC5vZmZzZXQueClcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPSB0aGlzLmFwcC5vZmZzZXQueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPCB0aGlzLmFwcC5vZmZzZXQueCkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggKz0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID4gdGhpcy5hcHAub2Zmc2V0LngpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID0gdGhpcy5hcHAub2Zmc2V0Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID4gdGhpcy5hcHAub2Zmc2V0LnkpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55IC09IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA8IHRoaXMuYXBwLm9mZnNldC55KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA9IHRoaXMuYXBwLm9mZnNldC55O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA8IHRoaXMuYXBwLm9mZnNldC55KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSArPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPiB0aGlzLmFwcC5vZmZzZXQueSlcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPSB0aGlzLmFwcC5vZmZzZXQueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvaW50ZXJEb3duKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFwcC5zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmFwcC5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMudGlsZS5wYXJlbnQpO1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgfVxyXG4gIHBvaW50ZXJVcCgpIHtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgLy8gcG9pbnRlck91dCgpIHtcclxuICAvLyAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAvLyB9XHJcbiAgcG9pbnRlck1vdmUoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnRpbGUucGFyZW50KTtcclxuICAgICAgY29uc3QgeCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLnN0YXJ0Lng7XHJcbiAgICAgIGNvbnN0IHkgPSBuZXdQb3NpdGlvbi55IC0gdGhpcy5zdGFydC55O1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggKz0geDtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ICs9IHk7XHJcbiAgICAgIHRoaXMuc3RhcnQueCArPSB4O1xyXG4gICAgICB0aGlzLnN0YXJ0LnkgKz0geTtcclxuICAgICAgdGhpcy5hcHAub2Zmc2V0LnggKz0geDtcclxuICAgICAgdGhpcy5hcHAub2Zmc2V0LnkgKz0geTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBJbnRlcmFjdGlvbkV2ZW50LCBJUG9pbnREYXRhLCB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IE1FTlUgfSBmcm9tIFwiLi93aWRnZXRzL21lbnUud2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZSB7XHJcbiAgYXBwOiBBcHA7XHJcbiAgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBtZW51OiBNRU5VO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBjdXJzb3I6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xyXG4gIHJlZjogc3RyaW5nO1xyXG4gIF9jb2xvcjogbnVtYmVyO1xyXG4gIHN0YXJ0OiBJUG9pbnREYXRhO1xyXG4gIGVuZDogSVBvaW50RGF0YTtcclxuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xyXG4gIGNvbnN0cnVjdG9yKHsgcmVmLCBjb2xvciwgeCwgeSwgekluZGV4IH06IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMucmVmID0gcmVmO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy56SW5kZXggPSB6SW5kZXg7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXJcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHRoaXMucG9pbnRlckRvd24oZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoZSkgPT4gdGhpcy5wb2ludGVyVXAoZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKGUpID0+IHRoaXMucG9pbnRlck91dChlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKGUpID0+IHRoaXMucG9pbnRlck1vdmUoZSkpO1xyXG4gICAgdGhpcy5tZW51ID0gbmV3IE1FTlUodGhpcyk7XHJcbiAgICB0aGlzLmFwcC5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5tZW51KTtcclxuICAgIHRoaXMuYXBwLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG4gIHNlbGVjdCgpIHtcclxuICAgIGlmICh0aGlzLmFwcC5zZWxlY3RlZCAhPSB0aGlzKSB7XHJcbiAgICAgIHRoaXMuYXBwLnNlbGVjdGVkID0gdGhpcztcclxuICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcclxuICAgICAgdGhpcy5hcHAuZXZlbnRzW1wic2VsZWN0XCJdLmZvckVhY2goKGNiKSA9PiBjYih0aGlzKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB1bnNlbGVjdCgpIHtcclxuICAgIHRoaXMubWVudS5jbG9zZSgpO1xyXG4gIH1cclxuICBwb2ludGVyRG93bihlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICB0aGlzLnN0YXJ0ID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFscGhhID0gMC44O1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnNvciA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyKTtcclxuICAgIC8vIHRoaXMuY29udGFpbmVyLnpJbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5yZWZzKS5sZW5ndGg7XHJcbiAgfVxyXG4gIHBvaW50ZXJVcChlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hbHBoYSA9IDE7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5zdGFydCAmJiB0aGlzLnN0YXJ0LnggIT0gdGhpcy54ICYmIHRoaXMuc3RhcnQueSAhPSB0aGlzLnkpIHtcclxuICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbmQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgdGhpcy5zZWxlY3QoKTtcclxuICB9XHJcbiAgcG9pbnRlck91dChlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hbHBoYSA9IDE7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICB0aGlzLmVuZCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICB0aGlzLnNlbGVjdCgpO1xyXG4gIH1cclxuICBwb2ludGVyTW92ZShlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZyAmJiB0aGlzLmFwcC5tb3ZlICYmIHRoaXMuYXBwLmVkaXQpIHtcclxuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgICAvLyB0aGlzLnggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5jdXJzb3IueDtcclxuICAgICAgLy8gdGhpcy55ID0gbmV3UG9zaXRpb24ueSAtIHRoaXMuY3Vyc29yLnk7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5jdXJzb3IueDtcclxuICAgICAgbmV3UG9zaXRpb24ueSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLmN1cnNvci55O1xyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA+PSAyNSkge1xyXG4gICAgICAgIHRoaXMueCArPSAyNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54IDw9IC0yNSkge1xyXG4gICAgICAgIHRoaXMueCAtPSAyNTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA+PSAxNSkge1xyXG4gICAgICAgIHRoaXMueSArPSAxNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55IDw9IC0xNSkge1xyXG4gICAgICAgIHRoaXMueSAtPSAxNTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnUucG9zaXRpb24uc2V0KHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLng7XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IHg7XHJcbiAgfVxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG4gIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueSA9IHk7XHJcbiAgfVxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gIH1cclxuICBzZXQgekluZGV4KGk6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIuekluZGV4ID0gaTtcclxuICB9XHJcbiAgZ2V0IHpJbmRleCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci56SW5kZXg7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBHcmFwaGljcyxcclxuICBJbnRlcmFjdGlvbkV2ZW50LFxyXG4gIFRleHR1cmUsXHJcbiAgVGlsaW5nU3ByaXRlLFxyXG4gIHV0aWxzLFxyXG59IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IExBQkVMIH0gZnJvbSBcIi4vd2lkZ2V0cy9sYWJlbC53aWRnZXRcIjtcclxuaW1wb3J0IHsgU1BSSVRFIH0gZnJvbSBcIi4vd2lkZ2V0cy9zcHJpdGUud2lkZ2V0XCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRQcm9wcyxcclxuICBDb21wb25lbnRDb25maWcsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDT01QT05FTlQgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIHNlbGVjdFRpbGUgPSBuZXcgVGlsaW5nU3ByaXRlKFRleHR1cmUuZnJvbShcInNlbGVjdFwiKSk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBDb21wb25lbnRQcm9wcztcclxuICBwcml2YXRlIF9zcHJpdGUgPSBuZXcgU1BSSVRFKCk7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgTEFCRUwoKTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLnR5cGUgPSBcImNvbXBvbmVudFwiO1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGlsZVBvc2l0aW9uLnggKz0gZCAvIDY7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aWxlUG9zaXRpb24ueSArPSBkIC8gNjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIHRoaXMuX2xhYmVsLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9sYWJlbCk7XHJcblxyXG4gICAgdGhpcy5fc3ByaXRlLnpJbmRleCA9IDI7XHJcbiAgICB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSA9IHRoaXMuX2xhYmVsLmhlaWdodCArIDIwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuXHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCk7XHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCwgdGhpcy5fc3ByaXRlLndpZHRoIC8gNCk7XHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCwgdGhpcy5fc3ByaXRlLndpZHRoIC8gMik7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5waXZvdC5zZXQoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdCgpIHtcclxuICAgIGlmIChzdXBlci5zZWxlY3QoKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUud2lkdGggPSB0aGlzLl9zcHJpdGUud2lkdGggKyAyMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLmhlaWdodCA9IHRoaXMuX3Nwcml0ZS5oZWlnaHQgKyAyMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnggPSAtdGhpcy5fc3ByaXRlLndpZHRoIC8gMiAtIDEwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSA9IHRoaXMuX3Nwcml0ZS55IC0gMTA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5hbHBoYSA9IDAuNTtcclxuICAgICAgdGhpcy5jcm9zcyh0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCwgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkpO1xyXG4gICAgICB0aGlzLmNyb3NzKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54ICsgdGhpcy5zZWxlY3RUaWxlLndpZHRoLFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3Jvc3MoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkgKyB0aGlzLnNlbGVjdFRpbGUuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3Jvc3MoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnggKyB0aGlzLnNlbGVjdFRpbGUud2lkdGgsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkgKyB0aGlzLnNlbGVjdFRpbGUuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuc2VsZWN0VGlsZSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuc2VsZWN0R3JhcGhpY3MpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bnNlbGVjdCgpIHtcclxuICAgIHN1cGVyLnVuc2VsZWN0KCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdFRpbGUpO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zZWxlY3RHcmFwaGljcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBuZXcgR3JhcGhpY3MoKTtcclxuICAgIGxldCByYWQgPSBvZmZzZXQ7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmIChyYWQgPj0gdGhpcy5fc3ByaXRlLndpZHRoKSB7XHJcbiAgICAgICAgcmFkID0gMDtcclxuICAgICAgfVxyXG4gICAgICByYWQgKz0gZCAvIDI7XHJcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSAodGhpcy5fc3ByaXRlLndpZHRoIC0gcmFkKSAvIHRoaXMuX3Nwcml0ZS53aWR0aDtcclxuICAgICAgY2lyY2xlLmNsZWFyKCk7XHJcbiAgICAgIGNpcmNsZS5saW5lU3R5bGUoMiwgdGhpcy5fY29sb3IsIG9wYWNpdHkpO1xyXG4gICAgICBjaXJjbGUuYmVnaW5GaWxsKHRoaXMuX2NvbG9yLCBvcGFjaXR5IC0gMC4xKTtcclxuICAgICAgY2lyY2xlLmRyYXdFbGxpcHNlKHgsIHksIHJhZCwgcmFkIC8gMS42KTtcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlLnpJbmRleCA9IDA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGUpO1xyXG4gIH1cclxuICBwcml2YXRlIGNyb3NzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweGZmZmZmZiwgMSk7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLm1vdmVUbyh4IC0gNiwgeSk7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLmxpbmVUbyh4ICsgNiwgeSk7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLm1vdmVUbyh4LCB5IC0gNik7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLmxpbmVUbyh4LCB5ICsgNik7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIHBvaW50ZXJNb3ZlKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdnaW5nICYmIHRoaXMuYXBwLm1vdmUgJiYgdGhpcy5hcHAuZWRpdCkge1xyXG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5jdXJzb3IueDtcclxuICAgICAgbmV3UG9zaXRpb24ueSA9XHJcbiAgICAgICAgbmV3UG9zaXRpb24ueSArXHJcbiAgICAgICAgKHRoaXMuX2xhYmVsLmhlaWdodCArIHRoaXMuX3Nwcml0ZS5oZWlnaHQgKyAzMCAtIHRoaXMuY3Vyc29yLnkpO1xyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA+PSAyNSkge1xyXG4gICAgICAgIHRoaXMueCArPSAyNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54IDw9IC0yNSkge1xyXG4gICAgICAgIHRoaXMueCAtPSAyNTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA+PSAxNSkge1xyXG4gICAgICAgIHRoaXMueSArPSAxNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55IDw9IC0xNSkge1xyXG4gICAgICAgIHRoaXMueSAtPSAxNTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnUucG9zaXRpb24uc2V0KHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogQ29tcG9uZW50UHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLl9zcHJpdGUudGV4dHVyZSA9IFRleHR1cmUuZnJvbShgJHtwcm9wcy5uYW1lfWApO1xyXG4gICAgdGhpcy5fbGFiZWwudGV4dCA9IHByb3BzLmxhYmVsO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX2xhYmVsKSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBDb21wb25lbnRDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmFwaGljcywgSW50ZXJhY3Rpb25EYXRhLCBTcHJpdGUsIFRleHR1cmUsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTGluZVByb3BzLCBMaW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbGluZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExJTkUgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF9saW5lOiBHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBMaW5lUHJvcHM7XHJcbiAgcHJpdmF0ZSBlZGl0UG9pbnRzOiBHcmFwaGljc1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2xpbmUpO1xyXG4gICAgdGhpcy50eXBlID0gXCJsaW5lXCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50SW5MaW5lKFxyXG4gICAgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxyXG4gICAgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxyXG4gICAgb2Zmc2V0PzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gTWF0aC5zcXJ0KFxyXG4gICAgICBNYXRoLnBvdyhiLnggLSBhLngsIDIpICsgTWF0aC5wb3coYi55IC0gYS55LCAyKVxyXG4gICAgKTtcclxuICAgIGxldCBmYWN0b3IgPSBzZWdtZW50TGVuZ3RoIC8gMiAvIHNlZ21lbnRMZW5ndGg7XHJcbiAgICBpZiAob2Zmc2V0KSB7XHJcbiAgICAgIGZhY3RvciA9IG9mZnNldCAvIHNlZ21lbnRMZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIGZhY3RvciwgeTogYS55ICsgKGIueSAtIGEueSkgKiBmYWN0b3IgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VnbWVudHMoXHJcbiAgICBwb2ludHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdLFxyXG4gICAgcmFkaXVzOiBudW1iZXJcclxuICApOiB7XHJcbiAgICBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgZW5kOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgICBiYXppZXI/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gIH1bXSB7XHJcbiAgICByZXR1cm4gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCwgaSkgPT4ge1xyXG4gICAgICBpZiAocG9pbnRzW2kgLSAxXSkge1xyXG4gICAgICAgIGlmIChpID09PSBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludHNbaSAtIDFdLCBwb2ludCwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiBwb2ludCxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludHNbaSAtIDFdLCBwb2ludCwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSAtIDFdLCByYWRpdXMpLFxyXG4gICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9pbnRzW2kgKyAxXSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSArIDFdLCByYWRpdXMpLFxyXG4gICAgICAgICAgICBiYXppZXI6IHBvaW50LFxyXG4gICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICBzdGFydDogcG9pbnQsXHJcbiAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpICsgMV0sIHJhZGl1cyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICB0aGlzLl9saW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9saW5lLmxpbmVTdHlsZSh0aGlzLl9wcm9wcy53aWR0aCwgdGhpcy5fY29sb3IsIDEpO1xyXG4gICAgdGhpcy5zZWdtZW50cyh0aGlzLl9wcm9wcy5wb2ludHMsIHRoaXMuX3Byb3BzLnJhZGl1cykuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIXNlZ21lbnQuYmF6aWVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGluZS5tb3ZlVG8oc2VnbWVudC5zdGFydC54LCBzZWdtZW50LnN0YXJ0LnkpO1xyXG4gICAgICAgIHRoaXMuX2xpbmUubGluZVRvKHNlZ21lbnQuZW5kLngsIHNlZ21lbnQuZW5kLnkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9saW5lLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgc2VnbWVudC5zdGFydC54LFxyXG4gICAgICAgIHNlZ21lbnQuc3RhcnQueSxcclxuICAgICAgICBzZWdtZW50LmJhemllci54LFxyXG4gICAgICAgIHNlZ21lbnQuYmF6aWVyLnksXHJcbiAgICAgICAgc2VnbWVudC5lbmQueCxcclxuICAgICAgICBzZWdtZW50LmVuZC55XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2xpbmUubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwKTtcclxuICAgIHRoaXMuX2xpbmUuYmVnaW5GaWxsKDB4ZmZmZmZmLCAwLjAxKTtcclxuICAgIHRoaXMuX2xpbmUubW92ZVRvKHRoaXMuX3Byb3BzLnBvaW50c1swXS54LCB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8ocG9pbnQueCArIHRoaXMuX3Byb3BzLndpZHRoLCBwb2ludC55KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8oXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueCAtIHRoaXMuX3Byb3BzLndpZHRoIC0gNDAsXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9saW5lLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX2xpbmUuY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFBvaW50cygpIHtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnBvaW50KHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICB0aGlzLmRyYWdQb2ludChwLCBwb2ludCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHApO1xyXG4gICAgICB0aGlzLmVkaXRQb2ludHMucHVzaChwKTtcclxuICAgICAgaWYgKGFycltpICsgMV0pIHtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBhcnJbaSArIDFdKTtcclxuICAgICAgICBjb25zdCBjZW50ZXJQb2ludCA9IHRoaXMucG9pbnQoY2VudGVyLngsIGNlbnRlci55LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVkaXRQb2ludHMucHVzaChjZW50ZXJQb2ludCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2VudGVyUG9pbnQpO1xyXG4gICAgICAgIHRoaXMuZHJhZ1BvaW50KGNlbnRlclBvaW50LCBjZW50ZXIsIGkgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcG9pbnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNlbnRlcj86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHBvaW50ID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICBwb2ludC5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICBwb2ludC5saW5lU3R5bGUoMiwgMHhmZmZmZmYsIDAuMyk7XHJcbiAgICBwb2ludC5tb3ZlVG8oMCwgMCk7XHJcbiAgICBwb2ludC5saW5lVG8oMCwgLTIwKTtcclxuICAgIHBvaW50LmxpbmVTdHlsZSgwLCAwKTtcclxuICAgIHBvaW50LmJlZ2luRmlsbCgweGZmZmZmZiwgMC4yKTtcclxuICAgIHBvaW50LmRyYXdFbGxpcHNlKDAsIDAsIGNlbnRlciA/IDE2IDogMjUsIGNlbnRlciA/IDE2IC8gMS42IDogMjUgLyAxLjYpO1xyXG4gICAgcG9pbnQuZW5kRmlsbCgpO1xyXG4gICAgcG9pbnQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgcG9pbnQuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICByZXR1cm4gcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBkcmFnUG9pbnQoXHJcbiAgICBwOiBHcmFwaGljcyxcclxuICAgIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBmdXJjYXRlSW5kZXg/OiBudW1iZXJcclxuICApIHtcclxuICAgIGxldCBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XHJcbiAgICBsZXQgZHJhZyA9IGZhbHNlO1xyXG4gICAgcC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIGRhdGEgPSBlLmRhdGE7XHJcbiAgICAgIGRyYWcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFwcC5tb3ZlID0gZmFsc2U7XHJcbiAgICAgIGlmIChmdXJjYXRlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9wcm9wcy5wb2ludHMuc3BsaWNlKGZ1cmNhdGVJbmRleCwgMCwgcG9pbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwLm1vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgICAgICB0aGlzLmVkaXRQb2ludHMuZm9yRWFjaCgocCkgPT4gdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQocCkpO1xyXG4gICAgICAgIHRoaXMuZWRpdFBvaW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWRkUG9pbnRzKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZHJhZykge1xyXG4gICAgICAgICAgY29uc3QgbmV3cCA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbihwLnBhcmVudCk7XHJcbiAgICAgICAgICBuZXdwLnggPSBuZXdwLnggLSAobmV3cC54ICUgMjUpO1xyXG4gICAgICAgICAgbmV3cC55ID0gbmV3cC55IC0gKG5ld3AueSAlIDE1KTtcclxuICAgICAgICAgIGlmIChmdXJjYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgcG9pbnQgPSB0aGlzLl9wcm9wcy5wb2ludHNbZnVyY2F0ZUluZGV4XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBvaW50LnggPSBuZXdwLng7XHJcbiAgICAgICAgICBwLnBvc2l0aW9uLnggPSBuZXdwLng7XHJcbiAgICAgICAgICBwb2ludC55ID0gbmV3cC55O1xyXG4gICAgICAgICAgcC5wb3NpdGlvbi55ID0gbmV3cC55O1xyXG4gICAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoKSB7XHJcbiAgICBpZiAoc3VwZXIuc2VsZWN0KCkpIHtcclxuICAgICAgdGhpcy5hZGRQb2ludHMoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMuZWRpdFBvaW50cy5mb3JFYWNoKChwKSA9PiB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChwKSk7XHJcbiAgICB0aGlzLmVkaXRQb2ludHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogTGluZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBMaW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEdyYXBoaWNzLFxyXG4gIEludGVyYWN0aW9uRGF0YSxcclxuICBUZXh0dXJlLFxyXG4gIFRpbGluZ1Nwcml0ZSxcclxuICB1dGlscyxcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBsYW5lUHJvcHMsIFBsYW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxhbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBMQU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfcGxhbmU6IEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcGxhbmVUaWxlID0gbmV3IFRpbGluZ1Nwcml0ZShUZXh0dXJlLmZyb20oXCJzZWxlY3RcIikpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBQbGFuZVByb3BzO1xyXG4gIHByaXZhdGUgcG9pbnQgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fcGxhbmUpO1xyXG4gICAgdGhpcy5wb2ludC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnR5cGUgPSBcInBsYW5lXCI7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuX3BsYW5lVGlsZS50aWxlUG9zaXRpb24ueCArPSBkIC8gMjtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kcmFnUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBjb25zdCByYWQgPSAoMzEgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgIGNvbnN0IGEgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IGIgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5jb3MocmFkKTtcclxuICAgIGNvbnN0IEEgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IEIgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5jb3MocmFkKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIDAuMDQpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVN0eWxlKDIsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgdGhpcy5fcGxhbmUubW92ZVRvKDAsIDApO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKGIsIC1hKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhiICsgQiwgLWEgKyBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhCLCBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5fcGxhbmUuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnggPSBiO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnkgPSAtYTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS53aWR0aCA9IHRoaXMuX3Byb3BzLnc7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuaGVpZ2h0ID0gdGhpcy5fcHJvcHMuaDtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS50aWxlU2NhbGUuc2V0KDEuNSwgMS41KTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuYWxwaGEgPSAwLjQ7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuc2tldy5zZXQoLTEuMDMsICgzMSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3BsYW5lVGlsZSk7XHJcbiAgICB0aGlzLnBvaW50LnBvc2l0aW9uLnNldChiICsgQiwgLWEgKyBBKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCgpIHtcclxuICAgIGlmIChzdXBlci5zZWxlY3QoKSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1BvaW50KCkge1xyXG4gICAgdGhpcy5wb2ludC5saW5lU3R5bGUoMiwgMHhmZmZmZmYsIDAuMyk7XHJcbiAgICB0aGlzLnBvaW50Lm1vdmVUbygwLCAwKTtcclxuICAgIHRoaXMucG9pbnQubGluZVRvKDAsIC0yMCk7XHJcbiAgICB0aGlzLnBvaW50LmxpbmVTdHlsZSgwLCAwKTtcclxuICAgIHRoaXMucG9pbnQuYmVnaW5GaWxsKDB4ZmZmZmZmLCAwLjIpO1xyXG4gICAgdGhpcy5wb2ludC5kcmF3RWxsaXBzZSgwLCAwLCAyNSwgMjUgLyAxLjYpO1xyXG4gICAgdGhpcy5wb2ludC5lbmRGaWxsKCk7XHJcbiAgICBsZXQgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xyXG4gICAgbGV0IGRyYWcgPSBmYWxzZTtcclxuICAgIGxldCBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLnBvaW50XHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZGF0YSA9IGUuZGF0YTtcclxuICAgICAgICBkcmFnID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBvaW50LnBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZHJhZykge1xyXG4gICAgICAgICAgY29uc3QgZW5kID0gZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucG9pbnQucGFyZW50KTtcclxuICAgICAgICAgIGlmIChlbmQueCAtIHN0YXJ0LnggPiAwIHx8IGVuZC55IC0gc3RhcnQueSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudyArPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudyAtPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhcnQgPSBlbmQ7XHJcbiAgICAgICAgICAvLyBuZXdwLnggPSBuZXdwLnggLSAobmV3cC54ICUgMjUpO1xyXG4gICAgICAgICAgLy8gbmV3cC55ID0gbmV3cC55IC0gKG5ld3AueSAlIDE1KTtcclxuICAgICAgICAgIC8vIGNvbnN0IHJhZCA9ICgzMSAqIE1hdGguUEkpIC8gMTgwO1xyXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy53ICs9IDE7XHJcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLmggKz0gMTtcclxuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBQbGFuZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fcGxhbmUpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBQbGFuZUNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHV0aWxzLCBUZXh0LCBUZXh0U3R5bGVGb250V2VpZ2h0IH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVGV4dENvbmZpZywgVGV4dFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGV4dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRFWFQgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF90ZXh0ID0gbmV3IFRleHQoXCJcIik7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IFRleHRQcm9wcztcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLnR5cGUgPSBcInRleHRcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBpZiAodGhpcy5fcHJvcHMuc2tldykge1xyXG4gICAgICB0aGlzLl90ZXh0LnNrZXcuc2V0KC0xLjAzLCAoMzEgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSB0aGlzLl9wcm9wcy5mb250V2lkdGggYXMgVGV4dFN0eWxlRm9udFdlaWdodDtcclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZm9udFNpemUgPSB0aGlzLl9wcm9wcy5mb250U2l6ZTtcclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZmlsbCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5fdGV4dC50ZXh0ID0gdGhpcy5fcHJvcHMudGV4dDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3RleHQpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBUZXh0UHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl90ZXh0KSB7XHJcbiAgICAgIHRoaXMuX3RleHQudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl90ZXh0KSB7XHJcbiAgICAgIHRoaXMuX3RleHQuc3R5bGUuZmlsbCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBUZXh0Q29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JhcGhpY3MsIFRleHQsIFRleHRTdHlsZSwgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMQUJFTCBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBfY29sb3I6IG51bWJlcjtcclxuICBwcml2YXRlIF90ZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIHByaXZhdGUgX2xhYmVsVGV4dDogVGV4dDtcclxuICBwcml2YXRlIF9sYWJlbCA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3N0eWxlID0gbmV3IFRleHRTdHlsZSh7XHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAxLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgZmlsbDogXCIjQTJBM0E3XCIsXHJcbiAgICB3b3JkV3JhcDogdHJ1ZSxcclxuICAgIHdvcmRXcmFwV2lkdGg6IDEwMCxcclxuICAgIGxpbmVKb2luOiBcInJvdW5kXCIsXHJcbiAgfSk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0ID0gbmV3IFRleHQoXCJcIiwgdGhpcy5fc3R5bGUpO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnggPSAxNjtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC55ID0gNDtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYWJlbFRleHQpO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcoKSB7XHJcbiAgICB0aGlzLl9sYWJlbC5jbGVhcigpO1xyXG4gICAgdGhpcy5fbGFiZWwuYmVnaW5GaWxsKHRoaXMuX2NvbG9yKTtcclxuICAgIHRoaXMuX2xhYmVsLmRyYXdSZWN0KDAsIDAsIDYsIHRoaXMuX2xhYmVsVGV4dC5oZWlnaHQgKyAxMCk7XHJcbiAgICB0aGlzLl9sYWJlbC5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9sYWJlbC5saW5lU3R5bGUoMSwgdGhpcy5fY29sb3IsIDAuNSk7XHJcbiAgICB0aGlzLl9sYWJlbC5iZWdpbkZpbGwoMHgwMDAwMDAsIDEpO1xyXG4gICAgdGhpcy5fbGFiZWwuZHJhd1JlY3QoXHJcbiAgICAgIDYsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuX2xhYmVsVGV4dC53aWR0aCArIDIwLFxyXG4gICAgICB0aGlzLl9sYWJlbFRleHQuaGVpZ2h0ICsgMTBcclxuICAgICk7XHJcbiAgICB0aGlzLl9sYWJlbC5lbmRGaWxsKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IG51bWJlcikge1xyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RleHQgPSBcIlwiO1xyXG4gICAgbGV0IGFjYyA9IDA7XHJcbiAgICB0ZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgaWYgKGFjYyA8IDIwKSB7XHJcbiAgICAgICAgYWNjICs9IDE7XHJcbiAgICAgICAgdGhpcy5fdGV4dCArPSBzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjYyA9IDA7XHJcbiAgICAgICAgdGhpcy5fdGV4dCArPSBcIiBcIjtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQudGV4dCA9IHRoaXMuX3RleHQ7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlLCBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1FTlUgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgZGVsZXRlOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcImRlbGV0ZUJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBjb3B5OiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcImNvcHlCVE5cIikpO1xyXG4gIHByaXZhdGUgcG9pbnQ6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwicG9pbnRCVE5cIikpO1xyXG4gIHByaXZhdGUgc2V0dGluZ3M6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwic2V0dGluZ3NCVE5cIikpO1xyXG4gIHByaXZhdGUgdXA6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwidXBCVE5cIikpO1xyXG4gIHByaXZhdGUgZG93bjogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJkb3duQlROXCIpKTtcclxuICBwcml2YXRlIGVsOiBCYXNlO1xyXG4gIGNvbnN0cnVjdG9yKGVsOiBCYXNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG5cclxuICAgIHRoaXMucG9pbnQuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmRlbGV0ZS5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuY29weS5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuc2V0dGluZ3MuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLnVwLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5kb3duLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5wb2ludC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmRlbGV0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvcHkuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnVwLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZG93bi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnBvaW50LmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kZWxldGUuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvcHkuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy51cC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuZG93bi5idXR0b25Nb2RlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnBvaW50Lm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLnBvaW50KSk7XHJcbiAgICB0aGlzLnBvaW50Lm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5wb2ludCkpO1xyXG4gICAgdGhpcy5kZWxldGUub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuZGVsZXRlKSk7XHJcbiAgICB0aGlzLmRlbGV0ZS5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuZGVsZXRlKSk7XHJcbiAgICB0aGlzLmNvcHkub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLmNvcHkpKTtcclxuICAgIHRoaXMuY29weS5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5jb3B5KSk7XHJcbiAgICB0aGlzLnNldHRpbmdzLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLnNldHRpbmdzKSk7XHJcbiAgICB0aGlzLnNldHRpbmdzLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5zZXR0aW5ncykpO1xyXG4gICAgdGhpcy51cC5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy51cCkpO1xyXG4gICAgdGhpcy51cC5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMudXApKTtcclxuICAgIHRoaXMuZG93bi5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5kb3duKSk7XHJcbiAgICB0aGlzLmRvd24ub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLmRvd24pKTtcclxuXHJcbiAgICB0aGlzLnBvaW50Lm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC5hcHAub2Zmc2V0ID0ge1xyXG4gICAgICAgIHg6IHRoaXMuZWwuYXBwLnNjcmVlbi53aWR0aCAvIDIgLSB0aGlzLmVsLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuZWwuYXBwLnNjcmVlbi5oZWlnaHQgLyAyIC0gdGhpcy5lbC5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGVsZXRlLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlbW92ZSh0aGlzLmVsLnJlZik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvcHkub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLmFwcC5zZXRDb3B5KCk7XHJcbiAgICAgIHRoaXMuZWwuYXBwLnBhc3RlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLnpJbmRleCArPSAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvd24ub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLnpJbmRleCAtPSAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb3B5LnkgPSAwO1xyXG4gICAgdGhpcy5zZXR0aW5ncy55ID0gdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLmRlbGV0ZS55ID0gdGhpcy5wb2ludC5oZWlnaHQgKiAyO1xyXG4gICAgdGhpcy5wb2ludC55ID0gMDtcclxuICAgIHRoaXMucG9pbnQueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMudXAueSA9IHRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy51cC54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy5kb3duLnkgPSB0aGlzLnBvaW50LmhlaWdodCAqIDI7XHJcbiAgICB0aGlzLmRvd24ueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICB9XHJcblxyXG4gIGhvdmVyKGU6IFNwcml0ZSkge1xyXG4gICAgZS5zY2FsZS5zZXQoMC45LCAwLjkpO1xyXG4gIH1cclxuICB1bmhvdmVyKGU6IFNwcml0ZSkge1xyXG4gICAgZS5zY2FsZS5zZXQoMSwgMSk7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kZWxldGUpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmNvcHkpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnNldHRpbmdzKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy51cCk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZG93bik7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICBpZiAodGhpcy5lbC5hcHAuZWRpdCkge1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMucG9pbnQpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZGVsZXRlKTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmNvcHkpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMudXApO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZG93bik7XHJcbiAgICAgIHRoaXMucG9pbnQueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICAgICAgdGhpcy5waXZvdC5zZXQodGhpcy5wb2ludC5oZWlnaHQgLyAyLCB0aGlzLmhlaWdodCAtIDIwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICAgIHRoaXMucG9pbnQueCA9IDA7XHJcbiAgICAgIHRoaXMucGl2b3Quc2V0KDAsIDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy56SW5kZXggPSB0aGlzLmVsLmFwcC5jb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5lbC54LCB0aGlzLmVsLnkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFNwcml0ZSwgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU1BSSVRFIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9vZmZzZXQgPSAxMDtcclxuICAgIHRoaXMuc3dpbmcoKTtcclxuICB9XHJcblxyXG4gIHN3aW5nKCkge1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIHdpbmRvdy5vaXMudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ID49IHRoaXMuX29mZnNldCkgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IDw9IDApIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGlmIChmbGFnKSB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSArPSBkIC8gNTtcclxuICAgICAgICBlbHNlIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IC09IGQgLyA1O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCB0ZXh0dXJlKHRleHR1cmU6IFRleHR1cmUpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICB0aGlzLnBpdm90LnNldCh0aGlzLl9zcHJpdGUud2lkdGggLyAyLCAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24sIENvbnRhaW5lciwgTG9hZGVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2VsZW1lbnRzL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50c1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vZWxlbWVudHMvYmFja2dyb3VuZC5lbGVtZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbmZpZyB9IGZyb20gXCIuL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBiYXNlQXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzL2Jhc2VcIjtcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgb2lzOiBBcHA7XHJcbiAgfVxyXG4gIGludGVyZmFjZSBDb250YWluZXIge1xyXG4gICAgaW50ZXJhY3RpdmU6IGJvb2xlYW47XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHVibGljIG9mZnNldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgcHVibGljIGVsZW1lbnRzU2VydmljZSA9IG5ldyBFbGVtZW50c1NlcnZpY2UodGhpcyk7XHJcbiAgcHVibGljIGNvbmZpZ1NlcnZpY2UgPSBuZXcgQ29uZmlnU2VydmljZSh0aGlzKTtcclxuICBwdWJsaWMgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBCYXNlO1xyXG4gIHB1YmxpYyBjb3B5OiBCYXNlO1xyXG4gIHB1YmxpYyBsb2FkZXI6IExvYWRlcjtcclxuICBwcml2YXRlIGRpdjogRWxlbWVudDtcclxuICBwdWJsaWMgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuICBwdWJsaWMgX2VkaXQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBtb3ZlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZXZlbnRzOiB7XHJcbiAgICBzZWxlY3Q6ICgoZWw6IEJhc2UpID0+IHZvaWQpW107XHJcbiAgfSA9IHtcclxuICAgIHNlbGVjdDogW10sXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgc3VwZXIoeyBhbnRpYWxpYXM6IHRydWUsIGJhY2tncm91bmRDb2xvcjogMHgwMDAwMDAgfSk7XHJcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKCF0aGlzLmRpdikge1xyXG4gICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgIHRoaXMubG9hZGVyID0gTG9hZGVyLnNoYXJlZDtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5rZXlib2FyZCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNpemluZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGtleWJvYXJkKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZWRpdCAmJiBlLmNvZGUgPT09IFwiRGVsZXRlXCIgJiYgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlbW92ZSh0aGlzLnNlbGVjdGVkLnJlZik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlDXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb3B5KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlWXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuY29weSkge1xyXG4gICAgICAgIHRoaXMucGFzdGUoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS5jb2RlID09PSBcIktleVpcIiAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UudW5kbygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0Q29weSgpIHtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuc2VsZWN0ZWQ7XHJcbiAgfVxyXG4gIHBhc3RlKCkge1xyXG4gICAgdGhpcy5jb3B5ID0gdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKHRoaXMuY29weS50eXBlLCB7XHJcbiAgICAgIC4uLih0aGlzLmNvcHkuY29uZmlnIGFzIENvbXBvbmVudENvbmZpZyksXHJcbiAgICAgIHg6IHRoaXMuY29weS54ICsgMTAwLFxyXG4gICAgICByZWY6IHRoaXMuY29weS5yZWYgKyBEYXRlLm5vdygpLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICB9XHJcblxyXG4gIGxvYWQoY29uZmlnOiBDb25maWcsIGNiOiAob2lzOiBBcHApID0+IHZvaWQpIHtcclxuICAgIGJhc2VBc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVyLmFkZChzcHJpdGUubmFtZSwgc3ByaXRlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcuYXNzZXRzLmZvckVhY2goKHNwcml0ZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlci5hZGQoc3ByaXRlLm5hbWUsIHNwcml0ZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2FkZXIubG9hZCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgIHRoaXMuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICBjYih0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNpemluZygpIHtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMudmlldy53aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLnZpZXcuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNjcmVlbi53aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLnNjcmVlbi5oZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHRoaXMuYmFja2dyb3VuZC50aWxlLndpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHRoaXMuYmFja2dyb3VuZC50aWxlLmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbmZpZyhjb25maWc6IENvbmZpZykge1xyXG4gICAgdGhpcy5vZmZzZXQgPSBjb25maWcub2Zmc2V0O1xyXG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kLnRpbGUudGlsZVBvc2l0aW9uLnggPSBjb25maWcub2Zmc2V0Lng7XHJcbiAgICAvLyB0aGlzLmJhY2tncm91bmQudGlsZS50aWxlUG9zaXRpb24ueSA9IGNvbmZpZy5vZmZzZXQueTtcclxuICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlZnMgPSB7fTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICBjb25maWcucGxhbmVzLmZvckVhY2goKHBsYW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcInBsYW5lXCIsIHBsYW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwibGluZVwiLCBsaW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcImNvbXBvbmVudFwiLCBjb21wb25lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJ0ZXh0XCIsIHRleHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQoZWw6IEJhc2UpIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkgdGhpcy5fc2VsZWN0ZWQudW5zZWxlY3QoKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1NlcnZpY2UucmVmcztcclxuICB9XHJcblxyXG4gIHNldCBlZGl0KGVkaXQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2VkaXQgPSBlZGl0O1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5tZW51LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZWRpdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lZGl0O1xyXG4gIH1cclxuXHJcbiAgb24oZXZlbnQ6IGtleW9mIEFwcFtcImV2ZW50c1wiXSwgY2I6IChlbDogQmFzZSkgPT4gdm9pZCkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgd2luZG93Lm9pcyA9IG5ldyBBcHAoc2VsZWN0b3IpO1xyXG4gIHJldHVybiB3aW5kb3cub2lzO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcbiAgcHVibGljIGFwcDogQXBwO1xyXG4gIHB1YmxpYyBoaXN0b3J5OiB7IHNlbGVjdGVkOiBzdHJpbmcgfCBudWxsOyBjb25maWc6IENvbmZpZyB9W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgZG8oKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaGlzdG9yeS5sZW5ndGggPD0gMjAgJiZcclxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpICE9PVxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0pXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnB1c2goe1xyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuYXBwLnNlbGVjdGVkPy5yZWYsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5kbygpIHtcclxuICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID49IDIpIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xyXG4gICAgICBjb25zdCBwb2ludCA9IHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZyA9IHBvaW50LmNvbmZpZztcclxuICAgICAgLy8gaWYgKHBvaW50LnNlbGVjdGVkKSB7XHJcbiAgICAgIC8vICAgdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlZnNbcG9pbnQuc2VsZWN0ZWRdLnNlbGVjdCgpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvZmZzZXQ6IHtcclxuICAgICAgICB4OiB0aGlzLmFwcC5vZmZzZXQueCxcclxuICAgICAgICB5OiB0aGlzLmFwcC5vZmZzZXQueSxcclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLmNvbXBvbmVudHMsXHJcbiAgICAgIGxpbmVzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UubGluZXMsXHJcbiAgICAgIHBsYW5lczogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnBsYW5lcyxcclxuICAgICAgdGV4dHM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS50ZXh0cyxcclxuICAgICAgYXNzZXRzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UuYXNzZXRzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQ09NUE9ORU5UIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50XCI7XHJcbmltcG9ydCB7IExJTkUgfSBmcm9tIFwiLi4vZWxlbWVudHMvbGluZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFBMQU5FIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgVEVYVCB9IGZyb20gXCIuLi9lbGVtZW50cy90ZXh0LmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRDb25maWcsXHJcbiAgQ29tcG9uZW50UHJvcHMsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMaW5lQ29uZmlnLCBMaW5lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9saW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZUNvbmZpZywgUGxhbmVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0Q29uZmlnLCBUZXh0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZXh0LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRzU2VydmljZSB7XHJcbiAgcHVibGljIHJlZnM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgfSA9IHt9O1xyXG4gIHB1YmxpYyBhcHA6IEFwcDtcclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgY29uZmlnOiBDb21wb25lbnRDb25maWcgfCBUZXh0Q29uZmlnIHwgUGxhbmVDb25maWcgfCBMaW5lQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMucmVmc1tjb25maWcucmVmXSkge1xyXG4gICAgICBsZXQgZWw6IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb21wb25lbnRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IENPTVBPTkVOVChjb25maWcsIHRoaXMuYXBwKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIENvbXBvbmVudFByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFRFWFQoY29uZmlnLCB0aGlzLmFwcCk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBUZXh0UHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicGxhbmVcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFBMQU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgUGxhbmVQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBMSU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgTGluZVByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmc1tjb25maWcucmVmXSA9IGVsO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzW2NvbmZpZy5yZWZdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgSW4gc2NoZW1hIGNvbmZpZ3VyYXRpb24gbGluayBcIiR7XHJcbiAgICAgICAgICBjb25maWcucmVmXHJcbiAgICAgICAgfVwiIGlzIGR1cGxpY2F0ZWQuICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX1cImBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUocmVmOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xyXG4gICAgICB0aGlzLmFwcC5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5yZWZzW3JlZl0uY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICBkZWxldGUgdGhpcy5yZWZzW3JlZl07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudHNPZlR5cGUodHlwZTogXCJjb21wb25lbnRcIiB8IFwibGluZVwiIHwgXCJ0ZXh0XCIgfCBcInBsYW5lXCIpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnJlZnMpXHJcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNba2V5XS50eXBlID09PSB0eXBlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChrZXkpID0+IHRoaXMucmVmc1trZXldLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcG9uZW50cygpOiBDb21wb25lbnRDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcImNvbXBvbmVudFwiKSBhcyBDb21wb25lbnRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBsaW5lcygpOiBMaW5lQ29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJsaW5lXCIpIGFzIExpbmVDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0cygpOiBUZXh0Q29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJ0ZXh0XCIpIGFzIFRleHRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFuZXMoKTogUGxhbmVDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcInBsYW5lXCIpIGFzIFBsYW5lQ29uZmlnW107XHJcbiAgfVxyXG5cclxuICBnZXQgYXNzZXRzKCk6IHsgbmFtZTogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfVtdIHtcclxuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhjb21wb25lbnQucHJvcHMubmFtZSkpIHtcclxuICAgICAgICBrZXlzLnB1c2goY29tcG9uZW50LnByb3BzLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBrZXlzLm1hcCgobmFtZSkgPT4gKHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGRhdGE6IHV0aWxzLlRleHR1cmVDYWNoZVtcInNlcnZlclwiXS5iYXNlVGV4dHVyZS5yZXNvdXJjZS51cmwsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9