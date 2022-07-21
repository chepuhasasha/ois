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
        _this.deleteBTN = new pixi_js_1.Sprite(pixi_js_1.Texture.from("deleteBTN"));
        _this.plusBTN = new pixi_js_1.Sprite(pixi_js_1.Texture.from("plusBTN"));
        _this.container.addChild(_this._line);
        _this.type = "line";
        _this.deleteBTN.interactive = true;
        _this.deleteBTN.buttonMode = true;
        _this.deleteBTN.alpha = 0.5;
        _this.deleteBTN.scale.set(0.8, 0.8);
        _this.plusBTN.interactive = true;
        _this.plusBTN.buttonMode = true;
        _this.plusBTN.alpha = 0.5;
        _this.plusBTN.scale.set(0.8, 0.8);
        _this.plusBTN.on("pointerdown", function (e) {
            _this._props.points.push({ x: _this.plusBTN.x, y: _this.plusBTN.y });
            _this.removePoints();
            _this.addEditPoints();
            _this.drawLine();
            _this.editPoints[_this.editPoints.length - 1].emit("pointerdown", e, _this.editPoints[_this.editPoints.length - 1], _this._props.points[_this._props.points.length - 1]);
            // this.selectPoint(this.editPoints.pop(), this._props.points.pop(), e);
            _this.container.removeChild(_this.plusBTN);
        });
        _this.plusBTN.on("pointerover", function () {
            _this.plusBTN.alpha = 1;
        });
        _this.plusBTN.on("pointerout", function () {
            _this.plusBTN.alpha = 0.5;
        });
        _this.deleteBTN.on("pointerdown", function () {
            if (_this.selectedPoint) {
                _this.deletePoint(_this.selectedPoint.point);
            }
        });
        _this.deleteBTN.on("pointerover", function () {
            _this.deleteBTN.alpha = 1;
        });
        _this.deleteBTN.on("pointerout", function () {
            _this.deleteBTN.alpha = 0.5;
        });
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
            p.on("pointerdown", function (e) { return _this.pointDown(e, p, point); });
            p.on("pointerup", function () { return _this.pointUp(); });
            p.on("pointerupoutside", function () { return _this.pointUp(); });
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
    LINE.prototype.deletePoint = function (point) {
        if (this._props.points.length === 2) {
            this.app.elementsService.remove(this.ref);
            return;
        }
        this.unselectPoint();
        var i = this._props.points.indexOf(point);
        this._props.points.splice(i, 1);
        this.removePoints();
        this.addEditPoints();
        this.drawLine();
        this.menu.position.set(this._props.points[0].x + this.x - 20, this._props.points[0].y + this.y - 20);
    };
    LINE.prototype.pointDown = function (e, graphics, point) {
        this.menu.close();
        this.app.move = false;
        this.selectPoint(graphics, point, e);
    };
    LINE.prototype.pointUp = function () {
        this.container.addChild(this.deleteBTN);
        this.app.move = true;
        if (this.selectedPoint)
            this.selectedPoint.drag = false;
        this.removePoints();
        this.addEditPoints();
        this.menu.open();
        this.menu.position.set(this._props.points[0].x + this.x - 20, this._props.points[0].y + this.y - 20);
    };
    LINE.prototype.pointMove = function () {
        var _this = this;
        if (this.selectedPoint && this.selectedPoint.drag) {
            this.container.removeChild(this.deleteBTN);
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
            this.deleteBTN.position.set(newCoords_1.x, newCoords_1.y);
            this.drawLine();
        }
    };
    LINE.prototype.centerDown = function (point, e, i) {
        this._props.points.splice(i, 0, point);
        this.removePoints();
        this.addEditPoints();
        // this.editPoints[i + 2].emit("pointerdown", e);
    };
    LINE.prototype.selectPoint = function (graphics, point, e) {
        this.selectedPoint = {
            graphics: graphics,
            point: point,
            data: e.data,
            drag: true,
        };
        if (this._props.points.length - 1 === this._props.points.indexOf(point)) {
            this.plusBTN.position.set(point.x + 40, point.y);
            this.container.addChild(this.plusBTN);
        }
        this.deleteBTN.position.set(point.x, point.y);
        this.container.addChild(this.deleteBTN);
    };
    LINE.prototype.unselectPoint = function () {
        this.selectedPoint = null;
        this.container.removeChild(this.deleteBTN);
        this.container.removeChild(this.plusBTN);
    };
    LINE.prototype.select = function () {
        if (_super.prototype.select.call(this)) {
            this.addEditPoints();
            this.menu.position.set(this._props.points[0].x + this.x - 20, this._props.points[0].y + this.y - 20);
            return true;
        }
        return false;
    };
    LINE.prototype.unselect = function () {
        _super.prototype.unselect.call(this);
        this.removePoints();
        this.app.move = true;
        this.unselectPoint();
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
            start = data.getLocalPosition(_this.point.parent);
            _this.setup();
            console.log(_this.start);
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
                var cursor = data.getLocalPosition(_this.point.parent);
                var dx = cursor.x;
                var dy = cursor.y;
                var alpha = Math.abs(Math.atan(dx / dy) * (180 / Math.PI));
                var A = 120;
                var C = alpha - 60;
                var B = 60 - C;
                var a = Math.sqrt(dy * dy + dx * dx);
                if (dy < 0) {
                    B = alpha - 60;
                    C = 60 - B;
                }
                _this.props.w =
                    (Math.sin(B * (Math.PI / 180)) * a) / Math.sin(A * (Math.PI / 180));
                _this.props.h =
                    (Math.sin(C * (Math.PI / 180)) * a) / Math.sin(A * (Math.PI / 180));
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
        var _this = _super.call(this, {
            antialias: true,
            backgroundColor: 0x0d1117,
            resolution: window.devicePixelRatio || 0.9,
        }) || this;
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
        this.view.width = rect.width - 5;
        this.view.height = rect.height - 5;
        this.screen.width = rect.width - 5;
        this.screen.height = rect.height - 5;
        this.background.tile.width = rect.width - 5;
        this.background.tile.height = rect.height - 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLENBQVM7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLENBQW1CO1FBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQs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RUQsc0JBQUksbUNBQU07YUFBVjtZQUNFLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxRQUFDO2dCQUN6QixJQUFJLEVBQUUsSUFBSTtnQkFDViw2REFBNkQ7Z0JBQzdELGFBQWE7Z0JBQ2IsSUFBSSxFQUFFLGVBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHO2FBQzVELENBQUMsRUFMd0IsQ0FLeEIsQ0FBQyxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFDSCxzQkFBQztBQUFELENBQUM7QUE3RlksMENBQWU7Ozs7Ozs7Ozs7O0FDZDVCOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvYXNzZXRzL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2JhY2tncm91bmQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvYmFzZS5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9jb21wb25lbnQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvbGluZS5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9wbGFuZS5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy90ZXh0LmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvbGFiZWwud2lkZ2V0LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy93aWRnZXRzL21lbnUud2lkZ2V0LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy93aWRnZXRzL3Nwcml0ZS53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvc2VydmljZXMvZWxlbWVudHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9PSVMvZXh0ZXJuYWwgdW1kIHtcImNvbW1vbmpzXCI6XCJwaXhpLmpzXCIsXCJjb21tb25qczJcIjpcInBpeGkuanNcIixcInVtZFwiOlwicGl4aS5qc1wiLFwic2NyaXB0XCI6XCJQSVhJXCIsXCJyb290XCI6XCJQSVhJXCJ9Iiwid2VicGFjazovL09JUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL09JUy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGl4aS5qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJPSVNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJwaXhpLmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPSVNcIl0gPSBmYWN0b3J5KHJvb3RbXCJQSVhJXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXykgPT4ge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBiYXNlQXNzZXRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwic2VsZWN0XCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBWUFBQUNvWUFEMkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFET1NVUkJWSGdCN2RqTkRZTXdEQVhnTndJak1FSkhZUVBZcE4yazNZQlJPZ0lqZEFUWGxueXBWTVU1Uk9RQnRtUnh5RHQ4Q2o4aEFmNlVpTnkwTjd1aVVEbytldTRSNUFidHQvWUxRV25tN3RtaEZFcmcwWUhiRVlBajlnSjZkbTBHOUdCcjRMTWxVTWRuc0FNdEIzWmc5S3oyQm42S2R6bUJDVXdnTjNBS2dSN3NCYXhlanNFT2xHakZZUUNHazVqQVJzQVY1TUR5WGlPQkNid3kwTVBVUUp0RXNBTWwrbFluTUlHL1FQdGhuVUFPWExBemNFN2dxWUVlcEFiYWV3SjJvRlFlL1hVRlN1WFIzNExPd0M4TkswN2hSZlF6WEFBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiYmdcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUE4Q0FZQUFBQ1FQeC9PQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWFaU1VSQlZIZ0I1VnhCVHh3M0ZINWVRSzBhRUFPcG1raHRKUzhuQkVSZGZrSEpMMmo0QllGZmtPVFVJOHVwUitBWExEbjFDRGxGUFMzOEFrQWhWZHBEZDNxTDBrcWRTQ0JSQldieW5qMlpYV0IzeGpOano5aktKNjFZZHIwejl0aiszbnVmbjgwZ0J1ZnozUGZmK09BSWVIT3hCOEQ0OEc4ajMrKzlib0lqNEp4N0FCNzQvbkhRa0IvTWMyQmpYVDYzMkJIdkxZZG9RQVFIK0RiQXY4ZkpGeEh6eFY4RysrQUlPRjlZQXphRmcrdi9GZnFmOWIrZ2poaC9Db3o5aEkxODV2dXZyR3dVNTBzcldNY09SSkVQY0xsK2MxYkxkb3kxZ1RWK2hPaHEwL2QvM3dVTGdSM1J3anB1NGJNbVlEMVBEMFlVbk9laTBaWkIxS3U1MUNXcVVxa2ZqVHhSMXRKWkw1L3o0bE1vQXNseDlZRHV6ZWVXTm5qekFYVkVPMjlkeEcrYVN4RmRBeHpBV0ZZQnpsc2VzSWtqei92NmZSRDhjd3dWUXRMVEZ5OXhXbU1uWEs0aS9ld0hRWENSNXhwQjhPN0E4MmFmbzMxWjlXYnViOVhUam9XV04zUHZWN3ozQ2Q3N2JWcFpCZ3FRUm45OEQ0dWpNZjN3MExRM0Z0K3ZnMWFhNDROY0g4bXZ1YTlMQnBSdFlLc1BJQ1Q3WXJvZE9Kc2JVeHRvNzlid2hmZDd2WjMxbXdZb2dDcnU5MDZYeVVpaTRWOERRL2hFVHpnanV6Z3JEaUU2WDliVkdRUXk4TUlkRHRuZjJPRTk4elIyWnczQ2lFRjAxbFRwRElMU0RLa0NXZDZUL3Z1NTRZM2xCcDk3c0ZmR2k4bnJQZW1HTG04c2NUN0k1cGFBRW1XbElyeDZVU1NvTkUxUHF0QkJZMGx3RjhJTXhhcGxvSVd5K2tFbC9JQzI1bUYyK1dycFNSVkZhQXdaWWd2dFJBdlNnanRiVVRjOXFTSVBqZW1PMFRMamtES2dobm5lM2NEekpzR2IvZTVudk4wMjB0TUxnSE9jRlgrK0FVdEJjUXErZHJ6cGU4czRXL2E4Mlc4ZytPL2RJWDFIQXdsakc3OWZObDljbEFXalhoWkZ5VWhOajhVL2x0R1RLcTdSR0tySVVuc2FYeVZsRmd5Z3ZGRWZBUm5jQVRZaUJQbUNROWM2Z3hEWEdTUDd5Qk9CYW9NRzFvVXhLVWw3aHd6MW5zVGF4SmxTWUdRbnJ2WkZjRmRCVUttVnNsUzlKMGtEalJXcnBYRUlnL1Q2bXdrcXRSaDFxaUFLZDN2QVNMTUIwcDQyZytEZmtSenJlZmR4TFFDMjBGaTJ2T203SjJsbHF3VE5ibS8yKzE5d25OSnMvbU9VQ0VuMXhlLzJTYWdrYlV4bk8wcFJWdEhnanNyMHB6OEdsU1dqVzIxZ1UwZDk3U2w3MUZldmphV0E2Q2xlbytpNnNPeXJnakl4UmJ6Z3RDdWZDVWJ1QlpIYmhwaVN4cE5ydzlnVE5LSTcxVWpqazA4Z0hOL1I2Y0tXbGZpVkthc0s3VWxXbnIwM1BmMTFhazgzVVpiR0ZCZW9hcExHNGFxdCsxN0NYalV1TzlnWk82YTFweUxlR011OG9DRjYrcHlRaDhZYXd5OWdoelIrclU1a0xBdEs0eWhvSHRYcHllV2hzVnN6eEExcFBEdHZURG52cVdJbzA1aFQwcmlJcExQS2xjaDdxZ0NqSkg1R09Vc2d4RE9HOWlMY2gvQWNSNTl2UmVTc0FxTFhUL1VkZk84S2NQQnZJMCtocTA5cHNCRWZqei9IRVlmOUVwRys1RmFEQUw1NmhQWmxRMGpqakdnVzFzRWxVT3F1NEZWMG5PQ1dVUS9CUFRBdmtjYkphRHFINjg5Y2RvaURXZU45REVqamNMa0xEbUZZRnYrTjdIZEhzc1pCdUpMSDZlVnNsL2lIZTdORDNONXEweTFWY1QwdE0zeVc5YUJsZzZPT2ZlMUlEN1p2QllaV1NjcURZSlBkZk5LNFhSSy9sbUJibDZTc0E3clRiYXBFbnFVS1JYR3hqcXh4L2RKNGNtMjRzMUdOeEo5ZkMxVE1mcStPeGt4SzR3UVpaNW1WK012UVU3RUZLa1BlV0MzU3VHYUp2NndXV0RqcnhGWnZyQzdvV3Fvb25PU2dLMnU4Ym1sOEVFVWtmcTU1cVVKajlyczZqYmtoamF0SS9IWXVWU1JRelJxbkRyRmVHayt0dnh0TEZRbUdiVVYyTzQ2UWRlY2x0Mmlyd0ZqMis1Q3M4Uk9rSm10blJScXF6T0kzbHYwdUt0eGd2WUdzOFdrWEUrcXVaL0ZIQVhhTTBVTjZqSFdJUUVoZVJ6Vlo0N294UEl1ZnRvWkhiaTJBcGNFbWJTd05lYlFuM1haRWs5dWJTT01yWWhSbGxyZFY0czhmM0lsTm54RTgwblhDUmVudENQTGhmdmtTTytNRTRHeGRaYzlkMmg2K09pQzNJUlRiQTRuMS9rMXVTMmgwNUxhRWJ3K0Q0SzNXZlllNVFGa1RaWHp4dW1sTVZ4Wi9mS3hWRzByQ29xTTFxcGI0N1V5VHplVmxpUWpXa0pkVWxjU3ZXM3RLdnhjOXIzd25YQ2gxaUpBNlVDckE0bytGSzJzUStIRGFFRjFpeDBSTjNUUW10U2ZhSlFVcjBnaWZ0czNtb1lVNDIybnRaYUtyMm81TXlwSUhtSDA0d3RHMG8zckVrQzdvb3JHNjZTazVieXdLMTdPeVpheXhJV21RMGdWUXg3VDl2MDQzMVg4WEx3VkhqQTRRZTA1YnMyM1B6QnlXQnFTVTkxUTE4a3Y4ZGt2am8vTEdCaExsOHVVOTFZVXNHbk5sazlHb1l4TlovOHVKbzNoYXQyMmYxb1NiV2VQeHg4NWw4U2NETEI0OEF6TmtvV1ViVGFXQlBMQ0JqcmdCNXZ1OVZ3NGROVTcwZFJIUUFQb0lRSFVQb3A3TGhWRUFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInNlbGVjdGVkVGlsZVwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQThDQVlBQUFDUVB4L09BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBUWpTVVJCVkhnQjdadzlUOXRBR01mLzU3aEZxa0lITnZxaU1yUVNROVVCaVptaFg0Q0ZMVWl3WnVuWW9XdVhyaDNvQ0ZMWVdQZ0VsZG9WbGFIcVFOVU9WQlRhcFIwSW9JYkV2ajRtQ1lUd0pMbkVML2Rja3A4VTJWeWM1T3gvN25lUFl3c0Z4eWtXZGY3MEZBcytVRDQrdys3V2xqcUJ3eWc0eXRLU3ZwM1A0Nm11WVpaMjRrL1VSc3RwN2VQeitycmFoYU00R1VpaG9LZDloUVZhUFZjKzlzTVFsYWpkOHpDaFFqeWd2KzhnaDA4Ykcrb2JITU9wUUpwNlVncFRkTkMvMC9LWTJ5NElNT1g3bU1scC9IQk5ZMDRFMHE2bjBNTlBrOWQ1TkZwYzA1ajRRRHJweVJUWE5DWTJFRk05bWVLS3hzUUZNcWllVEpHdU1WR0J4TldUS1pJMUppS1FwUFZraWtTTldRMGtiVDJaSWtsajFnTEpTayttU05GWTVvSFkwcE1wdGpXV1dTQlM5R1NLTFkxbEVvZzBQWmxpUTJPcEJpSmRUNlprcWJGVUFuRk5UNlprb2JIRUEzRlZUNmFrcmJIRUFoa1dQWm1TbHNaaUJ6S3NlaklsYVkzRkNtVFk5V1JLa2hvYktKQlIwNU1wU1dpc3IwQkdYVStteE5HWWNTQmpQZlhIb0JyckdjaFlUL0hvVjJNZEE1R21KOUxBT2kzbTZYRVlBdS9nWWJ2bmkwSXNlZ29GNkl0OUtBVWUzc0FTcGhwakE1R29KeHIrTDZtenl5MU5lOVN2Ri9CeHlHdzdUOXNXVVErd2pzWk9tTU1xTEdLaXNXdUJpTmRUOUkzWGRLQVY3aldiYUFlMmc1QkdEQVdqYXBqMGNpaHEzUktjeHBGV2VLVTk3RUFJM1RSMkVZaHIxWk1LVUtRdlMzVFFKeHROaHhwNFQzMWZiR2tyVXpBbENxcEV5eklFd21sTXVWbzlxV2lVUk1IVVE3aitISTBhMHRNYUJYRUU0YlJyektPaGs2ZWQwL1FJcWxVNGc2NTJyeEI3UFMrRjZKaFRHSDZVUWEyR2s4dE9yeGIwSEkyUVoxVEIvS1p2MWdHRTBwZ25saHZ6eEpXZWFGUW9qZWN0ODB1WmRySVVLS3hCS05TL2h6VEtwNmpmZXljVmZLRzU1UHpHcEY0NXhSeE5rbzlvK096VFR2K0ZJQnJWMDJ0YXZkOXNveUJLcU91cDNFRmo1bVZ5UmxCZjcxSng4amc2dm1jVmZMZ3hxYmV6c3FLZjBNN1AwZXEvYW9pRFhNNyt2Tkp5SGxLSHlsaXFudGE0NmlrS2hpYit0N1E2ZTlsbStUd2tncXFyQ1pxdlo2aC90K2k0ZnR6Y1ZML2F0K25xV1VrYXV6d1AwZmdha29xTVR3eWJaYkxsOHhCT1QreDJ2ZDVJdXNhazAwMVBITWFWaUVTTlNjWkVUeHg5bDRhdVZHTTJNZFVUKzFvTXdGaGpQUDNxaVNQV3lkTllZM1VHMVJOSEltZXpvNnl4T0hwaTN3OEpNV29hUzBKUEhJbi8zalBzR2t0U1R4eXAvUUEzakJwTFdrL3NaeUJGaGtWamFlbUpJNU9mcUYzVldOcDY0c2owbW9GTEdzdENUK3puSW1Pa2F5eExQWEZZdTZvbVRXTTI5TVJoL1RLbkJJM1owaFBiRndqQWxzWnM2NGxEMUkwQVdXbE1pcDQ0Uk42WmthYkdKT21KUS9TL1owcFNZeEwxeENIKzNxVzRHcE9zSnc0bmJpYUxHRVJqMHZYRTRVd2dFYVlhYzBWUEhFNEYwcVNUeGx6VEU0ZVRnVFJwMWRoRmcyTjY0bkE2a0lpbXhtb0JKbDNURThkLy9IcndNbDJUK0ZFQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZGVsZXRlQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFHL1NVUkJWSGdCN1pmZnJRRkJGTWEvdmJtdk5LQUFOS0FBMFFEdmFJQjNGRUFCTklCM0drQUJHa0FCR3FDQWUrK1h6V1R2dzh6SU9iTWprY3d2eEdic245L01ublAyYlBZRC9IMCtoeTk4R0VrNE5razROa2s0TmtrNE5razROdDhvZzBvRjZQV0FWZ3RvTm9GYUxSKy8zNEhMQlRnY2dQMGVaWkFGTnorZERyQllBTldxZnovS0w1ZkI0bUhDc3hrd0hJb093V3FWaXl2UngvQjRMSmNsbzFFK1VTVTY0VzQzdjdBV1RwU2hwRUFYRXFkVGtWaGFIZytnM1FhZVQ5Rmg4aFhtNnRwa0tjQ0U0cTl2ek1Ba1pXVVJJaGQyM1VxV3Jza0VHQXh5UVg2NXpiSHoyWDRNeTZBUWVSMW1uYlhCaWF6WGVkMmxLT0UyOTNlSnVjN2xRUjdEdDV2N1A2NXF2dzljcjRYUVp1T3YwZlU2SkpUL2FNNHl4RVF1ekNlV0RST3pKZ3dhalNJOGJFbm5PNWNIdVRBbGJERHBqQ3pEWUxzdHBGMUo1enFYQjNuUzhlSzJTc0V4eGlvVHpNUXNwYm0vSytrNFNTSHlwS1BNOGZpNjJYa0Z3NEVQRGlIeWtHQThUcWNJUnRrQTZhb0VieVZycnBhQU5sTmYxdVp6M1NweG9td3hsWVEzOE93dDJHcSthb1pNS0NrUzdUL2h3Z2FLczFMWVhwRllLWFk3Y1dkbW96emhONUZlODJPVGhHT1RoR09UaEdPVGhHUHpjY0svSGd1YVVFL2Y5ZkVBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJjb3B5QlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGcVNVUkJWSGdCN1pnOVM4TlFGSWJmU29mVXVZT29VNjBPZ2pnVVB3YWxLSWlESUE2aWRORFYxYi9oSWk0S1hSeDBFWndkeEVFUkIwRVhRYWMyWGZ6QW9kak5kTk43QThHbFlBNmNrL1NXOHl3SitZQW5OeWZ2dlRtWmZIN2dCdzdSQjhmSVJqdk41aWU2R1ZNSjRkYTVFVlpoYVZSWUdoV1dSb1dseVlJSno4dGhzN0tGUW5FVVhxNy8zK3MvM3Q5d2NseEZxL1VGQ213alBGZGV3UGpFWkN4WnkrRFFNRFlxMjZEQ0psd1lHUU1WK3phbzZFY25UZStuaEUyRCtmS2lxZG0vK3FzZUhTQXB5TUtyYStzb1RjOGlMY2dsa2Fhc1JUODZhZGlFMjhFM2tvQkYyQ2FHNzlkQTVmSGhIbFJZRmo5THl5dGh0TFdEQUtXcG1WajNOTXdEM3QzZWdFb202dnpFN1V2czdSOTJQTjZvMTNCMWVSR0tTQkQxSmRpV2wzWWhzMVBjN1hqT1Bnelg1S0t4SmcxWjJLL1RhOVJuckd1eThQblpxZm05ZVkxMXJVMk5sK2Nua3diWDRJS2NFbW1oM2N1a1VHRnBWRmdhRlpiRzNiNUVOSk4wTzg2TjhDK2tabEtNa2pJcEZnQUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInBvaW50QlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFLR1NVUkJWSGdCN1pnOVNCeEJGTWZmSmhhM1I1cmJTQ0tYTCtKcEdoTXRBaUdGQ0FrSmtnakJJaEVza2paRm1oUXBoSHlTQkpJbWtEWk5pcVFJQkFVL1VCQUZRUlFVT1VSUkM3OHF2d3E5QTVXNzYvUzlwN09NNTNMYzdyMFZGL1ozSERQN1ptZnZmMi9ldkpsWm83eThZZzhDeEJrSUdHV3Fzcm01QWFjWmpBUXVBK2ZoVUxEZmhJTDlKaFRzTjZGZ3Z5a0RZV0l4QzE2K2VzMzFueisrUVM2YkJVbkVQUnl6enR2ZmVQd3lTQ01tbUR6N29QRXhDN1Z0V0djYnRra2hGaExQV2w5QW9xb2FReUJqMjFwYW4zTVp2M1FGL3Z6K0JSS0llWGgyWm9yTGlCazkxcmErdWdKU2lBa2VIUjZDZ2Y3ZVkvYkIvajVIdTFmT1JxUG5QbEVsazlsMTA0L2pzZ1hENE1MRkNsaGVXbUNiS2hOVk44QkpiSDNEUFhqVTFBekxpL09ReTduTEhxaVRTODh4ZlB2T1hhaTVWY3RmUWdramtlbFVpdXZKaVRIN2ZwcDhEeHViN0w1MG54ZGNlemdTTWVIcXRldFlNMUJzSGRzcWNiSVorRkVlVHFlMllIZG4yL2FpTGphTGVYbHFNZ21tYWZKMXNaNVdIamJVSWJUWUkxTGJ1ODlIVXBmTy8zOS9lYmpiM24vaDY0OXYzMEROelRvN1crUkRmK3o3MXc5UURDVWNrWXlDcmJySFRJZU00ZVpaamozY2VwaFhNWnh3VkQ1cGZvcHA3R0JvOVFsR2JUVDBLaWZySVVIUVNKQjMxOVpXaitUdFFuajJNUDBReFdyTXNoekZFcFdKYWd5Rld2czZ2NTM2MGpPS0ZhdmpPVXNrSjhaWjJOek1OSXhnRGxibzNyVFEwM3IySUdoL1FYMjk0am9rQ3BFLzlJVFV3aUgrWHNKSnJMTFhOOXdIS2NRRU8yMGwxVjVZaitkU0VkdXQ5WFIxNEt4ZjRWVk81ZDN1em5hZVlLWEViRDVpZ2lsN1VMelNSTlJ0K3ZJc2dmZ1JhZjNReTBRNm5RSnBSTE9FbjRSdkwwK0tVTERmaElMOUpoVHNOOEY5ZTZsV2t0Tk80RHk4RDdRVzhXREdINXRXQUFBQUFFbEZUa1N1UW1DQ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJlbGVtZW50XCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1lBQUFCNUNBWUFBQURMWDFRc0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFacVNVUkJWSGdCN1oxdFNKMVZITUQvajkxTm5hQlhyZDEwV2JyMnBRK0RUTWdQaTVnUTFpMElvWDJKRWpmMmdrSE1VVEZpQkdtRnROR0grbEJSTGZKREVSUTRZOGlsTjdKd0VGcU01b2NVY2J0bE1rZms1cnN1ODNiT3RVZE16L1dlNStXYzUzOGUveis0N0hKM3IyNyt1TDl6bm5QdTgyaEJDRWo4ZXJWeWNYbmgwOW5wNldzbFJiZWRpTjlUbGdURHNjQmd6bDI4RXMyTDdtaXhsdUZFQ2xMUjFiL0lzVnJqVmJFMk1CaGp4WndmdnJvL2ttTjl4TzVXWm5oS2NqbVZhbnRzVDFrSEdJaHhZbmkySUpjSlNjRit1VmRZSFhCenVjMjB2QmtqSm1PMlpERXNiMGFJa2NpV0xNYmtEYlVZNTltU0JYL2VVSXJ4bkMxWkVPY05uUmdmc3lVTHlyeWhFYU11VzdMZ3lsdmdZclJsU3hZa2VRdFVUQURaa2lYd3ZBVWlKdmhzeVJKYzNyU0tRWmN0V1FMSW16WXhpTE1saTlhOEtSZGpUclprMFpNM1pXS016WllzaXZPbVJFd0lzaVdMc3J6NUtpWjgyWkxGLzd6NUlpYjAyWkxGeDd4NUZyT0ZzaVdMTDNsekxXYnJaa3NXYjNsekxJYXk1UkNYZVhNa2hyTGxHc2Q1a3hKRDJmSUwrYnh0S29heXBRaUp2R1VVUTlsU3pxWjUyeUNHc3FVYmNkNVd4VkMyQW1aZDN0SmlLRnRvV00xYldzd25GL3BUaGFVeGlHemJEa1J3NUVkdWdiMDdDNkUwUDllSzhBZm1waWJTdDhMUzI0RUxJdlFTeWNtQnlxSjhkaXRnOTFkR2w4amFKMHo5TlE2emFVRXhLQ2dzQVVJOUpYbmIyTHVrS1AxdVdVdGsvUlAvK2ZzbVhCOGZoY1c1V2FDOHFjUE9Wa21lK09jYnlmUkN5cHNhUk5rU1BpL2JGNks4K1VlbWJJbklLb1pEZWZOR3RteUprQkpqUTNsemhteTJoSzhGRjFEZXN1TWtXeUpjaWVGUTNzUzR5WllJMTJKc0tHOHJlTW1XOE91QlQyemx2SG5ObGdqZnhIQzJXdDc4eXBZSVg4WFloRDF2Zm1kTCtEMUFJV0hNbTRwc2lWQXFoaE9XdktuTWxnamxZbXhNelp1T2JBbS9MMmpHcEx6cHlwWUk3V0k0MlBPbU8xc2lBaEZqZ3kxdlFXVkwrRzhCQkdESVc1RFpFb0ZDRENlb3ZHSElsZ2cwWW14MDVRMVR0a1NnRTJPak1tL1lzaVVDclJpTzMzbkRtaTBScU1YWWVNMGI5bXlKTUVLTWpadThtWkF0RVVhSjRjam16YVJzaVRCT2pFMm12Sm1ZTFJIR2lyRlptN2VLblRFanN5VWlCMEtBbmJmN3kwdENJWVVUQ2pGaGhNUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hZc3BCd0liWmVsM1RFLzMrWTlucHFjbmdRaVVpWW1KeVphV2xyZlpYV3Z0bVQwUGZKQklQTVRlUkMrRG9SeDVwQjRNNVFhN3ZWVmJXOXZmMTlmM0xidS9zT0dVcTNjVGljcElDbHJCeW1rQ3d6QlVUQSs3SGJJc0s3bjJ3UTJEL3pQeGVQTG9vL0dES1ZnK3RMaTRlQTBJSmN6TnpmR2ZiUjBUVXJkZUNpZmpyT3hZUE43eGJNUGpUL2QvLzEwdkVMNHhQeisvMk5YVjlVMWRYZDFoSnFRbjAvT3luUmQzK2VmZTNxNC9rbGVHbzhVbFZhV3hHT29yd04yMzUyN0F6TkRRME85TlRVMnZ0N2UzbnhvYkc3dTAyWE9kbk5aYjgrclpzdy9HZGxVY3Q1RCt5aXpFWTB5U0RlclBzY0g5RjNiL3Nzd0xYSjF2eldadnJSaG5id2pGcEdkYjdQWW15OVlOSnk5MGRlUi9OQjV2WFlMbHFxbUppUytBRU1JRzl4L1pIOVZNU0t0VEtSelhTeko4OXZiOFUwK2Vvb1BULzJNZkpCWVVGRHdobW0zSjR2V2srRDhIK3ZyT2ZmbjVaeitWVmR5eGUxZGwxWjBRSUVFTy9ueTIxZDNkM2RQYzNIeXlzN1B6UGZiUWRmQ0FYMWNyU00vZVptYW1mOWhiVTdQRUZoVHVoUUFJVUF3WDhpTGp6SCt6clNYd2lKS0xyYnlmU0J6a2t3UGRzN2NBQnY4a3JCeTE5NERQS0ZuMjV3ZW54K0lQVjgzUFRwK0dFTUt6TlRrNXlmOXYxU3FrY0pUdXh4dy9jS0QxbmRkZU9USThNREFBSVlFZkpEWTBOTHdValVaUHU1bHR5YUw2aWpoTDQ2T2pGeTk4L1ZWZllYRjB4NjFsNVhkdHo4M05BMFdvSEdQNGJJdU5JUjgyTmpZMmo0eU1kTE9IRmtBaHVpL29wWFJyUWRFWXMyRkpIalFReUpYV1ZHMHRLQkRUQTRJbGVSMEVzdWVQZldzaDI1SzhEZ0w5TUFhMnJRWFpKWGtkWUxnY25tOWJDMTRHZnlkTDhqckFkalZQVDFzTExzY1l4MHZ5T2tCN21WVTNXd3NPeGJoZWt0Y0IyZy84cWR4YThMb2tyd1BVbjhUMGUydkJyeVY1SFpod0xWenByWVZNZzcvZlMvSTZNT2tpeFZtM0ZqS0k4WDFKWGdmR1htTmR0TFd3YnZCUGdxSWxlUjBZKzJuL1RGc0xPcGJrQ1RueXF2ZnRPM3p5ekJ1WEJnY0hmNnV2cjMrQlBWWU1CQnBxMkcwM2hJUi9BVGFHZCt6dkgvTFFBQUFBQUVsRlRrU3VRbUNDXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInNldHRpbmdzQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFKL1NVUkJWSGdCN1poTlR4TlJGSVpmbEFWdFhOaENsQlJXcmJnUUZST0tZVUZJTkJvVGwwUkp1cENGQzBsMHcwL3dKN2d5WVdPaUxraFFFNkp4WWZ3QmlzRENEMWdJclZGaFVENWFGcVJ0QWdtY2M4TUFuV2tienZSZXdvUjVOcDE3ZStmT08rZWVyMHhkVTFQekZuekVDZmlNZXZ0aVplVWZqakxrQ2VyWGR4WU9CSnNtRUd5YVFMQnBBc0dtcVlkR0lwRW9CaDhOSVJKdFZHTnJZUjZqSXkreGFNMURGMW90M0htMWUxY3NFMnRwUlpMbWRLSlZjRHh4M2pVWGk3VkNKeWZENFZPUCtTS2ZYNWZjaDU3ZWEraTRrc1RtNWdZS2hRTDY3cVRRZnFuRHRZNHRIbzAwS3ZkZ2kvZjBYc2VaczgzNDgvc1hKSkJPOVZ0bjk4T1NicTJ6cXh2OXFYdW9oZWZQaGpIejQ5dUIxOWZVcmQyOGRSdTEwcDhhUUVNb0JDbGl3ZTBYTDVjRVZqbHkyVlVVeVUycUVTS3h2SmNVY1ZxenJBVVNsQ1hSVWRkL1BEODY4Z0taOUt3YXh4TnR5cEtWMW1iU2M1QWl0akJiYi9qcEUvVkFKMi9IWHUyS1pmaWFYOEM5UjNabmoxVkk4ZVREL0tESmlVOGxjNXdweWdVUmkzYTZCOS9yUlN4elBIb0pMc0hKcnRJS3hrSEVQdXVFQTh1WkRmaGUzc01MNHNMaDdCZjJrempYcG81NmVlbS9Hdk1MOU4xTjBjdUVTOWJ4bUl2TTlQZXZLQllMT0FoMjRSQm5pVGlKcXBUV2VIN2cvaUQ1YkY2Tkd4eENuV3U1OHVWeVdVZ1FDK2JBNGlDcWx2U3JDYlhoVERFdHFIUTJZaC9tYkZBdVZVbjUrT0U5dk9DcEgyYkx2QnQ3amROMHJEUGtoM3lzTjZoY093UFJabkxpTTYxL1E1MWJDeTZRNzY2Um4wL1JuQmM4TlQrVmVQQndTQVhlZmpKenM2cEkxSXFSVDFXTDFsL1hYRHI5RXpyUktuanF5emoxdlh1aWMrcm94NkVUclM1aGt1RHI1V0VSQ0RaTklOZzBnV0RUK1BmcnBWMUpqanErcy9BMmJybmJ5bDlxQVM0QUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwidXBCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZKU1VSQlZIZ0I3ZGsvYThKQUdNZnhYMHFIT0VZZDJyUlRTNWUyZENtRnZwSkNGNGN1RGwzNlVseGEwS1ZRaHhaZlNhRjBhUDB6NlNiaW9ISHpzc1c3MHhQQjhaNUhERHhmT0F3WGtBL0hCVHdUbE10SEdYTFVBWExXb2J1WVRNYlk1L1JPc0orNVcyRUJjeWRnN2dUTW5ZQzVFekIzQXVaT3dLYXo4d3RjWHQrQUkzSndISitnK3Z5Q2g4Y0tqdU5UVUVjS2R0amZuMi8wMm4vMm1ocE5CbmJZYnVjZnJjOG1XbDlORmpRWnVQSlVSWkxNTERhS2luWVk5Q3laV2pSVmdUczErNTdwcnZSRE5oajBVUWpETmJEK1drT2FLbzB2WVRRYXdpZnlNNTNaQ2c2clZLcUhzdGRoV1BER2JrWUdObHRndWJJQjZtODFOUFJ3YUhPUEtqTHdKalpWYzR2OWVHL1lPY285YlBaR3R0ckhYdVAyN2o2TGlxV3RlVE5uN3ZsK3YzT1NQWFRjeVI4cHUwckEzQW1ZT3dGekoyRHVCTXlkZ0xsYnY2ZHpQOS8ydmR5dDhBS1JiSTdpT3h0bTl3QUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImRvd25CVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZpU1VSQlZIZ0I3WmUvU2dOQkVNYS9reFMzZG5lbTBPQVRhTkJDQkY5QUxPeURGckd3T2RIQ2dKVlBZQ1hFUWlHVmtFYndiZndUbnlBZUZqRjJkNlhaMmJBaElla3lBemt5UDdpN3Zkbm14OXkzeDI1UUxxLy9vMENzb0dDVS9LRFgrOEVpWTVQZ25vWHJzQXBMbzhMU3FMQTBLaXlOQ2t1and0SXNyL0RlL2dHaUtKNnFVNDNtdUdBVFBqdzZSbkxWbUpDbU1kVm9qZ3MyNGRaVDA5NERuSjBuQ0kxQkdCb25TN1hoSEErQlA5TnhuRGlpZUEzSlpRTjVucmwzWTFhZDdGLy9GL1BDZnVMWXFHdzZVUklrVVMrYlp4bTJxanZnb2dRbUx1em43OXRPUHR6ZmpTSkFuYjIrdVhYeVg1L3Y0SUF2dzQ5TnhEWVN0Wk82RTZXcmRscDN0Zlp6QzF5d1pyaGlZMEVMcmZQeFJtc04yOVZkMSszMHU0dDU4UmxtRlNhOE5QMHBLQjRjc29RWFpzdXdKMDI3ZUgxcDJ3V1lzOG1Pd3k1TWRKZ1cyQ3gwOHlPTkNrdWp3dEtvc0RRcUxJMEtTNlBDMG95MmwzNkR2T2dVcnNNRDZRbG0yY0duZy9jQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwicGx1c0JUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRXpTVVJCVkhnQjdaaTlhZ0pCRU1mL0YzeUJNeGJCZERGSmtXQlNTRDdlSUkrU0lrMUtDN0VRQzBzclFRdkJseEFFSDhBUGJGUXMvS3BFTGZUdUVmUnU0UXFMRlZkMzFJWDV3WElET3h3LzlvWlo1cXhJNUc0RGc3aUJZWVNDWUxWYTRwcnhLa0U4alR0aEZxYUdoYWxoWVdwWW1Kb1FOR1BiWWZ6Ky9ZdTRVaTVoTVo5Qko5cFBPUEg1RFR0OEs5WnIvQTI2NFJxbWhvV3BZV0ZxbFB0d05IcVBsL2k3ZEQ4V2U5Nk5mNlNwNkxRYWNGMEhLbGpCRUhyb2lKUk1aVVNQMVlIcnJKSExwZy9LUFdGRXNxQVA5WGNwbDBTeGtFZmk0MHU2NzVmQncrT1RpS2ZqRVNhVG9UUjMwTzlDRldWaC96UFdhMVY1Z2xlemdiQXZ1emYzQ0xpdFVjUEMxTEF3TmRxRkI3MnUxL29jc1RydEpuU2pmRFZmQ3Y1N2VTNVltQm9XcG9hRnFURjNhZzV1a212SHVCUGVBZ2ZBUWNVcFJDZzVBQUFBQUVsRlRrU3VRbUNDXCIsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgSW50ZXJhY3Rpb25FdmVudCwgVGV4dHVyZSwgVGlsaW5nU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XHJcbiAgcHVibGljIHRpbGU6IFRpbGluZ1Nwcml0ZTtcclxuICBwcml2YXRlIHN0YXJ0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgcHJpdmF0ZSBkcmFnZ2luZzogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwKSB7XHJcbiAgICB0aGlzLnRpbGUgPSBuZXcgVGlsaW5nU3ByaXRlKFxyXG4gICAgICBUZXh0dXJlLmZyb20oXCJiZ1wiKSxcclxuICAgICAgdGhpcy5hcHAuc2NyZWVuLndpZHRoLFxyXG4gICAgICB0aGlzLmFwcC5zY3JlZW4uaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy50aWxlLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudGlsZVxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4gdGhpcy5wb2ludGVyRG93bihlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHRoaXMucG9pbnRlclVwKCkpXHJcbiAgICAgIC8vIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4gdGhpcy5wb2ludGVyT3V0KCkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJNb3ZlKGUpKTtcclxuICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMudGlsZSk7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmFwcC5vZmZzZXQueCAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggfHxcclxuICAgICAgICB0aGlzLmFwcC5vZmZzZXQueSAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnlcclxuICAgICAgKVxyXG4gICAgICAgIHRoaXMubW92ZVRvT2Zmc2V0KGQpO1xyXG4gICAgICBpZiAodGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnggIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54KVxyXG4gICAgICAgIHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi54ID0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54O1xyXG4gICAgICBpZiAodGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnkgIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55KVxyXG4gICAgICAgIHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi55ID0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9PZmZzZXQoZDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID4gdGhpcy5hcHAub2Zmc2V0LngpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IC09IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA8IHRoaXMuYXBwLm9mZnNldC54KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA9IHRoaXMuYXBwLm9mZnNldC54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA8IHRoaXMuYXBwLm9mZnNldC54KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCArPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPiB0aGlzLmFwcC5vZmZzZXQueClcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPSB0aGlzLmFwcC5vZmZzZXQueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPiB0aGlzLmFwcC5vZmZzZXQueSkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgLT0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5hcHAub2Zmc2V0LnkpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID0gdGhpcy5hcHAub2Zmc2V0Lnk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55IDwgdGhpcy5hcHAub2Zmc2V0LnkpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ICs9IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA+IHRoaXMuYXBwLm9mZnNldC55KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA9IHRoaXMuYXBwLm9mZnNldC55O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9pbnRlckRvd24oZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuYXBwLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuYXBwLnNlbGVjdGVkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy50aWxlLnBhcmVudCk7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICB9XHJcbiAgcG9pbnRlclVwKCkge1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyBwb2ludGVyT3V0KCkge1xyXG4gIC8vICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gIC8vIH1cclxuICBwb2ludGVyTW92ZShlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMudGlsZS5wYXJlbnQpO1xyXG4gICAgICBjb25zdCB4ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuc3RhcnQueDtcclxuICAgICAgY29uc3QgeSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnN0YXJ0Lnk7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCArPSB4O1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgKz0geTtcclxuICAgICAgdGhpcy5zdGFydC54ICs9IHg7XHJcbiAgICAgIHRoaXMuc3RhcnQueSArPSB5O1xyXG4gICAgICB0aGlzLmFwcC5vZmZzZXQueCArPSB4O1xyXG4gICAgICB0aGlzLmFwcC5vZmZzZXQueSArPSB5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIEludGVyYWN0aW9uRXZlbnQsIElQb2ludERhdGEsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTUVOVSB9IGZyb20gXCIuL3dpZGdldHMvbWVudS53aWRnZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlIHtcclxuICBhcHA6IEFwcDtcclxuICBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1lbnU6IE1FTlU7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGN1cnNvcjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgcmVmOiBzdHJpbmc7XHJcbiAgX2NvbG9yOiBudW1iZXI7XHJcbiAgc3RhcnQ6IElQb2ludERhdGE7XHJcbiAgZW5kOiBJUG9pbnREYXRhO1xyXG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XHJcbiAgY29uc3RydWN0b3IoeyByZWYsIGNvbG9yLCB4LCB5LCB6SW5kZXggfTogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnpJbmRleCA9IHpJbmRleDtcclxuICAgIHRoaXMuY29udGFpbmVyLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXIuc29ydGFibGVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4gdGhpcy5wb2ludGVyRG93bihlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJVcChlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoZSkgPT4gdGhpcy5wb2ludGVyT3V0KGUpKVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCAoZSkgPT4gdGhpcy5wb2ludGVyTW92ZShlKSk7XHJcbiAgICB0aGlzLm1lbnUgPSBuZXcgTUVOVSh0aGlzKTtcclxuICAgIHRoaXMuYXBwLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLm1lbnUpO1xyXG4gICAgdGhpcy5hcHAuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcbiAgc2VsZWN0KCkge1xyXG4gICAgaWYgKHRoaXMuYXBwLnNlbGVjdGVkICE9IHRoaXMpIHtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSB0aGlzO1xyXG4gICAgICB0aGlzLm1lbnUub3BlbigpO1xyXG4gICAgICB0aGlzLmFwcC5ldmVudHNbXCJzZWxlY3RcIl0uZm9yRWFjaCgoY2IpID0+IGNiKHRoaXMpKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgdGhpcy5tZW51LmNsb3NlKCk7XHJcbiAgfVxyXG4gIHBvaW50ZXJEb3duKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuc3RhcnQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWxwaGEgPSAwLjg7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuY3Vyc29yID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIpO1xyXG4gICAgLy8gdGhpcy5jb250YWluZXIuekluZGV4ID0gT2JqZWN0LmtleXModGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlZnMpLmxlbmd0aDtcclxuICB9XHJcbiAgcG9pbnRlclVwKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFscGhhID0gMTtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnN0YXJ0ICYmIHRoaXMuc3RhcnQueCAhPSB0aGlzLnggJiYgdGhpcy5zdGFydC55ICE9IHRoaXMueSkge1xyXG4gICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICB0aGlzLnNlbGVjdCgpO1xyXG4gIH1cclxuICBwb2ludGVyT3V0KGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFscGhhID0gMTtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIHRoaXMuZW5kID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgfVxyXG4gIHBvaW50ZXJNb3ZlKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdnaW5nICYmIHRoaXMuYXBwLm1vdmUgJiYgdGhpcy5hcHAuZWRpdCkge1xyXG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICAgIC8vIHRoaXMueCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLmN1cnNvci54O1xyXG4gICAgICAvLyB0aGlzLnkgPSBuZXdQb3NpdGlvbi55IC0gdGhpcy5jdXJzb3IueTtcclxuICAgICAgbmV3UG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLmN1cnNvci54O1xyXG4gICAgICBuZXdQb3NpdGlvbi55ID0gbmV3UG9zaXRpb24ueSAtIHRoaXMuY3Vyc29yLnk7XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54ID49IDI1KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IDI1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPD0gLTI1KSB7XHJcbiAgICAgICAgdGhpcy54IC09IDI1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55ID49IDE1KSB7XHJcbiAgICAgICAgdGhpcy55ICs9IDE1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPD0gLTE1KSB7XHJcbiAgICAgICAgdGhpcy55IC09IDE1O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudS5wb3NpdGlvbi5zZXQodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIucG9zaXRpb24ueDtcclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54ID0geDtcclxuICB9XHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIucG9zaXRpb24ueTtcclxuICB9XHJcbiAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55ID0geTtcclxuICB9XHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgfVxyXG4gIHNldCB6SW5kZXgoaTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci56SW5kZXggPSBpO1xyXG4gIH1cclxuICBnZXQgekluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnpJbmRleDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEdyYXBoaWNzLFxyXG4gIEludGVyYWN0aW9uRXZlbnQsXHJcbiAgVGV4dHVyZSxcclxuICBUaWxpbmdTcHJpdGUsXHJcbiAgdXRpbHMsXHJcbn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgTEFCRUwgfSBmcm9tIFwiLi93aWRnZXRzL2xhYmVsLndpZGdldFwiO1xyXG5pbXBvcnQgeyBTUFJJVEUgfSBmcm9tIFwiLi93aWRnZXRzL3Nwcml0ZS53aWRnZXRcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudFByb3BzLFxyXG4gIENvbXBvbmVudENvbmZpZyxcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb21wb25lbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENPTVBPTkVOVCBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgc2VsZWN0VGlsZSA9IG5ldyBUaWxpbmdTcHJpdGUoVGV4dHVyZS5mcm9tKFwic2VsZWN0XCIpKTtcclxuICBwcml2YXRlIHNlbGVjdEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IENvbXBvbmVudFByb3BzO1xyXG4gIHByaXZhdGUgX3Nwcml0ZSA9IG5ldyBTUFJJVEUoKTtcclxuICBwcml2YXRlIF9sYWJlbCA9IG5ldyBMQUJFTCgpO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMudHlwZSA9IFwiY29tcG9uZW50XCI7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aWxlUG9zaXRpb24ueCArPSBkIC8gNjtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbGVQb3NpdGlvbi55ICs9IGQgLyA2O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgdGhpcy5fbGFiZWwuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUuekluZGV4ID0gMjtcclxuICAgIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ID0gdGhpcy5fbGFiZWwuaGVpZ2h0ICsgMjA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xyXG5cclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwKTtcclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwLCB0aGlzLl9zcHJpdGUud2lkdGggLyA0KTtcclxuICAgIHRoaXMuY2lyY2xlKDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwLCB0aGlzLl9zcHJpdGUud2lkdGggLyAyKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnNldCgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0KCkge1xyXG4gICAgaWYgKHN1cGVyLnNlbGVjdCgpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS53aWR0aCA9IHRoaXMuX3Nwcml0ZS53aWR0aCArIDIwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUuaGVpZ2h0ID0gdGhpcy5fc3ByaXRlLmhlaWdodCArIDIwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCA9IC10aGlzLl9zcHJpdGUud2lkdGggLyAyIC0gMTA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55ID0gdGhpcy5fc3ByaXRlLnkgLSAxMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLmFscGhhID0gMC41O1xyXG4gICAgICB0aGlzLmNyb3NzKHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54LCB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSk7XHJcbiAgICAgIHRoaXMuY3Jvc3MoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnggKyB0aGlzLnNlbGVjdFRpbGUud2lkdGgsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jcm9zcyhcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCxcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSArIHRoaXMuc2VsZWN0VGlsZS5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jcm9zcyhcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCArIHRoaXMuc2VsZWN0VGlsZS53aWR0aCxcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSArIHRoaXMuc2VsZWN0VGlsZS5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zZWxlY3RUaWxlKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zZWxlY3RHcmFwaGljcyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0VGlsZSk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdEdyYXBoaWNzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgbGV0IHJhZCA9IG9mZnNldDtcclxuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgaWYgKHJhZCA+PSB0aGlzLl9zcHJpdGUud2lkdGgpIHtcclxuICAgICAgICByYWQgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJhZCArPSBkIC8gMjtcclxuICAgICAgY29uc3Qgb3BhY2l0eSA9ICh0aGlzLl9zcHJpdGUud2lkdGggLSByYWQpIC8gdGhpcy5fc3ByaXRlLndpZHRoO1xyXG4gICAgICBjaXJjbGUuY2xlYXIoKTtcclxuICAgICAgY2lyY2xlLmxpbmVTdHlsZSgyLCB0aGlzLl9jb2xvciwgb3BhY2l0eSk7XHJcbiAgICAgIGNpcmNsZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIG9wYWNpdHkgLSAwLjEpO1xyXG4gICAgICBjaXJjbGUuZHJhd0VsbGlwc2UoeCwgeSwgcmFkLCByYWQgLyAxLjYpO1xyXG4gICAgfSk7XHJcbiAgICBjaXJjbGUuekluZGV4ID0gMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNpcmNsZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgY3Jvc3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubGluZVN0eWxlKDEsIDB4ZmZmZmZmLCAxKTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubW92ZVRvKHggLSA2LCB5KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubGluZVRvKHggKyA2LCB5KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubW92ZVRvKHgsIHkgLSA2KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MubGluZVRvKHgsIHkgKyA2KTtcclxuICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgcG9pbnRlck1vdmUoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5hcHAubW92ZSAmJiB0aGlzLmFwcC5lZGl0KSB7XHJcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgICAgbmV3UG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLmN1cnNvci54O1xyXG4gICAgICBuZXdQb3NpdGlvbi55ID1cclxuICAgICAgICBuZXdQb3NpdGlvbi55ICtcclxuICAgICAgICAodGhpcy5fbGFiZWwuaGVpZ2h0ICsgdGhpcy5fc3ByaXRlLmhlaWdodCArIDMwIC0gdGhpcy5jdXJzb3IueSk7XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54ID49IDI1KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IDI1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPD0gLTI1KSB7XHJcbiAgICAgICAgdGhpcy54IC09IDI1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55ID49IDE1KSB7XHJcbiAgICAgICAgdGhpcy55ICs9IDE1O1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPD0gLTE1KSB7XHJcbiAgICAgICAgdGhpcy55IC09IDE1O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudS5wb3NpdGlvbi5zZXQodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBDb21wb25lbnRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gVGV4dHVyZS5mcm9tKGAke3Byb3BzLm5hbWV9YCk7XHJcbiAgICB0aGlzLl9sYWJlbC50ZXh0ID0gcHJvcHMubGFiZWw7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fbGFiZWwpIHtcclxuICAgICAgdGhpcy5fbGFiZWwuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgdGhpcy5zZWxlY3RHcmFwaGljcy50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IENvbXBvbmVudENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgR3JhcGhpY3MsXHJcbiAgSW50ZXJhY3Rpb25EYXRhLFxyXG4gIEludGVyYWN0aW9uRXZlbnQsXHJcbiAgU3ByaXRlLFxyXG4gIFRleHR1cmUsXHJcbiAgdXRpbHMsXHJcbn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTGluZVByb3BzLCBMaW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbGluZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExJTkUgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF9saW5lOiBHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBMaW5lUHJvcHM7XHJcbiAgcHJpdmF0ZSBlZGl0UG9pbnRzOiBHcmFwaGljc1tdID0gW107XHJcbiAgcHJpdmF0ZSBkZWxldGVCVE4gPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcImRlbGV0ZUJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBwbHVzQlROID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJwbHVzQlROXCIpKTtcclxuICBwcml2YXRlIHNlbGVjdGVkUG9pbnQ6IHtcclxuICAgIGdyYXBoaWNzOiBHcmFwaGljcztcclxuICAgIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XHJcbiAgICBkcmFnOiBib29sZWFuO1xyXG4gIH0gfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9saW5lKTtcclxuICAgIHRoaXMudHlwZSA9IFwibGluZVwiO1xyXG4gICAgdGhpcy5kZWxldGVCVE4uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5kZWxldGVCVE4uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5hbHBoYSA9IDAuNTtcclxuICAgIHRoaXMuZGVsZXRlQlROLnNjYWxlLnNldCgwLjgsIDAuOCk7XHJcbiAgICB0aGlzLnBsdXNCVE4uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5wbHVzQlROLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5wbHVzQlROLmFscGhhID0gMC41O1xyXG4gICAgdGhpcy5wbHVzQlROLnNjYWxlLnNldCgwLjgsIDAuOCk7XHJcbiAgICB0aGlzLnBsdXNCVE4ub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLl9wcm9wcy5wb2ludHMucHVzaCh7IHg6IHRoaXMucGx1c0JUTi54LCB5OiB0aGlzLnBsdXNCVE4ueSB9KTtcclxuICAgICAgdGhpcy5yZW1vdmVQb2ludHMoKTtcclxuICAgICAgdGhpcy5hZGRFZGl0UG9pbnRzKCk7XHJcbiAgICAgIHRoaXMuZHJhd0xpbmUoKTtcclxuICAgICAgdGhpcy5lZGl0UG9pbnRzW3RoaXMuZWRpdFBvaW50cy5sZW5ndGggLSAxXS5lbWl0KFxyXG4gICAgICAgIFwicG9pbnRlcmRvd25cIixcclxuICAgICAgICBlLFxyXG4gICAgICAgIHRoaXMuZWRpdFBvaW50c1t0aGlzLmVkaXRQb2ludHMubGVuZ3RoIC0gMV0sXHJcbiAgICAgICAgdGhpcy5fcHJvcHMucG9pbnRzW3RoaXMuX3Byb3BzLnBvaW50cy5sZW5ndGggLSAxXVxyXG4gICAgICApO1xyXG4gICAgICAvLyB0aGlzLnNlbGVjdFBvaW50KHRoaXMuZWRpdFBvaW50cy5wb3AoKSwgdGhpcy5fcHJvcHMucG9pbnRzLnBvcCgpLCBlKTtcclxuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5wbHVzQlROKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbHVzQlROLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsdXNCVE4uYWxwaGEgPSAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnBsdXNCVE4ub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHtcclxuICAgICAgdGhpcy5wbHVzQlROLmFscGhhID0gMC41O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQb2ludCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlUG9pbnQodGhpcy5zZWxlY3RlZFBvaW50LnBvaW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5kZWxldGVCVE4uYWxwaGEgPSAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlbGV0ZUJUTi5hbHBoYSA9IDAuNTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludEluTGluZShcclxuICAgIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIG9mZnNldD86IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgTWF0aC5wb3coYi54IC0gYS54LCAyKSArIE1hdGgucG93KGIueSAtIGEueSwgMilcclxuICAgICk7XHJcbiAgICBsZXQgZmFjdG9yID0gc2VnbWVudExlbmd0aCAvIDIgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgaWYgKG9mZnNldCkge1xyXG4gICAgICBmYWN0b3IgPSBvZmZzZXQgLyBzZWdtZW50TGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiBmYWN0b3IsIHk6IGEueSArIChiLnkgLSBhLnkpICogZmFjdG9yIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlZ21lbnRzKFxyXG4gICAgcG9pbnRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSxcclxuICAgIHJhZGl1czogbnVtYmVyXHJcbiAgKToge1xyXG4gICAgc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICAgIGVuZDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgYmF6aWVyPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICB9W10ge1xyXG4gICAgcmV0dXJuIHBvaW50cy5yZWR1Y2UoKGFjYywgcG9pbnQsIGkpID0+IHtcclxuICAgICAgaWYgKHBvaW50c1tpIC0gMV0pIHtcclxuICAgICAgICBpZiAoaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogcG9pbnQsXHJcbiAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnRzW2kgLSAxXSwgcG9pbnQsIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvaW50c1tpICsgMV0pIHtcclxuICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgYmF6aWVyOiBwb2ludCxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgc3RhcnQ6IHBvaW50LFxyXG4gICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSArIDFdLCByYWRpdXMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdMaW5lKCkge1xyXG4gICAgdGhpcy5fbGluZS5jbGVhcigpO1xyXG4gICAgdGhpcy5fbGluZS5saW5lU3R5bGUodGhpcy5fcHJvcHMud2lkdGgsIHRoaXMuX2NvbG9yLCAxKTtcclxuICAgIHRoaXMuc2VnbWVudHModGhpcy5fcHJvcHMucG9pbnRzLCB0aGlzLl9wcm9wcy5yYWRpdXMpLmZvckVhY2goKHNlZ21lbnQpID0+IHtcclxuICAgICAgaWYgKCFzZWdtZW50LmJhemllcikge1xyXG4gICAgICAgIHRoaXMuX2xpbmUubW92ZVRvKHNlZ21lbnQuc3RhcnQueCwgc2VnbWVudC5zdGFydC55KTtcclxuICAgICAgICB0aGlzLl9saW5lLmxpbmVUbyhzZWdtZW50LmVuZC54LCBzZWdtZW50LmVuZC55KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fbGluZS5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgIHNlZ21lbnQuc3RhcnQueCxcclxuICAgICAgICBzZWdtZW50LnN0YXJ0LnksXHJcbiAgICAgICAgc2VnbWVudC5iYXppZXIueCxcclxuICAgICAgICBzZWdtZW50LmJhemllci55LFxyXG4gICAgICAgIHNlZ21lbnQuZW5kLngsXHJcbiAgICAgICAgc2VnbWVudC5lbmQueVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9saW5lLmxpbmVTdHlsZSgxLCB0aGlzLl9jb2xvciwgMCk7XHJcbiAgICB0aGlzLl9saW5lLmJlZ2luRmlsbCgweGZmZmZmZiwgMC4wMSk7XHJcbiAgICB0aGlzLl9saW5lLm1vdmVUbyh0aGlzLl9wcm9wcy5wb2ludHNbMF0ueCwgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnkpO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2xpbmUubGluZVRvKHBvaW50LnggKyB0aGlzLl9wcm9wcy53aWR0aCwgcG9pbnQueSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuX2xpbmUubGluZVRvKFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnggLSB0aGlzLl9wcm9wcy53aWR0aCAtIDQwLFxyXG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGldLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9saW5lLmNsb3NlUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFZGl0UG9pbnRzKCkge1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgY29uc3QgcCA9IHRoaXMucG9pbnQocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHApO1xyXG4gICAgICB0aGlzLmVkaXRQb2ludHMucHVzaChwKTtcclxuICAgICAgcC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB0aGlzLnBvaW50RG93bihlLCBwLCBwb2ludCkpO1xyXG4gICAgICBwLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHRoaXMucG9pbnRVcCgpKTtcclxuICAgICAgcC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4gdGhpcy5wb2ludFVwKCkpO1xyXG4gICAgICBwLm9uKFwicG9pbnRlcm1vdmVcIiwgKCkgPT4gdGhpcy5wb2ludE1vdmUoKSk7XHJcbiAgICAgIGlmIChhcnJbaSArIDFdKSB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5wb2ludEluTGluZShwb2ludCwgYXJyW2kgKyAxXSk7XHJcbiAgICAgICAgY29uc3QgY2VudGVyUG9pbnQgPSB0aGlzLnBvaW50KGNlbnRlci54LCBjZW50ZXIueSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lZGl0UG9pbnRzLnB1c2goY2VudGVyUG9pbnQpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNlbnRlclBvaW50KTtcclxuICAgICAgICBjZW50ZXJQb2ludC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB0aGlzLmNlbnRlckRvd24oY2VudGVyLCBlLCBpICsgMSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNlbnRlcj86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHBvaW50ID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICBwb2ludC5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICBwb2ludC5iZWdpbkZpbGwoMHhmZmZmZmYsIGNlbnRlciA/IDAuMDUgOiAwLjIpO1xyXG4gICAgcG9pbnQuZHJhd0VsbGlwc2UoMCwgMCwgY2VudGVyID8gMTYgOiAyNSwgY2VudGVyID8gMTYgLyAxLjYgOiAyNSAvIDEuNik7XHJcbiAgICBwb2ludC5lbmRGaWxsKCk7XHJcbiAgICBwb2ludC5saW5lU3R5bGUoMiwgMHhmZmZmZmYsIDAuNSk7XHJcbiAgICBpZiAoY2VudGVyKSB7XHJcbiAgICAgIHBvaW50Lm1vdmVUbygtMTAsIC0xMCAvIDEuNik7XHJcbiAgICAgIHBvaW50LmxpbmVUbygxMCwgMTAgLyAxLjYpO1xyXG4gICAgICBwb2ludC5tb3ZlVG8oMTAsIC0xMCAvIDEuNik7XHJcbiAgICAgIHBvaW50LmxpbmVUbygtMTAsIDEwIC8gMS42KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvaW50Lm1vdmVUbygwLCAwKTtcclxuICAgICAgcG9pbnQubGluZVRvKDAsIC0yMCk7XHJcbiAgICB9XHJcbiAgICBwb2ludC5saW5lU3R5bGUoMCwgMCk7XHJcbiAgICBwb2ludC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICBwb2ludC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHJldHVybiBwb2ludDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlUG9pbnRzKCkge1xyXG4gICAgdGhpcy5lZGl0UG9pbnRzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQocCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZWRpdFBvaW50cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxldGVQb2ludChwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgICBpZiAodGhpcy5fcHJvcHMucG9pbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UucmVtb3ZlKHRoaXMucmVmKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51bnNlbGVjdFBvaW50KCk7XHJcbiAgICBjb25zdCBpID0gdGhpcy5fcHJvcHMucG9pbnRzLmluZGV4T2YocG9pbnQpO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLnNwbGljZShpLCAxKTtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICB0aGlzLmFkZEVkaXRQb2ludHMoKTtcclxuICAgIHRoaXMuZHJhd0xpbmUoKTtcclxuICAgIHRoaXMubWVudS5wb3NpdGlvbi5zZXQoXHJcbiAgICAgIHRoaXMuX3Byb3BzLnBvaW50c1swXS54ICsgdGhpcy54IC0gMjAsXHJcbiAgICAgIHRoaXMuX3Byb3BzLnBvaW50c1swXS55ICsgdGhpcy55IC0gMjBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50RG93bihcclxuICAgIGU6IEludGVyYWN0aW9uRXZlbnQsXHJcbiAgICBncmFwaGljczogR3JhcGhpY3MsXHJcbiAgICBwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XHJcbiAgKSB7XHJcbiAgICB0aGlzLm1lbnUuY2xvc2UoKTtcclxuICAgIHRoaXMuYXBwLm1vdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0UG9pbnQoZ3JhcGhpY3MsIHBvaW50LCBlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnRVcCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuZGVsZXRlQlROKTtcclxuICAgIHRoaXMuYXBwLm1vdmUgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQb2ludCkgdGhpcy5zZWxlY3RlZFBvaW50LmRyYWcgPSBmYWxzZTtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICB0aGlzLmFkZEVkaXRQb2ludHMoKTtcclxuICAgIHRoaXMubWVudS5vcGVuKCk7XHJcbiAgICB0aGlzLm1lbnUucG9zaXRpb24uc2V0KFxyXG4gICAgICB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueCArIHRoaXMueCAtIDIwLFxyXG4gICAgICB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueSArIHRoaXMueSAtIDIwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludE1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBvaW50ICYmIHRoaXMuc2VsZWN0ZWRQb2ludC5kcmFnKSB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZGVsZXRlQlROKTtcclxuICAgICAgY29uc3QgbmV3Q29vcmRzID0gdGhpcy5zZWxlY3RlZFBvaW50LmRhdGEuZ2V0TG9jYWxQb3NpdGlvbihcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MucGFyZW50XHJcbiAgICAgICk7XHJcbiAgICAgIG5ld0Nvb3Jkcy54ID0gbmV3Q29vcmRzLnggLSAobmV3Q29vcmRzLnggJSAyNSk7XHJcbiAgICAgIG5ld0Nvb3Jkcy55ID0gbmV3Q29vcmRzLnkgLSAobmV3Q29vcmRzLnkgJSAxNSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQb2ludC5ncmFwaGljcy54ID0gbmV3Q29vcmRzLng7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQb2ludC5ncmFwaGljcy55ID0gbmV3Q29vcmRzLnk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQb2ludC5wb2ludC54ID0gbmV3Q29vcmRzLng7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQb2ludC5wb2ludC55ID0gbmV3Q29vcmRzLnk7XHJcbiAgICAgIHRoaXMuZWRpdFBvaW50cy5mb3JFYWNoKChwb2ludCwgaSwgYXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcG9pbnQgPT09IHRoaXMuc2VsZWN0ZWRQb2ludC5ncmFwaGljcyAmJlxyXG4gICAgICAgICAgaSA+IDAgJiZcclxuICAgICAgICAgIGkgPCBhcnIubGVuZ3RoIC0gMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYXJyW2kgLSAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBuZXdDb29yZHMpLng7XHJcbiAgICAgICAgICBhcnJbaSAtIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpIC0gMl0sIG5ld0Nvb3JkcykueTtcclxuICAgICAgICAgIGFycltpICsgMV0ueCA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgKyAyXSwgbmV3Q29vcmRzKS54O1xyXG4gICAgICAgICAgYXJyW2kgKyAxXS55ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSArIDJdLCBuZXdDb29yZHMpLnk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHBvaW50ID09PSB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MgJiZcclxuICAgICAgICAgIGkgPT09IGFyci5sZW5ndGggLSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhcnJbaSAtIDFdLnggPSB0aGlzLnBvaW50SW5MaW5lKGFycltpIC0gMl0sIG5ld0Nvb3JkcykueDtcclxuICAgICAgICAgIGFycltpIC0gMV0ueSA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgLSAyXSwgbmV3Q29vcmRzKS55O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnQgPT09IHRoaXMuc2VsZWN0ZWRQb2ludC5ncmFwaGljcyAmJiBpID09PSAwKSB7XHJcbiAgICAgICAgICBhcnJbaSArIDFdLnggPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIG5ld0Nvb3JkcykueDtcclxuICAgICAgICAgIGFycltpICsgMV0ueSA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgKyAyXSwgbmV3Q29vcmRzKS55O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZGVsZXRlQlROLnBvc2l0aW9uLnNldChuZXdDb29yZHMueCwgbmV3Q29vcmRzLnkpO1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNlbnRlckRvd24oXHJcbiAgICBwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxyXG4gICAgZTogSW50ZXJhY3Rpb25FdmVudCxcclxuICAgIGk6IG51bWJlclxyXG4gICkge1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLnNwbGljZShpLCAwLCBwb2ludCk7XHJcbiAgICB0aGlzLnJlbW92ZVBvaW50cygpO1xyXG4gICAgdGhpcy5hZGRFZGl0UG9pbnRzKCk7XHJcbiAgICAvLyB0aGlzLmVkaXRQb2ludHNbaSArIDJdLmVtaXQoXCJwb2ludGVyZG93blwiLCBlKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBvaW50KFxyXG4gICAgZ3JhcGhpY3M6IEdyYXBoaWNzLFxyXG4gICAgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGU6IEludGVyYWN0aW9uRXZlbnRcclxuICApIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRQb2ludCA9IHtcclxuICAgICAgZ3JhcGhpY3MsXHJcbiAgICAgIHBvaW50LFxyXG4gICAgICBkYXRhOiBlLmRhdGEsXHJcbiAgICAgIGRyYWc6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuX3Byb3BzLnBvaW50cy5sZW5ndGggLSAxID09PSB0aGlzLl9wcm9wcy5wb2ludHMuaW5kZXhPZihwb2ludCkpIHtcclxuICAgICAgdGhpcy5wbHVzQlROLnBvc2l0aW9uLnNldChwb2ludC54ICsgNDAsIHBvaW50LnkpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBsdXNCVE4pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZWxldGVCVE4ucG9zaXRpb24uc2V0KHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5kZWxldGVCVE4pO1xyXG4gIH1cclxuXHJcbiAgdW5zZWxlY3RQb2ludCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRQb2ludCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmRlbGV0ZUJUTik7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnBsdXNCVE4pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KCkge1xyXG4gICAgaWYgKHN1cGVyLnNlbGVjdCgpKSB7XHJcbiAgICAgIHRoaXMuYWRkRWRpdFBvaW50cygpO1xyXG4gICAgICB0aGlzLm1lbnUucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIHRoaXMuX3Byb3BzLnBvaW50c1swXS54ICsgdGhpcy54IC0gMjAsXHJcbiAgICAgICAgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnkgKyB0aGlzLnkgLSAyMFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgIHRoaXMudW5zZWxlY3RQb2ludCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb3BzKHByb3BzOiBMaW5lUHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICBpZiAodGhpcy5fbGluZSkgdGhpcy5kcmF3TGluZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fbGluZSkge1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IExpbmVDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgR3JhcGhpY3MsXHJcbiAgSW50ZXJhY3Rpb25EYXRhLFxyXG4gIFRleHR1cmUsXHJcbiAgVGlsaW5nU3ByaXRlLFxyXG4gIHV0aWxzLFxyXG59IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgUGxhbmVQcm9wcywgUGxhbmVDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGFuZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUExBTkUgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIF9wbGFuZTogR3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wbGFuZVRpbGUgPSBuZXcgVGlsaW5nU3ByaXRlKFRleHR1cmUuZnJvbShcInNlbGVjdFwiKSk7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IFBsYW5lUHJvcHM7XHJcbiAgcHJpdmF0ZSBwb2ludCA9IG5ldyBHcmFwaGljcygpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9wbGFuZSk7XHJcbiAgICB0aGlzLnBvaW50LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudHlwZSA9IFwicGxhbmVcIjtcclxuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgdGhpcy5fcGxhbmVUaWxlLnRpbGVQb3NpdGlvbi54ICs9IGQgLyAyO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRyYWdQb2ludCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIGNvbnN0IHJhZCA9ICgzMSAqIE1hdGguUEkpIC8gMTgwO1xyXG4gICAgY29uc3QgYSA9IHRoaXMuX3Byb3BzLmggKiBNYXRoLnNpbihyYWQpO1xyXG4gICAgY29uc3QgYiA9IHRoaXMuX3Byb3BzLmggKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgY29uc3QgQSA9IHRoaXMuX3Byb3BzLncgKiBNYXRoLnNpbihyYWQpO1xyXG4gICAgY29uc3QgQiA9IHRoaXMuX3Byb3BzLncgKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgdGhpcy5fcGxhbmUuY2xlYXIoKTtcclxuICAgIHRoaXMuX3BsYW5lLmJlZ2luRmlsbCh0aGlzLl9jb2xvciwgMC4wNCk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lU3R5bGUoMiwgdGhpcy5fY29sb3IsIDAuNSk7XHJcbiAgICB0aGlzLl9wbGFuZS5tb3ZlVG8oMCwgMCk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oYiwgLWEpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKGIgKyBCLCAtYSArIEEpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKEIsIEEpO1xyXG4gICAgdGhpcy5fcGxhbmUuY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUueCA9IGI7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUueSA9IC1hO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLndpZHRoID0gdGhpcy5fcHJvcHMudztcclxuICAgIHRoaXMuX3BsYW5lVGlsZS5oZWlnaHQgPSB0aGlzLl9wcm9wcy5oO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnRpbGVTY2FsZS5zZXQoMS41LCAxLjUpO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS5hbHBoYSA9IDAuNDtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS5za2V3LnNldCgtMS4wMywgKDMxICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fcGxhbmVUaWxlKTtcclxuICAgIHRoaXMucG9pbnQucG9zaXRpb24uc2V0KGIgKyBCLCAtYSArIEEpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KCkge1xyXG4gICAgaWYgKHN1cGVyLnNlbGVjdCgpKSB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMucG9pbnQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgdW5zZWxlY3QoKSB7XHJcbiAgICBzdXBlci51bnNlbGVjdCgpO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgfVxyXG5cclxuICBkcmFnUG9pbnQoKSB7XHJcbiAgICB0aGlzLnBvaW50LmxpbmVTdHlsZSgyLCAweGZmZmZmZiwgMC4zKTtcclxuICAgIHRoaXMucG9pbnQubW92ZVRvKDAsIDApO1xyXG4gICAgdGhpcy5wb2ludC5saW5lVG8oMCwgLTIwKTtcclxuICAgIHRoaXMucG9pbnQubGluZVN0eWxlKDAsIDApO1xyXG4gICAgdGhpcy5wb2ludC5iZWdpbkZpbGwoMHhmZmZmZmYsIDAuMik7XHJcbiAgICB0aGlzLnBvaW50LmRyYXdFbGxpcHNlKDAsIDAsIDI1LCAyNSAvIDEuNik7XHJcbiAgICB0aGlzLnBvaW50LmVuZEZpbGwoKTtcclxuICAgIGxldCBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XHJcbiAgICBsZXQgZHJhZyA9IGZhbHNlO1xyXG4gICAgbGV0IHN0YXJ0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIHRoaXMucG9pbnRcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBkYXRhID0gZS5kYXRhO1xyXG4gICAgICAgIGRyYWcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwLm1vdmUgPSBmYWxzZTtcclxuICAgICAgICBzdGFydCA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBvaW50LnBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhcnQpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZHJhZykge1xyXG4gICAgICAgICAgY29uc3QgY3Vyc29yID0gZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucG9pbnQucGFyZW50KTtcclxuICAgICAgICAgIGNvbnN0IGR4ID0gY3Vyc29yLng7XHJcbiAgICAgICAgICBjb25zdCBkeSA9IGN1cnNvci55O1xyXG4gICAgICAgICAgY29uc3QgYWxwaGEgPSBNYXRoLmFicyhNYXRoLmF0YW4oZHggLyBkeSkgKiAoMTgwIC8gTWF0aC5QSSkpO1xyXG4gICAgICAgICAgY29uc3QgQSA9IDEyMDtcclxuICAgICAgICAgIGxldCBDID0gYWxwaGEgLSA2MDtcclxuICAgICAgICAgIGxldCBCID0gNjAgLSBDO1xyXG4gICAgICAgICAgY29uc3QgYSA9IE1hdGguc3FydChkeSAqIGR5ICsgZHggKiBkeCk7XHJcbiAgICAgICAgICBpZiAoZHkgPCAwKSB7XHJcbiAgICAgICAgICAgIEIgPSBhbHBoYSAtIDYwO1xyXG4gICAgICAgICAgICBDID0gNjAgLSBCO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5wcm9wcy53ID1cclxuICAgICAgICAgICAgKE1hdGguc2luKEIgKiAoTWF0aC5QSSAvIDE4MCkpICogYSkgLyBNYXRoLnNpbihBICogKE1hdGguUEkgLyAxODApKTtcclxuICAgICAgICAgIHRoaXMucHJvcHMuaCA9XHJcbiAgICAgICAgICAgIChNYXRoLnNpbihDICogKE1hdGguUEkgLyAxODApKSAqIGEpIC8gTWF0aC5zaW4oQSAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogUGxhbmVQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX3BsYW5lKSB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogUGxhbmVDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1dGlscywgVGV4dCwgVGV4dFN0eWxlRm9udFdlaWdodCB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRleHRDb25maWcsIFRleHRQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RleHQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBURVhUIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfdGV4dCA9IG5ldyBUZXh0KFwiXCIpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBUZXh0UHJvcHM7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgaWYgKHRoaXMuX3Byb3BzLnNrZXcpIHtcclxuICAgICAgdGhpcy5fdGV4dC5za2V3LnNldCgtMS4wMywgKDMxICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5mb250V2VpZ2h0ID0gdGhpcy5fcHJvcHMuZm9udFdpZHRoIGFzIFRleHRTdHlsZUZvbnRXZWlnaHQ7XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZvbnRTaXplID0gdGhpcy5fcHJvcHMuZm9udFNpemU7XHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlLmZpbGwgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuX3RleHQudGV4dCA9IHRoaXMuX3Byb3BzLnRleHQ7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl90ZXh0KTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogVGV4dFByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgLy8gdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcbiAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fdGV4dCkge1xyXG4gICAgICB0aGlzLl90ZXh0LnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhleDJzdHJpbmcodGhpcy5fY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdXRpbHMuc3RyaW5nMmhleChjb2xvcik7XHJcbiAgICBpZiAodGhpcy5fdGV4dCkge1xyXG4gICAgICB0aGlzLl90ZXh0LnN0eWxlLmZpbGwgPSB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogVGV4dENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyYXBoaWNzLCBUZXh0LCBUZXh0U3R5bGUsIENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTEFCRUwgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX2NvbG9yOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nID0gXCJcIjtcclxuICBwcml2YXRlIF9sYWJlbFRleHQ6IFRleHQ7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9zdHlsZSA9IG5ldyBUZXh0U3R5bGUoe1xyXG4gICAgbGV0dGVyU3BhY2luZzogMSxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIGZpbGw6IFwiI0EyQTNBN1wiLFxyXG4gICAgd29yZFdyYXA6IHRydWUsXHJcbiAgICB3b3JkV3JhcFdpZHRoOiAxMDAsXHJcbiAgICBsaW5lSm9pbjogXCJyb3VuZFwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dCA9IG5ldyBUZXh0KFwiXCIsIHRoaXMuX3N0eWxlKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC54ID0gMTY7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQueSA9IDQ7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWxUZXh0KTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgdGhpcy5fbGFiZWwuY2xlYXIoKTtcclxuICAgIHRoaXMuX2xhYmVsLmJlZ2luRmlsbCh0aGlzLl9jb2xvcik7XHJcbiAgICB0aGlzLl9sYWJlbC5kcmF3UmVjdCgwLCAwLCA2LCB0aGlzLl9sYWJlbFRleHQuaGVpZ2h0ICsgMTApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fbGFiZWwubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgdGhpcy5fbGFiZWwuYmVnaW5GaWxsKDB4MDAwMDAwLCAxKTtcclxuICAgIHRoaXMuX2xhYmVsLmRyYXdSZWN0KFxyXG4gICAgICA2LFxyXG4gICAgICAwLFxyXG4gICAgICB0aGlzLl9sYWJlbFRleHQud2lkdGggKyAyMCxcclxuICAgICAgdGhpcy5fbGFiZWxUZXh0LmhlaWdodCArIDEwXHJcbiAgICApO1xyXG4gICAgdGhpcy5fbGFiZWwuZW5kRmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKGNvbG9yOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcbiAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gXCJcIjtcclxuICAgIGxldCBhY2MgPSAwO1xyXG4gICAgdGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgIGlmIChhY2MgPCAyMCkge1xyXG4gICAgICAgIGFjYyArPSAxO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RleHQgKz0gXCIgXCI7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnRleHQgPSB0aGlzLl90ZXh0O1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSwgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNRU5VIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIGRlbGV0ZTogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJkZWxldGVCVE5cIikpO1xyXG4gIHByaXZhdGUgY29weTogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJjb3B5QlROXCIpKTtcclxuICBwcml2YXRlIHBvaW50OiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcInBvaW50QlROXCIpKTtcclxuICBwcml2YXRlIHNldHRpbmdzOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcInNldHRpbmdzQlROXCIpKTtcclxuICBwcml2YXRlIHVwOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcInVwQlROXCIpKTtcclxuICBwcml2YXRlIGRvd246IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwiZG93bkJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBlbDogQmFzZTtcclxuICBjb25zdHJ1Y3RvcihlbDogQmFzZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuXHJcbiAgICB0aGlzLnBvaW50LmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5kZWxldGUuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmNvcHkuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLnNldHRpbmdzLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy51cC5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuZG93bi5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMucG9pbnQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5kZWxldGUuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb3B5LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0dGluZ3MuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy51cC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmRvd24uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5wb2ludC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVsZXRlLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb3B5LmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMudXAuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmRvd24uYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5wb2ludC5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5wb2ludCkpO1xyXG4gICAgdGhpcy5wb2ludC5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMucG9pbnQpKTtcclxuICAgIHRoaXMuZGVsZXRlLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLmRlbGV0ZSkpO1xyXG4gICAgdGhpcy5kZWxldGUub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLmRlbGV0ZSkpO1xyXG4gICAgdGhpcy5jb3B5Lm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5jb3B5KSk7XHJcbiAgICB0aGlzLmNvcHkub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuY29weSkpO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5zZXR0aW5ncykpO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuc2V0dGluZ3MpKTtcclxuICAgIHRoaXMudXAub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMudXApKTtcclxuICAgIHRoaXMudXAub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLnVwKSk7XHJcbiAgICB0aGlzLmRvd24ub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuZG93bikpO1xyXG4gICAgdGhpcy5kb3duLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5kb3duKSk7XHJcblxyXG4gICAgdGhpcy5wb2ludC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuYXBwLm9mZnNldCA9IHtcclxuICAgICAgICB4OiB0aGlzLmVsLmFwcC5zY3JlZW4ud2lkdGggLyAyIC0gdGhpcy5lbC5jb250YWluZXIucG9zaXRpb24ueCxcclxuICAgICAgICB5OiB0aGlzLmVsLmFwcC5zY3JlZW4uaGVpZ2h0IC8gMiAtIHRoaXMuZWwuY29udGFpbmVyLnBvc2l0aW9uLnksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRlbGV0ZS5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuYXBwLmVsZW1lbnRzU2VydmljZS5yZW1vdmUodGhpcy5lbC5yZWYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb3B5Lm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC5hcHAuc2V0Q29weSgpO1xyXG4gICAgICB0aGlzLmVsLmFwcC5wYXN0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC56SW5kZXggKz0gMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb3duLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5lbC56SW5kZXggLT0gMTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29weS55ID0gMDtcclxuICAgIHRoaXMuc2V0dGluZ3MueSA9IHRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy5kZWxldGUueSA9IHRoaXMucG9pbnQuaGVpZ2h0ICogMjtcclxuICAgIHRoaXMucG9pbnQueSA9IDA7XHJcbiAgICB0aGlzLnBvaW50LnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLnVwLnkgPSB0aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMudXAueCA9IC10aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMuZG93bi55ID0gdGhpcy5wb2ludC5oZWlnaHQgKiAyO1xyXG4gICAgdGhpcy5kb3duLnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBob3ZlcihlOiBTcHJpdGUpIHtcclxuICAgIGUuc2NhbGUuc2V0KDAuOSwgMC45KTtcclxuICB9XHJcbiAgdW5ob3ZlcihlOiBTcHJpdGUpIHtcclxuICAgIGUuc2NhbGUuc2V0KDEsIDEpO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZGVsZXRlKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5jb3B5KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5zZXR0aW5ncyk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMudXApO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmRvd24pO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgaWYgKHRoaXMuZWwuYXBwLmVkaXQpIHtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmRlbGV0ZSk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jb3B5KTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnVwKTtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmRvd24pO1xyXG4gICAgICB0aGlzLnBvaW50LnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICAgIHRoaXMucGl2b3Quc2V0KHRoaXMucG9pbnQuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLSAyMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMucG9pbnQpO1xyXG4gICAgICB0aGlzLnBvaW50LnggPSAwO1xyXG4gICAgICB0aGlzLnBpdm90LnNldCgwLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMuekluZGV4ID0gdGhpcy5lbC5hcHAuY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIHRoaXMucG9zaXRpb24uc2V0KHRoaXMuZWwueCwgdGhpcy5lbC55KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNQUklURSBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBTcHJpdGU7XHJcbiAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fb2Zmc2V0ID0gMTA7XHJcbiAgICB0aGlzLnN3aW5nKCk7XHJcbiAgfVxyXG5cclxuICBzd2luZygpIHtcclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICB3aW5kb3cub2lzLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGUucG9zaXRpb24ueSA+PSB0aGlzLl9vZmZzZXQpIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zcHJpdGUucG9zaXRpb24ueSA8PSAwKSBmbGFnID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZmxhZykgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgKz0gZCAvIDU7XHJcbiAgICAgICAgZWxzZSB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSAtPSBkIC8gNTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgdGV4dHVyZSh0ZXh0dXJlOiBUZXh0dXJlKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xyXG4gICAgdGhpcy5waXZvdC5zZXQodGhpcy5fc3ByaXRlLndpZHRoIC8gMiwgMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBDb250YWluZXIsIExvYWRlciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9lbGVtZW50cy9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZWxlbWVudHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gXCIuL2VsZW1lbnRzL2JhY2tncm91bmQuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2NvbXBvbmVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgYmFzZUFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy9iYXNlXCI7XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIG9pczogQXBwO1xyXG4gIH1cclxuICBpbnRlcmZhY2UgQ29udGFpbmVyIHtcclxuICAgIGludGVyYWN0aXZlOiBib29sZWFuO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQXBwbGljYXRpb24ge1xyXG4gIHB1YmxpYyBvZmZzZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xyXG4gIHB1YmxpYyBlbGVtZW50c1NlcnZpY2UgPSBuZXcgRWxlbWVudHNTZXJ2aWNlKHRoaXMpO1xyXG4gIHB1YmxpYyBjb25maWdTZXJ2aWNlID0gbmV3IENvbmZpZ1NlcnZpY2UodGhpcyk7XHJcbiAgcHVibGljIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICBwcml2YXRlIF9zZWxlY3RlZDogQmFzZTtcclxuICBwdWJsaWMgY29weTogQmFzZTtcclxuICBwdWJsaWMgbG9hZGVyOiBMb2FkZXI7XHJcbiAgcHJpdmF0ZSBkaXY6IEVsZW1lbnQ7XHJcbiAgcHVibGljIGJhY2tncm91bmQ6IEJhY2tncm91bmQ7XHJcbiAgcHVibGljIF9lZGl0OiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgbW92ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGV2ZW50czoge1xyXG4gICAgc2VsZWN0OiAoKGVsOiBCYXNlKSA9PiB2b2lkKVtdO1xyXG4gIH0gPSB7XHJcbiAgICBzZWxlY3Q6IFtdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MGQxMTE3LFxyXG4gICAgICByZXNvbHV0aW9uOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAwLjksXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAoIXRoaXMuZGl2KSB7XHJcbiAgICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRpdik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xyXG4gICAgdGhpcy5sb2FkZXIgPSBMb2FkZXIuc2hhcmVkO1xyXG4gICAgdGhpcy5jb250YWluZXIuc29ydGFibGVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB0aGlzLmtleWJvYXJkKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldHVwKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMudGlja2VyLmFkZCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2l6aW5nKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUga2V5Ym9hcmQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5lZGl0ICYmIGUuY29kZSA9PT0gXCJEZWxldGVcIiAmJiB0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UucmVtb3ZlKHRoaXMuc2VsZWN0ZWQucmVmKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS5jb2RlID09PSBcIktleUNcIiAmJiBlLmN0cmxLZXkgJiYgdGhpcy5fc2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnNldENvcHkoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS5jb2RlID09PSBcIktleVZcIiAmJiBlLmN0cmxLZXkgJiYgdGhpcy5jb3B5KSB7XHJcbiAgICAgICAgdGhpcy5wYXN0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmNvZGUgPT09IFwiS2V5WlwiICYmIGUuY3RybEtleSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU2VydmljZS51bmRvKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRDb3B5KCkge1xyXG4gICAgdGhpcy5jb3B5ID0gdGhpcy5zZWxlY3RlZDtcclxuICB9XHJcbiAgcGFzdGUoKSB7XHJcbiAgICB0aGlzLmNvcHkgPSB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQodGhpcy5jb3B5LnR5cGUsIHtcclxuICAgICAgLi4uKHRoaXMuY29weS5jb25maWcgYXMgQ29tcG9uZW50Q29uZmlnKSxcclxuICAgICAgeDogdGhpcy5jb3B5LnggKyAxMDAsXHJcbiAgICAgIHJlZjogdGhpcy5jb3B5LnJlZiArIERhdGUubm93KCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29uZmlnU2VydmljZS5kbygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChjb25maWc6IENvbmZpZywgY2I6IChvaXM6IEFwcCkgPT4gdm9pZCkge1xyXG4gICAgYmFzZUFzc2V0cy5mb3JFYWNoKChzcHJpdGUpID0+IHtcclxuICAgICAgdGhpcy5sb2FkZXIuYWRkKHNwcml0ZS5uYW1lLCBzcHJpdGUuZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZy5hc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVyLmFkZChzcHJpdGUubmFtZSwgc3ByaXRlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxvYWRlci5sb2FkKCgpID0+IHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICAgIGNiKHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2l6aW5nKCkge1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdGhpcy52aWV3LndpZHRoID0gcmVjdC53aWR0aCAtIDU7XHJcbiAgICB0aGlzLnZpZXcuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgLSA1O1xyXG4gICAgdGhpcy5zY3JlZW4ud2lkdGggPSByZWN0LndpZHRoIC0gNTtcclxuICAgIHRoaXMuc2NyZWVuLmhlaWdodCA9IHJlY3QuaGVpZ2h0IC0gNTtcclxuICAgIHRoaXMuYmFja2dyb3VuZC50aWxlLndpZHRoID0gcmVjdC53aWR0aCAtIDU7XHJcbiAgICB0aGlzLmJhY2tncm91bmQudGlsZS5oZWlnaHQgPSByZWN0LmhlaWdodCAtIDU7XHJcbiAgfVxyXG5cclxuICBzZXQgY29uZmlnKGNvbmZpZzogQ29uZmlnKSB7XHJcbiAgICB0aGlzLm9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XHJcbiAgICAvLyB0aGlzLmJhY2tncm91bmQudGlsZS50aWxlUG9zaXRpb24ueCA9IGNvbmZpZy5vZmZzZXQueDtcclxuICAgIC8vIHRoaXMuYmFja2dyb3VuZC50aWxlLnRpbGVQb3NpdGlvbi55ID0gY29uZmlnLm9mZnNldC55O1xyXG4gICAgdGhpcy5lbGVtZW50c1NlcnZpY2UucmVmcyA9IHt9O1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIGNvbmZpZy5wbGFuZXMuZm9yRWFjaCgocGxhbmUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwicGxhbmVcIiwgcGxhbmUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJsaW5lXCIsIGxpbmUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwiY29tcG9uZW50XCIsIGNvbXBvbmVudCk7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZy50ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcInRleHRcIiwgdGV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZChlbDogQmFzZSkge1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB0aGlzLl9zZWxlY3RlZC51bnNlbGVjdCgpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVmcygpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzU2VydmljZS5yZWZzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGVkaXQoZWRpdDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZWRpdCA9IGVkaXQ7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkLm1lbnUuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBlZGl0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VkaXQ7XHJcbiAgfVxyXG5cclxuICBvbihldmVudDoga2V5b2YgQXBwW1wiZXZlbnRzXCJdLCBjYjogKGVsOiBCYXNlKSA9PiB2b2lkKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICB3aW5kb3cub2lzID0gbmV3IEFwcChzZWxlY3Rvcik7XHJcbiAgcmV0dXJuIHdpbmRvdy5vaXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuICBwdWJsaWMgYXBwOiBBcHA7XHJcbiAgcHVibGljIGhpc3Rvcnk6IHsgc2VsZWN0ZWQ6IHN0cmluZyB8IG51bGw7IGNvbmZpZzogQ29uZmlnIH1bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgfVxyXG5cclxuICBkbygpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5oaXN0b3J5Lmxlbmd0aCA8PSAyMCAmJlxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZykgIT09XHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLmhpc3RvcnkucHVzaCh7XHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICBzZWxlY3RlZDogdGhpcy5hcHAuc2VsZWN0ZWQ/LnJlZixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmRvKCkge1xyXG4gICAgaWYgKHRoaXMuaGlzdG9yeS5sZW5ndGggPj0gMikge1xyXG4gICAgICB0aGlzLmhpc3RvcnkucG9wKCk7XHJcbiAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXTtcclxuICAgICAgdGhpcy5hcHAuY29uZmlnID0gcG9pbnQuY29uZmlnO1xyXG4gICAgICAvLyBpZiAocG9pbnQuc2VsZWN0ZWQpIHtcclxuICAgICAgLy8gICB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UucmVmc1twb2ludC5zZWxlY3RlZF0uc2VsZWN0KCk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9mZnNldDoge1xyXG4gICAgICAgIHg6IHRoaXMuYXBwLm9mZnNldC54LFxyXG4gICAgICAgIHk6IHRoaXMuYXBwLm9mZnNldC55LFxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UuY29tcG9uZW50cyxcclxuICAgICAgbGluZXM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5saW5lcyxcclxuICAgICAgcGxhbmVzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UucGxhbmVzLFxyXG4gICAgICB0ZXh0czogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnRleHRzLFxyXG4gICAgICBhc3NldHM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5hc3NldHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBDT01QT05FTlQgfSBmcm9tIFwiLi4vZWxlbWVudHMvY29tcG9uZW50LmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTElORSB9IGZyb20gXCIuLi9lbGVtZW50cy9saW5lLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgUExBTkUgfSBmcm9tIFwiLi4vZWxlbWVudHMvcGxhbmUuZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBURVhUIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3RleHQuZWxlbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudENvbmZpZyxcclxuICBDb21wb25lbnRQcm9wcyxcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb21wb25lbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IExpbmVDb25maWcsIExpbmVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2xpbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBsYW5lQ29uZmlnLCBQbGFuZVByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxhbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRleHRDb25maWcsIFRleHRQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RleHQuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWxlbWVudHNTZXJ2aWNlIHtcclxuICBwdWJsaWMgcmVmczoge1xyXG4gICAgW2tleTogc3RyaW5nXTogQ09NUE9ORU5UIHwgTElORSB8IFRFWFQgfCBQTEFORTtcclxuICB9ID0ge307XHJcbiAgcHVibGljIGFwcDogQXBwO1xyXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBjb25maWc6IENvbXBvbmVudENvbmZpZyB8IFRleHRDb25maWcgfCBQbGFuZUNvbmZpZyB8IExpbmVDb25maWdcclxuICApIHtcclxuICAgIGlmICghdGhpcy5yZWZzW2NvbmZpZy5yZWZdKSB7XHJcbiAgICAgIGxldCBlbDogQ09NUE9ORU5UIHwgTElORSB8IFRFWFQgfCBQTEFORTtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImNvbXBvbmVudFwiOlxyXG4gICAgICAgICAgZWwgPSBuZXcgQ09NUE9ORU5UKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgQ29tcG9uZW50UHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgZWwgPSBuZXcgVEVYVChjb25maWcsIHRoaXMuYXBwKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIFRleHRQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJwbGFuZVwiOlxyXG4gICAgICAgICAgZWwgPSBuZXcgUExBTkUoY29uZmlnLCB0aGlzLmFwcCk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBQbGFuZVByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxpbmVcIjpcclxuICAgICAgICAgIGVsID0gbmV3IExJTkUoY29uZmlnLCB0aGlzLmFwcCk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBMaW5lUHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZzW2NvbmZpZy5yZWZdID0gZWw7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlZnNbY29uZmlnLnJlZl07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBJbiBzY2hlbWEgY29uZmlndXJhdGlvbiBsaW5rIFwiJHtcclxuICAgICAgICAgIGNvbmZpZy5yZWZcclxuICAgICAgICB9XCIgaXMgZHVwbGljYXRlZC4gJHtKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpfVwiYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShyZWY6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMucmVmc1tyZWZdKSB7XHJcbiAgICAgIHRoaXMuYXBwLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnJlZnNbcmVmXS5jb250YWluZXIpO1xyXG4gICAgICB0aGlzLmFwcC5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnJlZnNbcmVmXTtcclxuICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbGVtZW50c09mVHlwZSh0eXBlOiBcImNvbXBvbmVudFwiIHwgXCJsaW5lXCIgfCBcInRleHRcIiB8IFwicGxhbmVcIikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucmVmcylcclxuICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmc1trZXldLnR5cGUgPT09IHR5cGU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5tYXAoKGtleSkgPT4gdGhpcy5yZWZzW2tleV0uY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGdldCBjb21wb25lbnRzKCk6IENvbXBvbmVudENvbmZpZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzT2ZUeXBlKFwiY29tcG9uZW50XCIpIGFzIENvbXBvbmVudENvbmZpZ1tdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxpbmVzKCk6IExpbmVDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcImxpbmVcIikgYXMgTGluZUNvbmZpZ1tdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRzKCk6IFRleHRDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcInRleHRcIikgYXMgVGV4dENvbmZpZ1tdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYW5lcygpOiBQbGFuZUNvbmZpZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzT2ZUeXBlKFwicGxhbmVcIikgYXMgUGxhbmVDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBhc3NldHMoKTogeyBuYW1lOiBzdHJpbmc7IGRhdGE6IHN0cmluZyB9W10ge1xyXG4gICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGNvbXBvbmVudC5wcm9wcy5uYW1lKSkge1xyXG4gICAgICAgIGtleXMucHVzaChjb21wb25lbnQucHJvcHMubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGtleXMubWFwKChuYW1lKSA9PiAoe1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgZGF0YTogdXRpbHMuVGV4dHVyZUNhY2hlW1wic2VydmVyXCJdLmJhc2VUZXh0dXJlLnJlc291cmNlLnVybCxcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=