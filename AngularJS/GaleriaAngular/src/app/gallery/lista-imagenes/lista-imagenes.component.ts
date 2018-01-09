import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';
import {Observable} from 'rxjs/RX';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent implements OnInit {
  images: Observable<Image[]>;
  selectedImagen: Image;

  constructor( private imageservice: ImageService) { }

  ngOnInit() {
    this.images = this.imageservice.getImages();
  }
  onselect(image: Image) {
    this.selectedImagen = image;
  }

}
