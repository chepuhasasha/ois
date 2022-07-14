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
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAB5CAYAAADLX1QsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZqSURBVHgB7Z1tSJ1VHMD/j91NnaBXrd10Wbr2pQ+DTMgPi5gQ1i0IoX2JEjf2gkHMUTFiBGmFtNGH+lBRLfJDERQ4Y8ilN7JwEFqM5ocUcbtlMkfk5rsu83bOtUdMz/We5+Wc538e/z+47HJ3r27+uL9znnPu82hBCEj8erVycXnh09np6WslRbediN9TlgTDscBgzl28Es2L7mixluFEClLR1b/IsVrjVbE2MBhjxZwfvro/kmN9xO5WZnhKcjmVantsT1kHGIhxYni2IJcJScF+uVdYHXBzuc20vBkjJmO2ZDEsb0aIkciWLMbkDbUY59mSBX/eUIrxnC1ZEOcNnRgfsyULyryhEaMuW7LgylvgYrRlSxYkeQtUTADZkiXwvAUiJvhsyRJc3rSKQZctWQLImzYxiLMli9a8KRdjTrZk0ZM3ZWKMzZYsivOmREwIsiWLsrz5KiZ82ZLF/7z5Iib02ZLFx7x5FrOFsiWLL3lzLWbrZksWb3lzLIay5RCXeXMkhrLlGsd5kxJD2fIL+bxtKoaypQiJvGUUQ9lSzqZ52yCGsqUbcd5WxVC2AmZd3tJiKFtoWM1bWswnF/pThaUxiGzbDkRw5Edugb07C6E0P9eK8AfmpibSt8LS24ELIvQSycmByqJ8ditg91dGl8jaJ0z9NQ6zaUExKCgsAUI9JXnb2LukKP1uWUtk/RP/+fsmXB8fhcW5WaC8qcPOVkme+OcbyfRCypsaRNkSPi/bF6K8+UembInIKoZDefNGtmyJkBJjQ3lzhmy2hK8FF1DesuMkWyJcieFQ3sS4yZYI12JsKG8reMmW8OuBT2zlvHnNlgjfxHC2Wt78ypYIX8XYhD1vfmdL+D1AIWHMm4psiVAqhhOWvKnMlgjlYmxMzZuObAm/L2jGpLzpypYI7WI42POmO1siAhFjgy1vQWVL+G8BBGDIW5DZEoFCDCeovGHIlgg0Ymx05Q1TtkSgE2OjMm/YsiUCrRiO33nDmi0RqMXYeM0b9myJMEKMjZu8mZAtEUaJ4cjmzaRsiTBOjE2mvJmYLRHGirFZm7eKnTEjsyUiB0KAnbf7y0tCIYUTCjFhhMQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghcQghYspBwIbZel3TE/3+Y9npqcngQiUiYmJyZaWlrfZXWvtmT0PfJBIPMTeRC+DoRx5pB4M5Qa7vVVbW9vf19f3Lbu/sOGUq3cTicpIClrBymkCwzBUTA+7HbIsK7n2wQ2D/zPxePLoo/GDKVg+tLi4eA0IJczNzfGfbR0TUrdeCifjrOxYPN7xbMPjT/d//10vEL4xPz+/2NXV9U1dXd1hJqQn0/OynRd3+efe3q4/kleGo8UlVaWxGOorwN23527AzNDQ0O9NTU2vt7e3nxobG7u02XOdnNZb8+rZsw/GdlUct5D+yizEY0ySDerPscH9F3b/sswLXJ1vzWZvrRhnbwjFpGdb7PYmy9YNJy90deR/NB5vXYLlqqmJiS+AEMIG9x/ZH9VMSKtTKRzXSzJ89vb8U0+eooPT/2MfJBYUFDwhmm3J4vWk+D8H+vrOffn5Zz+VVdyxe1dl1Z0QIEEO/ny21d3d3dPc3Hyys7PzPfbQdfCAX1crSM/eZmamf9hbU7PEFhTuhQAIUAwX8iLjzH+zrSXwiJKLrbyfSBzkkwPds7cABv8krBy194DPKFn25wenx+IPV83PTp+GEMKzNTk5yf9v1SqkcJTuxxw/cKD1nddeOTI8MDAAIYEfJDY0NLwUjUZPu5ltyaL6ijhL46OjFy98/VVfYXF0x61l5Xdtz83NA0WoHGP4bIuNIR82NjY2j4yMdLOHFkAhui/opXRrQdEYs2FJHjQQyJXWVG0tKBDTA4IleR0EsuePfWsh25K8DgL9MAa2rQXZJXkdYLgcnm9bC14GfydL8jrAdjVPT1sLLscYx0vyOkB7mVU3WwsOxbhektcB2g/8qdxa8LokrwPUn8T0e2vBryV5HZhwLVzprYVMg7/fS/I6MOkixVm3FjKI8X1JXgfGXmNdtLWwbvBPgqIleR0Y+2n/TFsLOpbkCTnyqvftO3zyzBuXBgcHf6uvr3+BPVYMBBpq2G03hIR/ATaGd+zvH/LQAAAAAElFTkSuQmCC",
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
                var alpha = Math.atan(dx / dy) * (180 / Math.PI);
                var A = 120;
                var C = alpha - 60;
                var B = 60 - C;
                var a = Math.sqrt(dy * dy + dx * dx);
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
            backgroundColor: 0x000000,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLENBQVM7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLENBQW1CO1FBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQs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QyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLFFBQUM7Z0JBQ3pCLElBQUksRUFBRSxJQUFJO2dCQUNWLDZEQUE2RDtnQkFDN0QsYUFBYTtnQkFDYixJQUFJLEVBQUUsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUc7YUFDNUQsQ0FBQyxFQUx3QixDQUt4QixDQUFDLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQUNILHNCQUFDO0FBQUQsQ0FBQztBQTdGWSwwQ0FBZTs7Ozs7Ozs7Ozs7QUNkNUI7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PSVMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL09JUy8uL3NyYy9hc3NldHMvYmFzZS50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvYmFja2dyb3VuZC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9iYXNlLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50LnRzIiwid2VicGFjazovL09JUy8uL3NyYy9lbGVtZW50cy9saW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3RleHQuZWxlbWVudC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvZWxlbWVudHMvd2lkZ2V0cy9sYWJlbC53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvbWVudS53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2VsZW1lbnRzL3dpZGdldHMvc3ByaXRlLndpZGdldC50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy8uL3NyYy9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy9leHRlcm5hbCB1bWQge1wiY29tbW9uanNcIjpcInBpeGkuanNcIixcImNvbW1vbmpzMlwiOlwicGl4aS5qc1wiLFwidW1kXCI6XCJwaXhpLmpzXCIsXCJzY3JpcHRcIjpcIlBJWElcIixcInJvb3RcIjpcIlBJWElcIn0iLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09JUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL09JUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwaXhpLmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk9JU1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBpeGkuanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk9JU1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBJWElcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IGJhc2VBc3NldHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJzZWxlY3RcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDa0FBQUFwQ0FZQUFBQ29ZQUQyQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQURPU1VSQlZIZ0I3ZGpORFlNd0RBWGdOd0lqTUVKSFlRUFlwTjJrM1lCUk9nSWpkQVRYbG55cFZNVTVST1FCdG1SeHlEdDhDajhoQWY2VWlOeTBON3VpVURvK2V1NFI1QWJ0dC9ZTFFXbm03dG1oRkVyZzBZSGJFWUFqOWdKNmRtMEc5R0JyNExNbFVNZG5zQU10QjNaZzlLejJCbjZLZHptQkNVd2dOM0FLZ1I3c0JheGVqc0VPbEdqRllRQ0drNWpBUnNBVjVNRHlYaU9CQ2J3eTBNUFVRSnRFc0FNbCtsWW5NSUcvUVB0aG5VQU9YTEF6Y0U3Z3FZRWVwQWJhZXdKMm9GUWUvWFVGU3VYUjM0TE93QzhOSzA3aFJmUXpYQUFBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJiZ1wiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQThDQVlBQUFDUVB4L09BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBYVpTVVJCVkhnQjVWeEJUeHczRkg1ZVFLMGFFQU9wbWtodEpTOG5CRVJkZmtISkwyajRCWUZma09UVUk4dXBSK0FYTERuMUNEbEZQUzM4QWtBaFZkcERkM3FMMGtxZFNDQlJCV2J5bmoyWlhXQjN4ak5qejlqS0o2MVlkcjB6OXRqKzNudWZuODBnQnVmejNQZmYrT0FJZUhPeEI4RDQ4RzhqMysrOWJvSWo0Sng3QUI3NC9uSFFrQi9NYzJCalhUNjMyQkh2TFlkb1FBUUgrRGJBdjhmSkZ4SHp4VjhHKytBSU9GOVlBemFGZyt2L0ZmcWY5YitnamhoL0NvejloSTE4NXZ1dnJHd1U1MHNyV01jT1JKRVBjTGwrYzFiTGRveTFnVFYraE9ocTAvZC8zd1VMZ1IzUndqcHU0Yk1tWUQxUEQwWVVuT2VpMFpaQjFLdTUxQ1dxVXFrZmpUeFIxdEpaTDUvejRsTW9Bc2x4OVlEdXplZVdObmp6QVhWRU8yOWR4RythU3hGZEF4ekFXRllCemxzZXNJa2p6L3Y2ZlJEOGN3d1ZRdExURnk5eFdtTW5YSzRpL2V3SFFYQ1I1eHBCOE83QTgyYWZvMzFaOVdidWI5WFRqb1dXTjNQdlY3ejNDZDc3YlZwWkJncVFSbjk4RDR1ak1mM3cwTFEzRnQrdmcxYWE0NE5jSDhtdnVhOUxCcFJ0WUtzUElDVDdZcm9kT0pzYlV4dG83OWJ3aGZkN3ZaMzFtd1lvZ0NydTkwNlh5VWlpNFY4RFEvaEVUemdqdXpnckRpRTZYOWJWR1FReThNSWREdG5mMk9FOTh6UjJadzNDaUVGMDFsVHBESUxTREtrQ1dkNlQvdnU1NFkzbEJwOTdzRmZHaThuclBlbUdMbThzY1Q3STVwYUFFbVdsSXJ4NlVTU29ORTFQcXRCQlkwbHdGOElNeGFwbG9JV3kra0VsL0lDMjVtRjIrV3JwU1JWRmFBd1pZZ3Z0UkF2U2dqdGJVVGM5cVNJUGplbU8wVExqa0RLZ2hubmUzY0R6SnNHYi9lNW52TjAyMHRNTGdIT2NGWCsrQVV0QmNRcStkcnpwZThzNFcvYTgyVzhnK08vZElYMUhBd2xqRzc5Zk5sOWNsQVdqWGhaRnlVaE5qOFUvbHRHVEtxN1JHS3JJVW5zYVh5VmxGZ3lndkZFZkFSbmNBVFlpQlBtQ1E5YzZneERYR1NQN3lCT0Jhb01HMW9VeEtVbDdod3oxbnNUYXhKbFNZR1FucnZaRmNGZEJVS21Wc2xTOUowa0RqUldycFhFSWcvVDZtd2txdFJoMXFpQUtkM3ZBU0xNQjBwNDJnK0Rma1J6cmVmZHhMUUMyMEZpMnZPbTdKMmxscXdUTmJtLzIrMTl3bk5Kcy9tT1VDRW4xeGUvMlNhZ2tiVXhuTzBwUlZ0SGdqc3IwcHo4R2xTV2pXMjFnVTBkOTdTbDcxRmV2amFXQTZDbGVvK2k2c095cmdqSXhSYnpndEN1ZkNVYnVCWkhiaHBpU3hwTnJ3OWdUTktJNzFVamprMDhnSE4vUjZjS1dsZmlWS2FzSzdVbFducjAzUGYxMWFrODNVWmJHRkJlb2FwTEc0YXF0KzE3Q1hqVXVPOWdaTzZhMXB5TGVHTXU4b0NGNitweVFoOFlhd3k5Z2h6UityVTVrTEF0SzR5aG9IdFhweWVXaHNWc3p4QTFwUER0dlREbnZxV0lvMDVoVDByaUlwTFBLbGNoN3FnQ2pKSDVHT1VzZ3hET0c5aUxjaC9BY1I1OXZSZVNzQXFMWFQvVWRmTzhLY1BCdkkwK2hxMDlwc0JFZmp6L0hFWWY5RXBHKzVGYURBTDU2aFBabFEwampqR2dXMXNFbFVPcXU0RlYwbk9DV1VRL0JQVEF2a2NiSmFEcUg2ODljZG9pRFdlTjlERWpqY0xrTERtRllGditON0hkSHNzWkJ1SkxINmVWc2wvaUhlN05EM041cTB5MVZjVDB0TTN5VzlhQmxnNk9PZmUxSUQ3WnZCWVpXU2NxRFlKUGRmTks0WFJLL2xtQmJsNlNzQTdyVGJhcEVucVVLUlhHeGpxeHgvZEo0Y20yNHMxR054SjlmQzFUTWZxK094a3hLNHdRWlo1bVYrTXZRVTdFRktrUGVXQzNTdUdhSnY2d1dXRGpyeEZadnJDN29XcW9vbk9TZ0sydThibWw4RUVVa2ZxNTVxVUpqOXJzNmpia2hqYXRJL0hZdVZTUlF6UnFuRHJGZUdrK3R2eHRMRlFtR2JVVjJPNDZRZGVjbHQyaXJ3RmoyKzVDczhST2tKbXRuUlJxcXpPSTNsdjB1S3R4Z3ZZR3M4V2tYRStxdVovRkhBWGFNMFVONmpIV0lRRWhlUnpWWjQ3b3hQSXVmdG9aSGJpMkFwY0VtYlN3TmViUW4zWFpFazl1YlNPTXJZaFJsbHJkVjRzOGYzSWxObnhFODBuWENSZW50Q1BMaGZ2a1NPK01FNEd4ZFpjOWQyaDYrT2lDM0lSVGJBNG4xL2sxdVMyaDA1TGFFYncrRDRLM1dmWWU1UUZrVFpYenh1bWxNVnhaL2ZLeFZHMHJDb3FNMXFwYjQ3VXlUemVWbGlRaldrSmRVbGNTdlczdEt2eGM5cjN3blhDaDFpSkE2VUNyQTRvK0ZLMnNRK0hEYUVGMWl4MFJOM1RRbXRTZmFKUVVyMGdpZnRzM21vWVU0MjJudFphS3IybzVNeXBJSG1IMDR3dEcwbzNyRWtDN29vckc2NlNrNWJ5d0sxN095WmF5eElXbVEwZ1ZReDdUOXYwNDMxWDhYTHdWSGpBNFFlMDViczIzUHpCeVdCcVNVOTFRMThrdjhka3Zqby9MR0JoTGw4dVU5MVlVc0duTmxrOUdvWXhOWi84dUpvM2hhdDIyZjFvU2JXZVB4eDg1bDhTY0RMQjQ4QXpOa29XVWJUYVdCUExDQmpyZ0I1dnU5Vnc0ZE5VNzBkUkhRQVBvSVFIVVBvcDdMaFZFQUFBQUFTVVZPUks1Q1lJST1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwic2VsZWN0ZWRUaWxlXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1FBQUFBOENBWUFBQUNRUHgvT0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFRalNVUkJWSGdCN1p3OVQ5dEFHTWYvNTdoRnFrSUhOdnFpTXJRU1E5VUJpWm1oWDRDRkxVaXdadW5Zb1d1WHJoM29DRkxZV1BnRWxkb1ZsYUhxUU5VT1ZCVGFwUjBJb0liRXZqNG1DWVR3SkxuRUwvZGNrcDhVMlZ5YzVPeC83bmVQWXdzRnh5a1dkZjcwRkFzK1VENCt3KzdXbGpxQnd5ZzR5dEtTdnAzUDQ2bXVZWloyNGsvVVJzdHA3ZVB6K3JyYWhhTTRHVWlob0tkOWhRVmFQVmMrOXNNUWxhamQ4ekNoUWp5Z3YrOGdoMDhiRytvYkhNT3BRSnA2VWdwVGROQy8wL0tZMnk0SU1PWDdtTWxwL0hCTlkwNEUwcTZuME1OUGs5ZDVORnBjMDVqNFFEcnB5UlRYTkNZMkVGTTltZUtLeHNRRk1xaWVUSkd1TVZHQnhOV1RLWkkxSmlLUXBQVmtpa1NOV1Ewa2JUMlpJa2xqMWdMSlNrK21TTkZZNW9IWTBwTXB0aldXV1NCUzlHU0tMWTFsRW9nMFBabGlRMk9wQmlKZFQ2WmtxYkZVQW5GTlQ2WmtvYkhFQTNGVlQ2YWtyYkhFQWhrV1BabVNsc1ppQnpLc2VqSWxhWTNGQ21UWTlXUktraG9iS0pCUjA1TXBTV2lzcjBCR1hVK214TkdZY1NCalBmWEhvQnJyR2NoWVQvSG9WMk1kQTVHbUo5TEFPaTNtNlhFWUF1L2dZYnZuaTBJc2Vnb0Y2SXQ5S0FVZTNzQVNwaHBqQTVHb0p4citMNm16eXkxTmU5U3ZGL0J4eUd3N1Q5c1dVUSt3anNaT21NTXFMR0tpc1d1QmlOZFQ5STNYZEtBVjdqV2JhQWUyZzVCR0RBV2phcGowY2locTNSS2N4cEZXZUtVOTdFQUkzVFIyRVlocjFaTUtVS1F2UzNUUUp4dE5oeHA0VDMxZmJHa3JVekFsQ3FwRXl6SUV3bWxNdVZvOXFXaVVSTUhVUTdqK0hJMGEwdE1hQlhFRTRiUnJ6S09oazZlZDAvUUlxbFU0ZzY1MnJ4QjdQUytGNkpoVEdINlVRYTJHazh0T3J4YjBISTJRWjFUQi9LWnYxZ0dFMHBnbmxodnp4SldlYUZRb2plY3Q4MHVaZHJJVUtLeEJLTlMvaHpUS3A2amZleWNWZktHNTVQekdwRjQ1eFJ4TmtvOW8rT3pUVHYrRklCclYwMnRhdmQ5c295QktxT3VwM0VGajVtVnlSbEJmNzFKeDhqZzZ2bWNWZkxneHFiZXpzcUtmME03UDBlcS9hb2lEWE03K3ZOSnlIbEtIeWxpcW50YTQ2aWtLaGliK3Q3UTZlOWxtK1R3a2dxcXJDWnF2WjZoL3QraTRmdHpjVkwvYXQrbnFXVWthdXp3UDBmZ2Frb3FNVHd5YlpiTGw4eEJPVCt4MnZkNUl1c2FrMDAxUEhNYVZpRVNOU2NaRVR4eDlsNGF1VkdNMk1kVVQrMW9Nd0ZoalBQM3FpU1BXeWROWVkzVUcxUk5ISW1lem82eXhPSHBpM3c4Sk1Xb2FTMEpQSEluLzNqUHNHa3RTVHh5cC9RQTNqQnBMV2svc1p5QkZoa1ZqYWVtSkk1T2ZxRjNWV05wNjRzajBtb0ZMR3N0Q1Qrem5JbU9rYXl4TFBYRll1Nm9tVFdNMjlNUmgvVEtuQkkzWjBoUGJGd2pBbHNaczY0bEQxSTBBV1dsTWlwNDRSTjZaa2FiR0pPbUpRL1MvWjBwU1l4TDF4Q0grM3FXNEdwT3NKdzRuYmlhTEdFUmowdlhFNFV3Z0VhWWFjMFZQSEU0RjBxU1R4bHpURTRlVGdUUnAxZGhGZzJONjRuQTZrSWlteG1vQkpsM1RFOGQvL0hyd01sMlQrRkVBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJkZWxldGVCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUcvU1VSQlZIZ0I3WmZmclFGQkZNYS92Ym12TktBQU5LQUEwUUR2YUlCM0ZFQUJOSUIzR2tBQkdrQUJHcUNBZSsrWHpXVHZ3OHpJT2JNamtjd3Z4R2JzbjkvTW5uUDJiUFlEL0gwK2h5OThHRWs0TmtrNE5razROa2s0TmtrNE50OG9nMG9GNlBXQVZndG9Ob0ZhTFIrLzM0SExCVGdjZ1AwZVpaQUZOeitkRHJCWUFOV3Fmei9LTDVmQjRtSENzeGt3SElvT3dXcVZpeXZSeC9CNExKY2xvMUUrVVNVNjRXNDN2N0FXVHBTaHBFQVhFcWRUa1ZoYUhnK2czUWFlVDlGaDhoWG02dHBrS2NDRTRxOXZ6TUFrWldVUkloZDIzVXFXcnNrRUdBeHlRWDY1emJIejJYNE15NkFRZVIxbW5iWEJpYXpYZWQybEtPRTI5M2VKdWM3bFFSN0R0NXY3UDY1cXZ3OWNyNFhRWnVPdjBmVTZKSlQvYU00eXhFUXV6Q2VXRFJPekpnd2FqU0k4YkVubk81Y0h1VEFsYkREcGpDekRZTHN0cEYxSjV6cVhCM25TOGVLMlNzRXh4aW9Uek1Rc3BibS9LK2s0U1NIeXBLUE04Zmk2MlhrRnc0RVBEaUh5a0dBOFRxY0lSdGtBNmFvRWJ5VnJycGFBTmxOZjF1WnozU3B4b213eGxZUTM4T3d0MkdxK2FvWk1LQ2tTN1QvaHdnYUtzMUxZWHBGWUtYWTdjV2Rtb3p6aE41RmU4Mk9UaEdPVGhHT1RoR09UaEdQemNjSy9IZ3VhVUUvZjlmRUFBQUFBU1VWT1JLNUNZSUk9XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImNvcHlCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZxU1VSQlZIZ0I3Wmc5UzhOUUZJYmZTb2ZVdVlPb1U2ME9namdVUHdhbEtJaURJQTZpZE5EVjFiL2hJaTRLWFJ4MEVad2R4RUVSQjBFWFFhYzJYZnpBb2RqTmROTjdBOEdsWUE2Y2svU1c4eXdKK1lBbk55ZnZ2VG1aZkg3Z0J3N1JCOGZJUmp2TjVpZTZHVk1KNGRhNUVWWmhhVlJZR2hXV1JvV2x5WUlKejh0aHM3S0ZRbkVVWHE3LzMrcy8zdDl3Y2x4RnEvVUZDbXdqUEZkZXdQakVaQ3haeStEUU1EWXEyNkRDSmx3WUdRTVYremFvNkVjblRlK25oRTJEK2ZLaXFkbS8rcXNlSFNBcHlNS3JhK3NvVGM4aUxjZ2xrYWFzUlQ4NmFkaUUyOEUza29CRjJDYUc3OWRBNWZIaEhsUllGajlMeXl0aHRMV0RBS1dwbVZqM05Nd0QzdDNlZ0VvbTZ2ekU3VXZzN1I5MlBONm8xM0IxZVJHS1NCRDFKZGlXbDNZaHMxUGM3WGpPUGd6WDVLS3hKZzFaMksvVGE5Um5yR3V5OFBuWnFmbTllWTExclUyTmwrY25rd2JYNElLY0VtbWgzY3VrVUdGcFZGZ2FGWmJHM2I1RU5KTjBPODZOOEMra1psS01raklwRmdBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwicG9pbnRCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUtHU1VSQlZIZ0I3Wmc5U0J4QkZNZmZKaGEzUjVyYlNDS1hMK0pwR2hNdEFpR0ZDQWtKa2dqQkloRXNralpGbWhRcGhIeVNCSklta0RaTmlxUUlCQVUvVUJBRlFSUVVPVVJSQzc4cXZ3cTlBNVc3Ni9TOXA3T001M0xjN3IwVkYvWjNIRFA3Wm1mdmYyL2V2Smxabzd5OFlnOEN4QmtJR0dXcXNybTVBYWNaakFRdUErZmhVTERmaElMOUpoVHNONkZndnlrRFlXSXhDMTYrZXMzMW56KytRUzZiQlVuRVBSeXp6dHZmZVB3eVNDTW1tRHo3b1BFeEM3VnRXR2NidGtraEZoTFBXbDlBb3FvYVF5QmoyMXBhbjNNWnYzUUYvdnorQlJLSWVYaDJab3JMaUJrOTFyYSt1Z0pTaUFrZUhSNkNnZjdlWS9iQi9qNUh1MWZPUnFQblBsRWxrOWwxMDQvanNnWEQ0TUxGQ2xoZVdtQ2JLaE5WTjhCSmJIM0RQWGpVMUF6TGkvT1F5N25MSHFpVFM4OHhmUHZPWGFpNVZjdGZRZ2tqa2VsVWl1dkppVEg3ZnBwOER4dWI3TDUwbnhkY2V6Z1NNZUhxdGV0WU0xQnNIZHNxY2JJWitGRWVUcWUyWUhkbjIvYWlMamFMZVhscU1nbW1hZkoxc1o1V0hqYlVJYlRZSTFMYnU4OUhVcGZPLzM5L2ViamIzbi9oNjQ5djMwRE56VG83VytSRGYrejcxdzlRRENVY2tZeUNyYnJIVEllTTRlWlpqajNjZXBoWE1aeHdWRDVwZm9wcDdHQm85UWxHYlRUMEtpZnJJVUhRU0pCMzE5WldqK1R0UW5qMk1QMFF4V3JNc2h6RkVwV0phZ3lGV3ZzNnY1MzYwak9LRmF2ak9Vc2tKOFpaMk56TU5JeGdEbGJvM3JUUTAzcjJJR2gvUVgyOTRqb2tDcEUvOUlUVXdpSCtYc0pKckxMWE45d0hLY1FFTzIwbDFWNVlqK2RTRWR1dDlYUjE0S3hmNFZWTzVkM3V6bmFlWUtYRWJENWlnaWw3VUx6U1JOUnQrdklzZ2ZnUmFmM1F5MFE2blFKcFJMT0VuNFJ2TDArS1VMRGZoSUw5SmhUc044RjllNmxXa3ROTzREeThEN1FXOFdER0g1dFdBQUFBQUVsRlRrU3VRbUNDXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImVsZW1lbnRcIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHWUFBQUI1Q0FZQUFBRExYMVFzQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVpxU1VSQlZIZ0I3WjF0U0oxVkhNRC9qOTFObmFCWHJkMTBXYnIycFErRFRNZ1BpNWdRMWkwSW9YMkpFamYyZ2tITVVURmlCR21GdE5HSCtsQlJMZkpERVJRNFk4aWxON0p3RUZxTTVvY1VjYnRsTWtmazVyc3U4M2JPdFVkTXovV2U1K1djNTM4ZS96KzQ3SEozcjI3K3VMOXpublB1ODJoQkNFajhlclZ5Y1huaDA5bnA2V3NsUmJlZGlOOVRsZ1REc2NCZ3psMjhFczJMN21peGx1RkVDbExSMWIvSXNWcmpWYkUyTUJoanhad2Z2cm8va21OOXhPNVdabmhLY2ptVmFudHNUMWtIR0loeFluaTJJSmNKU2NGK3VWZFlIWEJ6dWMyMHZCa2pKbU8yWkRFc2IwYUlrY2lXTE1ia0RiVVk1OW1TQlgvZVVJcnhuQzFaRU9jTm5SZ2ZzeVVMeXJ5aEVhTXVXN0xneWx2Z1lyUmxTeFlrZVF0VVRBRFpraVh3dkFVaUp2aHN5UkpjM3JTS1FaY3RXUUxJbXpZeGlMTWxpOWE4S1JkalRyWmswWk0zWldLTXpaWXNpdk9tUkV3SXNpV0xzcno1S2laODJaTEYvN3o1SWliMDJaTEZ4N3g1RnJPRnNpV0xMM2x6TFdiclprc1diM2x6TElheTVSQ1hlWE1raHJMbEdzZDVreEpEMmZJTCtieHRLb2F5cFFpSnZHVVVROWxTenFaNTJ5Q0dzcVViY2Q1V3hWQzJBbVpkM3RKaUtGdG9XTTFiV3N3bkYvcFRoYVV4aUd6YkRrUnc1RWR1Z2IwN0M2RTBQOWVLOEFmbXBpYlN0OExTMjRFTEl2UVN5Y21CeXFKOGRpdGc5MWRHbDhqYUowejlOUTZ6YVVFeEtDZ3NBVUk5SlhuYjJMdWtLUDF1V1V0ay9SUC8rZnNtWEI4ZmhjVzVXYUM4cWNQT1ZrbWUrT2NieWZSQ3lwc2FSTmtTUGkvYkY2SzgrVWVtYkluSUtvWkRlZk5HdG15SmtCSmpRM2x6aG15MmhLOEZGMURlc3VNa1d5SmNpZUZRM3NTNHlaWUkxMkpzS0c4cmVNbVc4T3VCVDJ6bHZIbk5sZ2pmeEhDMld0Nzh5cFlJWDhYWWhEMXZmbWRMK0QxQUlXSE1tNHBzaVZBcWhoT1d2S25NbGdqbFlteE16WnVPYkFtL0wyakdwTHpweXBZSTdXSTQyUE9tTzFzaUFoRmpneTF2UVdWTCtHOEJCR0RJVzVEWkVvRkNEQ2VvdkdISWxnZzBZbXgwNVExVHRrU2dFMk9qTW0vWXNpVUNyUmlPMzNuRG1pMFJxTVhZZU0wYjlteUpNRUtNalp1OG1aQXRFVWFKNGNqbXphUnNpVEJPakUybXZKbVlMUkhHaXJGWm03ZUtuVEVqc3lVaUIwS0FuYmY3eTB0Q0lZVVRDakZoaE1RZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaGNRZ2hjUWdoY1FnaFlzcEJ3SWJaZWwzVEUvMytZOW5wcWNuZ1FpVWlZbUp5WmFXbHJmWlhXdnRtVDBQZkpCSVBNVGVSQytEb1J4NXBCNE01UWE3dlZWYlc5dmYxOWYzTGJ1L3NPR1VxM2NUaWNwSUNsckJ5bWtDd3pCVVRBKzdIYklzSzduMndRMkQvelB4ZVBMb28vR0RLVmcrdExpNGVBMElKY3pOemZHZmJSMFRVcmRlQ2lmanJPeFlQTjd4Yk1QalQvZC8vMTB2RUw0eFB6Ky8yTlhWOVUxZFhkMWhKcVFuMC9PeW5SZDMrZWZlM3E0L2tsZUdvOFVsVmFXeEdPb3J3TjIzNTI3QXpORFEwTzlOVFUydnQ3ZTNueG9iRzd1MDJYT2RuTlpiOCtyWnN3L0dkbFVjdDVEK3lpekVZMHlTRGVyUHNjSDlGM2Ivc3N3TFhKMXZ6V1p2clJobmJ3akZwR2RiN1BZbXk5WU5KeTkwZGVSL05CNXZYWUxscXFtSmlTK0FFTUlHOXgvWkg5Vk1TS3RUS1J6WFN6Sjg5dmI4VTArZW9vUFQvMk1mSkJZVUZEd2htbTNKNHZXaytEOEgrdnJPZmZuNVp6K1ZWZHl4ZTFkbDFaMFFJRUVPL255MjFkM2QzZFBjM0h5eXM3UHpQZmJRZGZDQVgxY3JTTS9lWm1hbWY5aGJVN1BFRmhUdWhRQUlVQXdYOGlManpIK3pyU1h3aUpLTHJieWZTQnpra3dQZHM3Y0FCdjhrckJ5MTk0RFBLRm4yNXdlbngrSVBWODNQVHArR0VNS3pOVGs1eWY5djFTcWtjSlR1eHh3L2NLRDFuZGRlT1RJOE1EQUFJWUVmSkRZME5Md1VqVVpQdTVsdHlhTDZpamhMNDZPakZ5OTgvVlZmWVhGMHg2MWw1WGR0ejgzTkEwV29IR1A0Ykl1TklSODJOalkyajR5TWRMT0hGa0FodWkvb3BYUnJRZEVZczJGSkhqUVF5SlhXVkcwdEtCRFRBNElsZVIwRXN1ZVBmV3NoMjVLOERnTDlNQWEyclFYWkpYa2RZTGdjbm05YkMxNEdmeWRMOGpyQWRqVlBUMXNMTHNjWXgwdnlPa0I3bVZVM1d3c094Ymhla3RjQjJnLzhxZHhhOExva3J3UFVuOFQwZTJ2QnJ5VjVIWmh3TFZ6cHJZVk1nNy9mUy9JNk1Pa2l4Vm0zRmpLSThYMUpYZ2ZHWG1OZHRMV3didkJQZ3FJbGVSMFkrMm4vVEZzTE9wYmtDVG55cXZmdE8zenl6QnVYQmdjSGY2dXZyMytCUFZZTUJCcHEyRzAzaElSL0FUYUdkK3p2SC9MUUFBQUFBRWxGVGtTdVFtQ0NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwic2V0dGluZ3NCVE5cIixcclxuICAgIGRhdGE6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUovU1VSQlZIZ0I3WmhOVHhOUkZJWmZsQVZ0WE5oQ2xCUldyYmdRRlJPS1lVRklOQm9UbDBSSnVwQ0ZDMGwwdzAvd0o3Z3lZV09pTGtoUUU2SnhZZndCaXNEQ0QxZ0lyVkZoVUQ1YUZxUnRBZ21jYzhNQW5Xa2J6dlJld29SNU5wMTdlK2ZPTytlZXIweGRVMVB6Rm56RUNmaU1ldnRpWmVVZmpqTGtDZXJYZHhZT0JKc21FR3lhUUxCcEFzR21xWWRHSXBFb0JoOE5JUkp0VkdOcllSNmpJeSt4YU0xREYxb3QzSG0xZTFjc0UydHBSWkxtZEtKVmNEeHgzalVYaTdWQ0p5ZkQ0Vk9QK1NLZlg1ZmNoNTdlYStpNGtzVG01Z1lLaFFMNjdxVFFmcW5EdFk0dEhvMDBLdmRnaS9mMFhzZVpzODM0OC9zWEpKQk85VnRuOThPU2JxMnpxeHY5cVh1b2hlZlBoakh6NDl1QjE5ZlVyZDI4ZFJ1MTBwOGFRRU1vQkNsaXdlMFhMNWNFVmpseTJWVVV5VTJxRVNLeHZKY1VjVnF6ckFVU2xDWFJVZGQvUEQ4NjhnS1o5S3dheHhOdHlwS1YxbWJTYzVBaXRqQmJiL2pwRS9WQUoyL0hYdTJLWmZpYVg4QzlSM1puajFWSThlVEQvS0RKaVU4bGM1d3B5Z1VSaTNhNkI5L3JSU3h6UEhvSkxzSEpydElLeGtIRVB1dUVBOHVaRGZoZTNzTUw0c0xoN0JmMmt6alhwbzU2ZWVtL0d2TUw5TjFOMGN1RVM5YnhtSXZNOVBldktCWUxPQWgyNFJCbmlUaUpxcFRXZUg3Zy9pRDViRjZOR3h4Q25XdTU4dVZ5V1VnUUMrYkE0aUNxbHZTckNiWGhUREV0cUhRMlloL21iRkF1VlVuNStPRTl2T0NwSDJiTHZCdDdqZE4wckRQa2gzeXNONmhjT3dQUlpuTGlNNjEvUTUxYkN5NlE3NjZSbjAvUm5CYzhOVCtWZVBCd1NBWGVmakp6czZwSTFJcVJUMVdMMWwvWFhEcjlFenJSS25qcXl6ajF2WHVpYytyb3g2RVRyUzVoa3VEcjVXRVJDRFpOSU5nMGdXRFQrUGZycFYxSmpqcStzL0EyYnJuYnlsOXFBUzRBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJ1cEJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRkpTVVJCVkhnQjdkay9hOEpBR01meFgwcUhPRVlkMnJSVFM1ZTJkQ21GdnBKQ0Y0Y3VEbDM2VWx4YTBLVlFoeFpmU2FGMGFQMHo2U2Jpb0hIenNzVzcweFBCOFo1SEREeGZPQXdYa0EvSEJUd1RsTXRIR1hMVUFYTFdvYnVZVE1iWTUvUk9zSis1VzJFQmN5ZGc3Z1RNbllDNUV6QjNBdVpPd0thejh3dGNYdCtBSTNKd0hKK2crdnlDaDhjS2p1TlRVRWNLZHRqZm4yLzAybi8ybWhwTkJuYllidWNmcmM4bVdsOU5GalFadVBKVVJaTE1MRGFLaW5ZWTlDeVpXalJWZ1RzMSs1N3BydlJETmhqMFVRakROYkQrV2tPYUtvMHZZVFFhd2lmeU01M1pDZzZyVktxSHN0ZGhXUERHYmtZR05sdGd1YklCNm04MU5QUndhSE9QS2pMd0pqWlZjNHY5ZUcvWU9jbzliUFpHdHRySFh1UDI3ajZMaXFXdGVUTm43dmwrdjNPU1BYVGN5UjhwdTByQTNBbVlPd0Z6SjJEdUJNeWRnTGxidjZkelA5LzJ2ZHl0OEFLUmJJN2lPeHRtOXdBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZG93bkJUTlwiLFxyXG4gICAgZGF0YTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUN3QUFBQXNDQVlBQUFBZWhGb0JBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRmlTVVJCVkhnQjdaZS9TZ05CRU1hL2t4UzNkbmVtME9BVGFOQkNCRjlBTE95REZyR3dPZEhDZ0pWUFlDWEVRaUdWa0Vid2Jmd1RueUFlRmpGMmQ2WFoyYkFoSWVreUF6a3lQN2k3dmRubXg5eTN4MjVRTHEvL28wQ3NvR0NVL0tEWCs4RWlZNVBnbm9YcnNBcExvOExTcUxBMEtpeU5Da3Vqd3RJc3IvRGUvZ0dpS0o2cVU0M211R0FUUGp3NlJuTFZtSkNtTWRWb2pnczI0ZFpUMDk0RG5KMG5DSTFCR0JvblM3WGhIQStCUDlOeG5EaWllQTNKWlFONW5ybDNZMWFkN0YvL0YvUENmdUxZcUd3NlVSSWtVUytiWnhtMnFqdmdvZ1FtTHV6bjc5dE9QdHpmalNKQW5iMit1WFh5WDUvdjRJQXZ3NDlOeERZU3RaTzZFNldyZGxwM3RmWnpDMXl3WnJoaVkwRUxyZlB4Um1zTjI5VmQxKzMwdTR0NThSbG1GU2E4TlAwcEtCNGNzb1FYWnN1d0owMjdlSDFwMndXWXM4bU93eTVNZEpnVzJDeDA4eU9OQ2t1and0S29zRFFxTEkwS1M2UEMwb3kybDM2RHZPZ1Vyc01ENlFsbTJjR25nL2NBQUFBQVNVVk9SSzVDWUlJPVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJwbHVzQlROXCIsXHJcbiAgICBkYXRhOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFFelNVUkJWSGdCN1ppOWFnSkJFTWYvRjN5Qk14YkJkREZKa1dCU1NEN2VJSStTSWsxS0M3RVFDMHNyUVF2Qmx4QUVIOEFQYkZRcy9LcEVMZlR1RWZSdTRRcUxGVmQzMUlYNXdYSURPeHcvOW9aWjVxeEk1RzREZzdpQllZU0NZTFZhNHByeEtrRThqVHRoRnFhR2hhbGhZV3BZbUpvUU5HUGJZZnorL1l1NFVpNWhNWjlCSjlwUE9QSDVEVHQ4Szlaci9BMjY0UnFtaG9XcFlXRnFsUHR3TkhxUGwvaTdkRDhXZTk2TmY2U3A2TFFhY0YwSEtsakJFSHJvaUpSTVpVU1AxWUhyckpITHBnL0tQV0ZFc3FBUDlYY3BsMFN4a0VmaTQwdTY3NWZCdytPVGlLZmpFU2FUb1RSMzBPOUNGV1ZoL3pQV2ExVjVnbGV6Z2JBdnV6ZjNDTGl0VWNQQzFMQXdOZHFGQjcydTEvb2NzVHJ0Sm5TamZEVmZDdjU3ZVM1WW1Cb1dwb2FGcVRGM2FnNXVrbXZIdUJQZUFnZkFRY1VwUkNnNUFBQUFBRWxGVGtTdVFtQ0NcIixcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBJbnRlcmFjdGlvbkV2ZW50LCBUZXh0dXJlLCBUaWxpbmdTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuICBwdWJsaWMgdGlsZTogVGlsaW5nU3ByaXRlO1xyXG4gIHByaXZhdGUgc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICBwcml2YXRlIGRyYWdnaW5nOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBBcHApIHtcclxuICAgIHRoaXMudGlsZSA9IG5ldyBUaWxpbmdTcHJpdGUoXHJcbiAgICAgIFRleHR1cmUuZnJvbShcImJnXCIpLFxyXG4gICAgICB0aGlzLmFwcC5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIHRoaXMuYXBwLnNjcmVlbi5oZWlnaHRcclxuICAgICk7XHJcbiAgICB0aGlzLnRpbGUuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy50aWxlXHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJEb3duKGUpKVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4gdGhpcy5wb2ludGVyVXAoKSlcclxuICAgICAgLy8gLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoKSA9PiB0aGlzLnBvaW50ZXJPdXQoKSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKGUpID0+IHRoaXMucG9pbnRlck1vdmUoZSkpO1xyXG4gICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy50aWxlKTtcclxuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuYXBwLm9mZnNldC54ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCB8fFxyXG4gICAgICAgIHRoaXMuYXBwLm9mZnNldC55ICE9IHRoaXMudGlsZS50aWxlUG9zaXRpb24ueVxyXG4gICAgICApXHJcbiAgICAgICAgdGhpcy5tb3ZlVG9PZmZzZXQoZCk7XHJcbiAgICAgIGlmICh0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueCAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLngpXHJcbiAgICAgICAgdGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnggPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLng7XHJcbiAgICAgIGlmICh0aGlzLmFwcC5jb250YWluZXIucG9zaXRpb24ueSAhPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkpXHJcbiAgICAgICAgdGhpcy5hcHAuY29udGFpbmVyLnBvc2l0aW9uLnkgPSB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1vdmVUb09mZnNldChkOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggPiB0aGlzLmFwcC5vZmZzZXQueCkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnggLT0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IDwgdGhpcy5hcHAub2Zmc2V0LngpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ID0gdGhpcy5hcHAub2Zmc2V0Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi54IDwgdGhpcy5hcHAub2Zmc2V0LngpIHtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ICs9IGQgKiAyMDtcclxuICAgICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA+IHRoaXMuYXBwLm9mZnNldC54KVxyXG4gICAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueCA9IHRoaXMuYXBwLm9mZnNldC54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSA+IHRoaXMuYXBwLm9mZnNldC55KSB7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSAtPSBkICogMjA7XHJcbiAgICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPCB0aGlzLmFwcC5vZmZzZXQueSlcclxuICAgICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPSB0aGlzLmFwcC5vZmZzZXQueTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgPCB0aGlzLmFwcC5vZmZzZXQueSkge1xyXG4gICAgICB0aGlzLnRpbGUudGlsZVBvc2l0aW9uLnkgKz0gZCAqIDIwO1xyXG4gICAgICBpZiAodGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID4gdGhpcy5hcHAub2Zmc2V0LnkpXHJcbiAgICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi55ID0gdGhpcy5hcHAub2Zmc2V0Lnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb2ludGVyRG93bihlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5hcHAuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhcnQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnRpbGUucGFyZW50KTtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gIH1cclxuICBwb2ludGVyVXAoKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8vIHBvaW50ZXJPdXQoKSB7XHJcbiAgLy8gICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgLy8gfVxyXG4gIHBvaW50ZXJNb3ZlKGU6IEludGVyYWN0aW9uRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy50aWxlLnBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHggPSBuZXdQb3NpdGlvbi54IC0gdGhpcy5zdGFydC54O1xyXG4gICAgICBjb25zdCB5ID0gbmV3UG9zaXRpb24ueSAtIHRoaXMuc3RhcnQueTtcclxuICAgICAgdGhpcy50aWxlLnRpbGVQb3NpdGlvbi54ICs9IHg7XHJcbiAgICAgIHRoaXMudGlsZS50aWxlUG9zaXRpb24ueSArPSB5O1xyXG4gICAgICB0aGlzLnN0YXJ0LnggKz0geDtcclxuICAgICAgdGhpcy5zdGFydC55ICs9IHk7XHJcbiAgICAgIHRoaXMuYXBwLm9mZnNldC54ICs9IHg7XHJcbiAgICAgIHRoaXMuYXBwLm9mZnNldC55ICs9IHk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgSW50ZXJhY3Rpb25FdmVudCwgSVBvaW50RGF0YSwgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBNRU5VIH0gZnJvbSBcIi4vd2lkZ2V0cy9tZW51LndpZGdldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2Uge1xyXG4gIGFwcDogQXBwO1xyXG4gIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbWVudTogTUVOVTtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgY3Vyc29yOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICByZWY6IHN0cmluZztcclxuICBfY29sb3I6IG51bWJlcjtcclxuICBzdGFydDogSVBvaW50RGF0YTtcclxuICBlbmQ6IElQb2ludERhdGE7XHJcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcclxuICBjb25zdHJ1Y3Rvcih7IHJlZiwgY29sb3IsIHgsIHksIHpJbmRleCB9OiBCYXNlT3B0aW9ucywgYXBwOiBBcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnJlZiA9IHJlZjtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuekluZGV4ID0gekluZGV4O1xyXG4gICAgdGhpcy5jb250YWluZXIuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXIuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zb3J0YWJsZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGFpbmVyXHJcbiAgICAgIC5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJEb3duKGUpKVxyXG4gICAgICAub24oXCJwb2ludGVydXBcIiwgKGUpID0+IHRoaXMucG9pbnRlclVwKGUpKVxyXG4gICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJPdXQoZSkpXHJcbiAgICAgIC5vbihcInBvaW50ZXJtb3ZlXCIsIChlKSA9PiB0aGlzLnBvaW50ZXJNb3ZlKGUpKTtcclxuICAgIHRoaXMubWVudSA9IG5ldyBNRU5VKHRoaXMpO1xyXG4gICAgdGhpcy5hcHAuY29udGFpbmVyLmFkZENoaWxkKHRoaXMubWVudSk7XHJcbiAgICB0aGlzLmFwcC5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuICBzZWxlY3QoKSB7XHJcbiAgICBpZiAodGhpcy5hcHAuc2VsZWN0ZWQgIT0gdGhpcykge1xyXG4gICAgICB0aGlzLmFwcC5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgICAgIHRoaXMubWVudS5vcGVuKCk7XHJcbiAgICAgIHRoaXMuYXBwLmV2ZW50c1tcInNlbGVjdFwiXS5mb3JFYWNoKChjYikgPT4gY2IodGhpcykpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgdW5zZWxlY3QoKSB7XHJcbiAgICB0aGlzLm1lbnUuY2xvc2UoKTtcclxuICB9XHJcbiAgcG9pbnRlckRvd24oZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgdGhpcy5zdGFydCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBhcmVudCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hbHBoYSA9IDAuODtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJzb3IgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAvLyB0aGlzLmNvbnRhaW5lci56SW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UucmVmcykubGVuZ3RoO1xyXG4gIH1cclxuICBwb2ludGVyVXAoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuYWxwaGEgPSAxO1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuc3RhcnQgJiYgdGhpcy5zdGFydC54ICE9IHRoaXMueCAmJiB0aGlzLnN0YXJ0LnkgIT0gdGhpcy55KSB7XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW5kID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgfVxyXG4gIHBvaW50ZXJPdXQoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuYWxwaGEgPSAxO1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5hcHAuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgdGhpcy5lbmQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgdGhpcy5zZWxlY3QoKTtcclxuICB9XHJcbiAgcG9pbnRlck1vdmUoZTogSW50ZXJhY3Rpb25FdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5hcHAubW92ZSAmJiB0aGlzLmFwcC5lZGl0KSB7XHJcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5jb250YWluZXIucGFyZW50KTtcclxuICAgICAgLy8gdGhpcy54ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuY3Vyc29yLng7XHJcbiAgICAgIC8vIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnkgLSB0aGlzLmN1cnNvci55O1xyXG4gICAgICBuZXdQb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuY3Vyc29yLng7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55IC0gdGhpcy5jdXJzb3IueTtcclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPj0gMjUpIHtcclxuICAgICAgICB0aGlzLnggKz0gMjU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA8PSAtMjUpIHtcclxuICAgICAgICB0aGlzLnggLT0gMjU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPj0gMTUpIHtcclxuICAgICAgICB0aGlzLnkgKz0gMTU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA8PSAtMTUpIHtcclxuICAgICAgICB0aGlzLnkgLT0gMTU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZW51LnBvc2l0aW9uLnNldCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBzZXQgeCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnkgPSB5O1xyXG4gIH1cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICB9XHJcbiAgc2V0IHpJbmRleChpOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnpJbmRleCA9IGk7XHJcbiAgfVxyXG4gIGdldCB6SW5kZXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIuekluZGV4O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgR3JhcGhpY3MsXHJcbiAgSW50ZXJhY3Rpb25FdmVudCxcclxuICBUZXh0dXJlLFxyXG4gIFRpbGluZ1Nwcml0ZSxcclxuICB1dGlscyxcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBMQUJFTCB9IGZyb20gXCIuL3dpZGdldHMvbGFiZWwud2lkZ2V0XCI7XHJcbmltcG9ydCB7IFNQUklURSB9IGZyb20gXCIuL3dpZGdldHMvc3ByaXRlLndpZGdldFwiO1xyXG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Jhc2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50UHJvcHMsXHJcbiAgQ29tcG9uZW50Q29uZmlnLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ09NUE9ORU5UIGV4dGVuZHMgQmFzZSB7XHJcbiAgcHJpdmF0ZSBzZWxlY3RUaWxlID0gbmV3IFRpbGluZ1Nwcml0ZShUZXh0dXJlLmZyb20oXCJzZWxlY3RcIikpO1xyXG4gIHByaXZhdGUgc2VsZWN0R3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcclxuICBwcml2YXRlIF9wcm9wczogQ29tcG9uZW50UHJvcHM7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlID0gbmV3IFNQUklURSgpO1xyXG4gIHByaXZhdGUgX2xhYmVsID0gbmV3IExBQkVMKCk7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQmFzZU9wdGlvbnMsIGFwcDogQXBwKSB7XHJcbiAgICBzdXBlcihvcHRpb25zLCBhcHApO1xyXG4gICAgdGhpcy50eXBlID0gXCJjb21wb25lbnRcIjtcclxuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGQpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnRpbGVQb3NpdGlvbi54ICs9IGQgLyA2O1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGlsZVBvc2l0aW9uLnkgKz0gZCAvIDY7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAoKSB7XHJcbiAgICB0aGlzLl9sYWJlbC5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPSB0aGlzLl9sYWJlbC5oZWlnaHQgKyAyMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcblxyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjApO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDQpO1xyXG4gICAgdGhpcy5jaXJjbGUoMCwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMjAsIHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIpO1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3Quc2V0KDAsIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDIwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3QoKSB7XHJcbiAgICBpZiAoc3VwZXIuc2VsZWN0KCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLndpZHRoID0gdGhpcy5fc3ByaXRlLndpZHRoICsgMjA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5oZWlnaHQgPSB0aGlzLl9zcHJpdGUuaGVpZ2h0ICsgMjA7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54ID0gLXRoaXMuX3Nwcml0ZS53aWR0aCAvIDIgLSAxMDtcclxuICAgICAgdGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLnkgPSB0aGlzLl9zcHJpdGUueSAtIDEwO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUuYWxwaGEgPSAwLjU7XHJcbiAgICAgIHRoaXMuY3Jvc3ModGhpcy5zZWxlY3RUaWxlLnBvc2l0aW9uLngsIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55KTtcclxuICAgICAgdGhpcy5jcm9zcyhcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueCArIHRoaXMuc2VsZWN0VGlsZS53aWR0aCxcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbGUucG9zaXRpb24ueVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNyb3NzKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55ICsgdGhpcy5zZWxlY3RUaWxlLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNyb3NzKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi54ICsgdGhpcy5zZWxlY3RUaWxlLndpZHRoLFxyXG4gICAgICAgIHRoaXMuc2VsZWN0VGlsZS5wb3NpdGlvbi55ICsgdGhpcy5zZWxlY3RUaWxlLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNlbGVjdFRpbGUpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNlbGVjdEdyYXBoaWNzKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5zZWxlY3QoKSB7XHJcbiAgICBzdXBlci51bnNlbGVjdCgpO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zZWxlY3RUaWxlKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0R3JhcGhpY3MpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgY29uc3QgY2lyY2xlID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICBsZXQgcmFkID0gb2Zmc2V0O1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICBpZiAocmFkID49IHRoaXMuX3Nwcml0ZS53aWR0aCkge1xyXG4gICAgICAgIHJhZCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgcmFkICs9IGQgLyAyO1xyXG4gICAgICBjb25zdCBvcGFjaXR5ID0gKHRoaXMuX3Nwcml0ZS53aWR0aCAtIHJhZCkgLyB0aGlzLl9zcHJpdGUud2lkdGg7XHJcbiAgICAgIGNpcmNsZS5jbGVhcigpO1xyXG4gICAgICBjaXJjbGUubGluZVN0eWxlKDIsIHRoaXMuX2NvbG9yLCBvcGFjaXR5KTtcclxuICAgICAgY2lyY2xlLmJlZ2luRmlsbCh0aGlzLl9jb2xvciwgb3BhY2l0eSAtIDAuMSk7XHJcbiAgICAgIGNpcmNsZS5kcmF3RWxsaXBzZSh4LCB5LCByYWQsIHJhZCAvIDEuNik7XHJcbiAgICB9KTtcclxuICAgIGNpcmNsZS56SW5kZXggPSAwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBjcm9zcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5saW5lU3R5bGUoMSwgMHhmZmZmZmYsIDEpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5tb3ZlVG8oeCAtIDYsIHkpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5saW5lVG8oeCArIDYsIHkpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5tb3ZlVG8oeCwgeSAtIDYpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy5saW5lVG8oeCwgeSArIDYpO1xyXG4gICAgdGhpcy5zZWxlY3RHcmFwaGljcy50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBwb2ludGVyTW92ZShlOiBJbnRlcmFjdGlvbkV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZyAmJiB0aGlzLmFwcC5tb3ZlICYmIHRoaXMuYXBwLmVkaXQpIHtcclxuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmNvbnRhaW5lci5wYXJlbnQpO1xyXG4gICAgICBuZXdQb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueCAtIHRoaXMuY3Vyc29yLng7XHJcbiAgICAgIG5ld1Bvc2l0aW9uLnkgPVxyXG4gICAgICAgIG5ld1Bvc2l0aW9uLnkgK1xyXG4gICAgICAgICh0aGlzLl9sYWJlbC5oZWlnaHQgKyB0aGlzLl9zcHJpdGUuaGVpZ2h0ICsgMzAgLSB0aGlzLmN1cnNvci55KTtcclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnggLSB0aGlzLnggPj0gMjUpIHtcclxuICAgICAgICB0aGlzLnggKz0gMjU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueCAtIHRoaXMueCA8PSAtMjUpIHtcclxuICAgICAgICB0aGlzLnggLT0gMjU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnkgPj0gMTUpIHtcclxuICAgICAgICB0aGlzLnkgKz0gMTU7XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24ueSAtIHRoaXMueSA8PSAtMTUpIHtcclxuICAgICAgICB0aGlzLnkgLT0gMTU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZW51LnBvc2l0aW9uLnNldCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IENvbXBvbmVudFByb3BzKSB7XHJcbiAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5fc3ByaXRlLnRleHR1cmUgPSBUZXh0dXJlLmZyb20oYCR7cHJvcHMubmFtZX1gKTtcclxuICAgIHRoaXMuX2xhYmVsLnRleHQgPSBwcm9wcy5sYWJlbDtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9sYWJlbCkge1xyXG4gICAgICB0aGlzLl9sYWJlbC5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbGUudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICB0aGlzLnNlbGVjdEdyYXBoaWNzLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogQ29tcG9uZW50Q29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBHcmFwaGljcyxcclxuICBJbnRlcmFjdGlvbkRhdGEsXHJcbiAgSW50ZXJhY3Rpb25FdmVudCxcclxuICBTcHJpdGUsXHJcbiAgVGV4dHVyZSxcclxuICB1dGlscyxcclxufSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMaW5lUHJvcHMsIExpbmVDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9saW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTElORSBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX2xpbmU6IEdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfcHJvcHM6IExpbmVQcm9wcztcclxuICBwcml2YXRlIGVkaXRQb2ludHM6IEdyYXBoaWNzW10gPSBbXTtcclxuICBwcml2YXRlIGRlbGV0ZUJUTiA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwiZGVsZXRlQlROXCIpKTtcclxuICBwcml2YXRlIHBsdXNCVE4gPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcInBsdXNCVE5cIikpO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRQb2ludDoge1xyXG4gICAgZ3JhcGhpY3M6IEdyYXBoaWNzO1xyXG4gICAgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICAgIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcclxuICAgIGRyYWc6IGJvb2xlYW47XHJcbiAgfSB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2xpbmUpO1xyXG4gICAgdGhpcy50eXBlID0gXCJsaW5lXCI7XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVsZXRlQlROLmFscGhhID0gMC41O1xyXG4gICAgdGhpcy5kZWxldGVCVE4uc2NhbGUuc2V0KDAuOCwgMC44KTtcclxuICAgIHRoaXMucGx1c0JUTi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnBsdXNCVE4uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLnBsdXNCVE4uYWxwaGEgPSAwLjU7XHJcbiAgICB0aGlzLnBsdXNCVE4uc2NhbGUuc2V0KDAuOCwgMC44KTtcclxuICAgIHRoaXMucGx1c0JUTi5vbihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Byb3BzLnBvaW50cy5wdXNoKHsgeDogdGhpcy5wbHVzQlROLngsIHk6IHRoaXMucGx1c0JUTi55IH0pO1xyXG4gICAgICB0aGlzLnJlbW92ZVBvaW50cygpO1xyXG4gICAgICB0aGlzLmFkZEVkaXRQb2ludHMoKTtcclxuICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgICB0aGlzLmVkaXRQb2ludHNbdGhpcy5lZGl0UG9pbnRzLmxlbmd0aCAtIDFdLmVtaXQoXHJcbiAgICAgICAgXCJwb2ludGVyZG93blwiLFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgdGhpcy5lZGl0UG9pbnRzW3RoaXMuZWRpdFBvaW50cy5sZW5ndGggLSAxXSxcclxuICAgICAgICB0aGlzLl9wcm9wcy5wb2ludHNbdGhpcy5fcHJvcHMucG9pbnRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIHRoaXMuc2VsZWN0UG9pbnQodGhpcy5lZGl0UG9pbnRzLnBvcCgpLCB0aGlzLl9wcm9wcy5wb2ludHMucG9wKCksIGUpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnBsdXNCVE4pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnBsdXNCVE4ub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucGx1c0JUTi5hbHBoYSA9IDE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucGx1c0JUTi5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsdXNCVE4uYWxwaGEgPSAwLjU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGVsZXRlQlROLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFBvaW50KSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVQb2ludCh0aGlzLnNlbGVjdGVkUG9pbnQucG9pbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGVsZXRlQlROLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlbGV0ZUJUTi5hbHBoYSA9IDE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGVsZXRlQlROLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVsZXRlQlROLmFscGhhID0gMC41O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50SW5MaW5lKFxyXG4gICAgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxyXG4gICAgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxyXG4gICAgb2Zmc2V0PzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gTWF0aC5zcXJ0KFxyXG4gICAgICBNYXRoLnBvdyhiLnggLSBhLngsIDIpICsgTWF0aC5wb3coYi55IC0gYS55LCAyKVxyXG4gICAgKTtcclxuICAgIGxldCBmYWN0b3IgPSBzZWdtZW50TGVuZ3RoIC8gMiAvIHNlZ21lbnRMZW5ndGg7XHJcbiAgICBpZiAob2Zmc2V0KSB7XHJcbiAgICAgIGZhY3RvciA9IG9mZnNldCAvIHNlZ21lbnRMZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIGZhY3RvciwgeTogYS55ICsgKGIueSAtIGEueSkgKiBmYWN0b3IgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VnbWVudHMoXHJcbiAgICBwb2ludHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdLFxyXG4gICAgcmFkaXVzOiBudW1iZXJcclxuICApOiB7XHJcbiAgICBzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgZW5kOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgICBiYXppZXI/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gIH1bXSB7XHJcbiAgICByZXR1cm4gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCwgaSkgPT4ge1xyXG4gICAgICBpZiAocG9pbnRzW2kgLSAxXSkge1xyXG4gICAgICAgIGlmIChpID09PSBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludHNbaSAtIDFdLCBwb2ludCwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiBwb2ludCxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludHNbaSAtIDFdLCBwb2ludCwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSAtIDFdLCByYWRpdXMpLFxyXG4gICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9pbnRzW2kgKyAxXSkge1xyXG4gICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5wb2ludEluTGluZShwb2ludCwgcG9pbnRzW2kgLSAxXSwgcmFkaXVzKSxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBwb2ludHNbaSArIDFdLCByYWRpdXMpLFxyXG4gICAgICAgICAgICBiYXppZXI6IHBvaW50LFxyXG4gICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICBzdGFydDogcG9pbnQsXHJcbiAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRJbkxpbmUocG9pbnQsIHBvaW50c1tpICsgMV0sIHJhZGl1cyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd0xpbmUoKSB7XHJcbiAgICB0aGlzLl9saW5lLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9saW5lLmxpbmVTdHlsZSh0aGlzLl9wcm9wcy53aWR0aCwgdGhpcy5fY29sb3IsIDEpO1xyXG4gICAgdGhpcy5zZWdtZW50cyh0aGlzLl9wcm9wcy5wb2ludHMsIHRoaXMuX3Byb3BzLnJhZGl1cykuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIXNlZ21lbnQuYmF6aWVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGluZS5tb3ZlVG8oc2VnbWVudC5zdGFydC54LCBzZWdtZW50LnN0YXJ0LnkpO1xyXG4gICAgICAgIHRoaXMuX2xpbmUubGluZVRvKHNlZ21lbnQuZW5kLngsIHNlZ21lbnQuZW5kLnkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9saW5lLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgc2VnbWVudC5zdGFydC54LFxyXG4gICAgICAgIHNlZ21lbnQuc3RhcnQueSxcclxuICAgICAgICBzZWdtZW50LmJhemllci54LFxyXG4gICAgICAgIHNlZ21lbnQuYmF6aWVyLnksXHJcbiAgICAgICAgc2VnbWVudC5lbmQueCxcclxuICAgICAgICBzZWdtZW50LmVuZC55XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2xpbmUubGluZVN0eWxlKDEsIHRoaXMuX2NvbG9yLCAwKTtcclxuICAgIHRoaXMuX2xpbmUuYmVnaW5GaWxsKDB4ZmZmZmZmLCAwLjAxKTtcclxuICAgIHRoaXMuX2xpbmUubW92ZVRvKHRoaXMuX3Byb3BzLnBvaW50c1swXS54LCB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueSk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8ocG9pbnQueCArIHRoaXMuX3Byb3BzLndpZHRoLCBwb2ludC55KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcHJvcHMucG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgdGhpcy5fbGluZS5saW5lVG8oXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueCAtIHRoaXMuX3Byb3BzLndpZHRoIC0gNDAsXHJcbiAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxIC0gaV0ueVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9saW5lLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX2xpbmUuY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEVkaXRQb2ludHMoKSB7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGksIGFycikgPT4ge1xyXG4gICAgICBjb25zdCBwID0gdGhpcy5wb2ludChwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQocCk7XHJcbiAgICAgIHRoaXMuZWRpdFBvaW50cy5wdXNoKHApO1xyXG4gICAgICBwLm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHRoaXMucG9pbnREb3duKGUsIHAsIHBvaW50KSk7XHJcbiAgICAgIHAub24oXCJwb2ludGVydXBcIiwgKCkgPT4gdGhpcy5wb2ludFVwKCkpO1xyXG4gICAgICBwLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoKSA9PiB0aGlzLnBvaW50VXAoKSk7XHJcbiAgICAgIHAub24oXCJwb2ludGVybW92ZVwiLCAoKSA9PiB0aGlzLnBvaW50TW92ZSgpKTtcclxuICAgICAgaWYgKGFycltpICsgMV0pIHtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLnBvaW50SW5MaW5lKHBvaW50LCBhcnJbaSArIDFdKTtcclxuICAgICAgICBjb25zdCBjZW50ZXJQb2ludCA9IHRoaXMucG9pbnQoY2VudGVyLngsIGNlbnRlci55LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVkaXRQb2ludHMucHVzaChjZW50ZXJQb2ludCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2VudGVyUG9pbnQpO1xyXG4gICAgICAgIGNlbnRlclBvaW50Lm9uKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHRoaXMuY2VudGVyRG93bihjZW50ZXIsIGUsIGkgKyAxKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludCh4OiBudW1iZXIsIHk6IG51bWJlciwgY2VudGVyPzogYm9vbGVhbikge1xyXG4gICAgY29uc3QgcG9pbnQgPSBuZXcgR3JhcGhpY3MoKTtcclxuICAgIHBvaW50LnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgIHBvaW50LmJlZ2luRmlsbCgweGZmZmZmZiwgY2VudGVyID8gMC4wNSA6IDAuMik7XHJcbiAgICBwb2ludC5kcmF3RWxsaXBzZSgwLCAwLCBjZW50ZXIgPyAxNiA6IDI1LCBjZW50ZXIgPyAxNiAvIDEuNiA6IDI1IC8gMS42KTtcclxuICAgIHBvaW50LmVuZEZpbGwoKTtcclxuICAgIHBvaW50LmxpbmVTdHlsZSgyLCAweGZmZmZmZiwgMC41KTtcclxuICAgIGlmIChjZW50ZXIpIHtcclxuICAgICAgcG9pbnQubW92ZVRvKC0xMCwgLTEwIC8gMS42KTtcclxuICAgICAgcG9pbnQubGluZVRvKDEwLCAxMCAvIDEuNik7XHJcbiAgICAgIHBvaW50Lm1vdmVUbygxMCwgLTEwIC8gMS42KTtcclxuICAgICAgcG9pbnQubGluZVRvKC0xMCwgMTAgLyAxLjYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9pbnQubW92ZVRvKDAsIDApO1xyXG4gICAgICBwb2ludC5saW5lVG8oMCwgLTIwKTtcclxuICAgIH1cclxuICAgIHBvaW50LmxpbmVTdHlsZSgwLCAwKTtcclxuICAgIHBvaW50LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHBvaW50LmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHBvaW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVQb2ludHMoKSB7XHJcbiAgICB0aGlzLmVkaXRQb2ludHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChwKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5lZGl0UG9pbnRzID0gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGV0ZVBvaW50KHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgIGlmICh0aGlzLl9wcm9wcy5wb2ludHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS5yZW1vdmUodGhpcy5yZWYpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnVuc2VsZWN0UG9pbnQoKTtcclxuICAgIGNvbnN0IGkgPSB0aGlzLl9wcm9wcy5wb2ludHMuaW5kZXhPZihwb2ludCk7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuc3BsaWNlKGksIDEpO1xyXG4gICAgdGhpcy5yZW1vdmVQb2ludHMoKTtcclxuICAgIHRoaXMuYWRkRWRpdFBvaW50cygpO1xyXG4gICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgdGhpcy5tZW51LnBvc2l0aW9uLnNldChcclxuICAgICAgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnggKyB0aGlzLnggLSAyMCxcclxuICAgICAgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnkgKyB0aGlzLnkgLSAyMFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9pbnREb3duKFxyXG4gICAgZTogSW50ZXJhY3Rpb25FdmVudCxcclxuICAgIGdyYXBoaWNzOiBHcmFwaGljcyxcclxuICAgIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cclxuICApIHtcclxuICAgIHRoaXMubWVudS5jbG9zZSgpO1xyXG4gICAgdGhpcy5hcHAubW92ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3RQb2ludChncmFwaGljcywgcG9pbnQsIGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb2ludFVwKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5kZWxldGVCVE4pO1xyXG4gICAgdGhpcy5hcHAubW92ZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBvaW50KSB0aGlzLnNlbGVjdGVkUG9pbnQuZHJhZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZW1vdmVQb2ludHMoKTtcclxuICAgIHRoaXMuYWRkRWRpdFBvaW50cygpO1xyXG4gICAgdGhpcy5tZW51Lm9wZW4oKTtcclxuICAgIHRoaXMubWVudS5wb3NpdGlvbi5zZXQoXHJcbiAgICAgIHRoaXMuX3Byb3BzLnBvaW50c1swXS54ICsgdGhpcy54IC0gMjAsXHJcbiAgICAgIHRoaXMuX3Byb3BzLnBvaW50c1swXS55ICsgdGhpcy55IC0gMjBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvaW50TW92ZSgpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkUG9pbnQgJiYgdGhpcy5zZWxlY3RlZFBvaW50LmRyYWcpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5kZWxldGVCVE4pO1xyXG4gICAgICBjb25zdCBuZXdDb29yZHMgPSB0aGlzLnNlbGVjdGVkUG9pbnQuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQb2ludC5ncmFwaGljcy5wYXJlbnRcclxuICAgICAgKTtcclxuICAgICAgbmV3Q29vcmRzLnggPSBuZXdDb29yZHMueCAtIChuZXdDb29yZHMueCAlIDI1KTtcclxuICAgICAgbmV3Q29vcmRzLnkgPSBuZXdDb29yZHMueSAtIChuZXdDb29yZHMueSAlIDE1KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzLnggPSBuZXdDb29yZHMueDtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzLnkgPSBuZXdDb29yZHMueTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBvaW50LnBvaW50LnggPSBuZXdDb29yZHMueDtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBvaW50LnBvaW50LnkgPSBuZXdDb29yZHMueTtcclxuICAgICAgdGhpcy5lZGl0UG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBhcnIpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwb2ludCA9PT0gdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzICYmXHJcbiAgICAgICAgICBpID4gMCAmJlxyXG4gICAgICAgICAgaSA8IGFyci5sZW5ndGggLSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhcnJbaSAtIDFdLnggPSB0aGlzLnBvaW50SW5MaW5lKGFycltpIC0gMl0sIG5ld0Nvb3JkcykueDtcclxuICAgICAgICAgIGFycltpIC0gMV0ueSA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgLSAyXSwgbmV3Q29vcmRzKS55O1xyXG4gICAgICAgICAgYXJyW2kgKyAxXS54ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSArIDJdLCBuZXdDb29yZHMpLng7XHJcbiAgICAgICAgICBhcnJbaSArIDFdLnkgPSB0aGlzLnBvaW50SW5MaW5lKGFycltpICsgMl0sIG5ld0Nvb3JkcykueTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgcG9pbnQgPT09IHRoaXMuc2VsZWN0ZWRQb2ludC5ncmFwaGljcyAmJlxyXG4gICAgICAgICAgaSA9PT0gYXJyLmxlbmd0aCAtIDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFycltpIC0gMV0ueCA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgLSAyXSwgbmV3Q29vcmRzKS54O1xyXG4gICAgICAgICAgYXJyW2kgLSAxXS55ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSAtIDJdLCBuZXdDb29yZHMpLnk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludCA9PT0gdGhpcy5zZWxlY3RlZFBvaW50LmdyYXBoaWNzICYmIGkgPT09IDApIHtcclxuICAgICAgICAgIGFycltpICsgMV0ueCA9IHRoaXMucG9pbnRJbkxpbmUoYXJyW2kgKyAyXSwgbmV3Q29vcmRzKS54O1xyXG4gICAgICAgICAgYXJyW2kgKyAxXS55ID0gdGhpcy5wb2ludEluTGluZShhcnJbaSArIDJdLCBuZXdDb29yZHMpLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5kZWxldGVCVE4ucG9zaXRpb24uc2V0KG5ld0Nvb3Jkcy54LCBuZXdDb29yZHMueSk7XHJcbiAgICAgIHRoaXMuZHJhd0xpbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2VudGVyRG93bihcclxuICAgIHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXHJcbiAgICBlOiBJbnRlcmFjdGlvbkV2ZW50LFxyXG4gICAgaTogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wcm9wcy5wb2ludHMuc3BsaWNlKGksIDAsIHBvaW50KTtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnRzKCk7XHJcbiAgICB0aGlzLmFkZEVkaXRQb2ludHMoKTtcclxuICAgIC8vIHRoaXMuZWRpdFBvaW50c1tpICsgMl0uZW1pdChcInBvaW50ZXJkb3duXCIsIGUpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UG9pbnQoXHJcbiAgICBncmFwaGljczogR3JhcGhpY3MsXHJcbiAgICBwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxyXG4gICAgZTogSW50ZXJhY3Rpb25FdmVudFxyXG4gICkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFBvaW50ID0ge1xyXG4gICAgICBncmFwaGljcyxcclxuICAgICAgcG9pbnQsXHJcbiAgICAgIGRhdGE6IGUuZGF0YSxcclxuICAgICAgZHJhZzogdHJ1ZSxcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5fcHJvcHMucG9pbnRzLmxlbmd0aCAtIDEgPT09IHRoaXMuX3Byb3BzLnBvaW50cy5pbmRleE9mKHBvaW50KSkge1xyXG4gICAgICB0aGlzLnBsdXNCVE4ucG9zaXRpb24uc2V0KHBvaW50LnggKyA0MCwgcG9pbnQueSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMucGx1c0JUTik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRlbGV0ZUJUTi5wb3NpdGlvbi5zZXQocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmRlbGV0ZUJUTik7XHJcbiAgfVxyXG5cclxuICB1bnNlbGVjdFBvaW50KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFBvaW50ID0gbnVsbDtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZGVsZXRlQlROKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucGx1c0JUTik7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoKSB7XHJcbiAgICBpZiAoc3VwZXIuc2VsZWN0KCkpIHtcclxuICAgICAgdGhpcy5hZGRFZGl0UG9pbnRzKCk7XHJcbiAgICAgIHRoaXMubWVudS5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgdGhpcy5fcHJvcHMucG9pbnRzWzBdLnggKyB0aGlzLnggLSAyMCxcclxuICAgICAgICB0aGlzLl9wcm9wcy5wb2ludHNbMF0ueSArIHRoaXMueSAtIDIwXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdW5zZWxlY3QoKSB7XHJcbiAgICBzdXBlci51bnNlbGVjdCgpO1xyXG4gICAgdGhpcy5yZW1vdmVQb2ludHMoKTtcclxuICAgIHRoaXMuYXBwLm1vdmUgPSB0cnVlO1xyXG4gICAgdGhpcy51bnNlbGVjdFBvaW50KCk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IExpbmVQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIGlmICh0aGlzLl9saW5lKSB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9saW5lKSB7XHJcbiAgICAgIHRoaXMuZHJhd0xpbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogTGluZUNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHpJbmRleDogdGhpcy56SW5kZXgsXHJcbiAgICAgIHByb3BzOiB0aGlzLl9wcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlLmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBHcmFwaGljcyxcclxuICBJbnRlcmFjdGlvbkRhdGEsXHJcbiAgVGV4dHVyZSxcclxuICBUaWxpbmdTcHJpdGUsXHJcbiAgdXRpbHMsXHJcbn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZVByb3BzLCBQbGFuZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQTEFORSBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3BsYW5lOiBHcmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG4gIHByaXZhdGUgX3BsYW5lVGlsZSA9IG5ldyBUaWxpbmdTcHJpdGUoVGV4dHVyZS5mcm9tKFwic2VsZWN0XCIpKTtcclxuICBwcml2YXRlIF9wcm9wczogUGxhbmVQcm9wcztcclxuICBwcml2YXRlIHBvaW50ID0gbmV3IEdyYXBoaWNzKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3BsYW5lKTtcclxuICAgIHRoaXMucG9pbnQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy50eXBlID0gXCJwbGFuZVwiO1xyXG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZCkgPT4ge1xyXG4gICAgICB0aGlzLl9wbGFuZVRpbGUudGlsZVBvc2l0aW9uLnggKz0gZCAvIDI7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZHJhZ1BvaW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKCkge1xyXG4gICAgY29uc3QgcmFkID0gKDMxICogTWF0aC5QSSkgLyAxODA7XHJcbiAgICBjb25zdCBhID0gdGhpcy5fcHJvcHMuaCAqIE1hdGguc2luKHJhZCk7XHJcbiAgICBjb25zdCBiID0gdGhpcy5fcHJvcHMuaCAqIE1hdGguY29zKHJhZCk7XHJcbiAgICBjb25zdCBBID0gdGhpcy5fcHJvcHMudyAqIE1hdGguc2luKHJhZCk7XHJcbiAgICBjb25zdCBCID0gdGhpcy5fcHJvcHMudyAqIE1hdGguY29zKHJhZCk7XHJcbiAgICB0aGlzLl9wbGFuZS5jbGVhcigpO1xyXG4gICAgdGhpcy5fcGxhbmUuYmVnaW5GaWxsKHRoaXMuX2NvbG9yLCAwLjA0KTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVTdHlsZSgyLCB0aGlzLl9jb2xvciwgMC41KTtcclxuICAgIHRoaXMuX3BsYW5lLm1vdmVUbygwLCAwKTtcclxuICAgIHRoaXMuX3BsYW5lLmxpbmVUbyhiLCAtYSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oYiArIEIsIC1hICsgQSk7XHJcbiAgICB0aGlzLl9wbGFuZS5saW5lVG8oQiwgQSk7XHJcbiAgICB0aGlzLl9wbGFuZS5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMuX3BsYW5lLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS54ID0gYjtcclxuICAgIHRoaXMuX3BsYW5lVGlsZS55ID0gLWE7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUud2lkdGggPSB0aGlzLl9wcm9wcy53O1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLmhlaWdodCA9IHRoaXMuX3Byb3BzLmg7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUudGlsZVNjYWxlLnNldCgxLjUsIDEuNSk7XHJcbiAgICB0aGlzLl9wbGFuZVRpbGUudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLmFscGhhID0gMC40O1xyXG4gICAgdGhpcy5fcGxhbmVUaWxlLnNrZXcuc2V0KC0xLjAzLCAoMzEgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9wbGFuZVRpbGUpO1xyXG4gICAgdGhpcy5wb2ludC5wb3NpdGlvbi5zZXQoYiArIEIsIC1hICsgQSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoKSB7XHJcbiAgICBpZiAoc3VwZXIuc2VsZWN0KCkpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB1bnNlbGVjdCgpIHtcclxuICAgIHN1cGVyLnVuc2VsZWN0KCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnBvaW50KTtcclxuICB9XHJcblxyXG4gIGRyYWdQb2ludCgpIHtcclxuICAgIHRoaXMucG9pbnQubGluZVN0eWxlKDIsIDB4ZmZmZmZmLCAwLjMpO1xyXG4gICAgdGhpcy5wb2ludC5tb3ZlVG8oMCwgMCk7XHJcbiAgICB0aGlzLnBvaW50LmxpbmVUbygwLCAtMjApO1xyXG4gICAgdGhpcy5wb2ludC5saW5lU3R5bGUoMCwgMCk7XHJcbiAgICB0aGlzLnBvaW50LmJlZ2luRmlsbCgweGZmZmZmZiwgMC4yKTtcclxuICAgIHRoaXMucG9pbnQuZHJhd0VsbGlwc2UoMCwgMCwgMjUsIDI1IC8gMS42KTtcclxuICAgIHRoaXMucG9pbnQuZW5kRmlsbCgpO1xyXG4gICAgbGV0IGRhdGE6IEludGVyYWN0aW9uRGF0YTtcclxuICAgIGxldCBkcmFnID0gZmFsc2U7XHJcbiAgICBsZXQgc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgdGhpcy5wb2ludFxyXG4gICAgICAub24oXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGRhdGEgPSBlLmRhdGE7XHJcbiAgICAgICAgZHJhZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHAubW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXJ0ID0gZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucG9pbnQucGFyZW50KTtcclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFydCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwLm1vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcnVwb3V0c2lkZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwLm1vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwicG9pbnRlcm1vdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkcmFnKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJzb3IgPSBkYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wb2ludC5wYXJlbnQpO1xyXG4gICAgICAgICAgY29uc3QgZHggPSBjdXJzb3IueDtcclxuICAgICAgICAgIGNvbnN0IGR5ID0gY3Vyc29yLnk7XHJcbiAgICAgICAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbihkeCAvIGR5KSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICAgIGNvbnN0IEEgPSAxMjA7XHJcbiAgICAgICAgICBjb25zdCBDID0gYWxwaGEgLSA2MDtcclxuICAgICAgICAgIGNvbnN0IEIgPSA2MCAtIEM7XHJcbiAgICAgICAgICBjb25zdCBhID0gTWF0aC5zcXJ0KGR5ICogZHkgKyBkeCAqIGR4KTtcclxuICAgICAgICAgIHRoaXMucHJvcHMudyA9XHJcbiAgICAgICAgICAgIChNYXRoLnNpbihCICogKE1hdGguUEkgLyAxODApKSAqIGEpIC8gTWF0aC5zaW4oQSAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmggPVxyXG4gICAgICAgICAgICAoTWF0aC5zaW4oQyAqIChNYXRoLlBJIC8gMTgwKSkgKiBhKSAvIE1hdGguc2luKEEgKiAoTWF0aC5QSSAvIDE4MCkpO1xyXG4gICAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFBsYW5lUHJvcHMpIHtcclxuICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGV4MnN0cmluZyh0aGlzLl9jb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY29sb3IgPSB1dGlscy5zdHJpbmcyaGV4KGNvbG9yKTtcclxuICAgIGlmICh0aGlzLl9wbGFuZSkge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFBsYW5lQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZjogdGhpcy5yZWYsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgekluZGV4OiB0aGlzLnpJbmRleCxcclxuICAgICAgcHJvcHM6IHRoaXMuX3Byb3BzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXRpbHMsIFRleHQsIFRleHRTdHlsZUZvbnRXZWlnaHQgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9iYXNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0Q29uZmlnLCBUZXh0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZXh0LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZS5lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVEVYVCBleHRlbmRzIEJhc2Uge1xyXG4gIHByaXZhdGUgX3RleHQgPSBuZXcgVGV4dChcIlwiKTtcclxuICBwcml2YXRlIF9wcm9wczogVGV4dFByb3BzO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJhc2VPcHRpb25zLCBhcHA6IEFwcCkge1xyXG4gICAgc3VwZXIob3B0aW9ucywgYXBwKTtcclxuICAgIHRoaXMudHlwZSA9IFwidGV4dFwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cCgpIHtcclxuICAgIGlmICh0aGlzLl9wcm9wcy5za2V3KSB7XHJcbiAgICAgIHRoaXMuX3RleHQuc2tldy5zZXQoLTEuMDMsICgzMSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RleHQuc3R5bGUuZm9udFdlaWdodCA9IHRoaXMuX3Byb3BzLmZvbnRXaWR0aCBhcyBUZXh0U3R5bGVGb250V2VpZ2h0O1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5mb250U2l6ZSA9IHRoaXMuX3Byb3BzLmZvbnRTaXplO1xyXG4gICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl90ZXh0LnRleHQgPSB0aGlzLl9wcm9wcy50ZXh0O1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fdGV4dCk7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvcHMocHJvcHM6IFRleHRQcm9wcykge1xyXG4gICAgdGhpcy5fcHJvcHMgPSBwcm9wcztcclxuICAgIC8vIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB1dGlscy5oZXgyc3RyaW5nKHRoaXMuX2NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHV0aWxzLnN0cmluZzJoZXgoY29sb3IpO1xyXG4gICAgaWYgKHRoaXMuX3RleHQpIHtcclxuICAgICAgdGhpcy5fdGV4dC5zdHlsZS5maWxsID0gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IFRleHRDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmOiB0aGlzLnJlZixcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxyXG4gICAgICBwcm9wczogdGhpcy5fcHJvcHMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmFwaGljcywgVGV4dCwgVGV4dFN0eWxlLCBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExBQkVMIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBwcml2YXRlIF9jb2xvcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgcHJpdmF0ZSBfbGFiZWxUZXh0OiBUZXh0O1xyXG4gIHByaXZhdGUgX2xhYmVsID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgcHJpdmF0ZSBfc3R5bGUgPSBuZXcgVGV4dFN0eWxlKHtcclxuICAgIGxldHRlclNwYWNpbmc6IDEsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBmaWxsOiBcIiNBMkEzQTdcIixcclxuICAgIHdvcmRXcmFwOiB0cnVlLFxyXG4gICAgd29yZFdyYXBXaWR0aDogMTAwLFxyXG4gICAgbGluZUpvaW46IFwicm91bmRcIixcclxuICB9KTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQgPSBuZXcgVGV4dChcIlwiLCB0aGlzLl9zdHlsZSk7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQueCA9IDE2O1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0LnkgPSA0O1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYWJlbCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsVGV4dCk7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhdygpIHtcclxuICAgIHRoaXMuX2xhYmVsLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9sYWJlbC5iZWdpbkZpbGwodGhpcy5fY29sb3IpO1xyXG4gICAgdGhpcy5fbGFiZWwuZHJhd1JlY3QoMCwgMCwgNiwgdGhpcy5fbGFiZWxUZXh0LmhlaWdodCArIDEwKTtcclxuICAgIHRoaXMuX2xhYmVsLmVuZEZpbGwoKTtcclxuICAgIHRoaXMuX2xhYmVsLmxpbmVTdHlsZSgxLCB0aGlzLl9jb2xvciwgMC41KTtcclxuICAgIHRoaXMuX2xhYmVsLmJlZ2luRmlsbCgweDAwMDAwMCwgMSk7XHJcbiAgICB0aGlzLl9sYWJlbC5kcmF3UmVjdChcclxuICAgICAgNixcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5fbGFiZWxUZXh0LndpZHRoICsgMjAsXHJcbiAgICAgIHRoaXMuX2xhYmVsVGV4dC5oZWlnaHQgKyAxMFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2xhYmVsLmVuZEZpbGwoKTtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihjb2xvcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgYWNjID0gMDtcclxuICAgIHRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICBpZiAoYWNjIDwgMjApIHtcclxuICAgICAgICBhY2MgKz0gMTtcclxuICAgICAgICB0aGlzLl90ZXh0ICs9IHM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjID0gMDtcclxuICAgICAgICB0aGlzLl90ZXh0ICs9IFwiIFwiO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICAgIHRoaXMuX2xhYmVsVGV4dC50ZXh0ID0gdGhpcy5fdGV4dDtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUsIENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vYmFzZS5lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTUVOVSBleHRlbmRzIENvbnRhaW5lciB7XHJcbiAgcHJpdmF0ZSBkZWxldGU6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwiZGVsZXRlQlROXCIpKTtcclxuICBwcml2YXRlIGNvcHk6IFNwcml0ZSA9IG5ldyBTcHJpdGUoVGV4dHVyZS5mcm9tKFwiY29weUJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBwb2ludDogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJwb2ludEJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJzZXR0aW5nc0JUTlwiKSk7XHJcbiAgcHJpdmF0ZSB1cDogU3ByaXRlID0gbmV3IFNwcml0ZShUZXh0dXJlLmZyb20oXCJ1cEJUTlwiKSk7XHJcbiAgcHJpdmF0ZSBkb3duOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbShcImRvd25CVE5cIikpO1xyXG4gIHByaXZhdGUgZWw6IEJhc2U7XHJcbiAgY29uc3RydWN0b3IoZWw6IEJhc2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcblxyXG4gICAgdGhpcy5wb2ludC5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMuZGVsZXRlLmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5jb3B5LmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5zZXR0aW5ncy5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgIHRoaXMudXAuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmRvd24uYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLnBvaW50LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVsZXRlLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29weS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNldHRpbmdzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudXAuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5kb3duLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMucG9pbnQuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmRlbGV0ZS5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29weS5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLnVwLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kb3duLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMucG9pbnQub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMucG9pbnQpKTtcclxuICAgIHRoaXMucG9pbnQub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLnBvaW50KSk7XHJcbiAgICB0aGlzLmRlbGV0ZS5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHRoaXMuaG92ZXIodGhpcy5kZWxldGUpKTtcclxuICAgIHRoaXMuZGVsZXRlLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy5kZWxldGUpKTtcclxuICAgIHRoaXMuY29weS5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuY29weSkpO1xyXG4gICAgdGhpcy5jb3B5Lm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLmNvcHkpKTtcclxuICAgIHRoaXMuc2V0dGluZ3Mub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB0aGlzLmhvdmVyKHRoaXMuc2V0dGluZ3MpKTtcclxuICAgIHRoaXMuc2V0dGluZ3Mub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHRoaXMudW5ob3Zlcih0aGlzLnNldHRpbmdzKSk7XHJcbiAgICB0aGlzLnVwLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLnVwKSk7XHJcbiAgICB0aGlzLnVwLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB0aGlzLnVuaG92ZXIodGhpcy51cCkpO1xyXG4gICAgdGhpcy5kb3duLm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4gdGhpcy5ob3Zlcih0aGlzLmRvd24pKTtcclxuICAgIHRoaXMuZG93bi5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4gdGhpcy51bmhvdmVyKHRoaXMuZG93bikpO1xyXG5cclxuICAgIHRoaXMucG9pbnQub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLmFwcC5vZmZzZXQgPSB7XHJcbiAgICAgICAgeDogdGhpcy5lbC5hcHAuc2NyZWVuLndpZHRoIC8gMiAtIHRoaXMuZWwuY29udGFpbmVyLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogdGhpcy5lbC5hcHAuc2NyZWVuLmhlaWdodCAvIDIgLSB0aGlzLmVsLmNvbnRhaW5lci5wb3NpdGlvbi55LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kZWxldGUub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsLmFwcC5lbGVtZW50c1NlcnZpY2UucmVtb3ZlKHRoaXMuZWwucmVmKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29weS5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuYXBwLnNldENvcHkoKTtcclxuICAgICAgdGhpcy5lbC5hcHAucGFzdGUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51cC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuekluZGV4ICs9IDE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG93bi5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwuekluZGV4IC09IDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvcHkueSA9IDA7XHJcbiAgICB0aGlzLnNldHRpbmdzLnkgPSB0aGlzLnBvaW50LmhlaWdodDtcclxuICAgIHRoaXMuZGVsZXRlLnkgPSB0aGlzLnBvaW50LmhlaWdodCAqIDI7XHJcbiAgICB0aGlzLnBvaW50LnkgPSAwO1xyXG4gICAgdGhpcy5wb2ludC54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy51cC55ID0gdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLnVwLnggPSAtdGhpcy5wb2ludC5oZWlnaHQ7XHJcbiAgICB0aGlzLmRvd24ueSA9IHRoaXMucG9pbnQuaGVpZ2h0ICogMjtcclxuICAgIHRoaXMuZG93bi54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgaG92ZXIoZTogU3ByaXRlKSB7XHJcbiAgICBlLnNjYWxlLnNldCgwLjksIDAuOSk7XHJcbiAgfVxyXG4gIHVuaG92ZXIoZTogU3ByaXRlKSB7XHJcbiAgICBlLnNjYWxlLnNldCgxLCAxKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMucG9pbnQpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmRlbGV0ZSk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY29weSk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnVwKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kb3duKTtcclxuICB9XHJcbiAgb3BlbigpIHtcclxuICAgIGlmICh0aGlzLmVsLmFwcC5lZGl0KSB7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wb2ludCk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kZWxldGUpO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuY29weSk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy51cCk7XHJcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kb3duKTtcclxuICAgICAgdGhpcy5wb2ludC54ID0gLXRoaXMucG9pbnQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLnBpdm90LnNldCh0aGlzLnBvaW50LmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC0gMjApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBvaW50KTtcclxuICAgICAgdGhpcy5wb2ludC54ID0gMDtcclxuICAgICAgdGhpcy5waXZvdC5zZXQoMCwgMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnpJbmRleCA9IHRoaXMuZWwuYXBwLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLmVsLngsIHRoaXMuZWwueSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTUFJJVEUgZXh0ZW5kcyBDb250YWluZXIge1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xyXG4gIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX29mZnNldCA9IDEwO1xyXG4gICAgdGhpcy5zd2luZygpO1xyXG4gIH1cclxuXHJcbiAgc3dpbmcoKSB7XHJcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgd2luZG93Lm9pcy50aWNrZXIuYWRkKChkKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPj0gdGhpcy5fb2Zmc2V0KSBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPD0gMCkgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKGZsYWcpIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi55ICs9IGQgLyA1O1xyXG4gICAgICAgIGVsc2UgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgLT0gZCAvIDU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRleHR1cmUodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuICAgIHRoaXMucGl2b3Quc2V0KHRoaXMuX3Nwcml0ZS53aWR0aCAvIDIsIDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQ29udGFpbmVyLCBMb2FkZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gXCIuL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vZWxlbWVudHMvYmFzZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tIFwiLi9lbGVtZW50cy9iYWNrZ3JvdW5kLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9jb21wb25lbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IGJhc2VBc3NldHMgfSBmcm9tIFwiLi9hc3NldHMvYmFzZVwiO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBvaXM6IEFwcDtcclxuICB9XHJcbiAgaW50ZXJmYWNlIENvbnRhaW5lciB7XHJcbiAgICBpbnRlcmFjdGl2ZTogYm9vbGVhbjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIEFwcGxpY2F0aW9uIHtcclxuICBwdWJsaWMgb2Zmc2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICBwdWJsaWMgZWxlbWVudHNTZXJ2aWNlID0gbmV3IEVsZW1lbnRzU2VydmljZSh0aGlzKTtcclxuICBwdWJsaWMgY29uZmlnU2VydmljZSA9IG5ldyBDb25maWdTZXJ2aWNlKHRoaXMpO1xyXG4gIHB1YmxpYyBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEJhc2U7XHJcbiAgcHVibGljIGNvcHk6IEJhc2U7XHJcbiAgcHVibGljIGxvYWRlcjogTG9hZGVyO1xyXG4gIHByaXZhdGUgZGl2OiBFbGVtZW50O1xyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kO1xyXG4gIHB1YmxpYyBfZWRpdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIG1vdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBldmVudHM6IHtcclxuICAgIHNlbGVjdDogKChlbDogQmFzZSkgPT4gdm9pZClbXTtcclxuICB9ID0ge1xyXG4gICAgc2VsZWN0OiBbXSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAweDAwMDAwMCxcclxuICAgICAgcmVzb2x1dGlvbjogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMC45LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKCF0aGlzLmRpdikge1xyXG4gICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgIHRoaXMubG9hZGVyID0gTG9hZGVyLnNoYXJlZDtcclxuICAgIHRoaXMuY29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5rZXlib2FyZCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNpemluZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGtleWJvYXJkKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZWRpdCAmJiBlLmNvZGUgPT09IFwiRGVsZXRlXCIgJiYgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlbW92ZSh0aGlzLnNlbGVjdGVkLnJlZik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlDXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb3B5KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlWXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuY29weSkge1xyXG4gICAgICAgIHRoaXMucGFzdGUoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS5jb2RlID09PSBcIktleVpcIiAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UudW5kbygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0Q29weSgpIHtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuc2VsZWN0ZWQ7XHJcbiAgfVxyXG4gIHBhc3RlKCkge1xyXG4gICAgdGhpcy5jb3B5ID0gdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKHRoaXMuY29weS50eXBlLCB7XHJcbiAgICAgIC4uLih0aGlzLmNvcHkuY29uZmlnIGFzIENvbXBvbmVudENvbmZpZyksXHJcbiAgICAgIHg6IHRoaXMuY29weS54ICsgMTAwLFxyXG4gICAgICByZWY6IHRoaXMuY29weS5yZWYgKyBEYXRlLm5vdygpLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICB9XHJcblxyXG4gIGxvYWQoY29uZmlnOiBDb25maWcsIGNiOiAob2lzOiBBcHApID0+IHZvaWQpIHtcclxuICAgIGJhc2VBc3NldHMuZm9yRWFjaCgoc3ByaXRlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVyLmFkZChzcHJpdGUubmFtZSwgc3ByaXRlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcuYXNzZXRzLmZvckVhY2goKHNwcml0ZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlci5hZGQoc3ByaXRlLm5hbWUsIHNwcml0ZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2FkZXIubG9hZCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgIHRoaXMuY29uZmlnU2VydmljZS5kbygpO1xyXG4gICAgICBjYih0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNpemluZygpIHtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMudmlldy53aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLnZpZXcuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNjcmVlbi53aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB0aGlzLnNjcmVlbi5oZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHRoaXMuYmFja2dyb3VuZC50aWxlLndpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHRoaXMuYmFja2dyb3VuZC50aWxlLmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbmZpZyhjb25maWc6IENvbmZpZykge1xyXG4gICAgdGhpcy5vZmZzZXQgPSBjb25maWcub2Zmc2V0O1xyXG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kLnRpbGUudGlsZVBvc2l0aW9uLnggPSBjb25maWcub2Zmc2V0Lng7XHJcbiAgICAvLyB0aGlzLmJhY2tncm91bmQudGlsZS50aWxlUG9zaXRpb24ueSA9IGNvbmZpZy5vZmZzZXQueTtcclxuICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLnJlZnMgPSB7fTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICBjb25maWcucGxhbmVzLmZvckVhY2goKHBsYW5lKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcInBsYW5lXCIsIHBsYW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1NlcnZpY2UuYWRkKFwibGluZVwiLCBsaW5lKTtcclxuICAgIH0pO1xyXG4gICAgY29uZmlnLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNTZXJ2aWNlLmFkZChcImNvbXBvbmVudFwiLCBjb21wb25lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25maWcudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzU2VydmljZS5hZGQoXCJ0ZXh0XCIsIHRleHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQoZWw6IEJhc2UpIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkgdGhpcy5fc2VsZWN0ZWQudW5zZWxlY3QoKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1NlcnZpY2UucmVmcztcclxuICB9XHJcblxyXG4gIHNldCBlZGl0KGVkaXQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2VkaXQgPSBlZGl0O1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5tZW51LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZWRpdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lZGl0O1xyXG4gIH1cclxuXHJcbiAgb24oZXZlbnQ6IGtleW9mIEFwcFtcImV2ZW50c1wiXSwgY2I6IChlbDogQmFzZSkgPT4gdm9pZCkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgd2luZG93Lm9pcyA9IG5ldyBBcHAoc2VsZWN0b3IpO1xyXG4gIHJldHVybiB3aW5kb3cub2lzO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcbiAgcHVibGljIGFwcDogQXBwO1xyXG4gIHB1YmxpYyBoaXN0b3J5OiB7IHNlbGVjdGVkOiBzdHJpbmcgfCBudWxsOyBjb25maWc6IENvbmZpZyB9W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgZG8oKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaGlzdG9yeS5sZW5ndGggPD0gMjAgJiZcclxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpICE9PVxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0pXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnB1c2goe1xyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuYXBwLnNlbGVjdGVkPy5yZWYsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5kbygpIHtcclxuICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID49IDIpIHtcclxuICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xyXG4gICAgICBjb25zdCBwb2ludCA9IHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZyA9IHBvaW50LmNvbmZpZztcclxuICAgICAgLy8gaWYgKHBvaW50LnNlbGVjdGVkKSB7XHJcbiAgICAgIC8vICAgdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnJlZnNbcG9pbnQuc2VsZWN0ZWRdLnNlbGVjdCgpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvZmZzZXQ6IHtcclxuICAgICAgICB4OiB0aGlzLmFwcC5vZmZzZXQueCxcclxuICAgICAgICB5OiB0aGlzLmFwcC5vZmZzZXQueSxcclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLmNvbXBvbmVudHMsXHJcbiAgICAgIGxpbmVzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UubGluZXMsXHJcbiAgICAgIHBsYW5lczogdGhpcy5hcHAuZWxlbWVudHNTZXJ2aWNlLnBsYW5lcyxcclxuICAgICAgdGV4dHM6IHRoaXMuYXBwLmVsZW1lbnRzU2VydmljZS50ZXh0cyxcclxuICAgICAgYXNzZXRzOiB0aGlzLmFwcC5lbGVtZW50c1NlcnZpY2UuYXNzZXRzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgQ09NUE9ORU5UIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2NvbXBvbmVudC5lbGVtZW50XCI7XHJcbmltcG9ydCB7IExJTkUgfSBmcm9tIFwiLi4vZWxlbWVudHMvbGluZS5lbGVtZW50XCI7XHJcbmltcG9ydCB7IFBMQU5FIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3BsYW5lLmVsZW1lbnRcIjtcclxuaW1wb3J0IHsgVEVYVCB9IGZyb20gXCIuLi9lbGVtZW50cy90ZXh0LmVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRDb25maWcsXHJcbiAgQ29tcG9uZW50UHJvcHMsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMaW5lQ29uZmlnLCBMaW5lUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9saW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQbGFuZUNvbmZpZywgUGxhbmVQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYW5lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0Q29uZmlnLCBUZXh0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZXh0LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRzU2VydmljZSB7XHJcbiAgcHVibGljIHJlZnM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgfSA9IHt9O1xyXG4gIHB1YmxpYyBhcHA6IEFwcDtcclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgY29uZmlnOiBDb21wb25lbnRDb25maWcgfCBUZXh0Q29uZmlnIHwgUGxhbmVDb25maWcgfCBMaW5lQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMucmVmc1tjb25maWcucmVmXSkge1xyXG4gICAgICBsZXQgZWw6IENPTVBPTkVOVCB8IExJTkUgfCBURVhUIHwgUExBTkU7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb21wb25lbnRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IENPTVBPTkVOVChjb25maWcsIHRoaXMuYXBwKTtcclxuICAgICAgICAgIGVsLnByb3BzID0gY29uZmlnLnByb3BzIGFzIENvbXBvbmVudFByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFRFWFQoY29uZmlnLCB0aGlzLmFwcCk7XHJcbiAgICAgICAgICBlbC5wcm9wcyA9IGNvbmZpZy5wcm9wcyBhcyBUZXh0UHJvcHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicGxhbmVcIjpcclxuICAgICAgICAgIGVsID0gbmV3IFBMQU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgUGxhbmVQcm9wcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XHJcbiAgICAgICAgICBlbCA9IG5ldyBMSU5FKGNvbmZpZywgdGhpcy5hcHApO1xyXG4gICAgICAgICAgZWwucHJvcHMgPSBjb25maWcucHJvcHMgYXMgTGluZVByb3BzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmc1tjb25maWcucmVmXSA9IGVsO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzW2NvbmZpZy5yZWZdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgSW4gc2NoZW1hIGNvbmZpZ3VyYXRpb24gbGluayBcIiR7XHJcbiAgICAgICAgICBjb25maWcucmVmXHJcbiAgICAgICAgfVwiIGlzIGR1cGxpY2F0ZWQuICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX1cImBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUocmVmOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xyXG4gICAgICB0aGlzLmFwcC5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5yZWZzW3JlZl0uY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5hcHAuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICBkZWxldGUgdGhpcy5yZWZzW3JlZl07XHJcbiAgICAgIHRoaXMuYXBwLmNvbmZpZ1NlcnZpY2UuZG8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudHNPZlR5cGUodHlwZTogXCJjb21wb25lbnRcIiB8IFwibGluZVwiIHwgXCJ0ZXh0XCIgfCBcInBsYW5lXCIpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnJlZnMpXHJcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNba2V5XS50eXBlID09PSB0eXBlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChrZXkpID0+IHRoaXMucmVmc1trZXldLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcG9uZW50cygpOiBDb21wb25lbnRDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcImNvbXBvbmVudFwiKSBhcyBDb21wb25lbnRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBsaW5lcygpOiBMaW5lQ29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJsaW5lXCIpIGFzIExpbmVDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0cygpOiBUZXh0Q29uZmlnW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNPZlR5cGUoXCJ0ZXh0XCIpIGFzIFRleHRDb25maWdbXTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFuZXMoKTogUGxhbmVDb25maWdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c09mVHlwZShcInBsYW5lXCIpIGFzIFBsYW5lQ29uZmlnW107XHJcbiAgfVxyXG5cclxuICBnZXQgYXNzZXRzKCk6IHsgbmFtZTogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfVtdIHtcclxuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhjb21wb25lbnQucHJvcHMubmFtZSkpIHtcclxuICAgICAgICBrZXlzLnB1c2goY29tcG9uZW50LnByb3BzLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBrZXlzLm1hcCgobmFtZSkgPT4gKHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGRhdGE6IHV0aWxzLlRleHR1cmVDYWNoZVtcInNlcnZlclwiXS5iYXNlVGV4dHVyZS5yZXNvdXJjZS51cmwsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9