import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

  userMsg:string=''
  @Output() toParent=new EventEmitter<string>();

  func(msg:string){
    this.toParent.emit(msg);
  }
}
