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
    LINE.prototype.drawLine = function () {
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
    LINE.prototype.addEditPoints = function () {
        var _this = this;
        this._props.points.forEach(function (point, i, arr) {
            var p = _this.point(point.x, point.y);
            _this.container.addChild(p);
            _this.editPoints.push(p);
            p.on("pointerdown", function (e) { return _this.pointDown(p, point, e); });
            p.on("pointerup", function () { return _this.pointUp(); });
            p.on("pointerupoutside", function () { return _this.pointOut(); });
            p.on("pointermove", function () { return _this.pointMove(); });
            if (arr[i + 1]) {
                var center_1 = _this.pointInLine(point, arr[i + 1]);
                var centerPoint = _this.point(center_1.x, center_1.y, true);
                _this.editPoints.push(centerPoint);
                _this.container.addChild(centerPoint);
                centerPoint.on("pointerdown", function (e) { return _this.centerDown(center_1, e, i + 1); });
            }
        });
    };
    LINE.prototype.point = function (x, y, center) {
        var point = new pixi_js_1.Graphics();
        point.position.set(x, y);
        point.beginFill(0xffffff, center ? 0.05 : 0.2);
        point.drawEllipse(0, 0, center ? 16 : 25, center ? 16 / 1.6 : 25 / 1.6);
        point.endFill();
        point.lineStyle(2, 0xffffff, 0.5);
        if (center) {
            point.moveTo(-10, -10 / 1.6);
            point.lineTo(10, 10 / 1.6);
            point.moveTo(10, -10 / 1.6);
            point.lineTo(-10, 10 / 1.6);
        }
        else {
            point.moveTo(0, 0);
            point.lineTo(0, -20);
        }
        point.lineStyle(0, 0);
        point.interactive = true;
        point.buttonMode = true;
        return point;
    };
    LINE.prototype.removePoints = function () {
        var _this = this;
        this.editPoints.forEach(function (p) {
            _this.container.removeChild(p);
        });
        this.editPoints = [];
    };
    LINE.prototype.pointDown = function (graphics, point, e) {
        this.app.move = false;
        this.selectedPoint = {
            graphics: graphics,
            point: point,
            data: e.data,
        };
    };
    LINE.prototype.pointUp = function () {
        this.app.move = true;
        this.selectedPoint = null;
        this.removePoints();
        this.addEditPoints();
    };
    LINE.prototype.pointMove = function () {
        var _this = this;
        if (this.selectedPoint) {
            var newCoords_1 = this.selectedPoint.data.getLocalPosition(this.selectedPoint.graphics.parent);
            newCoords_1.x = newCoords_1.x - (newCoords_1.x % 25);
            newCoords_1.y = newCoords_1.y - (newCoords_1.y % 15);
            this.selectedPoint.graphics.x = newCoords_1.x;
            this.selectedPoint.graphics.y = newCoords_1.y;
            this.selectedPoint.point.x = newCoords_1.x;
            this.selectedPoint.point.y = newCoords_1.y;
            this.editPoints.forEach(function (point, i, arr) {
                if (point === _this.selectedPoint.graphics &&
                    i > 0 &&
                    i < arr.length - 1) {
                    arr[i - 1].x = _this.pointInLine(arr[i - 2], newCoords_1).x;
                    arr[i - 1].y = _this.pointInLine(arr[i - 2], newCoords_1).y;
                    arr[i + 1].x = _this.pointInLine(arr[i + 2], newCoords_1).x;
                    arr[i + 1].y = _this.pointInLine(arr[i + 2], newCoords_1).y;
                }
                else if (point === _this.selectedPoint.graphics &&
                    i === arr.length - 1) {
                    arr[i - 1].x = _this.pointInLine(arr[i - 2], newCoords_1).x;
                    arr[i - 1].y = _this.pointInLine(arr[i - 2], newCoords_1).y;
                }
                else if (point === _this.selectedPoint.graphics && i === 0) {
                    arr[i + 1].x = _this.pointInLine(arr[i + 2], newCoords_1).x;
                    arr[i + 1].y = _this.pointInLine(arr[i + 2], newCoords_1).y;
                }
            });
            this.drawLine();
        }
    };
    LINE.prototype.pointOut = function () {
        this.selectedPoint = null;
        this.removePoints();
        this.addEditPoints();
    };
    LINE.prototype.centerDown = function (point, e, i) {
        this._props.points.splice(i, 0, point);
        this.removePoints();
        this.addEditPoints();
        // this.editPoints[i + 2].emit("pointerdown", e);
    };
    LINE.prototype.select = function () {
        if (_super.prototype.select.call(this)) {
            this.addEditPoints();
            return true;
        }
        return false;
    };
    LINE.prototype.unselect = function () {
        _super.prototype.unselect.call(this);
        this.removePoints();
        this.app.move = true;
    };
    Object.defineProperty(LINE.prototype, "props", {
        get: function () {
            return this._props;
        },
        set: function (props) {
            this._props = props;
            if (this._line)
                this.drawLine();
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
                this.drawLine();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLENBQVM7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLENBQW1CO1FBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQs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LENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxRQUFDO2dCQUN6QixJQUFJLEVBQUUsSUFBSTtnQkFDViw2REFBNkQ7Z0JBQzdELGFBQWE7Z0JBQ2IsSUFBSSxFQUFFLGVBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHO2FBQzVELENBQUMsRUFMd0IsQ0FLeEIsQ0FBQyxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFDSCxzQkFBQztBQUFELENBQUM7QUE3RlksMENBQWU7Ozs7Ozs7Ozs7O0FDZDVCOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvYXNzZXRzL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2JhY2tncm91bmQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvYmFzZS5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9jb21wb25lbnQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvbGluZS5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9wbGFuZS5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy90ZXh0LmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvbGFiZWwud2lkZ2V0LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy93aWRnZXRzL21lbnUud2lkZ2V0LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy93aWRnZXRzL3Nwcml0ZS53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvc2VydmljZXMvZWxlbWVudHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9PSVMvZXh0ZXJuYWwgdW1kIHtcImNvbW1vbmpzXCI6XCJwaXhpLmpzXCIsXCJjb21tb25qczJcIjpcInBpeGkuanNcIixcInVtZFwiOlwicGl4aS5qc1wiLFwic2NyaXB0XCI6XCJQSVhJXCIsXCJyb290XCI6XCJQSVhJXCJ9Iiwid2VicGFjazovL09JUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL09JUy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGl4aS5qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJPSVNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJwaXhpLmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPSVNcIl0gPSBmYWN0b3J5KHJvb3RbXCJQSVhJXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXykgPT4ge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBiYXNlQXNzZXRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwic2VsZWN0XCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBWUFBQUNvWUFEMkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFET1NVUkJWSGdCN2RqTkRZTXdEQVhnTndJak1FSkhZUVBZcE4yazNZQlJPZ0lqZEFUWGxueXBWTVU1Uk9RQnRtUnh5RHQ4Q2o4aEFmNlVpTnkwTjd1aVVEbytldTRSNUFidHQvWUxRV25tN3RtaEZFcmcwWUhiRVlBajlnSjZkbTBHOUdCcjRMTWxVTWRuc0FNdEIzWmc5S3oyQm42S2R6bUJDVXdnTjNBS2dSN3NCYXhlanNFT2xHakZZUUNHazVqQVJzQVY1TUR5WGlPQkNid3kwTVBVUUp0RXNBTWwrbFluTUlHL1FQdGhuVUFPWExBemNFN2dxWUVlcEFiYWV3SjJvRlFlL1hVRlN1WFIzNExPd0M4TkswN2hSZlF6WEFBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiYmdcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUE4Q0FZQUFBQ1FQeC9PQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWFaU1VSQlZIZ0I1VnhCVHh3M0ZINWVRSzBhRUFPcG1raHRKUzhuQkVSZGZrSEpMMmo0QllGZmtPVFVJOHVwUitBWExEbjFDRGxGUFMzOEFrQWhWZHBEZDNxTDBrcWRTQ0JSQldieW5qMlpYV0IzeGpOano5aktKNjFZZHIwejl0aiszbnVmbjgwZ0J1ZnozUGZmK09BSWVIT3hCOEQ0OEc4ajMrKzlib0lqNEp4N0FCNzQvbkhRa0IvTWMyQmpYVDYzMkJIdkxZZG9RQVFIK0RiQXY4ZkpGeEh6eFY4RysrQUlPRjlZQXphRmcrdi9GZnFmOWIrZ2poaC9Db3o5aEkxODV2dXZyR3dVNTBzcldNY09SSkVQY0xsK2MxYkxkb3kxZ1RWK2hPaHEwL2QvM3dVTGdSM1J3anB1NGJNbVlEMVBEMFlVbk9laTBaWkIxS3U1MUNXcVVxa2ZqVHhSMXRKWkw1L3o0bE1vQXNseDlZRHV6ZWVXTm5qekFYVkVPMjlkeEcrYVN4RmRBeHpBV0ZZQnpsc2VzSWtqei92NmZSRDhjd3dWUXRMVEZ5OXhXbU1uWEs0aS9ld0hRWENSNXhwQjhPN0E4MmFmbzMxWjlXYnViOVhUam9XV04zUHZWN3ozQ2Q3N2JWcFpCZ3FRUm45OEQ0dWpNZjN3MExRM0Z0K3ZnMWFhNDROY0g4bXZ1YTlMQnBSdFlLc1BJQ1Q3WXJvZE9Kc2JVeHRvNzlid2hmZDd2WjMxbXdZb2dDcnU5MDZYeVVpaTRWOERRL2hFVHpnanV6Z3JEaUU2WDliVkdRUXk4TUlkRHRuZjJPRTk4elIyWnczQ2lFRjAxbFRwRElMU0RLa0NXZDZUL3Z1NTRZM2xCcDk3c0ZmR2k4bnJQZW1HTG04c2NUN0k1cGFBRW1XbElyeDZVU1NvTkUxUHF0QkJZMGx3RjhJTXhhcGxvSVd5K2tFbC9JQzI1bUYyK1dycFNSVkZhQXdaWWd2dFJBdlNnanRiVVRjOXFTSVBqZW1PMFRMamtES2dobm5lM2NEekpzR2IvZTVudk4wMjB0TUxnSE9jRlgrK0FVdEJjUXErZHJ6cGU4czRXL2E4Mlc4ZytPL2RJWDFIQXdsakc3OWZObDljbEFXalhoWkZ5VWhOajhVL2x0R1RLcTdSR0tySVVuc2FYeVZsRmd5Z3ZGRWZBUm5jQVRZaUJQbUNROWM2Z3hEWEdTUDd5Qk9CYW9NRzFvVXhLVWw3aHd6MW5zVGF4SmxTWUdRbnJ2WkZjRmRCVUttVnNsUzlKMGtEalJXcnBYRUlnL1Q2bXdrcXRSaDFxaUFLZDN2QVNMTUIwcDQyZytEZmtSenJlZmR4TFFDMjBGaTJ2T203SjJsbHF3VE5ibS8yKzE5d25OSnMvbU9VQ0VuMXhlLzJTYWdrYlV4bk8wcFJWdEhnanNyMHB6OEdsU1dqVzIxZ1UwZDk3U2w3MUZldmphV0E2Q2xlbytpNnNPeXJnakl4UmJ6Z3RDdWZDVWJ1QlpIYmhwaVN4cE5ydzlnVE5LSTcxVWpqazA4Z0hOL1I2Y0tXbGZpVkthc0s3VWxXbnIwM1BmMTFhazgzVVpiR0ZCZW9hcExHNGFxdCsxN0NYalV1TzlnWk82YTFweUxlR011OG9DRjYrcHlRaDhZYXd5OWdoelIrclU1a0xBdEs0eWhvSHRYcHllV2hzVnN6eEExcFBEdHZURG52cVdJbzA1aFQwcmlJcExQS2xjaDdxZ0NqSkg1R09Vc2d4RE9HOWlMY2gvQWNSNTl2UmVTc0FxTFhUL1VkZk84S2NQQnZJMCtocTA5cHNCRWZqei9IRVlmOUVwRys1RmFEQUw1NmhQWmxRMGpqakdnVzFzRWxVT3F1NEZWMG5PQ1dVUS9CUFRBdmtjYkphRHFINjg5Y2RvaURXZU45REVqamNMa0xEbUZZRnYrTjdIZEhzc1pCdUpMSDZlVnNsL2lIZTdORDNONXEweTFWY1QwdE0zeVc5YUJsZzZPT2ZlMUlEN1p2QllaV1NjcURZSlBkZk5LNFhSSy9sbUJibDZTc0E3clRiYXBFbnFVS1JYR3hqcXh4L2RKNGNtMjRzMUdOeEo5ZkMxVE1mcStPeGt4SzR3UVpaNW1WK012UVU3RUZLa1BlV0MzU3VHYUp2NndXV0RqcnhGWnZyQzdvV3Fvb25PU2dLMnU4Ym1sOEVFVWtmcTU1cVVKajlyczZqYmtoamF0SS9IWXVWU1JRelJxbkRyRmVHayt0dnh0TEZRbUdiVVYyTzQ2UWRlY2x0Mmlyd0ZqMis1Q3M4Uk9rSm10blJScXF6T0kzbHYwdUt0eGd2WUdzOFdrWEUrcXVaL0ZIQVhhTTBVTjZqSFdJUUVoZVJ6Vlo0N294UEl1ZnRvWkhiaTJBcGNFbWJTd05lYlFuM1haRWs5dWJTT01yWWhSbGxyZFY0czhmM0lsTm54RTgwblhDUmVudENQTGhmdmtTTytNRTRHeGRaYzlkMmg2K09pQzNJUlRiQTRuMS9rMXVTMmgwNUxhRWJ3K0Q0SzNXZlllNVFGa1RaWHp4dW1sTVZ4Wi9mS3hWRzByQ29xTTFxcGI0N1V5VHplVmxpUWpXa0pkVWxjU3ZXM3RLdnhjOXIzd25YQ2gxaUpBNlVDckE0bytGSzJzUStIRGFFRjFpeDBSTjNUUW10U2ZhSlFVcjBnaWZ0czNtb1lVNDIybnRaYUtyMm81TXlwSUhtSDA0d3RHMG8zckVrQzdvb3JHNjZTazVieXdLMTdPeVpheXhJV21RMGdWUXg3VDl2MDQzMVg4WEx3VkhqQTRRZTA1YnMyM1B6QnlXQnFTVTkxUTE4a3Y4ZGt2am8vTEdCaExsOHVVOTFZVXNHbk5sazlHb1l4TlovOHVKbzNoYXQyMmYxb1NiV2VQeHg4NWw4U2NETEI0OEF6TmtvV1ViVGFXQlBMQ0JqcmdCNXZ1OVZ3NGROVTcwZFJIUUFQb0lRSFVQb3A3TGhWRUFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInNlbGVjdGVkVGlsZVwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQThDQVlBQUFDUVB4L09BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBUWpTVVJCVkhnQjdadzlUOXRBR01mLzU3aEZxa0lITnZxaU1yUVNROVVCaVptaFg0Q0ZMVWl3WnVuWW9XdVhyaDNvQ0ZMWVdQZ0VsZG9WbGFIcVFOVU9WQlRhcFIwSW9JYkV2ajRtQ1lUd0pMbkVML2Rja3A4VTJWeWM1T3gvN25lUFl3c0Z4eWtXZGY3MEZBcytVRDQrdys3V2xqcUJ3eWc0eXRLU3ZwM1A0Nm11WVpaMjRrL1VSc3RwN2VQeitycmFoYU00R1VpaG9LZDloUVZhUFZjKzlzTVFsYWpkOHpDaFFqeWd2KzhnaDA4Ykcrb2JITU9wUUpwNlVncFRkTkMvMC9LWTJ5NElNT1g3bU1scC9IQk5ZMDRFMHE2bjBNTlBrOWQ1TkZwYzA1ajRRRHJweVJUWE5DWTJFRk05bWVLS3hzUUZNcWllVEpHdU1WR0J4TldUS1pJMUppS1FwUFZraWtTTldRMGtiVDJaSWtsajFnTEpTayttU05GWTVvSFkwcE1wdGpXV1dTQlM5R1NLTFkxbEVvZzBQWmxpUTJPcEJpSmRUNlprcWJGVUFuRk5UNlprb2JIRUEzRlZUNmFrcmJIRUFoa1dQWm1TbHNaaUJ6S3NlaklsYVkzRkNtVFk5V1JLa2hvYktKQlIwNU1wU1dpc3IwQkdYVStteE5HWWNTQmpQZlhIb0JyckdjaFlUL0hvVjJNZEE1R21KOUxBT2kzbTZYRVlBdS9nWWJ2bmkwSXNlZ29GNkl0OUtBVWUzc0FTcGhwakE1R29KeHIrTDZtenl5MU5lOVN2Ri9CeHlHdzdUOXNXVVErd2pzWk9tTU1xTEdLaXNXdUJpTmRUOUkzWGRLQVY3aldiYUFlMmc1QkdEQVdqYXBqMGNpaHEzUktjeHBGV2VLVTk3RUFJM1RSMkVZaHIxWk1LVUtRdlMzVFFKeHROaHhwNFQzMWZiR2tyVXpBbENxcEV5eklFd21sTXVWbzlxV2lVUk1IVVE3aitISTBhMHRNYUJYRUU0YlJyektPaGs2ZWQwL1FJcWxVNGc2NTJyeEI3UFMrRjZKaFRHSDZVUWEyR2s4dE9yeGIwSEkyUVoxVEIvS1p2MWdHRTBwZ25saHZ6eEpXZWFGUW9qZWN0ODB1WmRySVVLS3hCS05TL2h6VEtwNmpmZXljVmZLRzU1UHpHcEY0NXhSeE5rbzlvK096VFR2K0ZJQnJWMDJ0YXZkOXNveUJLcU91cDNFRmo1bVZ5UmxCZjcxSng4amc2dm1jVmZMZ3hxYmV6c3FLZjBNN1AwZXEvYW9pRFhNNyt2Tkp5SGxLSHlsaXFudGE0NmlrS2hpYit0N1E2ZTlsbStUd2tncXFyQ1pxdlo2aC90K2k0ZnR6Y1ZML2F0K25xV1VrYXV6d1AwZmdha29xTVR3eWJaYkxsOHhCT1QreDJ2ZDVJdXNhazAwMVBITWFWaUVTTlNjWkVUeHg5bDRhdVZHTTJNZFVUKzFvTXdGaGpQUDNxaVNQV3lkTllZM1VHMVJOSEltZXpvNnl4T0hwaTN3OEpNV29hUzBKUEhJbi8zalBzR2t0U1R4eXAvUUEzakJwTFdrL3NaeUJGaGtWamFlbUpJNU9mcUYzVldOcDY0c2owbW9GTEdzdENUK3puSW1Pa2F5eExQWEZZdTZvbVRXTTI5TVJoL1RLbkJJM1owaFBiRndqQWxzWnM2NGxEMUkwQVdXbE1pcDQ0Uk42WmthYkdKT21KUS9TL1owcFNZeEwxeENIKzNxVzRHcE9zSnc0bmJpYUxHRVJqMHZYRTRVd2dFYVlhYzBWUEhFNEYwcVNUeGx6VEU0ZVRnVFJwMWRoRmcyTjY0bkE2a0lpbXhtb0JKbDNURThkLy9IcndNbDJUK0ZFQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZGVsZXRlQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFHL1NVUkJWSGdCN1pmZnJRRkJGTWEvdmJtdk5LQUFOS0FBMFFEdmFJQjNGRUFCTklCM0drQUJHa0FCR3FDQWUrK1h6V1R2dzh6SU9iTWprY3d2eEdic245L01ublAyYlBZRC9IMCtoeTk4R0VrNE5razROa2s0TmtrNE5razROdDhvZzBvRjZQV0FWZ3RvTm9GYUxSKy8zNEhMQlRnY2dQMGVaWkFGTnorZERyQllBTldxZnovS0w1ZkI0bUhDc3hrd0hJb093V3FWaXl2UngvQjRMSmNsbzFFK1VTVTY0VzQzdjdBV1RwU2hwRUFYRXFkVGtWaGFIZytnM1FhZVQ5Rmg4aFhtNnRwa0tjQ0U0cTl2ek1Ba1pXVVJJaGQyM1VxV3Jza0VHQXh5UVg2NXpiSHoyWDRNeTZBUWVSMW1uYlhCaWF6WGVkMmxLT0UyOTNlSnVjN2xRUjdEdDV2N1A2NXF2dzljcjRYUVp1T3YwZlU2SkpUL2FNNHl4RVF1ekNlV0RST3pKZ3dhalNJOGJFbm5PNWNIdVRBbGJERHBqQ3pEWUxzdHBGMUo1enFYQjNuUzhlSzJTc0V4eGlvVHpNUXNwYm0vSytrNFNTSHlwS1BNOGZpNjJYa0Z3NEVQRGlIeWtHQThUcWNJUnRrQTZhb0VieVZycnBhQU5sTmYxdVp6M1NweG9td3hsWVEzOE93dDJHcSthb1pNS0NrUzdUL2h3Z2FLczFMWVhwRllLWFk3Y1dkbW96emhONUZlODJPVGhHT1RoR09UaEdPVGhHUHpjY0svSGd1YVVFL2Y5ZkVBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJjb3B5QlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGcVNVUkJWSGdCN1pnOVM4TlFGSWJmU29mVXVZT29VNjBPZ2pnVVB3YWxLSWlESUE2aWRORFYxYi9oSWk0S1hSeDBFWndkeEVFUkIwRVhRYWMyWGZ6QW9kak5kTk43QThHbFlBNmNrL1NXOHl3SitZQW5OeWZ2dlRtWmZIN2dCdzdSQjhmSVJqdk41aWU2R1ZNSjRkYTVFVlpoYVZSWUdoV1dSb1dseVlJSno4dGhzN0tGUW5FVVhxNy8zK3MvM3Q5d2NseEZxL1VGQ213alBGZGV3UGpFWkN4WnkrRFFNRFlxMjZEQ0psd1lHUU1WK3phbzZFY25UZStuaEUyRCtmS2lxZG0vK3FzZUhTQXB5TUtyYStzb1RjOGlMY2dsa2Fhc1JUODZhZGlFMjhFM2tvQkYyQ2FHNzlkQTVmSGhIbFJZRmo5THl5dGh0TFdEQUtXcG1WajNOTXdEM3QzZWdFb202dnpFN1V2czdSOTJQTjZvMTNCMWVSR0tTQkQxSmRpV2wzWWhzMVBjN1hqT1Bnelg1S0t4SmcxWjJLL1RhOVJuckd1eThQblpxZm05ZVkxMXJVMk5sK2Nua3diWDRJS2NFbW1oM2N1a1VHRnBWRmdhRlpiRzNiNUVOSk4wTzg2TjhDK2tabEtNa2pJcEZnQUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInBvaW50QlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFLR1NVUkJWSGdCN1pnOVNCeEJGTWZmSmhhM1I1cmJTQ0tYTCtKcEdoTXRBaUdGQ0FrSmtnakJJaEVza2paRm1oUXBoSHlTQkpJbWtEWk5pcVFJQkFVL1VCQUZRUlFVT1VSUkM3OHF2d3E5QTVXNzYvUzlwN09NNTNMYzdyMFZGL1ozSERQN1ptZnZmMi9ldkpsWm83eThZZzhDeEJrSUdHV3Fzcm01QWFjWmpBUXVBK2ZoVUxEZmhJTDlKaFRzTjZGZ3Z5a0RZV0l4QzE2K2VzMzFueisrUVM2YkJVbkVQUnl6enR2ZmVQd3lTQ01tbUR6N29QRXhDN1Z0V0djYnRra2hGaExQV2w5QW9xb2FReUJqMjFwYW4zTVp2M1FGL3Z6K0JSS0llWGgyWm9yTGlCazkxcmErdWdKU2lBa2VIUjZDZ2Y3ZVkvYkIvajVIdTFmT1JxUG5QbEVsazlsMTA0L2pzZ1hENE1MRkNsaGVXbUNiS2hOVk44QkpiSDNEUFhqVTFBekxpL09ReTduTEhxaVRTODh4ZlB2T1hhaTVWY3RmUWdramtlbFVpdXZKaVRIN2ZwcDhEeHViN0w1MG54ZGNlemdTTWVIcXRldFlNMUJzSGRzcWNiSVorRkVlVHFlMllIZG4yL2FpTGphTGVYbHFNZ21tYWZKMXNaNVdIamJVSWJUWUkxTGJ1ODlIVXBmTy8zOS9lYmpiM24vaDY0OXYzMEROelRvN1crUkRmK3o3MXc5UURDVWNrWXlDcmJySFRJZU00ZVpaamozY2VwaFhNWnh3VkQ1cGZvcHA3R0JvOVFsR2JUVDBLaWZySVVIUVNKQjMxOVpXaitUdFFuajJNUDBReFdyTXNoekZFcFdKYWd5Rld2czZ2NTM2MGpPS0ZhdmpPVXNrSjhaWjJOek1OSXhnRGxibzNyVFEwM3IySUdoL1FYMjk0am9rQ3BFLzlJVFV3aUgrWHNKSnJMTFhOOXdIS2NRRU8yMGwxVjVZaitkU0VkdXQ5WFIxNEt4ZjRWVk81ZDN1em5hZVlLWEViRDVpZ2lsN1VMelNSTlJ0K3ZJc2dmZ1JhZjNReTBRNm5RSnBSTE9FbjRSdkwwK0tVTERmaElMOUpoVHNOOEY5ZTZsV2t0Tk80RHk4RDdRVzhXREdINXRXQUFBQUFFbEZUa1N1UW1DQ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJlbGVtZW50XCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1lBQUFCNUNBWUFBQURMWDFRc0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFacVNVUkJWSGdCN1oxdFNKMVZITUQvajkxTm5hQlhyZDEwV2JyMnBRK0RUTWdQaTVnUTFpMElvWDJKRWpmMmdrSE1VVEZpQkdtRnROR0grbEJSTGZKREVSUTRZOGlsTjdKd0VGcU01b2NVY2J0bE1rZms1cnN1ODNiT3RVZE16L1dlNStXYzUzOGUveis0N0hKM3IyNyt1TDl6bm5QdTgyaEJDRWo4ZXJWeWNYbmgwOW5wNldzbFJiZWRpTjlUbGdURHNjQmd6bDI4RXMyTDdtaXhsdUZFQ2xMUjFiL0lzVnJqVmJFMk1CaGp4WndmdnJvL2ttTjl4TzVXWm5oS2NqbVZhbnRzVDFrSEdJaHhZbmkySUpjSlNjRit1VmRZSFhCenVjMjB2QmtqSm1PMlpERXNiMGFJa2NpV0xNYmtEYlVZNTltU0JYL2VVSXJ4bkMxWkVPY05uUmdmc3lVTHlyeWhFYU11VzdMZ3lsdmdZclJsU3hZa2VRdFVUQURaa2lYd3ZBVWlKdmhzeVJKYzNyU0tRWmN0V1FMSW16WXhpTE1saTlhOEtSZGpUclprMFpNM1pXS016WllzaXZPbVJFd0lzaVdMc3J6NUtpWjgyWkxGLzd6NUlpYjAyWkxGeDd4NUZyT0ZzaVdMTDNsekxXYnJaa3NXYjNsekxJYXk1UkNYZVhNa2hyTGxHc2Q1a3hKRDJmSUwrYnh0S29heXBRaUp2R1VVUTlsU3pxWjUyeUNHc3FVYmNkNVd4VkMyQW1aZDN0SmlLRnRvV00xYldzd25GL3BUaGFVeGlHemJEa1J3NUVkdWdiMDdDNkUwUDllSzhBZm1waWJTdDhMUzI0RUxJdlFTeWNtQnlxSjhkaXRnOTFkR2w4amFKMHo5TlE2emFVRXhLQ2dzQVVJOUpYbmIyTHVrS1AxdVdVdGsvUlAvK2ZzbVhCOGZoY1c1V2FDOHFjUE9Wa21lK09jYnlmUkN5cHNhUk5rU1BpL2JGNks4K1VlbWJJbklLb1pEZWZOR3RteUprQkpqUTNsemhteTJoSzhGRjFEZXN1TWtXeUpjaWVGUTNzUzR5WllJMTJKc0tHOHJlTW1XOE91QlQyemx2SG5ObGdqZnhIQzJXdDc4eXBZSVg4WFloRDF2Zm1kTCtEMUFJV0hNbTRwc2lWQXFoaE9XdktuTWxnamxZbXhNelp1T2JBbS9MMmpHcEx6cHlwWUk3V0k0MlBPbU8xc2lBaEZqZ3kxdlFXVkwrRzhCQkdESVc1RFpFb0ZDRENlb3ZHSElsZ2cwWW14MDVRMVR0a1NnRTJPak1tL1lzaVVDclJpTzMzbkRtaTBScU1YWWVNMGI5bXlKTUVLTWpadThtWkF0RVVhSjRjam16YVJzaVRCT2pFMm12Sm1ZTFJIR2lyRlptN2VLblRFanN5VWlCMEtBbmJmN3kwdENJWVVUQ2pGaGhNUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hZc3BCd0liWmVsM1RFLzMrWTlucHFjbmdRaVVpWW1KeVphV2xyZlpYV3Z0bVQwUGZKQklQTVRlUkMrRG9SeDVwQjRNNVFhN3ZWVmJXOXZmMTlmM0xidS9zT0dVcTNjVGljcElDbHJCeW1rQ3d6QlVUQSs3SGJJc0s3bjJ3UTJEL3pQeGVQTG9vL0dES1ZnK3RMaTRlQTBJSmN6TnpmR2ZiUjBUVXJkZUNpZmpyT3hZUE43eGJNUGpUL2QvLzEwdkVMNHhQeisvMk5YVjlVMWRYZDFoSnFRbjAvT3luUmQzK2VmZTNxNC9rbGVHbzhVbFZhV3hHT29yd04yMzUyN0F6TkRRME85TlRVMnZ0N2UzbnhvYkc3dTAyWE9kbk5aYjgrclpzdy9HZGxVY3Q1RCt5aXpFWTB5U0RlclBzY0g5RjNiL3Nzd0xYSjF2eldadnJSaG5id2pGcEdkYjdQWW15OVlOSnk5MGRlUi9OQjV2WFlMbHFxbUppUytBRU1JRzl4L1pIOVZNU0t0VEtSelhTeko4OXZiOFUwK2Vvb1BULzJNZkpCWVVGRHdobW0zSjR2V2srRDhIK3ZyT2ZmbjVaeitWVmR5eGUxZGwxWjBRSUVFTy9ueTIxZDNkM2RQYzNIeXlzN1B6UGZiUWRmQ0FYMWNyU00vZVptYW1mOWhiVTdQRUZoVHVoUUFJVUF3WDhpTGp6SCt6clNYd2lKS0xyYnlmU0J6a2t3UGRzN2NBQnY4a3JCeTE5NERQS0ZuMjV3ZW54K0lQVjgzUFRwK0dFTUt6TlRrNXlmOXYxU3FrY0pUdXh4dy9jS0QxbmRkZU9USThNREFBSVlFZkpEWTBOTHdValVaUHU1bHR5YUw2aWpoTDQ2T2pGeTk4L1ZWZllYRjB4NjFsNVhkdHo4M05BMFdvSEdQNGJJdU5JUjgyTmpZMmo0eU1kTE9IRmtBaHVpL29wWFJyUWRFWXMyRkpIalFReUpYV1ZHMHRLQkRUQTRJbGVSMEVzdWVQZldzaDI1SzhEZ0w5TUFhMnJRWFpKWGtkWUxnY25tOWJDMTRHZnlkTDhqckFkalZQVDFzTExzY1l4MHZ5T2tCN21WVTNXd3NPeGJoZWt0Y0IyZy84cWR4YThMb2tyd1BVbjhUMGUydkJyeVY1SFpod0xWenByWVZNZzcvZlMvSTZNT2tpeFZtM0ZqS0k4WDFKWGdmR1htTmR0TFd3YnZCUGdxSWxlUjBZKzJuL1RGc0xPcGJrQ1RueXF2ZnRPM3p5ekJ1WEJnY0hmNnV2cjMrQlBWWU1CQnBxMkcwM2hJUi9BVGFHZCt6dkgvTFFBQUFBQUVsRlRrU3VRbUNDXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInNldHRpbmdzQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFKL1NVUkJWSGdCN1poTlR4TlJGSVpmbEFWdFhOaENsQlJXcmJnUUZST0tZVUZJTkJvVGwwUkp1cENGQzBsMHcwL3dKN2d5WVdPaUxraFFFNkp4WWZ3QmlzRENEMWdJclZGaFVENWFGcVJ0QWdtY2M4TUFuV2tienZSZXdvUjVOcDE3ZStmT08rZWVyMHhkVTFQekZuekVDZmlNZXZ0aVplVWZqakxrQ2VyWGR4WU9CSnNtRUd5YVFMQnBBc0dtcVlkR0lwRW9CaDhOSVJKdFZHTnJZUjZqSXkreGFNMURGMW90M0htMWUxY3NFMnRwUlpMbWRLSlZjRHh4M2pVWGk3VkNKeWZENFZPUCtTS2ZYNWZjaDU3ZWEraTRrc1RtNWdZS2hRTDY3cVRRZnFuRHRZNHRIbzAwS3ZkZ2kvZjBYc2VaczgzNDgvc1hKSkJPOVZ0bjk4T1NicTJ6cXh2OXFYdW9oZWZQaGpIejQ5dUIxOWZVcmQyOGRSdTEwcDhhUUVNb0JDbGl3ZTBYTDVjRVZqbHkyVlVVeVUycUVTS3h2SmNVY1ZxenJBVVNsQ1hSVWRkL1BEODY4Z0taOUt3YXh4TnR5cEtWMW1iU2M1QWl0akJiYi9qcEUvVkFKMi9IWHUyS1pmaWFYOEM5UjNabmoxVkk4ZVREL0tESmlVOGxjNXdweWdVUmkzYTZCOS9yUlN4elBIb0pMc0hKcnRJS3hrSEVQdXVFQTh1WkRmaGUzc01MNHNMaDdCZjJrempYcG81NmVlbS9Hdk1MOU4xTjBjdUVTOWJ4bUl2TTlQZXZLQllMT0FoMjRSQm5pVGlKcXBUV2VIN2cvaUQ1YkY2Tkd4eENuV3U1OHVWeVdVZ1FDK2JBNGlDcWx2U3JDYlhoVERFdHFIUTJZaC9tYkZBdVZVbjUrT0U5dk9DcEgyYkx2QnQ3amROMHJEUGtoM3lzTjZoY093UFJabkxpTTYxL1E1MWJDeTZRNzY2Um4wL1JuQmM4TlQrVmVQQndTQVhlZmpKenM2cEkxSXFSVDFXTDFsL1hYRHI5RXpyUktuanF5emoxdlh1aWMrcm94NkVUclM1aGt1RHI1V0VSQ0RaTklOZzBnV0RUK1BmcnBWMUpqanErcy9BMmJybmJ5bDlxQVM0QUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwidXBCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZKU1VSQlZIZ0I3ZGsvYThKQUdNZnhYMHFIT0VZZDJyUlRTNWUyZENtRnZwSkNGNGN1RGwzNlVseGEwS1ZRaHhaZlNhRjBhUDB6NlNiaW9ISHpzc1c3MHhQQjhaNUhERHhmT0F3WGtBL0hCVHdUbE10SEdYTFVBWExXb2J1WVRNYlk1L1JPc0orNVcyRUJjeWRnN2dUTW5ZQzVFekIzQXVaT3dLYXo4d3RjWHQrQUkzSndISitnK3Z5Q2g4Y0tqdU5UVUVjS2R0amZuMi8wMm4vMm1ocE5CbmJZYnVjZnJjOG1XbDlORmpRWnVQSlVSWkxNTERhS2luWVk5Q3laV2pSVmdUczErNTdwcnZSRE5oajBVUWpETmJEK1drT2FLbzB2WVRRYXdpZnlNNTNaQ2c2clZLcUhzdGRoV1BER2JrWUdObHRndWJJQjZtODFOUFJ3YUhPUEtqTHdKalpWYzR2OWVHL1lPY285YlBaR3R0ckhYdVAyN2o2TGlxV3RlVE5uN3ZsK3YzT1NQWFRjeVI4cHUwckEzQW1ZT3dGekoyRHVCTXlkZ0xsYnY2ZHpQOS8ydmR5dDhBS1JiSTdpT3h0bTl3QUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImRvd25CVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZpU1VSQlZIZ0I3WmUvU2dOQkVNYS9reFMzZG5lbTBPQVRhTkJDQkY5QUxPeURGckd3T2RIQ2dKVlBZQ1hFUWlHVmtFYndiZndUbnlBZUZqRjJkNlhaMmJBaElla3lBemt5UDdpN3Zkbm14OXkzeDI1UUxxLy9vMENzb0dDVS9LRFgrOEVpWTVQZ25vWHJzQXBMbzhMU3FMQTBLaXlOQ2t1and0SXNyL0RlL2dHaUtKNnFVNDNtdUdBVFBqdzZSbkxWbUpDbU1kVm9qZ3MyNGRaVDA5NERuSjBuQ0kxQkdCb25TN1hoSEErQlA5TnhuRGlpZUEzSlpRTjVucmwzWTFhZDdGLy9GL1BDZnVMWXFHdzZVUklrVVMrYlp4bTJxanZnb2dRbUx1em43OXRPUHR6ZmpTSkFuYjIrdVhYeVg1L3Y0SUF2dzQ5TnhEWVN0Wk82RTZXcmRscDN0Zlp6QzF5d1pyaGlZMEVMcmZQeFJtc04yOVZkMSszMHU0dDU4UmxtRlNhOE5QMHBLQjRjc29RWFpzdXdKMDI3ZUgxcDJ3V1lzOG1Pd3k1TWRKZ1cyQ3gwOHlPTkNrdWp3dEtvc0RRcUxJMEtTNlBDMG95MmwzNkR2T2dVcnNNRDZRbG0yY0duZy9jQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwicGx1c0JUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRXpTVVJCVkhnQjdaaTlhZ0pCRU1mL0YzeUJNeGJCZERGSmtXQlNTRDdlSUkrU0lrMUtDN0VRQzBzclFRdkJseEFFSDhBUGJGUXMvS3BFTGZUdUVmUnU0UXFMRlZkMzFJWDV3WElET3h3LzlvWlo1cXhJNUc0RGc3aUJZWVNDWUxWYTRwcnhLa0U4alR0aEZxYUdoYWxoWVdwWW1Kb1FOR1BiWWZ6Ky9ZdTRVaTVoTVo5Qko5cFBPUEg1RFR0OEs5WnIvQTI2NFJxbWhvV3BZV0ZxbFB0d05IcVBsL2k3ZEQ4V2U5Nk5mNlNwNkxRYWNGMEhLbGpCRUhyb2lKUk1aVVNQMVlIcnJKSExwZy9LUFdGRXNxQVA5WGNwbDBTeGtFZmk0MHU2NzVmQncrT1RpS2ZqRVNhVG9UUjMwTzlDRldWaC96UFdhMVY1Z2xlemdiQXZ1emYzQ0xpdFVjUEMxTEF3TmRxRkI3MnUxL29jc1RydEpuU2pmRFZmQ3Y1N2VTNVltQm9XcG9hRnFURjNhZzV1a212SHVCUGVBZ2ZBUWNVcFJDZzVBQUFBQUVsRlRrU3VRbUNDXCIsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgSW50ZXJhY3Rpb25FdmVudCwgVGV4dHVyZSwgVGlsaW5nU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XHJcbiAgcHVibGljIHRpbGU6IFRpbGluZ1Nwcml0ZTtcclxuICBwcml2YXRlIHN0YXJ0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgcHJpdmF0ZSBkcmFnZ2luZzogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwKSB7XHJcbiAgICB0aGlzLnRpbGUgPSBuZXcgVGlsaW5nU3ByaXRlKFxyXG4gICAgICBUZXh0dXJlLmZyb20oXCJiZ1wiKSxcclxuICAgICAgdGhpcy5hcHAuc2NyZWVuLndpZHRoLFxyXG4gICAgICB0aGlzLmFwcC5zY3JlZW4uaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy50aWxlLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudGlsZVxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4gdGhpcy5wb2ludGVyRG93bihlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHRoaXMucG9pbnRlclVwKCkpXHJcbiAgICAgIC8vIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4gdGhpcy5wb2ludGVyT3V0KCkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJNb3ZlKGUpKTtcclxuICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMudGlsZSk7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmFwcC5vZmZzZXQueCAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggfHxcclxuICAgICAgICB0aGlzLmFwcC5vZmZzZXQueSAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnlcclxuICAgICAgKVxyXG4gICAgICAgIHRoaXMubW92ZVRvT2Zmc2V0KGQpO1xyXG4gICAgICBpZiAodGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnggIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54KVxyXG4gICAgICAgIHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi54ID0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54O1xyXG4gICAgICBpZiAodGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnkgIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55KVxyXG4gICAgICAgIHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi55ID0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9PZmZzZXQoZDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID4gdGhpcy5hcHAub2Zmc2V0LngpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IC09IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA8IHRoaXMuYXBwLm9mZnNldC54KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA9IHRoaXMuYXBwLm9mZnNldC54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA8IHRoaXMuYXBwLm9mZnNldC54KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCArPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPiB0aGlzLmFwcC5vZmZzZXQueClcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPSB0aGlzLmFwcC5vZmZzZXQueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPiB0aGlzLmFwcC5vZmZzZXQueSkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgLT0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5hcHAub2Zmc2V0LnkpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID0gdGhpcy5hcHAub2Zmc2V0Lnk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5hcHAub2Zmc2V0LnkpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ICs9IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA+IHRoaXMuYXBwLm9mZnNldC55KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA9IHRoaXMuYXBwLm9mZnNldC55O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9pbnRlckRvd24oZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuYXBwLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuYXBwLnNlbGVjdGVkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy50aWxlLnBhcmVudCk7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICB9XHJcbiAgcG9pbnRlclVwKCkge1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyBwb2ludGVyT3V0KCkge1xyXG4gIC8vICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gIC8vIH1cclxuICBwb2ludGVyTW92ZShlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMudGlsZS5wYXJlbnQpO1xyXG4gICAgICBjb25zdCB4ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuc3RhcnQueDtcclxuICAgICAgY29uc3QgeSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnN0YXJ0Lnk7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCArPSB4O1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgKz0geTtcclxuICAgICAgdGhpcy5zdGFydC54ICs9IHg7XHJcbiAgICAgIHRoaXMuc3RhcnQueSArPSB5O1xyXG4gICAgICB0aGlzLmFwcC5vZmZzZXQueCArPSB4O1xyXG4gICAgICB0aGlzLmFwcC5vZmZzZXQueSArPSB5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIEludGVyYWN0aW9uRXZlbnQsIElQb2ludERhdGEsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTUVOVSB9IGZyb20gXCIuL3dpZGdldHMvbWVudS53aWRnZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlIHtcclxuICBhcHA6IEFwcDtcclxuICBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1lbnU6IE1FTlU7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGN1cnNvcjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgcmVmOiBzdHJpbmc7XHJcbiAgX2NvbG9yOiBudW1iZXI7XHJcbiAgc3RhcnQ6IElQb2ludERhdGE7XHJcbiAgZW5kOiBJUG9pbnREYXRhO1xyXG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XHJcbiAgY29uc3RydWN0b3IoeyByZWYsIGNvbG9yLCB4LCB5LCB6SW5kZXggfTogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnpJbmRleCA9IHpJbmRleDtcclxuICAgIHRoaXMuY29udGFpbmVyLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXIuc29ydGFibGVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4gdGhpcy5wb2ludGVyRG93bihlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJVcChlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoZSkgPT4gdGhpcy5wb2ludGVyT3V0KGUpKVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCAoZSkgPT4gdGhpcy5wb2ludGVyTW92ZShlKSk7XHJcbiAgICB0aGlzLm1lbnUgPSBuZXcgTUVOVSh0aGlzKTtcclxuICAgIHRoaXMuYXBwLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLm1lbnUpO1xyXG4gICAgdGhpcy5hcHAuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcbiAgc2VsZWN0KCkge1xyXG4gICAgaWYgKHRoaXMuYXBwLnNlbGVjdGVkICE9IHRoaXMpIHtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSB0aGlzO1xyXG4gICAgICB0aGlzLm1lbnUub3BlbigpO1xyXG4gICAgICB0aGlzLmFwcC5ldmVudHNbXCJzZWxlY3RcIl0uZm9yRWFjaCgoY2IpID0+IGNiKHRoaXMpKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgdGhpcy5tZW51LmNsb3NlKCk7XHJcbiAgfVxyXG4gIHBvaW50ZXJEb3duKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuc3RhcnQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWxwaGEgPSAwLjg7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuY3Vyc29yID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIpO1xyXG4gICAgLy8gdGhpcy5jb250YWluZXIuekluZGV4ID0gT2JqZWN0LmtleXModGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlZnMpLmxlbmd0aDtcclxuICB9XHJcbiAgcG9pbnRlclVwKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFscGhhID0gMTtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnN0YXJ0ICYmIHRoaXMuc3RhcnQueCAhPSB0aGlzLnggJiYgdGhpcy5zdGFydC55ICE9IHRoaXMueSkge1xyXG4gICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICB0aGlzLnNlbGVjdCgpO1xyXG4gIH1cclxuICBwb2ludGVyT3V0KGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFscGhhID0gMTtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIHRoaXMuZW5kID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgfVxyXG4gIHBvaW50ZXJNb3ZlKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdnaW5nICYmIHRoaXMuYXBwLm1vdmUgJiYgdGhpcy5hcHAuZWRpdCkge1xyXG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICAgIC8vIHRoaXMueCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLmN1cnNvci54O1xyXG4gICAgICAvLyB0aGlzLnkgPSBuZXdQb3NpdGlvbi55IC0gdGhpcy5jdXJzb3IueTtcclxuICAgICAgbmV3UG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLmN1cnNvci54O1xyXG4gICAgICBuZXdQb3NpdGlvbi55ID0gbmV3UG9zaXRpb24ueSAtIHRoaXMuY3Vyc29yLnk7XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54ID49IDI1KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IDI1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPD0gLTI1KSB7XHJcbiAgICAgICAgdGhpcy54IC09IDI1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55ID49IDE1KSB7XHJcbiAgICAgICAgdGhpcy55ICs9IDE1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPD0gLTE1KSB7XHJcbiAgICAgICAgdGhpcy55IC09IDE1O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudS5wb3NpdGlvbi5zZXQodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIucG9zaXRpb24ueDtcclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54ID0geDtcclxuICB9XHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIucG9zaXRpb24ueTtcclxuICB9XHJcbiAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55ID0geTtcclxuICB9XHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgfVxyXG4gIHNldCB6SW5kZXgoaTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci56SW5kZXggPSBpO1xyXG4gIH1cclxuICBnZXQgekluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnpJbmRleDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEdyYXBoaWNzLFxyXG4gIEludGVyYWN0aW9uRXZlbnQsXHJcbiAgVGV4dHVyZSxcclxuICBUaWxpbmdTcHJpdGUsXHJcbiAgdXRpbHMsXHJcbn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgTEFCRUwgfSBmcm9tIFwiLi93aWRnZXRzL2xhYmVsLndpZGdldFwiO1xyXG5pbXBvcnQgeyBTUFJJVEUgfSBmcm9tIFwiLi93aWRnZXRzL3Nwcml0ZS53aWRnZXRcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudFByb3BzLFxyXG4gIENvbXBvbmVudENvbmZpZyxcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb21wb25lbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENPTVBPTkVOVCBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgc2VsZWN0VGlsZSA9IG5ldyBUaWxpbmdTcHJpdGUoVGV4dHVyZS5mcm9tKFwic2VsZWN0XCIpKTtcclxuICBwcml2YXRlIHNlbGVjdEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IENvbXBvbmVudFByb3BzO1xyXG4gIHByaXZhdGUgX3Nwcml0ZSA9IG5ldyBTUFJJVEUoKTtcclxuICBwcml2YXRlIF9sYWJlbCA9IG5ldyBMQUJFTCgpO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMudHlwZSA9IFwiY29tcG9uZW50XCI7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aWxlUG9zaXRpb24ueCArPSBkIC8gNjtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbGVQb3NpdGlvbi55ICs9IGQgLyA2O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgdGhpcy5fbGFiZWwuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUuekluZGV4ID0gMjtcclxuICAgIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ID0gdGhpcy5fbGFiZWwuaGVpZ2h0ICsgMjA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xyXG5cclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwKTtcclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwLCB0aGlzLl9zcHJpdGUud2lkdGggLyA0KTtcclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwLCB0aGlzLl9zcHJpdGUud2lkdGggLyAyKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnNldCgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0KCkge1xyXG4gICAgaWYgKHN1cGVyLnNlbGVjdCgpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS53aWR0aCA9IHRoaXMuX3Nwcml0ZS53aWR0aCArIDIwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUuaGVpZ2h0ID0gdGhpcy5fc3ByaXRlLmhlaWdodCArIDIwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCA9IC10aGlzLl9zcHJpdGUud2lkdGggLyAyIC0gMTA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55ID0gdGhpcy5fc3ByaXRlLnkgLSAxMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLmFscGhhID0gMC41O1xyXG4gICAgICB0aGlzLmNyb3NzKHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54LCB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSk7XHJcbiAgICAgIHRoaXMuY3Jvc3MoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnggKyB0aGlzLnNlbGVjdFRpbGUud2lkdGgsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jcm9zcyhcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCxcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSArIHRoaXMuc2VsZWN0VGlsZS5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jcm9zcyhcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCArIHRoaXMuc2VsZWN0VGlsZS53aWR0aCxcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSArIHRoaXMuc2VsZWN0VGlsZS5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zZWxlY3RUaWxlKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zZWxlY3RHcmFwaGljcyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0VGlsZSk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdEdyYXBoaWNzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgbGV0IHJhZCA9IG9mZnNldDtcclxuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgaWYgKHJhZCA+PSB0aGlzLl9zcHJpdGUud2lkdGgpIHtcclxuICAgICAgICByYWQgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJhZCArPSBkIC8gMjtcclxuICAgICAgY29uc3Qgb3BhY2l0eSA9ICh0aGlzLl9zcHJpdGUud2lkdGggLSByYWQpIC8gdGhpcy5fc3ByaXRlLndpZHRoO1xyXG4gICAgICBjaXJjbGUuY2xlYXIoKTtcclxuICAgICAgY2lyY2xlLmxpbmVTdHlsZSgyLCB0aGlzLl9jb2xvciwgb3BhY2l0eSk7XHJcbiAgICAgIGNpcmNsZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIG9wYWNpdHkgLSAwLjEpO1xyXG4gICAgICBjaXJjbGUuZHJhd0VsbGlwc2UoeCwgeSwgcmFkLCByYWQgLyAxLjYpO1xyXG4gICAgfSk7XHJcbiAgICBjaXJjbGUuekluZGV4ID0gMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNpcmNsZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgY3Jvc3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubGluZVN0eWxlKDEsIDB4ZmZmZmZmLCAxKTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubW92ZVRvKHggLSA2LCB5KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubGluZVRvKHggKyA2LCB5KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubW92ZVRvKHgsIHkgLSA2KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubGluZVRvKHgsIHkgKyA2KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgcG9pbnRlck1vdmUoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5hcHAubW92ZSAmJiB0aGlzLmFwcC5lZGl0KSB7XHJcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgICAgbmV3UG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLmN1cnNvci54O1xyXG4gICAgICBuZXdQb3NpdGlvbi55ID1cclxuICAgICAgICBuZXdQb3NpdGlvbi55ICtcclxuICAgICAgICAodGhpcy5fbGFiZWwuaGVpZ2h0ICsgdGhpcy5fc3ByaXRlLmhlaWdodCArIDMwIC0gdGhpcy5jdXJzb3IueSk7XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54ID49IDI1KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IDI1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPD0gLTI1KSB7XHJcbiAgICAgICAgdGhpcy54IC09IDI1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55ID49IDE1KSB7XHJcbiAgICAgICAgdGhpcy55ICs9IDE1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPD0gLTE1KSB7XHJcbiAgICAgICAgdGhpcy55IC09IDE1O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudS5wb3NpdGlvbi5zZXQodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBDb21wb25lbnRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gVGV4dHVyZS5mcm9tKGAke3Byb3BzLm5hbWV9YCk7XHJcbiAgICB0aGlzLl9sYWJlbC50ZXh0ID0gcHJvcHMubGFiZWw7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fbGFiZWwpIHtcclxuICAgICAgdGhpcy5fbGFiZWwuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgdGhpcy5zZWxlY3RHcmFwaGljcy50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IENvbXBvbmVudENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgR3JhcGhpY3MsXHJcbiAgSW50ZXJhY3Rpb25EYXRhLFxyXG4gIEludGVyYWN0aW9uRXZlbnQsXHJcbiAgU3ByaXRlLFxyXG4gIFRleHR1cmUsXHJcbiAgdXRpbHMsXHJcbn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTGluZVByb3BzLCBMaW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbGluZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExJTkUgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF9saW5lOiBHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBMaW5lUHJvcHM7XHJcbiAgcHJpdmF0ZSBlZGl0UG9pbnRzOiBHcmFwaGljc1tdID0gW107XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFBvaW50OiB7XHJcbiAgICBncmFwaGljczogR3JhcGhpY3M7XHJcbiAgICBwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xyXG4gIH0gfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9saW5lKTtcclxuICAgIHRoaXMudHlwZSA9IFwibGluZVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludEluTGluZShcclxuICAgIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIG9mZnNldD86IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgTWF0aC5wb3coYi54IC0gYS54LCAyKSArIE1hdGgucG93KGIueSAtIGEueSwgMilcclxuICAgICk7XHJcbiAgICBsZXQgZmFjdG9yID0gc2VnbWVudExlbmd0aCAvIDIgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgaWYgKG9mZnNldCkge1xyXG4gICAgICBmYWN0b3IgPSBvZmZzZXQgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiBmYWN0b3IsIHk6IGEueSArIChiLnkgLSBhLnkpICogZmFjdG9yIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlZ21lbnRzKFxyXG4gICAgcG9pbnRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSxcclxuICAgIHJhZGl1czogbnVtYmVyXHJcbiAgKToge1xyXG4gICAgc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICAgIGVuZDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgYmF6aWVyPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICB9W10ge1xyXG4gICAgcmV0dXJuIHBvaW50cy5yZWR1Y2UoKGFjYywgcG9pbnQsIGkpID0+IHtcclxuICAgICAgaWYgKHBvaW50c1tpIC0gMV0pIHtcclxuICAgICAgICBpZiAoaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogcG9pbnQsXHJcbiAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvaW50c1tpICsgMV0pIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgYmF6aWVyOiBwb2ludCxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgc3RhcnQ6IHBvaW50LFxyXG4gICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSArIDFdLCByYWRpdXMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdMaW5lKCkge1xyXG4gICAgdGhpcy5fbGluZS5jbGVhcigpO1xyXG4gICAgdGhpcy5fbGluZS5saW5lU3R5bGUodGhpcy5fcHJvcHMud2lkdGgsIHRoaXMuX2NvbG9yLCAxKTtcclxuICAgIHRoaXMuc2VnbWVudHModGhpcy5fcHJvcHMucG9pbnRzLCB0aGlzLl9wcm9wcy5yYWRpdXMpLmZvckVhY2goKHNlZ21lbnQpID0+IHtcclxuICAgICAgaWYgKCFzZWdtZW50LmJhemllcikge1xyXG4gICAgICAgIHRoaXMuX2xpbmUubW92ZVRvKHNlZ21lbnQuc3RhcnQueCwgc2VnbWVudC5zdGFydC55KTtcclxuICAgICAgICB0aGlzLl9saW5lLmxpbmVUbyhzZWdtZW50LmVuZC54LCBzZWdtZW50LmVuZC55KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fbGluZS5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgIHNlZ21lbnQuc3RhcnQueCxcclxuICAgICAgICBzZWdtZW50LnN0YXJ0LnksXHJcbiAgICAgICAgc2VnbWVudC5iYXppZXIueCxcclxuICAgICAgICBzZWdtZW50LmJhemllci55LFxyXG4gICAgICAgIHNlZ21lbnQuZW5kLngsXHJcbiAgICAgICAgc2VnbWVudC5lbmQueVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9saW5lLmxpbmVTdHlsZSgxLCB0aGlzLl9jb2xvciwgMCk7XHJcbiAgICB0aGlzLl9saW5lLmJlZ2luRmlsbCgweGZmZmZmZiwgMC4wMSk7XHJcbiAgICB0aGlzLl9saW5lLm1vdmVUbyh0aGlzLl9wcm9wcy5wb2ludHNbMF0ueCwgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnkpO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2xpbmUubGluZVRvKHBvaW50LnggKyB0aGlzLl9wcm9wcy53aWR0aCwgcG9pbnQueSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuX2xpbmUubGluZVRvKFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnggLSB0aGlzLl9wcm9wcy53aWR0aCAtIDQwLFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9saW5lLmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFZGl0UG9pbnRzKCkge1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgY29uc3QgcCA9IHRoaXMucG9pbnQocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHApO1xyXG4gICAgICB0aGlzLmVkaXRQb2ludHMucHVzaChwKTtcclxuICAgICAgcC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB0aGlzLnBvaW50RG93bihwLCBwb2ludCwgZSkpO1xyXG4gICAgICBwLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHRoaXMucG9pbnRVcCgpKTtcclxuICAgICAgcC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4gdGhpcy5wb2ludE91dCgpKTtcclxuICAgICAgcC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHRoaXMucG9pbnRNb3ZlKCkpO1xyXG4gICAgICBpZiAoYXJyW2kgKyAxXSkge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIGFycltpICsgMV0pO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclBvaW50ID0gdGhpcy5wb2ludChjZW50ZXIueCwgY2VudGVyLnksIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZWRpdFBvaW50cy5wdXNoKGNlbnRlclBvaW50KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjZW50ZXJQb2ludCk7XHJcbiAgICAgICAgY2VudGVyUG9pbnQub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4gdGhpcy5jZW50ZXJEb3duKGNlbnRlciwgZSwgaSArIDEpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50KHg6IG51bWJlciwgeTogbnVtYmVyLCBjZW50ZXI/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBwb2ludCA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgcG9pbnQucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgcG9pbnQuYmVnaW5GaWxsKDB4ZmZmZmZmLCBjZW50ZXIgPyAwLjA1IDogMC4yKTtcclxuICAgIHBvaW50LmRyYXdFbGxpcHNlKDAsIDAsIGNlbnRlciA/IDE2IDogMjUsIGNlbnRlciA/IDE2IC8gMS42IDogMjUgLyAxLjYpO1xyXG4gICAgcG9pbnQuZW5kRmlsbCgpO1xyXG4gICAgcG9pbnQubGluZVN0eWxlKDIsIDB4ZmZmZmZmLCAwLjUpO1xyXG4gICAgaWYgKGNlbnRlcikge1xyXG4gICAgICBwb2ludC5tb3ZlVG8oLTEwLCAtMTAgLyAxLjYpO1xyXG4gICAgICBwb2ludC5saW5lVG8oMTAsIDEwIC8gMS42KTtcclxuICAgICAgcG9pbnQubW92ZVRvKDEwLCAtMTAgLyAxLjYpO1xyXG4gICAgICBwb2ludC5saW5lVG8oLTEwLCAxMCAvIDEuNik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb2ludC5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgIHBvaW50LmxpbmVUbygwLCAtMjApO1xyXG4gICAgfVxyXG4gICAgcG9pbnQubGluZVN0eWxlKDAsIDApO1xyXG4gICAgcG9pbnQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgcG9pbnQuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICByZXR1cm4gcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVBvaW50cygpIHtcclxuICAgIHRoaXMuZWRpdFBvaW50cy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVkaXRQb2ludHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnREb3duKFxyXG4gICAgZ3JhcGhpY3M6IEdyYXBoaWNzLFxyXG4gICAgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGU6IEludGVyYWN0aW9uRXZlbnRcclxuICApIHtcclxuICAgIHRoaXMuYXBwLm1vdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRQb2ludCA9IHtcclxuICAgICAgZ3JhcGhpY3MsXHJcbiAgICAgIHBvaW50LFxyXG4gICAgICBkYXRhOiBlLmRhdGEsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludFVwKCkge1xyXG4gICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkUG9pbnQgPSBudWxsO1xyXG4gICAgdGhpcy5yZW1vdmVQb2ludHMoKTtcclxuICAgIHRoaXMuYWRkRWRpdFBvaW50cygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludE1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBvaW50KSB7XHJcbiAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IHRoaXMuc2VsZWN0ZWRQb2ludC5kYXRhLmdldExvY2FsUG9zaXRpb24oXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzLnBhcmVudFxyXG4gICAgICApO1xyXG4gICAgICBuZXdDb29yZHMueCA9IG5ld0Nvb3Jkcy54IC0gKG5ld0Nvb3Jkcy54ICUgMjUpO1xyXG4gICAgICBuZXdDb29yZHMueSA9IG5ld0Nvb3Jkcy55IC0gKG5ld0Nvb3Jkcy55ICUgMTUpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MueCA9IG5ld0Nvb3Jkcy54O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MueSA9IG5ld0Nvb3Jkcy55O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQucG9pbnQueCA9IG5ld0Nvb3Jkcy54O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQucG9pbnQueSA9IG5ld0Nvb3Jkcy55O1xyXG4gICAgICB0aGlzLmVkaXRQb2ludHMuZm9yRWFjaCgocG9pbnQsIGksIGFycikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBvaW50ID09PSB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MgJiZcclxuICAgICAgICAgIGkgPiAwICYmXHJcbiAgICAgICAgICBpIDwgYXJyLmxlbmd0aCAtIDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFycltpIC0gMV0ueCA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgLSAyXSwgbmV3Q29vcmRzKS54O1xyXG4gICAgICAgICAgYXJyW2kgLSAxXS55ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBuZXdDb29yZHMpLnk7XHJcbiAgICAgICAgICBhcnJbaSArIDFdLnggPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIG5ld0Nvb3JkcykueDtcclxuICAgICAgICAgIGFycltpICsgMV0ueSA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgKyAyXSwgbmV3Q29vcmRzKS55O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBwb2ludCA9PT0gdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzICYmXHJcbiAgICAgICAgICBpID09PSBhcnIubGVuZ3RoIC0gMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYXJyW2kgLSAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBuZXdDb29yZHMpLng7XHJcbiAgICAgICAgICBhcnJbaSAtIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpIC0gMl0sIG5ld0Nvb3JkcykueTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBvaW50ID09PSB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MgJiYgaSA9PT0gMCkge1xyXG4gICAgICAgICAgYXJyW2kgKyAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSArIDJdLCBuZXdDb29yZHMpLng7XHJcbiAgICAgICAgICBhcnJbaSArIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIG5ld0Nvb3JkcykueTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50T3V0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFBvaW50ID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICB0aGlzLmFkZEVkaXRQb2ludHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2VudGVyRG93bihcclxuICAgIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBlOiBJbnRlcmFjdGlvbkV2ZW50LFxyXG4gICAgaTogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuc3BsaWNlKGksIDAsIHBvaW50KTtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICB0aGlzLmFkZEVkaXRQb2ludHMoKTtcclxuICAgIC8vIHRoaXMuZWRpdFBvaW50c1tpICsgMl0uZW1pdChcInBvaW50ZXJkb3duXCIsIGUpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KCkge1xyXG4gICAgaWYgKHN1cGVyLnNlbGVjdCgpKSB7XHJcbiAgICAgIHRoaXMuYWRkRWRpdFBvaW50cygpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogTGluZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHRoaXMuZHJhd0xpbmUoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHtcclxuICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBMaW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEdyYXBoaWNzLFxyXG4gIEludGVyYWN0aW9uRGF0YSxcclxuICBUZXh0dXJlLFxyXG4gIFRpbGluZ1Nwcml0ZSxcclxuICB1dGlscyxcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBsYW5lUHJvcHMsIFBsYW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxhbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBMQU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfcGxhbmU6IEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcGxhbmVUaWxlID0gbmV3IFRpbGluZ1Nwcml0ZShUZXh0dXJlLmZyb20oXCJzZWxlY3RcIikpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBQbGFuZVByb3BzO1xyXG4gIHByaXZhdGUgcG9pbnQgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fcGxhbmUpO1xyXG4gICAgdGhpcy5wb2ludC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnR5cGUgPSBcInBsYW5lXCI7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuX3BsYW5lVGlsZS50aWxlUG9zaXRpb24ueCArPSBkIC8gMjtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kcmFnUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBjb25zdCByYWQgPSAoMzEgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgIGNvbnN0IGEgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IGIgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5jb3MocmFkKTtcclxuICAgIGNvbnN0IEEgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IEIgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5jb3MocmFkKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIDAuMDQpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVN0eWxlKDIsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgdGhpcy5fcGxhbmUubW92ZVRvKDAsIDApO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKGIsIC1hKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhiICsgQiwgLWEgKyBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhCLCBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5fcGxhbmUuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnggPSBiO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnkgPSAtYTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS53aWR0aCA9IHRoaXMuX3Byb3BzLnc7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuaGVpZ2h0ID0gdGhpcy5fcHJvcHMuaDtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS50aWxlU2NhbGUuc2V0KDEuNSwgMS41KTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuYWxwaGEgPSAwLjQ7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuc2tldy5zZXQoLTEuMDMsICgzMSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3BsYW5lVGlsZSk7XHJcbiAgICB0aGlzLnBvaW50LnBvc2l0aW9uLnNldChiICsgQiwgLWEgKyBBKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCgpIHtcclxuICAgIGlmIChzdXBlci5zZWxlY3QoKSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1BvaW50KCkge1xyXG4gICAgdGhpcy5wb2ludC5saW5lU3R5bGUoMiwgMHhmZmZmZmYsIDAuMyk7XHJcbiAgICB0aGlzLnBvaW50Lm1vdmVUbygwLCAwKTtcclxuICAgIHRoaXMucG9pbnQubGluZVRvKDAsIC0yMCk7XHJcbiAgICB0aGlzLnBvaW50LmxpbmVTdHlsZSgwLCAwKTtcclxuICAgIHRoaXMucG9pbnQuYmVnaW5GaWxsKDB4ZmZmZmZmLCAwLjIpO1xyXG4gICAgdGhpcy5wb2ludC5kcmF3RWxsaXBzZSgwLCAwLCAyNSwgMjUgLyAxLjYpO1xyXG4gICAgdGhpcy5wb2ludC5lbmRGaWxsKCk7XHJcbiAgICBsZXQgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xyXG4gICAgbGV0IGRyYWcgPSBmYWxzZTtcclxuICAgIGxldCBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLnBvaW50XHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZGF0YSA9IGUuZGF0YTtcclxuICAgICAgICBkcmFnID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBvaW50LnBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZHJhZykge1xyXG4gICAgICAgICAgY29uc3QgZW5kID0gZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucG9pbnQucGFyZW50KTtcclxuICAgICAgICAgIGlmIChlbmQueCAtIHN0YXJ0LnggPiAwIHx8IGVuZC55IC0gc3RhcnQueSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudyArPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudyAtPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhcnQgPSBlbmQ7XHJcbiAgICAgICAgICAvLyBuZXdwLnggPSBuZXdwLnggLSAobmV3cC54ICUgMjUpO1xyXG4gICAgICAgICAgLy8gbmV3cC55ID0gbmV3cC55IC0gKG5ld3AueSAlIDE1KTtcclxuICAgICAgICAgIC8vIGNvbnN0IHJhZCA9ICgzMSAqIE1hdGguUEkpIC8gMTgwO1xyXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy53ICs9IDE7XHJcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLmggKz0gMTtcclxuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBQbGFuZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fcGxhbmUpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBQbGFuZUNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHV0aWxzLCBUZXh0LCBUZXh0U3R5bGVGb250V2VpZ2h0IH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVGV4dENvbmZpZywgVGV4dFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGV4dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRFWFQgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF90ZXh0ID0gbmV3IFRleHQoXCJcIik7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IFRleHRQcm9wcztcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLnR5cGUgPSBcInRleHRcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBpZiAodGhpcy5fcHJvcHMuc2tldykge1xyXG4gICAgICB0aGlzLl90ZXh0LnNrZXcuc2V0KC0xLjAzLCAoMzEgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSB0aGlzLl9wcm9wcy5mb250V2lkdGggYXMgVGV4dFN0eWxlRm9udFdlaWdodDtcclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZm9udFNpemUgPSB0aGlzLl9wcm9wcy5mb250U2l6ZTtcclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZmlsbCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5fdGV4dC50ZXh0ID0gdGhpcy5fcHJvcHMudGV4dDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3RleHQpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBUZXh0UHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl90ZXh0KSB7XHJcbiAgICAgIHRoaXMuX3RleHQudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl90ZXh0KSB7XHJcbiAgICAgIHRoaXMuX3RleHQuc3R5bGUuZmlsbCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBUZXh0Q29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JhcGhpY3MsIFRleHQsIFRleHRTdHlsZSwgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMQUJFTCBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBfY29sb3I6IG51bWJlcjtcclxuICBwcml2YXRlIF90ZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIHByaXZhdGUgX2xhYmVsVGV4dDogVGV4dDtcclxuICBwcml2YXRlIF9sYWJlbCA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3N0eWxlID0gbmV3IFRleHRTdHlsZSh7XHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAxLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgZmlsbDogXCIjQTJBM0E3XCIsXHJcbiAgICB3b3JkV3JhcDogdHJ1ZSxcclxuICAgIHdvcmRXcmFwV2lkdGg6IDEwMCxcclxuICAgIGxpbmVKb2luOiBcInJvdW5kXCIsXHJcbiAgfSk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0ID0gbmV3IFRleHQoXCJcIiwgdGhpcy5fc3R5bGUpO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnggPSAxNjtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC55ID0gNDtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYWJlbFRleHQpO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcoKSB7XHJcbiAgICB0aGlzLl9sYWJlbC5jbGVhcigpO1xyXG4gICAgdGhpcy5fbGFiZWwuYmVnaW5GaWxsKHRoaXMuX2NvbG9yKTtcclxuICAgIHRoaXMuX2xhYmVsLmRyYXdSZWN0KDAsIDAsIDYsIHRoaXMuX2xhYmVsVGV4dC5oZWlnaHQgKyAxMCk7XHJcbiAgICB0aGlzLl9sYWJlbC5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9sYWJlbC5saW5lU3R5bGUoMSwgdGhpcy5fY29sb3IsIDAuNSk7XHJcbiAgICB0aGlzLl9sYWJlbC5iZWdpbkZpbGwoMHgwMDAwMDAsIDEpO1xyXG4gICAgdGhpcy5fbGFiZWwuZHJhd1JlY3QoXHJcbiAgICAgIDYsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuX2xhYmVsVGV4dC53aWR0aCArIDIwLFxyXG4gICAgICB0aGlzLl9sYWJlbFRleHQuaGVpZ2h0ICsgMTBcclxuICAgICk7XHJcbiAgICB0aGlzLl9sYWJlbC5lbmRGaWxsKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IG51bWJlcikge1xyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RleHQgPSBcIlwiO1xyXG4gICAgbGV0IGFjYyA9IDA7XHJcbiAgICB0ZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgaWYgKGFjYyA8IDIwKSB7XHJcbiAgICAgICAgYWNjICs9IDE7XHJcbiAgICAgICAgdGhpcy5fdGV4dCArPSBzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjYyA9IDA7XHJcbiAgICAgICAgdGhpcy5fdGV4dCArPSBcIiBcIjtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQudGV4dCA9IHRoaXMuX3RleHQ7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlLCBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1FTlUgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgZGVsZXRlOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcImRlbGV0ZUJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBjb3B5OiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcImNvcHlCVE5cIikpO1xyXG4gIHByaXZhdGUgcG9pbnQ6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwicG9pbnRCVE5cIikpO1xyXG4gIHByaXZhdGUgc2V0dGluZ3M6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwic2V0dGluZ3NCVE5cIikpO1xyXG4gIHByaXZhdGUgdXA6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwidXBCVE5cIikpO1xyXG4gIHByaXZhdGUgZG93bjogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJkb3duQlROXCIpKTtcclxuICBwcml2YXRlIGVsOiBCYXNlO1xyXG4gIGNvbnN0cnVjdG9yKGVsOiBCYXNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG5cclxuICAgIHRoaXMucG9pbnQuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmRlbGV0ZS5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuY29weS5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuc2V0dGluZ3MuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLnVwLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5kb3duLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5wb2ludC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmRlbGV0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvcHkuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnVwLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZG93bi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnBvaW50LmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kZWxldGUuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvcHkuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy51cC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuZG93bi5idXR0b25Nb2RlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnBvaW50Lm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLnBvaW50KSk7XHJcbiAgICB0aGlzLnBvaW50Lm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5wb2ludCkpO1xyXG4gICAgdGhpcy5kZWxldGUub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuZGVsZXRlKSk7XHJcbiAgICB0aGlzLmRlbGV0ZS5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuZGVsZXRlKSk7XHJcbiAgICB0aGlzLmNvcHkub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLmNvcHkpKTtcclxuICAgIHRoaXMuY29weS5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5jb3B5KSk7XHJcbiAgICB0aGlzLnNldHRpbmdzLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLnNldHRpbmdzKSk7XHJcbiAgICB0aGlzLnNldHRpbmdzLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5zZXR0aW5ncykpO1xyXG4gICAgdGhpcy51cC5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy51cCkpO1xyXG4gICAgdGhpcy51cC5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMudXApKTtcclxuICAgIHRoaXMuZG93bi5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5kb3duKSk7XHJcbiAgICB0aGlzLmRvd24ub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLmRvd24pKTtcclxuXHJcbiAgICB0aGlzLnBvaW50Lm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC5hcHAub2Zmc2V0ID0ge1xyXG4gICAgICAgIHg6IHRoaXMuZWwuYXBwLnNjcmVlbi53aWR0aCAvIDIgLSB0aGlzLmVsLmNvbnRhaW5lci5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuZWwuYXBwLnNjcmVlbi5oZWlnaHQgLyAyIC0gdGhpcy5lbC5jb250YWluZXIucG9zaXRpb24ueSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGVsZXRlLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlbW92ZSh0aGlzLmVsLnJlZik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvcHkub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLmFwcC5zZXRDb3B5KCk7XHJcbiAgICAgIHRoaXMuZWwuYXBwLnBhc3RlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLnpJbmRleCArPSAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvd24ub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLnpJbmRleCAtPSAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb3B5LnkgPSAwO1xyXG4gICAgdGhpcy5zZXR0aW5ncy55ID0gdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLmRlbGV0ZS55ID0gdGhpcy5wb2ludC5oZWlnaHQgKiAyO1xyXG4gICAgdGhpcy5wb2ludC55ID0gMDtcclxuICAgIHRoaXMucG9pbnQueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMudXAueSA9IHRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy51cC54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy5kb3duLnkgPSB0aGlzLnBvaW50LmhlaWdodCAqIDI7XHJcbiAgICB0aGlzLmRvd24ueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICB9XHJcblxyXG4gIGhvdmVyKGU6IFNwcml0ZSkge1xyXG4gICAgZS5zY2FsZS5zZXQoMC45LCAwLjkpO1xyXG4gIH1cclxuICB1bmhvdmVyKGU6IFNwcml0ZSkge1xyXG4gICAgZS5zY2FsZS5zZXQoMSwgMSk7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kZWxldGUpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmNvcHkpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnNldHRpbmdzKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy51cCk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZG93bik7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICBpZiAodGhpcy5lbC5hcHAuZWRpdCkge1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMucG9pbnQpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZGVsZXRlKTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmNvcHkpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMudXApO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZG93bik7XHJcbiAgICAgIHRoaXMucG9pbnQueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICAgICAgdGhpcy5waXZvdC5zZXQodGhpcy5wb2ludC5oZWlnaHQgLyAyLCB0aGlzLmhlaWdodCAtIDIwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICAgIHRoaXMucG9pbnQueCA9IDA7XHJcbiAgICAgIHRoaXMucGl2b3Quc2V0KDAsIDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy56SW5kZXggPSB0aGlzLmVsLmFwcC5jb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5lbC54LCB0aGlzLmVsLnkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFNwcml0ZSwgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU1BSSVRFIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9vZmZzZXQgPSAxMDtcclxuICAgIHRoaXMuc3dpbmcoKTtcclxuICB9XHJcblxyXG4gIHN3aW5nKCkge1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIHdpbmRvdy5vaXMudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ID49IHRoaXMuX29mZnNldCkgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IDw9IDApIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGlmIChmbGFnKSB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSArPSBkIC8gNTtcclxuICAgICAgICBlbHNlIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55IC09IGQgLyA1O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCB0ZXh0dXJlKHRleHR1cmU6IFRleHR1cmUpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICB0aGlzLnBpdm90LnNldCh0aGlzLl9zcHJpdGUud2lkdGggLyAyLCAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24sIENvbnRhaW5lciwgTG9hZGVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2VsZW1lbnRzL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50c1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vZWxlbWVudHMvYmFja2dyb3VuZC5lbGVtZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbmZpZyB9IGZyb20gXCIuL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBiYXNlQXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzL2Jhc2VcIjtcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgb2lzOiBBcHA7XHJcbiAgfVxyXG4gIGludGVyZmFjZSBDb250YWluZXIge1xyXG4gICAgaW50ZXJhY3RpdmU6IGJvb2xlYW47XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHVibGljIG9mZnNldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgcHVibGljIGVsZW1lbnRzU2VydmljZSA9IG5ldyBFbGVtZW50c1NlcnZpY2UodGhpcyk7XHJcbiAgcHVibGljIGNvbmZpZ1NlcnZpY2UgPSBuZXcgQ29uZmlnU2VydmljZSh0aGlzKTtcclxuICBwdWJsaWMgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBCYXNlO1xyXG4gIHB1YmxpYyBjb3B5OiBCYXNlO1xyXG4gIHB1YmxpYyBsb2FkZXI6IExvYWRlcjtcclxuICBwcml2YXRlIGRpdjogRWxlbWVudDtcclxuICBwdWJsaWMgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuICBwdWJsaWMgX2VkaXQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBtb3ZlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZXZlbnRzOiB7XHJcbiAgICBzZWxlY3Q6ICgoZWw6IEJhc2UpID0+IHZvaWQpW107XHJcbiAgfSA9IHtcclxuICAgIHNlbGVjdDogW10sXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgc3VwZXIoeyBhbnRpYWxpYXM6IHRydWUsIGJhY2tncm91bmRDb2xvcjogMHgwMDAwMDAgfSk7XHJcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKCF0aGlzLmRpdikge1xyXG4gICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgIHRoaXMubG9hZGVyID0gTG9hZGVyLnNoYXJlZDtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5rZXlib2FyZCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNpemluZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGtleWJvYXJkKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZWRpdCAmJiBlLmNvZGUgPT09IFwiRGVsZXRlXCIgJiYgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlbW92ZSh0aGlzLnNlbGVjdGVkLnJlZik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlDXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb3B5KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlWXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuY29weSkge1xyXG4gICAgICAgIHRoaXMucGFzdGUoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS5jb2RlID09PSBcIktleVpcIiAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UudW5kbygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0Q29weSgpIHtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuc2VsZWN0ZWQ7XHJcbiAgfVxyXG4gIHBhc3RlKCkge1xyXG4gICAgdGhpcy5jb3B5ID0gdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKHRoaXMuY29weS50eXBlLCB7XHJcbiAgICAgIC4uLih0aGlzLmNvcHkuY29uZmlnIGFzIENvbXBvbmVudENvbmZpZyksXHJcbiAgICAgIHg6IHRoaXMuY29weS54ICsgMTAwLFxyXG4gICAgICByZWY6IHRoaXMuY29weS5yZWYgKyBEYXRlLm5vdygpLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICB9XHJcblxyXG4gIGxvYWQoY29uZmlnOiBDb25maWcsIGNiOiAob2lzOiBBcHApID0+IHZvaWQpIHtcclxuICAgIGJhc2VBc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVyLmFkZChzcHJpdGUubmFtZSwgc3ByaXRlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcuYXNzZXRzLmZvckVhY2goKHNwcml0ZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlci5hZGQoc3ByaXRlLm5hbWUsIHNwcml0ZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2FkZXIubG9hZCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgIHRoaXMuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICBjYih0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNpemluZygpIHtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMudmlldy53aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLnZpZXcuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNjcmVlbi53aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLnNjcmVlbi5oZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHRoaXMuYmFja2dyb3VuZC50aWxlLndpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHRoaXMuYmFja2dyb3VuZC50aWxlLmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbmZpZyhjb25maWc6IENvbmZpZykge1xyXG4gICAgdGhpcy5vZmZzZXQgPSBjb25maWcub2Zmc2V0O1xyXG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kLnRpbGUudGlsZVBvc2l0aW9uLnggPSBjb25maWcub2Zmc2V0Lng7XHJcbiAgICAvLyB0aGlzLmJhY2tncm91bmQudGlsZS50aWxlUG9zaXRpb24ueSA9IGNvbmZpZy5vZmZzZXQueTtcclxuICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlZnMgPSB7fTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICBjb25maWcucGxhbmVzLmZvckVhY2goKHBsYW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcInBsYW5lXCIsIHBsYW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwibGluZVwiLCBsaW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcImNvbXBvbmVudFwiLCBjb21wb25lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJ0ZXh0XCIsIHRleHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQoZWw6IEJhc2UpIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkgdGhpcy5fc2VsZWN0ZWQudW5zZWxlY3QoKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1NlcnZpY2UucmVmcztcclxuICB9XHJcblxyXG4gIHNldCBlZGl0KGVkaXQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2VkaXQgPSBlZGl0O1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5tZW51LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZWRpdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lZGl0O1xyXG4gIH1cclxuXHJcbiAgb24oZXZlbnQ6IGtleW9mIEFwcFtcImV2ZW50c1wiXSwgY2I6IChlbDogQmFzZSkgPT4gdm9pZCkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgd2luZG93Lm9pcyA9IG5ldyBBcHAoc2VsZWN0b3IpO1xyXG4gIHJldHVybiB3aW5kb3cub2lzO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcbiAgcHVibGljIGFwcDogQXBwO1xyXG4gIHB1YmxpYyBoaXN0b3J5OiB7IHNlbGVjdGVkOiBzdHJpbmcgfCBudWxsOyBjb25maWc6IENvbmZpZyB9W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgZG8oKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaGlzdG9yeS5sZW5ndGggPD0gMjAgJiZcclxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpICE9PVxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0pXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnB1c2goe1xyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuYXBwLnNlbGVjdGVkPy5yZWYsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5kbygpIHtcclxuICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID49IDIpIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xyXG4gICAgICBjb25zdCBwb2ludCA9IHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZyA9IHBvaW50LmNvbmZpZztcclxuICAgICAgLy8gaWYgKHBvaW50LnNlbGVjdGVkKSB7XHJcbiAgICAgIC8vICAgdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlZnNbcG9pbnQuc2VsZWN0ZWRdLnNlbGVjdCgpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvZmZzZXQ6IHtcclxuICAgICAgICB4OiB0aGlzLmFwcC5vZmZzZXQueCxcclxuICAgICAgICB5OiB0aGlzLmFwcC5vZmZzZXQueSxcclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLmNvbXBvbmVudHMsXHJcbiAgICAgIGxpbmVzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UubGluZXMsXHJcbiAgICAgIHBsYW5lczogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnBsYW5lcyxcclxuICAgICAgdGV4dHM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS50ZXh0cyxcclxuICAgICAgYXNzZXRzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UuYXNzZXRzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQ09NUE9ORU5UIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50XCI7XHJcbmltcG9ydCB7IExJTkUgfSBmcm9tIFwiLi4vZWxlbWVudHMvbGluZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFBMQU5FIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgVEVYVCB9IGZyb20gXCIuLi9lbGVtZW50cy90ZXh0LmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRDb25maWcsXHJcbiAgQ29tcG9uZW50UHJvcHMsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMaW5lQ29uZmlnLCBMaW5lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9saW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZUNvbmZpZywgUGxhbmVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0Q29uZmlnLCBUZXh0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZXh0LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRzU2VydmljZSB7XHJcbiAgcHVibGljIHJlZnM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgfSA9IHt9O1xyXG4gIHB1YmxpYyBhcHA6IEFwcDtcclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgY29uZmlnOiBDb21wb25lbnRDb25maWcgfCBUZXh0Q29uZmlnIHwgUGxhbmVDb25maWcgfCBMaW5lQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMucmVmc1tjb25maWcucmVmXSkge1xyXG4gICAgICBsZXQgZWw6IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb21wb25lbnRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IENPTVBPTkVOVChjb25maWcsIHRoaXMuYXBwKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIENvbXBvbmVudFByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFRFWFQoY29uZmlnLCB0aGlzLmFwcCk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBUZXh0UHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicGxhbmVcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFBMQU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgUGxhbmVQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBMSU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgTGluZVByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmc1tjb25maWcucmVmXSA9IGVsO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzW2NvbmZpZy5yZWZdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgSW4gc2NoZW1hIGNvbmZpZ3VyYXRpb24gbGluayBcIiR7XHJcbiAgICAgICAgICBjb25maWcucmVmXHJcbiAgICAgICAgfVwiIGlzIGR1cGxpY2F0ZWQuICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX1cImBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUocmVmOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xyXG4gICAgICB0aGlzLmFwcC5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5yZWZzW3JlZl0uY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICBkZWxldGUgdGhpcy5yZWZzW3JlZl07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudHNPZlR5cGUodHlwZTogXCJjb21wb25lbnRcIiB8IFwibGluZVwiIHwgXCJ0ZXh0XCIgfCBcInBsYW5lXCIpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnJlZnMpXHJcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNba2V5XS50eXBlID09PSB0eXBlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChrZXkpID0+IHRoaXMucmVmc1trZXldLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcG9uZW50cygpOiBDb21wb25lbnRDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcImNvbXBvbmVudFwiKSBhcyBDb21wb25lbnRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBsaW5lcygpOiBMaW5lQ29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJsaW5lXCIpIGFzIExpbmVDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0cygpOiBUZXh0Q29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJ0ZXh0XCIpIGFzIFRleHRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFuZXMoKTogUGxhbmVDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcInBsYW5lXCIpIGFzIFBsYW5lQ29uZmlnW107XHJcbiAgfVxyXG5cclxuICBnZXQgYXNzZXRzKCk6IHsgbmFtZTogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfVtdIHtcclxuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhjb21wb25lbnQucHJvcHMubmFtZSkpIHtcclxuICAgICAgICBrZXlzLnB1c2goY29tcG9uZW50LnByb3BzLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBrZXlzLm1hcCgobmFtZSkgPT4gKHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGRhdGE6IHV0aWxzLlRleHR1cmVDYWNoZVtcInNlcnZlclwiXS5iYXNlVGV4dHVyZS5yZXNvdXJjZS51cmwsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9