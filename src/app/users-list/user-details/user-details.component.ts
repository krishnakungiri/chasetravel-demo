import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() user!: IUser;
  @Input() color!: string;
  @ContentChild("child") contentChild!: ElementRef;
  subjectValue!: string
  behaviorSubjectValue!: string

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //subject
    this.userService.notificationSubject.subscribe(data => {
      this.subjectValue = data
    })

    //behavior subject
    this.userService.notificationBehaviorSubject.subscribe(data => {
      this.behaviorSubjectValue = data
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("changes :", changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheckValue : ", this.user);
  }

  ngAfterContentInit(): void {
    console.log("contentChild --:", this.contentChild);
    // setTimeout(() => {
    this.contentChild.nativeElement.setAttribute("style", `color:${this.color}`)
    // }, 2000)
  }

  // ngAfterViewInit(): void {
  //   console.log("contentChild --:", this.contentChild);
  //   setTimeout(() => {
  //     this.contentChild.nativeElement.setAttribute("style", `color:${this.color}`)
  //   }, 2000)
  // }

  ngAfterContentChecked(): void {
    this.contentChild.nativeElement.setAttribute("style", `color:${this.color}`)
  }

  ngOnDestroy(): void {
    this.userService.notificationSubject.unsubscribe();
    this.userService.notificationBehaviorSubject.unsubscribe();
  }
}
