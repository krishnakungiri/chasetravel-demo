import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.createUserForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
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
}
