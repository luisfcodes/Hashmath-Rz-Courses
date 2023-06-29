import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { Router } from '@angular/router';

interface Post {
  id: number;
  postTitle: string;
}

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
  twoWayDataBindingText!:string;

  //*ngFor -> Structural Directive
  postArray:Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
  objArray:Array<Post> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' }
  ];

  //*ngIf -> Structural Directive
  emptyArray:Array<Post> = [];

  //*ngSwitchCase -> Structural Directive
  stepForm!:string

  //ngStyle -> Attribute Directive
  isActiveNgStyle:boolean = true;

  //ngClass -> Attribute Directive
  isActiveNgClass:boolean = true;

  //uppercase and lowercase pipe
  textUppercase:string = 'Texto em uppercase';
  textLowercase:string = 'TEXTO EM LOWERCASE';

  //number and decimal pipe
  numberPipe:number = 234566;
  decimalPipe:number = 1.234566;

  //currency pipe
  currencyPipe:number = 1234;

  //date pipe
  datePipe:Date = new Date();

  //json pipe
  jsonPipe:object = { name: 'John', age: 30, city: 'New York' };

  //percent pipe
  percentPipe:number = 0.5;

  //slice pipe
  slicePipe:Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']

  //custom pipe from scratch
  userDetails:{ name: string; city: string; countryCode: string } = {
    name: "John",
    city: "New York",
    countryCode: "US"
  }

  //custom pipe with arguments
  dummyText:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

  constructor(private router: Router) { }

  @ViewChild(PostComponent) childComponent:any;

  ngAfterViewInit() {
    this.message = this.childComponent.childMessage;
  }

  // receiveMessage($event: string) {
  //   this.fromChildOutput = $event;
  // }

  // eventBindingClick(){
  //   alert('Event binding clicked');
  // }

  // eventKeyup($event: any){
  //   this.inputText = $event.target.value;
  // }

  // eventFiltering(){
  //   console.log('Enter key pressed');
  // }

  // eventFilteringUsername(username: string){
  //   console.log(username);
  // }

  // *ngFor -> Structural Directive
  // addNewNgFor(){
  //   this.objArray.push({ id: this.objArray.length + 1, postTitle: `Post ${this.objArray.length + 1}` });
  // }

  // removeItemNgFor(id: number){
  //   this.objArray = this.objArray.filter((post) => post.id !== id);
  // }

  //*ngIf -> Structural Directive
  // addNewNgIf(){
  //   this.emptyArray.push({ id: this.emptyArray.length + 1, postTitle: `Post ${this.emptyArray.length + 1}` });
  // }

  // removeItemNgIf(id: number){
  //   this.emptyArray = this.emptyArray.filter((post) => post.id !== id);
  // }

  //*ngSwitchCase -> Structural Directive
  handleOnClickNgSwitchCase(step: string){
    this.stepForm = step;
  }

  onSubmit(){
    this.router.navigate(['/dashboard'])
  }
}
