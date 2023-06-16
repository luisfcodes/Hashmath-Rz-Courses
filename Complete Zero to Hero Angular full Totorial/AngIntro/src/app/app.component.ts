import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage:string = 'Message coming from parent component';
  message!:string
  fromChildOutput!:string;

  @ViewChild(PostComponent) childComponent:any;

  ngAfterViewInit() {
    console.log(this.childComponent);
    this.message = this.childComponent.childMessage;
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event;
  }
}
