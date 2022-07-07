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
                _this.editPoints.forEach(function (p) { return _this.container.removeChild(p); });
                _this.editPoints = [];
                _this.addPoints();
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
                else {
                    _this.editPoints.forEach(function (el, i, arr) {
                        if (el === p && i > 0 && i < arr.length - 1) {
                            arr[i - 1].x = _this.pointInLine(arr[i - 2], p).x;
                            arr[i - 1].y = _this.pointInLine(arr[i - 2], p).y;
                            arr[i + 1].x = _this.pointInLine(arr[i + 2], p).x;
                            arr[i + 1].y = _this.pointInLine(arr[i + 2], p).y;
                        }
                        else if (el === p && i === arr.length - 1) {
                            arr[i - 1].x = _this.pointInLine(arr[i - 2], p).x;
                            arr[i - 1].y = _this.pointInLine(arr[i - 2], p).y;
                        }
                        else if (el === p && i === 0) {
                            arr[i + 1].x = _this.pointInLine(arr[i + 2], p).x;
                            arr[i + 1].y = _this.pointInLine(arr[i + 2], p).y;
                        }
                    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLENBQVM7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLENBQW1CO1FBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQs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LEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ2xEOzZCQUFNLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQzNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ2xEOzZCQUFNLElBQUksRUFBRSxLQUFLLENBQUMsSUFB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LEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFD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QTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PSVMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL09JUy8uL3NyYy9hc3NldHMvYmFzZS50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvYmFja2dyb3VuZC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9iYXNlLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9saW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3RleHQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9sYWJlbC53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvbWVudS53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvc3ByaXRlLndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy9leHRlcm5hbCB1bWQge1wiY29tbW9uanNcIjpcInBpeGkuanNcIixcImNvbW1vbmpzMlwiOlwicGl4aS5qc1wiLFwidW1kXCI6XCJwaXhpLmpzXCIsXCJzY3JpcHRcIjpcIlBJWElcIixcInJvb3RcIjpcIlBJWElcIn0iLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09JUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL09JUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwaXhpLmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk9JU1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBpeGkuanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk9JU1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBJWElcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IGJhc2VBc3NldHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJzZWxlY3RcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDa0FBQUFwQ0FZQUFBQ29ZQUQyQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQURPU1VSQlZIZ0I3ZGpORFlNd0RBWGdOd0lqTUVKSFlRUFlwTjJrM1lCUk9nSWpkQVRYbG55cFZNVTVST1FCdG1SeHlEdDhDajhoQWY2VWlOeTBON3VpVURvK2V1NFI1QWJ0dC9ZTFFXbm03dG1oRkVyZzBZSGJFWUFqOWdKNmRtMEc5R0JyNExNbFVNZG5zQU10QjNaZzlLejJCbjZLZHptQkNVd2dOM0FLZ1I3c0JheGVqc0VPbEdqRllRQ0drNWpBUnNBVjVNRHlYaU9CQ2J3eTBNUFVRSnRFc0FNbCtsWW5NSUcvUVB0aG5VQU9YTEF6Y0U3Z3FZRWVwQWJhZXdKMm9GUWUvWFVGU3VYUjM0TE93QzhOSzA3aFJmUXpYQUFBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJiZ1wiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQThDQVlBQUFDUVB4L09BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBYVpTVVJCVkhnQjVWeEJUeHczRkg1ZVFLMGFFQU9wbWtodEpTOG5CRVJkZmtISkwyajRCWUZma09UVUk4dXBSK0FYTERuMUNEbEZQUzM4QWtBaFZkcERkM3FMMGtxZFNDQlJCV2J5bmoyWlhXQjN4ak5qejlqS0o2MVlkcjB6OXRqKzNudWZuODBnQnVmejNQZmYrT0FJZUhPeEI4RDQ4RzhqMysrOWJvSWo0Sng3QUI3NC9uSFFrQi9NYzJCalhUNjMyQkh2TFlkb1FBUUgrRGJBdjhmSkZ4SHp4VjhHKytBSU9GOVlBemFGZyt2L0ZmcWY5YitnamhoL0NvejloSTE4NXZ1dnJHd1U1MHNyV01jT1JKRVBjTGwrYzFiTGRveTFnVFYraE9ocTAvZC8zd1VMZ1IzUndqcHU0Yk1tWUQxUEQwWVVuT2VpMFpaQjFLdTUxQ1dxVXFrZmpUeFIxdEpaTDUvejRsTW9Bc2x4OVlEdXplZVdObmp6QVhWRU8yOWR4RythU3hGZEF4ekFXRllCemxzZXNJa2p6L3Y2ZlJEOGN3d1ZRdExURnk5eFdtTW5YSzRpL2V3SFFYQ1I1eHBCOE83QTgyYWZvMzFaOVdidWI5WFRqb1dXTjNQdlY3ejNDZDc3YlZwWkJncVFSbjk4RDR1ak1mM3cwTFEzRnQrdmcxYWE0NE5jSDhtdnVhOUxCcFJ0WUtzUElDVDdZcm9kT0pzYlV4dG83OWJ3aGZkN3ZaMzFtd1lvZ0NydTkwNlh5VWlpNFY4RFEvaEVUemdqdXpnckRpRTZYOWJWR1FReThNSWREdG5mMk9FOTh6UjJadzNDaUVGMDFsVHBESUxTREtrQ1dkNlQvdnU1NFkzbEJwOTdzRmZHaThuclBlbUdMbThzY1Q3STVwYUFFbVdsSXJ4NlVTU29ORTFQcXRCQlkwbHdGOElNeGFwbG9JV3kra0VsL0lDMjVtRjIrV3JwU1JWRmFBd1pZZ3Z0UkF2U2dqdGJVVGM5cVNJUGplbU8wVExqa0RLZ2hubmUzY0R6SnNHYi9lNW52TjAyMHRNTGdIT2NGWCsrQVV0QmNRcStkcnpwZThzNFcvYTgyVzhnK08vZElYMUhBd2xqRzc5Zk5sOWNsQVdqWGhaRnlVaE5qOFUvbHRHVEtxN1JHS3JJVW5zYVh5VmxGZ3lndkZFZkFSbmNBVFlpQlBtQ1E5YzZneERYR1NQN3lCT0Jhb01HMW9VeEtVbDdod3oxbnNUYXhKbFNZR1FucnZaRmNGZEJVS21Wc2xTOUowa0RqUldycFhFSWcvVDZtd2txdFJoMXFpQUtkM3ZBU0xNQjBwNDJnK0Rma1J6cmVmZHhMUUMyMEZpMnZPbTdKMmxscXdUTmJtLzIrMTl3bk5Kcy9tT1VDRW4xeGUvMlNhZ2tiVXhuTzBwUlZ0SGdqc3IwcHo4R2xTV2pXMjFnVTBkOTdTbDcxRmV2amFXQTZDbGVvK2k2c095cmdqSXhSYnpndEN1ZkNVYnVCWkhiaHBpU3hwTnJ3OWdUTktJNzFVamprMDhnSE4vUjZjS1dsZmlWS2FzSzdVbFducjAzUGYxMWFrODNVWmJHRkJlb2FwTEc0YXF0KzE3Q1hqVXVPOWdaTzZhMXB5TGVHTXU4b0NGNitweVFoOFlhd3k5Z2h6UityVTVrTEF0SzR5aG9IdFhweWVXaHNWc3p4QTFwUER0dlREbnZxV0lvMDVoVDByaUlwTFBLbGNoN3FnQ2pKSDVHT1VzZ3hET0c5aUxjaC9BY1I1OXZSZVNzQXFMWFQvVWRmTzhLY1BCdkkwK2hxMDlwc0JFZmp6L0hFWWY5RXBHKzVGYURBTDU2aFBabFEwampqR2dXMXNFbFVPcXU0RlYwbk9DV1VRL0JQVEF2a2NiSmFEcUg2ODljZG9pRFdlTjlERWpqY0xrTERtRllGditON0hkSHNzWkJ1SkxINmVWc2wvaUhlN05EM041cTB5MVZjVDB0TTN5VzlhQmxnNk9PZmUxSUQ3WnZCWVpXU2NxRFlKUGRmTks0WFJLL2xtQmJsNlNzQTdyVGJhcEVucVVLUlhHeGpxeHgvZEo0Y20yNHMxR054SjlmQzFUTWZxK094a3hLNHdRWlo1bVYrTXZRVTdFRktrUGVXQzNTdUdhSnY2d1dXRGpyeEZadnJDN29XcW9vbk9TZ0sydThibWw4RUVVa2ZxNTVxVUpqOXJzNmpia2hqYXRJL0hZdVZTUlF6UnFuRHJGZUdrK3R2eHRMRlFtR2JVVjJPNDZRZGVjbHQyaXJ3RmoyKzVDczhST2tKbXRuUlJxcXpPSTNsdjB1S3R4Z3ZZR3M4V2tYRStxdVovRkhBWGFNMFVONmpIV0lRRWhlUnpWWjQ3b3hQSXVmdG9aSGJpMkFwY0VtYlN3TmViUW4zWFpFazl1YlNPTXJZaFJsbHJkVjRzOGYzSWxObnhFODBuWENSZW50Q1BMaGZ2a1NPK01FNEd4ZFpjOWQyaDYrT2lDM0lSVGJBNG4xL2sxdVMyaDA1TGFFYncrRDRLM1dmWWU1UUZrVFpYenh1bWxNVnhaL2ZLeFZHMHJDb3FNMXFwYjQ3VXlUemVWbGlRaldrSmRVbGNTdlczdEt2eGM5cjN3blhDaDFpSkE2VUNyQTRvK0ZLMnNRK0hEYUVGMWl4MFJOM1RRbXRTZmFKUVVyMGdpZnRzM21vWVU0MjJudFphS3IybzVNeXBJSG1IMDR3dEcwbzNyRWtDN29vckc2NlNrNWJ5d0sxN095WmF5eElXbVEwZ1ZReDdUOXYwNDMxWDhYTHdWSGpBNFFlMDViczIzUHpCeVdCcVNVOTFRMThrdjhka3Zqby9MR0JoTGw4dVU5MVlVc0duTmxrOUdvWXhOWi84dUpvM2hhdDIyZjFvU2JXZVB4eDg1bDhTY0RMQjQ4QXpOa29XVWJUYVdCUExDQmpyZ0I1dnU5Vnc0ZE5VNzBkUkhRQVBvSVFIVVBvcDdMaFZFQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwic2VsZWN0ZWRUaWxlXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1FBQUFBOENBWUFBQUNRUHgvT0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFRalNVUkJWSGdCN1p3OVQ5dEFHTWYvNTdoRnFrSUhOdnFpTXJRU1E5VUJpWm1oWDRDRkxVaXdadW5Zb1d1WHJoM29DRkxZV1BnRWxkb1ZsYUhxUU5VT1ZCVGFwUjBJb0liRXZqNG1DWVR3SkxuRUwvZGNrcDhVMlZ5YzVPeC83bmVQWXdzRnh5a1dkZjcwRkFzK1VENCt3KzdXbGpxQnd5ZzR5dEtTdnAzUDQ2bXVZWloyNGsvVVJzdHA3ZVB6K3JyYWhhTTRHVWlob0tkOWhRVmFQVmMrOXNNUWxhamQ4ekNoUWp5Z3YrOGdoMDhiRytvYkhNT3BRSnA2VWdwVGROQy8wL0tZMnk0SU1PWDdtTWxwL0hCTlkwNEUwcTZuME1OUGs5ZDVORnBjMDVqNFFEcnB5UlRYTkNZMkVGTTltZUtLeHNRRk1xaWVUSkd1TVZHQnhOV1RLWkkxSmlLUXBQVmtpa1NOV1Ewa2JUMlpJa2xqMWdMSlNrK21TTkZZNW9IWTBwTXB0aldXV1NCUzlHU0tMWTFsRW9nMFBabGlRMk9wQmlKZFQ2WmtxYkZVQW5GTlQ2WmtvYkhFQTNGVlQ2YWtyYkhFQWhrV1BabVNsc1ppQnpLc2VqSWxhWTNGQ21UWTlXUktraG9iS0pCUjA1TXBTV2lzcjBCR1hVK214TkdZY1NCalBmWEhvQnJyR2NoWVQvSG9WMk1kQTVHbUo5TEFPaTNtNlhFWUF1L2dZYnZuaTBJc2Vnb0Y2SXQ5S0FVZTNzQVNwaHBqQTVHb0p4citMNm16eXkxTmU5U3ZGL0J4eUd3N1Q5c1dVUSt3anNaT21NTXFMR0tpc1d1QmlOZFQ5STNYZEtBVjdqV2JhQWUyZzVCR0RBV2phcGowY2locTNSS2N4cEZXZUtVOTdFQUkzVFIyRVlocjFaTUtVS1F2UzNUUUp4dE5oeHA0VDMxZmJHa3JVekFsQ3FwRXl6SUV3bWxNdVZvOXFXaVVSTUhVUTdqK0hJMGEwdE1hQlhFRTRiUnJ6S09oazZlZDAvUUlxbFU0ZzY1MnJ4QjdQUytGNkpoVEdINlVRYTJHazh0T3J4YjBISTJRWjFUQi9LWnYxZ0dFMHBnbmxodnp4SldlYUZRb2plY3Q4MHVaZHJJVUtLeEJLTlMvaHpUS3A2amZleWNWZktHNTVQekdwRjQ1eFJ4TmtvOW8rT3pUVHYrRklCclYwMnRhdmQ5c295QktxT3VwM0VGajVtVnlSbEJmNzFKeDhqZzZ2bWNWZkxneHFiZXpzcUtmME03UDBlcS9hb2lEWE03K3ZOSnlIbEtIeWxpcW50YTQ2aWtLaGliK3Q3UTZlOWxtK1R3a2dxcXJDWnF2WjZoL3QraTRmdHpjVkwvYXQrbnFXVWthdXp3UDBmZ2Frb3FNVHd5YlpiTGw4eEJPVCt4MnZkNUl1c2FrMDAxUEhNYVZpRVNOU2NaRVR4eDlsNGF1VkdNMk1kVVQrMW9Nd0ZoalBQM3FpU1BXeWROWVkzVUcxUk5ISW1lem82eXhPSHBpM3c4Sk1Xb2FTMEpQSEluLzNqUHNHa3RTVHh5cC9RQTNqQnBMV2svc1p5QkZoa1ZqYWVtSkk1T2ZxRjNWV05wNjRzajBtb0ZMR3N0Q1Qrem5JbU9rYXl4TFBYRll1Nm9tVFdNMjlNUmgvVEtuQkkzWjBoUGJGd2pBbHNaczY0bEQxSTBBV1dsTWlwNDRSTjZaa2FiR0pPbUpRL1MvWjBwU1l4TDF4Q0grM3FXNEdwT3NKdzRuYmlhTEdFUmowdlhFNFV3Z0VhWWFjMFZQSEU0RjBxU1R4bHpURTRlVGdUUnAxZGhGZzJONjRuQTZrSWlteG1vQkpsM1RFOGQvL0hyd01sMlQrRkVBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJkZWxldGVCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUcvU1VSQlZIZ0I3WmZmclFGQkZNYS92Ym12TktBQU5LQUEwUUR2YUlCM0ZFQUJOSUIzR2tBQkdrQUJHcUNBZSsrWHpXVHZ3OHpJT2JNamtjd3Z4R2JzbjkvTW5uUDJiUFlEL0gwK2h5OThHRWs0TmtrNE5razROa2s0TmtrNE50OG9nMG9GNlBXQVZndG9Ob0ZhTFIrLzM0SExCVGdjZ1AwZVpaQUZOeitkRHJCWUFOV3Fmei9LTDVmQjRtSENzeGt3SElvT3dXcVZpeXZSeC9CNExKY2xvMUUrVVNVNjRXNDN2N0FXVHBTaHBFQVhFcWRUa1ZoYUhnK2czUWFlVDlGaDhoWG02dHBrS2NDRTRxOXZ6TUFrWldVUkloZDIzVXFXcnNrRUdBeHlRWDY1emJIejJYNE15NkFRZVIxbW5iWEJpYXpYZWQybEtPRTI5M2VKdWM3bFFSN0R0NXY3UDY1cXZ3OWNyNFhRWnVPdjBmVTZKSlQvYU00eXhFUXV6Q2VXRFJPekpnd2FqU0k4YkVubk81Y0h1VEFsYkREcGpDekRZTHN0cEYxSjV6cVhCM25TOGVLMlNzRXh4aW9Uek1Rc3BibS9LK2s0U1NIeXBLUE04Zmk2MlhrRnc0RVBEaUh5a0dBOFRxY0lSdGtBNmFvRWJ5VnJycGFBTmxOZjF1WnozU3B4b213eGxZUTM4T3d0MkdxK2FvWk1LQ2tTN1QvaHdnYUtzMUxZWHBGWUtYWTdjV2Rtb3p6aE41RmU4Mk9UaEdPVGhHT1RoR09UaEdQemNjSy9IZ3VhVUUvZjlmRUFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImNvcHlCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZxU1VSQlZIZ0I3Wmc5UzhOUUZJYmZTb2ZVdVlPb1U2ME9namdVUHdhbEtJaURJQTZpZE5EVjFiL2hJaTRLWFJ4MEVad2R4RUVSQjBFWFFhYzJYZnpBb2RqTmROTjdBOEdsWUE2Y2svU1c4eXdKK1lBbk55ZnZ2VG1aZkg3Z0J3N1JCOGZJUmp2TjVpZTZHVk1KNGRhNUVWWmhhVlJZR2hXV1JvV2x5WUlKejh0aHM3S0ZRbkVVWHE3LzMrcy8zdDl3Y2x4RnEvVUZDbXdqUEZkZXdQakVaQ3haeStEUU1EWXEyNkRDSmx3WUdRTVYremFvNkVjblRlK25oRTJEK2ZLaXFkbS8rcXNlSFNBcHlNS3JhK3NvVGM4aUxjZ2xrYWFzUlQ4NmFkaUUyOEUza29CRjJDYUc3OWRBNWZIaEhsUllGajlMeXl0aHRMV0RBS1dwbVZqM05Nd0QzdDNlZ0VvbTZ2ekU3VXZzN1I5MlBONm8xM0IxZVJHS1NCRDFKZGlXbDNZaHMxUGM3WGpPUGd6WDVLS3hKZzFaMksvVGE5Um5yR3V5OFBuWnFmbTllWTExclUyTmwrY25rd2JYNElLY0VtbWgzY3VrVUdGcFZGZ2FGWmJHM2I1RU5KTjBPODZOOEMra1psS01raklwRmdBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwicG9pbnRCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUtHU1VSQlZIZ0I3Wmc5U0J4QkZNZmZKaGEzUjVyYlNDS1hMK0pwR2hNdEFpR0ZDQWtKa2dqQkloRXNralpGbWhRcGhIeVNCSklta0RaTmlxUUlCQVUvVUJBRlFSUVVPVVJSQzc4cXZ3cTlBNVc3Ni9TOXA3T001M0xjN3IwVkYvWjNIRFA3Wm1mdmYyL2V2Smxabzd5OFlnOEN4QmtJR0dXcXNybTVBYWNaakFRdUErZmhVTERmaElMOUpoVHNONkZndnlrRFlXSXhDMTYrZXMzMW56KytRUzZiQlVuRVBSeXp6dHZmZVB3eVNDTW1tRHo3b1BFeEM3VnRXR2NidGtraEZoTFBXbDlBb3FvYVF5QmoyMXBhbjNNWnYzUUYvdnorQlJLSWVYaDJab3JMaUJrOTFyYSt1Z0pTaUFrZUhSNkNnZjdlWS9iQi9qNUh1MWZPUnFQblBsRWxrOWwxMDQvanNnWEQ0TUxGQ2xoZVdtQ2JLaE5WTjhCSmJIM0RQWGpVMUF6TGkvT1F5N25MSHFpVFM4OHhmUHZPWGFpNVZjdGZRZ2tqa2VsVWl1dkppVEg3ZnBwOER4dWI3TDUwbnhkY2V6Z1NNZUhxdGV0WU0xQnNIZHNxY2JJWitGRWVUcWUyWUhkbjIvYWlMamFMZVhscU1nbW1hZkoxc1o1V0hqYlVJYlRZSTFMYnU4OUhVcGZPLzM5L2ViamIzbi9oNjQ5djMwRE56VG83VytSRGYrejcxdzlRRENVY2tZeUNyYnJIVEllTTRlWlpqajNjZXBoWE1aeHdWRDVwZm9wcDdHQm85UWxHYlRUMEtpZnJJVUhRU0pCMzE5WldqK1R0UW5qMk1QMFF4V3JNc2h6RkVwV0phZ3lGV3ZzNnY1MzYwak9LRmF2ak9Vc2tKOFpaMk56TU5JeGdEbGJvM3JUUTAzcjJJR2gvUVgyOTRqb2tDcEUvOUlUVXdpSCtYc0pKckxMWE45d0hLY1FFTzIwbDFWNVlqK2RTRWR1dDlYUjE0S3hmNFZWTzVkM3V6bmFlWUtYRWJENWlnaWw3VUx6U1JOUnQrdklzZ2ZnUmFmM1F5MFE2blFKcFJMT0VuNFJ2TDArS1VMRGZoSUw5SmhUc044RjllNmxXa3ROTzREeThEN1FXOFdER0g1dFdBQUFBQUVsRlRrU3VRbUNDXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImVsZW1lbnRcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHWUFBQUI1Q0FZQUFBRExYMVFzQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVpxU1VSQlZIZ0I3WjF0U0oxVkhNRC9qOTFObmFCWHJkMTBXYnIycFErRFRNZ1BpNWdRMWkwSW9YMkpFamYyZ2tITVVURmlCR21GdE5HSCtsQlJMZkpERVJRNFk4aWxON0p3RUZxTTVvY1VjYnRsTWtmazVyc3U4M2JPdFVkTXovV2U1K1djNTM4ZS96KzQ3SEozcjI3K3VMOXpublB1ODJoQkNFajhlclZ5Y1huaDA5bnA2V3NsUmJlZGlOOVRsZ1REc2NCZ3psMjhFczJMN21peGx1RkVDbExSMWIvSXNWcmpWYkUyTUJoanhad2Z2cm8va21OOXhPNVdabmhLY2ptVmFudHNUMWtIR0loeFluaTJJSmNKU2NGK3VWZFlIWEJ6dWMyMHZCa2pKbU8yWkRFc2IwYUlrY2lXTE1ia0RiVVk1OW1TQlgvZVVJcnhuQzFaRU9jTm5SZ2ZzeVVMeXJ5aEVhTXVXN0xneWx2Z1lyUmxTeFlrZVF0VVRBRFpraVh3dkFVaUp2aHN5UkpjM3JTS1FaY3RXUUxJbXpZeGlMTWxpOWE4S1JkalRyWmswWk0zWldLTXpaWXNpdk9tUkV3SXNpV0xzcno1S2laODJaTEYvN3o1SWliMDJaTEZ4N3g1RnJPRnNpV0xMM2x6TFdiclprc1diM2x6TElheTVSQ1hlWE1raHJMbEdzZDVreEpEMmZJTCtieHRLb2F5cFFpSnZHVVVROWxTenFaNTJ5Q0dzcVViY2Q1V3hWQzJBbVpkM3RKaUtGdG9XTTFiV3N3bkYvcFRoYVV4aUd6YkRrUnc1RWR1Z2IwN0M2RTBQOWVLOEFmbXBpYlN0OExTMjRFTEl2UVN5Y21CeXFKOGRpdGc5MWRHbDhqYUowejlOUTZ6YVVFeEtDZ3NBVUk5SlhuYjJMdWtLUDF1V1V0ay9SUC8rZnNtWEI4ZmhjVzVXYUM4cWNQT1ZrbWUrT2NieWZSQ3lwc2FSTmtTUGkvYkY2SzgrVWVtYkluSUtvWkRlZk5HdG15SmtCSmpRM2x6aG15MmhLOEZGMURlc3VNa1d5SmNpZUZRM3NTNHlaWUkxMkpzS0c4cmVNbVc4T3VCVDJ6bHZIbk5sZ2pmeEhDMld0Nzh5cFlJWDhYWWhEMXZmbWRMK0QxQUlXSE1tNHBzaVZBcWhoT1d2S25NbGdqbFlteE16WnVPYkFtL0wyakdwTHpweXBZSTdXSTQyUE9tTzFzaUFoRmpneTF2UVdWTCtHOEJCR0RJVzVEWkVvRkNEQ2VvdkdISWxnZzBZbXgwNVExVHRrU2dFMk9qTW0vWXNpVUNyUmlPMzNuRG1pMFJxTVhZZU0wYjlteUpNRUtNalp1OG1aQXRFVWFKNGNqbXphUnNpVEJPakUybXZKbVlMUkhHaXJGWm03ZUtuVEVqc3lVaUIwS0FuYmY3eTB0Q0lZVVRDakZoaE1RZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaFlzcEJ3SWJaZWwzVEUvMytZOW5wcWNuZ1FpVWlZbUp5WmFXbHJmWlhXdnRtVDBQZkpCSVBNVGVSQytEb1J4NXBCNE01UWE3dlZWYlc5dmYxOWYzTGJ1L3NPR1VxM2NUaWNwSUNsckJ5bWtDd3pCVVRBKzdIYklzSzduMndRMkQvelB4ZVBMb28vR0RLVmcrdExpNGVBMElKY3pOemZHZmJSMFRVcmRlQ2lmanJPeFlQTjd4Yk1QalQvZC8vMTB2RUw0eFB6Ky8yTlhWOVUxZFhkMWhKcVFuMC9PeW5SZDMrZWZlM3E0L2tsZUdvOFVsVmFXeEdPb3J3TjIzNTI3QXpORFEwTzlOVFUydnQ3ZTNueG9iRzd1MDJYT2RuTlpiOCtyWnN3L0dkbFVjdDVEK3lpekVZMHlTRGVyUHNjSDlGM2Ivc3N3TFhKMXZ6V1p2clJobmJ3akZwR2RiN1BZbXk5WU5KeTkwZGVSL05CNXZYWUxscXFtSmlTK0FFTUlHOXgvWkg5Vk1TS3RUS1J6WFN6Sjg5dmI4VTArZW9vUFQvMk1mSkJZVUZEd2htbTNKNHZXaytEOEgrdnJPZmZuNVp6K1ZWZHl4ZTFkbDFaMFFJRUVPL255MjFkM2QzZFBjM0h5eXM3UHpQZmJRZGZDQVgxY3JTTS9lWm1hbWY5aGJVN1BFRmhUdWhRQUlVQXdYOGlManpIK3pyU1h3aUpLTHJieWZTQnpra3dQZHM3Y0FCdjhrckJ5MTk0RFBLRm4yNXdlbngrSVBWODNQVHArR0VNS3pOVGs1eWY5djFTcWtjSlR1eHh3L2NLRDFuZGRlT1RJOE1EQUFJWUVmSkRZME5Md1VqVVpQdTVsdHlhTDZpamhMNDZPakZ5OTgvVlZmWVhGMHg2MWw1WGR0ejgzTkEwV29IR1A0Ykl1TklSODJOalkyajR5TWRMT0hGa0FodWkvb3BYUnJRZEVZczJGSkhqUVF5SlhXVkcwdEtCRFRBNElsZVIwRXN1ZVBmV3NoMjVLOERnTDlNQWEyclFYWkpYa2RZTGdjbm05YkMxNEdmeWRMOGpyQWRqVlBUMXNMTHNjWXgwdnlPa0I3bVZVM1d3c094Ymhla3RjQjJnLzhxZHhhOExva3J3UFVuOFQwZTJ2QnJ5VjVIWmh3TFZ6cHJZVk1nNy9mUy9JNk1Pa2l4Vm0zRmpLSThYMUpYZ2ZHWG1OZHRMV3didkJQZ3FJbGVSMFkrMm4vVEZzTE9wYmtDVG55cXZmdE8zenl6QnVYQmdjSGY2dXZyMytCUFZZTUJCcHEyRzAzaElSL0FUYUdkK3p2SC9MUUFBQUFBRWxGVGtTdVFtQ0NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwic2V0dGluZ3NCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUovU1VSQlZIZ0I3WmhOVHhOUkZJWmZsQVZ0WE5oQ2xCUldyYmdRRlJPS1lVRklOQm9UbDBSSnVwQ0ZDMGwwdzAvd0o3Z3lZV09pTGtoUUU2SnhZZndCaXNEQ0QxZ0lyVkZoVUQ1YUZxUnRBZ21jYzhNQW5Xa2J6dlJld29SNU5wMTdlK2ZPTytlZXIweGRVMVB6Rm56RUNmaU1ldnRpWmVVZmpqTGtDZXJYZHhZT0JKc21FR3lhUUxCcEFzR21xWWRHSXBFb0JoOE5JUkp0VkdOcllSNmpJeSt4YU0xREYxb3QzSG0xZTFjc0UydHBSWkxtZEtKVmNEeHgzalVYaTdWQ0p5ZkQ0Vk9QK1NLZlg1ZmNoNTdlYStpNGtzVG01Z1lLaFFMNjdxVFFmcW5EdFk0dEhvMDBLdmRnaS9mMFhzZVpzODM0OC9zWEpKQk85VnRuOThPU2JxMnpxeHY5cVh1b2hlZlBoakh6NDl1QjE5ZlVyZDI4ZFJ1MTBwOGFRRU1vQkNsaXdlMFhMNWNFVmpseTJWVVV5VTJxRVNLeHZKY1VjVnF6ckFVU2xDWFJVZGQvUEQ4NjhnS1o5S3dheHhOdHlwS1YxbWJTYzVBaXRqQmJiL2pwRS9WQUoyL0hYdTJLWmZpYVg4QzlSM1puajFWSThlVEQvS0RKaVU4bGM1d3B5Z1VSaTNhNkI5L3JSU3h6UEhvSkxzSEpydElLeGtIRVB1dUVBOHVaRGZoZTNzTUw0c0xoN0JmMmt6alhwbzU2ZWVtL0d2TUw5TjFOMGN1RVM5YnhtSXZNOVBldktCWUxPQWgyNFJCbmlUaUpxcFRXZUg3Zy9pRDViRjZOR3h4Q25XdTU4dVZ5V1VnUUMrYkE0aUNxbHZTckNiWGhUREV0cUhRMlloL21iRkF1VlVuNStPRTl2T0NwSDJiTHZCdDdqZE4wckRQa2gzeXNONmhjT3dQUlpuTGlNNjEvUTUxYkN5NlE3NjZSbjAvUm5CYzhOVCtWZVBCd1NBWGVmakp6czZwSTFJcVJUMVdMMWwvWFhEcjlFenJSS25qcXl6ajF2WHVpYytyb3g2RVRyUzVoa3VEcjVXRVJDRFpOSU5nMGdXRFQrUGZycFYxSmpqcStzL0EyYnJuYnlsOXFBUzRBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJ1cEJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRkpTVVJCVkhnQjdkay9hOEpBR01meFgwcUhPRVlkMnJSVFM1ZTJkQ21GdnBKQ0Y0Y3VEbDM2VWx4YTBLVlFoeFpmU2FGMGFQMHo2U2Jpb0hIenNzVzcweFBCOFo1SEREeGZPQXdYa0EvSEJUd1RsTXRIR1hMVUFYTFdvYnVZVE1iWTUvUk9zSis1VzJFQmN5ZGc3Z1RNbllDNUV6QjNBdVpPd0thejh3dGNYdCtBSTNKd0hKK2crdnlDaDhjS2p1TlRVRWNLZHRqZm4yLzAybi8ybWhwTkJuYllidWNmcmM4bVdsOU5GalFadVBKVVJaTE1MRGFLaW5ZWTlDeVpXalJWZ1RzMSs1N3BydlJETmhqMFVRakROYkQrV2tPYUtvMHZZVFFhd2lmeU01M1pDZzZyVktxSHN0ZGhXUERHYmtZR05sdGd1YklCNm04MU5QUndhSE9QS2pMd0pqWlZjNHY5ZUcvWU9jbzliUFpHdHRySFh1UDI3ajZMaXFXdGVUTm43dmwrdjNPU1BYVGN5UjhwdTByQTNBbVlPd0Z6SjJEdUJNeWRnTGxidjZkelA5LzJ2ZHl0OEFLUmJJN2lPeHRtOXdBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZG93bkJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRmlTVVJCVkhnQjdaZS9TZ05CRU1hL2t4UzNkbmVtME9BVGFOQkNCRjlBTE95REZyR3dPZEhDZ0pWUFlDWEVRaUdWa0Vid2Jmd1RueUFlRmpGMmQ2WFoyYkFoSWVreUF6a3lQN2k3dmRubXg5eTN4MjVRTHEvL28wQ3NvR0NVL0tEWCs4RWlZNVBnbm9YcnNBcExvOExTcUxBMEtpeU5Da3Vqd3RJc3IvRGUvZ0dpS0o2cVU0M211R0FUUGp3NlJuTFZtSkNtTWRWb2pnczI0ZFpUMDk0RG5KMG5DSTFCR0JvblM3WGhIQStCUDlOeG5EaWllQTNKWlFONW5ybDNZMWFkN0YvL0YvUENmdUxZcUd3NlVSSWtVUytiWnhtMnFqdmdvZ1FtTHV6bjc5dE9QdHpmalNKQW5iMit1WFh5WDUvdjRJQXZ3NDlOeERZU3RaTzZFNldyZGxwM3RmWnpDMXl3WnJoaVkwRUxyZlB4Um1zTjI5VmQxKzMwdTR0NThSbG1GU2E4TlAwcEtCNGNzb1FYWnN1d0owMjdlSDFwMndXWXM4bU93eTVNZEpnVzJDeDA4eU9OQ2t1and0S29zRFFxTEkwS1M2UEMwb3kybDM2RHZPZ1Vyc01ENlFsbTJjR25nL2NBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJwbHVzQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFFelNVUkJWSGdCN1ppOWFnSkJFTWYvRjN5Qk14YkJkREZKa1dCU1NEN2VJSStTSWsxS0M3RVFDMHNyUVF2Qmx4QUVIOEFQYkZRcy9LcEVMZlR1RWZSdTRRcUxGVmQzMUlYNXdYSURPeHcvOW9aWjVxeEk1RzREZzdpQllZU0NZTFZhNHByeEtrRThqVHRoRnFhR2hhbGhZV3BZbUpvUU5HUGJZZnorL1l1NFVpNWhNWjlCSjlwUE9QSDVEVHQ4Szlaci9BMjY0UnFtaG9XcFlXRnFsUHR3TkhxUGwvaTdkRDhXZTk2TmY2U3A2TFFhY0YwSEtsakJFSHJvaUpSTVpVU1AxWUhyckpITHBnL0tQV0ZFc3FBUDlYY3BsMFN4a0VmaTQwdTY3NWZCdytPVGlLZmpFU2FUb1RSMzBPOUNGV1ZoL3pQV2ExVjVnbGV6Z2JBdnV6ZjNDTGl0VWNQQzFMQXdOZHFGQjcydTEvb2NzVHJ0Sm5TamZEVmZDdjU3ZVM1WW1Cb1dwb2FGcVRGM2FnNXVrbXZIdUJQZUFnZkFRY1VwUkNnNUFBQUFBRWxGVGtTdVFtQ0NcIixcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBJbnRlcmFjdGlvbkV2ZW50LCBUZXh0dXJlLCBUaWxpbmdTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuICBwdWJsaWMgdGlsZTogVGlsaW5nU3ByaXRlO1xyXG4gIHByaXZhdGUgc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICBwcml2YXRlIGRyYWdnaW5nOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBBcHApIHtcclxuICAgIHRoaXMudGlsZSA9IG5ldyBUaWxpbmdTcHJpdGUoXHJcbiAgICAgIFRleHR1cmUuZnJvbShcImJnXCIpLFxyXG4gICAgICB0aGlzLmFwcC5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIHRoaXMuYXBwLnNjcmVlbi5oZWlnaHRcclxuICAgICk7XHJcbiAgICB0aGlzLnRpbGUuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy50aWxlXHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJEb3duKGUpKVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4gdGhpcy5wb2ludGVyVXAoKSlcclxuICAgICAgLy8gLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoKSA9PiB0aGlzLnBvaW50ZXJPdXQoKSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKGUpID0+IHRoaXMucG9pbnRlck1vdmUoZSkpO1xyXG4gICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy50aWxlKTtcclxuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuYXBwLm9mZnNldC54ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCB8fFxyXG4gICAgICAgIHRoaXMuYXBwLm9mZnNldC55ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueVxyXG4gICAgICApXHJcbiAgICAgICAgdGhpcy5tb3ZlVG9PZmZzZXQoZCk7XHJcbiAgICAgIGlmICh0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueCAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLngpXHJcbiAgICAgICAgdGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnggPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLng7XHJcbiAgICAgIGlmICh0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueSAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkpXHJcbiAgICAgICAgdGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnkgPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1vdmVUb09mZnNldChkOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPiB0aGlzLmFwcC5vZmZzZXQueCkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggLT0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IDwgdGhpcy5hcHAub2Zmc2V0LngpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID0gdGhpcy5hcHAub2Zmc2V0Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IDwgdGhpcy5hcHAub2Zmc2V0LngpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ICs9IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA+IHRoaXMuYXBwLm9mZnNldC54KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA9IHRoaXMuYXBwLm9mZnNldC54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA+IHRoaXMuYXBwLm9mZnNldC55KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSAtPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPCB0aGlzLmFwcC5vZmZzZXQueSlcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPSB0aGlzLmFwcC5vZmZzZXQueTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPCB0aGlzLmFwcC5vZmZzZXQueSkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgKz0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID4gdGhpcy5hcHAub2Zmc2V0LnkpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID0gdGhpcy5hcHAub2Zmc2V0Lnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb2ludGVyRG93bihlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5hcHAuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhcnQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnRpbGUucGFyZW50KTtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gIH1cclxuICBwb2ludGVyVXAoKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8vIHBvaW50ZXJPdXQoKSB7XHJcbiAgLy8gICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgLy8gfVxyXG4gIHBvaW50ZXJNb3ZlKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy50aWxlLnBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5zdGFydC54O1xyXG4gICAgICBjb25zdCB5ID0gbmV3UG9zaXRpb24ueSAtIHRoaXMuc3RhcnQueTtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ICs9IHg7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSArPSB5O1xyXG4gICAgICB0aGlzLnN0YXJ0LnggKz0geDtcclxuICAgICAgdGhpcy5zdGFydC55ICs9IHk7XHJcbiAgICAgIHRoaXMuYXBwLm9mZnNldC54ICs9IHg7XHJcbiAgICAgIHRoaXMuYXBwLm9mZnNldC55ICs9IHk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgSW50ZXJhY3Rpb25FdmVudCwgSVBvaW50RGF0YSwgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBNRU5VIH0gZnJvbSBcIi4vd2lkZ2V0cy9tZW51LndpZGdldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2Uge1xyXG4gIGFwcDogQXBwO1xyXG4gIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbWVudTogTUVOVTtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgY3Vyc29yOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICByZWY6IHN0cmluZztcclxuICBfY29sb3I6IG51bWJlcjtcclxuICBzdGFydDogSVBvaW50RGF0YTtcclxuICBlbmQ6IElQb2ludERhdGE7XHJcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcclxuICBjb25zdHJ1Y3Rvcih7IHJlZiwgY29sb3IsIHgsIHksIHpJbmRleCB9OiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnJlZiA9IHJlZjtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuekluZGV4ID0gekluZGV4O1xyXG4gICAgdGhpcy5jb250YWluZXIuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXIuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zb3J0YWJsZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyXHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJEb3duKGUpKVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKGUpID0+IHRoaXMucG9pbnRlclVwKGUpKVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJPdXQoZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJNb3ZlKGUpKTtcclxuICAgIHRoaXMubWVudSA9IG5ldyBNRU5VKHRoaXMpO1xyXG4gICAgdGhpcy5hcHAuY29udGFpbmVyLmFkZENoaWxkKHRoaXMubWVudSk7XHJcbiAgICB0aGlzLmFwcC5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuICBzZWxlY3QoKSB7XHJcbiAgICBpZiAodGhpcy5hcHAuc2VsZWN0ZWQgIT0gdGhpcykge1xyXG4gICAgICB0aGlzLmFwcC5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgICAgIHRoaXMubWVudS5vcGVuKCk7XHJcbiAgICAgIHRoaXMuYXBwLmV2ZW50c1tcInNlbGVjdFwiXS5mb3JFYWNoKChjYikgPT4gY2IodGhpcykpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgdW5zZWxlY3QoKSB7XHJcbiAgICB0aGlzLm1lbnUuY2xvc2UoKTtcclxuICB9XHJcbiAgcG9pbnRlckRvd24oZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgdGhpcy5zdGFydCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hbHBoYSA9IDAuODtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJzb3IgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAvLyB0aGlzLmNvbnRhaW5lci56SW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UucmVmcykubGVuZ3RoO1xyXG4gIH1cclxuICBwb2ludGVyVXAoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuYWxwaGEgPSAxO1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuc3RhcnQgJiYgdGhpcy5zdGFydC54ICE9IHRoaXMueCAmJiB0aGlzLnN0YXJ0LnkgIT0gdGhpcy55KSB7XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW5kID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgfVxyXG4gIHBvaW50ZXJPdXQoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuYWxwaGEgPSAxO1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgdGhpcy5lbmQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgdGhpcy5zZWxlY3QoKTtcclxuICB9XHJcbiAgcG9pbnRlck1vdmUoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5hcHAubW92ZSAmJiB0aGlzLmFwcC5lZGl0KSB7XHJcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgICAgLy8gdGhpcy54ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuY3Vyc29yLng7XHJcbiAgICAgIC8vIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLmN1cnNvci55O1xyXG4gICAgICBuZXdQb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuY3Vyc29yLng7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55IC0gdGhpcy5jdXJzb3IueTtcclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPj0gMjUpIHtcclxuICAgICAgICB0aGlzLnggKz0gMjU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA8PSAtMjUpIHtcclxuICAgICAgICB0aGlzLnggLT0gMjU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPj0gMTUpIHtcclxuICAgICAgICB0aGlzLnkgKz0gMTU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA8PSAtMTUpIHtcclxuICAgICAgICB0aGlzLnkgLT0gMTU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZW51LnBvc2l0aW9uLnNldCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBzZXQgeCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnkgPSB5O1xyXG4gIH1cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICB9XHJcbiAgc2V0IHpJbmRleChpOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnpJbmRleCA9IGk7XHJcbiAgfVxyXG4gIGdldCB6SW5kZXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIuekluZGV4O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgR3JhcGhpY3MsXHJcbiAgSW50ZXJhY3Rpb25FdmVudCxcclxuICBUZXh0dXJlLFxyXG4gIFRpbGluZ1Nwcml0ZSxcclxuICB1dGlscyxcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBMQUJFTCB9IGZyb20gXCIuL3dpZGdldHMvbGFiZWwud2lkZ2V0XCI7XHJcbmltcG9ydCB7IFNQUklURSB9IGZyb20gXCIuL3dpZGdldHMvc3ByaXRlLndpZGdldFwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50UHJvcHMsXHJcbiAgQ29tcG9uZW50Q29uZmlnLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ09NUE9ORU5UIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBzZWxlY3RUaWxlID0gbmV3IFRpbGluZ1Nwcml0ZShUZXh0dXJlLmZyb20oXCJzZWxlY3RcIikpO1xyXG4gIHByaXZhdGUgc2VsZWN0R3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wcm9wczogQ29tcG9uZW50UHJvcHM7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlID0gbmV3IFNQUklURSgpO1xyXG4gIHByaXZhdGUgX2xhYmVsID0gbmV3IExBQkVMKCk7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy50eXBlID0gXCJjb21wb25lbnRcIjtcclxuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbGVQb3NpdGlvbi54ICs9IGQgLyA2O1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGlsZVBvc2l0aW9uLnkgKz0gZCAvIDY7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICB0aGlzLl9sYWJlbC5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPSB0aGlzLl9sYWJlbC5oZWlnaHQgKyAyMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcblxyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjApO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDQpO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIpO1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3Quc2V0KDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3QoKSB7XHJcbiAgICBpZiAoc3VwZXIuc2VsZWN0KCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLndpZHRoID0gdGhpcy5fc3ByaXRlLndpZHRoICsgMjA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5oZWlnaHQgPSB0aGlzLl9zcHJpdGUuaGVpZ2h0ICsgMjA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54ID0gLXRoaXMuX3Nwcml0ZS53aWR0aCAvIDIgLSAxMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkgPSB0aGlzLl9zcHJpdGUueSAtIDEwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUuYWxwaGEgPSAwLjU7XHJcbiAgICAgIHRoaXMuY3Jvc3ModGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLngsIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55KTtcclxuICAgICAgdGhpcy5jcm9zcyhcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCArIHRoaXMuc2VsZWN0VGlsZS53aWR0aCxcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNyb3NzKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55ICsgdGhpcy5zZWxlY3RUaWxlLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNyb3NzKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54ICsgdGhpcy5zZWxlY3RUaWxlLndpZHRoLFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55ICsgdGhpcy5zZWxlY3RUaWxlLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNlbGVjdFRpbGUpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNlbGVjdEdyYXBoaWNzKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5zZWxlY3QoKSB7XHJcbiAgICBzdXBlci51bnNlbGVjdCgpO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zZWxlY3RUaWxlKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0R3JhcGhpY3MpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgY29uc3QgY2lyY2xlID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICBsZXQgcmFkID0gb2Zmc2V0O1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAocmFkID49IHRoaXMuX3Nwcml0ZS53aWR0aCkge1xyXG4gICAgICAgIHJhZCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgcmFkICs9IGQgLyAyO1xyXG4gICAgICBjb25zdCBvcGFjaXR5ID0gKHRoaXMuX3Nwcml0ZS53aWR0aCAtIHJhZCkgLyB0aGlzLl9zcHJpdGUud2lkdGg7XHJcbiAgICAgIGNpcmNsZS5jbGVhcigpO1xyXG4gICAgICBjaXJjbGUubGluZVN0eWxlKDIsIHRoaXMuX2NvbG9yLCBvcGFjaXR5KTtcclxuICAgICAgY2lyY2xlLmJlZ2luRmlsbCh0aGlzLl9jb2xvciwgb3BhY2l0eSAtIDAuMSk7XHJcbiAgICAgIGNpcmNsZS5kcmF3RWxsaXBzZSh4LCB5LCByYWQsIHJhZCAvIDEuNik7XHJcbiAgICB9KTtcclxuICAgIGNpcmNsZS56SW5kZXggPSAwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBjcm9zcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5saW5lU3R5bGUoMSwgMHhmZmZmZmYsIDEpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5tb3ZlVG8oeCAtIDYsIHkpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5saW5lVG8oeCArIDYsIHkpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5tb3ZlVG8oeCwgeSAtIDYpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5saW5lVG8oeCwgeSArIDYpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBwb2ludGVyTW92ZShlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZyAmJiB0aGlzLmFwcC5tb3ZlICYmIHRoaXMuYXBwLmVkaXQpIHtcclxuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgICBuZXdQb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuY3Vyc29yLng7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnkgPVxyXG4gICAgICAgIG5ld1Bvc2l0aW9uLnkgK1xyXG4gICAgICAgICh0aGlzLl9sYWJlbC5oZWlnaHQgKyB0aGlzLl9zcHJpdGUuaGVpZ2h0ICsgMzAgLSB0aGlzLmN1cnNvci55KTtcclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPj0gMjUpIHtcclxuICAgICAgICB0aGlzLnggKz0gMjU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA8PSAtMjUpIHtcclxuICAgICAgICB0aGlzLnggLT0gMjU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPj0gMTUpIHtcclxuICAgICAgICB0aGlzLnkgKz0gMTU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA8PSAtMTUpIHtcclxuICAgICAgICB0aGlzLnkgLT0gMTU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZW51LnBvc2l0aW9uLnNldCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IENvbXBvbmVudFByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5fc3ByaXRlLnRleHR1cmUgPSBUZXh0dXJlLmZyb20oYCR7cHJvcHMubmFtZX1gKTtcclxuICAgIHRoaXMuX2xhYmVsLnRleHQgPSBwcm9wcy5sYWJlbDtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9sYWJlbCkge1xyXG4gICAgICB0aGlzLl9sYWJlbC5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogQ29tcG9uZW50Q29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JhcGhpY3MsIEludGVyYWN0aW9uRGF0YSwgU3ByaXRlLCBUZXh0dXJlLCB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IExpbmVQcm9wcywgTGluZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2xpbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMSU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfbGluZTogR3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wcm9wczogTGluZVByb3BzO1xyXG4gIHByaXZhdGUgZWRpdFBvaW50czogR3JhcGhpY3NbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9saW5lKTtcclxuICAgIHRoaXMudHlwZSA9IFwibGluZVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludEluTGluZShcclxuICAgIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIG9mZnNldD86IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgTWF0aC5wb3coYi54IC0gYS54LCAyKSArIE1hdGgucG93KGIueSAtIGEueSwgMilcclxuICAgICk7XHJcbiAgICBsZXQgZmFjdG9yID0gc2VnbWVudExlbmd0aCAvIDIgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgaWYgKG9mZnNldCkge1xyXG4gICAgICBmYWN0b3IgPSBvZmZzZXQgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiBmYWN0b3IsIHk6IGEueSArIChiLnkgLSBhLnkpICogZmFjdG9yIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlZ21lbnRzKFxyXG4gICAgcG9pbnRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSxcclxuICAgIHJhZGl1czogbnVtYmVyXHJcbiAgKToge1xyXG4gICAgc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICAgIGVuZDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgYmF6aWVyPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICB9W10ge1xyXG4gICAgcmV0dXJuIHBvaW50cy5yZWR1Y2UoKGFjYywgcG9pbnQsIGkpID0+IHtcclxuICAgICAgaWYgKHBvaW50c1tpIC0gMV0pIHtcclxuICAgICAgICBpZiAoaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogcG9pbnQsXHJcbiAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvaW50c1tpICsgMV0pIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgYmF6aWVyOiBwb2ludCxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgc3RhcnQ6IHBvaW50LFxyXG4gICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSArIDFdLCByYWRpdXMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgdGhpcy5fbGluZS5jbGVhcigpO1xyXG4gICAgdGhpcy5fbGluZS5saW5lU3R5bGUodGhpcy5fcHJvcHMud2lkdGgsIHRoaXMuX2NvbG9yLCAxKTtcclxuICAgIHRoaXMuc2VnbWVudHModGhpcy5fcHJvcHMucG9pbnRzLCB0aGlzLl9wcm9wcy5yYWRpdXMpLmZvckVhY2goKHNlZ21lbnQpID0+IHtcclxuICAgICAgaWYgKCFzZWdtZW50LmJhemllcikge1xyXG4gICAgICAgIHRoaXMuX2xpbmUubW92ZVRvKHNlZ21lbnQuc3RhcnQueCwgc2VnbWVudC5zdGFydC55KTtcclxuICAgICAgICB0aGlzLl9saW5lLmxpbmVUbyhzZWdtZW50LmVuZC54LCBzZWdtZW50LmVuZC55KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fbGluZS5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgIHNlZ21lbnQuc3RhcnQueCxcclxuICAgICAgICBzZWdtZW50LnN0YXJ0LnksXHJcbiAgICAgICAgc2VnbWVudC5iYXppZXIueCxcclxuICAgICAgICBzZWdtZW50LmJhemllci55LFxyXG4gICAgICAgIHNlZ21lbnQuZW5kLngsXHJcbiAgICAgICAgc2VnbWVudC5lbmQueVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9saW5lLmxpbmVTdHlsZSgxLCB0aGlzLl9jb2xvciwgMCk7XHJcbiAgICB0aGlzLl9saW5lLmJlZ2luRmlsbCgweGZmZmZmZiwgMC4wMSk7XHJcbiAgICB0aGlzLl9saW5lLm1vdmVUbyh0aGlzLl9wcm9wcy5wb2ludHNbMF0ueCwgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnkpO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2xpbmUubGluZVRvKHBvaW50LnggKyB0aGlzLl9wcm9wcy53aWR0aCwgcG9pbnQueSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuX2xpbmUubGluZVRvKFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnggLSB0aGlzLl9wcm9wcy53aWR0aCAtIDQwLFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9saW5lLmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRQb2ludHMoKSB7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGksIGFycikgPT4ge1xyXG4gICAgICBjb25zdCBwID0gdGhpcy5wb2ludChwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgdGhpcy5kcmFnUG9pbnQocCwgcG9pbnQpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChwKTtcclxuICAgICAgdGhpcy5lZGl0UG9pbnRzLnB1c2gocCk7XHJcbiAgICAgIGlmIChhcnJbaSArIDFdKSB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5wb2ludEluTGluZShwb2ludCwgYXJyW2kgKyAxXSk7XHJcbiAgICAgICAgY29uc3QgY2VudGVyUG9pbnQgPSB0aGlzLnBvaW50KGNlbnRlci54LCBjZW50ZXIueSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lZGl0UG9pbnRzLnB1c2goY2VudGVyUG9pbnQpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNlbnRlclBvaW50KTtcclxuICAgICAgICB0aGlzLmRyYWdQb2ludChjZW50ZXJQb2ludCwgY2VudGVyLCBpICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIHBvaW50KHg6IG51bWJlciwgeTogbnVtYmVyLCBjZW50ZXI/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBwb2ludCA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgcG9pbnQucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgcG9pbnQubGluZVN0eWxlKDIsIDB4ZmZmZmZmLCAwLjMpO1xyXG4gICAgcG9pbnQubW92ZVRvKDAsIDApO1xyXG4gICAgcG9pbnQubGluZVRvKDAsIC0yMCk7XHJcbiAgICBwb2ludC5saW5lU3R5bGUoMCwgMCk7XHJcbiAgICBwb2ludC5iZWdpbkZpbGwoMHhmZmZmZmYsIDAuMik7XHJcbiAgICBwb2ludC5kcmF3RWxsaXBzZSgwLCAwLCBjZW50ZXIgPyAxNiA6IDI1LCBjZW50ZXIgPyAxNiAvIDEuNiA6IDI1IC8gMS42KTtcclxuICAgIHBvaW50LmVuZEZpbGwoKTtcclxuICAgIHBvaW50LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHBvaW50LmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHBvaW50O1xyXG4gIH1cclxuXHJcbiAgZHJhZ1BvaW50KFxyXG4gICAgcDogR3JhcGhpY3MsXHJcbiAgICBwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxyXG4gICAgZnVyY2F0ZUluZGV4PzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBsZXQgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xyXG4gICAgbGV0IGRyYWcgPSBmYWxzZTtcclxuICAgIHAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICBkYXRhID0gZS5kYXRhO1xyXG4gICAgICBkcmFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hcHAubW92ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAoZnVyY2F0ZUluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcHMucG9pbnRzLnNwbGljZShmdXJjYXRlSW5kZXgsIDAsIHBvaW50KTtcclxuICAgICAgICB0aGlzLmVkaXRQb2ludHMuZm9yRWFjaCgocCkgPT4gdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQocCkpO1xyXG4gICAgICAgIHRoaXMuZWRpdFBvaW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWRkUG9pbnRzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICAgIHRoaXMuZWRpdFBvaW50cy5mb3JFYWNoKChwKSA9PiB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChwKSk7XHJcbiAgICAgICAgdGhpcy5lZGl0UG9pbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5hZGRQb2ludHMoKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwLm1vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkcmFnKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdwID0gZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHAucGFyZW50KTtcclxuICAgICAgICAgIG5ld3AueCA9IG5ld3AueCAtIChuZXdwLnggJSAyNSk7XHJcbiAgICAgICAgICBuZXdwLnkgPSBuZXdwLnkgLSAobmV3cC55ICUgMTUpO1xyXG4gICAgICAgICAgaWYgKGZ1cmNhdGVJbmRleCkge1xyXG4gICAgICAgICAgICBwb2ludCA9IHRoaXMuX3Byb3BzLnBvaW50c1tmdXJjYXRlSW5kZXhdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lZGl0UG9pbnRzLmZvckVhY2goKGVsLCBpLCBhcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZWwgPT09IHAgJiYgaSA+IDAgJiYgaSA8IGFyci5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJbaSAtIDFdLnggPSB0aGlzLnBvaW50SW5MaW5lKGFycltpIC0gMl0sIHApLng7XHJcbiAgICAgICAgICAgICAgICBhcnJbaSAtIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpIC0gMl0sIHApLnk7XHJcbiAgICAgICAgICAgICAgICBhcnJbaSArIDFdLnggPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIHApLng7XHJcbiAgICAgICAgICAgICAgICBhcnJbaSArIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIHApLnk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbCA9PT0gcCAmJiBpID09PSBhcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgYXJyW2kgLSAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBwKS54O1xyXG4gICAgICAgICAgICAgICAgYXJyW2kgLSAxXS55ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBwKS55O1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWwgPT09IHAgJiYgaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYXJyW2kgKyAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSArIDJdLCBwKS54O1xyXG4gICAgICAgICAgICAgICAgYXJyW2kgKyAxXS55ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSArIDJdLCBwKS55O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwb2ludC54ID0gbmV3cC54O1xyXG4gICAgICAgICAgcC5wb3NpdGlvbi54ID0gbmV3cC54O1xyXG4gICAgICAgICAgcG9pbnQueSA9IG5ld3AueTtcclxuICAgICAgICAgIHAucG9zaXRpb24ueSA9IG5ld3AueTtcclxuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KCkge1xyXG4gICAgaWYgKHN1cGVyLnNlbGVjdCgpKSB7XHJcbiAgICAgIHRoaXMuYWRkUG9pbnRzKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB1bnNlbGVjdCgpIHtcclxuICAgIHN1cGVyLnVuc2VsZWN0KCk7XHJcbiAgICB0aGlzLmVkaXRQb2ludHMuZm9yRWFjaCgocCkgPT4gdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQocCkpO1xyXG4gICAgdGhpcy5lZGl0UG9pbnRzID0gW107XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IExpbmVQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIGlmICh0aGlzLl9saW5lKSB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9saW5lKSB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogTGluZUNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBHcmFwaGljcyxcclxuICBJbnRlcmFjdGlvbkRhdGEsXHJcbiAgVGV4dHVyZSxcclxuICBUaWxpbmdTcHJpdGUsXHJcbiAgdXRpbHMsXHJcbn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZVByb3BzLCBQbGFuZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQTEFORSBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3BsYW5lOiBHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3BsYW5lVGlsZSA9IG5ldyBUaWxpbmdTcHJpdGUoVGV4dHVyZS5mcm9tKFwic2VsZWN0XCIpKTtcclxuICBwcml2YXRlIF9wcm9wczogUGxhbmVQcm9wcztcclxuICBwcml2YXRlIHBvaW50ID0gbmV3IEdyYXBoaWNzKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3BsYW5lKTtcclxuICAgIHRoaXMucG9pbnQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy50eXBlID0gXCJwbGFuZVwiO1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICB0aGlzLl9wbGFuZVRpbGUudGlsZVBvc2l0aW9uLnggKz0gZCAvIDI7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZHJhZ1BvaW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgY29uc3QgcmFkID0gKDMxICogTWF0aC5QSSkgLyAxODA7XHJcbiAgICBjb25zdCBhID0gdGhpcy5fcHJvcHMuaCAqIE1hdGguc2luKHJhZCk7XHJcbiAgICBjb25zdCBiID0gdGhpcy5fcHJvcHMuaCAqIE1hdGguY29zKHJhZCk7XHJcbiAgICBjb25zdCBBID0gdGhpcy5fcHJvcHMudyAqIE1hdGguc2luKHJhZCk7XHJcbiAgICBjb25zdCBCID0gdGhpcy5fcHJvcHMudyAqIE1hdGguY29zKHJhZCk7XHJcbiAgICB0aGlzLl9wbGFuZS5jbGVhcigpO1xyXG4gICAgdGhpcy5fcGxhbmUuYmVnaW5GaWxsKHRoaXMuX2NvbG9yLCAwLjA0KTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVTdHlsZSgyLCB0aGlzLl9jb2xvciwgMC41KTtcclxuICAgIHRoaXMuX3BsYW5lLm1vdmVUbygwLCAwKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhiLCAtYSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oYiArIEIsIC1hICsgQSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oQiwgQSk7XHJcbiAgICB0aGlzLl9wbGFuZS5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMuX3BsYW5lLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS54ID0gYjtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS55ID0gLWE7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUud2lkdGggPSB0aGlzLl9wcm9wcy53O1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLmhlaWdodCA9IHRoaXMuX3Byb3BzLmg7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUudGlsZVNjYWxlLnNldCgxLjUsIDEuNSk7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLmFscGhhID0gMC40O1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnNrZXcuc2V0KC0xLjAzLCAoMzEgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9wbGFuZVRpbGUpO1xyXG4gICAgdGhpcy5wb2ludC5wb3NpdGlvbi5zZXQoYiArIEIsIC1hICsgQSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoKSB7XHJcbiAgICBpZiAoc3VwZXIuc2VsZWN0KCkpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB1bnNlbGVjdCgpIHtcclxuICAgIHN1cGVyLnVuc2VsZWN0KCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnBvaW50KTtcclxuICB9XHJcblxyXG4gIGRyYWdQb2ludCgpIHtcclxuICAgIHRoaXMucG9pbnQubGluZVN0eWxlKDIsIDB4ZmZmZmZmLCAwLjMpO1xyXG4gICAgdGhpcy5wb2ludC5tb3ZlVG8oMCwgMCk7XHJcbiAgICB0aGlzLnBvaW50LmxpbmVUbygwLCAtMjApO1xyXG4gICAgdGhpcy5wb2ludC5saW5lU3R5bGUoMCwgMCk7XHJcbiAgICB0aGlzLnBvaW50LmJlZ2luRmlsbCgweGZmZmZmZiwgMC4yKTtcclxuICAgIHRoaXMucG9pbnQuZHJhd0VsbGlwc2UoMCwgMCwgMjUsIDI1IC8gMS42KTtcclxuICAgIHRoaXMucG9pbnQuZW5kRmlsbCgpO1xyXG4gICAgbGV0IGRhdGE6IEludGVyYWN0aW9uRGF0YTtcclxuICAgIGxldCBkcmFnID0gZmFsc2U7XHJcbiAgICBsZXQgc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgdGhpcy5wb2ludFxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGRhdGEgPSBlLmRhdGE7XHJcbiAgICAgICAgZHJhZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHAubW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBkYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wb2ludC5wYXJlbnQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRyYWcpIHtcclxuICAgICAgICAgIGNvbnN0IGVuZCA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBvaW50LnBhcmVudCk7XHJcbiAgICAgICAgICBpZiAoZW5kLnggLSBzdGFydC54ID4gMCB8fCBlbmQueSAtIHN0YXJ0LnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaCArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLncgKz0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaCAtPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLncgLT0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXJ0ID0gZW5kO1xyXG4gICAgICAgICAgLy8gbmV3cC54ID0gbmV3cC54IC0gKG5ld3AueCAlIDI1KTtcclxuICAgICAgICAgIC8vIG5ld3AueSA9IG5ld3AueSAtIChuZXdwLnkgJSAxNSk7XHJcbiAgICAgICAgICAvLyBjb25zdCByYWQgPSAoMzEgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgICAgICAgIC8vIHRoaXMucHJvcHMudyArPSAxO1xyXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5oICs9IDE7XHJcbiAgICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogUGxhbmVQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX3BsYW5lKSB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogUGxhbmVDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1dGlscywgVGV4dCwgVGV4dFN0eWxlRm9udFdlaWdodCB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRleHRDb25maWcsIFRleHRQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RleHQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBURVhUIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfdGV4dCA9IG5ldyBUZXh0KFwiXCIpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBUZXh0UHJvcHM7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgaWYgKHRoaXMuX3Byb3BzLnNrZXcpIHtcclxuICAgICAgdGhpcy5fdGV4dC5za2V3LnNldCgtMS4wMywgKDMxICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5mb250V2VpZ2h0ID0gdGhpcy5fcHJvcHMuZm9udFdpZHRoIGFzIFRleHRTdHlsZUZvbnRXZWlnaHQ7XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZvbnRTaXplID0gdGhpcy5fcHJvcHMuZm9udFNpemU7XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZpbGwgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuX3RleHQudGV4dCA9IHRoaXMuX3Byb3BzLnRleHQ7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl90ZXh0KTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogVGV4dFByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgLy8gdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcbiAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fdGV4dCkge1xyXG4gICAgICB0aGlzLl90ZXh0LnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fdGV4dCkge1xyXG4gICAgICB0aGlzLl90ZXh0LnN0eWxlLmZpbGwgPSB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogVGV4dENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyYXBoaWNzLCBUZXh0LCBUZXh0U3R5bGUsIENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTEFCRUwgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX2NvbG9yOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nID0gXCJcIjtcclxuICBwcml2YXRlIF9sYWJlbFRleHQ6IFRleHQ7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9zdHlsZSA9IG5ldyBUZXh0U3R5bGUoe1xyXG4gICAgbGV0dGVyU3BhY2luZzogMSxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIGZpbGw6IFwiI0EyQTNBN1wiLFxyXG4gICAgd29yZFdyYXA6IHRydWUsXHJcbiAgICB3b3JkV3JhcFdpZHRoOiAxMDAsXHJcbiAgICBsaW5lSm9pbjogXCJyb3VuZFwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dCA9IG5ldyBUZXh0KFwiXCIsIHRoaXMuX3N0eWxlKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC54ID0gMTY7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQueSA9IDQ7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWxUZXh0KTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgdGhpcy5fbGFiZWwuY2xlYXIoKTtcclxuICAgIHRoaXMuX2xhYmVsLmJlZ2luRmlsbCh0aGlzLl9jb2xvcik7XHJcbiAgICB0aGlzLl9sYWJlbC5kcmF3UmVjdCgwLCAwLCA2LCB0aGlzLl9sYWJlbFRleHQuaGVpZ2h0ICsgMTApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fbGFiZWwubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgdGhpcy5fbGFiZWwuYmVnaW5GaWxsKDB4MDAwMDAwLCAxKTtcclxuICAgIHRoaXMuX2xhYmVsLmRyYXdSZWN0KFxyXG4gICAgICA2LFxyXG4gICAgICAwLFxyXG4gICAgICB0aGlzLl9sYWJlbFRleHQud2lkdGggKyAyMCxcclxuICAgICAgdGhpcy5fbGFiZWxUZXh0LmhlaWdodCArIDEwXHJcbiAgICApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcbiAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gXCJcIjtcclxuICAgIGxldCBhY2MgPSAwO1xyXG4gICAgdGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgIGlmIChhY2MgPCAyMCkge1xyXG4gICAgICAgIGFjYyArPSAxO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gXCIgXCI7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnRleHQgPSB0aGlzLl90ZXh0O1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSwgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNRU5VIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIGRlbGV0ZTogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJkZWxldGVCVE5cIikpO1xyXG4gIHByaXZhdGUgY29weTogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJjb3B5QlROXCIpKTtcclxuICBwcml2YXRlIHBvaW50OiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcInBvaW50QlROXCIpKTtcclxuICBwcml2YXRlIHNldHRpbmdzOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcInNldHRpbmdzQlROXCIpKTtcclxuICBwcml2YXRlIHVwOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcInVwQlROXCIpKTtcclxuICBwcml2YXRlIGRvd246IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwiZG93bkJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBlbDogQmFzZTtcclxuICBjb25zdHJ1Y3RvcihlbDogQmFzZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuXHJcbiAgICB0aGlzLnBvaW50LmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5kZWxldGUuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmNvcHkuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLnNldHRpbmdzLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy51cC5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuZG93bi5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMucG9pbnQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5kZWxldGUuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb3B5LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0dGluZ3MuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy51cC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmRvd24uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5wb2ludC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVsZXRlLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb3B5LmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMudXAuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmRvd24uYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5wb2ludC5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5wb2ludCkpO1xyXG4gICAgdGhpcy5wb2ludC5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMucG9pbnQpKTtcclxuICAgIHRoaXMuZGVsZXRlLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLmRlbGV0ZSkpO1xyXG4gICAgdGhpcy5kZWxldGUub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLmRlbGV0ZSkpO1xyXG4gICAgdGhpcy5jb3B5Lm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5jb3B5KSk7XHJcbiAgICB0aGlzLmNvcHkub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuY29weSkpO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5zZXR0aW5ncykpO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuc2V0dGluZ3MpKTtcclxuICAgIHRoaXMudXAub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMudXApKTtcclxuICAgIHRoaXMudXAub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLnVwKSk7XHJcbiAgICB0aGlzLmRvd24ub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuZG93bikpO1xyXG4gICAgdGhpcy5kb3duLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5kb3duKSk7XHJcblxyXG4gICAgdGhpcy5wb2ludC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuYXBwLm9mZnNldCA9IHtcclxuICAgICAgICB4OiB0aGlzLmVsLmFwcC5zY3JlZW4ud2lkdGggLyAyIC0gdGhpcy5lbC5jb250YWluZXIucG9zaXRpb24ueCxcclxuICAgICAgICB5OiB0aGlzLmVsLmFwcC5zY3JlZW4uaGVpZ2h0IC8gMiAtIHRoaXMuZWwuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRlbGV0ZS5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuYXBwLmVsZW1lbnRzU2VydmljZS5yZW1vdmUodGhpcy5lbC5yZWYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb3B5Lm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC5hcHAuc2V0Q29weSgpO1xyXG4gICAgICB0aGlzLmVsLmFwcC5wYXN0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC56SW5kZXggKz0gMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb3duLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC56SW5kZXggLT0gMTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29weS55ID0gMDtcclxuICAgIHRoaXMuc2V0dGluZ3MueSA9IHRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy5kZWxldGUueSA9IHRoaXMucG9pbnQuaGVpZ2h0ICogMjtcclxuICAgIHRoaXMucG9pbnQueSA9IDA7XHJcbiAgICB0aGlzLnBvaW50LnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLnVwLnkgPSB0aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMudXAueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMuZG93bi55ID0gdGhpcy5wb2ludC5oZWlnaHQgKiAyO1xyXG4gICAgdGhpcy5kb3duLnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBob3ZlcihlOiBTcHJpdGUpIHtcclxuICAgIGUuc2NhbGUuc2V0KDAuOSwgMC45KTtcclxuICB9XHJcbiAgdW5ob3ZlcihlOiBTcHJpdGUpIHtcclxuICAgIGUuc2NhbGUuc2V0KDEsIDEpO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZGVsZXRlKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5jb3B5KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5zZXR0aW5ncyk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMudXApO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmRvd24pO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgaWYgKHRoaXMuZWwuYXBwLmVkaXQpIHtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmRlbGV0ZSk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jb3B5KTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnVwKTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmRvd24pO1xyXG4gICAgICB0aGlzLnBvaW50LnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICAgIHRoaXMucGl2b3Quc2V0KHRoaXMucG9pbnQuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLSAyMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMucG9pbnQpO1xyXG4gICAgICB0aGlzLnBvaW50LnggPSAwO1xyXG4gICAgICB0aGlzLnBpdm90LnNldCgwLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMuekluZGV4ID0gdGhpcy5lbC5hcHAuY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIHRoaXMucG9zaXRpb24uc2V0KHRoaXMuZWwueCwgdGhpcy5lbC55KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNQUklURSBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBTcHJpdGU7XHJcbiAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fb2Zmc2V0ID0gMTA7XHJcbiAgICB0aGlzLnN3aW5nKCk7XHJcbiAgfVxyXG5cclxuICBzd2luZygpIHtcclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICB3aW5kb3cub2lzLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGUucG9zaXRpb24ueSA+PSB0aGlzLl9vZmZzZXQpIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zcHJpdGUucG9zaXRpb24ueSA8PSAwKSBmbGFnID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZmxhZykgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgKz0gZCAvIDU7XHJcbiAgICAgICAgZWxzZSB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSAtPSBkIC8gNTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgdGV4dHVyZSh0ZXh0dXJlOiBUZXh0dXJlKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xyXG4gICAgdGhpcy5waXZvdC5zZXQodGhpcy5fc3ByaXRlLndpZHRoIC8gMiwgMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBDb250YWluZXIsIExvYWRlciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9lbGVtZW50cy9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZWxlbWVudHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gXCIuL2VsZW1lbnRzL2JhY2tncm91bmQuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2NvbXBvbmVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgYmFzZUFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy9iYXNlXCI7XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIG9pczogQXBwO1xyXG4gIH1cclxuICBpbnRlcmZhY2UgQ29udGFpbmVyIHtcclxuICAgIGludGVyYWN0aXZlOiBib29sZWFuO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQXBwbGljYXRpb24ge1xyXG4gIHB1YmxpYyBvZmZzZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xyXG4gIHB1YmxpYyBlbGVtZW50c1NlcnZpY2UgPSBuZXcgRWxlbWVudHNTZXJ2aWNlKHRoaXMpO1xyXG4gIHB1YmxpYyBjb25maWdTZXJ2aWNlID0gbmV3IENvbmZpZ1NlcnZpY2UodGhpcyk7XHJcbiAgcHVibGljIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICBwcml2YXRlIF9zZWxlY3RlZDogQmFzZTtcclxuICBwdWJsaWMgY29weTogQmFzZTtcclxuICBwdWJsaWMgbG9hZGVyOiBMb2FkZXI7XHJcbiAgcHJpdmF0ZSBkaXY6IEVsZW1lbnQ7XHJcbiAgcHVibGljIGJhY2tncm91bmQ6IEJhY2tncm91bmQ7XHJcbiAgcHVibGljIF9lZGl0OiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgbW92ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGV2ZW50czoge1xyXG4gICAgc2VsZWN0OiAoKGVsOiBCYXNlKSA9PiB2b2lkKVtdO1xyXG4gIH0gPSB7XHJcbiAgICBzZWxlY3Q6IFtdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHsgYW50aWFsaWFzOiB0cnVlLCBiYWNrZ3JvdW5kQ29sb3I6IDB4MDAwMDAwIH0pO1xyXG4gICAgdGhpcy5kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGlmICghdGhpcy5kaXYpIHtcclxuICAgICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcclxuICAgIH1cclxuICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKHRoaXMudmlldyk7XHJcbiAgICB0aGlzLmxvYWRlciA9IExvYWRlci5zaGFyZWQ7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zb3J0YWJsZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgIHRoaXMua2V5Ym9hcmQoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgdGhpcy50aWNrZXIuYWRkKCgpID0+IHtcclxuICAgICAgdGhpcy5zaXppbmcoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBrZXlib2FyZCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmVkaXQgJiYgZS5jb2RlID09PSBcIkRlbGV0ZVwiICYmIHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5yZW1vdmUodGhpcy5zZWxlY3RlZC5yZWYpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmNvZGUgPT09IFwiS2V5Q1wiICYmIGUuY3RybEtleSAmJiB0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29weSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmNvZGUgPT09IFwiS2V5VlwiICYmIGUuY3RybEtleSAmJiB0aGlzLmNvcHkpIHtcclxuICAgICAgICB0aGlzLnBhc3RlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlaXCIgJiYgZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnVuZG8oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldENvcHkoKSB7XHJcbiAgICB0aGlzLmNvcHkgPSB0aGlzLnNlbGVjdGVkO1xyXG4gIH1cclxuICBwYXN0ZSgpIHtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZCh0aGlzLmNvcHkudHlwZSwge1xyXG4gICAgICAuLi4odGhpcy5jb3B5LmNvbmZpZyBhcyBDb21wb25lbnRDb25maWcpLFxyXG4gICAgICB4OiB0aGlzLmNvcHkueCArIDEwMCxcclxuICAgICAgcmVmOiB0aGlzLmNvcHkucmVmICsgRGF0ZS5ub3coKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkKGNvbmZpZzogQ29uZmlnLCBjYjogKG9pczogQXBwKSA9PiB2b2lkKSB7XHJcbiAgICBiYXNlQXNzZXRzLmZvckVhY2goKHNwcml0ZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlci5hZGQoc3ByaXRlLm5hbWUsIHNwcml0ZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmFzc2V0cy5mb3JFYWNoKChzcHJpdGUpID0+IHtcclxuICAgICAgdGhpcy5sb2FkZXIuYWRkKHNwcml0ZS5uYW1lLCBzcHJpdGUuZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubG9hZGVyLmxvYWQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgICAgY2IodGhpcyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaXppbmcoKSB7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5kaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB0aGlzLnZpZXcud2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgdGhpcy52aWV3LmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zY3JlZW4ud2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgdGhpcy5zY3JlZW4uaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLmJhY2tncm91bmQudGlsZS53aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLmJhY2tncm91bmQudGlsZS5oZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICB9XHJcblxyXG4gIHNldCBjb25maWcoY29uZmlnOiBDb25maWcpIHtcclxuICAgIHRoaXMub2Zmc2V0ID0gY29uZmlnLm9mZnNldDtcclxuICAgIC8vIHRoaXMuYmFja2dyb3VuZC50aWxlLnRpbGVQb3NpdGlvbi54ID0gY29uZmlnLm9mZnNldC54O1xyXG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kLnRpbGUudGlsZVBvc2l0aW9uLnkgPSBjb25maWcub2Zmc2V0Lnk7XHJcbiAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5yZWZzID0ge307XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgY29uZmlnLnBsYW5lcy5mb3JFYWNoKChwbGFuZSkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJwbGFuZVwiLCBwbGFuZSk7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZy5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcImxpbmVcIiwgbGluZSk7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJjb21wb25lbnRcIiwgY29tcG9uZW50KTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwidGV4dFwiLCB0ZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKGVsOiBCYXNlKSB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHRoaXMuX3NlbGVjdGVkLnVuc2VsZWN0KCk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBlbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIGdldCByZWZzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlZnM7XHJcbiAgfVxyXG5cclxuICBzZXQgZWRpdChlZGl0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9lZGl0ID0gZWRpdDtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQubWVudS5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVkaXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWRpdDtcclxuICB9XHJcblxyXG4gIG9uKGV2ZW50OiBrZXlvZiBBcHBbXCJldmVudHNcIl0sIGNiOiAoZWw6IEJhc2UpID0+IHZvaWQpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoc2VsZWN0b3I6IHN0cmluZykge1xyXG4gIHdpbmRvdy5vaXMgPSBuZXcgQXBwKHNlbGVjdG9yKTtcclxuICByZXR1cm4gd2luZG93Lm9pcztcclxufVxyXG4iLCJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBhcHA6IEFwcDtcclxuICBwdWJsaWMgaGlzdG9yeTogeyBzZWxlY3RlZDogc3RyaW5nIHwgbnVsbDsgY29uZmlnOiBDb25maWcgfVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICB9XHJcblxyXG4gIGRvKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmhpc3RvcnkubGVuZ3RoIDw9IDIwICYmXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSAhPT1cclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHtcclxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxyXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmFwcC5zZWxlY3RlZD8ucmVmLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVuZG8oKSB7XHJcbiAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIHRoaXMuaGlzdG9yeS5wb3AoKTtcclxuICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICB0aGlzLmFwcC5jb25maWcgPSBwb2ludC5jb25maWc7XHJcbiAgICAgIC8vIGlmIChwb2ludC5zZWxlY3RlZCkge1xyXG4gICAgICAvLyAgIHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5yZWZzW3BvaW50LnNlbGVjdGVkXS5zZWxlY3QoKTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgeDogdGhpcy5hcHAub2Zmc2V0LngsXHJcbiAgICAgICAgeTogdGhpcy5hcHAub2Zmc2V0LnksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5jb21wb25lbnRzLFxyXG4gICAgICBsaW5lczogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLmxpbmVzLFxyXG4gICAgICBwbGFuZXM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5wbGFuZXMsXHJcbiAgICAgIHRleHRzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UudGV4dHMsXHJcbiAgICAgIGFzc2V0czogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLmFzc2V0cyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IENPTVBPTkVOVCB9IGZyb20gXCIuLi9lbGVtZW50cy9jb21wb25lbnQuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMSU5FIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2xpbmUuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQTEFORSB9IGZyb20gXCIuLi9lbGVtZW50cy9wbGFuZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFRFWFQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdGV4dC5lbGVtZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50Q29uZmlnLFxyXG4gIENvbXBvbmVudFByb3BzLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTGluZUNvbmZpZywgTGluZVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbGluZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgUGxhbmVDb25maWcsIFBsYW5lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGFuZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVGV4dENvbmZpZywgVGV4dFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGV4dC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbGVtZW50c1NlcnZpY2Uge1xyXG4gIHB1YmxpYyByZWZzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBDT01QT05FTlQgfCBMSU5FIHwgVEVYVCB8IFBMQU5FO1xyXG4gIH0gPSB7fTtcclxuICBwdWJsaWMgYXBwOiBBcHA7XHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIGNvbmZpZzogQ29tcG9uZW50Q29uZmlnIHwgVGV4dENvbmZpZyB8IFBsYW5lQ29uZmlnIHwgTGluZUNvbmZpZ1xyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLnJlZnNbY29uZmlnLnJlZl0pIHtcclxuICAgICAgbGV0IGVsOiBDT01QT05FTlQgfCBMSU5FIHwgVEVYVCB8IFBMQU5FO1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiY29tcG9uZW50XCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBDT01QT05FTlQoY29uZmlnLCB0aGlzLmFwcCk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBDb21wb25lbnRQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBURVhUKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgVGV4dFByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInBsYW5lXCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBQTEFORShjb25maWcsIHRoaXMuYXBwKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIFBsYW5lUHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGluZVwiOlxyXG4gICAgICAgICAgZWwgPSBuZXcgTElORShjb25maWcsIHRoaXMuYXBwKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIExpbmVQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnNbY29uZmlnLnJlZl0gPSBlbDtcclxuICAgICAgcmV0dXJuIHRoaXMucmVmc1tjb25maWcucmVmXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgYEluIHNjaGVtYSBjb25maWd1cmF0aW9uIGxpbmsgXCIke1xyXG4gICAgICAgICAgY29uZmlnLnJlZlxyXG4gICAgICAgIH1cIiBpcyBkdXBsaWNhdGVkLiAke0pTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMil9XCJgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKHJlZjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5yZWZzW3JlZl0pIHtcclxuICAgICAgdGhpcy5hcHAuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucmVmc1tyZWZdLmNvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuYXBwLnNlbGVjdGVkID0gbnVsbDtcclxuICAgICAgZGVsZXRlIHRoaXMucmVmc1tyZWZdO1xyXG4gICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEVsZW1lbnRzT2ZUeXBlKHR5cGU6IFwiY29tcG9uZW50XCIgfCBcImxpbmVcIiB8IFwidGV4dFwiIHwgXCJwbGFuZVwiKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5yZWZzKVxyXG4gICAgICAuZmlsdGVyKChrZXkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWZzW2tleV0udHlwZSA9PT0gdHlwZTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcCgoa2V5KSA9PiB0aGlzLnJlZnNba2V5XS5jb25maWcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbXBvbmVudHMoKTogQ29tcG9uZW50Q29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJjb21wb25lbnRcIikgYXMgQ29tcG9uZW50Q29uZmlnW107XHJcbiAgfVxyXG5cclxuICBnZXQgbGluZXMoKTogTGluZUNvbmZpZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzT2ZUeXBlKFwibGluZVwiKSBhcyBMaW5lQ29uZmlnW107XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dHMoKTogVGV4dENvbmZpZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzT2ZUeXBlKFwidGV4dFwiKSBhcyBUZXh0Q29uZmlnW107XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhbmVzKCk6IFBsYW5lQ29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJwbGFuZVwiKSBhcyBQbGFuZUNvbmZpZ1tdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFzc2V0cygpOiB7IG5hbWU6IHN0cmluZzsgZGF0YTogc3RyaW5nIH1bXSB7XHJcbiAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoY29tcG9uZW50LnByb3BzLm5hbWUpKSB7XHJcbiAgICAgICAga2V5cy5wdXNoKGNvbXBvbmVudC5wcm9wcy5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ga2V5cy5tYXAoKG5hbWUpID0+ICh7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBkYXRhOiB1dGlscy5UZXh0dXJlQ2FjaGVbXCJzZXJ2ZXJcIl0uYmFzZVRleHR1cmUucmVzb3VyY2UudXJsLFxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==