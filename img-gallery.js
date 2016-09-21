"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ImgGallery = (function () {
    function ImgGallery() {
        var _this = this;
        this.showLightBox = false;
        this.showImage = function (e) {
            _this.showLightBox = true;
            _this.currentImage = e.target.src;
        };
        this.hideImage = function () {
            _this.showLightBox = false;
            _this.currentImage = null;
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImgGallery.prototype, "gallery", void 0);
    ImgGallery = __decorate([
        core_1.Component({
            selector: 'img-gallery',
            template: "\n\t\t<div id=\"gallery\" class=\"container\">\n\t\t\t<div class=\"row gallery\">\n\t\t\t\t<h2 class=\"page-title\">{{gallery.boldTitle}}<span class=\"text-light\">{{gallery.lightTitle}}</span></h2>\n\t\t\t\t<img *ngFor=\"let image of gallery.imgs\" [src]=\"image.src\" (click)=\"showImage($event)\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"light-box\" *ngIf=\"showLightBox\" (click)=\"hideImage()\">\n\t\t\t\t<img [src]=\"currentImage\">\n\t\t</div>\n\t",
            styles: ["\n\t\t.gallery img {display: block; max-width: 250px; max-height: 150px; width: auto; height: auto; float: left; margin: 10px 10px;}\n\t\t.gallery img:hover {cursor: pointer;}\n\t\t.container {background-color: white; margin: 0; width: 100%;}\n\t\t.row {padding: 40px;}\n\t\t.light-box {width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: black; z-index: 1000;}\n\t\t.light-box img {position: absolute; max-width: 90%; max-height: 90%; height: auto; width: auto; top: 50%; transform: translate(-50%, -50%); left: 50%;}\n\t\t.image-container {position: relative; display: inline-block;}\n\t\t.caption {color: white; left: 5px; bottom: 10px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], ImgGallery);
    return ImgGallery;
}());
exports.ImgGallery = ImgGallery;
//# sourceMappingURL=img-gallery.js.map