import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title:string = 'Post Title';
  postMessage:string = 'Message coming from post component';
  childMessage:string = 'Message coming from child component';
  outputChildMessage: string = 'Message coming from child component Via Output';

  @Input() fromParent!:string;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
