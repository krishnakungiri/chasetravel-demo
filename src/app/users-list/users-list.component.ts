import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[] = []
  selectedUser: any;
  isModalOpen = false;
  isDeleteModalOpen = false

  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.getUsersList()
  }

  getUsersList() {
    return this.userService.getUsers().subscribe((data: any) => {
      this.users = data.users
    }, (error) => {
      alert("Failed getting users list")
    })
  }

  openUpdateUserModal(user: any) {
    this.selectedUser = { ...user };
    this.isModalOpen = true
  }

  handleUpdateUser(updatedUser: any) {
    const index = this.users.findIndex(user => user.firstname === updatedUser.firstname && user.lastname === updatedUser.lastname);
    if (index > -1) {
      this.users[index] = updatedUser;
    }
    this.isModalOpen = false;
  }

  openDeleteModal(user: any) {
    this.selectedUser = user;
    this.isDeleteModalOpen = true
  }

  handleDeleteUser() {
    this.userService.deleteUser(this.selectedUser.id).subscribe(() => {
      this.users = this.users.filter(user => user !== this.selectedUser);
      this.isDeleteModalOpen = false;
    }, (error) => {
      alert("Failed deleting user")
      this.isDeleteModalOpen = false;
    })
  }
}
