import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() imageData;
  @Output() sendSelectedImgId = new EventEmitter();
  hideComapreBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onImgBtnClick(imageId, btnName) {
    this.hideComapreBtn = !this.hideComapreBtn;
    this.sendSelectedImgId.emit({ id: imageId, btnClicked: btnName });
  }

}
