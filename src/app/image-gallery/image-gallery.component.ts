import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/280x150/e91e63/ffffff?text=1',
    'https://via.placeholder.com/280x150/e91e63/ffffff?text=2',
    'https://via.placeholder.com/280x150/e91e63/ffffff?text=3',
    'https://via.placeholder.com/280x150/e91e63/ffffff?text=4'
  ];
  constructor() { }

  ngOnInit() {
  }

}
