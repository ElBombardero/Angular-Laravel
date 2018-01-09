import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-detalle-imagen',
  templateUrl: './detalle-imagen.component.html',
  styleUrls: ['./detalle-imagen.component.css']
})
export class DetalleImagenComponent implements OnInit {
  @Input() selectedImage: Image;
  constructor() { }

  ngOnInit() {
  }

}
