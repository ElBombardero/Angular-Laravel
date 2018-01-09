import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-image-create',
  templateUrl: './admin-image-create.component.html',
  styleUrls: ['./admin-image-create.component.css']
})
export class AdminImageCreateComponent implements OnInit {

  constructor(private ImageService: ImageService, private router: Router) { }

  ngOnInit() {
  }

  createImage(createImageform) {
    this.ImageService.addImage(createImageform)
    .subscribe(
      image => {
        console.log(createImageform);
        this.router.navigate(['admin/images']);
      },
      error => console.log(<any>error)
    );
  }

}
