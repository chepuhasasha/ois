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
            // TODO необходим общий сервис обработки событий, через него необходимо организовать применение инструментов
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLENBQVM7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLENBQW1CO1FBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQs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QUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFD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QUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFNO2FBQVY7WUFDRSxJQUFNLElBQUksR0FBYSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssUUFBQztnQkFDekIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsNkRBQTZEO2dCQUM3RCxhQUFhO2dCQUNiLElBQUksRUFBRSxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRzthQUM1RCxDQUFDLEVBTHdCLENBS3hCLENBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBN0ZZLDBDQUFlOzs7Ozs7Ozs7OztBQ2Q1Qjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL09JUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2Fzc2V0cy9iYXNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9iYWNrZ3JvdW5kLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2Jhc2UuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvY29tcG9uZW50LmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2xpbmUuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvcGxhbmUuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvdGV4dC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy93aWRnZXRzL2xhYmVsLndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9tZW51LndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9zcHJpdGUud2lkZ2V0LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvc2VydmljZXMvY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vT0lTL2V4dGVybmFsIHVtZCB7XCJjb21tb25qc1wiOlwicGl4aS5qc1wiLFwiY29tbW9uanMyXCI6XCJwaXhpLmpzXCIsXCJ1bWRcIjpcInBpeGkuanNcIixcInNjcmlwdFwiOlwiUElYSVwiLFwicm9vdFwiOlwiUElYSVwifSIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9PSVMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInBpeGkuanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiT0lTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicGl4aS5qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiT0lTXCJdID0gZmFjdG9yeShyb290W1wiUElYSVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX18pID0+IHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgYmFzZUFzc2V0cyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcInNlbGVjdFwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVlBQUFDb1lBRDJBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRE9TVVJCVkhnQjdkak5EWU13REFYZ053SWpNRUpIWVFQWXBOMmszWUJST2dJamRBVFhsbnlwVk1VNVJPUUJ0bVJ4eUR0OENqOGhBZjZVaU55ME43dWlVRG8rZXU0UjVBYnR0L1lMUVdubTd0bWhGRXJnMFlIYkVZQWo5Z0o2ZG0wRzlHQnI0TE1sVU1kbnNBTXRCM1pnOUt6MkJuNktkem1CQ1V3Z04zQUtnUjdzQmF4ZWpzRU9sR2pGWVFDR2s1akFSc0FWNU1EeVhpT0JDYnd5ME1QVVFKdEVzQU1sK2xZbk1JRy9RUHRoblVBT1hMQXpjRTdncVlFZXBBYmFld0oyb0ZRZS9YVUZTdVhSMzRMT3dDOE5LMDdoUmZRelhBQUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImJnXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1FBQUFBOENBWUFBQUNRUHgvT0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFhWlNVUkJWSGdCNVZ4QlR4dzNGSDVlUUswYUVBT3Bta2h0SlM4bkJFUmRma0hKTDJqNEJZRmZrT1RVSTh1cFIrQVhMRG4xQ0RsRlBTMzhBa0FoVmRwRGQzcUwwa3FkU0NCUkJXYnluajJaWFdCM3hqTmp6OWpLSjYxWWRyMHo5dGorM251Zm44MGdCdWZ6M1BmZitPQUllSE94QjhENDhHOGozKys5Ym9JajRKeDdBQjc0L25IUWtCL01jMkJqWFQ2MzJCSHZMWWRvUUFRSCtEYkF2OGZKRnhIenhWOEcrK0FJT0Y5WUF6YUZnK3YvRmZxZjliK2dqaGgvQ296OWhJMTg1dnV2ckd3VTUwc3JXTWNPUkpFUGNMbCtjMWJMZG95MWdUVitoT2hxMC9kLzN3VUxnUjNSd2pwdTRiTW1ZRDFQRDBZVW5PZWkwWlpCMUt1NTFDV3FVcWtmalR4UjF0SlpMNS96NGxNb0FzbHg5WUR1emVlV05uanpBWFZFTzI5ZHhHK2FTeEZkQXh6QVdGWUJ6bHNlc0lranovdjZmUkQ4Y3d3VlF0TFRGeTl4V21NblhLNGkvZXdIUVhDUjV4cEI4TzdBODJhZm8zMVo5V2J1YjlYVGpvV1dOM1B2Vjd6M0NkNzdiVnBaQmdxUVJuOThENHVqTWYzdzBMUTNGdCt2ZzFhYTQ0TmNIOG12dWE5TEJwUnRZS3NQSUNUN1lyb2RPSnNiVXh0bzc5YndoZmQ3dlozMW13WW9nQ3J1OTA2WHlVaWk0VjhEUS9oRVR6Z2p1emdyRGlFNlg5YlZHUVF5OE1JZER0bmYyT0U5OHpSMlp3M0NpRUYwMWxUcERJTFNES2tDV2Q2VC92dTU0WTNsQnA5N3NGZkdpOG5yUGVtR0xtOHNjVDdJNXBhQUVtV2xJcng2VVNTb05FMVBxdEJCWTBsd0Y4SU14YXBsb0lXeStrRWwvSUMyNW1GMitXcnBTUlZGYUF3WllndnRSQXZTZ2p0YlVUYzlxU0lQamVtTzBUTGprREtnaG5uZTNjRHpKc0diL2U1bnZOMDIwdE1MZ0hPY0ZYKytBVXRCY1FxK2RyenBlOHM0Vy9hODJXOGcrTy9kSVgxSEF3bGpHNzlmTmw5Y2xBV2pYaFpGeVVoTmo4VS9sdEdUS3E3UkdLcklVbnNhWHlWbEZneWd2RkVmQVJuY0FUWWlCUG1DUTljNmd4RFhHU1A3eUJPQmFvTUcxb1V4S1VsN2h3ejFuc1RheEpsU1lHUW5ydlpGY0ZkQlVLbVZzbFM5SjBrRGpSV3JwWEVJZy9UNm13a3F0UmgxcWlBS2QzdkFTTE1CMHA0MmcrRGZrUnpyZWZkeExRQzIwRmkydk9tN0oybGxxd1ROYm0vMisxOXduTkpzL21PVUNFbjF4ZS8yU2Fna2JVeG5PMHBSVnRIZ2pzcjBwejhHbFNXalcyMWdVMGQ5N1NsNzFGZXZqYVdBNkNsZW8raTZzT3lyZ2pJeFJiemd0Q3VmQ1VidUJaSGJocGlTeHBOcnc5Z1ROS0k3MVVqamswOGdITi9SNmNLV2xmaVZLYXNLN1VsV25yMDNQZjExYWs4M1VaYkdGQmVvYXBMRzRhcXQrMTdDWGpVdU85Z1pPNmExcHlMZUdNdThvQ0Y2K3B5UWg4WWF3eTlnaHpSK3JVNWtMQXRLNHlob0h0WHB5ZVdoc1ZzenhBMXBQRHR2VERudnFXSW8wNWhUMHJpSXBMUEtsY2g3cWdDakpINUdPVXNneERPRzlpTGNoL0FjUjU5dlJlU3NBcUxYVC9VZGZPOEtjUEJ2STAraHEwOXBzQkVmanovSEVZZjlFcEcrNUZhREFMNTZoUFpsUTBqampHZ1cxc0VsVU9xdTRGVjBuT0NXVVEvQlBUQXZrY2JKYURxSDY4OWNkb2lEV2VOOURFampjTGtMRG1GWUZ2K043SGRIc3NaQnVKTEg2ZVZzbC9pSGU3TkQzTjVxMHkxVmNUMHRNM3lXOWFCbGc2T09mZTFJRDdadkJZWldTY3FEWUpQZGZOSzRYUksvbG1CYmw2U3NBN3JUYmFwRW5xVUtSWEd4anF4eC9kSjRjbTI0czFHTnhKOWZDMVRNZnErT3hreEs0d1FaWjVtVitNdlFVN0VGS2tQZVdDM1N1R2FKdjZ3V1dEanJ4Rlp2ckM3b1dxb29uT1NnSzJ1OGJtbDhFRVVrZnE1NXFVSmo5cnM2amJraGphdEkvSFl1VlNSUXpScW5EckZlR2srdHZ4dExGUW1HYlVWMk80NlFkZWNsdDJpcndGajIrNUNzOFJPa0ptdG5SUnFxek9JM2x2MHVLdHhndllHczhXa1hFK3F1Wi9GSEFYYU0wVU42akhXSVFFaGVSelZaNDdveFBJdWZ0b1pIYmkyQXBjRW1iU3dOZWJRbjNYWkVrOXViU09NclloUmxscmRWNHM4ZjNJbE5ueEU4MG5YQ1JlbnRDUExoZnZrU08rTUU0R3hkWmM5ZDJoNitPaUMzSVJUYkE0bjEvazF1UzJoMDVMYUVidytENEszV2ZZZTVRRmtUWlh6eHVtbE1WeFovZkt4VkcwckNvcU0xcXBiNDdVeVR6ZVZsaVFqV2tKZFVsY1N2VzN0S3Z4YzlyM3duWENoMWlKQTZVQ3JBNG8rRksyc1ErSERhRUYxaXgwUk4zVFFtdFNmYUpRVXIwZ2lmdHMzbW9ZVTQyMm50WmFLcjJvNU15cElIbUgwNHd0RzBvM3JFa0M3b29yRzY2U2s1Ynl3SzE3T3laYXl4SVdtUTBnVlF4N1Q5djA0MzFYOFhMd1ZIakE0UWUwNWJzMjNQekJ5V0JxU1U5MVExOGt2OGRrdmpvL0xHQmhMbDh1VTkxWVVzR25ObGs5R29ZeE5aLzh1Sm8zaGF0MjJmMW9TYldlUHh4ODVsOFNjRExCNDhBek5rb1dVYlRhV0JQTENCanJnQjV2dTlWdzRkTlU3MGRSSFFBUG9JUUhVUG9wN0xoVkVBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJzZWxlY3RlZFRpbGVcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUE4Q0FZQUFBQ1FQeC9PQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVFqU1VSQlZIZ0I3Wnc5VDl0QUdNZi81N2hGcWtJSE52cWlNclFTUTlVQmlabWhYNENGTFVpd1p1bllvV3VYcmgzb0NGTFlXUGdFbGRvVmxhSHFRTlVPVkJUYXBSMElvSWJFdmo0bUNZVHdKTG5FTC9kY2twOFUyVnljNU94LzduZVBZd3NGeHlrV2RmNzBGQXMrVUQ0K3crN1dsanFCd3lnNHl0S1N2cDNQNDZtdVlaWjI0ay9VUnN0cDdlUHorcnJhaGFNNEdVaWhvS2Q5aFFWYVBWYys5c01RbGFqZDh6Q2hRanlndis4Z2gwOGJHK29iSE1PcFFKcDZVZ3BUZE5DLzAvS1kyeTRJTU9YN21NbHAvSEJOWTA0RTBxNm4wTU5QazlkNU5GcGMwNWo0UURycHlSVFhOQ1kyRUZNOW1lS0t4c1FGTXFpZVRKR3VNVkdCeE5XVEtaSTFKaUtRcFBWa2lrU05XUTBrYlQyWklrbGoxZ0xKU2srbVNORlk1b0hZMHBNcHRqV1dXU0JTOUdTS0xZMWxFb2cwUFpsaVEyT3BCaUpkVDZaa3FiRlVBbkZOVDZaa29iSEVBM0ZWVDZha3JiSEVBaGtXUFptU2xzWmlCektzZWpJbGFZM0ZDbVRZOVdSS2tob2JLSkJSMDVNcFNXaXNyMEJHWFUrbXhOR1ljU0JqUGZYSG9CcnJHY2hZVC9Ib1YyTWRBNUdtSjlMQU9pM202WEVZQXUvZ1lidm5pMElzZWdvRjZJdDlLQVVlM3NBU3BocGpBNUdvSnhyK0w2bXp5eTFOZTlTdkYvQnh5R3c3VDlzV1VRK3dqc1pPbU1NcUxHS2lzV3VCaU5kVDlJM1hkS0FWN2pXYmFBZTJnNUJHREFXamFwajBjaWhxM1JLY3hwRldlS1U5N0VBSTNUUjJFWWhyMVpNS1VLUXZTM1RRSnh0Tmh4cDRUMzFmYkdrclV6QWxDcXBFeXpJRXdtbE11Vm85cVdpVVJNSFVRN2orSEkwYTB0TWFCWEVFNGJScnpLT2hrNmVkMC9RSXFsVTRnNjUycnhCN1BTK0Y2SmhUR0g2VVFhMkdrOHRPcnhiMEhJMlFaMVRCL0tadjFnR0UwcGdubGh2enhKV2VhRlFvamVjdDgwdVpkcklVS0t4QktOUy9oelRLcDZqZmV5Y1ZmS0c1NVB6R3BGNDV4UnhOa285bytPelRUditGSUJyVjAydGF2ZDlzb3lCS3FPdXAzRUZqNW1WeVJsQmY3MUp4OGpnNnZtY1ZmTGd4cWJlenNxS2YwTTdQMGVxL2FvaURYTTcrdk5KeUhsS0h5bGlxbnRhNDZpa0toaWIrdDdRNmU5bG0rVHdrZ3FxckNacXZaNmgvdCtpNGZ0emNWTC9hdCtucVdVa2F1endQMGZnYWtvcU1Ud3liWmJMbDh4Qk9UK3gydmQ1SXVzYWswMDFQSE1hVmlFU05TY1pFVHh4OWw0YXVWR00yTWRVVCsxb013RmhqUFAzcWlTUFd5ZE5ZWTNVRzFSTkhJbWV6bzZ5eE9IcGkzdzhKTVdvYVMwSlBISW4vM2pQc0drdFNUeHlwL1FBM2pCcExXay9zWnlCRmhrVmphZW1KSTVPZnFGM1ZXTnA2NHNqMG1vRkxHc3RDVCt6bkltT2theXhMUFhGWXU2b21UV00yOU1SaC9US25CSTNaMGhQYkZ3akFsc1pzNjRsRDFJMEFXV2xNaXA0NFJONlprYWJHSk9tSlEvUy9aMHBTWXhMMXhDSCszcVc0R3BPc0p3NG5iaWFMR0VSajB2WEU0VXdnRWFZYWMwVlBIRTRGMHFTVHhselRFNGVUZ1RScDFkaEZnMk42NG5BNmtJaW14bW9CSmwzVEU4ZC8vSHJ3TWwyVCtGRUFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImRlbGV0ZUJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRy9TVVJCVkhnQjdaZmZyUUZCRk1hL3ZibXZOS0FBTktBQTBRRHZhSUIzRkVBQk5JQjNHa0FCR2tBQkdxQ0FlKytYeldUdnc4eklPYk1qa2N3dnhHYnNuOS9Nbm5QMmJQWUQvSDAraHk5OEdFazROa2s0TmtrNE5razROa2s0TnQ4b2cwb0Y2UFdBVmd0b05vRmFMUisvMzRITEJUZ2NnUDBlWlpBRk56K2REckJZQU5XcWZ6L0tMNWZCNG1IQ3N4a3dISW9Pd1dxVml5dlJ4L0I0TEpjbG8xRStVU1U2NFc0M3Y3QVdUcFNocEVBWEVxZFRrVmhhSGcrZzNRYWVUOUZoOGhYbTZ0cGtLY0NFNHE5dnpNQWtaV1VSSWhkMjNVcVdyc2tFR0F4eVFYNjV6Ykh6Mlg0TXk2QVFlUjFtbmJYQmlhelhlZDJsS09FMjkzZUp1YzdsUVI3RHQ1djdQNjVxdnc5Y3I0WFFadU92MGZVNkpKVC9hTTR5eEVRdXpDZVdEUk96Smd3YWpTSThiRW5uTzVjSHVUQWxiRERwakN6RFlMc3RwRjFKNXpxWEIzblM4ZUsyU3NFeHhpb1R6TVFzcGJtL0srazRTU0h5cEtQTThmaTYyWGtGdzRFUERpSHlrR0E4VHFjSVJ0a0E2YW9FYnlWcnJwYUFObE5mMXVaejNTcHhvbXd4bFlRMzhPd3QyR3ErYW9aTUtDa1M3VC9od2dhS3MxTFlYcEZZS1hZN2NXZG1venpoTjVGZTgyT1RoR09UaEdPVGhHT1RoR1B6Y2NLL0hndWFVRS9mOWZFQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiY29weUJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRnFTVVJCVkhnQjdaZzlTOE5RRkliZlNvZlV1WU9vVTYwT2dqZ1VQd2FsS0lpRElBNmlkTkRWMWIvaElpNEtYUngwRVp3ZHhFRVJCMEVYUWFjMlhmekFvZGpOZE5ON0E4R2xZQTZjay9TVzh5d0orWUFuTnlmdnZUbVpmSDdnQnc3UkI4ZklSanZONWllNkdWTUo0ZGE1RVZaaGFWUllHaFdXUm9XbHlZSUp6OHRoczdLRlFuRVVYcTcvMytzLzN0OXdjbHhGcS9VRkNtd2pQRmRld1BqRVpDeFp5K0RRTURZcTI2RENKbHdZR1FNVit6YW82RWNuVGUrbmhFMkQrZktpcWRtLytxc2VIU0FweU1LcmErc29UYzhpTGNnbGthYXNSVDg2YWRpRTI4RTNrb0JGMkNhRzc5ZEE1ZkhoSGxSWUZqOUx5eXRodExXREFLV3BtVmozTk13RDN0M2VnRW9tNnZ6RTdVdnM3UjkyUE42bzEzQjFlUkdLU0JEMUpkaVdsM1loczFQYzdYak9QZ3pYNUtLeEpnMVoySy9UYTlSbnJHdXk4UG5acWZtOWVZMTFyVTJObCtjbmt3Ylg0SUtjRW1taDNjdWtVR0ZwVkZnYUZaYkczYjVFTkpOME84Nk44QytrWmxLTWtqSXBGZ0FBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJwb2ludEJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBS0dTVVJCVkhnQjdaZzlTQnhCRk1mZkpoYTNSNXJiU0NLWEwrSnBHaE10QWlHRkNBa0prZ2pCSWhFc2tqWkZtaFFwaEh5U0JKSW1rRFpOaXFRSUJBVS9VQkFGUVJRVU9VUlJDNzhxdndxOUE1Vzc2L1M5cDdPTTUzTGM3cjBWRi9aM0hEUDdabWZ2ZjIvZXZKbFpvN3k4WWc4Q3hCa0lHR1dxc3JtNUFhY1pqQVF1QStmaFVMRGZoSUw5SmhUc042Rmd2eWtEWVdJeEMxNitlczMxbnorK1FTNmJCVW5FUFJ5enp0dmZlUHd5U0NNbW1EejdvUEV4QzdWdFdHY2J0a2toRmhMUFdsOUFvcW9hUXlCajIxcGFuM01adjNRRi92eitCUktJZVhoMlpvckxpQms5MXJhK3VnSlNpQWtlSFI2Q2dmN2VZL2JCL2o1SHUxZk9ScVBuUGxFbGs5bDEwNC9qc2dYRDRNTEZDbGhlV21DYktoTlZOOEJKYkgzRFBYalUxQXpMaS9PUXk3bkxIcWlUUzg4eGZQdk9YYWk1VmN0ZlFna2prZWxVaXV2SmlUSDdmcHA4RHh1YjdMNTBueGRjZXpnU01lSHF0ZXRZTTFCc0hkc3FjYklaK0ZFZVRxZTJZSGRuMi9haUxqYUxlWGxxTWdtbWFmSjFzWjVXSGpiVUliVFlJMUxidTg5SFVwZk8vMzkvZWJqYjNuL2g2NDl2MzBETnpUbzdXK1JEZit6NzF3OVFEQ1Vja1l5Q3JickhUSWVNNGVaWmpqM2NlcGhYTVp4d1ZENXBmb3BwN0dCbzlRbEdiVFQwS2lmcklVSFFTSkIzMTlaV2orVHRRbmoyTVAwUXhXck1zaHpGRXBXSmFneUZXdnM2djUzNjBqT0tGYXZqT1Vza0o4WloyTnpNTkl4Z0RsYm8zclRRMDNyMklHaC9RWDI5NGpva0NwRS85SVRVd2lIK1hzSkpyTExYTjl3SEtjUUVPMjBsMVY1WWorZFNFZHV0OVhSMTRLeGY0VlZPNWQzdXpuYWVZS1hFYkQ1aWdpbDdVTHpTUk5SdCt2SXNnZmdSYWYzUXkwUTZuUUpwUkxPRW40UnZMMCtLVUxEZmhJTDlKaFRzTjhGOWU2bFdrdE5PNER5OEQ3UVc4V0RHSDV0V0FBQUFBRWxGVGtTdVFtQ0NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZWxlbWVudFwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdZQUFBQjVDQVlBQUFETFgxUXNBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBWnFTVVJCVkhnQjdaMXRTSjFWSE1EL2o5MU5uYUJYcmQxMFdicjJwUStEVE1nUGk1Z1ExaTBJb1gySkVqZjJna0hNVVRGaUJHbUZ0TkdIK2xCUkxmSkRFUlE0WThpbE43SndFRnFNNW9jVWNidGxNa2ZrNXJzdTgzYk90VWRNei9XZTUrV2M1MzhlL3orNDdISjNyMjcrdUw5em5uUHU4MmhCQ0VqOGVyVnljWG5oMDlucDZXc2xSYmVkaU45VGxnVERzY0JnemwyOEVzMkw3bWl4bHVGRUNsTFIxYi9Jc1ZyalZiRTJNQmhqeFp3ZnZyby9rbU45eE81V1puaEtjam1WYW50c1Qxa0hHSWh4WW5pMklKY0pTY0YrdVZkWUhYQnp1YzIwdkJrakptTzJaREVzYjBhSWtjaVdMTWJrRGJVWTU5bVNCWC9lVUlyeG5DMVpFT2NOblJnZnN5VUx5cnloRWFNdVc3TGd5bHZnWXJSbFN4WWtlUXRVVEFEWmtpWHd2QVVpSnZoc3lSSmMzclNLUVpjdFdRTEltell4aUxNbGk5YThLUmRqVHJaazBaTTNaV0tNelpZc2l2T21SRXdJc2lXTHNyejVLaVo4MlpMRi83ejVJaWIwMlpMRng3eDVGck9Gc2lXTEwzbHpMV2JyWmtzV2IzbHpMSWF5NVJDWGVYTWtockxsR3NkNWt4SkQyZklMK2J4dEtvYXlwUWlKdkdVVVE5bFN6cVo1MnlDR3NxVWJjZDVXeFZDMkFtWmQzdEppS0Z0b1dNMWJXc3duRi9wVGhhVXhpR3piRGtSdzVFZHVnYjA3QzZFMFA5ZUs4QWZtcGliU3Q4TFMyNEVMSXZRU3ljbUJ5cUo4ZGl0ZzkxZEdsOGphSjB6OU5RNnphVUV4S0Nnc0FVSTlKWG5iMkx1a0tQMXVXVXRrL1JQLytmc21YQjhmaGNXNVdhQzhxY1BPVmttZStPY2J5ZlJDeXBzYVJOa1NQaS9iRjZLOCtVZW1iSW5JS29aRGVmTkd0bXlKa0JKalEzbHpobXkyaEs4RkYxRGVzdU1rV3lKY2llRlEzc1M0eVpZSTEySnNLRzhyZU1tVzhPdUJUMnpsdkhuTmxnamZ4SEMyV3Q3OHlwWUlYOFhZaEQxdmZtZEwrRDFBSVdITW00cHNpVkFxaGhPV3ZLbk1sZ2psWW14TXpadU9iQW0vTDJqR3BMenB5cFlJN1dJNDJQT21PMXNpQWhGamd5MXZRV1ZMK0c4QkJHRElXNURaRW9GQ0RDZW92R0hJbGdnMFlteDA1UTFUdGtTZ0UyT2pNbS9Zc2lVQ3JSaU8zM25EbWkwUnFNWFllTTBiOW15Sk1FS01qWnU4bVpBdEVVYUo0Y2ptemFSc2lUQk9qRTJtdkptWUxSSEdpckZabTdlS25URWpzeVVpQjBLQW5iZjd5MHRDSVlVVENqRmhoTVFnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoWXNwQndJYlplbDNURS8zK1k5bnBxY25nUWlVaVltSnlaYVdscmZaWFd2dG1UMFBmSkJJUE1UZVJDK0RvUng1cEI0TTVRYTd2VlZiVzl2ZjE5ZjNMYnUvc09HVXEzY1RpY3BJQ2xyQnlta0N3ekJVVEErN0hiSXNLN24yd1EyRC96UHhlUExvby9HREtWZyt0TGk0ZUEwSUpjek56ZkdmYlIwVFVyZGVDaWZqck94WVBON3hiTVBqVC9kLy8xMHZFTDR4UHorLzJOWFY5VTFkWGQxaEpxUW4wL095blJkMytlZmUzcTQva2xlR284VWxWYVd4R09vcndOMjM1MjdBek5EUTBPOU5UVTJ2dDdlM254b2JHN3UwMlhPZG5OWmI4K3Jac3cvR2RsVWN0NUQreWl6RVkweVNEZXJQc2NIOUYzYi9zc3dMWEoxdnpXWnZyUmhuYndqRnBHZGI3UFlteTlZTkp5OTBkZVIvTkI1dlhZTGxxcW1KaVMrQUVNSUc5eC9aSDlWTVNLdFRLUnpYU3pKODl2YjhVMCtlb29QVC8yTWZKQllVRkR3aG1tM0o0dldrK0Q4SCt2ck9mZm41WnorVlZkeXhlMWRsMVowUUlFRU8vbnkyMWQzZDNkUGMzSHl5czdQelBmYlFkZkNBWDFjclNNL2VabWFtZjloYlU3UEVGaFR1aFFBSVVBd1g4aUxqekgrenJTWHdpSktMcmJ5ZlNCemtrd1BkczdjQUJ2OGtyQnkxOTREUEtGbjI1d2VueCtJUFY4M1BUcCtHRU1Lek5UazV5Zjl2MVNxa2NKVHV4eHcvY0tEMW5kZGVPVEk4TURBQUlZRWZKRFkwTkx3VWpVWlB1NWx0eWFMNmlqaEw0Nk9qRnk5OC9WVmZZWEYweDYxbDVYZHR6ODNOQTBXb0hHUDRiSXVOSVI4Mk5qWTJqNHlNZExPSEZrQWh1aS9vcFhSclFkRVlzMkZKSGpRUXlKWFdWRzB0S0JEVEE0SWxlUjBFc3VlUGZXc2gyNUs4RGdMOU1BYTJyUVhaSlhrZFlMZ2NubTliQzE0R2Z5ZEw4anJBZGpWUFQxc0xMc2NZeDB2eU9rQjdtVlUzV3dzT3hiaGVrdGNCMmcvOHFkeGE4TG9rcndQVW44VDBlMnZCcnlWNUhaaHdMVnpwcllWTWc3L2ZTL0k2TU9raXhWbTNGaktJOFgxSlhnZkdYbU5kdExXd2J2QlBncUlsZVIwWSsybi9URnNMT3Bia0NUbnlxdmZ0TzN6eXpCdVhCZ2NIZjZ1dnIzK0JQVllNQkJwcTJHMDNoSVIvQVRhR2QrenZIL0xRQUFBQUFFbEZUa1N1UW1DQ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJzZXR0aW5nc0JUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSi9TVVJCVkhnQjdaaE5UeE5SRklaZmxBVnRYTmhDbEJSV3JiZ1FGUk9LWVVGSU5Cb1RsMFJKdXBDRkMwbDB3MC93SjdneVlXT2lMa2hRRTZKeFlmd0Jpc0RDRDFnSXJWRmhVRDVhRnFSdEFnbWNjOE1BbldrYnp2UmV3b1I1TnAxN2UrZk9PK2VlcjB4ZFUxUHpGbnpFQ2ZpTWV2dGlaZVVmampMa0NlclhkeFlPQkpzbUVHeWFRTEJwQXNHbXFZZEdJcEVvQmg4TklSSnRWR05yWVI2akl5K3hhTTFERjFvdDNIbTFlMWNzRTJ0cFJaTG1kS0pWY0R4eDNqVVhpN1ZDSnlmRDRWT1ArU0tmWDVmY2g1N2VhK2k0a3NUbTVnWUtoUUw2N3FUUWZxbkR0WTR0SG8wMEt2ZGdpL2YwWHNlWnM4MzQ4L3NYSkpCTzlWdG45OE9TYnEyenF4djlxWHVvaGVmUGhqSHo0OXVCMTlmVXJkMjhkUnUxMHA4YVFFTW9CQ2xpd2UwWEw1Y0VWamx5MlZVVXlVMnFFU0t4dkpjVWNWcXpyQVVTbENYUlVkZC9QRDg2OGdLWjlLd2F4eE50eXBLVjFtYlNjNUFpdGpCYmIvanBFL1ZBSjIvSFh1MktaZmlhWDhDOVIzWm5qMVZJOGVURC9LREppVThsYzV3cHlnVVJpM2E2QjkvclJTeHpQSG9KTHNISnJ0SUt4a0hFUHV1RUE4dVpEZmhlM3NNTDRzTGg3QmYya3pqWHBvNTZlZW0vR3ZNTDlOMU4wY3VFUzlieG1Jdk05UGV2S0JZTE9BaDI0UkJuaVRpSnFwVFdlSDdnL2lENWJGNk5HeHhDbld1NTh1VnlXVWdRQytiQTRpQ3FsdlNyQ2JYaFRERXRxSFEyWWgvbWJGQXVWVW41K09FOXZPQ3BIMmJMdkJ0N2pkTjByRFBraDN5c042aGNPd1BSWm5MaU02MS9RNTFiQ3k2UTc2NlJuMC9SbkJjOE5UK1ZlUEJ3U0FYZWZqSnpzNnBJMUlxUlQxV0wxbC9YWERyOUV6clJLbmpxeXpqMXZYdWljK3JveDZFVHJTNWhrdURyNVdFUkNEWk5JTmcwZ1dEVCtQZnJwVjFKampxK3MvQTJicm5ieWw5cUFTNEFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInVwQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGSlNVUkJWSGdCN2RrL2E4SkFHTWZ4WDBxSE9FWWQyclJUUzVlMmRDbUZ2cEpDRjRjdURsMzZVbHhhMEtWUWh4WmZTYUYwYVAwejZTYmlvSEh6c3NXNzB4UEI4WjVIRER4Zk9Bd1hrQS9IQlR3VGxNdEhHWExVQVhMV29idVlUTWJZNS9ST3NKKzVXMkVCY3lkZzdnVE1uWUM1RXpCM0F1Wk93S2F6OHd0Y1h0K0FJM0p3SEorZyt2eUNoOGNLanVOVFVFY0tkdGpmbjIvMDJuLzJtaHBOQm5iWWJ1Y2ZyYzhtV2w5TkZqUVp1UEpVUlpMTUxEYUtpbllZOUN5WldqUlZnVHMxKzU3cHJ2UkROaGowVVFqRE5iRCtXa09hS28wdllUUWF3aWZ5TTUzWkNnNnJWS3FIc3RkaFdQREdia1lHTmx0Z3ViSUI2bTgxTlBSd2FIT1BLakx3SmpaVmM0djllRy9ZT2NvOWJQWkd0dHJIWHVQMjdqNkxpcVd0ZVRObjd2bCt2M09TUFhUY3lSOHB1MHJBM0FtWU93RnpKMkR1Qk15ZGdMbGJ2NmR6UDkvMnZkeXQ4QUtSYkk3aU94dG05d0FBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJkb3duQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGaVNVUkJWSGdCN1plL1NnTkJFTWEva3hTM2RuZW0wT0FUYU5CQ0JGOUFMT3lERnJHd09kSENnSlZQWUNYRVFpR1ZrRWJ3YmZ3VG55QWVGakYyZDZYWjJiQWhJZWt5QXpreVA3aTd2ZG5teDl5M3gyNVFMcS8vbzBDc29HQ1UvS0RYKzhFaVk1UGdub1hyc0FwTG84TFNxTEEwS2l5TkNrdWp3dElzci9EZS9nR2lLSjZxVTQzbXVHQVRQanc2Um5MVm1KQ21NZFZvamdzMjRkWlQwOTREbkowbkNJMUJHQm9uUzdYaEhBK0JQOU54bkRpaWVBM0paUU41bnJsM1kxYWQ3Ri8vRi9QQ2Z1TFlxR3c2VVJJa1VTK2JaeG0ycWp2Z29nUW1MdXpuNzl0T1B0emZqU0pBbmIyK3VYWHlYNS92NElBdnc0OU54RFlTdFpPNkU2V3JkbHAzdGZaekMxeXdacmhpWTBFTHJmUHhSbXNOMjlWZDErMzB1NHQ1OFJsbUZTYThOUDBwS0I0Y3NvUVhac3V3SjAyN2VIMXAyd1dZczhtT3d5NU1kSmdXMkN4MDh5T05Da3Vqd3RLb3NEUXFMSTBLUzZQQzBveTJsMzZEdk9nVXJzTUQ2UWxtMmNHbmcvY0FBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInBsdXNCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUV6U1VSQlZIZ0I3Wmk5YWdKQkVNZi9GM3lCTXhiQmRERkprV0JTU0Q3ZUlJK1NJazFLQzdFUUMwc3JRUXZCbHhBRUg4QVBiRlFzL0twRUxmVHVFZlJ1NFFxTEZWZDMxSVg1d1hJRE94dy85b1paNXF4STVHNERnN2lCWVlTQ1lMVmE0cHJ4S2tFOGpUdGhGcWFHaGFsaFlXcFltSm9RTkdQYllmeisvWXU0VWk1aE1aOUJKOXBQT1BINURUdDhLOVpyL0EyNjRScW1ob1dwWVdGcWxQdHdOSHFQbC9pN2REOFdlOTZOZjZTcDZMUWFjRjBIS2xqQkVIcm9pSlJNWlVTUDFZSHJySkhMcGcvS1BXRkVzcUFQOVhjcGwwU3hrRWZpNDB1Njc1ZkJ3K09UaUtmakVTYVRvVFIzME85Q0ZXVmgvelBXYTFWNWdsZXpnYkF2dXpmM0NMaXRVY1BDMUxBd05kcUZCNzJ1MS9vY3NUcnRKblNqZkRWZkN2NTdlUzVZbUJvV3BvYUZxVEYzYWc1dWttdkh1QlBlQWdmQVFjVXBSQ2c1QUFBQUFFbEZUa1N1UW1DQ1wiLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IEludGVyYWN0aW9uRXZlbnQsIFRleHR1cmUsIFRpbGluZ1Nwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQge1xyXG4gIHB1YmxpYyB0aWxlOiBUaWxpbmdTcHJpdGU7XHJcbiAgcHJpdmF0ZSBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gIHByaXZhdGUgZHJhZ2dpbmc6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEFwcCkge1xyXG4gICAgdGhpcy50aWxlID0gbmV3IFRpbGluZ1Nwcml0ZShcclxuICAgICAgVGV4dHVyZS5mcm9tKFwiYmdcIiksXHJcbiAgICAgIHRoaXMuYXBwLnNjcmVlbi53aWR0aCxcclxuICAgICAgdGhpcy5hcHAuc2NyZWVuLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMudGlsZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnRpbGVcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHRoaXMucG9pbnRlckRvd24oZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB0aGlzLnBvaW50ZXJVcCgpKVxyXG4gICAgICAvLyAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsICgpID0+IHRoaXMucG9pbnRlck91dCgpKVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCAoZSkgPT4gdGhpcy5wb2ludGVyTW92ZShlKSk7XHJcbiAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLnRpbGUpO1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5hcHAub2Zmc2V0LnggIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IHx8XHJcbiAgICAgICAgdGhpcy5hcHAub2Zmc2V0LnkgIT0gdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55XHJcbiAgICAgIClcclxuICAgICAgICB0aGlzLm1vdmVUb09mZnNldChkKTtcclxuICAgICAgaWYgKHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi54ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueClcclxuICAgICAgICB0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueCA9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueDtcclxuICAgICAgaWYgKHRoaXMuYXBwLmNvbnRhaW5lci5wb3NpdGlvbi55ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSlcclxuICAgICAgICB0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueSA9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvT2Zmc2V0KGQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA+IHRoaXMuYXBwLm9mZnNldC54KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCAtPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPCB0aGlzLmFwcC5vZmZzZXQueClcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPSB0aGlzLmFwcC5vZmZzZXQueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPCB0aGlzLmFwcC5vZmZzZXQueCkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggKz0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID4gdGhpcy5hcHAub2Zmc2V0LngpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID0gdGhpcy5hcHAub2Zmc2V0Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID4gdGhpcy5hcHAub2Zmc2V0LnkpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55IC09IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA8IHRoaXMuYXBwLm9mZnNldC55KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA9IHRoaXMuYXBwLm9mZnNldC55O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA8IHRoaXMuYXBwLm9mZnNldC55KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSArPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPiB0aGlzLmFwcC5vZmZzZXQueSlcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPSB0aGlzLmFwcC5vZmZzZXQueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvaW50ZXJEb3duKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFwcC5zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmFwcC5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMudGlsZS5wYXJlbnQpO1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgfVxyXG4gIHBvaW50ZXJVcCgpIHtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgLy8gcG9pbnRlck91dCgpIHtcclxuICAvLyAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAvLyB9XHJcbiAgcG9pbnRlck1vdmUoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnRpbGUucGFyZW50KTtcclxuICAgICAgY29uc3QgeCA9IG5ld1Bvc2l0aW9uLnggLSB0aGlzLnN0YXJ0Lng7XHJcbiAgICAgIGNvbnN0IHkgPSBuZXdQb3NpdGlvbi55IC0gdGhpcy5zdGFydC55O1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggKz0geDtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ICs9IHk7XHJcbiAgICAgIHRoaXMuc3RhcnQueCArPSB4O1xyXG4gICAgICB0aGlzLnN0YXJ0LnkgKz0geTtcclxuICAgICAgdGhpcy5hcHAub2Zmc2V0LnggKz0geDtcclxuICAgICAgdGhpcy5hcHAub2Zmc2V0LnkgKz0geTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBJbnRlcmFjdGlvbkV2ZW50LCBJUG9pbnREYXRhLCB1dGlscyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IE1FTlUgfSBmcm9tIFwiLi93aWRnZXRzL21lbnUud2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZSB7XHJcbiAgYXBwOiBBcHA7XHJcbiAgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBtZW51OiBNRU5VO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBjdXJzb3I6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xyXG4gIHJlZjogc3RyaW5nO1xyXG4gIF9jb2xvcjogbnVtYmVyO1xyXG4gIHN0YXJ0OiBJUG9pbnREYXRhO1xyXG4gIGVuZDogSVBvaW50RGF0YTtcclxuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xyXG4gIGNvbnN0cnVjdG9yKHsgcmVmLCBjb2xvciwgeCwgeSwgekluZGV4IH06IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMucmVmID0gcmVmO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy56SW5kZXggPSB6SW5kZXg7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXJcclxuICAgICAgLy8gVE9ETyDQvdC10L7QsdGF0L7QtNC40Lwg0L7QsdGJ0LjQuSDRgdC10YDQstC40YEg0L7QsdGA0LDQsdC+0YLQutC4INGB0L7QsdGL0YLQuNC5LCDRh9C10YDQtdC3INC90LXQs9C+INC90LXQvtCx0YXQvtC00LjQvNC+INC+0YDQs9Cw0L3QuNC30L7QstCw0YLRjCDQv9GA0LjQvNC10L3QtdC90LjQtSDQuNC90YHRgtGA0YPQvNC10L3RgtC+0LJcclxuICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHRoaXMucG9pbnRlckRvd24oZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoZSkgPT4gdGhpcy5wb2ludGVyVXAoZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cG91dHNpZGVcIiwgKGUpID0+IHRoaXMucG9pbnRlck91dChlKSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKGUpID0+IHRoaXMucG9pbnRlck1vdmUoZSkpO1xyXG4gICAgdGhpcy5tZW51ID0gbmV3IE1FTlUodGhpcyk7XHJcbiAgICB0aGlzLmFwcC5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5tZW51KTtcclxuICAgIHRoaXMuYXBwLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG4gIHNlbGVjdCgpIHtcclxuICAgIGlmICh0aGlzLmFwcC5zZWxlY3RlZCAhPSB0aGlzKSB7XHJcbiAgICAgIHRoaXMuYXBwLnNlbGVjdGVkID0gdGhpcztcclxuICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcclxuICAgICAgdGhpcy5hcHAuZXZlbnRzW1wic2VsZWN0XCJdLmZvckVhY2goKGNiKSA9PiBjYih0aGlzKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB1bnNlbGVjdCgpIHtcclxuICAgIHRoaXMubWVudS5jbG9zZSgpO1xyXG4gIH1cclxuICBwb2ludGVyRG93bihlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICB0aGlzLnN0YXJ0ID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFscGhhID0gMC44O1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnNvciA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyKTtcclxuICAgIC8vIHRoaXMuY29udGFpbmVyLnpJbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5yZWZzKS5sZW5ndGg7XHJcbiAgfVxyXG4gIHBvaW50ZXJVcChlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hbHBoYSA9IDE7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5zdGFydCAmJiB0aGlzLnN0YXJ0LnggIT0gdGhpcy54ICYmIHRoaXMuc3RhcnQueSAhPSB0aGlzLnkpIHtcclxuICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbmQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgdGhpcy5zZWxlY3QoKTtcclxuICB9XHJcbiAgcG9pbnRlck91dChlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hbHBoYSA9IDE7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLmFwcC5jb25maWdTZXJ2aWNlLmRvKCk7XHJcbiAgICB0aGlzLmVuZCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICB0aGlzLnNlbGVjdCgpO1xyXG4gIH1cclxuICBwb2ludGVyTW92ZShlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZyAmJiB0aGlzLmFwcC5tb3ZlICYmIHRoaXMuYXBwLmVkaXQpIHtcclxuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgICAvLyB0aGlzLnggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5jdXJzb3IueDtcclxuICAgICAgLy8gdGhpcy55ID0gbmV3UG9zaXRpb24ueSAtIHRoaXMuY3Vyc29yLnk7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5jdXJzb3IueDtcclxuICAgICAgbmV3UG9zaXRpb24ueSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLmN1cnNvci55O1xyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA+PSAyNSkge1xyXG4gICAgICAgIHRoaXMueCArPSAyNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54IDw9IC0yNSkge1xyXG4gICAgICAgIHRoaXMueCAtPSAyNTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA+PSAxNSkge1xyXG4gICAgICAgIHRoaXMueSArPSAxNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55IDw9IC0xNSkge1xyXG4gICAgICAgIHRoaXMueSAtPSAxNTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnUucG9zaXRpb24uc2V0KHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLng7XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IHg7XHJcbiAgfVxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG4gIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueSA9IHk7XHJcbiAgfVxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gIH1cclxuICBzZXQgekluZGV4KGk6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIuekluZGV4ID0gaTtcclxuICB9XHJcbiAgZ2V0IHpJbmRleCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci56SW5kZXg7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBHcmFwaGljcyxcclxuICBJbnRlcmFjdGlvbkV2ZW50LFxyXG4gIFRleHR1cmUsXHJcbiAgVGlsaW5nU3ByaXRlLFxyXG4gIHV0aWxzLFxyXG59IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IExBQkVMIH0gZnJvbSBcIi4vd2lkZ2V0cy9sYWJlbC53aWRnZXRcIjtcclxuaW1wb3J0IHsgU1BSSVRFIH0gZnJvbSBcIi4vd2lkZ2V0cy9zcHJpdGUud2lkZ2V0XCI7XHJcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYmFzZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRQcm9wcyxcclxuICBDb21wb25lbnRDb25maWcsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDT01QT05FTlQgZXh0ZW5kcyBCYXNlIHtcclxuICBwcml2YXRlIHNlbGVjdFRpbGUgPSBuZXcgVGlsaW5nU3ByaXRlKFRleHR1cmUuZnJvbShcInNlbGVjdFwiKSk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBDb21wb25lbnRQcm9wcztcclxuICBwcml2YXRlIF9zcHJpdGUgPSBuZXcgU1BSSVRFKCk7XHJcbiAgcHJpdmF0ZSBfbGFiZWwgPSBuZXcgTEFCRUwoKTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMsIGFwcCk7XHJcbiAgICB0aGlzLnR5cGUgPSBcImNvbXBvbmVudFwiO1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGlsZVBvc2l0aW9uLnggKz0gZCAvIDY7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aWxlUG9zaXRpb24ueSArPSBkIC8gNjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIHRoaXMuX2xhYmVsLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9sYWJlbCk7XHJcblxyXG4gICAgdGhpcy5fc3ByaXRlLnpJbmRleCA9IDI7XHJcbiAgICB0aGlzLl9zcHJpdGUucG9zaXRpb24ueSA9IHRoaXMuX2xhYmVsLmhlaWdodCArIDIwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuXHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCk7XHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCwgdGhpcy5fc3ByaXRlLndpZHRoIC8gNCk7XHJcbiAgICB0aGlzLmNpcmNsZSgwLCB0aGlzLmNvbnRhaW5lci5oZWlnaHQgKyAyMCwgdGhpcy5fc3ByaXRlLndpZHRoIC8gMik7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5waXZvdC5zZXQoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdCgpIHtcclxuICAgIGlmIChzdXBlci5zZWxlY3QoKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUud2lkdGggPSB0aGlzLl9zcHJpdGUud2lkdGggKyAyMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLmhlaWdodCA9IHRoaXMuX3Nwcml0ZS5oZWlnaHQgKyAyMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnggPSAtdGhpcy5fc3ByaXRlLndpZHRoIC8gMiAtIDEwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueSA9IHRoaXMuX3Nwcml0ZS55IC0gMTA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5hbHBoYSA9IDAuNTtcclxuICAgICAgdGhpcy5jcm9zcyh0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCwgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkpO1xyXG4gICAgICB0aGlzLmNyb3NzKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54ICsgdGhpcy5zZWxlY3RUaWxlLndpZHRoLFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3Jvc3MoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkgKyB0aGlzLnNlbGVjdFRpbGUuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3Jvc3MoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnggKyB0aGlzLnNlbGVjdFRpbGUud2lkdGgsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkgKyB0aGlzLnNlbGVjdFRpbGUuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuc2VsZWN0VGlsZSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuc2VsZWN0R3JhcGhpY3MpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bnNlbGVjdCgpIHtcclxuICAgIHN1cGVyLnVuc2VsZWN0KCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdFRpbGUpO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zZWxlY3RHcmFwaGljcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBuZXcgR3JhcGhpY3MoKTtcclxuICAgIGxldCByYWQgPSBvZmZzZXQ7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmIChyYWQgPj0gdGhpcy5fc3ByaXRlLndpZHRoKSB7XHJcbiAgICAgICAgcmFkID0gMDtcclxuICAgICAgfVxyXG4gICAgICByYWQgKz0gZCAvIDI7XHJcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSAodGhpcy5fc3ByaXRlLndpZHRoIC0gcmFkKSAvIHRoaXMuX3Nwcml0ZS53aWR0aDtcclxuICAgICAgY2lyY2xlLmNsZWFyKCk7XHJcbiAgICAgIGNpcmNsZS5saW5lU3R5bGUoMiwgdGhpcy5fY29sb3IsIG9wYWNpdHkpO1xyXG4gICAgICBjaXJjbGUuYmVnaW5GaWxsKHRoaXMuX2NvbG9yLCBvcGFjaXR5IC0gMC4xKTtcclxuICAgICAgY2lyY2xlLmRyYXdFbGxpcHNlKHgsIHksIHJhZCwgcmFkIC8gMS42KTtcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlLnpJbmRleCA9IDA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGUpO1xyXG4gIH1cclxuICBwcml2YXRlIGNyb3NzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweGZmZmZmZiwgMSk7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLm1vdmVUbyh4IC0gNiwgeSk7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLmxpbmVUbyh4ICsgNiwgeSk7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLm1vdmVUbyh4LCB5IC0gNik7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLmxpbmVUbyh4LCB5ICsgNik7XHJcbiAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIHBvaW50ZXJNb3ZlKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdnaW5nICYmIHRoaXMuYXBwLm1vdmUgJiYgdGhpcy5hcHAuZWRpdCkge1xyXG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5jdXJzb3IueDtcclxuICAgICAgbmV3UG9zaXRpb24ueSA9XHJcbiAgICAgICAgbmV3UG9zaXRpb24ueSArXHJcbiAgICAgICAgKHRoaXMuX2xhYmVsLmhlaWdodCArIHRoaXMuX3Nwcml0ZS5oZWlnaHQgKyAzMCAtIHRoaXMuY3Vyc29yLnkpO1xyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA+PSAyNSkge1xyXG4gICAgICAgIHRoaXMueCArPSAyNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi54IC0gdGhpcy54IDw9IC0yNSkge1xyXG4gICAgICAgIHRoaXMueCAtPSAyNTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA+PSAxNSkge1xyXG4gICAgICAgIHRoaXMueSArPSAxNTtcclxuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbi55IC0gdGhpcy55IDw9IC0xNSkge1xyXG4gICAgICAgIHRoaXMueSAtPSAxNTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnUucG9zaXRpb24uc2V0KHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogQ29tcG9uZW50UHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLl9zcHJpdGUudGV4dHVyZSA9IFRleHR1cmUuZnJvbShgJHtwcm9wcy5uYW1lfWApO1xyXG4gICAgdGhpcy5fbGFiZWwudGV4dCA9IHByb3BzLmxhYmVsO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX2xhYmVsKSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICAgIHRoaXMuc2VsZWN0R3JhcGhpY3MudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBDb21wb25lbnRDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEdyYXBoaWNzLFxyXG4gIEludGVyYWN0aW9uRGF0YSxcclxuICBJbnRlcmFjdGlvbkV2ZW50LFxyXG4gIFNwcml0ZSxcclxuICBUZXh0dXJlLFxyXG4gIHV0aWxzLFxyXG59IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IExpbmVQcm9wcywgTGluZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2xpbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMSU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfbGluZTogR3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wcm9wczogTGluZVByb3BzO1xyXG4gIHByaXZhdGUgZWRpdFBvaW50czogR3JhcGhpY3NbXSA9IFtdO1xyXG4gIHByaXZhdGUgZGVsZXRlQlROID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJkZWxldGVCVE5cIikpO1xyXG4gIHByaXZhdGUgcGx1c0JUTiA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwicGx1c0JUTlwiKSk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFBvaW50OiB7XHJcbiAgICBncmFwaGljczogR3JhcGhpY3M7XHJcbiAgICBwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xyXG4gICAgZHJhZzogYm9vbGVhbjtcclxuICB9IHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fbGluZSk7XHJcbiAgICB0aGlzLnR5cGUgPSBcImxpbmVcIjtcclxuICAgIHRoaXMuZGVsZXRlQlROLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVsZXRlQlROLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kZWxldGVCVE4uYWxwaGEgPSAwLjU7XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5zY2FsZS5zZXQoMC44LCAwLjgpO1xyXG4gICAgdGhpcy5wbHVzQlROLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMucGx1c0JUTi5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMucGx1c0JUTi5hbHBoYSA9IDAuNTtcclxuICAgIHRoaXMucGx1c0JUTi5zY2FsZS5zZXQoMC44LCAwLjgpO1xyXG4gICAgdGhpcy5wbHVzQlROLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcclxuICAgICAgdGhpcy5fcHJvcHMucG9pbnRzLnB1c2goeyB4OiB0aGlzLnBsdXNCVE4ueCwgeTogdGhpcy5wbHVzQlROLnkgfSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICAgIHRoaXMuYWRkRWRpdFBvaW50cygpO1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICAgIHRoaXMuZWRpdFBvaW50c1t0aGlzLmVkaXRQb2ludHMubGVuZ3RoIC0gMV0uZW1pdChcclxuICAgICAgICBcInBvaW50ZXJkb3duXCIsXHJcbiAgICAgICAgZSxcclxuICAgICAgICB0aGlzLmVkaXRQb2ludHNbdGhpcy5lZGl0UG9pbnRzLmxlbmd0aCAtIDFdLFxyXG4gICAgICAgIHRoaXMuX3Byb3BzLnBvaW50c1t0aGlzLl9wcm9wcy5wb2ludHMubGVuZ3RoIC0gMV1cclxuICAgICAgKTtcclxuICAgICAgLy8gdGhpcy5zZWxlY3RQb2ludCh0aGlzLmVkaXRQb2ludHMucG9wKCksIHRoaXMuX3Byb3BzLnBvaW50cy5wb3AoKSwgZSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucGx1c0JUTik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucGx1c0JUTi5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5wbHVzQlROLmFscGhhID0gMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbHVzQlROLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucGx1c0JUTi5hbHBoYSA9IDAuNTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZWxldGVCVE4ub24oXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUG9pbnQpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVBvaW50KHRoaXMuc2VsZWN0ZWRQb2ludC5wb2ludCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZWxldGVCVE4ub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVsZXRlQlROLmFscGhhID0gMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZWxldGVCVE4ub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHtcclxuICAgICAgdGhpcy5kZWxldGVCVE4uYWxwaGEgPSAwLjU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnRJbkxpbmUoXHJcbiAgICBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBvZmZzZXQ/OiBudW1iZXJcclxuICApIHtcclxuICAgIGNvbnN0IHNlZ21lbnRMZW5ndGggPSBNYXRoLnNxcnQoXHJcbiAgICAgIE1hdGgucG93KGIueCAtIGEueCwgMikgKyBNYXRoLnBvdyhiLnkgLSBhLnksIDIpXHJcbiAgICApO1xyXG4gICAgbGV0IGZhY3RvciA9IHNlZ21lbnRMZW5ndGggLyAyIC8gc2VnbWVudExlbmd0aDtcclxuICAgIGlmIChvZmZzZXQpIHtcclxuICAgICAgZmFjdG9yID0gb2Zmc2V0IC8gc2VnbWVudExlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHg6IGEueCArIChiLnggLSBhLngpICogZmFjdG9yLCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIGZhY3RvciB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWdtZW50cyhcclxuICAgIHBvaW50czogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sXHJcbiAgICByYWRpdXM6IG51bWJlclxyXG4gICk6IHtcclxuICAgIHN0YXJ0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgICBlbmQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICAgIGJhemllcj86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgfVtdIHtcclxuICAgIHJldHVybiBwb2ludHMucmVkdWNlKChhY2MsIHBvaW50LCBpKSA9PiB7XHJcbiAgICAgIGlmIChwb2ludHNbaSAtIDFdKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50SW5MaW5lKHBvaW50c1tpIC0gMV0sIHBvaW50LCByYWRpdXMpLFxyXG4gICAgICAgICAgICBlbmQ6IHBvaW50LFxyXG4gICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50SW5MaW5lKHBvaW50c1tpIC0gMV0sIHBvaW50LCByYWRpdXMpLFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpIC0gMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb2ludHNbaSArIDFdKSB7XHJcbiAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSAtIDFdLCByYWRpdXMpLFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpICsgMV0sIHJhZGl1cyksXHJcbiAgICAgICAgICAgIGJhemllcjogcG9pbnQsXHJcbiAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgIHN0YXJ0OiBwb2ludCxcclxuICAgICAgICAgIGVuZDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgKyAxXSwgcmFkaXVzKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3TGluZSgpIHtcclxuICAgIHRoaXMuX2xpbmUuY2xlYXIoKTtcclxuICAgIHRoaXMuX2xpbmUubGluZVN0eWxlKHRoaXMuX3Byb3BzLndpZHRoLCB0aGlzLl9jb2xvciwgMSk7XHJcbiAgICB0aGlzLnNlZ21lbnRzKHRoaXMuX3Byb3BzLnBvaW50cywgdGhpcy5fcHJvcHMucmFkaXVzKS5mb3JFYWNoKChzZWdtZW50KSA9PiB7XHJcbiAgICAgIGlmICghc2VnbWVudC5iYXppZXIpIHtcclxuICAgICAgICB0aGlzLl9saW5lLm1vdmVUbyhzZWdtZW50LnN0YXJ0LngsIHNlZ21lbnQuc3RhcnQueSk7XHJcbiAgICAgICAgdGhpcy5fbGluZS5saW5lVG8oc2VnbWVudC5lbmQueCwgc2VnbWVudC5lbmQueSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xpbmUuYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICBzZWdtZW50LnN0YXJ0LngsXHJcbiAgICAgICAgc2VnbWVudC5zdGFydC55LFxyXG4gICAgICAgIHNlZ21lbnQuYmF6aWVyLngsXHJcbiAgICAgICAgc2VnbWVudC5iYXppZXIueSxcclxuICAgICAgICBzZWdtZW50LmVuZC54LFxyXG4gICAgICAgIHNlZ21lbnQuZW5kLnlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbGluZS5saW5lU3R5bGUoMSwgdGhpcy5fY29sb3IsIDApO1xyXG4gICAgdGhpcy5fbGluZS5iZWdpbkZpbGwoMHhmZmZmZmYsIDAuMDEpO1xyXG4gICAgdGhpcy5fbGluZS5tb3ZlVG8odGhpcy5fcHJvcHMucG9pbnRzWzBdLngsIHRoaXMuX3Byb3BzLnBvaW50c1swXS55KTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgICB0aGlzLl9saW5lLmxpbmVUbyhwb2ludC54ICsgdGhpcy5fcHJvcHMud2lkdGgsIHBvaW50LnkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGksIGFycikgPT4ge1xyXG4gICAgICB0aGlzLl9saW5lLmxpbmVUbyhcclxuICAgICAgICBhcnJbYXJyLmxlbmd0aCAtIDEgLSBpXS54IC0gdGhpcy5fcHJvcHMud2lkdGggLSA0MCxcclxuICAgICAgICBhcnJbYXJyLmxlbmd0aCAtIDEgLSBpXS55XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2xpbmUuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fbGluZS5jbG9zZVBhdGgoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRWRpdFBvaW50cygpIHtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnBvaW50KHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChwKTtcclxuICAgICAgdGhpcy5lZGl0UG9pbnRzLnB1c2gocCk7XHJcbiAgICAgIHAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4gdGhpcy5wb2ludERvd24oZSwgcCwgcG9pbnQpKTtcclxuICAgICAgcC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB0aGlzLnBvaW50VXAoKSk7XHJcbiAgICAgIHAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsICgpID0+IHRoaXMucG9pbnRVcCgpKTtcclxuICAgICAgcC5vbihcInBvaW50ZXJtb3ZlXCIsICgpID0+IHRoaXMucG9pbnRNb3ZlKCkpO1xyXG4gICAgICBpZiAoYXJyW2kgKyAxXSkge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIGFycltpICsgMV0pO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclBvaW50ID0gdGhpcy5wb2ludChjZW50ZXIueCwgY2VudGVyLnksIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZWRpdFBvaW50cy5wdXNoKGNlbnRlclBvaW50KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjZW50ZXJQb2ludCk7XHJcbiAgICAgICAgY2VudGVyUG9pbnQub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4gdGhpcy5jZW50ZXJEb3duKGNlbnRlciwgZSwgaSArIDEpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50KHg6IG51bWJlciwgeTogbnVtYmVyLCBjZW50ZXI/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBwb2ludCA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgcG9pbnQucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgcG9pbnQuYmVnaW5GaWxsKDB4ZmZmZmZmLCBjZW50ZXIgPyAwLjA1IDogMC4yKTtcclxuICAgIHBvaW50LmRyYXdFbGxpcHNlKDAsIDAsIGNlbnRlciA/IDE2IDogMjUsIGNlbnRlciA/IDE2IC8gMS42IDogMjUgLyAxLjYpO1xyXG4gICAgcG9pbnQuZW5kRmlsbCgpO1xyXG4gICAgcG9pbnQubGluZVN0eWxlKDIsIDB4ZmZmZmZmLCAwLjUpO1xyXG4gICAgaWYgKGNlbnRlcikge1xyXG4gICAgICBwb2ludC5tb3ZlVG8oLTEwLCAtMTAgLyAxLjYpO1xyXG4gICAgICBwb2ludC5saW5lVG8oMTAsIDEwIC8gMS42KTtcclxuICAgICAgcG9pbnQubW92ZVRvKDEwLCAtMTAgLyAxLjYpO1xyXG4gICAgICBwb2ludC5saW5lVG8oLTEwLCAxMCAvIDEuNik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb2ludC5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgIHBvaW50LmxpbmVUbygwLCAtMjApO1xyXG4gICAgfVxyXG4gICAgcG9pbnQubGluZVN0eWxlKDAsIDApO1xyXG4gICAgcG9pbnQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgcG9pbnQuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICByZXR1cm4gcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVBvaW50cygpIHtcclxuICAgIHRoaXMuZWRpdFBvaW50cy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVkaXRQb2ludHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlUG9pbnQocG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xyXG4gICAgaWYgKHRoaXMuX3Byb3BzLnBvaW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlbW92ZSh0aGlzLnJlZik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudW5zZWxlY3RQb2ludCgpO1xyXG4gICAgY29uc3QgaSA9IHRoaXMuX3Byb3BzLnBvaW50cy5pbmRleE9mKHBvaW50KTtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICB0aGlzLnJlbW92ZVBvaW50cygpO1xyXG4gICAgdGhpcy5hZGRFZGl0UG9pbnRzKCk7XHJcbiAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB0aGlzLm1lbnUucG9zaXRpb24uc2V0KFxyXG4gICAgICB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueCArIHRoaXMueCAtIDIwLFxyXG4gICAgICB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueSArIHRoaXMueSAtIDIwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludERvd24oXHJcbiAgICBlOiBJbnRlcmFjdGlvbkV2ZW50LFxyXG4gICAgZ3JhcGhpY3M6IEdyYXBoaWNzLFxyXG4gICAgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxyXG4gICkge1xyXG4gICAgdGhpcy5tZW51LmNsb3NlKCk7XHJcbiAgICB0aGlzLmFwcC5tb3ZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdFBvaW50KGdyYXBoaWNzLCBwb2ludCwgZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50VXAoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmRlbGV0ZUJUTik7XHJcbiAgICB0aGlzLmFwcC5tb3ZlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkUG9pbnQpIHRoaXMuc2VsZWN0ZWRQb2ludC5kcmFnID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbW92ZVBvaW50cygpO1xyXG4gICAgdGhpcy5hZGRFZGl0UG9pbnRzKCk7XHJcbiAgICB0aGlzLm1lbnUub3BlbigpO1xyXG4gICAgdGhpcy5tZW51LnBvc2l0aW9uLnNldChcclxuICAgICAgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnggKyB0aGlzLnggLSAyMCxcclxuICAgICAgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnkgKyB0aGlzLnkgLSAyMFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnRNb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQb2ludCAmJiB0aGlzLnNlbGVjdGVkUG9pbnQuZHJhZykge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmRlbGV0ZUJUTik7XHJcbiAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IHRoaXMuc2VsZWN0ZWRQb2ludC5kYXRhLmdldExvY2FsUG9zaXRpb24oXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzLnBhcmVudFxyXG4gICAgICApO1xyXG4gICAgICBuZXdDb29yZHMueCA9IG5ld0Nvb3Jkcy54IC0gKG5ld0Nvb3Jkcy54ICUgMjUpO1xyXG4gICAgICBuZXdDb29yZHMueSA9IG5ld0Nvb3Jkcy55IC0gKG5ld0Nvb3Jkcy55ICUgMTUpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MueCA9IG5ld0Nvb3Jkcy54O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MueSA9IG5ld0Nvb3Jkcy55O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQucG9pbnQueCA9IG5ld0Nvb3Jkcy54O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUG9pbnQucG9pbnQueSA9IG5ld0Nvb3Jkcy55O1xyXG4gICAgICB0aGlzLmVkaXRQb2ludHMuZm9yRWFjaCgocG9pbnQsIGksIGFycikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBvaW50ID09PSB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MgJiZcclxuICAgICAgICAgIGkgPiAwICYmXHJcbiAgICAgICAgICBpIDwgYXJyLmxlbmd0aCAtIDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFycltpIC0gMV0ueCA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgLSAyXSwgbmV3Q29vcmRzKS54O1xyXG4gICAgICAgICAgYXJyW2kgLSAxXS55ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBuZXdDb29yZHMpLnk7XHJcbiAgICAgICAgICBhcnJbaSArIDFdLnggPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIG5ld0Nvb3JkcykueDtcclxuICAgICAgICAgIGFycltpICsgMV0ueSA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgKyAyXSwgbmV3Q29vcmRzKS55O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBwb2ludCA9PT0gdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzICYmXHJcbiAgICAgICAgICBpID09PSBhcnIubGVuZ3RoIC0gMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYXJyW2kgLSAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBuZXdDb29yZHMpLng7XHJcbiAgICAgICAgICBhcnJbaSAtIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpIC0gMl0sIG5ld0Nvb3JkcykueTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBvaW50ID09PSB0aGlzLnNlbGVjdGVkUG9pbnQuZ3JhcGhpY3MgJiYgaSA9PT0gMCkge1xyXG4gICAgICAgICAgYXJyW2kgKyAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSArIDJdLCBuZXdDb29yZHMpLng7XHJcbiAgICAgICAgICBhcnJbaSArIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIG5ld0Nvb3JkcykueTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRlbGV0ZUJUTi5wb3NpdGlvbi5zZXQobmV3Q29vcmRzLngsIG5ld0Nvb3Jkcy55KTtcclxuICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjZW50ZXJEb3duKFxyXG4gICAgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcclxuICAgIGU6IEludGVyYWN0aW9uRXZlbnQsXHJcbiAgICBpOiBudW1iZXJcclxuICApIHtcclxuICAgIHRoaXMuX3Byb3BzLnBvaW50cy5zcGxpY2UoaSwgMCwgcG9pbnQpO1xyXG4gICAgdGhpcy5yZW1vdmVQb2ludHMoKTtcclxuICAgIHRoaXMuYWRkRWRpdFBvaW50cygpO1xyXG4gICAgLy8gdGhpcy5lZGl0UG9pbnRzW2kgKyAyXS5lbWl0KFwicG9pbnRlcmRvd25cIiwgZSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQb2ludChcclxuICAgIGdyYXBoaWNzOiBHcmFwaGljcyxcclxuICAgIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBlOiBJbnRlcmFjdGlvbkV2ZW50XHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUG9pbnQgPSB7XHJcbiAgICAgIGdyYXBoaWNzLFxyXG4gICAgICBwb2ludCxcclxuICAgICAgZGF0YTogZS5kYXRhLFxyXG4gICAgICBkcmFnOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLl9wcm9wcy5wb2ludHMubGVuZ3RoIC0gMSA9PT0gdGhpcy5fcHJvcHMucG9pbnRzLmluZGV4T2YocG9pbnQpKSB7XHJcbiAgICAgIHRoaXMucGx1c0JUTi5wb3NpdGlvbi5zZXQocG9pbnQueCArIDQwLCBwb2ludC55KTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5wbHVzQlROKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGVsZXRlQlROLnBvc2l0aW9uLnNldChwb2ludC54LCBwb2ludC55KTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuZGVsZXRlQlROKTtcclxuICB9XHJcblxyXG4gIHVuc2VsZWN0UG9pbnQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUG9pbnQgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5kZWxldGVCVE4pO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5wbHVzQlROKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCgpIHtcclxuICAgIGlmIChzdXBlci5zZWxlY3QoKSkge1xyXG4gICAgICB0aGlzLmFkZEVkaXRQb2ludHMoKTtcclxuICAgICAgdGhpcy5tZW51LnBvc2l0aW9uLnNldChcclxuICAgICAgICB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueCArIHRoaXMueCAtIDIwLFxyXG4gICAgICAgIHRoaXMuX3Byb3BzLnBvaW50c1swXS55ICsgdGhpcy55IC0gMjBcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1bnNlbGVjdCgpIHtcclxuICAgIHN1cGVyLnVuc2VsZWN0KCk7XHJcbiAgICB0aGlzLnJlbW92ZVBvaW50cygpO1xyXG4gICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICB0aGlzLnVuc2VsZWN0UG9pbnQoKTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9wcyhwcm9wczogTGluZVByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHRoaXMuZHJhd0xpbmUoKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX2xpbmUpIHtcclxuICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpZygpOiBMaW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2UuZWxlbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEdyYXBoaWNzLFxyXG4gIEludGVyYWN0aW9uRGF0YSxcclxuICBUZXh0dXJlLFxyXG4gIFRpbGluZ1Nwcml0ZSxcclxuICB1dGlscyxcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBsYW5lUHJvcHMsIFBsYW5lQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxhbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBMQU5FIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBfcGxhbmU6IEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcGxhbmVUaWxlID0gbmV3IFRpbGluZ1Nwcml0ZShUZXh0dXJlLmZyb20oXCJzZWxlY3RcIikpO1xyXG4gIHByaXZhdGUgX3Byb3BzOiBQbGFuZVByb3BzO1xyXG4gIHByaXZhdGUgcG9pbnQgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fcGxhbmUpO1xyXG4gICAgdGhpcy5wb2ludC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnR5cGUgPSBcInBsYW5lXCI7XHJcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuX3BsYW5lVGlsZS50aWxlUG9zaXRpb24ueCArPSBkIC8gMjtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kcmFnUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICBjb25zdCByYWQgPSAoMzEgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgIGNvbnN0IGEgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IGIgPSB0aGlzLl9wcm9wcy5oICogTWF0aC5jb3MocmFkKTtcclxuICAgIGNvbnN0IEEgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5zaW4ocmFkKTtcclxuICAgIGNvbnN0IEIgPSB0aGlzLl9wcm9wcy53ICogTWF0aC5jb3MocmFkKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9wbGFuZS5iZWdpbkZpbGwodGhpcy5fY29sb3IsIDAuMDQpO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVN0eWxlKDIsIHRoaXMuX2NvbG9yLCAwLjUpO1xyXG4gICAgdGhpcy5fcGxhbmUubW92ZVRvKDAsIDApO1xyXG4gICAgdGhpcy5fcGxhbmUubGluZVRvKGIsIC1hKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhiICsgQiwgLWEgKyBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhCLCBBKTtcclxuICAgIHRoaXMuX3BsYW5lLmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5fcGxhbmUuZW5kRmlsbCgpO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnggPSBiO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnkgPSAtYTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS53aWR0aCA9IHRoaXMuX3Byb3BzLnc7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuaGVpZ2h0ID0gdGhpcy5fcHJvcHMuaDtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS50aWxlU2NhbGUuc2V0KDEuNSwgMS41KTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuYWxwaGEgPSAwLjQ7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUuc2tldy5zZXQoLTEuMDMsICgzMSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3BsYW5lVGlsZSk7XHJcbiAgICB0aGlzLnBvaW50LnBvc2l0aW9uLnNldChiICsgQiwgLWEgKyBBKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCgpIHtcclxuICAgIGlmIChzdXBlci5zZWxlY3QoKSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHVuc2VsZWN0KCkge1xyXG4gICAgc3VwZXIudW5zZWxlY3QoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1BvaW50KCkge1xyXG4gICAgdGhpcy5wb2ludC5saW5lU3R5bGUoMiwgMHhmZmZmZmYsIDAuMyk7XHJcbiAgICB0aGlzLnBvaW50Lm1vdmVUbygwLCAwKTtcclxuICAgIHRoaXMucG9pbnQubGluZVRvKDAsIC0yMCk7XHJcbiAgICB0aGlzLnBvaW50LmxpbmVTdHlsZSgwLCAwKTtcclxuICAgIHRoaXMucG9pbnQuYmVnaW5GaWxsKDB4ZmZmZmZmLCAwLjIpO1xyXG4gICAgdGhpcy5wb2ludC5kcmF3RWxsaXBzZSgwLCAwLCAyNSwgMjUgLyAxLjYpO1xyXG4gICAgdGhpcy5wb2ludC5lbmRGaWxsKCk7XHJcbiAgICBsZXQgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xyXG4gICAgbGV0IGRyYWcgPSBmYWxzZTtcclxuICAgIGxldCBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLnBvaW50XHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZGF0YSA9IGUuZGF0YTtcclxuICAgICAgICBkcmFnID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcC5tb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgc3RhcnQgPSBkYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wb2ludC5wYXJlbnQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXJ0KTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJwb2ludGVybW92ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRyYWcpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBvaW50LnBhcmVudCk7XHJcbiAgICAgICAgICBjb25zdCBkeCA9IGN1cnNvci54O1xyXG4gICAgICAgICAgY29uc3QgZHkgPSBjdXJzb3IueTtcclxuICAgICAgICAgIGNvbnN0IGFscGhhID0gTWF0aC5hYnMoTWF0aC5hdGFuKGR4IC8gZHkpICogKDE4MCAvIE1hdGguUEkpKTtcclxuICAgICAgICAgIGNvbnN0IEEgPSAxMjA7XHJcbiAgICAgICAgICBsZXQgQyA9IGFscGhhIC0gNjA7XHJcbiAgICAgICAgICBsZXQgQiA9IDYwIC0gQztcclxuICAgICAgICAgIGNvbnN0IGEgPSBNYXRoLnNxcnQoZHkgKiBkeSArIGR4ICogZHgpO1xyXG4gICAgICAgICAgaWYgKGR5IDwgMCkge1xyXG4gICAgICAgICAgICBCID0gYWxwaGEgLSA2MDtcclxuICAgICAgICAgICAgQyA9IDYwIC0gQjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucHJvcHMudyA9XHJcbiAgICAgICAgICAgIChNYXRoLnNpbihCICogKE1hdGguUEkgLyAxODApKSAqIGEpIC8gTWF0aC5zaW4oQSAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmggPVxyXG4gICAgICAgICAgICAoTWF0aC5zaW4oQyAqIChNYXRoLlBJIC8gMTgwKSkgKiBhKSAvIE1hdGguc2luKEEgKiAoTWF0aC5QSSAvIDE4MCkpO1xyXG4gICAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFBsYW5lUHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9wbGFuZSkge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFBsYW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXRpbHMsIFRleHQsIFRleHRTdHlsZUZvbnRXZWlnaHQgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0Q29uZmlnLCBUZXh0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZXh0LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVEVYVCBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3RleHQgPSBuZXcgVGV4dChcIlwiKTtcclxuICBwcml2YXRlIF9wcm9wczogVGV4dFByb3BzO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMudHlwZSA9IFwidGV4dFwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIGlmICh0aGlzLl9wcm9wcy5za2V3KSB7XHJcbiAgICAgIHRoaXMuX3RleHQuc2tldy5zZXQoLTEuMDMsICgzMSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZm9udFdlaWdodCA9IHRoaXMuX3Byb3BzLmZvbnRXaWR0aCBhcyBUZXh0U3R5bGVGb250V2VpZ2h0O1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5mb250U2l6ZSA9IHRoaXMuX3Byb3BzLmZvbnRTaXplO1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl90ZXh0LnRleHQgPSB0aGlzLl9wcm9wcy50ZXh0O1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fdGV4dCk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFRleHRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIC8vIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFRleHRDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmFwaGljcywgVGV4dCwgVGV4dFN0eWxlLCBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExBQkVMIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIF9jb2xvcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgcHJpdmF0ZSBfbGFiZWxUZXh0OiBUZXh0O1xyXG4gIHByaXZhdGUgX2xhYmVsID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfc3R5bGUgPSBuZXcgVGV4dFN0eWxlKHtcclxuICAgIGxldHRlclNwYWNpbmc6IDEsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBmaWxsOiBcIiNBMkEzQTdcIixcclxuICAgIHdvcmRXcmFwOiB0cnVlLFxyXG4gICAgd29yZFdyYXBXaWR0aDogMTAwLFxyXG4gICAgbGluZUpvaW46IFwicm91bmRcIixcclxuICB9KTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQgPSBuZXcgVGV4dChcIlwiLCB0aGlzLl9zdHlsZSk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQueCA9IDE2O1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnkgPSA0O1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYWJlbCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsVGV4dCk7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhdygpIHtcclxuICAgIHRoaXMuX2xhYmVsLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9sYWJlbC5iZWdpbkZpbGwodGhpcy5fY29sb3IpO1xyXG4gICAgdGhpcy5fbGFiZWwuZHJhd1JlY3QoMCwgMCwgNiwgdGhpcy5fbGFiZWxUZXh0LmhlaWdodCArIDEwKTtcclxuICAgIHRoaXMuX2xhYmVsLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX2xhYmVsLmxpbmVTdHlsZSgxLCB0aGlzLl9jb2xvciwgMC41KTtcclxuICAgIHRoaXMuX2xhYmVsLmJlZ2luRmlsbCgweDAwMDAwMCwgMSk7XHJcbiAgICB0aGlzLl9sYWJlbC5kcmF3UmVjdChcclxuICAgICAgNixcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5fbGFiZWxUZXh0LndpZHRoICsgMjAsXHJcbiAgICAgIHRoaXMuX2xhYmVsVGV4dC5oZWlnaHQgKyAxMFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2xhYmVsLmVuZEZpbGwoKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgYWNjID0gMDtcclxuICAgIHRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICBpZiAoYWNjIDwgMjApIHtcclxuICAgICAgICBhY2MgKz0gMTtcclxuICAgICAgICB0aGlzLl90ZXh0ICs9IHM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjID0gMDtcclxuICAgICAgICB0aGlzLl90ZXh0ICs9IFwiIFwiO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC50ZXh0ID0gdGhpcy5fdGV4dDtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUsIENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vYmFzZS5lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTUVOVSBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBkZWxldGU6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwiZGVsZXRlQlROXCIpKTtcclxuICBwcml2YXRlIGNvcHk6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwiY29weUJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBwb2ludDogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJwb2ludEJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJzZXR0aW5nc0JUTlwiKSk7XHJcbiAgcHJpdmF0ZSB1cDogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJ1cEJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBkb3duOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcImRvd25CVE5cIikpO1xyXG4gIHByaXZhdGUgZWw6IEJhc2U7XHJcbiAgY29uc3RydWN0b3IoZWw6IEJhc2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcblxyXG4gICAgdGhpcy5wb2ludC5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuZGVsZXRlLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5jb3B5LmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMudXAuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmRvd24uYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLnBvaW50LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVsZXRlLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29weS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNldHRpbmdzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudXAuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5kb3duLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMucG9pbnQuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmRlbGV0ZS5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29weS5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLnVwLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kb3duLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMucG9pbnQub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMucG9pbnQpKTtcclxuICAgIHRoaXMucG9pbnQub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLnBvaW50KSk7XHJcbiAgICB0aGlzLmRlbGV0ZS5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5kZWxldGUpKTtcclxuICAgIHRoaXMuZGVsZXRlLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5kZWxldGUpKTtcclxuICAgIHRoaXMuY29weS5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuY29weSkpO1xyXG4gICAgdGhpcy5jb3B5Lm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLmNvcHkpKTtcclxuICAgIHRoaXMuc2V0dGluZ3Mub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuc2V0dGluZ3MpKTtcclxuICAgIHRoaXMuc2V0dGluZ3Mub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLnNldHRpbmdzKSk7XHJcbiAgICB0aGlzLnVwLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLnVwKSk7XHJcbiAgICB0aGlzLnVwLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy51cCkpO1xyXG4gICAgdGhpcy5kb3duLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLmRvd24pKTtcclxuICAgIHRoaXMuZG93bi5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuZG93bikpO1xyXG5cclxuICAgIHRoaXMucG9pbnQub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLmFwcC5vZmZzZXQgPSB7XHJcbiAgICAgICAgeDogdGhpcy5lbC5hcHAuc2NyZWVuLndpZHRoIC8gMiAtIHRoaXMuZWwuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogdGhpcy5lbC5hcHAuc2NyZWVuLmhlaWdodCAvIDIgLSB0aGlzLmVsLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kZWxldGUub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLmFwcC5lbGVtZW50c1NlcnZpY2UucmVtb3ZlKHRoaXMuZWwucmVmKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29weS5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuYXBwLnNldENvcHkoKTtcclxuICAgICAgdGhpcy5lbC5hcHAucGFzdGUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51cC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuekluZGV4ICs9IDE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG93bi5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuekluZGV4IC09IDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvcHkueSA9IDA7XHJcbiAgICB0aGlzLnNldHRpbmdzLnkgPSB0aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMuZGVsZXRlLnkgPSB0aGlzLnBvaW50LmhlaWdodCAqIDI7XHJcbiAgICB0aGlzLnBvaW50LnkgPSAwO1xyXG4gICAgdGhpcy5wb2ludC54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy51cC55ID0gdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLnVwLnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLmRvd24ueSA9IHRoaXMucG9pbnQuaGVpZ2h0ICogMjtcclxuICAgIHRoaXMuZG93bi54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgaG92ZXIoZTogU3ByaXRlKSB7XHJcbiAgICBlLnNjYWxlLnNldCgwLjksIDAuOSk7XHJcbiAgfVxyXG4gIHVuaG92ZXIoZTogU3ByaXRlKSB7XHJcbiAgICBlLnNjYWxlLnNldCgxLCAxKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMucG9pbnQpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmRlbGV0ZSk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY29weSk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnVwKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kb3duKTtcclxuICB9XHJcbiAgb3BlbigpIHtcclxuICAgIGlmICh0aGlzLmVsLmFwcC5lZGl0KSB7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kZWxldGUpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuY29weSk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy51cCk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kb3duKTtcclxuICAgICAgdGhpcy5wb2ludC54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLnBpdm90LnNldCh0aGlzLnBvaW50LmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC0gMjApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgICAgdGhpcy5wb2ludC54ID0gMDtcclxuICAgICAgdGhpcy5waXZvdC5zZXQoMCwgMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnpJbmRleCA9IHRoaXMuZWwuYXBwLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLmVsLngsIHRoaXMuZWwueSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTUFJJVEUgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xyXG4gIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX29mZnNldCA9IDEwO1xyXG4gICAgdGhpcy5zd2luZygpO1xyXG4gIH1cclxuXHJcbiAgc3dpbmcoKSB7XHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgd2luZG93Lm9pcy50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPj0gdGhpcy5fb2Zmc2V0KSBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPD0gMCkgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKGZsYWcpIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ICs9IGQgLyA1O1xyXG4gICAgICAgIGVsc2UgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgLT0gZCAvIDU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRleHR1cmUodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuICAgIHRoaXMucGl2b3Quc2V0KHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIsIDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQ29udGFpbmVyLCBMb2FkZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gXCIuL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vZWxlbWVudHMvYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tIFwiLi9lbGVtZW50cy9iYWNrZ3JvdW5kLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9jb21wb25lbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IGJhc2VBc3NldHMgfSBmcm9tIFwiLi9hc3NldHMvYmFzZVwiO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBvaXM6IEFwcDtcclxuICB9XHJcbiAgaW50ZXJmYWNlIENvbnRhaW5lciB7XHJcbiAgICBpbnRlcmFjdGl2ZTogYm9vbGVhbjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIEFwcGxpY2F0aW9uIHtcclxuICBwdWJsaWMgb2Zmc2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICBwdWJsaWMgZWxlbWVudHNTZXJ2aWNlID0gbmV3IEVsZW1lbnRzU2VydmljZSh0aGlzKTtcclxuICBwdWJsaWMgY29uZmlnU2VydmljZSA9IG5ldyBDb25maWdTZXJ2aWNlKHRoaXMpO1xyXG4gIHB1YmxpYyBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEJhc2U7XHJcbiAgcHVibGljIGNvcHk6IEJhc2U7XHJcbiAgcHVibGljIGxvYWRlcjogTG9hZGVyO1xyXG4gIHByaXZhdGUgZGl2OiBFbGVtZW50O1xyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kO1xyXG4gIHB1YmxpYyBfZWRpdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIG1vdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBldmVudHM6IHtcclxuICAgIHNlbGVjdDogKChlbDogQmFzZSkgPT4gdm9pZClbXTtcclxuICB9ID0ge1xyXG4gICAgc2VsZWN0OiBbXSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAweDBkMTExNyxcclxuICAgICAgcmVzb2x1dGlvbjogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMC45LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKCF0aGlzLmRpdikge1xyXG4gICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgIHRoaXMubG9hZGVyID0gTG9hZGVyLnNoYXJlZDtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5rZXlib2FyZCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNpemluZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGtleWJvYXJkKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZWRpdCAmJiBlLmNvZGUgPT09IFwiRGVsZXRlXCIgJiYgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlbW92ZSh0aGlzLnNlbGVjdGVkLnJlZik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlDXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb3B5KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlWXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuY29weSkge1xyXG4gICAgICAgIHRoaXMucGFzdGUoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS5jb2RlID09PSBcIktleVpcIiAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UudW5kbygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0Q29weSgpIHtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuc2VsZWN0ZWQ7XHJcbiAgfVxyXG4gIHBhc3RlKCkge1xyXG4gICAgdGhpcy5jb3B5ID0gdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKHRoaXMuY29weS50eXBlLCB7XHJcbiAgICAgIC4uLih0aGlzLmNvcHkuY29uZmlnIGFzIENvbXBvbmVudENvbmZpZyksXHJcbiAgICAgIHg6IHRoaXMuY29weS54ICsgMTAwLFxyXG4gICAgICByZWY6IHRoaXMuY29weS5yZWYgKyBEYXRlLm5vdygpLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICB9XHJcblxyXG4gIGxvYWQoY29uZmlnOiBDb25maWcsIGNiOiAob2lzOiBBcHApID0+IHZvaWQpIHtcclxuICAgIGJhc2VBc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVyLmFkZChzcHJpdGUubmFtZSwgc3ByaXRlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcuYXNzZXRzLmZvckVhY2goKHNwcml0ZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlci5hZGQoc3ByaXRlLm5hbWUsIHNwcml0ZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2FkZXIubG9hZCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgIHRoaXMuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICBjYih0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNpemluZygpIHtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMudmlldy53aWR0aCA9IHJlY3Qud2lkdGggLSA1O1xyXG4gICAgdGhpcy52aWV3LmhlaWdodCA9IHJlY3QuaGVpZ2h0IC0gNTtcclxuICAgIHRoaXMuc2NyZWVuLndpZHRoID0gcmVjdC53aWR0aCAtIDU7XHJcbiAgICB0aGlzLnNjcmVlbi5oZWlnaHQgPSByZWN0LmhlaWdodCAtIDU7XHJcbiAgICB0aGlzLmJhY2tncm91bmQudGlsZS53aWR0aCA9IHJlY3Qud2lkdGggLSA1O1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kLnRpbGUuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgLSA1O1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbmZpZyhjb25maWc6IENvbmZpZykge1xyXG4gICAgdGhpcy5vZmZzZXQgPSBjb25maWcub2Zmc2V0O1xyXG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kLnRpbGUudGlsZVBvc2l0aW9uLnggPSBjb25maWcub2Zmc2V0Lng7XHJcbiAgICAvLyB0aGlzLmJhY2tncm91bmQudGlsZS50aWxlUG9zaXRpb24ueSA9IGNvbmZpZy5vZmZzZXQueTtcclxuICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlZnMgPSB7fTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICBjb25maWcucGxhbmVzLmZvckVhY2goKHBsYW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcInBsYW5lXCIsIHBsYW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwibGluZVwiLCBsaW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcImNvbXBvbmVudFwiLCBjb21wb25lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJ0ZXh0XCIsIHRleHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQoZWw6IEJhc2UpIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkgdGhpcy5fc2VsZWN0ZWQudW5zZWxlY3QoKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1NlcnZpY2UucmVmcztcclxuICB9XHJcblxyXG4gIHNldCBlZGl0KGVkaXQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2VkaXQgPSBlZGl0O1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5tZW51LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZWRpdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lZGl0O1xyXG4gIH1cclxuXHJcbiAgb24oZXZlbnQ6IGtleW9mIEFwcFtcImV2ZW50c1wiXSwgY2I6IChlbDogQmFzZSkgPT4gdm9pZCkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgd2luZG93Lm9pcyA9IG5ldyBBcHAoc2VsZWN0b3IpO1xyXG4gIHJldHVybiB3aW5kb3cub2lzO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcbiAgcHVibGljIGFwcDogQXBwO1xyXG4gIHB1YmxpYyBoaXN0b3J5OiB7IHNlbGVjdGVkOiBzdHJpbmcgfCBudWxsOyBjb25maWc6IENvbmZpZyB9W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgZG8oKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaGlzdG9yeS5sZW5ndGggPD0gMjAgJiZcclxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpICE9PVxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0pXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnB1c2goe1xyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuYXBwLnNlbGVjdGVkPy5yZWYsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5kbygpIHtcclxuICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID49IDIpIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xyXG4gICAgICBjb25zdCBwb2ludCA9IHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZyA9IHBvaW50LmNvbmZpZztcclxuICAgICAgLy8gaWYgKHBvaW50LnNlbGVjdGVkKSB7XHJcbiAgICAgIC8vICAgdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlZnNbcG9pbnQuc2VsZWN0ZWRdLnNlbGVjdCgpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvZmZzZXQ6IHtcclxuICAgICAgICB4OiB0aGlzLmFwcC5vZmZzZXQueCxcclxuICAgICAgICB5OiB0aGlzLmFwcC5vZmZzZXQueSxcclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLmNvbXBvbmVudHMsXHJcbiAgICAgIGxpbmVzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UubGluZXMsXHJcbiAgICAgIHBsYW5lczogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnBsYW5lcyxcclxuICAgICAgdGV4dHM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS50ZXh0cyxcclxuICAgICAgYXNzZXRzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UuYXNzZXRzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQ09NUE9ORU5UIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50XCI7XHJcbmltcG9ydCB7IExJTkUgfSBmcm9tIFwiLi4vZWxlbWVudHMvbGluZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFBMQU5FIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgVEVYVCB9IGZyb20gXCIuLi9lbGVtZW50cy90ZXh0LmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRDb25maWcsXHJcbiAgQ29tcG9uZW50UHJvcHMsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMaW5lQ29uZmlnLCBMaW5lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9saW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZUNvbmZpZywgUGxhbmVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0Q29uZmlnLCBUZXh0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZXh0LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRzU2VydmljZSB7XHJcbiAgcHVibGljIHJlZnM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgfSA9IHt9O1xyXG4gIHB1YmxpYyBhcHA6IEFwcDtcclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgY29uZmlnOiBDb21wb25lbnRDb25maWcgfCBUZXh0Q29uZmlnIHwgUGxhbmVDb25maWcgfCBMaW5lQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMucmVmc1tjb25maWcucmVmXSkge1xyXG4gICAgICBsZXQgZWw6IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb21wb25lbnRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IENPTVBPTkVOVChjb25maWcsIHRoaXMuYXBwKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIENvbXBvbmVudFByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFRFWFQoY29uZmlnLCB0aGlzLmFwcCk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBUZXh0UHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicGxhbmVcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFBMQU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgUGxhbmVQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBMSU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgTGluZVByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmc1tjb25maWcucmVmXSA9IGVsO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzW2NvbmZpZy5yZWZdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgSW4gc2NoZW1hIGNvbmZpZ3VyYXRpb24gbGluayBcIiR7XHJcbiAgICAgICAgICBjb25maWcucmVmXHJcbiAgICAgICAgfVwiIGlzIGR1cGxpY2F0ZWQuICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX1cImBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUocmVmOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xyXG4gICAgICB0aGlzLmFwcC5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5yZWZzW3JlZl0uY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICBkZWxldGUgdGhpcy5yZWZzW3JlZl07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudHNPZlR5cGUodHlwZTogXCJjb21wb25lbnRcIiB8IFwibGluZVwiIHwgXCJ0ZXh0XCIgfCBcInBsYW5lXCIpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnJlZnMpXHJcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNba2V5XS50eXBlID09PSB0eXBlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChrZXkpID0+IHRoaXMucmVmc1trZXldLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcG9uZW50cygpOiBDb21wb25lbnRDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcImNvbXBvbmVudFwiKSBhcyBDb21wb25lbnRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBsaW5lcygpOiBMaW5lQ29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJsaW5lXCIpIGFzIExpbmVDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0cygpOiBUZXh0Q29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJ0ZXh0XCIpIGFzIFRleHRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFuZXMoKTogUGxhbmVDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcInBsYW5lXCIpIGFzIFBsYW5lQ29uZmlnW107XHJcbiAgfVxyXG5cclxuICBnZXQgYXNzZXRzKCk6IHsgbmFtZTogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfVtdIHtcclxuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhjb21wb25lbnQucHJvcHMubmFtZSkpIHtcclxuICAgICAgICBrZXlzLnB1c2goY29tcG9uZW50LnByb3BzLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBrZXlzLm1hcCgobmFtZSkgPT4gKHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGRhdGE6IHV0aWxzLlRleHR1cmVDYWNoZVtcInNlcnZlclwiXS5iYXNlVGV4dHVyZS5yZXNvdXJjZS51cmwsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9