import {Component, Input}				from '@angular/core';

@Component({
	selector:				'img-gallery',
	template:				`
		<div id="gallery" class="container">
			<div class="row gallery">
				<h2 class="page-title">{{gallery.boldTitle}}<span class="text-light">{{gallery.lightTitle}}</span></h2>
				<img *ngFor="let image of gallery.imgs" [src]="image.src" (click)="showImage($event)">
			</div>
		</div>
		<div class="light-box" *ngIf="showLightBox" (click)="hideImage()">
				<img [src]="currentImage">
		</div>
	`,
	styles:					[`
		.gallery img {display: block; max-height: 150px; width: auto; height: auto; float: left; margin: 10px 10px;}
		.gallery img:hover {cursor: pointer;}
		.container {background-color: white; margin: 0; width: 100%;}
		.row {padding: 40px;}
		.light-box {width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: black; z-index: 1000;}
		.light-box img {position: absolute; max-width: 90%; max-height: 90%; height: auto; width: auto; top: 50%; transform: translate(-50%, -50%); left: 50%;}
		.image-container {position: relative; display: inline-block;}
		.caption {color: white; left: 5px; bottom: 10px;}
	`]
})

export class ImgGallery {
	@Input() gallery;
	showLightBox = false;

	showImage = (e) => {
		this.showLightBox = true;
		this.currentImage = e.target.src;
	}
	hideImage = () => {
		this.showLightBox = false;
		this.currentImage = null;
	}
}