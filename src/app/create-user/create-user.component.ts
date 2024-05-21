import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(createUserForm: any) {
    console.log(createUserForm.value);

    this.userService.createUser(createUserForm.value).subscribe((data) => {
      console.log("User added successfully ", data);
      alert("User added successfully")
    }, (err) => {
      console.log("Failed adding user ", err);
      alert("Failed adding user")
    })
  }



}
