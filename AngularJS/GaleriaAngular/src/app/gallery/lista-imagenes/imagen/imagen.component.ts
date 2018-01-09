import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../models/image';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  // tslint:disable-next-line:max-line-length
  styles: ['img{box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75); margin-bottom:20px; height:240px; } img:hover {-webkit-filter: grayscale(1);} a:hover {cursor:pointer;}']
})
export class ImagenComponent implements OnInit {
  @Input() imagenInyectada: Image;
  constructor() { }

  ngOnInit() {
  }

}
