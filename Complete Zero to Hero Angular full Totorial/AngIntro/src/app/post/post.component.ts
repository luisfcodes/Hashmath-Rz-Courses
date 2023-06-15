import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title:string = 'Post Title';
  @Input() fromParent!:string;
  postMessage:string = 'Message coming from post component';
}
