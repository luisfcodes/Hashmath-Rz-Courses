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
  imgUrl:string = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
  textIsRed:boolean = true;
  inputText:string | null = 'Valor inicial';

  @ViewChild(PostComponent) childComponent:any;

  ngAfterViewInit() {
    this.message = this.childComponent.childMessage;
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event;
  }

  eventBindingClick(){
    alert('Event binding clicked');
  }

  eventKeyup($event: any){
    this.inputText = $event.target.value;
  }

  eventFiltering(){
    console.log('Enter key pressed');
  }
}
