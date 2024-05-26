import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {
  createUserForm: FormGroup;
  observable1Subscription!: any

  constructor(private userService: UserService, private router: Router) {
    this.createUserForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    const observable1 = new Observable(sub => {
      let counter = 0
      setInterval(() => {
        counter = counter + 1
        sub.next(`Counter value : ${counter}`)
      }, 1000)
      // sub.next("Value2")
      // sub.next("Value3")
      // sub.next("Value4")
    })

    // this.observable1Subscription = observable1.subscribe(result => {
    //   console.log("result :", result);
    // })
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      this.userService.createUser(this.createUserForm.value).subscribe((data) => {
        alert("User added successfully")
        this.router.navigate(['/users-list']);
      }, (err) => {
        alert("Failed adding user")
      })
    }
  }

  ngOnDestroy(): void {
    // this.observable1Subscription.unsubscribe()
  }
}
