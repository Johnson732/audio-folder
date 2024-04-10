import { ServiceService } from './../service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css'],
})
export class InstaComponent {
  constructor(private service:ServiceService){}
  url: string = ''
  data:string=''
  get1(url: string) {
    console.log("before")
    this.service.getdata(url).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }
}
